function uniteUnique(arr) {

    // dont know how many arguments there, so, this all array will take care of it
    let all = []
    for(let i=0;i<arguments.length;++i)
        all.push(...arguments[i])
    
    let ans = []
    for (let i = 0; i < all.length; ++i) {

        // if it does not exist in ans, add it
        if(ans.indexOf(all[i]) === -1)
            ans.push(all[i])

        // if exist, no need to push, just continue
        continue
    }


    return ans;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))





/*
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

    uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/