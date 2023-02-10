;
;
var storeInv = [
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
function calcInventoryValue(inv) {
    var accum = 0;
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
    inv.forEach(function (item) { return accum += item.product.price * item.quantity; });
    return accum;
}
console.log(calcInventoryValue(storeInv));
