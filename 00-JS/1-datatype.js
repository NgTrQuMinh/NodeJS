// Bài 1: Biến và kiểu dữ liệu
// Yêu cầu:
// Khai báo một đối tượng book gồm các trường: title (string), author (string), pages (number), isPublished (boolean), genres (array of strings).
// In ra kiểu dữ liệu của từng trường sử dụng typeof.
// Chuyển đổi pages thành kiểu string và in ra kết quả.

class book {
    constructor(title, author, pages, isPublished, genres) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isPublished = isPublished;
        this.genres = genres;
    }

    // Getter
    get Result() {
        return `Result: ${typeof (this.title)} ${typeof (this.author)} ${typeof (this.pages)} ${typeof (this.isPublished)} ${typeof (this.genres)}`;
    }

    get render() {
        return `${ (this.title)} ${ (this.author)} ${ (this.pages)} ${ (this.isPublished)} ${(this.genres)}`   
    }
}

const genres = ['hài', 'tình cảm', 'buồn'];

const book1 = new book('Có công mài sắt có ngày nên kim', 'NgTrQuMinh', 120, true, genres[1]);

console.log(book1.render);
