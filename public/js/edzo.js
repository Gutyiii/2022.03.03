$(function () {
    let idopontokTomb = [];
    const idopontok = new Idopontok(idopontokTomb);
    const myAjax = new MyAjax();
    /* idopontok.megjelenit(idopontokTomb,jelenlegiDatum); */


    function jelenlegiDatum(napvaltoztat) {
        var jelenlegiDatum = new Date();
        jelenlegiDatum.setDate(jelenlegiDatum.getDate() + napvaltoztat);
        let jelenlegiDatumSzerkesztes = "";
        jelenlegiDatumSzerkesztes = jelenlegiDatum.getFullYear().toString();
        jelenlegiDatumSzerkesztes += "-";
        
        if (jelenlegiDatum.getMonth().toString().length === 1) {
          jelenlegiDatumSzerkesztes += "0";
          jelenlegiDatumSzerkesztes += (jelenlegiDatum.getMonth()+1).toString();
        } else {
          jelenlegiDatumSzerkesztes += (jelenlegiDatum.getMonth()+1).toString();
        }
        jelenlegiDatumSzerkesztes += "-";
        if (jelenlegiDatum.getDate().toString().length === 1) {
          jelenlegiDatumSzerkesztes += "0";
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getDate().toString();
        } else {
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getDate().toString();
        }
        jelenlegiDatumSzerkesztes += " ";
        if (jelenlegiDatum.getHours().toString().length === 1) {
          jelenlegiDatumSzerkesztes += "0";
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getHours().toString();
        } else {
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getHours().toString();
        }
        jelenlegiDatumSzerkesztes += ":";
        if (jelenlegiDatum.getMinutes().toString().length === 1) {
          jelenlegiDatumSzerkesztes += "0";
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getMinutes().toString();
        } else {
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getMinutes().toString();
        }
        jelenlegiDatumSzerkesztes += ":";
        if (jelenlegiDatum.getSeconds().toString().length === 1) {
          jelenlegiDatumSzerkesztes += "0";
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getSeconds().toString();
        } else {
          jelenlegiDatumSzerkesztes += jelenlegiDatum.getSeconds().toString();
        }
        return jelenlegiDatumSzerkesztes;
      }
      console.log(jelenlegiDatum(0));
      let apiVegpont = "http://localhost:4005/szemelyiEdzesek";
      myAjax.adatbeolvas(apiVegpont, idopontokTomb, idopontok.megjelenit,jelenlegiDatum);

      $(".szemelyKereso").on("keyup", () => {
        let szemely=[]
        let szemelyfoglall = $(".szemelyKereso").val();
        let apiVegpont2 = "http://localhost:4001/szemely";
        apiVegpont2 += "?nev=" + szemelyfoglall;
        myAjax.adatbeolvas(apiVegpont2, szemely, szemlyFunction);
      });
      function szemlyFunction(tomb){
        console.log(tomb[0]);
      }
      $(".lefoglal").on("click", () => {// ha kattintunk a lefoglal gomb-ra
        if($(".szemelyKereso").val()==="" && $(".datumLefoglal").val()===""){
          console.log("Nincs megadva név, és dátum");
        }else if($(".szemelyKereso").val()===""){
          console.log("Nincs megadva név");
        }else if($(".datumLefoglal").val()===""){
          console.log("Nincs megadva dátum");
        }
      });
      $(document).on("click", () => {//ha kattintunk valahol az oldalon
        if(!($(".datumLefoglal").val()==="")){//ha megvan adva dátum 
          $(".datumLefoglal")[0].value=$(".datumLefoglal").val().slice(0,13)+":00";//levágja a másodpercet és hozzá adjuk a 00 így mindig ha megadunk másodpercet akkor 00 lesz
        }
      });
      $(".datumLefoglal").on("click", () => {//rákattintás
        let jelenlegiDatumSeged=new Date().toISOString().split(".")[0].slice(0,16);
        $(".datumLefoglal")[0].min=jelenlegiDatumSeged;//a jelenlegi idő a minimum, utólagos lefoglalás nem lehetséges
        
        let max=parseInt(jelenlegiDatumSeged.slice(0,4))+1;//jelenlegi datumnak az évét átalakítja számmá és hozzáad 1-et
        max=max.toString();//visszaalakítás string-é
        let seged=jelenlegiDatumSeged.replace(jelenlegiDatumSeged.slice(0,4),max);//a jelenlegi évet kicseréli a jelenlegi év +1 re
        $(".datumLefoglal")[0].max=seged;//a jelenlegi idő +1 év a maximum
        if(!($(".datumLefoglal").val()==="")){//ha megvan adva dátum 
          $(".datumLefoglal")[0].value=$(".datumLefoglal").val().slice(0,13)+":00";//levágja a másodpercet és hozzá adjuk a 00 így mindig ha megadunk másodpercet akkor 00 lesz
        }
      });
      
});