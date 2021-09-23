function destroyer(arr) {
    let result = []

    for (let i = 0; i < arr.length; ++i) {
        let duplicate = false;

        for (let j = 1; j < arguments.length; ++j) {
            if (arr[i] === arguments[j]) {
                duplicate = true;
            }
        }

        if (!duplicate) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))