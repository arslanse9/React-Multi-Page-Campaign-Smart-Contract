import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7d3eb24446e259D561e40A9562fFf48d24D4d094'
);

export default instance;
