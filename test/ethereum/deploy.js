const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'notable neither voice churn ankle suit regret access ugly baby ugly gate',
  // remember to change this to your own phrase!
  'wss://sepolia.infura.io/ws/v3/dfb93b0b61a34f20b71beb9812ab2336'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {


try{
    const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
 
}catch(err)
{
  console.log(err)
}
 provider.engine.stop();


};
deploy();
