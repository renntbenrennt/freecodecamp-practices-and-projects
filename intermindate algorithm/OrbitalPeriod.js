/**
 * Return a new array that transforms the elements' average altitude 
 * into their orbital periods (in seconds).
 * 
 * This question is really easy as long as you find the formular,
 * which is:
 * 
 * T = 2 * 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
 * 
 * @param {*} arr 
 */
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(ele => cal(ele, GM, earthRadius));
}

function cal(obj, GM, earthRadius) {
    let t = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM);
    obj['orbitalPeriod'] = Math.round(t);
    delete obj['avgAlt'];
    return obj;
}