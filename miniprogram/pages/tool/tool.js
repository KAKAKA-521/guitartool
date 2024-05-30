const _my = require("../../__antmove/api/index.js")(my);
var t = _my.createInnerAudioContext(),
    n = null;

Page({
    data: {
        type: "guitar",
        instrument: "nylon",
        instrumentName: "民谣吉他",
        strings: {
            guitar: ["E6", "A5", "D4", "G3", "B2", "E1"],
            violin: ["G", "D", "A", "E"],
            viola: ["C", "G", "D", "A"],
            cello: ["C", "G", "D", "A"],
            ukulele: ["G", "C", "E", "A"],
            bass: ["E", "A", "D", "G"]
        },
        showNow: ""
    },
    onLoad: function(t) {
        _my.createInterstitialAd &&
            ((n = _my.createInterstitialAd({
                adUnitId: "adunit-f053b54ae458b14f"
            })).onLoad(function() {}),
            n.onError(function(t) {}),
            n.onClose(function() {}));
    },
    onReady: function() {},
    playInstrument: function() {
        n &&
            n.show().catch(function(t) {
                console.error(t);
            });
        var a = this,
            e = this.data.instrument,
            s = 0;
        if ("guitar" == a.data.type) i = a.data.strings.guitar;
        else var i = a.data.strings[e];
        a.setData({
            showNow: i[s]
        }),
            (t.src = "/sound/" + e + "/" + i[s] + ".mp3"),
            t.play(),
            s++;
        var o = setInterval(function() {
            a.setData({
                showNow: i[s]
            }),
                (t.src = "/sound/" + e + "/" + i[s] + ".mp3"),
                t.play(),
                ++s >= i.length &&
                    (setTimeout(function() {
                        a.setData({
                            showNow: ""
                        });
                    }, 1e3),
                    clearInterval(o));
        }, 1500);
    },
    playString: function(n) {
        var a = n.target.dataset.string,
            e = this.data.instrument;
        this.setData({
            showNow: a
        }),
            (t.src = "/sound/" + e + "/" + a + ".mp3"),
            t.play();
    },
    changeInstrument: function() {
        var t = this;

        _my.showActionSheet({
            itemList: ["民谣吉他", "古典吉他", "爵士吉他", "电吉他"],
            success: function(n) {
                switch (n.tapIndex) {
                    case 0:
                        (t.data.instrument = "steel"),
                            (t.data.instrumentName = "民谣吉他");
                        break;

                    case 1:
                        (t.data.instrument = "nylon"),
                            (t.data.instrumentName = "古典吉他");
                        break;

                    case 2:
                        (t.data.instrument = "jazz"),
                            (t.data.instrumentName = "爵士吉他");
                        break;

                    case 3:
                        (t.data.instrument = "overdriven"),
                            (t.data.instrumentName = "电吉他");
                }

                t.setData({
                    type: "guitar",
                    instrument: t.data.instrument,
                    instrumentName: t.data.instrumentName,
                    showNow: ""
                });
            }
        });
    },
    changeViolin: function() {
        var t = this;

        _my.showActionSheet({
            itemList: ["小提琴", "中提琴", "大提琴"],
            success: function(n) {
                switch (n.tapIndex) {
                    case 0:
                        (t.data.instrument = "violin"),
                            (t.data.instrumentName = "小提琴");
                        break;

                    case 1:
                        (t.data.instrument = "viola"),
                            (t.data.instrumentName = "中提琴");
                        break;

                    case 2:
                        (t.data.instrument = "cello"),
                            (t.data.instrumentName = "大提琴");
                }

                t.setData({
                    type: "violin",
                    instrument: t.data.instrument,
                    instrumentName: t.data.instrumentName,
                    showNow: ""
                });
            }
        });
    },
    changeUkulele: function() {
        var t = this;
        (t.data.instrument = "ukulele"),
            t.setData({
                type: "ukulele",
                instrument: t.data.instrument,
                instrumentName: "尤克里里",
                showNow: ""
            });
    },
    changeBass: function() {
        var t = this;
        (t.data.instrument = "bass"),
            t.setData({
                type: "bass",
                instrument: t.data.instrument,
                instrumentName: "贝斯",
                showNow: ""
            });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
