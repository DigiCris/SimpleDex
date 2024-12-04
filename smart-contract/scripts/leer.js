async function main() {
    const greeterAddress = "0xB90321eA77A1230F5Ec94E7a1B8bBBa31dd3841b";
    const Greeter = await ethers.getContractFactory("Greeter");
    const greetera = Greeter.attach(greeterAddress);
    const greeting = await greetera.greet();
    console.log(greeting);
}

main();