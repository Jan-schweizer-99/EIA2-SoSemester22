namespace scopejump {
  
    window.addEventListener("load", hndLoad);


    export let ctx: CanvasRenderingContext2D;
    let charracter: Charracter;
    let world: World;

    function hndLoad(_event: Event): void {

        //window.addEventListener("keydown", keyDownListener, false);
        //window.addEventListener("keyup", keyUpListener, false);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");

        charracter = new Charracter(1080 / 2, 1500);                                                   //neuer Main Charracter erstellen
        world = new World("test");
        
        world.generate();
        setInterval(update, 1);

        ctx = canvas.getContext("2d")!;
    }
    
    function update(_event: Event): void {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        //console.log(charracter.getPosition());
        
        world.getCharData(charracter.getPosition(), charracter.getdirection());
        console.log(world.getEvent());
        world.draw();
        charracter.update();
        
    }
    export function keyDownListener(_event: KeyboardEvent): void {
            charracter.setposition(_event.key);
    }

    export function keyUpListener(_event: KeyboardEvent): void {
        let happend: boolean = _event.bubbles;
        
        charracter.setbreak(happend);
        //charracter.setspeed("X");
        //charracter.setspeed("Y");
    }
}