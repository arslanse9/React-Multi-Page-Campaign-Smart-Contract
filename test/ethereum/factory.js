import web3 from './web3.js'
const compiledFactory = require('./build/CampaignFactory.json');


const factory=new web3.eth.Contract(
JSON.parse(compiledFactory.interface),
'0x430C1Ea77183bf1e3Fd88D4A2Cee64cD3B955E12'
)

export default factory