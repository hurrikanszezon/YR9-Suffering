var coffTypes = [
    {
        name: "Almost Cocaine",
        origin: "Columbia",
        str: 10,
        stock: 1,
        price: 1000,
        val: 16000
    },
    {
        name: "Cibet",
        origin: "Turkey",
        str: 7,
        stock: 3,
        price: 600,
        val: 8000

    },
    {
        name: "Dire Irish",
        origin: "India",
        str: 3,
        stock: 5,
        price: 600,
        val: 8000
    },
    {
        name: "Dirty Water",
        origin: "USA",
        str: 2,
        stock: 10,
        price: 250,
        val: 4000
    },
    {
        name: "Isengard Black",
        origin: "Rohan",
        str: 9,
        stock: 0,
        price: 1100,
        val: 17000
    },
    {
        name: "Java",
        origin: "Javas",
        str: 4,
        stock: 6,
        price: 500,
        val: 7000
    },
    {
        name: "Lazy Leisure",
        origin: "USA",
        str: 5,
        stock: 7,
        price: 300,
        val: 5000
    },
    {
        name: "Omnom",
        origin: "UK",
        str: 2,
        stock: 0,
        price: 350,
        val: 6000

    }
];

function searchC() {

    var message = "";
    var srcInput = document.querySelector("#srchFld").value.toLowerCase();

    for (var k = 0; k < coffTypes.length; k++) {
        if (srcInput == (coffTypes[k].name.toLocaleLowerCase() || coffTypes[k].name.indexOf('ir') > -1) && coffTypes[k].stock > 0) {
            message = "";
            for (var i in coffTypes[k]) {
                message += `${i} : ${coffTypes[k][i]} \n`;
            }
            break;
        } else if (srcInput === coffTypes[k].name.toLocaleLowerCase() && coffTypes[k].stock === 0) {
            message = "Nincs készleten";
            break;
        }
        else {
            message = "Ilyet nem tartunk.";
        }
    }
    alert(message);
};

function runningDry() {
    var message = "Ezekkel nem állunk jól: ";
    //   var onLow = [];
    for (var i = 0; i < coffTypes.length; i++)
        for (var k in coffTypes[i]) {
            if (coffTypes[i].stock < 3) {
                //    onLow.push(coffTypes[i].name);
                message += ` \n ${coffTypes[i].name}`;
            }
            break;
        }
    alert(message);
};

function onScale() {
    var light = [];
    var mid = [];
    var strong = [];
    var lightM = "Majdnem víz: ";
    var midM = "Majdnem hatásos: ";
    var strongM = "Majdnem kokain: ";
    for (var k = 0; k < coffTypes.length; k++) {
        for (var j in coffTypes[k]) {
            if (coffTypes[k].str <= 3) {
                light.push(coffTypes[k].name);
                lightM += `\n ${coffTypes[k].name}`;
                break;
            } else if (coffTypes[k].str >= 4 && coffTypes[k].str <= 7) {
                mid.push(coffTypes[k].name);
                midM += `\n ${coffTypes[k].name}`;
                break;
            } else {
                strong.push(coffTypes[k].name);
                strongM += `\n ${coffTypes[k].name}`;
                break;
            }
        }
    }
    console.log(light);
    console.log(mid);
    console.log(strong);

    var message = `${lightM} \n ${midM} \n ${strongM}`;
    alert(message);
};

function minMax() {
    var min = coffTypes[0].price;
    var max = coffTypes[0].price;
    var priciest = "";
    var budget = "";
    var avg = 0;
    for (var x = 0; x < coffTypes.length; x++) {
        for (var y in coffTypes[x]) {
            avg += coffTypes[x].price;
            if (max < coffTypes[x].price) {
                max = coffTypes[x].price;
                priciest = coffTypes[x].name;
            }
            if (min > coffTypes[x].price) {
                min = coffTypes[x].price;
                budget = coffTypes[x].name;
            }
            break; // Miért kell a break?
        }
    }
    avg = avg / coffTypes.length; // Miért ide?
    alert(`Legdrágább: ${priciest} \nLegolcsóbb:  ${budget} \nÁtlagár: ${Math.round(avg)} Ft`);
};

function onStockVal() {
    var sumPriceOnStock = 0;
    var sumKgOnStock = 0;
    for (var i = 0; i < coffTypes.length; i++) {
        for (var k in coffTypes[i]) {
            if (coffTypes[i].stock > 0) {
                sumKgOnStock += coffTypes[i].stock;
                sumPriceOnStock += coffTypes[i].val;
            }
            break;
        }
    }
    alert(`${sumKgOnStock} kg kávé van raktáron \n${sumPriceOnStock} Ft értékben`);
};
/* (Number.isNan(userNUmber))*/