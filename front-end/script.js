const greeterAddress = "0xB90321eA77A1230F5Ec94E7a1B8bBBa31dd3841b"; 
const greeterAbi = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let signer;
let greeterContract;

async function conectar() {
    alert("Estoy conectando");
    if (typeof window.ethereum !== 'undefined') {
        // Solicitar conexión a MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        greeterContract = new ethers.Contract(greeterAddress, greeterAbi, signer);
        document.getElementById("accountAddress").innerText = `Conectado: ${address}`;
    } else {
        alert('MetaMask no está instalado');
    }
}


async function leer( ) {
    alert("estoy en funcion leer")

    const greeting = await greeterContract.greet();
    document.getElementById("greeting").innerText = greeting;
}


async function Escribir() {
    let value2Change = document.getElementById("value2change").value;
    alert(value2Change);

    const tx = await greeterContract.setGreeting(value2Change);
    await tx.wait();
}
