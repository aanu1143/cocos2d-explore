/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var HelloLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var backgroundLayer = cc.LayerColor.create(new cc.Color(255,255,255,255)),
            size = cc.winSize;
        this.addChild(backgroundLayer);
        
        var layout = new ccui.Layout();
        layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
        layout.sizeType = ccui.Widget.SIZE_PERCENT;
        layout.setSizePercent(cc.p(0.75, 0.75));
        layout.setPositionType(ccui.Widget.POSITION_PERCENT);
        layout.setPositionPercent(cc.p(0.12, 0.12));
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color.RED);

        var label = new ccui.Text();

        label.attr({
            textAlign: cc.Text_ALIGNMENT_CENTER,
            string: "This is Layout",
            fontSize: 44,
            font: "Arial"
        });

        var image = new ccui.ImageView();
        image.loadTexture(res.HelloWorld_png);
        
        layout.addChild(image);
        layout.addChild(label);


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


var HelloScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(!this.layer) {
            cc.log("hello scene");
            this.layer = new HelloLayer();
            this.addChild(this.layer);
        }
    }
});

