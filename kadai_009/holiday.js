// 配列の宣言と値の代入
const holidays = ['正月', '成人の日', '建国記念日', '天皇誕生日', '春分の日', '昭和の日', '建国記念日', 'みどりの日', 'こどもの日', '海の日', '山の日', '敬老の日', '秋分の日', 'スポーツの日', '文化の日', '勤労感謝の日', ];

// for文を利用した場合
console.log('＜for文の場合＞');

for (let i = 0; i<=15; i++){
    console.log(holidays[i]);
}

// while文を利用した場合-1
console.log('＜while文の場合-1＞');

let i = 0;
while (holidays[i] !== '勤労感謝の日'){
    console.log(holidays[i]);
    i++;
}
console.log(holidays[i]);

// while文を利用した場合-2
console.log('＜while文の場合-2＞');

let n = 0;
while (n < holidays.length){
    console.log(holidays[n]);
    n++;
}