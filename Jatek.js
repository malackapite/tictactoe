import { Elem } from "./nemKlassz.js";

export class Jatek {
    #lepes=0
    #lista=[]
    constructor() {

        for (let ix = 0; ix < 9; ix++)
            this.#lista.push(new Elem())
        $(window).on("elemSelect", event => {

            let selectedElem = event.detail
            if (selectedElem.abra == "") {
                selectedElem.abra= this.#lepes%2==0
                    ?"X"
                    :"O"
                    this.#lepes++
                this.ellenorzes()
                }
        })

    }

    ellenorzes(){
        for (let ix = 0; ix < 3; ix++) {
            console.log(this.kereses(ix, "O"))
            console.log(this.kereses(ix, "X"))
        }
        // oszlopEll();
        // fugEll();
    }

    kereses(ix, abra){
        let jx=0
            while (jx<3 && this.#lista[3*ix+jx].abra==abra) {
                jx++
            }
        return jx>=3
    }
}