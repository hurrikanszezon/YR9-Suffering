var weapondatabase = [
   
    { id: '#001', gyarto: "Farkas_Bertalan", nev: "vadaszkes", kategoria: "vagoeszkoz", ar: 15000, szallitas: "1 het", keszlet: 23, eladott: 10, bekerules: '2018-03-21', modositas: '2018-05-03' },
    { id: '#002', gyarto: "Authentic Kyoto", nev: "szamuraj_kard", kategoria: "vagoeszkoz", ar: 40000, szallitas: "1-2 het", keszlet: 5, eladott: 9, bekerules: '2018-04-07', modositas: '2018-05-06' },
    { id: '#003', gyarto: "Juratus", nev: "torok_szablya", kategoria: "vagoeszkoz", ar: 25000, szallitas: "1 het", keszlet: 12, eladott: 5, bekerules: '2017-12-18', modositas: '2018-01-11' },
    { id: '#004', gyarto: "Kossuth", nev: "hosszu_kard", kategoria: "vagoeszkoz", ar: 28000, szallitas: "1 het", keszlet: 9, eladott: 12, bekerules: '2018-01-30', modositas: '2018-03-26' },
    { id: '#005', gyarto: "Karl_Elsner", nev: "svajci_bicska", kategoria: "vagoeszkoz", ar: 7500, szallitas: "1 het", keszlet: 37, eladott: 42, bekerules: '2017-05-03', modositas: '2018-06-26' },
    { id: '#006', gyarto: "Zippo", nev: "ongyujto", kategoria: "kiegeszito", ar: 6500, szallitas: "1 het", keszlet: 34, eladott: 56, bekerules: '2017-02-14', modositas: '2018-06-06' },
    { id: '#007', gyarto: "Colt", nev: ".45_pisztoly", kategoria: "lofegyver", ar: 100000, szallitas: "2-3 het", keszlet: 7, eladott: 3, bekerules: '2018-01-16', modositas: '2018-05-07' },
    { id: '#008', gyarto: "Magnum", nev: ".45_revolver", kategoria: "lofegyver", ar: 150000, szallitas: "2-3 het", keszlet: 6, eladott: 3, bekerules: '2018-01-19', modositas: '2018-05-23' },
    { id: '#009', gyarto: "Zippo", nev: "lopor", kategoria: "kiegeszito", ar: 2500, szallitas: "1 het", keszlet: 1000, eladott: 436, bekerules: '2018-02-02', modositas: '2018-04-07' },
    { id: '#010', gyarto: "Colt", nev: "pisztolygolyo", kategoria: "kiegeszito", ar: 2500, szallitas: "1 het", keszlet: 250, eladott: 137, bekerules: '2017-11-22', modositas: '2018-06-15' },
    { id: '#011', gyarto: "Winchester", nev: "duplacsoves_puska", kategoria: "lofegyver", ar: 240000, szallitas: "2-3 het", keszlet: 4, eladott: 2, bekerules: '2018-04-19', modositas: '2018-05-02' },
    { id: '#012', gyarto: "Winchester", nev: "vadaszpuska", kategoria: "lofegyver", ar: 265000, szallitas: "2-3 het", keszlet: 3, eladott: 2, bekerules: '2018-06-08', modositas: '2018-06-11' },
    { id: '#013', gyarto: "General_Electric", nev: "m134_minigun", kategoria: "lofegyver", ar: 1450000, szallitas: "3 honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: '2018-04-23', modositas: '2018-05-06' },
    { id: '#014', gyarto: "M16", nev: "gepfegyver", kategoria: "lofegyver", ar: 500000, szallitas: "5 het", keszlet: 3, eladott: 3, bekerules: '2018-04-04', modositas: '2018-04-29' },
    { id: '#015', gyarto: "Arsenal", nev: "granatveto", kategoria: "lofegyver", ar: 2400000, szallitas: "5 honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: '2018-06-19', modositas: '2018-06-24' },
    { id: '#016', gyarto: "Luger", nev: "taposoakna", kategoria: "robbano_fegyver", ar: 610000, szallitas: "4 honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: '2018-01-18', modositas: '2018-05-07' },
    { id: '#017', gyarto: "Teller Ede", nev: "napalm", kategoria: "robbano_fegyver", ar: 0, szallitas: "mar_nem_kaphato", keszlet: 0, eladott: 0, bekerules: '2018-01-15', modositas: '2018-01-018' },
    { id: '#018', gyarto: "Elon Musk", nev: "langszoro", kategoria: "lofegyver", ar: 950000, szallitas: "5_honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: '2018-03-21', modositas: '2018-1-17' },
    { id: '#019', gyarto: "Mascara", nev: "vizhatlan_agyugolyo", kategoria: "kiegeszito", ar: 400000, szallitas: "2-3 het", keszlet: 10, eladott: 2, bekerules: '2018-06-25', modositas: '2018-06-30' },
    { id: '#020', gyarto: "Solingen", nev: "borvago_ollo", kategoria: "kiegeszito", ar: 6700, szallitas: "1 het", keszlet: 56, eladott: 78, bekerules: '2017-01-16', modositas: '2018-04-02' },
    { id: '#021', gyarto: "Tupperware", nev: "konzervnyito", kategoria: "kiegeszito", ar: 4700, szallitas: "1 het", keszlet: 47, eladott: 23, bekerules: '2018-02-03', modositas: '2018-04-08' },
    { id: '#022', gyarto: "Zippo", nev: "ongyujto_folyadek", kategoria: "kiegeszito", ar: 1200, szallitas: "1 het", keszlet: 67, eladott: 36, bekerules: '2017-12-03', modositas: '2018-01-07' },
    { id: '#023', gyarto: "Shell", nev: "vitriol", kategoria: "kiegeszito", ar: 7700, szallitas: "1 het", keszlet: 74, eladott: 60, bekerules: '2017-04-23', modositas: '2018-05-11' },
    { id: '#024', gyarto: "Bonaszen", nev: "szen", kategoria: "kiegeszito", ar: 1500, szallitas: "1 het", keszlet: 74, eladott: 68, bekerules: '2017-11-23', modositas: '2018-04-11' },
    { id: '#025', gyarto: "Vecsey", nev: "kezigranat", kategoria: "robbano_fegyver", ar: 150000, szallitas: "1-2 het", keszlet: 36, eladott: 11, bekerules: '2018-01-12', modositas: '2018-05-20' }

];


function sum () {
    var sum =0 
    for (var i= 0; i<weapondatabase.length; i++){
        sum += weapondatabase[i].ar
    }console.log(sum)
}

function bestseller (){
    var bestseller=0;
    var theBestseller={};
    for (var i= 0; i<weapondatabase.length; i++){
        if (weapondatabase[i].eladott > bestseller)
            {bestseller = weapondatabase[i].eladott;
            theBestseller=weapondatabase[i]}};
    console.log(theBestseller)
}

function avg (){
    var count=0;
    var avg=0;
    var sum=0;
    for (var i= 0; i<weapondatabase.length; i++){
        if (typeof weapondatabase[i].ar === "number"){
            sum += weapondatabase[i].ar;
            count++
    }}
        avg= sum/count
        console.log(avg)
}

function newest(){
    var newest = 0;
    for (var i= 0; i<weapondatabase.length; i++){
        if(new Date(weapondatabase[i].bekerules).valueOf()>= newest){
            newestProd=weapondatabase[i];
            newest = new Date(weapondatabase[i].bekerules).valueOf()}}
   
    console.log(newestProd)
}