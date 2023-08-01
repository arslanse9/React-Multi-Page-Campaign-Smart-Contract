import React,{Component} from 'react'
import {Form,Button,Message,Input} from 'semantic-ui-react'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import {Linker,Router} from '../../../routes'
import Layout from '../../../components/Layout'



class New extends Component
{

static async getInitialProps(props)
{
	const {address}=props.query
	return{address}
}
state={
	description:'',
	value:'',
	recipient:'',

}

handleSubmit=async (event)=>{
event.preventDefault()

const campaign=Campaign(this.props.address)

const{description,value,recipient}=this.state

try{
const accounts=await web3.eth.getAccounts()

await campaign.methods.createRequest(description,web3.utils.toWei(value,'ether'),recipient).send({
	from:accounts[0]
})
}catch(err)
{


}

}

	render()
	{
		return(

<Layout>
<h1>Create Request</h1>
<Form onSubmit={this.handleSubmit}>
<Form.Field>
<label>Description</label>
<Input
value={this.state.description}
onChange={event=>this.setState({description:event.target.value})}

/>

</Form.Field>


<Form.Field>
<label>Value in Ether</label>
<Input
value={this.state.value}
onChange={event=>this.setState({value:event.target.value})}

/>

</Form.Field>



<Form.Field>
<label>recipient</label>
<Input
value={this.state.recipient}
onChange={event=>this.setState({recipient:event.target.value})}

/>

</Form.Field>

<Message error header="!OoPs" content={this.state.errorMessage}/>


<Button type="submit" primary>Create!</Button>

</Form>

</Layout>


			)
	}
}

export default New