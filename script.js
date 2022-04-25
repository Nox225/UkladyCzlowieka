const body = document.getElementById('body');
const list = document.querySelectorAll('.list');

const main = document.getElementById('main');

const closeDetails = document.getElementById("close-details");
const Details = document.getElementById("details");
const DetailsContainer = document.getElementById("details-container");

const male = document.getElementById('male');
const female = document.getElementById('female');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));  
    this.classList.add('active'); 
}

function stronaglowna(){
    main.innerHTML = ``;
    main.innerHTML = `
    <div class="glowna" id="glowna">
        <h2>Witaj na stronie internetowej poświęconej układami człowieka, wykonanej w celach edukacyjnych w ramach konkursu</h2>
        <p>W celu dowiedzenia się o interesującym Cię układzie, wybierz go z paska na górze, a następnie, klikając na wyróżnione części układu, znajdź więcej ciekawych informacji o danym zagadnieniu</p>
    </div>
    `;
    // body.appendChild(main);
}

stronaglowna();

//---------------------------Trawienny----------------------------
function trawienny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="trawienny" src="pictures/trawienny.png">
        <div class="jama-ustna" id="jama-ustna"></div>
        <div class="slinianki" id="slinianki"></div>
        <div class="watroba" id="watroba"></div>
        <div class="pecherzyk-zolciowy" id="pecherzyk-zolciowy"></div>
        <div class="dwunastnica" id="dwunastnica"></div>
        <div class="jelito-g" id="jelito-g"></div>
        <div class="gardlo1" id="gardlo1"></div>
        <div class="przelyk" id="przelyk"></div>
        <div class="zoladek" id="zoladek"></div>
        <div class="trzustka" id="trzustka"></div>
        <div class="jelito-c" id="jelito-c"></div>
        <div class="odbytnica" id="odbytnica"></div>
        <div class="otwor" id="otwor"></div>
    `;
    document.getElementById('jama-ustna').addEventListener('click', showDetailsJamaUstna);
    document.getElementById('slinianki').addEventListener('click', showDetailsSlinianki);
    document.getElementById('watroba').addEventListener('click', showDetailsWatroba);
    document.getElementById('pecherzyk-zolciowy').addEventListener('click', showDetailsPecherzykZolciowy);
    document.getElementById('dwunastnica').addEventListener('click', showDetailsDwunastnica);
    document.getElementById('jelito-g').addEventListener('click', showDetailsJelitoG);
    document.getElementById('gardlo1').addEventListener('click', showDetailsGardlo);
    document.getElementById('przelyk').addEventListener('click', showDetailsPrzelyk);
    document.getElementById('zoladek').addEventListener('click', showDetailsZoladek);
    document.getElementById('trzustka').addEventListener('click', showDetailsTrzustka);
    document.getElementById('jelito-c').addEventListener('click', showDetailsJelitoC);
    document.getElementById('odbytnica').addEventListener('click', showDetailsOdbytnica);
    document.getElementById('otwor').addEventListener('click', showDetailsOtwor);
}

function showDetailsJamaUstna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jama Ustna</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsSlinianki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Ślinianki</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsWatroba(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Wątroba</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPecherzykZolciowy(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pęcherzyk Żółciowy</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsDwunastnica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Dwunastnica</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJelitoG(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jelito Grube</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzelyk(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Przełyk</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZoladek(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żołądek</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsTrzustka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Trzustka</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJelitoC(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jelito Cienkie</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOdbytnica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Odbytnica</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOtwor(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Otwór odbytowy</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// --------------------------Oddechowy----------------------------

function oddechowy(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="oddechowy" src="pictures/oddechowy.jpg">
        <div class="pluco" id="pluco"></div>
        <div class="jama" id="jama"></div>
        <div class="gardlo" id="gardlo"></div>
        <div class="krtan" id="krtan"></div>
        <div class="tchawica" id="tchawica"></div>
        <div class="oskrzela" id="oskrzela"></div>
        <div class="pecherzyki" id="pecherzyki"></div>
    `;
    // body.appendChild(main);
    document.getElementById('pluco').addEventListener('click', showDetailsPluco);
    document.getElementById('jama').addEventListener('click', showDetailsJama);
    document.getElementById('gardlo').addEventListener('click', showDetailsGardlo);
    document.getElementById('krtan').addEventListener('click', showDetailsKrtan);
    document.getElementById('tchawica').addEventListener('click', showDetailsTchawica);
    document.getElementById('oskrzela').addEventListener('click', showDetailsOskrzela);
    document.getElementById('pecherzyki').addEventListener('click', showDetailsPecherzyki);
}

