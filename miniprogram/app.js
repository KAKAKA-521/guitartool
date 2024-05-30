import "./__antmove/component/componentClass.js";
const _my = require("./__antmove/api/index.js")(my);
//app.js
App({
  start_time: 2,
  saved: false,
  async onLaunch(options) {
    console.log("小程序启动")
    try {
      //初始化function调用，修改为自己的环境 ID
      const context = await my.cloud.createCloudContext({
        env: 'env-00jx4xtx2m1g'
      });
      await context.init();
      my.fncontext = context;
      console.log("初始化函数上下文成功");

    } catch (error) {
      console.log("初始化函数上下文失败");
      console.log(error);
    }
    


    //使用function的方式进行初始化，两中方式取其中一个方式就可以，用户可以使用自己合适的方式。
    my.getCloudContext  = async function(){
      if(my.fncontext){
        return  my.fncontext;
      }else{
        const context = await my.cloud.createCloudContext({
          env: 'env-00jx4xtx2m1g'
        });
        
        await context.init();
        my.fncontext = context;
      }
      return my.fncontext;
    }

    //调用API从本地缓存中获取数据
    var logs = _my.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    _my.setStorageSync("logs", logs);
  },
  getServerTime(){
    my.getServerTime({
      success: (res) => {
        return res.time;
      }
    });
  }
});
