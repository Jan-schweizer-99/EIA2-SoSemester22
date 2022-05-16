"use strict";
var scopejump;
(function (scopejump) {
    window.addEventListener("load", hndLoad);
    let charracter;
    let world;
    function hndLoad(_event) {
        //window.addEventListener("keydown", keyDownListener, false);
        //window.addEventListener("keyup", keyUpListener, false);
        let canvas = document.querySelector("#canvas");
        charracter = new scopejump.Charracter(1080 / 2, 1500); //neuer Main Charracter erstellen
        world = new scopejump.World("test");
        world.generate();
        setInterval(update, 1);
        scopejump.ctx = canvas.getContext("2d");
    }
    function update(_event) {
        scopejump.ctx.clearRect(0, 0, canvas.width, canvas.height);
        //console.log(charracter.getPosition());
        world.getCharData(charracter.getPosition(), charracter.getdirection());
        console.log(world.getEvent());
        world.draw();
        charracter.update();
    }
    function keyDownListener(_event) {
        charracter.setposition(_event.key);
    }
    scopejump.keyDownListener = keyDownListener;
    function keyUpListener(_event) {
        let happend = _event.bubbles;
        charracter.setbreak(happend);
        //charracter.setspeed("X");
        //charracter.setspeed("Y");
    }
    scopejump.keyUpListener = keyUpListener;
})(scopejump || (scopejump = {}));
var scopejump;
(function (scopejump) {
    class Charracter {
        position;
        //frame: number;
        speed = 0.2;
        speedX = 0.2;
        //pressedkey: string;
        img = new Image();
        imghalf = new Image();
        jump = 500; //jump height 
        direction = "down";
        sequencecounter = 0;
        playsequence = false;
        brake;
        brakehappend;
        framehandler = 0;
        activButton;
        frame = 0;
        lastButton;
        constructor(_x, _y) {
            this.position = new scopejump.Vector(_x, _y);
            window.addEventListener("keydown", scopejump.keyDownListener, false);
            window.addEventListener("keyup", scopejump.keyUpListener, false);
            //this.position.x = x;
            //this.position.y = y;
        }
        getdirection() {
            return this.direction;
        }
        update() {
            //console.log(this.frame);
            //let audio: HTMLAudioElement = new Audio("./sound/jumpsound.wav");
            //console.log(this.activButton);
            this.img.src = "image/Charracter/Charracter0.png";
            //console.log(this.speedX);
            if ((this.frame > 0) && (this.activButton == "None") && (this.lastButton == "Right")) {
                this.frame -= 0.01;
                if (this.frame >= 4) {
                    this.frame = 2;
                }
                else {
                    this.position.x += 1 * (this.frame);
                }
                //this.speedX -= 0.01;
                //console.log(this.activButton);
            }
            //console.log(this.speedX);
            if ((this.frame > 0) && (this.activButton == "None") && (this.lastButton == "Left")) {
                this.frame -= 0.01;
                if (this.frame >= 4) {
                    this.frame = 2;
                }
                else {
                    this.position.x -= 1 * (this.frame);
                }
                //this.speedX -= 0.01;
                //console.log(this.activButton);
            }
            if (this.playsequence == false) {
                this.drawpicure();
            }
            if (this.position.x >= 1080) { //auf andere screenseite springen
                this.position.x = 1;
            }
            if (this.position.x <= 0) {
                this.position.x = 1079;
            }
            if (this.direction == "down") {
                this.speed += 0.05; //fallgeshwindigkeit
                if (this.position.y <= 1920) {
                    this.position.y += (1 * this.speed);
                    if (this.position.y >= 1920) {
                        this.direction = "playsequence";
                    }
                }
            }
            if (this.direction == "playsequence") {
                this.framehandler++;
                this.img.src = "./image/Charracter/Charracter" + this.sequencecounter + ".png";
                this.imghalf.src = "./image/Charracter/Charracter" + this.sequencecounter + ".png";
                this.drawpicure();
                if (this.framehandler == 8) { //FRAMEHANDLER EINSTELLUNG
                    this.playsequence = true;
                    this.speed = 1;
                    this.img.src = "./image/Charracter/Charracter" + this.sequencecounter + ".png";
                    this.imghalf.src = "./image/Charracter/Charracter" + this.sequencecounter + ".png";
                    this.sequencecounter++;
                    this.drawpicure();
                    if (this.sequencecounter == 1) {
                        //audio.play();
                    }
                    if (this.sequencecounter == 9) {
                        this.sequencecounter = 0;
                        this.direction = "up";
                        this.playsequence = false;
                    }
                    this.framehandler = 0;
                }
            }
            if (this.direction == "up") { // hochspringen
                //console.log("up");
                this.speed += 0.01;
                if (this.position.y >= 1920 - 500) { //- ist die sprunghöhe
                    this.position.y -= (2 * this.speed); //- ist die sprunghöhe
                    if (this.position.y <= 1920 - 500) { //- ist die sprunghöhe        <-- Parameter dafür erstellen
                        this.direction = "down";
                    }
                }
            }
            //this.frame++;
        }
        getPosition() {
            return this.position;
        }
        setspeed(_xy) {
            this.frame++;
            if (_xy == "Y") {
                this.speed = 1;
            }
            if (_xy == "X") {
                this.speedX = 0.01;
            }
            //if (_xy == "break") {
            //if (this.speedX <= 100)
            //    this.speedX = 50;
            //}
        }
        setbreak(_keyup) {
            //this.brakehappend = _keyup;
            //this.activButton = "None";
            this.activButton = "None";
        }
        drawpicure() {
            scopejump.ctx.drawImage(this.img, this.position.x - 125, this.position.y - 320);
            scopejump.ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y - 320);
            scopejump.ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y - 320);
        }
        /* In Diesem Block geht es um die Inputlistener auf welche das Mob reagiert*/
        setofset() {
            if ((this.frame >= 0) && (this.activButton == "None") && (this.lastButton == "Right")) {
                //console.log(this.frame);
                //console.log(this.activButton);
                console.log(this.speedX);
                //this.position.x -= +1 * (this.speed);
            }
            if ((this.frame >= 0) && (this.activButton == "None") && (this.lastButton == "Left")) {
                //console.log(this.frame);
                //console.log(this.activButton);
                console.log(this.speedX);
                //this.position.x -= +1 * (this.speed);
            }
        }
        setposition(_direction) {
            /*Abremsen*/
            //this.speedX = 0;
            /*taste drücken*/
            if ((_direction == "ArrowRight") || (_direction == "d") || (_direction == "D")) {
                if (this.frame == 60) {
                    this.frame = 59;
                }
                else {
                    this.frame += 2;
                }
                this.activButton = "Right";
                this.lastButton = this.activButton;
                this.position.x += (1 * this.speedX); //verechne den faktor Beschleunigung aus
                if (this.speedX <= 14) { //Maximale beschleunigung
                    this.speedX = 13;
                }
                else {
                    this.speedX += 0.1; //Beschleunigungswert erhöhen
                    console.log(this.speedX);
                }
            }
            if ((_direction == "ArrowLeft") || (_direction == "a") || (_direction == "A")) { // ->
                if (this.frame == 60) {
                    this.frame = 59;
                }
                else {
                    this.frame += 2;
                }
                this.activButton = "Left";
                this.lastButton = this.activButton;
                this.position.x -= (1 * this.speedX); //
                if (this.speedX <= 14) { //
                    this.speedX = 13;
                }
                else {
                    this.speedX += 0.1; //Beschleunigungswert erhöhen
                    console.log(this.speedX);
                }
            }
        }
    }
    scopejump.Charracter = Charracter;
})(scopejump || (scopejump = {}));
var scopejump;
(function (scopejump) {
    class Pad {
        position;
        legh = 200;
        constructor(_x, _y) {
            this.position = new scopejump.Vector(_x, _y);
        }
        getlegh() {
            return this.legh;
        }
        getposition() {
            return this.position;
        }
        draw() {
            //console.log("test");
            scopejump.ctx.beginPath();
            scopejump.ctx.lineWidth = 30;
            scopejump.ctx.strokeStyle = "#cc6d00";
            scopejump.ctx.lineCap = "round";
            scopejump.ctx.lineJoin = "miter";
            scopejump.ctx.miterLimit = 4;
            scopejump.ctx.moveTo(this.position.x, this.position.y);
            scopejump.ctx.lineTo(this.position.x + this.legh, this.position.y);
            scopejump.ctx.stroke();
        }
    }
    scopejump.Pad = Pad;
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
var scopejump;
(function (scopejump) {
    class World {
        mode;
        pad = [];
        colission;
        lastcolission;
        Y;
        noblock;
        constructor(_mode) {
            _mode = this.mode;
        }
        generate() {
            for (let i = 0; i <= 9; i++) {
                //this.pad[0] = new Pad (50, 50);
                this.pad[i] = new scopejump.Pad(Math.random() * (1080 - 215), 1920 - ((i + 1) * 192));
            }
        }
        draw() {
            for (let i = 0; i < this.pad.length; i++) {
                this.pad[i].draw();
            }
        }
        getCharData(_position, _direction) {
            for (let i = 0; i < this.pad.length; i++) {
                if ((_position.y <= this.pad[i].getposition().y) && (_position.x >= this.pad[i].getposition().x) && (_position.x <= this.pad[i].getposition().x + this.pad[i].getlegh())) {
                    this.noblock = false;
                    if ((_position.y >= this.pad[i].getposition().y)) {
                        this.colission = true;
                        this.Y = 1920 - _position.y;
                    }
                    break;
                }
                else {
                    this.colission = false;
                }
                if ((this.colission == false) && (_direction == "down")) {
                    if ((_position.x <= this.pad[i].getposition().x) && (_position.x >= this.pad[i].getposition().x + this.pad[i].getlegh())) {
                        for (let i = 0; i < this.pad.length; i++) {
                            this.pad[i].position.y++;
                        }
                    }
                }
            }
        }
        getEvent() {
            return this.colission;
        }
    }
    scopejump.World = World;
})(scopejump || (scopejump = {}));
//# sourceMappingURL=Build.js.map