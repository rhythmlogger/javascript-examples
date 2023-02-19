var tag2 = 2;
var tag3 = 3;
var tag5 = 5;
var tag7 = 7;

/*
    tag1RelatedRange = 2 ~ 2.9  int 2
    tag2RelatedRange = 3 ~ 4.9  int 3,4
    tag3RelatedRange = 5 ~ 6.9  int 5,6
    tag7RelatedRange = 7 ~ next int 7 over
*/

//tag
var tMap = [tag2, tag3, tag5, tag7];

//number
var relatedMap = [
    [0], // [0,1] : true, false
    [2], // [2] : 시작
    [3], // [3,4] : 표시여부1, 표시여부2
    [5], // [5,6] :대분류1, 대분류2
    [7], // [7,8,9,10] : 중분류1, 중분류2, 중분류3, 중분류4
];
//geo
var geoMap = [

];
