var LayoutView = cc.Layer.extend({
    ctor : function(){
        this._super();
        
        var backgroundLayer = cc.LayerColor.create(new cc.Color(255,255,255,255)),
        size = cc.winSize;
        this.addChild(backgroundLayer);

        var label = new cc.LabelTTF("Linear Layout Parameter alignment", "Arial", 38);
        label.x = size.width / 2;
        label.y = size.height / 2 + 200;
        label.setColor(new cc.color(10, 10, 243, 255));

        this.addChild(label, 5);
        
        var lo = new ccui.Layout();
        lo.setLayoutType(ccui.Layout.LINEAR_VERTICAL); 
        lo.setContentSize(cc.size(640, 700));
        this.addChild(lo);

        this.btn1 = new ccui.Button();
        this.btn1.setTouchEnabled(true);
        this.btn1.loadTextures(res.close_btn, res.close_btn, "");
        lo.addChild(this.btn1);

        this.btn2 = new ccui.Button();
        this.btn2.setTouchEnabled(true);
        this.btn2.loadTextures(res.close_btn, res.close_btn, "");
        // this.btn2.addTouchEventListener(function(){
        //     this.btn2.removeFromParent(true);
        // }, this);
        lo.addChild(this.btn2);

        this.btn3 = new ccui.Button();
        this.btn3.setTouchEnabled(true);
        this.btn3.loadTextures(res.close_btn, res.close_btn, "");
        // this.btn3.addTouchEventListener(function(){
        //  this.btn3.setVisible(false);
        // }, this)
        lo.addChild(this.btn3);

        this.setLayoutParameter();


        var button = new ccui.Button();

        button.loadTextures(res.back_png, res.back_png);
        button.addTouchEventListener(this.touchEvent, this);
        button.setPosition(cc.p(size.width/2, 60));
        this.addChild(button);

        return true;
    },

    close : function(){

    },

    touchEvent: function (sender, type) {
        'use strict';

        if (type === ccui.Widget.TOUCH_ENDED || type === ccui.Widget.TOUCH_CANCELED) {
            cc.log("touch ended");
            cc.audioEngine.playEffect(res.button_primary);
            var scene = new menuItemScene();
            cc.director.runScene(scene);
        } else if (type === ccui.Widget.TOUCH_BEGAN) {
            cc.log("touch began");
        }
    },

    setLayoutParameter : function(){
        var lp1 = new ccui.LinearLayoutParameter();
        this.btn1.setLayoutParameter(lp1);
        lp1.setGravity(ccui.LinearLayoutParameter.RIGHT);
        lp1.setMargin(new ccui.Margin(0, 5, 0, 10));

        var lp2 = new ccui.LinearLayoutParameter();
        this.btn2.setLayoutParameter(lp2);
        lp2.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);
        lp2.setMargin(new ccui.Margin(0, 5, 0, 10));

        var lp3 = new ccui.LinearLayoutParameter();
        this.btn3.setLayoutParameter(lp3);
        lp3.setGravity(ccui.LinearLayoutParameter.BOTTOM);
        lp3.setMargin(new ccui.Margin(0, 5, 0, 10));
    }
});

var LayoutScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        if(!this.layer) {
            cc.log("layout scene");
            this.layer = new LayoutView();
            this.addChild(this.layer);
        }
    }
});
