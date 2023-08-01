import React,{Component} from 'react'
import {Form,Input,Button,Message} from 'semantic-ui-react'
import Campaign from "../ethereum/campaign"
import web3 from '../ethereum/web3'
import {Router} from '../routes'
class ContractForm extends Component
{
	state={
		value:'',
		errorMessage:'',
		loading:false
	}

handleSubmit=async (event)=>{
event.preventDefault()
const campaign = Campaign(this.props.address);
this.setState({loading:true,errorMessage:''})
try{

const accounts=await web3.eth.getAccounts()

await campaign.methods.contribute().send({
	from:accounts[0],
	value:web3.utils.toWei(this.state.value,'ether')
})
Router.replaceRoute(`/campaigns/${this.props.address}`)

}catch(err)
{
	this.setState({errorMessage:err.message})
}
this.setState({loading:false,errorMessage:''})
}

	render()
	{
		return(
<Form onSubmit={this.handleSubmit}  error={!!this.state.errorMessage}>
 <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              onChange={(event) =>
                this.setState({ value: event.target.value })
              }
            />
             </Form.Field>
               <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>

</Form>



			)
	}
}

export default ContractForm