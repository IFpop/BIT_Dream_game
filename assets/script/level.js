// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        // 触摸监听
        this.node.on('touchstart', this.onTouchStart, this);
    },
    onTouchStart () {
        console.log(this.node.name);
        // 点击进入新场景
        // var level_name = this.node.name;
        // cc.director.loadScene("process");
        // this.text.string = '0' + '%';
        // console.log(this.text.string);
        // this.progress.progress = 0;
        // console.log(this.progress.progres);
        // cc.director.preloadScene(level_name,function () { 
        //     cc.log("Next scene preloaded");
        //     cc.director.loadScene(level_name);
        // });
        cc.director.loadScene(this.node.name);
        // cc.director.preloadScene(level_name, this.onProgress.bind(this), function(){    
        //     console.log("done");
        // })
        // console.log("done");
        // cc.director.preloadScene(this.node.name, function () {cc.director.loadScene(this.node.name); });
        // cc.director.loadScene(this.node.name);
    },
    changePic (levelState, num) {
        // 更改图片
        if (levelState == 'UNLOCKED') {
        }
        else if (levelState == 'PASSED') {
            // 通关
        }
        else if (levelState == 'LOCKED') {
            // 关卡未解锁
        }     
    },
    // start () {},

    // update (dt) {},
});
