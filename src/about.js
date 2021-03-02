
var AboutLayer = cc.Layer.extend({

    ctor:function () {
        this._super();

        var backgroundLayer = cc.LayerColor.create(new cc.Color(255,255,255,255)),
            size = cc.winSize;
        this.addChild(backgroundLayer);
        
        var linear_layout = new ccui.LinearLayoutParameter();
        linear_layout.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);

        var layout = new ccui.Layout();
        layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
        layout.setPosition(cc.p(100, size.height/2+200));
        layout.setContentSize(cc.size(500, 350));
        layout.setLayoutParameter(linear_layout);
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color.GRAY);

        var label = new ccui.Text();
        label.attr({
            textAlign: cc.Text_ALIGNMENT_CENTER,
            string: "This is Linear Layout",
            fontSize: 44,
            font: "Arial"
        });

        var image = new ccui.ImageView();
        image.loadTexture(res.HelloWorld_png);
        
        layout.addChild(label);
        layout.addChild(image);

        var image_action = new cc.MoveTo.create(1, cc.p(-250, -200));
        image.runAction(image_action);

        var label_action = new cc.JumpTo(1, cc.p(50, -100), 42, 3);
        label.runAction(label_action);


        this.addChild(layout);

        var button = new ccui.Button();

        button.loadTextures(res.back_png, res.back_png);
        button.addTouchEventListener(this.touchEvent, this);
        button.setPosition(cc.p(size.width/2, 60));
        this.addChild(button);
        return true;
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
    }
});


var AboutScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(!this.layer) {
            cc.log("about scene");
            this.layer = new AboutLayer();
            this.addChild(this.layer);
        }
    }
});

