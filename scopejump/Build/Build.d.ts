declare namespace scopejump {
}
declare namespace scopejump {
    class Vector {
        x: number;
        y: number;
        constructor(_x: number, _y: number);
        set(_x: number, _y: number): void;
        scale(_factor: number): void;
        add(_addend: Vector): void;
    }
}
