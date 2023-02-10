//Part 1: Tallest Mountain
;
//Declare Array
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
//Check contents of array mountains
//console.log(mountains);
//Declare Function
function findNameOfTallestMountain(allmountains) {
    var tallestheight = 0;
    var mountainname = '';
    for (var i = 0; i < allmountains.length; i++) {
        if (allmountains[i].height > tallestheight) {
            tallestheight = allmountains[i].height;
            mountainname = allmountains[i].name;
        }
    }
    return mountainname;
}
var tallestmountain = findNameOfTallestMountain(mountains);
console.log(tallestmountain);
;
//Declare Array
var products = [
    { name: 'Alienware M15 Ryzen5 Laptop', price: 2386 },
    { name: 'Shelby GT350 Mustang', price: 65000 },
    { name: 'Wendys 4 for 4 Jr. Bacon Meal', price: 4.00 }
];
//Check contents of array products
//console.log(products);
//Declare Function
function calcAverageProductPrice(allproducts) {
    var totalprice = 0;
    var averageProductPrice = 0;
    for (var i = 0; i < allproducts.length; i++) {
        totalprice = (totalprice + allproducts[i].price);
    }
    averageProductPrice = totalprice / allproducts.length;
    return averageProductPrice;
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
;
//Declare Array
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
];
//Declare Function
function calcInventoryValue(allitems) {
    var totalInvCost = 0;
    /* // Produces a NaN (Not a Number) result when run
    for (let i=0; i<allitems.length; i++) {
        totalInvCost = (totalInvCost + allitems[i].product.price * allitems[i].quantity[i]);
     };*/
    /* // Produces a NaN (Not a Number) result when run
for (let i=0; i<allitems.length; i++) {
   totalInvCost += allitems[i].product.price * allitems[i].quantity[i];
};*/
    allitems.forEach(function (item) { return totalInvCost += item.product.price * item.quantity; });
    return totalInvCost;
}
var totalInventory = calcInventoryValue(inventory);
console.log(totalInventory);
