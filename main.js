const fs = require('fs');

let rawdata = fs.readFileSync('result.json');
let student = JSON.parse(rawdata);

let test = {
    "id": 16378,
    "model": "USB to COM",
    "sku": "VEN 24",
    "name": "Конвертор USB to COM Viewcon (VEN 24)",
    "categoryName": "Контроллеры, платы",
    "suplPrice": 9.73,
    "price": 13.73,
    "margin": 4.0,
    "stock": "В наличии",
    "ekUrl": null
}

student.forEach(function(item){
    console.log(item["id"]);
})


