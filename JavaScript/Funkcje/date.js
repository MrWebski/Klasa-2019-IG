function aktualnaData() {
    let data = new Date();
    let day = data.getDate();
    let month = data.getMonth();
    let year = data.getFullYear();

    month += 1;
    month = (month < 10) ? ("0" + month) : (month);

    return day + "." + month + "." + year;
}

let aData = aktualnaData();