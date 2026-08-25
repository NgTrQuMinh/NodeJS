// Bài 5: Vòng lặp và điều kiện
// Yêu cầu:

// Cho mảng số [2, 5, 8, 10, 13, 18, 21].

// Sử dụng vòng lặp for...of để in ra các số chia hết cho 3.
const arr = [2, 5, 8, 10, 13, 18, 21];

for (const value of arr) {
    if (value % 3 === 0) {
        console.log(value);
    }
}

// Sử dụng for...in để duyệt qua một đối tượng {a:1, b:2, c:3} và in ra key và value.
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(key, object[key]);
}

// Dùng while để tính tổng các số từ 1 đến 100.
let sum = 0;
let n = 0;
while (n <= 100) {
    sum += n;
    ++n;
}
console.log(sum);