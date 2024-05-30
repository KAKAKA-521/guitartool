const _my = require("../../__antmove/api/index.js")(my);
//index.js
const app = getApp();
Page({
    data: {
        bpm: 96,
        beat: 4,
        note: 4,
        bar: 0,
        beatArr: [],
        aliquots: 0,
        isPlay: null,
        count: 1,
        playQueue: [

        ],
        curQueueIndex: 1,
        begin_time : 0,
        position: '',
        basicShow: false,
        maskClosable: true,
        showCloseIcon: false,
        animation: true,
        autoHeight: false,
        showCenterScoll: false,
        showCenterDisableScoll: false,
        showDetail: false,
        // TODO: 动态根据detailNotes生成notes
        notes: [
            "1/2",
            "1/4",
            "2/2",
            "2/4",
            "2/3",
            "3/4",
            "3/8",
            "4/4",
            "4/8",
            "5/8",
            "6/4",
            "6/8",
        ],
        anm: 1,
        userInfo: {}
    },
    
    // 播放音频
    audioPlay: function(key) {
      // 创建音频上下文并播放
      const innerAudioContext = my.createInnerAudioContext();
      switch (key) {
        case 'strong':
          innerAudioContext.src = 'XNjI4Mjc1MDcwMA==';
          break;
        case 'week':
          innerAudioContext.src = 'XNjI4Nzk1NjU1Ng==';
          break;
      }
      innerAudioContext.play();
    },
    // 指示条移动
    moveBar: function() {
        var self = this;
        var curCount = self.data.count;
        var playQueue = self.data.playQueue;
        var queueLen = playQueue.length;
        var hasChange = false; // 有队列的情况

        if (queueLen !== 0) {
            for (var i = 0; i < queueLen; i++) {
                if (
                    playQueue[i].start === curCount &&
                    parseInt(self.data.bar) % 360 === 0
                ) {
                    hasChange = true;
                    console.log(playQueue[i].start, self.data.bar); // 清除原来的计数器

                    self.pauseHandle();
                    self.setData({
                        bpm: playQueue[i].bpm,
                        beat: playQueue[i].beat,
                        note: playQueue[i].note,
                        curQueueIndex: self.data.curQueueIndex + 1,
                        // 因为清空了计数器，自己+1，否则死循环
                        count: curCount + 1
                    });
                    self.setBeatArr();
                    break;
                }
            }
        } // 如果队列出现了更替，重新开始

        if (hasChange) {
            self.startHandle();
            return;
        } // 非队列的默认逻辑

        var bar = self.data.bar;
        bar += self.data.aliquots;
        var time = 60000 / self.data.bpm;
        var count = Math.ceil(bar / 360);
        self.setData({
            bar: bar,
            count: count,
            time: time
        }); // 播放音频
        // TODO: 精度问题 7/8拍，bar % 360 === 359.99999
        // console.log(bar % 360)

        if (parseInt(bar) % 360 === 0) {
            self.audioPlay("strong");
        } else {
            self.audioPlay("week");
        }
    },
    // 开始
    startHandle: function() {
        if (this.data.isPlay) {
            return;
        }

        var self = this; // 指示条位置移动
        // 先立即移动

        self.moveBar();
        var time = 60000 / self.data.bpm; // 再间隔移动

        var isPlay = setInterval(function() {
            self.moveBar();
        }, time);
        self.setData({
            isPlay: isPlay
        });
    },
    // 停止
    stopHandle: function(e) {
        var self = this;
        clearTimeout(this.data.isPlay);
        this.setData({
            isPlay: null,
            count: 1,
            bar: 0,
            curQueueIndex: 1
        }); // 如果是队列状态，需要回到第一个队列

        this.data.playQueue.length > 0 && this.onShow();
        console.log(this.data.isPlay);
    },
    // 暂定
    pauseHandle: function(e) {
        clearTimeout(this.data.isPlay);
        this.setData({
            isPlay: null
        });
    },
    onLoad: function() {
        console.log("onLoad index");
    },
    // 生成圆圈旁边的刻度点
    setBeatArr: function() {
        var self = this; // 计算beat分布

        var beat = this.data.beat;
        var beatArr = [];
        var aliquots = 360 / beat;
        var len = beat;

        if (beat === 4 || beat === 8 || beat === 16) {
            // 某些节奏展示成16分更好
            len = 16;
        } else if (beat === 3 || beat === 6 || beat === 9 || beat === 12) {
            // 展示成12分
            len = 12;
        }

        for (var i = 0; i < len; i++) {
            beatArr.push(((i + 1) * 360) / len);
        }

        this.setData({
            beatArr: beatArr,
            aliquots: aliquots
        });
    },
    // tab开始展示的逻辑
    onShow: function() {
        this.updateTime();
        // 从存储取数据
        var anm = _my.getStorageSync("anm") || 0;
        var note = _my.getStorageSync("noteStr") || "4/4";
        var noteStr = _my.getStorageSync("noteStr") || "4/4";
        var noteArr = noteStr.split("/");
        var playQueue = this.data.playQueue;
        if (playQueue.length === 0) {
            // 队列情况
            this.setData({
                bpm: _my.getStorageSync("bpm") || 96,
                beat: parseInt(noteArr[0]),
                note: parseInt(noteArr[1])
            });
        } else {
            // 默认情况
            this.setData({
                bpm: playQueue[0].bpm,
                beat: playQueue[0].beat,
                note: playQueue[0].note
            });
        }
        this.setData({
          bpm: _my.getStorageSync("bpm") || 96,
          note: note,
          anm: anm
        });
        this.setBeatArr();
    },
    // 切换到其他tab时，停止
    onHide: function() {
        this.stopHandle();
    },
    // 下拉刷新
    // TODO: 调查为毛没用
    onPullDownRefresh: function() {
        _my.stopPullDownRefresh();
    },
    updateTime() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const formattedTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
      if(app.saved == false){
        app.start_time = formattedTime;
        app.saved = true;
      }
      // 更新页面数据
      this.setData({
        begin_time: formattedTime,
      });
    },
    handlePopupClose() {
      this.setData({
        basicShow: false,
        showCenterScoll: false,
        showCenterDisableScoll: false,
      });
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var url = currentPage.route;
      // 页面跳转，模拟刷新当前页面
      my.reLaunch({
            url: '/' + url
      });
    },
    handleShowBasic(e) {
      this.stopHandle();
      const { position } = e.target.dataset;
      this.setData({
        position,
        basicShow: true,
      });
    },
    bpmchange: function(e) {
      this.setData({
          bpm: e.detail.value
      });
      _my.setStorage({
          key: "bpm",
          data: e.detail.value
      });
  },
  // 拍号改变
  radioChange: function(e) {
      this.setData({
          note: e.detail.value
      });

      _my.setStorage({
          key: "noteStr",
          data: e.detail.value
      });
  },
  // 指针动画改变
  anmChange: function(e) {
      var val = parseInt(e.detail.value);
      this.setData({
          anm: val
      });

      _my.setStorage({
          key: "anm",
          data: val
      });
  },
});
