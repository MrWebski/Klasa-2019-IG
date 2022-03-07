// var arch = ["x86", "x64", "arm"];
// var arch = new Array("x86", "x64", "arm");
var arch = [];
    arch[0] = "x86";
    arch[1] = "x64";
    arch[2] = "arm";

document.write(arch[1]);

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
    "Nam",
    "cupiditate",
    "saepe",
    "ab",
    "ad",
    "esse",
    "culpa",
    "odit",
    "cum",
    "Labore",
    "voluptas",
    "aut",
    "obcaecati",
    "mollitia",
    "veritatis",
    "placeat",
    "quasi",
    "quam",
    "Commodi",
    "laboriosam",
    "dolor",
    "eligendi",
    "nisi",
    "dolore",
    "molestias",
    "nostrum",
    "perspiciatis",
    "sint",
    "recusandae",
    "ea",
    "labore",
    "animi",
    "deleniti",
    "corporis",
    "non",
    "laudantium",
    "dicta",
    "repellendus",
    "sunt",
    "illum",
    "consectetur",
    "Eligendi",
    "dolor",
    "ducimus",
    "suscipit",
    "fuga",
    "eius",
    "Fugiat",
    "blanditiis",
    "temporibus",
    "itaque",
    "inventore",
    "dolores",
    "accusantium",
    "exercitationem",
    "eius",
    "voluptates",
    "veritatis",
    "et",
    "sed",
    "numquam",
    "Cumque",
    "rerum"
];

document.write(lorem[lorem.length - 1] + "<br>");

lorem.shift();
document.write(lorem[0] + "<br>");

lorem.pop();
document.write(lorem[lorem.length - 1] + "<br>");

lorem.unshift("Lorem");
document.write(lorem[0] + "<br>");

lorem.push("rerum");
document.write(lorem[lorem.length - 1] + "<br>");