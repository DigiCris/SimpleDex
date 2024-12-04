async function main() {
    const greeterAddress = "0xB90321eA77A1230F5Ec94E7a1B8bBBa31dd3841b";
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(greeterAddress);
    //const greeting = await greetera.greet();
    //console.log(greeting);
    const tx = await greeter.setGreeting("Adios mundo cruel");
    await tx.wait();
}

main();