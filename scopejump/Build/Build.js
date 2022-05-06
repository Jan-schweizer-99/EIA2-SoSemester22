"use strict";
var scopejump;
(function (scopejump) {
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// Start Setup ////////////////////////////// 0 ////
    ///////////                          //////////////                //       ///////////
    /* 0.1 ////////////////////////////// init hndLoad ///////////////////////////// 0 //
    //                                                                                 //
    // window.addEventListener("load", hndLoad);                                       //
    //                                                                                 //
    /////////////////////////////////////////////////////////////////////////////////////
    */
    window.addEventListener("load", hndLoad);
    let picture = 0;
    let posX = 0;
    scopejump.Charracter = new Image();
    /* 0.3 ///////////////////////// declare Global Varibles  ////////////////////// 0 ////

    ////////////////////////////////////////Global/////////////////////////////////////////
    //                                                                                   //
    // export let N: Number = 5;                                                         //
    // export let S: String = "Hallo";                                                   //
    // export let B: Boolean = false; //  true;                                          //
    // export let OBJECTNAME: Boolean = false; //  true;                                 //
    //                                                                                   //
    //////////////////////////////////////////Local////////////////////////////////////////
    //                                                                                   //
    // let N: Number = 5;                                                                //
    // let S: String = "Hallo";                                                          //
    // let B: Boolean = false; //  true;                                                 //
    // let OBJECTNAME: Boolean = false; //  true;                                        //
    //                                                                                   //
    ///////////////////////////////////////////////////////////////////////////////////////
    
    


*/
    ///////////                            /////////////                         ///////////
    // END //                              Start Setup                          //// 0 /////
    ////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///                                                                                                                           ///
    ///                                                      Handle Load                                                          ///
    ///                                                                                                                           ///
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function hndLoad(_event) {
        ////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////// define Elements //////////////////////////// 1 ////
        ///////////                         //////////////////                       ///////////
        /* 1.0 /////////////////////////// HTMLCanvasElement ///////////////////////////////////
        // height: number                                                                  1  //
        // width: number                                                                      //
        //////////////////////////////////////////////////////////////////////////////////////*/
        window.addEventListener("keydown", keyDownListener, false);
        let canvas = document.querySelector("#canvas");
        setInterval(update, 30);
        /* 1.1 ////////////////////////////// HTML ELEMENT /////////////////////////////////////
        // draggable: boolean                                                              1  //
        // innerText: string                                                                  //
        // offsetHeight: number                                                               //
        // offsetLeft: number                                                                 //
        // offsetParent: number                                                               //
        // offsetTop: number                                                                  //
        // offsetWidth: number                                                                //
        ////////////////////////////////////////////////////////////////////////////////////////
        // click(): void                                                                      //
        // focus(): void                                                                      //
        //////////////////////////////////////////////////////////////////////////////////////*/
        //let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("start");
        /* 1.2 //////////////////////////// HTMLImageElement ///////////////////////////////////
        // complete: boolean                                                               1  //
        // height: number                                                                     //
        // src: string                                                                        //
        ////////////////////////////////////// snippets ////////////////////////////////////////
        //                                                                                    //
        // let pictures: HTMLImageElement = <HTMLImageElement>document.querySelector("#picture");
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/
        //let pictures: HTMLImageElement = <HTMLImageElement>document.querySelector("#picture");
        /* 1.3 //////////////////////////// HTMLFormElement ////////////////////////////////////
        // action: string                                                                  1  //
        // method: string                                                                     //
        ////////////////////////////////////////////////////////////////////////////////////////
        // checkValidity(): boolean                                                           //
        // reset(): void                                                                      //
        // submit(): void                                                                     //
        ///////////////////////////////////// snippets /////////////////////////////////////////
        //                                                                                    //
        // let Textinput: HTMLFormElement = <HTMLFormElement>document.querySelector("#Form");
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/
        //let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#picture");
        /* 1.4 //////////////////////////// Input Element ///////////////////////////////////////
        // name: string                                                                     1  //
        // type: string                                                                        //
        // value: string                                                                       //
        /////////////////////////////////////////////////////////////////////////////////////////
        // checkValidity(): boolean                                                            //
        ///////////////////////////////////// snippets //////////////////////////////////////////
        //                                                                                     //
        // let canvas: HTMLInputElement  = <HTMLInputElement>document.querySelector("#slider");
        //                                                                                     //
        ///////////////////////////////////////////////////////////////////////////////////////*/
        //let input: HTMLInputElement  = <HTMLInputElement>document.querySelector("#slider");
        ///////////                       //////////////////                         ///////////
        // END //                          define Elements                           //// 1 ////
        ////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////// Install Listeners /////////////////////////// 2 ////
        ///////////                         //////////////////                       ///////////
        /* 2.1 ///////////////////////////////// Canvas ////////////////////////////////////////
        // getContext(...): CanvasRenderingContext                                        2   //
        // toDataURL(...): string                                                             //
        // toBlob(): Blob                                                                     //
        //////////////////////////////////////////////////////////////////////////////////////*/
        scopejump.ctx = canvas.getContext("2d");
        // 2.2 ////////////////////////////// HTML-ELEMENT /////////////////////////////////////
        //                                                                                2   //
        /* click //// Buttons //////////////////////////////////////////////////////////////////
        //                                                                                    //
        // Button.addEventListener("click", StartGame);                                       //
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/
        //Button.addEventListener("click", StartGame); 
        /* input //// Select, Sliders, checkboxes, Radio ///////////////////////////////////////
        //                                                                                2   //
        // startButton.addEventListener("Input", StartGame);                                  //
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/
        //startButton.addEventListener("Input", StartGame);
        /* 2.3 /////////////////////////////////// UIEvent ///////////////////////////////////
        // KeyboardEvent                                                                    //
        // UIEvent                                                                          //
        // TouchEvent                                                                       //
        // MouseEvent                                                                       //
        // Pointer Event                                                                    //
        //                                       -> More Information in Dom Hierachie       //
        ////////////////////////////////////////////////////////////////////////////////////*/
        //////////                         //////////////////                        ///////////
        // END //                          Install Listeners                         //// 2 ////
        ////////////////////////////////////////////////////////////////////////////////////////
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Function and Events //////////////////////////////// 3 ////
    ///////////                         //////////////////                          ////////////
    // 3.1 ///////////////////////////////// Events ////////////////////////////////////////////
    /*///////////////////////////////////// Snippets ///////////////////////////////////////////
    /////////////////////////////////////// input if ///////////////////////////////////////////
    //                                                                                        //
    // if ((<HTMLInputElement>_event.target as Element).id == "customValue") {    // get ID from
    // custom_Value = Number((<HTMLInputElement>_event.target).value);            // set a Var to event target and convert it to a Number
    // console.log(custom_Value);                                                 // console
    // }
    //                                                                                         //
    ////////////////////////////////////// custom events ////////////////////////////////////////
    //                                                                                         //
    // function StartGame(_event: Event): void {    // Event Of start
    // console.log("start game");                   // console
    // }                                            //
    //                                                                                         //
    ///////////////////////////////////////////////////////////////////////////////////////////*/
    /* Global ////////////////////////////////
    export function StartGame(_event: Event): void {
        console.log("start game");
    }
    */
    /* Private ////////////////////////////////
        function StartGame(_event: Event): void {
        console.log("start game");
    }
    */
    function update(_event) {
        let audio = new Audio("sound/jumpsound.wav");
        scopejump.ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (picture == 11) {
            picture = 0;
        }
        if (picture == 2) {
            audio.play();
        }
        scopejump.ctx.drawImage(scopejump.Charracter, posX, 0);
        scopejump.Charracter.src = "image/Charracter/Charracter" + picture + ".png";
        //console.log(picture);
        picture++;
    }
    function keyDownListener(_event) {
        if (_event.key == "ArrowRight") {
            console.log("Rechts");
            posX += 5;
        }
        else if (_event.key == "ArrowLeft") {
            console.log("Links");
            posX -= 5;
        }
    }
    /* 3.2 ////////////////////////////////Functions///////////////////////////////////////////
    //

    */
    /* 3.3 /////////////////////////////////update/////////////////////////////////////////////
    */
    //////////                         //////////////////                           ////////////
    // END //                          Install Listeners                            //// 2 /////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////Code snippets//////////////////////////////////////////
    /* for-Loop
    /*Simple for-loop
        for (let i: number = 0; i < 50; i++) {
        Array[i] = i;                           // write
        console.log(i)                          // console test
    }
    */
    /* Array for-loop
        for (let i: number = 0; i < Array.length; i++) {
        Array[i].doActivity();                           // open with instance of objects
        Array[i].draw();                                 // start Draw function
    }
    */
    /* If-Else
    if (customValue == 2) {
    startGame();
    }
    else {
    closeGame();
    }
    */
    /* Funktion(X: Number)
    function doSomething(Argument1: TYPE, Argument2: TYPE): void {            //Function with no return value
        console.log("call deliveryman");
        deliveryman.setActivity(1);
    }
        function doSomething(_argument1: TYPE, _argument2: Number): Number {   //Function with a Number value
        console.log(_argument2);
        return _argument2
    }
        function doSomething(_argument1: TYPE, _argument2: String): String {   //Function with a String value
        console.log(String);
        return _argument2
    }
    */
})(scopejump || (scopejump = {}));
var scopejump;
(function (scopejump) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    scopejump.Vector = Vector;
})(scopejump || (scopejump = {}));
//# sourceMappingURL=Build.js.map