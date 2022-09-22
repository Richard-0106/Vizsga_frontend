$(function () {
    const token = $('meta[name="csrf-token"]').attr("content");
    const ajax = new Ajax(token)
    var kerdesek = []
    var kerdesekKategorizalva = []
    let kerdesIndex = 0
    ajax.getAjax("/kategoria", kategoriaKiir)
    ajax.getAjax("/tesztek", kerdesekEltarolasa)
    function kategoriaKiir(tomb) {
        $("#teszt-valaszto").empty()
        $("#teszt-valaszto").append("<option disabled selected>Válassz egy kategoriát</option>")
        tomb.forEach(element => {
            $("#teszt-valaszto").append("<option id=" + element.id + ">" + element.kategorianev + "</option>")
        });
    }
    function kerdesekEltarolasa(tomb) {
        for (let i = 0; i < tomb.length; i++) {
            kerdesek.push(tomb[i])
            kerdesekKategorizalva.push(tomb[i])
        }
        kerdesKiIras()
    }
    function kerdesKiIras() {
        console.log(kerdesekKategorizalva)
        if (kerdesIndex < kerdesekKategorizalva.length) {
            $("#tesztek").empty()
            const element = kerdesekKategorizalva[kerdesIndex];
            const elem = $("<div class='sor '></div>").appendTo("#tesztek")
            new Tesztkerdes(elem, element)
            kerdesIndex++
        }
    }
    // function tablazatKiir(tomb) {
    //     console.log(tomb)
    //     for (let index = 0; index < tomb.length; index++) {
    //         const element = tomb[index];
    //         const elem = $("<div class='sor '></div>").appendTo("#tesztek")
    //         new Tesztkerdes(elem, element)
    //     }

    // }
    $(window).on("szinValtas", (esemeny) => {
        const kattintottErtek = esemeny.detail.kattintottErtek
        if (kattintottErtek == esemeny.detail.adat.helyes) {
            $(esemeny.detail.valszok[esemeny.detail.kattintottId]).css("background", "green")
        }
        else {
            $(esemeny.detail.valszok[esemeny.detail.kattintottId]).css("background", "red")
            let i = 0
            while (i < esemeny.detail.valaszok.length && esemeny.detail.valaszok[i] != esemeny.detail.adat.helyes) {
                console.log(kattintottErtek, esemeny.detail.adat.helyes)
                i++
            }
            $(esemeny.detail.valszok[i]).css("background", "green")
        }
        setTimeout(() => {
            kerdesKiIras()
        }, 2000)
    })

    $("#teszt-valaszto").on("change", function () {
        let id = $(this)[0].selectedIndex
        kerdesekKategorizalva = []
        console.log(kerdesek)
        let kivalasztottKategoria = $(this)[0][id].text
        for (let i = 0; i < kerdesek.length; i++) {
            console.log(kerdesek[i])
            if (kerdesek[i].kategoria.kategorianev == kivalasztottKategoria) {
                kerdesekKategorizalva.push(kerdesek[i])
            }
        }
        kerdesIndex = 0
        kerdesKiIras()
    })
})