var rendeles = [];

$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});


function vadaszkes() {
    var vadaszkesamount = document.getElementById("vadaszkes").value;
    var vadaszkesresult = vadaszkesamount.toString();
    rendeles.push(vadaszkesresult + " vadászkés ");
}

function szamurajkard() {
    var szamurajkardamount = document.getElementById("szamurajkard").value;
    var szamurajkardresult = szamurajkardamount.toString();  
    rendeles.push(szamurajkardresult + " szamuráj kard ");
}

function torokszablya() {
    var torokszablyaamount = document.getElementById("torokszablya").value;
    var torokszablyaresult = torokszablyaamount.toString();  
    rendeles.push(torokszablyaresult + " török szablya ");
}

function hosszukard() {
    var hosszukardamount = document.getElementById("hosszukard").value;
    var hosszukardresult = hosszukardamount.toString();  
    rendeles.push(hosszukardresult + " hosszú kard ");
}

function svajcibicska() {
    var svajcibicskaamount = document.getElementById("svajcibicska").value;
    var svajcibicskaresult = svajcibicskaamount.toString();  
    rendeles.push(svajcibicskaresult + " svájci bicska ");
}

function ongyujto() {
    var ongyujtoamount = document.getElementById("ongyujto").value;
    var ongyujtoresult = ongyujtoamount.toString();  
    rendeles.push(ongyujtoresult + " öngyújtó ");
}

function pisztoly() {
    var pisztolyamount = document.getElementById("pisztoly").value;
    var pisztolyresult = pisztolyamount.toString();  
    rendeles.push(pisztolyresult + " pisztoly ");
}

function revolver() {
    var revolveramount = document.getElementById("revolver").value;
    var revolverresult = revolveramount.toString();  
    rendeles.push(revolverresult + " revolver ");
}

function lopor() {
    var loporamount = document.getElementById("lopor").value;
    var loporresult = loporamount.toString();  
    rendeles.push(loporresult + " lőpor ");
}

function pisztolygolyo() {
    var pisztolygolyoamount = document.getElementById("pisztolygolyo").value;
    var pisztolygolyoresult = pisztolygolyoamount.toString();  
    rendeles.push(pisztolygolyoresult + " pisztolygolyó ");
}

function puska() {
    var puskaamount = document.getElementById("puska").value;
    var puskaresult = puskaamount.toString();  
    rendeles.push(puskaresult + " duplacsöves puska ");
}

function vadaszpuska() {
    var vadaszpuskaamount = document.getElementById("vadaszpuska").value;
    var vadaszpuskaresult = vadaszpuskaamount.toString();  
    rendeles.push(vadaszpuskaresult + " vadászpuska ");
}

function minigun() {
    var minigunamount = document.getElementById("minigun").value;
    var minigunresult = minigunamount.toString();  
    rendeles.push(minigunresult + " minigun ");
}

function gepfegyver() {
    var gepfegyveramount = document.getElementById("gepfegyver").value;
    var gepfegyverresult = gepfegyveramount.toString();  
    rendeles.push(gepfegyverresult + " gépfegyver ");
}

function granatveto() {
    var granatvetoamount = document.getElementById("granatveto").value;
    var granatvetoresult = granatvetoamount.toString();  
    rendeles.push(granatvetoresult + " gránátvető ");
}

function akna() {
    var aknaamount = document.getElementById("akna").value;
    var aknaresult = aknaamount.toString();  
    rendeles.push(aknaresult + " taposóakna ");
}

function langszoro() {
    var langszoroamount = document.getElementById("langszoro").value;
    var langszororesult = langszoroamount.toString();  
    rendeles.push(langszororesult + " lángszóró ");
}

function agyugolyo() {
    var agyugolyoamount = document.getElementById("agyugolyo").value;
    var agyugyolyoresult = agyugyolyoamount.toString();  
    rendeles.push(agyugolyoresult + " ágyúgolyó ");
}

function ollo() {
    var olloamount = document.getElementById("ollo").value;
    var olloresult = olloamount.toString();  
    rendeles.push(olloresult + " olló ");
}

function konzervnyito() {
    var konzervnyitoamount = document.getElementById("konzervnyito").value;
    var konzervnyitoresult = konzervnyitoamount.toString();  
    rendeles.push(konzervnyitoresult + " konzervnyitó ");
}

function onfolyadek() {
    var onfolyadekamount = document.getElementById("onfolyadek").value;
    var onfolyadekresult = onfolyadekamount.toString();  
    rendeles.push(onfolyadekresult + " öngyújtó folyadék ");
}

function vitriol() {
var vitriolamount = document.getElementById("vitriol").value;
    var vitriolresult = vitriolamount.toString();  
    rendeles.push(vitriolresult + " vitriol ");
}

function szen() {
var szenamount = document.getElementById("szen").value;
    var szenresult = szenamount.toString();  
    rendeles.push(szenresult + " szén ");
}

function granat() {
var granatamount = document.getElementById("granat").value;
    var granatresult = granatamount.toString();  
    rendeles.push(granatresult + " kézigránát ");
}

   
function kosartartalom() {
    alert(rendeles);
}