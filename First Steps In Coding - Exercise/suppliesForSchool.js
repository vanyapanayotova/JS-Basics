function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningProducts = Number(input[2]);
    let discount = Number(input[3]);
    
    let pensPrice = (pens * 5.80);
    let markersPrice = (markers * 7.20);
    let cleaningProductsPrice = (cleaningProducts * 1.20);
    let price = (pensPrice + markersPrice + cleaningProductsPrice);
    let discountPrice = (price - (price * discount/100));

    console.log(discountPrice);
}




suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]);