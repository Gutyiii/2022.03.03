@extends('layouts.indexapp')
    @section('content')
    @include('includes.feluletheader')
        <header class="kepvaltas">
            <div id="demo" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <!-- The slideshow -->
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../kepek/hh1.jpg" alt="Los Angeles">
                  </div>
                  <div class="carousel-item">
                    <img src="../kepek/hh2.jpg" alt="Chicago">
                  </div>
                  <div class="carousel-item">
                    <img src="../kepek/hh3.jpg" alt="New York">
                  </div>
                </div>
              
                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </header>
            @include('includes.indexnav')
        <article>
            <div id="bemutatkozo">
                <p>Üdvözlünk konditerműnkben! <br><br>

                Mindenkit szívesen fogadunk, legyél gyenge vagy erős.
                Mikor ide belépsz egyenlő vagy a bent lévőkkel. <br>

                Rengeteg eszközünk és gépünk áll rendelkezésre minden ügyfelünknek.
                Az edzők és a dolgozók is tapasztaltak testépítés téren.
                Ha megkérdezed őket, hogyan is kell használni egy gépet, örömmel fognak segíteni. <br>
                
                A szabályzat fülben minden le van írva a termünkről, hogy mit szabad és milyen viselkedés tanusítását várjuk el.
                Ugyanezen a fülön megtaláljátok az elérhetőségeinket. Ha bármi kérdésed van, nyugodtan hívj minket vagy írj emailt.
                Edzőink, dolgozóink vagy esetleg adminunk tud rá választ adni. <br>

                Nincs azzal semmi gond, ha nem tudsz semmit magáról a testépítésről, vagy csak arról, hogyan is tudnád magad formába hozni.
                Bérleteknél tudsz olyan kombinált bérletet venni, amiben egy személyi edző lesz majd segítségedre. 
                Ezt a vásárlás fülnél tudod pontosabban tanulmányozni. 
                Ha pedig nem szeretnél személyi edzőt magad mellé, akkor sincs gond. <br>

                A gépek fülön tudod tanulmányozni a gépeinket és eszközeinket. Találsz róluk képet, leírást, videókat.
                Ezek megnézése segítségedre lehet, hogy tudd az adott gyakorlat végrehajtását normálisan csinálni. <br>

                Ha helyben vagy és van nálad telefon, márpedig manapság már igen ritka, ha valakinél nincs, le is tudod olvasni a gépeken lévő QR kódot.
                Ez a kód felvisz a weboldalra, pontosabban a gépek fülhöz és ott kiválasztja neked a gépet, ezáltal szintén eléred a képet, leírást, videókat.
                Ehhez csak egy egyszerű QR kód olvasó alkalmazásra van szükség a telefonon.<br><br>

                Összefoglalva, termünkben megvan minden, hogy egy jó edzést végre tudj hajtani és fejleszd a tested.
                Látogass el hozzánk és győződj meg te is erről.</p>
                <ul>
                    <li><a>Video</a></li>
                    <li><a>Video</a></li>
                    <li><a>Video</a></li>
                    <li><a>Video</a></li>
                </ul>
            </div>
            <div id="nagykep_tarolo">
                <img src="../kepek/articleimg.jpg" alt="sziaaaaaa">
            </div>
        </article>
        <aside>
            <div id="letszam_szamlalo">
                ÓRA
            </div>
            <div id="izomcsoport">
                Fontos, alap tudni való, mikor belépsz egy konditerembe hogy az izomcsoportjaiddal tisztában legyél.
                Felsorolás szinten:
                <ul>
                    <li>Váll (Trapézizom ,Vállizom + Nyakizom)</li>
                    <li>Mell (Mellizom)</li>
                    <li>Kar (Bicepsz, Tricepsz, Alkar)</li>
                    <li>Hát (Széles hátizom, Derék)</li>
                    <li>Láb (Vádli, Combhajlító)</li>
                    <li>Farizom, Hasizom</li>
                </ul>
                <p>Minden izomcsoportra rengeteg féle gyakorlat létezik.
                A legtöbb gyakolrat, mint például a fekve nyomás is, több izomcsoportot mozgat egyszerre.
                Ezáltal lehet kombinálni az edzés típusokat is. Például edzek karra és mellre is egyszerre.
                Csak a fantázián múlik mit kombinálsz. Ésszerű kereteken belül.<br>

                A fent leír izomcsoportok csak nagy általánosságban véve vannak megfoglamazva.
                Természetesen több izomcsoportból áll az ember teste.</p>
            </div>
        </aside>
    @endsection