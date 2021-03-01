
var menu = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var backgroundLayer = cc.LayerColor.create(new cc.Color(255,255,255,255)),
            size = cc.winSize;
        this.addChild(backgroundLayer);

        var label = new cc.LabelTTF("Menu Items", "Grobold", 48);
        label.x = size.width / 2;
        label.y = size.height / 2 + 200;
        label.setColor(new cc.color(100, 186, 243, 255));

        this.addChild(label, 5);


        var menuItem1 = new cc.MenuItemImage(res.play_png, res.play_png, this.play),
            menuItem2 = new cc.MenuItemFont("About", this.about);
        
        menuItem1.setPosition(cc.p(size.width/2, size.height/2));
        menuItem1.setScale(0.1);

        

        menuItem2.setPosition(cc.p(size.width/2, size.height/2-200));
        menuItem2.setColor(cc.color(0, 0, 0, 255));

        var menu = new cc.Menu(menuItem1, menuItem2);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);

        var fade = new cc.FadeIn.create(2);
        menu.setOpacity(0);
        menu.runAction(fade);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event){    
                // var target = event.getCurrentTarget(); 
                cc.log("Touch Began");
            }
        } , this);

        return true;
    },

    play: function () {
        var scene = new HelloScene();
        cc.audioEngine.playEffect(res.button_primary);
        cc.director.runScene(scene);
    },

    about: function () {
        var scene = new AboutScene();
        cc.audioEngine.playEffect(res.button_primary);
        cc.director.runScene(scene);
    }
});



var menuItemScene = cc.Scene.extend({

    onEnter:function () {

        this._super();
        if(!this.layer) {
            cc.log("menu scene");
            this.layer = new menu();
            this.addChild(this.layer);
        }
    }
});
