function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    let two_pi = 2 * Math.PI

    let getOrbPeriod = (avgAlt) => {
        let c = Math.pow(earthRadius + avgAlt, 3)
        let b = Math.sqrt(c / GM)
        return Math.round(two_pi * b)
    }

    for(let i=0;i<arr.length;++i) {
        arr[i]["orbitalPeriod"] = getOrbPeriod(arr[i].avgAlt)
        delete arr[i].avgAlt
    }

    return arr;
}

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))