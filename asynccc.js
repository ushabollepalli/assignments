function main() {
    console.log(3);
    return 4;
}

async function f(){
    console.log(2);
    let r = await main();
    console.log(r);
}

console.log(1);
f();
console.log(5);