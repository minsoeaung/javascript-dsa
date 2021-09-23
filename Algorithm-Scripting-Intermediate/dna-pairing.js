// AT and CG


function pairElement(str) {
    let result = []

    for (let i = 0; i < str.length; ++i) {
        switch(str[i]) {
            case 'A': result.push(['A', 'T']); break;
            case 'T': result.push(['T', 'A']); break;
            case 'C': result.push(['C', 'G']); break;
            case 'G': result.push(['G', 'C']); break;
        }
    }


    return result
}

console.log(pairElement("GCG"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))



/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/