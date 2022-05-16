declare namespace scopejump {
    let ctx: CanvasRenderingContext2D;
    function keyDownListener(_event: KeyboardEvent): void;
    function keyUpListener(_event: KeyboardEvent): void;
}
declare namespace scopejump {
    class Charracter {
        position: Vector;
        speed: number;
        speedX: number;
        img: HTMLImageElement;
        imghalf: HTMLImageElement;
        jump: number;
        direction: string;
        sequencecounter: number;
        playsequence: boolean;
        brake: number;
        brakehappend: Boolean;
        framehandler: number;
        activButton: string;
        frame: number;
        lastButton: string;
        constructor(_x: number, _y: number);
        getdirection(): string;
        update(): void;
        getPosition(): Vector;
        setspeed(_xy: string): void;
        setbreak(_keyup: Boolean): void;
        drawpicure(): void;
        setofset(): void;
        setposition(_direction: string): void;
    }
}
declare namespace scopejump {
    class Pad {
        position: Vector;
        legh: number;
        constructor(_x: number, _y: number);
        getlegh(): number;
        getposition(): Vector;
        draw(): void;
    }
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
declare namespace scopejump {
    class World {
        mode: string;
        pad: Pad[];
        colission: boolean;
        lastcolission: Boolean;
        Y: number;
        noblock: boolean;
        constructor(_mode: string);
        generate(): void;
        draw(): void;
        getCharData(_position: Vector, _direction: string): void;
        getEvent(): boolean;
    }
}
