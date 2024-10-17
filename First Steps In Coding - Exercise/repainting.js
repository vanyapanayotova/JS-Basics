function repainting (input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);
    
    let sumNylon = (nylon + 2) * 1.5;
    let sumPaint = (paint + (paint*10/100)) * 14.50;
    let sumThinner = paintThinner * 5;
    let amountMaterials = sumNylon + sumPaint + sumThinner + 0.40;
    let sumMaster = amountMaterials * (30/100) * hours;
    
    let sumMaterilsAndMaster = amountMaterials + sumMaster;
    console.log (sumMaterilsAndMaster);
}

repainting(["10", "11", "4", "8"]);