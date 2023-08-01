import React,{Component} from 'react'
import {Table,Button} from 'semantic-ui-react'
import Web3 from 'web3'
import Campaign from "../ethereum/campaign";
import web3 from '../ethereum/web3'
class RequestRow extends Component
{
onFinalize=async(event)=>{
	event.preventDefault()

const accounts=await web3.eth.getAccounts()

const campaign=await Campaign(this.props.address)

await campaign.methods.finalizeRequest(this.props.id).send({
	from:accounts[0]
})

}
onApprove=async (event)=>{
event.preventDefault()

const accounts=await web3.eth.getAccounts()

const campaign=await Campaign(this.props.address)

await campaign.methods.approveRequest(this.props.id).send({
	from:accounts[0]
})

}

	render()
	{
		const {Row,Cell}=Table
const {id,request,approversCount}=this.props
		return (

<Row>
<Cell>
{id}
</Cell>
<Cell>
{request.description}
</Cell>
<Cell>
{Web3.utils.fromWei(request.value,'ether')}
</Cell>

<Cell>
{request.recipient}
</Cell>

<Cell>
{
	request.approvalCount
}/{approversCount}
</Cell>
<Cell>
<Button primary basic onClick={this.onApprove}>Approve</Button>
</Cell>
<Cell>
<Button info basic onClick={this.onFinalize}>Finalize</Button>
</Cell>



</Row>

			)
	}
}

export default RequestRow