var building1 = [
    ['a twosome place coffee cafe'],
    ['keep life hospital'],
    ['milyang pork soup restaurant']
];
var building2 = [
    ['hasamdong coffee cafe'],
    ['electronic land shopping mall']
];
var building3 = [
    ['a twosome place parking lot']
];

var line1 = [
    building1,
    building2,
    building3,
];


var print = function () {
    console.log(line1);
}
console.log(print());

for (var i = 0; i < line1.length; i++) {
    console.log(`Neighbors Distance ${i}: ${line1[i]}`);
}