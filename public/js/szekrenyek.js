class Szekrenyek {
  constructor(tomb) {
    this.szekrenyTomb = tomb
  }
  /* katt(tomb) {
    $(".feloldasGomb").on("click", (event) => {
      console.log(event);
      let id = $(event.target).attr("data-id");
      console.log(event.target);
      console.log(this.szekrenyTomb[id - 1]);
      console.log(id);
      tomb[id - 1].urese = true;
      console.log(this.szekrenyTomb[id - 1]);
      this.megjelenit(tomb);
    });
  } */
  getTomb(tomb){
    console.log(tomb);
  }
  getSzabadHelySzam(tomb,nem){
    let db=0;
    for (let index = 0; index < tomb.length; index++) {
      if((tomb[index].ures_e=="Ü"&&!(tomb[index].ures_e=="R"))&&(tomb[index].tipusa==nem)){
        db++;
      }
    }
    return db;
  }
  katt(id,neve,uresErtek) {
    this.szekrenyTomb[id-1].ures_e=uresErtek;
    let esemeny = new CustomEvent(neve, {
      detail: {
        tomb: this.szekrenyTomb,
        id: id-1,
      },
    });
    window.dispatchEvent(esemeny);
    //console.log("feloldva");
  }
  megjelenit(tomb,hova) {
    console.log(tomb);
    let txt =
      '<table ><thead><tr class="cim"><th>Szekrény szám</th><th>Neme</th><th>Üres-e</th><th>Felodás</th><th></th></tr><tbody>';
      
    for (let i = 0; i < tomb.length; i++) {
      let seged = "";
      let segedGomb = "";
      let segedHibasGomb = "";
      /* if(tomb[i].ures_e == "R"||tomb[i].ures_e == "F"){ */
      txt +=
      "<tr ><td class=>" +
        tomb[i].id +
        "</td>" +
        "<td>" +
        tomb[i].tipusa +
        "</td>";
        if (tomb[i].ures_e == "F") {
          seged = "Foglalt";
          segedGomb =
          '<button data-id="' +
          tomb[i].id +
          '" class="feloldasGomb">Feloldás</button>';
          segedHibasGomb=
          '<input type="checkbox" data-id="' +
          tomb[i].id +
          '" class="hibasGomb" name="switch" >';
      }else if(tomb[i].ures_e == "Ü"){
        seged = "Üres";
      }else if(tomb[i].ures_e == "R"){
        seged = "Rossz!";
        segedHibasGomb=
        '<input  data-id="' +
        tomb[i].id +
          '"type="checkbox" class="hibasGomb" name="switch" checked>';
        }
        txt += "<td>" + seged + "</td>";
        txt += "<td>" + segedGomb + "</td>";
        txt += "<td>" + segedHibasGomb + "</td>" + "</tr>";
      /* } */
    }
      txt += "<tbody></table>";
    
      //$(".osszesSzekreny").html(txt);
      $(hova).html(txt);
    
      $(".hibasGomb").on("change", (event) => {
      let id = $(event.target).attr("data-id");
      if(event.target.checked===true){

        this.katt(id,"kattint","R") ;
      }else{
        this.katt(id,"kattint","Ü");
      }
      console.log(event.target.checked);
    });
    $(".feloldasGomb").on("click", (event) => {
      let id = $(event.target).attr("data-id");
      this.katt(id,"kattint","Ü");
      //this.megjelenit(tomb,hova);
      //this.megjelenit(tomb);
      
      /* console.log("event");
      console.log(tomb[id-1].tipus); */

      /* const myAjax = new MyAjax();
      let apiVegpont = "http://localhost:4000/szekrenies";
      
      let szoveg={
        id: id,
        urese: tomb[id-1].urese,
        tipus: tomb[id-1].tipus,
      }
      console.log("szoveg");
      console.log(szoveg);
      myAjax.adatmodosit(apiVegpont,szoveg,id); */
    });
  
  }
  
}
