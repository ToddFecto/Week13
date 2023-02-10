//Part 1: Tallest Mountain

//Declare Interface 1
interface Mountain {
    name: string,
    height: number
};

//Declare Array
let mountains:Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

//Check contents of array mountains
//console.log(mountains);

//Declare Function
function findNameOfTallestMountain(allmountains: Mountain[]):string {
    let tallestheight: number = 0;
    let mountainname: string = '';

    for (let i=0; i<allmountains.length; i++) {
        if (allmountains[i].height > tallestheight) {
            tallestheight = allmountains[i].height;
            mountainname = allmountains[i].name;
        }
    }

    return mountainname;
}

let tallestmountain: string = findNameOfTallestMountain(mountains);
console.log(tallestmountain);

//Part 2: PRODUCTS

//Declare Interface 2
interface Product {
    name: string,
    price: number
};

//Declare Array
let products:Product[] = [
    {name: 'Alienware M15 Ryzen5 Laptop', price: 2386},
    {name: 'Shelby GT350 Mustang', price: 65000},
    {name: 'Wendys 4 for 4 Jr. Bacon Meal', price: 4.00}
];

//Check contents of array products
//console.log(products);

//Declare Function
function calcAverageProductPrice(allproducts: Product[]):number {
    let totalprice: number = 0;
    let averageProductPrice: number = 0;

    for (let i=0; i<allproducts.length; i++) {
        totalprice = (totalprice + allproducts[i].price);
     }

     averageProductPrice = totalprice / allproducts.length;

    return averageProductPrice;
}

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);

//Part3: INVENTORY

//Declare Interface 3
interface InventoryItem {
    product: Product,
    quantity: number
};

//Declare Array
let inventory:InventoryItem[] = [
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
function calcInventoryValue(allitems: InventoryItem[]):number {
    let totalInvCost: number = 0;
    
    /* // Produces a NaN (Not a Number) result when run
    for (let i=0; i<allitems.length; i++) {
        totalInvCost = (totalInvCost + allitems[i].product.price * allitems[i].quantity[i]);
     };*/

         /* // Produces a NaN (Not a Number) result when run
    for (let i=0; i<allitems.length; i++) {
        totalInvCost += allitems[i].product.price * allitems[i].quantity[i];
     };*/

     allitems.forEach( (item: InventoryItem) => totalInvCost += item.product.price * item.quantity );
     return totalInvCost;
}

let totalInventory: number = calcInventoryValue(inventory);
console.log(totalInventory);
