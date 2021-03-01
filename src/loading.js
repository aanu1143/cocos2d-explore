
var LoadingLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var backgroundLayer = cc.LayerColor.create(new cc.Color(255,255,255,255)),
            size = cc.winSize;
        this.addChild(backgroundLayer);
        
        var label = new cc.LabelTTF("HashCube", "Arial", 44);

        label.x = size.width / 2;
        label.y = size.height / 2 + 200;
        label.setColor(new cc.Color(0,0,0,255));


        var sprite = new cc.Sprite(res.logo_png);
        sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });

        this.addChild(sprite, 0);
        this.addChild(label, 5);

        this.scheduleOnce(this.mainScreen, 1);

        return true;
    },

    mainScreen: function (df) {
        'use strict';

        var scene = new menuItemScene();
        cc.director.runScene(scene);
    }
});


var LoadingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(!this.layer) {
            cc.log("loading scene");
            this.layer = new LoadingLayer();
            this.addChild(this.layer);
        }
    }
});

