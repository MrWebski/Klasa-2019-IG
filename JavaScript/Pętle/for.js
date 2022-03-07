for(let i = 0; i < 10; i++) {
    document.write("<div>" + i + "</div>");
}

var a = 10;
for(var a = 0; a < 20; a++) {}
document.write(a);

let b = 10;
for(let b = 0; b < 20; b++) {}
document.write(b);

let x = 0;
for(; x < 5; x++) {
    document.write("<div>" + x + "</div>");
}

let y = 0;
for(; y < 5;) {
    document.write("<div>" + y + "</div>");
    y++;
}

let z = 0;
for(;;) {
    z++;
    if(z >= 15) break;
    if(z % 2 == 0) continue;
    document.write("<div>" + z + "</div>");
}