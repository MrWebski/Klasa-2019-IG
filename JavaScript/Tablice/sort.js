var lorem = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Amet",
    "exercitationem",
    "optio",
    "temporibus",
    "numquam",
    "a",
    "quas",
    "ullam",
    "ut",
    "minus",
    "quo",
    "possimus",
    "ratione",
    "nisi",
    "quos",
    "qui",
    "voluptates",
    "quibusdam",
    "impedit",
    "non",
    "nemo",
    "nesciunt",
    "doloribus",
    "atque",
    "enim",
    "veritatis",
    "sit",
    "expedita",
    "iste",
];

console.log(lorem);
lorem.sort();
console.log(lorem);
lorem.reverse();
console.log(lorem);

let liczby = [1, 3, 23, 17, 97, 31, 1053];
liczby.sort();
console.log(liczby);
liczby.sort(function(a, b) {
    return a - b;
});
console.log(liczby);
liczby.sort(function(a, b) {
    return b - a;
});
console.log(liczby);
