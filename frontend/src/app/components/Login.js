import React from "react";

export class Login extends React.Component{
	constructor(props){
		super();
		this.state={
		name:"Ahitisham",
		age:props.user.age
		};
	};
	onMakeOlder(){
		this.setState({
			age:this.state.age + 3
		});
	}

	render(){
		var title="Dashboard";
		return(
			<div>
				<p>name: {this.state.name}, age:{this.state.age}</p>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-success">make me older</button>
			</div>
			);
	}
} 	

Login.propTypes={
	user:React.PropTypes.object
};