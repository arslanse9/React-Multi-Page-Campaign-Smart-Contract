import React from 'react'
import Header from './Header'
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default (props)=>{
	return(

<div>
<Container>
<Header/>
{props.children}
</Container>
</div>
		)
}