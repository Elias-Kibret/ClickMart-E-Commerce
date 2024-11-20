INSERT INTO users (user_id, email, first_name, last_name, password, phone_number, user_reg_time, user_role, user_account_status)
VALUES
    (1, 'john.doe@example.com', 'John', 'Doe', 'password123', '1234567890', '2023-01-01 10:00:00', 'ROLE_USER', 'active'),
    (2, 'jane.smith@example.com', 'Jane', 'Smith', 'password456', '0987654321', '2023-01-02 11:00:00', 'ROLE_ADMIN', 'active'),
    (3, 'alice.johnson@example.com', 'Alice', 'Johnson', 'password789', '1112223333', '2023-01-03 12:00:00', 'ROLE_USER', 'active'),
    (4, 'bob.brown@example.com', 'Bob', 'Brown', 'password012', '4445556666', '2023-01-04 13:00:00', 'ROLE_USER', 'active'),
    (5, 'carol.white@example.com', 'Carol', 'White', 'password345', '7778889999', '2023-01-05 14:00:00', 'ROLE_USER', 'active'),
    (6, 'david.green@example.com', 'David', 'Green', 'password678', '0001112222', '2023-01-06 15:00:00', 'ROLE_USER', 'active'),
    (7, 'eve.black@example.com', 'Eve', 'Black', 'password901', '3334445555', '2023-01-07 16:00:00', 'ROLE_USER', 'active'),
    (8, 'frank.blue@example.com', 'Frank', 'Blue', 'password234', '6667778888', '2023-01-08 17:00:00', 'ROLE_USER', 'active'),
    (9, 'grace.gray@example.com', 'Grace', 'Gray', 'password567', '9990001111', '2023-01-09 18:00:00', 'ROLE_USER', 'active'),
    (10, 'henry.gold@example.com', 'Henry', 'Gold', 'password890', '2223334444', '2023-01-10 19:00:00', 'ROLE_USER', 'active'),
    (11, 'isabel.silver@example.com', 'Isabel', 'Silver', 'password1234', '5556667777', '2023-01-11 20:00:00', 'ROLE_USER', 'active'),
    (12, 'jack.bronze@example.com', 'Jack', 'Bronze', 'password5678', '8889990000', '2023-01-12 21:00:00', 'ROLE_USER', 'active'),
    (13, 'kate.platinum@example.com', 'Kate', 'Platinum', 'password9012', '1112223333', '2023-01-13 22:00:00', 'ROLE_USER', 'active'),
    (14, 'leo.copper@example.com', 'Leo', 'Copper', 'password3456', '4445556666', '2023-01-14 23:00:00', 'ROLE_USER', 'active'),
    (15, 'mia.tin@example.com', 'Mia', 'Tin', 'password7890', '7778889999', '2023-01-15 00:00:00', 'ROLE_USER', 'active'),
    (16, 'nick.steel@example.com', 'Nick', 'Steel', 'password2345', '0001112222', '2023-01-16 01:00:00', 'ROLE_USER', 'active'),
    (17, 'olivia.iron@example.com', 'Olivia', 'Iron', 'password6789', '3334445555', '2023-01-17 02:00:00', 'ROLE_USER', 'active'),
    (18, 'peter.mercury@example.com', 'Peter', 'Mercury', 'password0123', '6667778888', '2023-01-18 03:00:00', 'ROLE_USER', 'active'),
    (19, 'quincy.tungsten@example.com', 'Quincy', 'Tungsten', 'password4567', '9990001111', '2023-01-19 04:00:00', 'ROLE_USER', 'active'),
    (20, 'rose.nickel@example.com', 'Rose', 'Nickel', 'password8901', '2223334444', '2023-01-20 05:00:00', 'ROLE_USER', 'active');


