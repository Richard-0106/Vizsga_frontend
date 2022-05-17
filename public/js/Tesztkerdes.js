class Tesztkerdes{
    constructor(elem,adat){
        this.elem=elem
        this.adat=adat
        this.megjelenit()
        this.szinvaltas=this.elem.find(".v1")
        this.szinvaltas.on("click", () => {
            this.szinValtozasEsemeny()
        })
    }
    megjelenit(){
        this.elem.append("<div class='kerdes'>"+this.adat.kerdes+"</div>")
        this.elem.append("<div class='valaszok'>"
        +"<div class='v1'>"+this.adat.v1+"</div>"
        +"<div class='v2'>"+this.adat.v2+"</div>"
        +"<div class='v3'>"+this.adat.v3+"</div>"
        +"<div class='v3'>"+this.adat.v4+"</div></div>")
    }
    szinValtozasEsemeny() {
        let esemeny = new CustomEvent("szinValtas", { detail: this.adat })
        window.dispatchEvent(esemeny)
    }
}