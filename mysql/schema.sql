CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE exams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    duration_minutes INT
);

INSERT INTO exams (title, duration_minutes) VALUES
('Math Test', 30),
('Science Test', 45);