INSERT INTO products (product_id, category_name, description, image_url, is_available, name, price)
VALUES
    (1, 'electronics', 'Smartphone with 128GB storage', 'https://www.zdnet.com/a/img/resize/9c4c6a4546bf9e283e63548c45f588360ce02607/2023/10/05/487a7516-8c27-4547-9dd5-e78f40e8d112/google-pixel-8-pro-screen.jpg?auto=webp&fit=crop&height=900&width=1200', 1, 'Smartphone', 699.99),
    (2, 'books', 'Learn Java in 24 Days', 'https://m.media-amazon.com/images/I/7167aaVxs3L._AC_UF1000,1000_QL80_.jpg', 1, 'Effective Java', 29.99),
    (3, 'electronics', 'Wireless Headphones', 'https://imageio.forbes.com/specials-images/imageserve/6547bea2a94ca8ac8ee58835/HED-Unity-headphones-image-showing-controls/960x0.png?height=473&width=711&fit=bounds', 1, 'Headphones', 199.99),
    (4, 'books', 'Learn in Spring Boot', 'https://d2sofvawe08yqg.cloudfront.net/springboot-quickstart/s_hero2x?1620671825', 1, 'Advanced Spring Boot text-book', 299.99),
    (5, 'electronics', 'Smart-Watch', 'https://www.cnet.com/a/img/resize/aee0b102935a0493122702fd22bbe0798b7db950/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=675&width=1200', 1, 'Accurate Smart Watch', 549.99),
    (6, 'habesha-dress', 'Shiny habesha jewelery', 'https://ae01.alicdn.com/kf/S2976f3dd704d48fdb7816926e7f305b3e.jpg_640x640Q90.jpg_.webp', 1, 'Special Bisha Gold', 2149.99),
    (7, 'habesha-dress', 'Traditional Women\'s Dress', 'https://ethiopianculturalshop.com/wp-content/uploads/2023/08/ac74aa27a3ed3c331d86cf34fb7b6b8c-3.jpg', 1, 'Good Looking Women Dress', 99.99),
    (8, 'habesha-dress', 'Women\'s Dress', 'https://i.etsystatic.com/37938450/r/il/116942/5588531966/il_1140xN.5588531966_645r.jpg', 1, 'Habesha', 89.99),
    (9, 'books', 'Learn React Js', 'https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F792nn62jn0u5uqxva4r0.jpg', 1, 'Build interactive Website', 59.99),
    (10, 'electronics', 'Smart Alexa', 'https://images.thdstatic.com/productImages/630e5c65-44fa-44a6-aa66-ce91b36f3877/svn/charcoal-amazon-smart-speakers-and-displays-b07fz8s74r-64_600.jpg', 1, 'Very Smart Alexa', 459.99);

INSERT INTO reviews (review_id, comment, created_at, rating, product_id, user_id)
VALUES
    (1, 'First Example of Bad Review!', '2023-01-05 12:00:00', 5, 1, 1),
    (2, 'Very informative.', '2023-01-06 12:00:00', 4, 2, 2),
    (3, 'Excellent sound quality.', '2023-01-07 12:00:00', 5, 3, 3),
    (4, 'Comfortable and supportive.', '2023-01-08 12:00:00', 4, 4, 4),
    (5, 'Works perfectly.', '2023-01-09 12:00:00', 5, 5, 5),
    (6, 'Second Example of Bad Review!', '2023-01-10 12:00:00', 4, 6, 6),
    (7, 'Stylish and warm.', '2023-01-11 12:00:00', 5, 7, 7),
    (8, 'Beautiful and comfortable.', '2023-01-12 12:00:00', 5, 8, 8),
    (9, 'Kids love it!', '2023-01-13 12:00:00', 5, 9, 9),
    (10, 'Feature-rich and affordable.', '2023-01-14 12:00:00', 4, 10, 10),
    (11, 'Battery life could be better.', '2023-01-15 12:00:00', 3, 1, 11),
    (12, 'A bit pricey but worth it.', '2023-01-16 12:00:00', 4, 2, 12),
    (13, 'Not as described.', '2023-01-17 12:00:00', 2, 3, 13),
    (14, 'Great for back support.', '2023-01-18 12:00:00', 5, 4, 14),
    (15, 'Does the job.', '2023-01-19 12:00:00', 3, 5, 15),
    (16, 'Perfect for yoga.', '2023-01-20 12:00:00', 5, 6, 16),
    (17, 'High-quality material.', '2023-01-21 12:00:00', 4, 7, 17),
    (18, 'Nice design.', '2023-01-22 12:00:00', 5, 8, 18),
    (19, 'Safe and fun.', '2023-01-23 12:00:00', 5, 9, 19),
    (20, 'Good value for money.', '2023-01-24 12:00:00', 4, 10, 20);
