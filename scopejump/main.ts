namespace scopejump {
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


    /* 0.2 //////////////////// define Global Project Varibles  //////////////////// 0 ////

    ///////////////////////////////////////Deklaration/////////////////////////////////////
    //                                                                                   //
    // : Number                                                                          //
    // : String                                                                          //
    // : Boolean                                                                         //
    //                                                                                   //
    // var varname :TYPE                                                                 //
    // let varname :TYPE  <-- Use this                                                   //       
    // const varname :TYPE                                                               //
    //                                                                                   //
    // let varname: Number[] = [];                                                       //
    // let varname: String[] = [];                                                       //
    // let varname: Boolean[] = [];                                                      //
    //                                                                                   //
    //////////////////////////////// Objektorientierung ///////////////////////////////////
    //                                                                                   //
    // let varname: OBJECTNAME[] = [];                                                   //
    // const varname :OBJECTNAME                                                         //
    //                                                                                   //
    ///////////////////////////////////////canvas//////////////////////////////////////////
    //                                                                                   //
    // export let ctx: CanvasRenderingContext2D;                                         //
    //                                                                                   //
    /////////////////////////////////////////////////////////////////////////////////////*/

    export let ctx: CanvasRenderingContext2D;

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


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///                                                                                                                            ///
    ////                                       Handle Load                                                                        ///
    /////                                                                                                                        ///
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function hndLoad(_event: Event): void {

        ////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////// define Elements //////////////////////////// 1 ////
        ///////////                         //////////////////                       ///////////


        /* 1.0 /////////////////////////// HTMLCanvasElement ///////////////////////////////////
        // height: number                                                                  1  //
        // width: number                                                                      //
        //////////////////////////////////////////////////////////////////////////////////////*/

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");

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

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("start");

        /* 1.2 //////////////////////////// HTMLImageElement ///////////////////////////////////
        // complete: boolean                                                               1  //
        // height: number                                                                     //
        // src: string                                                                        //
        ////////////////////////////////////// snippets ////////////////////////////////////////
        //                                                                                    //
        // let pictures: HTMLImageElement = <HTMLImageElement>document.querySelector("#picture");
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/

        let pictures: HTMLImageElement = <HTMLImageElement>document.querySelector("#picture");


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

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#picture");

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

        let input: HTMLInputElement  = <HTMLInputElement>document.querySelector("#slider");


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
        
        ctx = canvas.getContext("2d")!;


        // 2.2 ////////////////////////////// HTML-ELEMENT /////////////////////////////////////
        //                                                                                2   //
        /* click //// Buttons //////////////////////////////////////////////////////////////////
        //                                                                                    //
        // Button.addEventListener("click", StartGame);                                       //
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/
        
        Button.addEventListener("click", StartGame); 

        /* input //// Select, Sliders, checkboxes, Radio ///////////////////////////////////////
        //                                                                                2   //
        // startButton.addEventListener("Input", StartGame);                                  //
        //                                                                                    //
        //////////////////////////////////////////////////////////////////////////////////////*/

        startButton.addEventListener("Input", StartGame);

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
    
    /* 3.1 ///////////////////////////////// Events ////////////////////////////////////////////
    /////////////////////////////////////// Snippets ///////////////////////////////////////////
    //////////////////////////////////////// input /////////////////////////////////////////////
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

    // Global 


    //Private
    
    function StartGame(_event: Event): void {
        console.log("start game");
    }

     // 3.2 ////////////////////////////////Functions///////////////////////////////////////////
    


    //////////                         //////////////////                           ////////////
    // END //                          Install Listeners                            //// 2 /////
    ////////////////////////////////////////////////////////////////////////////////////////////
    
}