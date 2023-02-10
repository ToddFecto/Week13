interface Pet {
    name: string;
    age: number;
}

//let s = 'Hello';
//console.log(s);
//console.log(3+5);

let pet1:Pet = {
    name: 'Sally',
    age: 2
};

console.log(pet1);

let allpets:Pet[] = [
    {name: 'Fred', age: 3},
    {name: 'Julie', age: 6},
    {name: 'Dylan', age: 5}
];

//console.log(allpets);

function showPet(thepet: Pet) {
    console.log(`Name: ${thepet.name} Age: ${thepet.age}`);
}

//showPet(allpets[1]);

function findOldest(pets: Pet[]):string {
    let biggestage: number = 0;
    let currentname: string = '';

    for (let i=0; i<pets.length; i++) {
        if (pets[i].age > biggestage) {
            biggestage = pets[i].age;
            currentname = pets[i].name;
        }
    }

    return currentname;
}

let oldestname: string = findOldest(allpets);
console.log(oldestname);
