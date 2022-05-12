"use strict";
var scopejump;
(function (scopejump) {
    window.addEventListener("load", hndLoad);
    let charracter;
    function hndLoad(_event) {
        //window.addEventListener("keydown", keyDownListener, false);
        //window.addEventListener("keyup", keyUpListener, false);
        let canvas = document.querySelector("#canvas");
        charracter = new scopejump.Charracter(0, 0); //neuer Main Charracter erstellen
        setInterval(update, 30);
        scopejump.ctx = canvas.getContext("2d");
    }
    function update(_event) {
        scopejump.ctx.clearRect(0, 0, canvas.width, canvas.height);
        charracter.update();
    }
    function keyDownListener(_event) {
        charracter.setposition(_event.key);
    }
    scopejump.keyDownListener = keyDownListener;
    function keyUpListener(_event) {
        charracter.setspeed();
    }
    scopejump.keyUpListener = keyUpListener;
})(scopejump || (scopejump = {}));
var scopejump;
(function (scopejump) {
    class Charracter {
        position;
        frame;
        speed = 1;
        pressedkey;
        img = new Image();
        imghalf = new Image();
        constructor(_x, _y) {
            this.position = new scopejump.Vector(_x, _y);
            window.addEventListener("keydown", scopejump.keyDownListener, false);
            window.addEventListener("keyup", scopejump.keyUpListener, false);
            //this.position.x = x;
            //this.position.y = y;
        }
        update() {
            //console.log("test");
            this.img.src = "image/Charracter/Charracter1.png";
            scopejump.ctx.drawImage(this.img, this.position.x - 125, this.position.y);
            scopejump.ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y);
            scopejump.ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y);
            if (this.position.x >= 1080) {
                this.position.x = 0;
            }
            if (this.position.x < -1) {
                this.position.x = 1080;
            }
            //if (this.position.x <= 0) {
            //    this.position.x = 1800;
            //}
            //this.img.src = "image/Charracter/Charracter" + this.frame + ".png";
            this.frame++;
        }
        getPosition() {
            return this.position;
        }
        setposition(_direction) {
            this.speed += 0.2;
            if (_direction == "ArrowRight") {
                this.position.x += (2 * this.speed);
            }
            if (_direction == "ArrowLeft") {
                this.position.x -= (2 * this.speed);
            }
        }
        setspeed() {
            this.speed = 1;
        }
    }
    scopejump.Charracter = Charracter;
})(scopejump || (scopejump = {}));
var scopejump;
(function (scopejump) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    scopejump.Vector = Vector;
})(scopejump || (scopejump = {}));
//# sourceMappingURL=Build.js.map