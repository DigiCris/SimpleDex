const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function() {
    let Greeter;
    let greeter;

    beforeEach(async function() {
        Greeter = await ethers.getContractFactory("Greeter");
        greeter = await Greeter.deploy("hola");
    });

  it("debería inicializarse con el saludo 'hola'", async () => {
    const greeting = await greeter.greet();
    expect(greeting).to.equal("hola");
  });

  it("debería cambiar el saludo y leerlo correctamente", async () => {
    await greeter.setGreeting("hola mundo");
    const newGreeting = await greeter.greet();
    expect(newGreeting).to.equal("hola mundo");
  });
});