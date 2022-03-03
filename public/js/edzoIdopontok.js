class Idopontok{
    constructor(tomb){
        this.idopontokTomb=tomb;
    }
    megjelenit(tomb,myCallback){
        console.log(tomb.length);
        let tobbOraTombSeged=[];
        let hánySoros=7;
        let munkaoratol=8;
        let munkaoraig=22;
        let szamolo=0;
        let szamoloSeged=0;
        let iSeged="";
        let segedOra=1;
        const hetNapjai = ["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"];
        let tablaSzoveg="<table><thead><tr><th>Óra</th>";
        for (let index = 0; index < hánySoros; index++) {//tábla cím hány oszlopos
            var datum = new Date(myCallback(index));
            tablaSzoveg+='<th>'+hetNapjai[datum.getDay()]+'<br>'+myCallback(index).slice(0,10)+'</th>'
        }
        tablaSzoveg+='</tr></thead>';
        tablaSzoveg+='<tbody><tr>';
        var tablaTdId=0;
        for (let i = munkaoratol; i <munkaoraig; i++) {//táblának sorok száma
            tablaSzoveg+='<td>';
            tablaSzoveg+=i+'-tól';
            tablaSzoveg+='</td>';
            if(i<10){//ha a dátum 1-9 ig van  akkor berak eléjük egy nullát
                iSeged="0"+i.toString();
            }else{
                iSeged=i.toString();
            }
            for (let index = 0; index < hánySoros; index++) {//táblának 1 td elembe több személy
                let osszehasonlit1 = new Date(tomb[szamolo].datum);
                let osszehasonlit2 = new Date();
                if(osszehasonlit1<osszehasonlit2){//a tomb azon elemei átugrásam amik már a multban történt foglalások
                    szamolo++;
                }
                let belsoNevSzamolo=0;
                if(tomb[szamolo].datum.slice(0,10)===myCallback(index).slice(0,10)&&tomb[szamolo].datum.slice(11,13)===iSeged){//ha a tömbnek y adatának a dátuma megeggyezik a jelenlegi dátum + x nap formátum:(2022-02-28) és a  tömbböl az adott elemnek az óráját összehasonlítja a soronkénti for ciklusbol az i-jé vel
                    tablaSzoveg+='<td data-id='+i+"."+myCallback(index).slice(0,10)+'>';
                    while(((tomb[szamolo].datum.slice(0,10)===myCallback(index).slice(0,10))&&(tomb[szamolo].datum.slice(11,13)===iSeged))){//ha false kilép
                        //ha a tömbnek az adott elemének az órája 1 nél nagyobb akkor mentük el és rakjuk be a az eggyel alatta lévő sorba(figyelni kell a  számolóra)
                        if(parseInt(tomb[szamolo].ora)>1){//ha az adott elemnek az órája nagyobb mint 1 akkor
                            /* for (let index = 0; index < parseInt(tomb[szamolo].ora)-1; index++) { *///hanyszor rakja be az adott adatot a tömbbe ha 2x akkor az órája 3
                                /* szamolo++; */
                                tobbOraTombSeged.push(tomb[szamolo]);
                                szamoloSeged++;
                            /* } *//* 
                            console.log("mentes");
                            console.log(tobbOraTombSeged); */
                        }
                        tablaSzoveg+='<p>'+tomb[szamolo].ugyfelNev;
                        tablaSzoveg+='<button data-id=' +i+"."+myCallback(index).slice(0,10)+"."+belsoNevSzamolo+' class="feloldasGomb">Feloldás</button></p>';
                        szamolo++;
                        belsoNevSzamolo++;
                        if(tomb.length===szamolo){//ha a tömb hossza ugyanakkora mint a szamolo akkor kilép a while-bol
                            szamolo--;
                            console.log("kilepett");
                            break;
                        }
                    }
                    tablaSzoveg+='</td>';
                }else{
                    //tombnek az első elemének a dátum egyezik a jelenlegi datum+xindex nappal és az órával
                    if(!(tobbOraTombSeged[0]===undefined)){//ha van a tömben akkor belép
                        console.log(tobbOraTombSeged);
                        console.log("van a tömbben");
                        let seged1=0;

                        for (let index1 = 0; index1 < tobbOraTombSeged.length; index1++) {
                                if(!(tobbOraTombSeged[index1].datum.slice(11,13)+"."+tobbOraTombSeged[index1].datum.slice(0,10)===i+"."+myCallback(0).slice(0,10))&&index<1){
                                    console.log("nincs egyezes");
                                    tablaSzoveg+='<td sorOra='+i+'data-id='+i+"."+myCallback(index).slice(0,10)+'>';
                                    tablaSzoveg+="Üres";
                                    tablaSzoveg+='</td>';
                                }else if(tobbOraTombSeged[index1].datum.slice(0,10)===myCallback(index).slice(0,10)&&(parseInt(tobbOraTombSeged[0].datum.slice(11,13))+segedOra===i)){
                                    console.log("talalat");
                                    tablaSzoveg+='<td data-id='+i+"."+myCallback(index).slice(0,10)+'>';
                                    do{
                                        tablaSzoveg+='<p>'+tobbOraTombSeged[0].ugyfelNev;
                                        tablaSzoveg+='<button data-id=' +i+"."+myCallback(index).slice(0,10)+"."+belsoNevSzamolo+' class="feloldasGomb">Feloldás</button></p>';
                                        /* tobbOraTombSeged.shift(); */
                                        tobbOraTombSeged[index1].ora=(parseInt(tobbOraTombSeged[index1].ora)-1).toString()
                                        if(parseInt(tobbOraTombSeged[0].ora)===1){
                                            console.log("nagyobb");
                                            tobbOraTombSeged=delete tobbOraTombSeged[index1];
                                        }
                                        belsoNevSzamolo++;
                                        seged1++;
                                        if(tobbOraTombSeged[index1]===undefined){
                                            console.log("brék");
                                            break;
                                        }
                                    }while(!(tobbOraTombSeged[0].datum.slice(0,10)===myCallback(index).slice(0,10)&&(parseInt(tobbOraTombSeged[0].datum.slice(11,13))+segedOra===i)));
                                    tablaSzoveg+='</td>';
                                    segedOra++;
                                }else{
                                    
                                }
                                if(tobbOraTombSeged[index1]===undefined){
                                    console.log("brék");
                                    break;
                                }
                        }
                            
                        

                        
                    }else{
                        tablaSzoveg+='<td data-id='+i+"."+myCallback(index).slice(0,10)+'>';
                        tablaSzoveg+="ÜresA";
                        tablaSzoveg+='</td>';
                    }
                }
                tablaTdId++;
            }
            tablaSzoveg+='</tr>';
        }
        tablaSzoveg+='</tbody>';
        tablaSzoveg+='</table>';
        $(".idopontok").html(tablaSzoveg);
        $(".feloldasGomb").on("click", (event) => {
            console.log($(event.target).attr("data-id"));
            let id=$(event.target).attr("data-id");
            const kattintas=id.split(".");
            /* console.log(kattintas[1]); */
        });
    }
}