declare namespace scopejump {
    let ctx: CanvasRenderingContext2D;
    function keyDownListener(_event: KeyboardEvent): void;
    function keyUpListener(_event: KeyboardEvent): void;
}
declare namespace scopejump {
    class Charracter {
        position: Vector;
        frame: number;
        speed: number;
        pressedkey: string;
        img: HTMLImageElement;
        imghalf: HTMLImageElement;
        jump: number;
        direction: string;
        sequencecounter: number;
        playsequence: Boolean;
        constructor(_x: number, _y: number);
        update(): void;
        getPosition(): Vector;
        setspeed(): void;
        drawpicure(): void;
        setposition(_direction: string): void;
    }
}
declare namespace scopejump {
    class Pfad {
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
