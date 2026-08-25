// Bài 11: Xử lý bất đồng bộ nâng cao
// Yêu cầu:

// Cho 3 hàm giả lập gọi API trả về dữ liệu sau các khoảng thời gian khác nhau:

// javascript
function getUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000));
}
function getPosts() {
    return new Promise(resolve => setTimeout(() => resolve(['Post1', 'Post2']), 2000));
}
function getComments() {
    return new Promise(resolve => setTimeout(() => resolve(['Comment1', 'Comment2']), 1500));
}

// Viết hàm fetchAllData() sử dụng Promise.all để lấy đồng thời cả 3 dữ liệu và in ra kết quả.
async function fetchAllData() {
    // Bắt đầu tính thời gian thực thi với nhãn 'Execution Time'
    console.time('Execution Time');
    try {
        // Sử dụng Promise.all để chạy đồng thời cả 3 hàm
        const [user, posts, comments] = await Promise.all([
            getUser(),
            getPosts(),
            getComments()
        ]);
        console.log('--- Dữ liệu tải thành công ---');
        console.log('User:', user);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    } catch (error) {
        // Xử lý lỗi nếu một trong các Promise bị reject
        console.error('--- Đã xảy ra lỗi khi tải dữ liệu ---');
        console.error('Chi tiết lỗi:', error.message || error);
    } finally {
        // Kết thúc tính thời gian thực thi (luôn chạy dù thành công hay lỗi)
        console.timeEnd('Execution Time');
    }
}

fetchAllData();