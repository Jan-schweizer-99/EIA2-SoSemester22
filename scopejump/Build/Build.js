"use strict";
var scopejump;
(function (scopejump) {
    window.addEventListener("load", hndLoad);
    let charracter;
    function hndLoad(_event) {
        //window.addEventListener("keydown", keyDownListener, false);
        //window.addEventListener("keyup", keyUpListener, false);
        scopejump.canvas = document.querySelector("#canvas");
        charracter = new scopejump.Charracter(1080 / 2, 1500); //neuer Main Charracter erstellen
        setInterval(update, 24);
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
        jump = 500; //jump height 
        direction = "down";
        sequencecounter = 0;
        playsequence = false;
        constructor(_x, _y) {
            this.position = new scopejump.Vector(_x, _y);
            window.addEventListener("keydown", scopejump.keyDownListener, false);
            window.addEventListener("keyup", scopejump.keyUpListener, false);
            //this.position.x = x;
            //this.position.y = y;
        }
        update() {
            //console.log("test");
            this.img.src = "image/Charracter/Charracter0.png";
            if (this.playsequence == false) {
                this.drawpicure();
            }
            if (this.position.x >= 1080) {
                this.position.x = 0;
            }
            if (this.position.x < -1) {
                this.position.x = 1080;
            }
            if (this.direction == "down") {
                this.speed += 1; //fallgeshwindigkeit
                if (this.position.y <= 1920) {
                    this.position.y += (2 * this.speed);
                    if (this.position.y >= 1920) {
                        this.direction = "playsequence";
                    }
                }
            }
            if (this.direction == "playsequence") {
                this.playsequence = true;
                this.speed = 1;
                this.img.src = "./image/Charracter/Charracter" + this.sequencecounter + ".png";
                this.imghalf.src = "./image/Charracter/Charracter" + this.sequencecounter + ".png";
                scopejump.ctx.fillStyle = "#09f";
                this.sequencecounter++;
                this.drawpicure();
                if (this.sequencecounter == 10) {
                    this.sequencecounter = 0;
                    this.direction = "up";
                    this.playsequence = false;
                }
            }
            if (this.direction == "up") {
                console.log("up");
                this.speed += 1;
                if (this.position.y >= 1920 - 350) { //- ist die sprunghöhe
                    this.position.y -= (2 * this.speed); //- ist die sprunghöhe
                    if (this.position.y <= 1920 - 350) { //- ist die sprunghöhe
                        this.direction = "down";
                    }
                }
            }
            //this.frame++;
        }
        getPosition() {
            return this.position;
        }
        setspeed() {
            this.speed = 1;
        }
        drawpicure() {
            scopejump.ctx.drawImage(this.img, this.position.x - 125, this.position.y - 320);
            scopejump.ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y - 320);
            scopejump.ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y - 320);
        }
        /* In Diesem Block geht es um die Inputlistener auf welche das Mob reagiert*/
        setposition(_direction) {
            if (_direction == "ArrowRight") {
                this.position.x += 22;
                //ctx.rotate(45 * Math.PI / 180);
            }
            if (_direction == "ArrowLeft") { // ->
                this.position.x -= 22;
                //ctx.rotate(45 * Math.PI / 180);
            }
        }
    }
    scopejump.Charracter = Charracter;
})(scopejump || (scopejump = {}));
var scopejump;
(function (scopejump) {
    class Pfad {
    }
    scopejump.Pfad = Pfad;
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