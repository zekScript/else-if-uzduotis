// Scripting side

// let numerisVienas = 13;
// let numerisDu = 13;

// if (numerisVienas > numerisDu){
//       console.log(`${numerisVienas} numeris yra didesnis nei ${numerisDu} numeris`);
// }
// else if(numerisVienas === numerisDu){
// console.log(`${numerisVienas} numeris toks pat kaip ${numerisDu} numeris`);
// }
// else{
//       console.log(`${numerisVienas} numeris yra mazesnis nei ${numerisDu} numeris`);
// }


let asmensAmzius = 19;

if (asmensAmzius <= 12){
      console.log("Jus esate vaikas")
}
else if(asmensAmzius >= 13 && asmensAmzius <= 17){
      console.log("Jus esate paauglys");
}
else if(asmensAmzius >= 18 && asmensAmzius <= 64){
      console.log("Jus esate suauges");
}
else if(asmensAmzius >= 65){
      console.log("Jus esate senjoras");
}
else if(asmensAmzius < 0){
      console.log(`${asmensAmzius} negali buti maziau negi 0`)
}
else{
      console.log("Error (nera skaiciu)");
}