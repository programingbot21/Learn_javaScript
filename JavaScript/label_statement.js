//In JavaScript, labeled statements 
//These labels can then be used with 
//the break and continue statements to
outerloop:
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(i===1 && j ===1){
            console.log("Breaking out of both loops");
            break outerloop; 
        }
        console.log(`i:${i}, j:${j}`)
    }
}

outerLoop: // Label for the outer loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("Skipping to the next iteration of outer loop");
            continue outerLoop; // Skips to the next iteration of the outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}



myLabel: {
    let a = 10;
    if (a > 5) {
        console.log("This is a labeled block" + a);
        break myLabel; // Breaking out of the block
    }
}