INSERT INTO address (addressid, street, zip_code, city, flat_no, state, userid)
VALUES
    (1, '123 Main St', '12345', 'New York', 'Apt 1', 'NY', 1),
    (2, '456 Elm St', '67890', 'San Franc', 'Apt 2', 'CA', 2),
    (3, '789 Oak St', '11223', 'Los Ange', 'Apt 3', 'CA', 3),
    (4, '101 Pine St', '44556', 'Chicago', 'Apt 4', 'IL', 4),
    (5, '202 Maple St', '77889', 'Houston', 'Apt 5', 'TX', 5);
INSERT INTO cart (cart_id, total_amount, user_id)
VALUES
    (1, 1299.96, 1),
    (2, 119.98, 2);
INSERT INTO cart_items (cart_item_id, quantity, cart_id, product_id)
VALUES
    (1, 2, 1, 1),
    (2, 1, 1, 2),
    (3, 1, 2, 3),
    (4, 2, 2, 4);
INSERT INTO orders (order_id, order_date, status, total_amount, user_id)
VALUES
    (1, '2023-01-15 12:00:00', 'shipped', 1399.96, 1),
    (2, '2023-01-16 13:00:00', 'pending', 89.99, 2);
INSERT INTO order_item (order_item_id, quantity, order_id, product_id)
VALUES
    (1, 1, 1, 1),
    (2, 1, 1, 2),
    (3, 2, 2, 3),
    (4, 1, 2, 4);
INSERT INTO shipper (shipper_id, name, phone_number)
VALUES
    (1, 'FastShip', '123-456-7890'),
    (2, 'QuickDeliver', '987-654-3210');
INSERT INTO shipping (shipping_id, address, city, country, postal_code, state, order_id, shipper_id)
VALUES
    (1, '123 Main St', 'New York', 'USA', '12345', 'NY', 1, 1),
    (2, '456 Elm St', 'San Francisco', 'USA', '67890', 'CA', 2, 2);


INSERT INTO payments (payment_date, payment_amount, payment_method, payment_status, order_id, user_id)
VALUES
    ('2023-01-15 14:00:00', 1399.96, 'CREDIT_CARD', 'SUCCESSFUL', 1, 1),
    ('2023-01-16 15:00:00', 89.99, 'UPI', 'PENDING', 2, 2),
    ('2023-02-17 16:00:00', 59.99, 'CASH', 'SUCCESSFUL', NULL, 3),
    ('2023-03-18 17:00:00', 120.00, 'CREDIT_CARD', 'FAILED', NULL, 4),
    ('2023-04-19 18:00:00', 250.50, 'UPI', 'SUCCESSFUL', NULL, 5),
    ('2023-05-20 19:00:00', 75.75, 'CASH', 'PENDING', NULL, 6),
    ('2023-06-21 20:00:00', 99.99, 'CREDIT_CARD', 'FAILED', NULL, 7),
    ('2023-07-22 21:00:00', 49.49, 'UPI', 'SUCCESSFUL', NULL, 8),
    ('2023-08-23 22:00:00', 89.89, 'CASH', 'PENDING', NULL, 9),
    ('2023-09-24 23:00:00', 39.39, 'CREDIT_CARD', 'SUCCESSFUL', NULL, 10);

INSERT INTO users (email, password, first_name, last_name, phone_number,user_role,user_account_status)
VALUES ('admin@gmail.com', 'admin@1234', 'Admin', 'Admin', '9999999999','ROLE_ADMIN','ACTIVE');

INSERT INTO products (product_id, category_name, description, image_url, is_available, name, price)
VALUES(10, 'electronics', 'Smart Alexa', 'https://images.thdstatic.com/productImages/630e5c65-44fa-44a6-aa66-ce91b36f3877/svn/charcoal-amazon-smart-speakers-and-displays-b07fz8s74r-64_600.jpg', 1, 'Very Smart Alexa', 459.99);




INSERT INTO reviews (review_id, comment, created_at, rating, product_id, user_id)
VALUES (21, 'Great product with lots of features.', '2023-01-25 12:00:00', 5, 10, 1);

