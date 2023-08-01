import web3 from './web3.js'
const compiledFactory = require('./build/Campaign.json');

export default (address)=>{
	return new web3.eth.Contract(JSON.parse(compiledFactory.interface),address)
}