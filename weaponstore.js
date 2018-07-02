var weapondatabase = [
    { id: 1, gyarto: "Farkas_Bertalan", nev: "vadaszkes", kategoria: "vagoeszkoz", ar: 15000, szallitas: "1 het", keszlet: 23, eladott: 10, bekerules: new Date(2018 - 03 - 21), modositas: new Date(2018 - 05 - 03) },
    { id: 2, gyarto: "Authentic Kyoto", nev: "szamuraj_kard", kategoria: "vagoeszkoz", ar: 40000, szallitas: "1-2 het", keszlet: 5, eladott: 9, bekerules: new Date(2018 - 04 - 07), modositas: new Date(2018 - 05 - 06) },
    { id: 3, gyarto: "Juratus", nev: "torok_szablya", kategoria: "vagoeszkoz", ar: 25000, szallitas: "1 het", keszlet: 12, eladott: 5, bekerules: new Date(2017 - 12 - 18), modositas: new Date(2018 - 01 - 11) },
    { id: 4, gyarto: "Kossuth", nev: "hosszu_kard", kategoria: "vagoeszkoz", ar: 28000, szallitas: "1 het", keszlet: 9, eladott: 12, bekerules: new Date(2018 - 01 - 30), modositas: new Date(2018 - 03 - 26) },
    { id: 5, gyarto: "Karl_Elsner", nev: "svajci_bicska", kategoria: "vagoeszkoz", ar: 7500, szallitas: "1 het", keszlet: 37, eladott: 42, bekerules: new Date(2017 - 05 - 03), modositas: new Date(2018 - 06 - 26) },
    { id: 6, gyarto: "Zippo", nev: "ongyujto", kategoria: "kiegeszito", ar: 6500, szallitas: "1 het", keszlet: 34, eladott: 56, bekerules: new Date(2017 - 02 - 14), modositas: new Date(2018 - 06 - 06) },
    { id: 7, gyarto: "Colt", nev: ".45_pisztoly", kategoria: "lofegyver", ar: 100000, szallitas: "2-3 het", keszlet: 7, eladott: 3, bekerules: new Date(2018 - 01 - 16), modositas: new Date(2018 - 05 - 07) },
    { id: 8, gyarto: "Magnum", nev: ".45_revolver", kategoria: "lofegyver", ar: 150000, szallitas: "2-3 het", keszlet: 6, eladott: 3, bekerules: new Date(2018 - 01 - 19), modositas: new Date(2018 - 05 - 23) },
    { id: 9, gyarto: "Zippo", nev: "lopor", kategoria: "kiegeszito", ar: 2500, szallitas: "1 het", keszlet: 1000, eladott: 436, bekerules: new Date(2018 - 02 - 02), modositas: new Date(2018 - 04 - 07) },
    { id: 10, gyarto: "Colt", nev: "pisztolygolyo", kategoria: "kiegeszito", ar: 2500, szallitas: "1 het", keszlet: 250, eladott: 137, bekerules: new Date(2017 - 11 - 22), modositas: new Date(2018 - 06 - 15) },
    { id: 11, gyarto: "Winchester", nev: "duplacsoves_puska", kategoria: "lofegyver", ar: 240000, szallitas: "2-3 het", keszlet: 4, eladott: 2, bekerules: new Date(2018 - 04 - 19), modositas: new Date(2018 - 05 - 02) },
    { id: 12, gyarto: "Winchester", nev: "vadaszpuska", kategoria: "lofegyver", ar: 265000, szallitas: "2-3 het", keszlet: 3, eladott: 2, bekerules: new Date(2018 - 06 - 08), modositas: new Date(2018 - 06 - 11) },
    { id: 13, gyarto: "General_Electric", nev: "m134_gitminigun", kategoria: "lofegyver", ar: 1450000, szallitas: "3 honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: new Date(2018 - 04 - 23), modositas: new Date(2018 - 05 - 06) },
    { id: 14, gyarto: "M16", nev: "gepfegyver", kategoria: "lofegyver", ar: 500000, szallitas: "5 het", keszlet: 3, eladott: 3, bekerules: new Date(2018 - 04 - 04), modositas: new Date(2018 - 04 - 29) },
    { id: 15, gyarto: "Arsenal", nev: "granatveto", kategoria: "lofegyver", ar: 2400000, szallitas: "5 honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: new Date(2018 - 06 - 19), modositas: new Date(2018 - 06 - 24) },
    { id: 16, gyarto: "Luger", nev: "taposoakna", kategoria: "robbano_fegyver", ar: 610000, szallitas: "4 honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: new Date(2018 - 01 - 18), modositas: new Date(2018 - 05 - 07) },
    { id: 17, gyarto: "Teller Ede", nev: "napalm", kategoria: "robbano_fegyver", ar: 0, szallitas: "mar_nem_kaphato", keszlet: 0, eladott: 0, bekerules: new Date(2018 - 01 - 15), modositas: new Date(2018 - 01 - 020) },
    { id: 18, gyarto: "Elon Musk", nev: "langszoro", kategoria: "lofegyver", ar: 950000, szallitas: "5_honap", keszlet: "csak_elorendelesre", eladott: 1, bekerules: new Date(2018 - 03 - 21), modositas: new Date(2018 - 1 - 17) },
    { id: 19, gyarto: "Mascara", nev: "vizhatlan_agyugolyo", kategoria: "kiegeszito", ar: 400000, szallitas: "2-3 het", keszlet: 10, eladott: 2, bekerules: new Date(2018 - 06 - 25), modositas: new Date(2018 - 06 - 30) },
    { id: 20, gyarto: "Solingen", nev: "borvago_ollo", kategoria: "kiegeszito", ar: 6700, szallitas: "1 het", keszlet: 56, eladott: 78, bekerules: new Date(2017 - 01 - 16), modositas: new Date(2018 - 04 - 02) },
    { id: 21, gyarto: "Tupperware", nev: "konzervnyito", kategoria: "kiegeszito", ar: 4700, szallitas: "1 het", keszlet: 47, eladott: 23, bekerules: new Date(2018 - 02 - 03), modositas: new Date(2018 - 04 - 08) },
    { id: 22, gyarto: "Zippo", nev: "ongyujto_folyadek", kategoria: "kiegeszito", ar: 1200, szallitas: "1 het", keszlet: 67, eladott: 36, bekerules: new Date(2017 - 12 - 03), modositas: new Date(2018 - 01 - 07) },
    { id: 23, gyarto: "Shell", nev: "vitriol", kategoria: "kiegeszito", ar: 7700, szallitas: "1 het", keszlet: 74, eladott: 60, bekerules: new Date(2017 - 04 - 23), modositas: new Date(2018 - 05 - 11) },
    { id: 24, gyarto: "Bonaszen", nev: "szen", kategoria: "kiegeszito", ar: 1500, szallitas: "1 het", keszlet: 74, eladott: 68, bekerules: new Date(2017 - 11 - 23), modositas: new Date(2018 - 04 - 11) },
    { id: 25, gyarto: "Vecsey", nev: "kezigranat", kategoria: "robbano_fegyver", ar: 150000, szallitas: "1-2 het", keszlet: 36, eladott: 11, bekerules: new Date(2018 - 01 - 12), modositas: new Date(2018 - 05 - 20) }
];

function robilegnepszerubb() {
    var robilegnepszerubb = 0;
    for (var i in weapondatabase) {
        if (robilegnepszerubb < weapondatabase[i].eladott)
            robilegnepszerubb = weapondatabase[i].eladott;

    }
    console.log(robilegnepszerubb);

}

function robilegujabb() {
    var item = '';
    var legujabb = new Date(2000 - 01 - 01);
    var added = legujabb.getTime();
    for (var i in weapondatabase) {
        for (var j in weapondatabase[i]) {
            if (added < weapondatabase[i].bekerules.getTime()) {
                added = weapondatabase[i].bekerules.getTime();
                item = weapondatabase[i].nev;
            }
        }
    }
    console.log(item);
}




robilegujabb();

function robiosszes() {
    var arsum = 0;
    for (var i in weapondatabase) {
        arsum += weapondatabase[i].ar;
    }
    console.log(arsum);
}
robiosszes();

function robiatlag() {
    var aratlag = 0;
    var arsum2 = 0;
    for (var i in weapondatabase) {
        arsum2 += weapondatabase[i].ar;
    }
    aratlag = arsum2 / weapondatabase.length;
    console.log(aratlag);
}

robiatlag();