// Bài 6: Promise và Async / Await
// Yêu cầu:
// Viết hàm delay(ms) trả về một Promise giải quyết sau ms mili giây.
// Tạo hàm fetchUser() giả lập gọi API, trả về đối tượng { id: 1, name: 'John' } sau 2 giây(dùng setTimeout và Promise).
// Viết hàm getUserInfo() sử dụng async / await để gọi fetchUser(), in ra thông tin, và xử lý lỗi nếu có(dùng try/catch).
// Gọi getUserInfo().

// 1
function delay(ms) {
    return new Promise((resolve, reject) => {
        if (ms > 100) {
            reject("LAG!");
        } else if (ms > 0) {
            resolve("OK!");
        } else {
            reject("Không có dữ liệu thời gian!");
        }
    });
}

// Cách chạy thử nghiệm:
delay(20)
    .then(result => console.log(result))  // In ra: OK!
    .catch(error => console.log(error));

// 2
function fetchUser() {
    return { id: 1, name: 'John' };
}

const callAPI = new Promise((res, rej) => {
    setTimeout(() => {
        let check = true;
        if (check) {
            res(fetchUser());
        } else {
            rej('303');
        }
    }, 2000);
});

callAPI
    .then(result => console.log(result)) // In ra: { id: 1, name: 'John' }
    .catch(error => console.log(error)); // In ra '303' nếu check = false




async function start() {
    try {
        let check = true;
        setTimeout(() => {
            if (check) {
                console.log('getUserInfo: '.fetchUser());
                return;
            } else {
                console.log('False');
            }
        }, 2000);
    } catch (error) {
        console.log(error);
    }
}
start();