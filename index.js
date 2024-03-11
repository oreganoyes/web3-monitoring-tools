require('dotenv').config();
const Web3 = require('web3');
const web3 = new Web3(process.env.ETH_NODE_URL);

function monitorContract(address, abi) {
    const contract = new web3.eth.Contract(abi, address);

    contract.events.allEvents({
        fromBlock: 'latest'
    }, (error, event) => {
        if (error) console.error(error);
        console.log(event);
    });

    console.log(`Monitoring contract at address: ${address}`);
}

module.exports = { monitorContract };