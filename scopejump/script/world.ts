namespace scopejump {
    export class World {

        mode: string;
        pad: Pad[] = [];
        colission: boolean;
        lastcolission: Boolean;
        Y: number;
        noblock: boolean;

        constructor(_mode: string) {
            _mode = this.mode;

        }
        generate(): void {
            for (let i: number = 0; i <= 9; i++) {
                //this.pad[0] = new Pad (50, 50);
                this.pad[i] = new Pad(Math.random() * (1080 - 215), 1920 - ((i + 1) * 192));
            }

        }
        draw(): void {
            for (let i: number = 0; i < this.pad.length; i++) {
                this.pad[i].draw();
            }
        }
        getCharData(_position: Vector, _direction: string): void {

            for (let i: number = 0; i < this.pad.length; i++) {
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
                        for (let i: number = 0; i < this.pad.length; i++) {
                            this.pad[i].position.y++;
                            
                        }
                    }

                }
            }

        }
        getEvent(): boolean {
            return this.colission;
        }
    }
}