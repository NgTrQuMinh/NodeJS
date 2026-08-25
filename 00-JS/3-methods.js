// Bài 3: Array methods – map, filter, find
const products = [
    { id: 1, name: 'Laptop', price: 15000000, category: 'electronics' },
    { id: 2, name: 'Sách JS', price: 200000, category: 'books' },
    { id: 3, name: 'Tai nghe', price: 500000, category: 'electronics' },
    { id: 4, name: 'Bút bi', price: 10000, category: 'stationery' },
    { id: 5, name: 'Màn hình', price: 3000000, category: 'electronics' },
];

// Yêu cầu:
// Dùng map tạo mảng mới chỉ chứa tên sản phẩm(dạng chuỗi).
// Dùng filter lấy ra các sản phẩm thuộc danh mục 'electronics'.
// Dùng find tìm sản phẩm có id = 3.
// Dùng reduce tính tổng giá trị của tất cả sản phẩm.
// Dùng sort sắp xếp sản phẩm theo giá tăng dần, không làm thay đổi mảng gốc.


// 1
const nameProducts = products.map(item => {
    return item.name;
}).join('');

console.log(nameProducts); // LaptopSách JSTai ngheBút biMàn hình

// 2
const nameElectronics = products
    .filter(item => {
        return item.category === 'electronics';
    })
    .map(item => {
        return item.name;
    }).join('');

console.log(nameElectronics); // LaptopTai ngheMàn hình

// 3
const findID = products
    .find(item => String(item.id) === "3")

console.log(findID);

// 4
const sumProducts = products.reduce((cnt, item) => {
    return cnt + item.price;
}, 0)

console.log(sumProducts); // 18710000

// 5
const sortedProducts = [...products].sort((a, b) => {
    return a.price - b.price;
}).map(item => {
    return `${item.name} - ${item.price}`;
}).join(' ');

console.log(sortedProducts);









