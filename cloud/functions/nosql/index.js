const cloud = require('@alipay/faas-server-sdk');
      cloud.init();
const db = cloud.database();
exports.main = async (event, context) => {

  var action = event.action;
  const collectionName = event.name;
  if(collectionName == 'users'){
    console.log("非法用户名");
    return ;
  }
  //测试代码会自动创建集合，真实项目应该提前创建好
  try {
    await db.createCollection(collectionName);  
  } catch (error) {
     console.log("collectionName结合已经存在，无需再进行创建");
  }
  //添加用户，如果逻辑比较复杂，可以单独再写一个 addUser 函数
  if(action == 'addUser'){
    await db.collection(collectionName).add({
      data: {
        date: event.date,
        length: event.length
      },
    });
    //添加用户成功
    return {"message": "创建记录成功!", success:true};
  }else if(action == "searchUser"){
    const user = await db.collection(collectionName)
    .where({
      date: event.date
    })
    .get();
     //查询用户成功
     return {"message": "查询记录成功!", success:true , data:user};
  }else if(action == "getAllUsers"){
    //查询全部用户，默认返回100条，生成环境应该进行分页
    const users = await db.collection(collectionName).orderBy('date', cloud.Sort.DESC).get();
    const number = await db.collection(collectionName).count();
    if(number >= 99){
      await db.collection(collectionName).remove();
      return {"message": "记录已经存满，清空信息", success:false};
    }
     //查询用户成功
     return {"message": "查询记录成功!", success:true , data:users};
  
  }else if(action == "deleteUser"){
      await db.collection(collectionName).doc(event.id).remove();
      //删除用户成功
     return {"message": "删除记录成功!", success:true};
  }else if(action == "addOne"){
    await db.collection('users').add({
      data: {
        name: event.name,
        pass: event.pass
      },
    });
    return {"message": "创建用户成功!", success:true};
  }else if(action == "findUser"){
     try {
      const user = await db.collection('users')
      .where({
        name: event.name
      })
      .get();
     //查询用户成功
      return {"message": "查询记录成功!", success:true , data:user};
    } catch (err) {
      return { success: false, msg: `查询失败 - ${err.toString()}` };
    }
  }else if(action == "check"){
    try {
     const user = await db.collection('users')
     .where({
       name: event.name,
       pass: event.pass
     })
     .get();
    //查询用户成功
     return {"message": "查询记录成功!", success:true , data:user};
   } catch (err) {
     return { success: false, msg: `查询失败 - ${err.toString()}` };
   }
 }
  return {"message": "操作未识别!", success:false};
};