const Web3 = require('web3');

const gasPrice = async (rpcUrl) => {
    // Sometimes Polygon network (or the provider) returns a bad gas price of 2.5
    // Do some extra calculations
    let gp = 60000000000;
    const web3 = new Web3(rpcUrl);

    try {
        gp = await web3.eth.getGasPrice();
        const gpGWei = Number(gp) / 1000000000;
    
        if ((gpGWei >= 2.4) && (gpGWei <= 2.6)) {
            console.log('Recalculating gas price:', gpGWei);
            
            const response = await fetch('https://gasstation-mainnet.matic.network/v2');
            const data = await response.json();
            const standard = data.standard;
            const fee = standard.maxFee;

            gp = fee * 1000000000;
        }
    } catch(error) {
        console.log(error);
        // If there's any error, try sending the tx with 60 GWEI
        gp = 60000000000;
    }

    console.log('Sending Tx with gasPrice:', Math.round(gp));
    return Math.round(gp);
}

const sleep = async (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis));
}

module.exports = {
    gasPrice,
    sleep
};