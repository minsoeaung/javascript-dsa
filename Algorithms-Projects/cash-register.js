function checkCashRegister(price, cash, cid) {
    // let result = {
    //     status,
    //     change = []
    // }
    // const CURRENCY_UNIT = {
    //     'PENNY': 0.01,
    //     'NICKEL': 0.05,
    //     'DIME': 0.1,
    //     'QUARTER': 0.25,
    //     'ONE': 1,
    //     'FIVE': 5,
    //     'TEN': 10,
    //     'TWENTY': 20,
    //     'ONE HUNDRED': 100
    // }
    // let status;
    // let change = [];
    // let amount = 0;
    // const change_due = cash - price;




    console.log(cid)

    return '1'
}

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
checkCashRegister(
    19.5,
    20,
    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
);