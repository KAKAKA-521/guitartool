const _my = require("../../__antmove/api/index.js")(my);
const app = getApp();
Page({
  data: {
    reg: '',
    online: '',
    set_in: false,
    pass: '',
    name:"",
    users:[],
    user: [],
    end : '',
    begin : '',
    length : 0,
    date:'',
    total_length: 0,
    canvasWidth: 300, // 画布宽度
    canvasHeight: 200, // 画布高度
    canvasId: 'lineChart', // canvas ID
    startX: 0, // 坐标系起始点 X 坐标
    startY: 100, // 坐标系起始点 Y 坐标
    endX: 100, // 坐标系终点 X 坐标
    endY: 0, // 坐标系终点 Y 坐标
    stepX: 0, // X 轴每个刻度的距离
    stepY: 0, // Y 轴每个刻度的距离
    maxY: 0, // Y 轴最大值
    minY: 0, // Y 轴最小值
    maxNumber: 0,
    minNumber: 0,
    baseVisible: false,
    moreVisible: false,
    swiperVisible: false,
    slotVisible: false,
    controlledVisible: false,
    current: 0,
    list: [
        {
            left: -30,
            top: -20,
            imageUrl: "./img/1.png",
            imageMode: 'scaleToFill',
            imageStyle: "width: 450px; height: 350px;"
        },
        {
            left: 17,
            top: 265,
            imageUrl: "./img/2.png",
            imageMode: 'widthFix',
            imageStyle: "width: 380px; height: 200px;"
        },
        {
            left: -10,
            top: 180,
            imageUrl: "./img/3.png",
            imageMode: 'widthFix',
            imageStyle: "width: 380px; height: 350px;"
        },
    ],
  },
  async onLoad() {

  },
  async onShow() {
    const set_in = _my.getStorageSync("set_in");
    const name = _my.getStorageSync("name");
    console.log("数据",set_in, name);
    if(set_in == true){
      await this.setData({
        set_in: set_in,
        name: name
      })
    }
    if(this.data.set_in == true){
      await this.update();
    }
    await this.updateTime();
    this.setData({
      begin : app.start_time
    })
  },
  bindInput(e){
    this.setData({
      name:e.detail.value
   })
  },
  bindInput2(e){
    this.setData({
      pass:e.detail.value
   })
  },
  async getUserInfo() {
    my.getAuthCode({
      scopes: 'auth_user',
      fail: (error) => {
        console.error('getAuthCode', error);
      },
      success: ({
        authCode
      }) => {
        // do login...
        // then
        console.log(`authCode:`, authCode);
        // var context = await my.getCloudContext();
        return my.fncontext.callFunction({
          name: 'AlipayUserInfo',
          data: {
            auth_code: authCode
          },
        }).then(({
          result: userInfo
        }) => {
          console.log(`userInfo:`, userInfo);
          // 将 nick_name 改为 nickName
          userInfo.nickName = userInfo.nick_name;
          delete userInfo.nick_name;
          this.setData({
            userInfo,
            hasUserInfo: true,
          });
          // abridge.alert({
          //   title: JSON.stringify(userInfo), // alert 框的标题
          // });
        }).catch(error => {
          console.error('getAuthUserInfo', error);
        });
      }
    });
  },
  async update(){
    this.clear();
    await this.updateTime();
    // 创建 Date 对象
    const date1 = new Date(this.data.begin);
    const date2 = new Date(this.data.end);
    // 计算两个日期之间的分钟差
    const timeDiffInMilliseconds = Math.abs(date2 - date1);
    const timeDiffInMinutes = Math.floor(timeDiffInMilliseconds / (1000 * 60));
    this.setData({
      length: timeDiffInMinutes,
    });
    await this.getAllUsers();
    this.drawChart(); // 绘制折线图
  },
  async addUser(){
    await this.update();
    await this.searchUser();
    if(this.data.user.length > 0){
      my.showToast({
        content:'记录开始时间间隔太短或已存在该记录！',
        duration:2000
      });
      return;
    }
    if(!this.data.name){
      my.showToast({
        content:'昵称不能为空',
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
            action:"addUser",
            name:this.data.name,
            date:this.data.date,
            length:this.data.length
        }
      });
    } catch (error) {
       console.log(error);
    }
    await this.update();
    my.hideLoading();
    app.saved = false;
  },
  async reg(){
    await this.update();
    await this.searchUser();
    if(this.data.user.length > 0){
      my.showToast({
        content:'已存在该记录',
        duration:2000
      });
      return;
    }
    if(!this.data.name){
      my.showToast({
        content:'昵称不能为空',
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
            action:"addUser",
            name:this.data.name,
            date:this.data.date,
            length:this.data.length
        }
      });
    } catch (error) {
       console.log(error);
    }
    await this.update();
    my.hideLoading();
    this.openTour();
  },
  async getAllUsers(){
    var res
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"getAllUsers",
            name:this.data.name
        }
      });
    } catch (error) {
      console.log("查询用户异常");
      console.log(error);
    } 
    if(!res||!res.result.data){
      return;
    }
    console.log(res.result.data);
    const usersWithNumber = res.result.data.map((user, index) => {
      return {
        number: index + 1, // 添加编号，从1开始
        ...user, // 保留原有的用户数据
      };
    });
    let sum = usersWithNumber.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.length;
    }, 0);
    this.setData({
      users:usersWithNumber,
      total_length: sum
    });
  },
  async deleteUser(e){
    my.showLoading({
      content: '请等待...',
      delay: '10',
    });
    var res
    try {
        res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"deleteUser",
            id: e.target.dataset.id,
            name: this.data.name
        }
      });
    } catch (error) {
      console.log("删除用户异常");
      console.log(error)
    }
    
   console.log("删除用户成功！")
   await this.update();
   my.hideLoading();
  },
  async searchUser(){
    var res
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"searchUser",
            date: this.data.date,
            name: this.data.name
        }
      });
    } catch (error) {
    console.log("查询用户异常");
    console.log(error);
    } 
    if(!res||!res.result.data){
      return;
    }
    console.log(res.result.data);
    this.setData({
      user:res.result.data
    });  
  },
  async updateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    const formattedTimeWithoutSeconds = formattedTime.substring(0, this.data.begin.lastIndexOf(':'));
    // 更新页面数据
    this.setData({
      end: formattedTime,
      date: formattedTimeWithoutSeconds,
    });
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  },
  async reg() {
    var regex = /^[a-zA-Z0-9]+$/;
    if(this.data.name.length < 3){
      my.showToast({
        content:'用户名至少3位！',
        duration:2000
      });
      return;
    }
    if(this.data.pass.length < 6){
      my.showToast({
        content:'密码至少6位！',
        duration:2000
      });
      return;
    }
    if(regex.test(this.data.name) == false){
      my.showToast({
        content:'用户名不规范',
        duration:2000
      });
      return;
    }
    if(regex.test(this.data.pass) == false){
      my.showToast({
        content:'密码不规范',
        duration:2000
      });
      return;
    }
    await this.searchReg();
    if(this.data.reg.data.length != 0){
      my.showToast({
          content:"用户已存在",
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
            action:"addOne",
            name:this.data.name,
            pass:this.data.pass
        }
      });
    } catch (error) {
       console.log(error);
    }
    app.set_in = true;
    this.setData({
      set_in : true
    });
    await this.save();
    my.hideLoading();
    await this.update();
    await this.openTour();
  },
  async online() {
    var regex = /^[a-zA-Z0-9]+$/;
    if(this.data.name.length < 3){
      my.showToast({
        content:'用户名至少3位！',
        duration:2000
      });
      return;
    }
    if(this.data.pass.length < 6){
      my.showToast({
        content:'密码至少6位！',
        duration:2000
      });
      return;
    }
    if(regex.test(this.data.name) == false){
      my.showToast({
        content:'用户名不规范',
        duration:2000
      });
      return;
    }
    if(regex.test(this.data.pass) == false){
      my.showToast({
        content:'密码不规范',
        duration:2000
      });
      return;
    }
    await this.checkR();
    if(this.data.online.data.length == 0){
      my.showToast({
        content:'用户名不存在或密码错误',
        duration:2000
      });
      return ;
    }
    my.showLoading({
      content: '请等待...',
      delay: '10',
    });
    app.set_in = true;
    this.setData({
      set_in : true
    });
    await this.save();
    my.hideLoading();
    await this.update();
    await this.openTour();
  },
  async searchReg() {
    var res;
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"findUser",
            name: this.data.name
        }
      });
    } catch (error) {
    console.log("查询用户异常");
    console.log(error);
    } 
    this.setData({
      reg:res.result,
    })
  },
  async checkR() {
    var res;
    try {
      res = await my.fncontext.callFunction({
        name:"nosql",
        data:{
            action:"check",
            name: this.data.name,
            pass: this.data.pass
        }
      });
    } catch (error) {
    console.log("查询用户异常");
    console.log(error);
    } 
    this.setData({
      online:res.result,
    })
  },
  fresh() {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var url = currentPage.route;
    // 页面跳转，模拟刷新当前页面
    my.reLaunch({
          url: '/' + url
    });
  },
  save(){
    my.setStorage({
      key: "name",
      data: this.data.name
    });
    my.setStorage({
    key: "set_in",
    data: this.data.set_in
    });
  },
  logout(){ 
    this.setData({
      name: "",
      pass: "",
      set_in: false
    })
    my.setStorage({
      key: "name",
      data: this.data.name
    });
    my.setStorage({
    key: "set_in",
    data: this.data.set_in
    });
  },
  drawChart() {
    const ctx = my.createCanvasContext(this.data.canvasId);
    // 获取数据中的最小和最大坐标值
    const centerX = (this.data.startX + this.data.endX) / 2;
    const dataToDraw = this.data.users.slice(0, 10);
    this.setData({
      minNumber:Math.min(...dataToDraw.map(user => user.number)),
      maxNumber:Math.max(...dataToDraw.map(user => user.number)),
      minY:Math.min(...dataToDraw.map(user => user.length)),
      maxY:Math.max(...dataToDraw.map(user => user.length))
    });
    // 计算 X 轴和 Y 轴的刻度距离
    this.data.stepX = (this.data.endX - this.data.startX) / (this.data.maxNumber - this.data.minNumber);
    this.data.stepY = (this.data.startY - this.data.endY) / (this.data.maxY - this.data.minY);
    // 绘制坐标轴
    ctx.beginPath();
    ctx.moveTo(this.data.startX, this.data.startY);
    ctx.lineTo(this.data.startX, this.data.endY);
    ctx.lineTo(this.data.endX, this.data.endY);
    ctx.stroke();
    // 绘制折线
    ctx.beginPath();
    ctx.setStrokeStyle("#FFFFFF"); // 设置折线颜色
    ctx.setLineWidth(2); // 设置折线宽度
    dataToDraw.forEach((user, index) => {
      const x = centerX + (centerX - (this.data.startX + (user.number - this.data.minNumber) * this.data.stepX));
      const y = this.data.startY - (user.length - this.data.minY) * this.data.stepY;
      if (index === 0) {
        ctx.moveTo(x, y); // 设置起点
      } else {
        ctx.lineTo(x, y); // 绘制线段
      }
    });
    ctx.stroke();
    ctx.draw();
  },
  onChange(index) {
    console.log('index', index);
  },
  onChangeControlled(index) {
      this.setData({ current: index });
  },
  openTour(e) {
      this.setData({
          swiperVisible: true,
          current: 0,
      });
  },
  closeTour() {
      this.setData({
          baseVisible: false,
          moreVisible: false,
          swiperVisible: false,
          slotVisible: false,
          controlledVisible: false,
      });
  },
});
