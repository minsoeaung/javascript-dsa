function palindrome(str) {
    str = str.trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '') // none-alphanumeric removal
        .replace(/\s{1,}/g, '') // space removal

    if (str.length <= 1) {
        return true
    }
    if (firstChar(str) !== lastChar(str)) {
        return false
    }
    
    return palindrome(middleWord(str))
}

function firstChar(str) {
    return str.slice(0, 1)
}

function lastChar(str) {
    return str.slice(-1)
}

function middleWord(str) {
    return str.slice(1, str.length - 1)
}



console.log(palindrome("A man, a plan, a canal. Panama"))