function showDetailsPluco(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Płuca</h3>
            <p>Płuco (łac. pulmo) – pojedynczy lub parzysty narząd oddechowy kręgowców. Służy do wymiany gazowej (potocznie oddychania). Do kręgowców tych zaliczane są też – prócz płazów, gadów, ptaków i ssaków – ryby dwudyszne, które w niesprzyjających warunkach atmosferycznych prowadzą wymianę gazową za pomocą workowatego płuca, powstałego z przekształconego pęcherza pławnego.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJama(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jama nosowa</h3>
            <p>Jama nosowa (łac. cavum nasi) – przestrzeń ograniczona powierzchnią wewnętrzną nosa zewnętrznego oraz kośćmi twarzoczaszki.</p>
    `;

    Details.appendChild(details);

    DetailsContainer.classList.remove('hidden');
}

function showDetailsGardlo(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Gardło</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKrtan(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Krtań</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsTchawica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Tchawica</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOskrzela(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Oskrzela</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPecherzyki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pęcherzyki płucne</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}
// -------------------------------Kostny----------------------------
function kostny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="kostny" src="pictures/kostny.png">
        <div class="mostek" id="mostek"></div>
        <div class="zebra" id="zebra"></div>
        <div class="ramienna" id="ramienna"></div>
        <div class="przedramienia" id="przedramienia"></div>
        <div class="reki" id="reki"></div>
        <div class="stopy" id="stopy"></div>
        <div class="czaszka" id="czaszka"></div>
        <div class="obojczyk" id="obojczyk"></div>
        <div class="lopatka" id="lopatka"></div>
        <div class="kregoslup" id="kregoslup"></div>
        <div class="miednicza" id="miednicza"></div>
        <div class="krzyzowa" id="krzyzowa"></div>
        <div class="udowa" id="udowa"></div>
        <div class="rzepka" id="rzepka"></div>
        <div class="podudzia" id="podudzia"></div>
    `;
    document.getElementById('mostek').addEventListener('click', showDetailsMostek);
    document.getElementById('zebra').addEventListener('click', showDetailsZebra);
    document.getElementById('ramienna').addEventListener('click', showDetailsRamienna);
    document.getElementById('przedramienia').addEventListener('click', showDetailsPrzedramienia);
    document.getElementById('reki').addEventListener('click', showDetailsReki);
    document.getElementById('stopy').addEventListener('click', showDetailsStopy);
    document.getElementById('czaszka').addEventListener('click', showDetailsCzaszka);
    document.getElementById('obojczyk').addEventListener('click', showDetailsObojczyk);
    document.getElementById('lopatka').addEventListener('click', showDetailsLopatka);
    document.getElementById('kregoslup').addEventListener('click', showDetailsKregoslup);
    document.getElementById('miednicza').addEventListener('click', showDetailsMiednicza);
    document.getElementById('krzyzowa').addEventListener('click', showDetailsKrzyzowa);
    document.getElementById('udowa').addEventListener('click', showDetailsUdowa);
    document.getElementById('rzepka').addEventListener('click', showDetailsRzepka);
    document.getElementById('podudzia').addEventListener('click', showDetailsPodudzia);
}

function showDetailsMostek(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Mostek</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZebra(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żebra</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsRamienna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Ramienna</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzedramienia(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kości Przedramienia</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsReki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kości Ręki</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsStopy(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kości Stopy</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsCzaszka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Czaszka</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsObojczyk(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Obojczyk</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsLopatka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Łopatka</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKregoslup(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kręgosłup</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMiednicza(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Miednicza</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKrzyzowa(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Krzyżowa</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsUdowa(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Udowa</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsRzepka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Rzepka</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPodudzia(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Podudzia</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// -----------------------------Krwionosny--------------------------
function krwionosny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="krwionosny" src="pictures/krwionosny.png">
        <div class="zylaglowna" id="zylaglowna"></div>
        <div class="tetnica" id="tetnica"></div>
        <div class="przedsionek-p" id="przedsionek-p"></div>
        <div class="komora-p"  id="komora-p"></div>
        <div class="aorta" id="aorta"></div>
        <div class="zylaplucna" id="zylaplucna"></div>
        <div class="przedsionek-l" id="przedsionek-l"></div>
        <div class="komora-l" id="komora-l"></div>
        <div class="serce" id="serce"></div>
    `;

    document.getElementById('zylaglowna').addEventListener('click', showDetailsZylaGlowna);
    document.getElementById('tetnica').addEventListener('click', showDetailsTetnica);
    document.getElementById('przedsionek-p').addEventListener('click', showDetailsPrzedsionki);
    document.getElementById('komora-p').addEventListener('click', showDetailsKomory);
    document.getElementById('aorta').addEventListener('click', showDetailsAorta);
    document.getElementById('zylaplucna').addEventListener('click', showDetailsZylaPlucna);
    document.getElementById('przedsionek-l').addEventListener('click', showDetailsPrzedsionki);
    document.getElementById('komora-l').addEventListener('click', showDetailsKomory);
    document.getElementById('serce').addEventListener('click', showDetailsSerce);
}

function showDetailsZylaGlowna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żyła Główna</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsTetnica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Tętnica</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzedsionki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Przedsionek</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKomory(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Komora</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsAorta(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Aorta</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZylaPlucna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żyła Płucna</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsSerce(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Serce</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// -------------------------------Rozrodczy--------------------------------
function rozrodczySex(){
    main.innerHTML = ``;
    main.innerHTML = `
        <div class="sex-container">
            <div>
                <div class="male" id="male"><i class="fas fa-mars"></i></div>
                <h3 class="male-text">Mężczyzna</h3>
            </div>
            <div>
                <div class="female" id="female"><i class="fas fa-venus"></i></div>
                <h3 class="female-text">Kobieta</h3>
            </div>
        </div>
    `;
    // body.appendChild(main);
    document.getElementById('male').addEventListener('click', Male);
    document.getElementById('female').addEventListener('click', Female);
}

function Male(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="rozrodczyM" src="pictures/rozrodczyM.png">
        <div class="pecherzyk" id="pecherzyk"></div>
        <div class="penis"  id="penis"></div>
        <div class="cewka" id="cewka"></div>
        <div class="prostata" id="prostata"></div>
        <div class="nasieniowod" id="nasieniowod"></div>
        <div class="jadro" id="jadro"></div>
        <div class="moszna" id="moszna"></div>
    `;
    document.getElementById('pecherzyk').addEventListener('click', showDetailsPecherzyk);
    document.getElementById('penis').addEventListener('click', showDetailsPenis);
    document.getElementById('cewka').addEventListener('click', showDetailsCewka);
    document.getElementById('prostata').addEventListener('click', showDetailsProstata);
    document.getElementById('nasieniowod').addEventListener('click', showDetailsNasieniowod);
    document.getElementById('jadro').addEventListener('click', showDetailsJadro);
    document.getElementById('moszna').addEventListener('click', showDetailsMoszna);
}

function showDetailsPecherzyk(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pęcherzyk nasienny</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPenis(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Penis</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsCewka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Cewka Moczowa</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsProstata(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Prostata</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsNasieniowod(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Nasieniowod</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJadro(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jądro</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMoszna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Moszna</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function Female(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="rozrodczyK" src="pictures/rozrodczyK.png">
        <div class="jajowod" id="jajowod"></div>
        <div class="jajnik" id="jajnik"></div>
        <div class="pochwa" id="pochwa"></div>
        <div class="macica" id="macica"></div>
    `;
    document.getElementById('jajowod').addEventListener('click', showDetailsJajowod);
    document.getElementById('jajnik').addEventListener('click', showDetailsJajnik);
    document.getElementById('pochwa').addEventListener('click', showDetailsPochwa);
    document.getElementById('macica').addEventListener('click', showDetailsMacica);
}

function showDetailsJajowod(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jajowod</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJajnik(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jajnik</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPochwa(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pochwa</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMacica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Macica</h3>
            <p></p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}







closeDetails.addEventListener('click', () => {
    DetailsContainer.classList.add("hidden");
    // console.log("click");
    Details.innerHTML = '';
});

list.forEach((item) =>
item.addEventListener('click', activeLink));

list[0].addEventListener('click', stronaglowna);
list[1].addEventListener('click', trawienny);
list[2].addEventListener('click', oddechowy);
list[3].addEventListener('click', kostny);
list[6].addEventListener('click', krwionosny);
list[7].addEventListener('click', rozrodczySex);