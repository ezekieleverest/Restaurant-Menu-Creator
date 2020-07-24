var db = require('../models')

var categories = [
    {
        title: "Burgers",
        description: "Each burger comes with your choice of sides: coleslaw, fruit cup, french fries, steak fries, sweet potato fries, waffle fries, and maybe-not fries"
    },
    {
        title: "Steaks",
        description: "Each steak comes with your choice of sides: mashed potatoes and grave, coleslaw, fruit cup, roasted vegetables, or a side salad"
    },
    {
        title: "Appetizers",
        description: "Careful now, there are some big entrees coming up, make your you can handle everything!"
    },
    {
        title: "Desserts",
        description: "Careful, now there are some big entrees coming up, make your you can handle everything!"
    }
]

var menus = [
    {
        title: "Hamburger",
        description: "Seriously, you need a description?",
        price: 8,
        catergoryId: 1
    },
    {
        title: "Cheeseburger",
        description: "A burger with some cheese.  Obviously.",
        price: 9,
        categoryId: 1
    },    
    {
        title: "Bacon Burger",
        description: "A burger with bacon on it.  Clearly.",
        price: 9,
        categoryId:1
    },
    {
        title: "Bacon Cheeseburger",
        description: "A burger with bacon AND cheese.  Seriously, it's in the name!",
        price: 9.55,
        categoryId: 1
    },
    {
        title: "California Burger",
        description: "A burger with american cheese, lettuce, tomatoes, and onions.",
        price: 10,
        categoryId:1
    },
    {
        title: "Slasha's Burger",
        description: "A burger with two patties, double bacon, BBQ sauce, and a shot of Whisky",
        price: 13,
        categoryId:1
    },
    {
        title: "Steak Burger",
        description: "A burger with a steak cut intstead of a patty. DON'T PUT ANY SAUCE ON IT, IT'S PERFECT AS IT IS!",
        price: 6,
        categoryId:1
    },
    {
        title: "Sirloin",
        description: "A 10-14 oz sirloin steak, cooked to your liking",
        price: 16,
        categoryId:2
    },
    {
        title: "Ribeye",
        description: "A 10-14 oz ribeye steak, cooked to your liking",
        price: 16,
        categoryId:2
    },
    {
        title: "New York",
        description: "A 10-14 oz new york strip steak, cooked to your liking",
        price: 16,
        categoryId:2
    },
    {
        title: "Porterhouse",
        description: "A 20-24 oz porterhouse steak, cooked to your liking",
        price: 23,
        categoryId:2
    },
    {
        title: "Fillet Mignon",
        description: "A fillet mignon, cooked to your liking",
        price: 26,
        categoryId:2
    }
    ,    
    {
        title: "Slasha's Big Kuttz",
        description: "Three 8 oz steaks, one sirloin, one new york strip, and one ribeye, cooked to your liking",
        price: 35,
        categoryId:2
    },
    {
        title: "Chips and Salsa",
        description: "If you don't know what these are, just leave. Go home.",
        price: 6,
        categoryId:3
    },
    {
        title: "Mini Corn Dogs",
        description: "Take a corn dog, bite it into chunks, then deep-fry it all over again. Boom. Mini Corn Dogs",
        price: 6,
        categoryId:3
    },
    {
        title: "Steak Bites",
        description: "Itty bitty bits of steak served over Onion Rings",
        price: 7,
        categoryId:3
    },
    {
        title: "Mega Ice Cream Cone",
        description: "Pracitally two ice cream cones, this innapropriately sized ice cream cone will probably melt faster than you can eat it, since this place is so fire.",
        price: 6,
        categoryId:4
    },
    {
        title: "Apple Pie",
        description: "Comes with Ice Cream!",
        price: 7,
        categoryId:7
    },
    {
        title: "Pumpkin Pie",
        description: "Comes with Ice Cream!",
        price: 7,
        categoryId:4
    },
    {
        title: "Mega Cheesecake",
        description: "wo slices of cheesecake stacked on top of one another, with Ice Cream on either side",
        price: 9,
        categoryId:4
    },
    {
        title: "Cinnamon Rock Candy",
        description: "Some rocks from the place that ROCKS!",
        price: 5,
        categoryId:4
    },
    
];

db.category.destroy({ where: {} })
    .then(function () {
        return db.category.bulkCreate(categories)
    })
    .then(function () {
        return db.menu.destroy({where: {}})
    })
    .then(function () {
        return db.menu.bulkCreate(menus)
    })
    .catch(function (err) {
        console.log(err)
    })