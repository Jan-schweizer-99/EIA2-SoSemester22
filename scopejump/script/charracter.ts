namespace scopejump {
    export class Charracter {

        position: Vector;
        frame: number;
        speed: number = 1;
        speedX: number = 2;
        pressedkey: string;
        img: HTMLImageElement = new Image();
        imghalf: HTMLImageElement = new Image();
        jump: number = 500;                                  //jump height 
        direction: string = "down";
        sequencecounter: number = 0;
        playsequence: boolean = false;
        brake: number;
        brakehappend: Boolean;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            window.addEventListener("keydown", keyDownListener, false);
            window.addEventListener("keyup", keyUpListener, false);
            //this.position.x = x;
            //this.position.y = y;
        }

        update(): void {


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
                this.speed += 1.5;                                //fallgeshwindigkeit
                if (this.position.y <= 1920) {
                    this.position.y += (1 * this.speed);
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

                ctx.fillStyle = "#09f";

                this.sequencecounter++;
                this.drawpicure();

                if (this.sequencecounter == 10) {
                    this.sequencecounter = 0;
                    this.direction = "up";
                    this.playsequence = false;
                }



            }
            if (this.direction == "up") {                   // hochspringen
                console.log("up");
                this.speed += 1;
                if (this.position.y >= 1920 - 300) {        //- ist die sprunghöhe
                    this.position.y -= (2 * this.speed);    //- ist die sprunghöhe

                    if (this.position.y <= 1920 - 300) {    //- ist die sprunghöhe        <-- Parameter dafür erstellen
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
            if (_xy == "Y") {
                this.speed = 1;
            }
            if (_xy == "X") {
                this.speedX = 1.1;
            }
            if (_xy == "break") {
            if (this.speedX <= 100)
                this.speedX = 50;
            }

        }
        setbreak(_keyup: Boolean): void {
            this.brakehappend = _keyup;
        }


        drawpicure(): void {
            ctx.drawImage(this.img, this.position.x - 125, this.position.y - 320);
            ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y - 320);
            ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y - 320);
        }

        /* In Diesem Block geht es um die Inputlistener auf welche das Mob reagiert*/

        setposition(_direction: string): void {                   // <-

            /*Abremsen*/

            if (this.brakehappend == false) {
                this.speedX *= 15;
                if (this.speedX <= 1) {
                    this.brakehappend = true;
                }
            }

            /*taste drücken*/

            if ((_direction == "ArrowRight") || (_direction == "d") || (_direction == "D")) {
                console.log(this.brakehappend);
                if (this.speedX <= 20) {
                    this.speedX += 1;
                }
                this.position.x += (1 * this.speedX);
                //ctx.rotate(45 * Math.PI / 180);
            }
            if ((_direction == "ArrowLeft") || (_direction == "a") || (_direction == "A")) {                      // ->
                if (this.speedX <= 20) {
                this.speedX += 1;
                }
                this.position.x -= (1 * this.speedX);
                //ctx.rotate(45 * Math.PI / 180);
            }

        }
    }
}