$(function (){
    const token = $('meta[name="csrf-token"]').attr("content");
    const ajax = new Ajax(token);
    ajax.getAjax("/kategoria",kategoriaKiir)
    ajax.getAjax("/tesztek",tablazatKiir)
    function kategoriaKiir(tomb) {
        $("#teszt-valaszto").empty()
        $("#teszt-valaszto").append("<option disable selected>Válassz egy kategoriát</option>")
        tomb.forEach(element => {
            $("#teszt-valaszto").append("<option id=" + element.id + ">" + element.kategorianev + "</option>")
        });
    }
    function tablazatKiir(tomb) {
        console.log(tomb)
        $("#tesztek").empty()
        for (let index = 0; index < tomb.length; index++) {
            const element = tomb[index];
            const elem = $("<div class='sor '></div>").appendTo("#tesztek")
            new Tesztkerdes(elem, element)
        }
     
    }
    $(window).on("szinValtas", (esemeny) => {
       console.log(esemeny.detail.id)
       $(".v1").css("background","green")
       $(".v1").css("color","white")
       $(".v2").attr("disabled", false)
       $(".v3").attr("disabled", false)
       $(".v4").attr("disabled", false)
    })
})