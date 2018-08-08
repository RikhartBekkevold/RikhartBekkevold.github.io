/**
 * The representation of a card on the board. The visual
 * part of the card consists of two sprites, a backside
 * and frontside view
 * @param v the value of the card
 * @param b the backside texture
 * @param canvas the view element to draw the card onto
 * @param x the card's coordinate on the x axis
 * @param y the card's coordinate on the y axis
 * @return undefined
 */
function Card(v, b, canvas, x, y) {
    this.canvas     =   canvas;
    this.value      =   v;
    this.x          =   x;
    this.y          =   y;
    this.flipped    =   false;
    this.inactive   =   false;
    this.backView   =   new PIXI.Sprite(PIXI.loader.resources[b].texture);
    this.frontView  =   new PIXI.Sprite(PIXI.loader.resources[PATHS.cardFG].texture);

    this.backView.interactive = true;
    this.backView.buttonMode = true;
    this.backView.anchor.set(0.5);
    this.backView.scale.x = 0;

    this.frontView.interactive = true;
    this.frontView.buttonMode = true;
    this.frontView.anchor.set(0.5);
};



/**
 * If flipped draws the backside of the card, else
 * draws the frontside of the card to the view
 * @return undefined
 */
Card.prototype.draw = function() {

    if(this.flipped) {
        if(this.backView.visible === false) {
            this.backView.visible = true;
        }

        this.backView.x = this.x;
        this.backView.y = this.y;
        this.canvas.addChild(this.backView);
        this.frontView.visible = false;
    }
    else {
        if(this.frontView.visible === false) {
            this.frontView.visible = true;
        }

        // show front
        this.frontView.x = this.x;
        this.frontView.y = this.y;
        this.canvas.addChild(this.frontView);

        // hide back
        this.backView.visible = false;
    }
};


/**
 * Visually flips the card over by shrinking the
 * scale of the frontview card, on the x axis, from 1 to 0, and then increasing
 * the scale of the backview from 0 to 1 creating the
 * appearance of a card flip
 * @return undefined
 */
Card.prototype.flipOver = function() {
    var card = this;

    var flip = setInterval(function() {
        card.frontView.scale.x -= 0.1;

        if(card.frontView.scale.x < 0) {
            card.frontView.scale.x = 0;
            card.flipped = true;
            card.draw();
            card.backView.scale.x += 0.1;

            if(card.backView.scale.x > 0.9) {
                card.backView.scale.x = 1;
                clearInterval(flip);
            }
        }
    }, 20);
};


/**
 * Reverse of flipOver()
 * @return undefined
 */
Card.prototype.flipBack = function(){
    var card = this;

    setTimeout(() => {
        let flip = setInterval(() => {
            card.backView.scale.x -= 0.1;

            if(card.backView.scale.x < 0) {
                card.backView.scale.x = 0;
                card.flipped = false;
                card.draw();

                card.frontView.scale.x += 0.1;
                if(card.frontView.scale.x > 0.9) {
                    card.frontView.scale.x = 1;
                    clearInterval(flip);
                }
            }
        }, 10);
    }, 700);
};


/**
 * Removes both views from the board that
 * the card consists of
 * @return undefined
 */
Card.prototype.removeView = function() {
    this.canvas.removeChild(this.backView);
    this.canvas.removeChild(this.frontView);
};


/**
 * Animates the removal of the card from the board
 * @return undefined
 */
Card.prototype.removeCard = function() {
    const fade  = 0.3;
    const delay = 1000;
    const speed = 100;

    setTimeout(() => {
        let fadeOut = setInterval(() => {
            this.backView.alpha -= 0.3;
            if(this.backView.alpha <= 0) {
                this.removeView();
                clearInterval(fadeOut);
            }
        }, 100);
    }, 1000);
};


/**
 * Move the the card to the coordinates passed
 * as arguments
 * @param x the x coord to move the card towards
 * @param y the y coordinateto move the cards towards
 * @return undefined
 */
Card.prototype.startMove = function(x, y) {
    var sameColumn          = this.x === x ? true : false;
    var biggerX             = this.x > x ? true : false;
    var biggerY             = this.y > y ? true : false;
    var speed               = 5;
    const REFRESH_RATE      = 1;

    if(this.x < x && sameColumn === false && biggerX === true) {
        console.log('y');
        return
    }
    if(this.x > x && sameColumn === false && biggerX === false) {
        console.log('u');
        return
    }

    console.log(this.value +': ' + x + ', ' + y);

    const move = setInterval(() => {
        this.rotation = Math.atan2(y - this.y, x - this.x);

        this.x += Math.cos(this.rotation) * speed;
        if(!sameColumn && this.y !== y) {
            this.y += Math.sin(this.rotation) * speed;
        }

        if(this.x > x && sameColumn === false && biggerX === false) {
            this.stopMove(move, x, y);
        }
        else if(this.x <= x && sameColumn === false && biggerX === true) {
            this.stopMove(move, x, y);
        }
        else if(this.y > y && sameColumn === true && biggerY === true) {
            this.stopMove(move, x, y);
        }
        else if(this.y < y && sameColumn === true && biggerY === false) {
            this.stopMove(move, x, y);
        }

        this.draw();

    }, REFRESH_RATE);
};


/**
 * Stops the card from moving. Makes sure the card is
 * position exactly where it was intended to move to
 * @param move the current running interval to stop
 * @param x the value to set the cards x position to
 * @param y the value to set the cards y position to
 * @return undefined
 */
Card.prototype.stopMove = function(move, x, y) {
    clearInterval(move);
    this.x = x;
    this.y = y;
};
