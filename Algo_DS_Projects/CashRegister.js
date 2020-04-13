const moneyChart = {
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

function changeShit(cid, money) {
    let res = [];

    let curChange = money;

    let newCID = cid.slice();

    let sortedCID = newCID.reverse();

    for (let i = 0; i < sortedCID.length; i++) {
        const currentMoney = moneyChart[sortedCID[i][0]];
        const currentMoneyInCID = sortedCID[i][1];
        if (curChange - currentMoney >= 0) {

            let changeInMoney = Math.floor(curChange / currentMoney);

            // console.log(`changeInMoney === ${curChange} / ${currentMoney} : ${changeInMoney} `);

            let moneyInThisTerm = changeInMoney * currentMoney;

            if (moneyInThisTerm > currentMoneyInCID) {
                res.push([sortedCID[i][0], currentMoneyInCID]);

                // console.log('curChange 1 === ', curChange);

                curChange = (curChange - currentMoneyInCID).toFixed(2);

                // console.log(`curChange ${curChange} -= currentMoneyInCID ${currentMoneyInCID}`);

            } else {
                res.push([sortedCID[i][0], currentMoney * changeInMoney]);

                // console.log('curChange 2 === ', curChange);

                curChange = (curChange - currentMoney * changeInMoney).toFixed(2);

                // console.log(`curChange ${curChange} -= currentMoney ${currentMoney} * changeInMoney ${changeInMoney}`);
            }

        } else if (sortedCID[i][1] == 0) {
            res.push([sortedCID[i][0], sortedCID[i][1]]);
        }
    }

    return res.length == cid.length ? res.reverse() : res;
}

/**
 * Design a cash register drawer function checkCashRegister() 
 * that accepts purchase price as the first argument (price), 
 * payment as the second argument (cash), 
 * and cash-in-drawer (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
 * or if you cannot return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change 
 * if it is equal to the change due.
 * 
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
 * sorted in highest to lowest order, as the value of the change key.
 * 
 * Currency Unit	Amount 
 * Penny	$0.01 (PENNY) 
 * Nickel	$0.05 (NICKEL) 
 * Dime	$0.1 (DIME) 
 * Quarter	$0.25 (QUARTER) 
 * Dollar	$1 (DOLLAR) 
 * Five Dollars	$5 (FIVE) 
 * Ten Dollars	$10 (TEN) 
 * Twenty Dollars	$20 (TWENTY) 
 * One-hundred Dollars	$100 (ONE HUNDRED)
 * 
 * 
 * @param {Number} price 
 * @param {Number} cash 
 * @param {2-D Array} cid 
 */
function checkCashRegister(price, cash, cid) {
    let res = {};

    let totalChange = cash - price;

    let change = changeShit(cid, totalChange);

    let summaryChange = change.reduce((init, cur) => init + cur[1], 0);

    console.log('totalChange === ', totalChange);

    console.log('summaryChange === ', summaryChange);

    if (summaryChange < totalChange) {
        res['status'] = 'INSUFFICIENT_FUNDS';
        res['change'] = [];
    } else {
        if (change.length == cid.length) {
            res['status'] = 'CLOSED';
            res['change'] = change;
        } else {
            res['status'] = 'OPEN';
            res['change'] = change;
        }
    }

    return res;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}