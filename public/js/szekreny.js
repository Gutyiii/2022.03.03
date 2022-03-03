class Szekreny {
  constructor(adat)  {
    this.adat = adat;
    this.txt="";
    /* this.szekrenyElem = $(".szekreny");
    this.szekrenyElem.on("click", ".feloldasGomb", (event) => {
      let id = $(event.target).attr("data-id");
      //this.szekrenyTomb.splice(id, 1);
      console.log(this.szekrenyTomb.splice(id, 1));
    }); */
    /* console.log("Adat: ");
        console.log(adat); */

    /* $(".feloldasGomb").on("click", ".feloldasGomb", () => {
      console.log("lalala");
      this.kattintasTrigger();
    }); */

    this.adatAtiras(adat);
  }
  /* kattintasTrigger() {
    let esemeny = new CustomEvent("click", {
      detail: this.adat, //ezzel adatokat tudok átadni
    });

    window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
    //Az eseményt majd a script.js-ben el tudom kapni.
  } */

  adatAtiras(ertek) {
    this.txt =
      "<tr><th>" + ertek.szekreny_id + "</th>" + "<th>" + ertek.tipus + "</th>";
    let seged = "Üres";
    let segedGomb = "";
    if (ertek.urese === false) {
      seged = "Foglalt";
      segedGomb =
        '<th><button data-id="' +
        ertek.szekreny_id +
        '" class="feloldasGomb">Feloldás</button></th>';
    }

    this.txt += "<th>" + seged + "</th>" + segedGomb + "</tr>";
    this.kosarbaGombElem = $(".feloldasGomb");

    //console.log(this.txt);
  }
}
/* class SzekrenyFoglalt extends Szekreny{
    constructor(elem,adat){
        super(elem, adat)
        this.idElem=this.elem.children(".foglalas");
    }

} */
