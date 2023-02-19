//#20210217dt #pm0443
function dt1(dt1Array) {
    var intervalAverage = 0;
    var intervalSum = 0;
    var interval = 0; //start set..?
    for (var i = 0; i < dt1Array.length; i++) {
        intervalSum += (dt1Array[0] - interval);
        // dt1Array[i];
    }
    return m;
}
// #20210217dt #pm0300
function toArray(a, b, ...c) {
    return [a, b, ...c];
}
// var pattern1 = [[1, 2, 3, 4], [5, 6, 7, 8]];
// var pattern2 = [[8, 7, 6, 5], [4, 3, 2, 1,]];
// var pattern3 = [[2, 4, 6, 8], [10, 12, 14, 16]];
// var pattern4 = [[0, -2, -4, -6], [-8, -10, -12, -14]];
var pattern1 = [1, 2, 3, 4, 5, 6, 7, 8];
var pattern2 = [8, 7, 6, 5, 4, 3, 2, 1,];
var pattern3 = [2, 4, 6, 8, 10, 12, 14, 16];
var pattern4 = [0, -2, -4, -6, -8, -10, -12, -14];
// #20210217dt #pm0442 
var pattern1Data = { length: pattern1.length, dt1: dt1(pattern1) };
var pattern2Data = { length: pattern2.length, dt1: dt1(pattern2) };
var pattern3Data = { length: pattern3.length, dt1: dt1(pattern3) };
var pattern4Data = { length: pattern4.length, dt1: dt1(pattern4) };
var isEqual = (pattern1_dt == pattern2_dt) ? true : false;
console.log(toArray(pattern1Data, pattern2Data, pattern3Data, pattern4Data));

// #20210217dt #pm0439
// #20210217dt #pm0448
console.log();