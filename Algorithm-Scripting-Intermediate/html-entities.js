function convertHTML(str) {

    for (let i = 0; i < str.length; ++i) {
        switch(str[i]) {
            case '&': str = str.replace(str[i], '&amp;'); break;
            case '>': str = str.replace(str[i], '&gt;'); break;
            case '<': str = str.replace(str[i], '&lt;'); break;
            case '"': str = str.replace(str[i], '&quot;'); break;
            case "'": str = str.replace(str[i], '&apos;'); break;
        }
    }

    return str;
}

console.log(convertHTML("Dolce & Gabbana"))