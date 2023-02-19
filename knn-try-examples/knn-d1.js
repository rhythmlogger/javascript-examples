var d1 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 10
];

const size = 1; // set no 2

//0~10
function arr(x, y, ...z) {
    return [x, y, ...z];
}
function knn(center) {
    var start = center - size;
    var center = center;
    var end = center + size;
    return arr(d1[start], d1[center], d1[end]);
}
var sq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];
console.log(`d1 : ${d1}`);
console.log(`sq:  ${sq}`);
console.log('---------');
sq.forEach(e => {
    console.log(`knn(d1[e]) = ${knn(d1[e])} `)
});


