const _my = require("../../__antmove/api/index.js")(my);
const app = getApp();
Page({
  data: {
    coms:[],
    name:'',
    set_in:false,
    data:'',
    date:'',
    coms:'',
    check:false,
    com:'',
    ad:false
  },
  onLoad() {},
  async onShow() {
    var set_in = _my.getStorageSync("set_in");
    var name = _my.getStorageSync("name");
    console.log("数据",set_in, name);
    await this.setData({
      set_in: set_in,
      name: name
    })
    await this.update();
    await this.checkad();
  },
  async update(){
    await this.updateTime();
    await this.getAllComs();
  },
  async updateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedTime = `${year}/${month}/${day} ${hours}:${minutes}`;
    // 更新页面数据
    this.setData({
      date: formattedTime,
    });
  },
  async check(name) {
    if(this.data.name == name){
      this.setData({
        check: true
      })
      return;
    }
    var res;
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"CheckAdmin",
            name: this.data.name
        }
      });
    } catch (error) {
    console.log("查询用户异常");
    console.log(error);
    }
    if(res.result.data.length != 0) {
      this.setData({
        check: true
      })
      return;
    }
    this.setData({
      check: false
    })
  },
  async checkad() {
    var res;
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"CheckAdmin",
            name: this.data.name
        }
      });
    } catch (error) {
    console.log("查询用户异常");
    console.log(error);
    }
    if(res.result.data.length != 0) {
      this.setData({
        ad: true
      })
      return;
    }
    this.setData({
      ad: false
    })
  },
  bindInput(e){
    this.setData({
      data:e.detail.value
   })
  },
  async deleteComs(e){
    await this.check(e.target.dataset.name, 1);
    if(this.data.check == false){
      my.showToast({
        content:'不是您的帖子且您不是管理员',
        duration:2000
      });
      return ;
    }
    my.showLoading({
      content: '请等待...',
      delay: '10',
    });
    var res
    try {
        res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"DelCom",
            id: e.target.dataset.id,
        }
      });
    } catch (error) {
      console.log("删除异常");
      console.log(error)
    }
   console.log("删除成功！")
   await this.update();
   my.hideLoading();
  },
  async getAllComs(){
    var res
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"GetCom",
        }
      });
    } catch (error) {
      console.log("查询用户异常");
      console.log(error);
    } 
    if(!res||!res.result.data){
      return;
    }
    this.setData({
      coms:res.result.data,
    })
  },
  async addCom(){
    await this.update();
    await this.searchCom();
    if(this.data.com.length > 0){
      my.showToast({
        content:'发帖开始时间间隔太短或已存在该帖子！',
        duration:2000
      });
      return;
    }
    my.showLoading({
      content: '请等待...',
      delay: '10',
    });
    try {
      await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"addCom",
            name:this.data.name,
            date:this.data.date,
            data:this.data.data
        }
      });
    } catch (error) {
       console.log(error);
    }
    my.hideLoading();
  },
  async searchCom(){
    var res
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"searchCom",
            date: this.data.date,
            name: this.data.name
        }
      });
    } catch (error) {
    console.log("查询异常");
    console.log(error);
    } 
    if(!res||!res.result.data){
      return;
    }
    console.log(res.result.data);
    this.setData({
      com:res.result.data
    });  
  },
});
