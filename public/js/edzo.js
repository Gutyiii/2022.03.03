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
          console.log("Nincs megadva n??v, ??s d??tum");
        }else if($(".szemelyKereso").val()===""){
          console.log("Nincs megadva n??v");
        }else if($(".datumLefoglal").val()===""){
          console.log("Nincs megadva d??tum");
        }
      });
      $(document).on("click", () => {//ha kattintunk valahol az oldalon
        if(!($(".datumLefoglal").val()==="")){//ha megvan adva d??tum 
          $(".datumLefoglal")[0].value=$(".datumLefoglal").val().slice(0,13)+":00";//lev??gja a m??sodpercet ??s hozz?? adjuk a 00 ??gy mindig ha megadunk m??sodpercet akkor 00 lesz
        }
      });
      $(".datumLefoglal").on("click", () => {//r??kattint??s
        let jelenlegiDatumSeged=new Date().toISOString().split(".")[0].slice(0,16);
        $(".datumLefoglal")[0].min=jelenlegiDatumSeged;//a jelenlegi id?? a minimum, ut??lagos lefoglal??s nem lehets??ges
        
        let max=parseInt(jelenlegiDatumSeged.slice(0,4))+1;//jelenlegi datumnak az ??v??t ??talak??tja sz??mm?? ??s hozz??ad 1-et
        max=max.toString();//visszaalak??t??s string-??
        let seged=jelenlegiDatumSeged.replace(jelenlegiDatumSeged.slice(0,4),max);//a jelenlegi ??vet kicser??li a jelenlegi ??v +1 re
        $(".datumLefoglal")[0].max=seged;//a jelenlegi id?? +1 ??v a maximum
        if(!($(".datumLefoglal").val()==="")){//ha megvan adva d??tum 
          $(".datumLefoglal")[0].value=$(".datumLefoglal").val().slice(0,13)+":00";//lev??gja a m??sodpercet ??s hozz?? adjuk a 00 ??gy mindig ha megadunk m??sodpercet akkor 00 lesz
        }
      });
      
});