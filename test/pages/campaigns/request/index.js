import React,{Component} from 'react'
import Layout from '../../../components/Layout'
import {Link} from '../../../routes'
import {Button} from 'semantic-ui-react'

class index extends Component
{
	static async getInitialProps(props)
	{
		const {address}=props.query
		return{address:address}
	}
	render()
	{
		return(

<div>
<Layout>
<h1>Requests</h1>
<Link route={`/campaigns/${this.props.address}/request/new`}>
<a>
<Button>Add Request</Button>
</a>
</Link>
</Layout>
</div>
			)
	}
}
export default index