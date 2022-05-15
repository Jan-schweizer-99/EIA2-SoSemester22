namespace scopejump {
    export class Pad {

        positionChar: Vector;

    constructor(_positionCharracter: Vector) {
        this.positionChar = _positionCharracter;
    }
    getposition(): Vector {
        return this.positionChar;
    }
}
}
