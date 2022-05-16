namespace scopejump {
    export class Pad {

        position: Vector;
        legh: number = 200;

    constructor(_x: number, _y: number) {
        this.position = new Vector(_x, _y);
        
    }
    getlegh(): number {
        return this.legh;
    }
    getposition(): Vector {
        return this.position;
    }
    draw(): void {
        //console.log("test");
        ctx.beginPath();
        ctx.lineWidth = 30;
        ctx.strokeStyle = "#cc6d00";
        ctx.lineCap = "round";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.legh, this.position.y);
        ctx.stroke();
    }
}
}
