$(function () {
  const myAjax = new MyAjax();
  let szekrenyekTomb = [];
  const szekrenyemben = new Szekrenyek(szekrenyekTomb);
  var egyDbKulcs = [];
  var tombBerlets=[];
  const honapok = ["Január", "Február", "Március","Aprilis", "Május", "Június", "Július", "Augusztus","Szeptember", "Október", "November", "December"];
  const hetNapjai = ["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"];
  //
  var OltozofoglalasokTomb=[];
  var segedSzemelyTalaltE = false;
  var segedSzekrenyTalaltE = false;
  var segedVanEBerlete=false;
  var segedSzemelyNeme = "";
  var segedSzemelyId;
  var segedSzekrenyNeme = "";
  var kulcsSzama = "";
  var kulcsFoglaltE = "";
  var segedUtolsoOltozofog_id ="";
  const OsszesSzemely = [];
  let berletsTomb=[];

  /* var hibaUzenet = [];
  const errorElement = document.getElementById('szemelyerror');
  var x = document.querySelector("#szemelyerror1").querySelector("#child");
  const errorElement1 = document.querySelector("#szemelyerror1 #alertUzenet");
  console.log(errorElement1);
  $("#alertUzenet").html("CUCU")
  $("#alertUzenet").className = "alert sikeres"; */

  var hibak=['<div class="alert hiba"><h3 id="alertUzenet">Hiba</h3><a class="close">&times;</a></div>',
  '<div class="alert figyelmeztetes"><h3 id="alertUzenet">Hiba</h3><a class="close">&times;</a></div>',
  '<div class="alert sikeres"><h3 id="alertUzenet">Hiba</h3><a class="close">&times;</a></div>',]
  /* $("#szemelyerror").html(hibak[1]);
  $("#alertUzenet").html("Hiba szovege"); */



  var div = document.querySelector(".jobbTablazatSzekreny");
  var div2 = document.querySelector(".bal");
  
  function szekrenyekMegjelenit() {
    let apiVegpont = "http://localhost:4000/szekenies";
    myAjax.adatbeolvas(apiVegpont, szekrenyekTomb, kiir);

  }
  szekrenyekMegjelenit();
  let apiVegpont = "http://localhost:4000/szekenies";

  function kiir(tomb) {
    let seged = ".osszesSzekreny";
    szekrenyemben.megjelenit(tomb, seged);
    console.log(szekrenyemben.getSzabadHelySzam(tomb,"Férfi"));
    $("#ferfiLetszam").html(szekrenyemben.getSzabadHelySzam(tomb,"Férfi"));
    $("#noiiLetszam").html(szekrenyemben.getSzabadHelySzam(tomb,"Nő"));
    
  }
  
  

  function jelenlegiDatum() {
    var jelenlegiDatum = new Date();
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
  $(window).on("kattint", (event) => {
    console.log("...");
    let apiVegpont = "http://localhost:4000/szekenies";
    let gombId = event.detail.id;
    let tomb = event.detail.tomb;
    let szoveg = {
      id: gombId+1,
      //urese: tomb[gombId - 1].urese,
      ures_e: tomb[gombId ].ures_e,
      tipusa: tomb[gombId ].tipusa,
      created_at: "0000-00-00 00:00:00",
      updated_at: jelenlegiDatum(),
    };
    myAjax.adatmodosit(apiVegpont, szoveg, gombId+1);
    console.log(szoveg);
    //console.log($(".hibasGomb").checked);
  });
  function szemelyKereso(tomb) {

  };
  function keresés(tomb) {
    console.log(tomb);
    let seged = ".keresettSzekreny";
    if(tomb.length===0){
      //Nincs ilyen szekrény ha nincs akkor ne jelenjen meg semmisem
      /* $(seged).html(""); */
        div.style.display = "none";
        /* div2.style.display = "none"; */
    }else{
      console.log(div);
      /* if (div.style.display === "none") {
        console.log("none volt"); */
        div.style.display = "block";
      /* } */
      /* if (div2.style.display === "none") {
        console.log("none volt");
        div2.style.display = "block";
      } */
      /* $(".bal").html('<table><thead><tr><th>Neve</th><th>Képe</th><th>Bérlete</th></tr></thead><tbody><tr><td>Neve</td><td id="kep"></td><td id="berletDatum"></td></tr></tbody></table>'); */
      /* $("#szekrenyTipus").html("Szekrény tipusa: "+tomb[0].ures_e+" " +tomb[0].tipusa+'<button data-id="' +tomb[0].id +'" class="feloldasGomb">Feloldás</button>'+'<input type="checkbox" data-id="' +tomb[0].id +'" class="hibasGomb" name="switch" >'); */
      /* console.log(tomb[0].); */
      /* szekrenyemben.megjelenit(tomb, seged); */
      

      szekrenyemben.megjelenit(tomb, ".jobbTablazatSzekreny");
      /* Utolsó két oszlop törlése mivel foglalásnán nem akarjuk feloldani illetve módosítani hogy jó e vagy rossz */
      $('.jobbTablazatSzekreny tr').find('th:last, td:last').remove();
      $('.jobbTablazatSzekreny tr').find('th:last, td:last').remove();
    }
  }
    $(".keresSzekrenykulcs").on("keyup", () => {
      let tomb=[];
      let apiVegpont = "http://localhost:4000/szekenies";
      apiVegpont += "?id=" + $(".keresSzekrenykulcs").val();
      myAjax.adatbeolvas(apiVegpont,tomb,szekrenyKeresoMegjelenit);
    }); 
    function szekrenyKeresoMegjelenit(tomb){
      let seged="";
      if(tomb.length>0){
        seged+="<span>"+"Szekrény száma: ";
        seged+=tomb[0].id+"<br>";
        seged+="Állapota: ";
        
        
        if(tomb[0].ures_e==="F"){
          seged+="Foglalt"+"<br>";
          seged+='<button data-id="'+tomb[0].id+'" class="feloldasGomb">Feloldás</button>';
          seged+='<input type="checkbox" data-id="' +
          tomb[0].id +
          '" class="hibasGomb" name="switch" >';
        }else if(tomb[0].ures_e==="R"){
          seged+="Rossz"+"<br>";
          seged+="Típusa: ";
          seged+=tomb[0].tipusa+"</span>";
          seged+='<input type="checkbox" data-id="' +
          tomb[0].id +
          '" class="hibasGomb" name="switch" checked>';
        }else{
          seged+="Üres"+"<br>";
        }
        
      }
      $(".keresettSzekreny").html(seged);
      $(".feloldasGomb").on("click", (event) => {
        let id = $(event.target).attr("data-id");
        szekrenyemben.katt(tomb[0].id,"kattint","Ü");
      });
      $(".hibasGomb").on("change", (event) => {
        let id = $(event.target).attr("data-id");
        if(event.target.checked===true){
          szekrenyemben.katt(id,"kattint","R") ;
        }else{
          szekrenyemben.katt(id,"kattint","Ü");
        }
      });
    }
    
    $(".keresSzemely").on("keyup", () => {
      let tomb=[];
      let apiVegpont = "http://localhost:4001/szemely";
      apiVegpont += "?szemely_id=" + $(".keresSzemely").val();
      myAjax.adatbeolvas(apiVegpont,tomb,szemelyKeresoMegjelenit);
    }); 
    function szemelyKeresoMegjelenit(tomb){
      let seged=""
      
      if(tomb.length>0){
        seged+="<span>Neve: "
        seged+=tomb[0].nev+"<br>";
        seged+="Neme: "
        seged+=tomb[0].neme+"<br>";
        seged+="Igazolvány száma: "
        seged+=tomb[0].igazolvany_szam+"<br>";
        seged+="Igazolvány tipusa: "
        seged+=tomb[0].igazolvany_tipusa+"<br>";
        seged+="E-mail címe: "
        seged+=tomb[0].email_cim+"<br>";
        seged+="Jogosultsága: "
        seged+=tomb[0].jogosultsag_id+"<br>";
        seged+="Születési dátuma: "
        seged+=tomb[0].szul_datum+"</span>";
      }
      /* seged+="<p>"+"Neve: ";
        seged+="<p>"+tomb[0].nev+"</p>";
        seged+="<p>"+"Neme: "+"</p>";
        seged+="<p>"+tomb[0].neme+"</p>";
        seged+="<p>"+"Igazolvány száma: "+"</p>";
        seged+="<p>"+tomb[0].igazolvany_szam+"</p>";
        seged+="<p>"+"Igazolvány tipusa: "+"</p>";
        seged+="<p>"+tomb[0].igazolvany_tipusa+"</p>";
        seged+="<p>"+"E-mail címe: "+"</p>";
        seged+="<p>"+tomb[0].email_cim+"</p>";
        seged+="<p>"+"Jogosultsága: "+"</p>";
        seged+="<p>"+tomb[0].jogosultsag_id+"</p>";
        seged+="<p>"+"Születési dátuma: "+"</p>";
        seged+="<p>"+tomb[0].szul_datum+"</p>"; */
      $(".keresettSzemely").html(seged);
    };
    $("#katt1").on("keyup", () => {
      let szemelyfoglall = $(".szemelyLefoglal").val();
      let apiVegpont2 = "http://localhost:4001/szemely";
      apiVegpont2 += "?nev=" + szemelyfoglall;
      myAjax.adatbeolvas(apiVegpont2, OsszesSzemely, kepMegj);
    });
    $("#katt2").on("keyup", () => {
      let tomb=[];
      
      let kulcsfoglall = $(".kulcsLefoglal").val();
      let apiVegpont = "http://localhost:4000/szekenies";
      apiVegpont += "?id=" + kulcsfoglall;
      myAjax.adatbeolvas(apiVegpont, egyDbKulcs, kulcsMegjelenit);
      myAjax.adatbeolvas(apiVegpont,tomb,keresés);
  });
  function oltozofoglalasUgyfelSzures(tomb,esemeny){
    hibaUzenet=[];
    //console.log(tomb);//ugyfel szerint szurt oltozofoglalás
    //console.log(szekrenyekTomb);//összes szekrény
    //console.log(jelenlegiDatum());//jelenlegi dátum formátuma: 2022-01-15 20:23:55
    if(tomb.length===0){
      //adott személynek oltozofoglalás táblábol vannak e adatai ha nincs akkopr ez az első edzése
      /* console.log("Első edzése");
      hibaUzenet.push("Első edzése"); */
      $("#szemelyerror").html(hibak[2]);
      $("#alertUzenet").html("Első edzése");
      setTimeout(function(){ 
      //itt  van egy kód duplikálás
      apiVegpont = "http://localhost:4002/oltozofoglalas";
      let szoveg = {
        id: segedUtolsoOltozofog_id,
        szekreny_id: kulcsSzama,
        ugyfel: segedSzemelyId,
        datum: jelenlegiDatum(),
      };
      myAjax.adatkuldes(apiVegpont, szoveg);
      apiVegpont = "http://localhost:4000/szekenies";
      szoveg = {
        id: kulcsSzama,
        ures_e: "F",
        tipusa: segedSzekrenyNeme,
        created_at: "0000-00-00 00:00:00",
        updated_at: jelenlegiDatum(),
      };
      myAjax.adatmodosit(apiVegpont, szoveg, kulcsSzama);//felvesz egy új öltözőfoglalást
    }, 2000);
    }else{
      console.log(tomb[tomb.length-1].datum);
      let datum=tomb[tomb.length-1].datum;// az adott személynek az oltozo foglalás táblábol az utolsó foglalásnak a dátuma formátuma:2022-01-15 20:23:55
      
      if(!(datum.split(" ", 1)[0]===jelenlegiDatum().split(" ", 1)[0])){//datum.split(" ", 1)[0] formátuma: 2022-02-15
        //a jelenlegi dátum napra pontosan összehasonlítjuk az oltozofoglalás utolsó dátumával
        /* console.log("Ma még nem volt edzeni");
        hibaUzenet.push("Ma még nem volt edzeni");
        hibaUzenet.push("Szekreny lefoglalva"); */
        $("#szemelyerror").html(hibak[2]);
        $("#alertUzenet").html("Ma még nem volt edzeni,Szekrény lefoglalva");
        //itt  van egy kód duplikálás
        setTimeout(function(){ 
        apiVegpont = "http://localhost:4002/oltozofoglalas";
        let szoveg = {
          id: segedUtolsoOltozofog_id,
          szekreny_id: kulcsSzama,
          ugyfel: segedSzemelyId,
          datum: jelenlegiDatum(),
        };
        myAjax.adatkuldes(apiVegpont, szoveg);
        apiVegpont = "http://localhost:4000/szekenies";
        szoveg = {
          id: kulcsSzama,
          ures_e: "F",
          tipusa: segedSzekrenyNeme,
          created_at: "0000-00-00 00:00:00",
          updated_at: jelenlegiDatum(),
        };
        myAjax.adatmodosit(apiVegpont, szoveg, kulcsSzama);//szekrenies táblát módosítja foglalt ra
        }, 2000);
      }else{
        //ma már volt edzeni
        let i=-1;
        do{
          i++;
          if((szekrenyekTomb[i].id===tomb[tomb.length-1].szekreny_id)&&szekrenyekTomb[i].ures_e==="R"){
              ///összehasonlítjuk a szekrényekkel az adott személy utolso öltözőfoglalásával és ellenőrizzük hogy az adott öltözőfoglalás rossz-e
              //azért szükséges mert ha nála romlik el a szekrény akkor utdjuk újat adni neki
            /* console.log("Nála romlott el ma egy szekrény, adunk egy masikat");
            hibaUzenet.push("Nála romlott el ma egy szekrény, adunk egy masikat"); */
            $("#szemelyerror").html(hibak[1]);
            $("#alertUzenet").html("Nála romlott el ma egy szekrény, adunk egy masikat");
            apiVegpont = "http://localhost:4002/oltozofoglalas";
            let szoveg = {
              id: segedUtolsoOltozofog_id,
              szekreny_id: kulcsSzama,
              ugyfel: segedSzemelyId,
              datum: jelenlegiDatum(),
            };
            myAjax.adatkuldes(apiVegpont, szoveg);
            apiVegpont = "http://localhost:4000/szekenies";
            szoveg = {
              id: kulcsSzama,
              ures_e: "F",
              tipusa: segedSzekrenyNeme,
              created_at: "0000-00-00 00:00:00",
              updated_at: jelenlegiDatum(),
            };
            myAjax.adatmodosit(apiVegpont, szoveg, kulcsSzama);
          }else if(szekrenyekTomb.length-1===i){
            //ha az összes szekrényt megvizsgálta akkor kiderül hogy ma már volt edzeni mivel nem talált eggyezést az előző feltételeknél
            console.log("vége");
            /* console.log("Ma már volt edzeni");
            hibaUzenet.push("Ma már volt edzeni"); */
            $("#szemelyerror").html(hibak[1]);
            $("#alertUzenet").html("Ma már volt edzeni");
          }
        }while((!(szekrenyekTomb[i].id===tomb[tomb.length-1].szekreny_id)&&szekrenyekTomb[i].ures_e==="R")||!(szekrenyekTomb.length-1===i));
      }
      hiba();
    }
    /* if (hibaUzenet.length > 0) {
      esemeny.preventDefault()
      errorElement.innerText = hibaUzenet.join(', ');
      //alert(hibaUzenet.join(', '));
    } */
  }
  function oltozofoglalasUtolsoid(tomb,esemeny) {
    let OltozofoglalasokTomb = [];
    apiVegpont = "http://localhost:4002/oltozofoglalas";
    apiVegpont += "?ugyfel=" + segedSzemelyId;
      myAjax.adatbeolvas(apiVegpont,OltozofoglalasokTomb,oltozofoglalasUgyfelSzures,esemeny);
    segedUtolsoOltozofog_id =  (JSON.parse(tomb[tomb.length-1 ].id)+1).toString();
    
  }
  function hiba(){
    $(".close").click(function() {
      $(this).parent(".alert").fadeOut();
    });
    setTimeout(function(){ 
      $(".alert").fadeOut("slow"); 
    }, 2000); 
  }
  $(".lefoglal").on("click", (esemeny) => {
    /* console.log(esemeny);
    hibaUzenet=[]; */
    /* console.log(errorElement); */
    if (segedSzekrenyNeme === segedSzemelyNeme &&segedSzekrenyTalaltE &&segedSzemelyTalaltE &&kulcsFoglaltE === "Ü"&&segedVanEBerlete) {
      let OltozofoglalasokTomb = [];
      /* console.log("Szekreny lefoglalva");
      hibaUzenet.push("Szekreny lefoglalva"); */
      
      apiVegpont = "http://localhost:4002/oltozofoglalas";
      myAjax.adatbeolvas(apiVegpont,OltozofoglalasokTomb,oltozofoglalasUtolsoid,esemeny);
    } else if (
      !(segedSzekrenyNeme === segedSzemelyNeme) &&
      segedSzekrenyTalaltE &&
      segedSzemelyTalaltE &&
      kulcsFoglaltE === "F"
    ) {
      $("#szemelyerror").html(hibak[1]);
       $("#alertUzenet").html("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, és foglalt a szekrény");
      /* hibaUzenet.push("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, és foglalt a szekrény");
      console.log("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, és foglalt a szekrény"); */
    } else if (
      !(segedSzekrenyNeme === segedSzemelyNeme) &&
      segedSzekrenyTalaltE &&
      segedSzemelyTalaltE &&
      kulcsFoglaltE === "R"
    ) {
      $("#szemelyerror").html(hibak[1]);
       $("#alertUzenet").html("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, és rossz a szekreény");
      /* hibaUzenet.push("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, és rossz a szekreény");
      console.log("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, és rossz a szekreény"); */
    } else if (
      !(segedSzekrenyNeme === segedSzemelyNeme) &&
      segedSzekrenyTalaltE &&
      segedSzemelyTalaltE &&
      kulcsFoglaltE === "Ü"
    ) {
      $("#szemelyerror").html(hibak[1]);
       $("#alertUzenet").html("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, a szekrény üres");
      /* hibaUzenet.push("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, a szekrény üres");
      console.log("A személy " +segedSzemelyNeme +" nemű, viszont a szekrénybe csak " +segedSzekrenyNeme +" neműt lehet rakni, a szekrény üres"); */
    } else if (
      segedSzekrenyTalaltE &&
      segedSzemelyTalaltE &&
      kulcsFoglaltE === "F"
    ) {
      $("#szemelyerror").html(hibak[1]);
       $("#alertUzenet").html("Talált ilyen kulcsot, de már foglalt");
      /* hibaUzenet.push("Talált ilyen kulcsot, de már foglalt");
      console.log("Talált ilyen kulcsot, de már foglalt"); */
    } else if (
      segedSzekrenyTalaltE &&
      segedSzemelyTalaltE &&
      kulcsFoglaltE === "R"
    ) {
      $("#szemelyerror").html(hibak[1]);
       $("#alertUzenet").html("Talált ilyen kulcsot, de a szekrény rossz");
      /* hibaUzenet.push("Talált ilyen kulcsot, de a szekrény rossz");
      console.log("Talált ilyen kulcsot, de a szekrény rossz"); */
    } else if (!segedSzekrenyTalaltE && segedSzemelyTalaltE) {
      /* $("#szemelyerror").html(hibak[0]);
       $("#alertUzenet").html("Nincs ilyen szekrény"); */
      console.log("Nincs ilyen szekrény");
    } else if (segedSzekrenyTalaltE && !segedSzemelyTalaltE) {
      $("#szemelyerror").html(hibak[0]);
       $("#alertUzenet").html("Nincs ilyen személy");
      /* hibaUzenet.push("Nincs ilyen személy");
      console.log("Nincs ilyen személy"); */
    } else if (!segedSzekrenyTalaltE && !segedSzemelyTalaltE) {
      $("#szemelyerror").html(hibak[0]);
       $("#alertUzenet").html("Nincs ilyen személy, adj meg egy létező szekrényt");
      /* hibaUzenet.push("Nincs ilyen személy, adj meg egy szekrényt");
      console.log("Nincs ilyen személy, adj meg egy szekrényt"); */
    }else if(!segedVanEBerlete){
      console.log(segedSzekrenyTalaltE);
      /* hibaUzenet.push("Nincs Bérlete");
      console.log("Nincs Bérlete"); */
      $("#szemelyerror").html(hibak[1]);
       $("#alertUzenet").html("Nincs Bérlete");
    }
    /* if (hibaUzenet.length > 0) {
      esemeny.preventDefault()
      //errorElement.innerText = hibaUzenet.join(', ');
      alert(hibaUzenet.join(', '));
    } */
    hiba();
  });
  function kulcsMegjelenit(tomb) {
    if (tomb.length > 0) {
      //kulcsFoglaltE=JSON.parse(tomb[0].urese);
      kulcsFoglaltE = tomb[0].ures_e;
      kulcsSzama = tomb[0].id;
      segedSzekrenyNeme = tomb[0].tipusa;
      console.log("Talált ilyen kulcsot");
      segedSzekrenyTalaltE = true;
    } else if (tomb.length === 0) {
      console.log("Nincs ilyen Kulcs");
      segedSzekrenyTalaltE = false;
    }
  }
  function berletTipusKereses(tomb){
    let jelenlegiDatumIdo= new Date();
    for (let index = tombBerlets.length-1; index > -1; index--) {
      console.log("lefut");
      let datum=tombBerlets[index].datum_tol;
      let jEv1 =datum.slice(0,10);
      let tol30nap=new Date(jEv1);
      console.log(tol30nap);
      let tolnap=new Date(jEv1);
      tol30nap.setDate(tol30nap.getDate()+JSON.parse(tomb[0].idotartam_nap)-1);
      if(jelenlegiDatumIdo.getTime()<tol30nap.getTime()&&!(tolnap.getTime()<jelenlegiDatumIdo.getTime())){
        console.log("Van Tartalék bérlete");
        segedVanEBerlete=false;
      }else if(jelenlegiDatumIdo.getTime()<tol30nap.getTime()&&tolnap.getTime()<jelenlegiDatumIdo.getTime()){
        console.log("Jo berlet");
        segedVanEBerlete=true;
        let kivonas=tol30nap.getTime()-jelenlegiDatumIdo.getTime();
        kivonas = kivonas/(1000*3600*24);
        $("#berletDatumTd").html("Még meddig jó a bérlete");
        $("#berletDatum").html((tol30nap.getFullYear())+"-"+(tol30nap.getMonth()+1)+"-"+(tol30nap.getDate())+"("+honapok[tol30nap.getMonth()]+")"+"("+hetNapjai[tol30nap.getDay()]+")"+"<br>Még "+Math.floor(kivonas)+" napig jó");
        console.log(tol30nap);
        console.log(hetNapjai[tol30nap.getDay()]);
        console.log(tolnap.getDay());
        break;
        //"("+hetNapjai[tol30nap.getDay()]+")"+
      }else{
        segedVanEBerlete=false;
        $("#berletDatumTd").html("Még meddig jó a bérlete");
        $("#berletDatum").html("Sajnos lejárt a bérlete");
        console.log("Lejart berlet");
      }
      console.log(tol30nap.getTime());
      console.log(jelenlegiDatumIdo.getTime());
    }
    tombBerlets=[];
    console.log("befejezve");
  }
  function datumTolBerlet(tomb){
    if(tomb.length===0){
      console.log("Még nem volt bérlete");
    }else if(tomb.length>0){
      for (let index = 0; index < tomb.length; index++) {
        tombBerlets.push(tomb[index]);
      }
      let apiVegpont="http://localhost:4004/berlet_tipuses";
      apiVegpont=apiVegpont += "?berlet_tipus_id=" + tomb[0].berlet_tipus_id;
      myAjax.adatbeolvas(apiVegpont,berletsTomb,berletTipusKereses);
    }
    console.log("befej");
    
  }
  function kepMegj(tomb) {
    if (tomb.length > 0) {
      segedSzemelyNeme = tomb[0].neme;
      segedSzemelyId = tomb[0].szemely_id;
      segedSzemelyTalaltE = true;
      let apiVegpont="http://localhost:4003/berlets";
      apiVegpont=apiVegpont += "?ugyfel=" + tomb[0].szemely_id;
      myAjax.adatbeolvas(apiVegpont,berletsTomb,datumTolBerlet);
      console.log("Talált ilyen személyt");
      let kepecske = '<img src="' + tomb[0].kep + '"alt="Profilkép"></img>';
        div2.style.display = "block";
      $("#kep").html(kepecske);
      $("#kepTd").html("Kép");
    } else {
      console.log("Nincs ilyen Személy");
      segedSzemelyTalaltE = false;
        div2.style.display = "none";
      $("#kep").html("");
      $("#kepTd").html("");
      $("#berletDatumTd").html("");
      $("#berletDatum").html("");
    }
    //$(".katt").append(txt);
    //$(".katt th").last().remove();
  }
  
});
