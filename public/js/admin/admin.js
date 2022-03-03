let rendezes;
let superapivegponto = "http://localhost:3000/adat";
let tomb = [];
let megjelenit = 0;
const termek = [];
let mutat;
let myAjax;
let rend;

$(function () {
  var mindenadat = [];
  myAjax = new MyAjax();
  rend = new AdminRend();
let adat="gepek";
 

  
  mutat =
    "?_start=" +
    megjelenit +
    "&_limit=" +
    megjelenit +
    $("#listaz").val();
 
  
kezdes(adat);
  
$("#emberek").on("click",()=>{
  adat="emberek"
superapivegponto= "api/szemely";
kezdes(adat);
})
  
  $("#listaz").on("change", () => {
    console.log($("#listaz").val());
    mutat =
      "?_start=" + megjelenit + "&_end=" + (megjelenit + $("#listaz").val());
    rend.oldalakSzama(mindenadat);
  });
  $("#keresSzoveg").on("keyup", () => {
    rend.keresoMezo();
    console.log(rendezes);
  });
  $("#rendezes").on("change", () => {
    rend.rendezesTabla();
  });
  $(window).on("modosit", function (eseny) {
    $(".elemek").remove();
    $("main").append(
      '<section class="elemek row" style="border:1px solid black;width:400px;height:550px;overflow:auto" ><div class="elem" >'
    );
    $("main").css(
      "grid-template-areas",
      '"he he he he he he""as ar ar ar ar el"'
    );
    tomb = myAjax.adatBeolvasasElore(
      "../json/alapnevek.json",
      tomb,
      adat+"Kicsik"
    );
    seged = beviteliMezoGeneralas();
    console.log(eseny.detail);
    adatbeilleszt(eseny.detail, seged);
    apiOsszealitas();
  });
  function kezdes(adat){
    $(".elemek").remove();
    $("#fo").empty();
    $("#fo").append('<section class="elemek row" ><div class="elem" ></div></section>')
    myAjax.adatbeolvas(superapivegponto, mindenadat, rend.oldalakSzama);
    tomb = myAjax.adatBeolvasasElore("../json/alapnevek.json", tomb, adat);
  
    rendezes = "";
    rend.rendezoMezoLetreHozas(tomb);
    
    rend.oldalakSzama(mindenadat);
    apiOsszealitas();
  }
  function adatbeilleszt(adatok, seged) {
    tomb.forEach((element) => {
      if (element == "eszkoz_neve") {
        seged.forEach((segetelem) => {
          if (segetelem[element] === adatok[element]) {
            $("#" + element + " ").text(adatok[element]);
            console.log(segetelem[element]+"+"+adatok[element])
          }
          console.log(segetelem[element])
        });
        console.log(adatok[element]);
       
      } else {
        $("#" + element + " ").val(adatok[element]);
        console.log(adatok[element]);
      }
    });
  }

  function beviteliMezoGeneralas() {
    $("#javitas").remove();
    $("#fo").append('<form id="javitas"></form>');
    let seged = [];
    seged = myAjax.adatBeolvasasElore(
      "../json/eszkoz_tipuses.json",
      seged,
      "eszkoztipus"
    );
    let txt = "";
    tomb.forEach((element) => {
      txt += '<label for="' + element + '">' + element + ":</label>";

      if (tomb[0] == element) {
        txt +=
          '<input type="text" id="' +
          element +
          '" name="' +
          element +
          '" autofocus placeholder="' +
          element +
          '" disabled>';
      } else if (element === "eszkoz_neve") {
       

        txt += '<select id="eszozneve">';
        seged.forEach((element) => {
          txt +=
            '<option value="' +
            element.eszkoz_neve +
            '">' +
            element.eszkoz_neve +
            "</option>";
        });
        txt += "</select>";
      } else {
        txt +=
          '<input type="text" id="' +
          element +
          '" name="' +
          element +
          '" autofocus placeholder="' +
          element +
          '" required>';
      }
    });
    $("#javitas").append(txt);
    return seged;
  }
 
});

function apiOsszealitas() {
  vegApi = superapivegponto + rendezes + mutat;
  console.log(vegApi);
  myAjax.adatbeolvas(vegApi, termek, termekLista, tomb);
}

function termekLista(termekek, tomb) {
  Alap(tomb);

  const szuloElem = $(".elemek");
  const sablonElem = $(".elem");
  //  myAjax.getjson("alapnevek.json", tomb);

  szuloElem.empty();
  termekek.forEach(function (elem) {
    let node = sablonElem.clone().appendTo(szuloElem);
    const obj = new Kartya(node, elem, tomb);
  });
  sablonElem.hide(); //sablonelem eltávolítása
}
function Alap(tomb) {
  $(".elemek").empty();
  $(".elemek").append('<div class="elem  id"leftmenuinnerinner" ></div>');
  let txt = "";
  let index = 0;
  tomb.forEach((element) => {
    if (index == 0) {
      txt += "  <h6 >" + element + ":</h4>";
      txt += "<h5 class=" + element + ">Lorem ipsum dolor</h3>";
    } else {
      txt += "  <h6 >" + element + ":</h4>";
      txt += "  <p class=" + element + "></p>";
    }
    index++;
  });
  txt +=
    '<button class="torol">torol</button> <button class="modosit">modosit</button>';
  $(".elem").append(txt);
}
