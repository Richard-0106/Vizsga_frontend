class Tesztkerdes {
    constructor(elem, adat) {
        this.elem = elem
        this.adat = adat
        this.valaszok = [this.adat.v1, this.adat.v2, this.adat.v3, this.adat.v4]
        this.kattintottId
        this.megjelenit()
        this.valszok = this.elem.find(".valaszok").children()
        for (let i = 0; i < this.valszok.length; i++) {
            $(this.valszok[i]).on("click", () => {
                this.szinValtozasEsemeny(i)
            })
        }
    }
    megjelenit() {
        this.elem.append("<div class='kerdes'>" + this.adat.kerdes + "</div>")
        this.elem.append("<div class='valaszok'></div>")
        this.shuffle()
        for (let i = 0; i < this.valaszok.length; i++) {
            $(this.elem.find(".valaszok")).append("<div><p>"+this.valaszok[i]+"</p></div>")
        }
    }
    szinValtozasEsemeny(i) {
        this.kattintottId = i
        this.kattintottErtek = this.valaszok[i]
        let esemeny = new CustomEvent("szinValtas", { detail: this })
        window.dispatchEvent(esemeny)
        for (let i = 0; i < this.valszok.length; i++) {
            $(this.valszok[i]).unbind()
        }
    }

    shuffle() {
        let currentIndex = this.valaszok.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.valaszok[currentIndex], this.valaszok[randomIndex]] = [
                this.valaszok[randomIndex], this.valaszok[currentIndex]];
        }
    }
}