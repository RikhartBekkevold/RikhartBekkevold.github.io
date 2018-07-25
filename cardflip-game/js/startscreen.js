function StartScreen(canvas) {
    this.container          = new PIXI.Container();
    this.background         = PIXI.Sprite.fromImage(PATHS.sceneBG);
    this.container.y        = 0;//(game.renderer.height - 600) / 2;
    this.background.width   = game.renderer.width;
    this.background.height  = game.renderer.height;
    this.startBtn           = null;// = PIXI.Sprite.fromImage(PATHS.startBtn);
    this.settingsBtn        = null;// = PIXI.Sprite.fromImage(PATHS.settingsBtn);
    this.quitBtn            = null;// = PIXI.Sprite.fromImage(PATHS.quitBtn);
    // PIXI.loader.add('image1', PATHS.startBtn).add('image2', PATHS.settingsBtn).add('image3', PATHS.quitBtn);
    this.buttons            = [];
    this.lines              = [];
    this.totalHeight;       // = btn1 + btn2 + btn3 + 200 * 2   /  2;


    for(let i = 0; i <= 2; i++) {
        this.lines.push(PIXI.Sprite.fromImage(PATHS.underline));
    }
    PIXI.loader.reset();
    PIXI.loader.add('startBtn', PATHS.startBtn)
               .add('settingsBtn', PATHS.settingsBtn)
               .add('quitBtn', PATHS.quitBtn)
               .load(() => {
                   this.startBtn = new PIXI.Sprite(PIXI.loader.resources.startBtn.texture);
                   this.settingsBtn = new PIXI.Sprite(PIXI.loader.resources.settingsBtn.texture);
                   this.quitBtn = new PIXI.Sprite(PIXI.loader.resources.quitBtn.texture);
                   this.buttons.push(this.startBtn);
                   this.buttons.push(this.settingsBtn);
                   this.buttons.push(this.quitBtn);
                   console.log(this.startBtn.height);
                   console.log(this.settingsBtn.height);
                   console.log(this.quitBtn.height);


                // set attr. of each button, and unique event handlers, then add to container
                this.buttons.forEach((btn, i) => {
                    btn.x               = game.renderer.width/2; //game.renderer.width/2;
                    btn.y               = i === 0 ? (game.renderer.height/2-200) : (this.buttons[i-1].y + 170);

                    this.totalHeight += btn.height;
                    console.log(btn.height);

                    btn.interactive     = true;
                    btn.buttonMode      = true;
                    btn.anchor.set(0.5);
                      i === 0 ? btn.on('pointerup', () => this.startGame())
                    : i === 1 ? btn.on('pointerup', () => this.changeGameSettings())
                    :           btn.on('pointerup', () => this.quitGame());
                    btn.on('pointerover', () => { this.lines[i].visible = true; });
                    btn.on('pointerout', () => { this.lines[i].visible = false; });
                    this.container.addChild(btn);
                });

                this.totalHeight += 100;
                this.totalHeight = this.startBtn + this.settingsBtn + this.quitBtn;
                this.totalHeight / 2;

                console.log((game.renderer.height ) - (this.startBtn.height + 200 + this.settingsBtn.height / 2));


                console.log(this.startBtn.height + 200 + this.settingsBtn.height / 2);


                // this.totalHeight += 200*2;
                // this.totalHeight / 2;
                // game.renderer.height / 2 - this.totalHeight;

                // sett attr. of all 3 lines, and add to container
                // this.lines.forEach((line, i) => {
                //     line.x          = game.renderer.width/2;
                //     line.y          = i === 0 ? (this.buttons[0].x + 170) : (this.lines[i-1].y + 200);
                //     line.visible    = false;
                //     line.anchor.set(0.5);
                //     this.container.addChild(line);
                // });

                // lastly add BG and container to scene
                canvas.addChild(this.background);
                canvas.addChild(this.container);

     });
};


/////////////////////////////////
StartScreen.prototype.startGame = function() {
    this.hideLines();
    SM.nextScene('game');
};


/////////////////////////////////
StartScreen.prototype.changeGameSettings = function() {
    this.hideLines();
    SM.nextScene('settings');
};


/////////////////////////////////
StartScreen.prototype.quitGame = function() {
    // this.hideLines();
    // SM.nextScene('end', 0);
    window.history.back();
};


/////////////////////////////////
StartScreen.prototype.hideLines = function() {
   this.lines.forEach((line) => {
       line.visible = false;
   });
};


/////////////////////////////////
StartScreen.prototype.destroySelf = function() {
    this.buttons.forEach((btn) => {
        slideOutandRemove(btn);
    });
};
