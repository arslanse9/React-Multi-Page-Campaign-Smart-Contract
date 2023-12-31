import React, { Component } from "react";
import { Button,Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import RequestRow from '../../../components/RequestRow'
class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

const campaign=Campaign(address)

const requestCounts=await campaign.methods.getRequestsCount().call
const ApproversCount=await campaign.methods.approversCount().call()

const requests=await Promise.all(

Array(requestCounts).fill().map((element,index)=>{

  return campaign.methods.requests(index).call()
})
  )

    return { address,requests ,requestCounts,ApproversCount};
  }

renderRow(){
return this.props.requests.map((request,index)=>{
  return(
<RequestRow
key={index}
id={index}
request={request}
address={this.props.address}
approversCount={this.props.approversCount}
/>

    )
})
}



  render() {
    const{Header,Row,HeaderCell,Body}=Table
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
<Table>
<Header>
<Row>
<HeaderCell>
ID
</HeaderCell>
<HeaderCell>
Description
</HeaderCell>
<HeaderCell>
Amount
</HeaderCell>
<HeaderCell>
Recipient
</HeaderCell>
<HeaderCell>
Approval Counts
</HeaderCell>
<HeaderCell>
Approve
</HeaderCell>
<HeaderCell>
Finalize
</HeaderCell>

</Row>
</Header>
<Body>
{this.renderRow()}
</Body>



</Table>


      </Layout>
    );
  }
}

export default RequestIndex;
