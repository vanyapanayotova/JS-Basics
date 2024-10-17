function fishTank(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);

    let volumeAquarium = l * w * h;
    let liters = volumeAquarium * 0.001;
    let occupiedSpace = liters*(1-(percent/100)) ;
    
    console.log(occupiedSpace);
}
fishTank (["105 ",
"77 ",
"89 ",
"18.5 "]);