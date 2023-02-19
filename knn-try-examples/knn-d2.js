var map = [
    //0 current
    //n distance
    ["또랑", "주차장", "전자"], //distance 0 
    ["투섬플레이스", "하삼동", "밥상"], //distance 1
    ["밀양", "오륙도", "퇴근길"], //distance 2
    ["양", "감자탕", "주차장"],  // distance 3
    ["은행", "PC방", "열쇠"], //distance 4
    ["은빛", "초밥", "향어"],// distance 5
    ["소고기", "컴포즈", "파리"],//distance 6
    ["통신", "약국", "치킨"],// distance 7
    ["분식", "편의점", "노래"],// distance 8
    ["김밥", "족발", "떡"] // distance 9
];

var printMap = function () {
    console.log(map);
}
console.log(printMap());

for (var i = 0; i < map.length; i++) {
    console.log(`Neighbors Distance ${i}: ${map[i]}`);
}