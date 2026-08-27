/* What is Node.JS 
1.Web server 
Để viết (tạo ra) một web server, chúng ta cần ‘sử dụng’ các ngôn ngữ backend -  Java, PHP, Python, Ruby... và Javascript
- Node.JS chính là công cụ (môi trường) giúp chúng ta có thể thực thi code Javascript trên Server.
- Node.JS là platform (môi trường), không phải library (thư viện) hay framework. 

2. Cài đặt Node.JS
Download version mới nhất : https://nodejs.org/en/download/
Sau khi cài đặt thành công Node.JS, công việc này sẽ: 
- Cài đặt môi trường Node.JS 
- Cài đặt NPM ứng với version Node.js đã cài đặt 
 
Kiểm tra kết quả bằng cách sử dụng câu lệnh: 
node -v  
npm -v

* NPM - Node Package Manager
- NPM chính là công cụ quản lý các thư viện của Node.js
Trang chủ: https://www.npmjs.com/ 

Một vài câu lệnh thường dùng: 
Tài liệu: https://docs.npmjs.com/cli/v8/commands/npm-install 
 
Câu lệnh sử dụng nhiều nhất: 
npm i  library_name 
 
Hoặc  viết đầy đủ là npm install library_name 
- file package.json 
- 1 vài câu lệnh 
 

* Hello world với node.js (chạy với node) 
Để chạy file javascript, sử dụng câu lệnh: 
node + File.js 


* Cài Đặt Thư Viện Node.JS với NPM
1. Câu lệnh npm init 
npm init 
giúp tạo ra file package.json và các thông tin cần thiết: app name, version... 

2. Cài đặt thư viện 
Chỉ có thể thực hiện, khi đã có file package.json 
 
- Cài 1 package: 
npm install <package-name> 
 
- cài 1 package với version cụ thể: 
npm install <package-name>@<version> 

- Cài đặt express: 
https://www.npmjs.com/package/express 
 
npm i --save-exact express@4.18.2 

3. Running tasks 
npm run <task-name> 
 
{ 
  "scripts": { 
    "start-dev": "node server-development.js", 
    "start": "node server-production.js" 
  } 
} 
 
--- 
ví dụ với webpack: 
{ 
  "scripts": { 
    "watch": "webpack --watch --progress --colors --config webpack.conf.js", 
    "dev": "webpack --progress --colors --config webpack.conf.js", 
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js" 
  } 
} 
 
thay vì phải gõ câu lệnh dài dòng như vậy, thay bằng: 
$ npm run watch 
$ npm run dev 
$ npm run prod 
*/