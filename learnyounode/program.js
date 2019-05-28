// console.log("HELLO WORLD");

// print process.argv
// console.log(process.argv + Number(process.argv[2]));

let total = 0;
process.argv.forEach( (val, index) => {
    total = total + Number(val);
    console.log(`${index}: ${val}`);
    console.log(Number(val));
});
console.log("/n");
console.log(total);