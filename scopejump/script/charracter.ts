namespace scopejump {
    export class Charracter {

        position: Vector;
        frame: number;
        speed: number = 1;
        pressedkey: string;
        img: HTMLImageElement = new Image();
        imghalf: HTMLImageElement = new Image();
        jump: number = 500;                                  //jump height 
        direction: string = "down";
        sequencecounter: number = 0;
        playsequence: Boolean = false;


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
                this.speed += 1;                                //fallgeshwindigkeit
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

                ctx.fillStyle = "#09f";

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
                if (this.position.y >= 1920 - 250) {        //- ist die sprunghöhe
                    this.position.y -= (2 * this.speed);    //- ist die sprunghöhe

                    if (this.position.y <= 1920 - 250) {    //- ist die sprunghöhe
                        this.direction = "down";
                    }

                }

            }
            //this.frame++;
        }
        getPosition(): Vector {
            return this.position;
        }

        setspeed(): void {
            this.speed = 1;
        }
        drawpicure(): void {
            ctx.drawImage(this.img, this.position.x - 125, this.position.y - 305);
            ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y - 305);
            ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y - 305);
        }

        /* In Diesem Block geht es um die Inputlistener auf welche das Mob reagiert*/

        setposition(_direction: string): void {                   // <-
            if (_direction == "ArrowRight") {
                this.position.x += 20;
                //ctx.rotate(45 * Math.PI / 180);
            }
            if (_direction == "ArrowLeft") {                      // ->
                this.position.x -= 20;
                //ctx.rotate(45 * Math.PI / 180);
            }
        }
}
}