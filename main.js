// for (let i = 0; i< 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i< 11; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// s = 0;
// for (let i = 0; i < 11; i++) {
//     s = s + i; {
//         console.log(s);
//     }
// }

// let count = 0;
// while (count < 3) {
//     console.log("Count", count);
//     count ++;
// }

// let num = 5;
// while(num > 0){
//     console.log(num);
//     num --;
// }

// let doValue = 0;
// do {
//     console.log("Value: ",doValue);
//     doValue ++;
// } while(doValue < 3);

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     if (i != 5) {
//         console.log(i);
//     }
//     if (i==8) {
//         break
//     }
// }

for (let i = 1; i <= 4; i++) {
    let s = '';
    for (let j = 1; j <= i; j++) {
        s += '*';
    }
    console.log(s);
}