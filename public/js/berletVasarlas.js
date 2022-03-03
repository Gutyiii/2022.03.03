$(function () {

    const myajax = new MyAjax();
    const berletek = [];
    const kisKosar = new Kosar();
    let apiVegpont = "/api/berletVasarlas";

    myajax.adatbeolvas(apiVegpont, berletek, berletekMegjelenitese);

    function berletekMegjelenitese(){
        const szuloElem = $("#taroloSzulo");
        const sablon = $("footer .taroloGyerek");
        szuloElem.empty();
        sablon.show();
        berletek.forEach(function(elem, index) {
            const berlet = sablon.clone().appendTo(szuloElem);
            const beolvasottGep = new Berlet(berlet, elem, index); 
        });
        sablon.hide();
    }

    $(window).on("kosarhozad", (esemeny) => {
        let aktTermek = esemeny.detail;
        kisKosar.setKoarhozAdd(aktTermek);
    });

});