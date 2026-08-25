// Bài 2: Function cơ bản và Arrow Function
// Yêu cầu:
// Viết hàm findMax(a, b, c) trả về số lớn nhất trong 3 số (dùng function declaration).
// Viết arrow function isPositive(number) trả về true nếu số đó lớn hơn 0, ngược lại false.
// Viết hàm repeatString(str, n) trả về chuỗi lặp lại str n lần (dùng function hoặc arrow).
// Ví dụ:
// repeatString('abc', 3) → 'abcabcabc'

// 1
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

const MaxNumber = findMax(1, 2, 3);
console.log(MaxNumber); // 3

// 2
function isPositive(n) {
    return n >= 0;
}

const PositiveNumber = isPositive(5);
console.log(PositiveNumber); // true

// 3 
function repeatString(str, n) {
    return str.repeat(n);
}

const repeat = repeatString('abc', 3);
console.log(repeat);

