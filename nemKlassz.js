//:(
export class Elem{
    
    #abra=""
    #divElem
    constructor(){
        $("#palya").append("<div></div>")
        this.#divElem=$("#palya > div:last-child")
        // console.log(this.#divElem);
        
        this.#divElem.on("click", () =>{
            //this.abra="cica"
            this.esemenyTrigger()
        })
        
    }
    
    set abra(abra){
        this.#abra=abra
        this.#divElem.text(abra)
    }
    get abra(){
        return this.#abra
    }

    esemenyTrigger(){
        let esemeny= new CustomEvent("elemSelect", {detail:this})
        window.dispatchEvent(esemeny)
    }
}