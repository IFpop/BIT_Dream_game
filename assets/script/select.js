// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/*
 * 关卡选择界面
 */
//这个关卡配置之后应该是放置在服务器上的
import {Settings} from './settings.js';

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log("select");
        this.initLevels();
    },
    initLevels () {
        if (!cc.sys.localStorage.getItem('Settings')) {
            console.log("first");   
            for (let i = 0 ; i < Settings.length ; i++) {
                // console.log(Settings[i]);
            }
        }
        else {
            // 如果玩家已经玩过，则从本地存储中获取关卡配置信息
            console("already");
            let newSetting = JSON.parse(cc.sys.localStorage.getItem('Settings'));
            for (let i = 0 ; i < newSetting.length ; i++) {
                // console.log(Settings[i]);
            }
        }
    }
    // start () {},
    // update (dt) {},
});
