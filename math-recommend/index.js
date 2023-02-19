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

var tagMap = [tag2, tag3, tag5, tag7];

//number
var command = {
    0: 'off',
    1: 'on',
    2: 2,
    3: 'visible',
    4: 'hidden',
    5: 5,
    6: 'title',
    7: 7,
    8: 'tag',
    9: 'value',
    10: 'encrypt',
    11: 'descript'
}