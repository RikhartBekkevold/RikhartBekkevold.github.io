function StartScreen(canvas) {
    // ini all startscreen components
    this.container   = new PIXI.Container();
    this.background  = PIXI.Sprite.fromImage(PATHS.sceneBG);
    this.startBtn    = PIXI.Sprite.fromImage(PATHS.startBtn);
    this.settingsBtn = PIXI.Sprite.fromImage(PATHS.settingsBtn);
    this.quitBtn     = PIXI.Sprite.fromImage(PATHS.quitBtn);

    // background properties
    this.container.y  = (game.renderer.height - 600) / 2;
    this.background.width  = game.renderer.width;
    this.background.height = game.renderer.height;

    // start button properties
    this.startBtn.anchor.set(0.5);
    this.startBtn.x = game.renderer.width/2;
    this.startBtn.y = 100;
    this.startBtn.interactive = true;
    this.startBtn.buttonMode = true;

    // settings button properties
    this.settingsBtn.anchor.set(0.5);
    this.settingsBtn.x = game.renderer.width/2;
    this.settingsBtn.y = 300;
    this.settingsBtn.interactive = true;
    this.settingsBtn.buttonMode = true;

    // quit button properties
    this.quitBtn.anchor.set(0.5);
    this.quitBtn.x = game.renderer.width/2;
    this.quitBtn.y = 500;
    this.quitBtn.interactive = true;
    this.quitBtn.buttonMode = true;

    // display the components on screen
    canvas.addChild(this.background);
    canvas.addChild(this.container);
    this.container.addChild(this.startBtn);
    this.container.addChild(this.settingsBtn);
    this.container.addChild(this.quitBtn);

    // add listeners for all button components
    this.startBtn.on('pointerup', () => this.startGame());
    this.settingsBtn.on('pointerup', () => this.changeGameSettings());
    this.quitBtn.on('pointerup', () => this.quitGame());
};


StartScreen.prototype.startGame = function () {
    // remove scene components
    slideOutandRemove(this.startBtn);
    slideOutandRemove(this.settingsBtn);
    slideOutandRemove(this.quitBtn);

    // start the game
    GAME = new Game(game.stage);
    GAME.init(1000);
};

StartScreen.prototype.changeGameSettings = function () {
    // remove scene components
    slideOutandRemove(this.startBtn);
    slideOutandRemove(this.settingsBtn);
    slideOutandRemove(this.quitBtn);

    // start the game
    let settings = new SettingsScreen(game.stage);

};

StartScreen.prototype.quitGame = function () {
    // remove scene components
    slideOutandRemove(this.startBtn);
    slideOutandRemove(this.settingsBtn);
    slideOutandRemove(this.quitBtn);

    // start the game
    end = new EndScreen(game.stage, 0);
};
