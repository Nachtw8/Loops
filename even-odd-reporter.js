
const even = [0,2,4,6,8,10,12, 14,16, 8, 10];
const oneven = [1.3,5,7,9,11,13,15,17,19];
for (let i = 0; i <= 20; i++) {
    if (even.indexOf(i) !== -1 ) {
        getal = "even";
    }
    else {
        getal = "oneven";
    };

  console.log(`Number ${i} is: `+ getal);
}
