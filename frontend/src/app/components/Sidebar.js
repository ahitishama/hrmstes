import React from "react";

export class Sidebar extends React.Component{
	render(){
		return(
			<div>
				<ul className="nav nav-sidebar"	>
					<li><img src="./logo_caritorhrm.png"/>Admin user pic</li>
				</ul>
				<ul className="nav nav-sidebar">
		            <li className="active"><a href="#">Overview <span className	="sr-only">(current)</span></a></li>
		            <li><a href="#">Reports</a></li>
		            <li><a href="#">Analytics</a></li>
		            <li><a href="#">Export</a></li>
		         </ul>
				 <ul className="nav nav-sidebar">
		            <li><a href="">Nav item</a></li>
		            <li><a href="">Nav item again</a></li>
		            <li><a href="">One more nav</a></li>
		            <li><a href="">Another nav item</a></li>
		            <li><a href="">More navigation</a></li>
		          </ul>
		           <ul className="nav nav-sidebar">
		            <li><a href="">Nav item again</a></li>
		            <li><a href="">One more nav</a></li>
		            <li><a href="">Another nav item</a></li>
		          </ul>
			</div>
			);
	}
}