CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255),
    name varchar(255),
    city varchar(255),
    PRIMARY KEY (id) -- Lưu ý: AUTO_INCREMENT bắt buộc phải có PRIMARY KEY
);

INSERT INTO
    Users
VALUES (
        NULL,
        'ntqminh@gmail.com',
        'ngtrquminh',
        'hatay'
    );

INSERT INTO
    Users
VALUES (
        NULL,
        'minhntq@gmail.com',
        'minhntq',
        'hanoi'
    );

SELECT * FROM Users u;