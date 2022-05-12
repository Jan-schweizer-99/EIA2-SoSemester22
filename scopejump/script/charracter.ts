namespace scopejump {
    export class Charracter {

        position: Vector;
        frame: number;
        speed: number = 1;
        pressedkey: string;
        img: HTMLImageElement = new Image();
        imghalf: HTMLImageElement = new Image();        
        

        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y); 
            window.addEventListener("keydown", keyDownListener, false);
            window.addEventListener("keyup", keyUpListener, false);
            //this.position.x = x;
            //this.position.y = y;
        }

        update(): void {

            //console.log("test");
            this.img.src = "image/Charracter/Charracter1.png";
            ctx.drawImage(this.img, this.position.x - 125, this.position.y);
            ctx.drawImage(this.img, this.position.x + 1080 - 125, this.position.y);
            ctx.drawImage(this.img, this.position.x - 1080 - 125, this.position.y);
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
        getPosition(): Vector {
            return this.position;
        }
        setposition(_direction: string): void {
            this.speed += 0.2;
            if (_direction == "ArrowRight") {
                this.position.x += (2 * this.speed);                
            }
            if (_direction == "ArrowLeft") {
                this.position.x -= (2 * this.speed);                
            }
        }
        setspeed(): void {
            this.speed = 1;
        }
    }
}