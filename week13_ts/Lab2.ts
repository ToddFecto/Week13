interface Product {
    name: string,
    price: number
};

interface Inventory {
    product: Product,
    quantity: number
};

let storeInv: Inventory[] = [

    {
        product: {
            name: 'Keyboard',
            price: 25.00
        },
        quantity: 10 //250
    },
    {
        product: {
            name: 'Mouse',
            price: 15.00
        },
        quantity: 12 //180
    },
    {
        product: {
            name: 'Monitor',
            price: 125.00
        },
        quantity: 5 // 625
    },

    {
        product: {
            name: 'iPad',
            price: 425.00
        },
        quantity: 15 //6375
    }
];

function calcInventoryValue(inv: Inventory[]): number {
    let accum: number = 0;

    /*
    function nextItem(item: Inventory) {
        accum += item.product.price * item.quantity;
    }

    inv.forEach(function (item: Inventory) {
        accum += item.product.price * item.quantity;
    });

    inv.forEach( (item: Inventory) => {
        accum += item.product.price * item.quantity;
    });
    
    // Jeff prefers this version
    inv.forEach( (item: Inventory) => 
        accum += item.product.price * item.quantity
    );*/

    // Or you can put it all on one line:
    inv.forEach( (item: Inventory) => accum += item.product.price * item.quantity );
    return accum;
}

console.log(calcInventoryValue(storeInv));