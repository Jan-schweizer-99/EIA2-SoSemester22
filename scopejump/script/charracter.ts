namespace scopejump {
    export class Charracter {

        position: Vector;
        //frame: number;

        speed: number = 0.2;
        speedX: number = 0.2;


        //pressedkey: string;
        img: HTMLImageElement = new Image();
        imghalf: HTMLImageElement = new Image();
        jump: number = 500;                                  //jump height 
        direction: string = "down";
        sequencecounter: number = 0;
        playsequence: boolean = false;
        brake: number;
        brakehappend: Boolean;


        framehandler: number = 0;
        activButton: string;
        frame: number = 0;
        lastButton: string;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            window.addEventListener("keydown", keyDownListener, false);
            window.addEventListener("keyup", keyUpListener, false);
            //this.position.x = x;
            //this.position.y = y;
        }

        update(): void {
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
            if (this.position.x >= 1080) {
                this.position.x = 1;
            }
            if (this.position.x <= 0) {
                this.position.x = 1079;
            }

            if (this.direction == "down") {
                this.speed += 0.05;                                //fallgeshwindigkeit
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
                if (this.framehandler == 8) {                                                               //FRAMEHANDLER EINSTELLUNG
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
            if (this.direction == "up") {                   // hochspringen
                //console.log("up");
                this.speed += 0.01;
                if (this.position.y >= 1920 - 500) {        //- ist die sprunghöhe
                    this.position.y -= (2 * this.speed);    //- ist die sprunghöhe

                    if (this.position.y <= 1920 - 500) {    //- ist die sprunghöhe        <-- Parameter dafür erstellen
                        this.direction = "down";
                    }

                }

            }
            //this.frame++;
        }
        getPosition(): Vector {
            return this.position;
        }

        setspeed(_xy: string): void {
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
        setbreak(_keyup: Boolean): void {
            //this.brakehappend = _keyup;
            //this.activButton = "None";
            this.activButton = "None";
        }


        drawpicure(): void {
            ctx.drawImage(this.img, this.position.x - 125, this.position.y - 320);
            ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y - 320);
            ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y - 320);
        }

        /* In Diesem Block geht es um die Inputlistener auf welche das Mob reagiert*/

        setofset(): void {
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




        setposition(_direction: string): void {                   // <-

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
                this.position.x += (1 * this.speedX);    //verechne den faktor Beschleunigung aus

                if (this.speedX <= 14) {                //Maximale beschleunigung
                    this.speedX = 13;
                }
                else {
                    this.speedX += 0.1;                      //Beschleunigungswert erhöhen
                    console.log(this.speedX);
                }

            }

            if ((_direction == "ArrowLeft") || (_direction == "a") || (_direction == "A")) {                      // ->

                if (this.frame == 60) {
                    this.frame = 59;
                }
                else {
                    this.frame += 2;
                }

                this.activButton = "Left";
                this.lastButton = this.activButton;
                this.position.x -= (1 * this.speedX);    //
                if (this.speedX <= 14) {    //
                    this.speedX = 13;
                }
                else {
                    this.speedX += 0.1;                      //Beschleunigungswert erhöhen
                    console.log(this.speedX);
                }
            }

        }
    }



}

