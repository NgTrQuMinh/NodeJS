// Bài 8: Class và OOP
// Yêu cầu:
// Tạo class Product với constructor nhận name, price, category.
// Thêm phương thức getInfo() trả về chuỗi mô tả sản phẩm.
// Tạo lớp con Electronic kế thừa Product, thêm thuộc tính warrantyMonths và ghi đè phương thức getInfo() để bao gồm thông tin bảo hành.
// Tạo một instance của Electronic và in ra thông tin.

// 1
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo() {
        return `Sản phẩm: ${this.name} | Giá: ${this.price} | Danh mục: ${this.category}`;
    }
}

// 2 Tạo lớp con Electronic kế thừa từ Product
class Electronic extends Product {
    constructor(name, price, category, warrantyMonths) {
        super(name, price, category);   // Gọi constructor của lớp cha
        this.warrantyMonths = warrantyMonths;
    }

    getInfo() {
        // Lấy thông tin từ lớp cha và cộng thêm thông tin bảo hành
        return `${super.getInfo()} | Bảo hành: ${this.warrantyMonths} tháng`;
    }
}

// 3. Tạo một instance của Electronic và in ra thông tin
const myLaptop = new Electronic("Laptop ASUS ROG", "25.000.000đ", "Điện tử", 24);

console.log(myLaptop.getInfo()); 