USE restaurant_db;

INSERT INTO category (title, description) VALUES ("Burgers", "Each burger comes with your choice of sides: coleslaw, fruit cup, french fries, steak fries, sweet potato fries, waffle fries, and maybe-not fries");
INSERT INTO category (title, description) VALUES ("Steaks", "Each steak comes with your choice of sides: mashed potatoes and grave, coleslaw, fruit cup, roasted vegetables, or a side salad");
INSERT INTO category (title, description) VALUES ("Appetizers", "Careful, now there are some big entrees coming up, make your you can handle everything!");
INSERT INTO category (title, description) VALUES ("Desserts", "Only for those who are already overweight and don't care about how many calories they've already consumed.");

INSERT INTO menu (title, description, price, category) VALUES ("Hamburger", "Seriously, you need a description?", 8, 1);
INSERT INTO menu (title, description, price, category) VALUES ("Cheeseburger", "A burger with some cheese.  Obviously.", 9, 1);
INSERT INTO menu (title, description, price, category) VALUES ("Bacon Burger", "A burger with bacon on it.  Clearly.", 9, 1);
INSERT INTO menu (title, description, price, category) VALUES ("Bacon Cheeseburger", "A burger with bacon AND cheese.  Seriously, it's in the name!", 9.55, 1);
INSERT INTO menu (title, description, price, category) VALUES ("California Burger", "A burger with american cheese, lettuce, tomatoes, and onions.", 10, 1);
INSERT INTO menu (title, description, price, category) VALUES ("Slasha's Burger", "A burger with two patties, double bacon, BBQ sauce, and a shot of Whisky", 13, 1);
INSERT INTO menu (title, description, price, category) VALUES ("Steak Burger", "A burger with a steak cut intstead of a patty. DON'T PUT ANY SAUCE ON IT, IT'S PERFECT AS IT IS!", 6, 1);
INSERT INTO menu (title, description, price, category) VALUES ("Sirloin", " A 10-14 oz sirloin steak, cooked to your liking", 16, 2);
INSERT INTO menu (title, description, price, category) VALUES ("Ribeye", "A 10-14 oz ribeye steak, cooked to your liking", 16, 2);
INSERT INTO menu (title, description, price, category) VALUES ("New York", "A 10-14 oz new york strip steak, cooked to your liking", 16, 2);
INSERT INTO menu (title, description, price, category) VALUES ("Porterhouse", "A 20-24 oz porterhouse steak, cooked to your liking", 23, 2);
INSERT INTO menu (title, description, price, category) VALUES ("Fillet Mignon", "A fillet mignon, cooked to your liking", 26, 2);
INSERT INTO menu (title, description, price, category) VALUES ("Slasha's Big Kuttz", "Three 8 oz steaks, one sirloin, one new york strip, and one ribeye, cooked to your liking", 35, 2);
INSERT INTO menu (title, description, price, category) VALUES ("Chips and Salsa", "If you don't know what these are, just leave. Go home.", 6, 3);
INSERT INTO menu (title, description, price, category) VALUES ("Mini Corn Dogs", "Take a corn dog, bite it into chunks, then deep-fry it all over again. Boom. Mini Corn Dogs", 6, 3);
INSERT INTO menu (title, description, price, category) VALUES ("Steak Bites", "Itty bitty bits of steak served over Onion Rings", 7, 3);
INSERT INTO menu (title, description, price, category) VALUES ("Mega Ice Cream Cone", "Pracitally two ice cream cones, this innapropriately sized ice cream cone will probably melt faster than you can eat it, since this place is so fire.", 6,
4);
INSERT INTO menu (title, description, price, category) VALUES ("Apple Pie", "Comes with Ice Cream!", 7, 4);
INSERT INTO menu (title, description, price, category) VALUES ("Pumpkin Pie", "Comes with Ice Cream!", 7, 4);
INSERT INTO menu (title, description, price, category) VALUES ("Mega Cheesecake", "Two slices of cheesecake stacked on top of one another, with Ice Cream on either side", 9, 4);
INSERT INTO menu (title, description, price, category) VALUES ("Cinnamon Rock Candy", "Some rocks from the place that ROCKS!", 5, 4);






