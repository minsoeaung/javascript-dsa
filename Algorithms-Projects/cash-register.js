const CURRENCY_UNIT = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
}

function checkCashRegister(price, cash, cid) {
    let moneyChange = cash - price;
    let status = "OPEN"
    let change = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ]

    // ****** hard coded for CLOSED case ******
    for (let i = 0; i < cid.length; ++i) {
        if (cid[i][1] == moneyChange) {
            return {
                status: "CLOSED",
                change: cid
            }
        }
    }

    // denominations that can be used for moneyChange
    let d = []
    for (let key in CURRENCY_UNIT) {
        if (CURRENCY_UNIT[key] > moneyChange) break;
        d.push([key, CURRENCY_UNIT[key]])
    }

    // calculation
    for (let i = d.length - 1; i >= 0; --i) {
        while (cid[i][1] > 0 && moneyChange >= d[i][1]) {
            // reduce drawer and moneyChange
            cid[i][1] -= d[i][1]
            moneyChange -= d[i][1]

            // update change arr
            change[i][0] = d[i][0]
            change[i][1] += d[i][1]

            // precision errors prevention
            moneyChange = Math.round(moneyChange * 100) / 100
        }
    }

    if (moneyChange > 0) {
        status = "INSUFFICIENT_FUNDS"
        change = []
    }

    return {
        status: status,
        change: change.reverse().filter(value => value[1] != 0)
    }
}


// ------------------------------------------------------ task -----------------------------------------------------------------------------

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


console.log(
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)

console.log(
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)