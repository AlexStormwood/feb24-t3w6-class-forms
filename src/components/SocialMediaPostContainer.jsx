import React from "react";
import ReadonlyPost from "./ReadonlyPost";

export default class SocialMediaPostContainer extends React.Component {
	constructor(){
		super();

		this.state = {
			isEditing: false,
			author: "",
			dateCreated: Date.now(),
			lastUpdated: Date.now(),
			location: "",
			content: ""
		}
	}

	render(){

		// this.props.author 
		// this.props.parentState.author 

		if (this.state.isEditing){
			return(
				<EditablePost 
					author={this.state.author} 
					dateCreated={this.state.dateCreated} 
					lastUpdated={this.state.lastUpdated} 
					location={this.state.location}
					content={this.state.content}

					parentState={this.state}
				/>
			);
		} else {
			return(
				<ReadonlyPost 
					author={this.state.author} 
					dateCreated={this.state.dateCreated} 
					lastUpdated={this.state.lastUpdated} 
					location={this.state.location}
					content={this.state.content}

					parentState={this.state}
				/>
			);
		}
	}
}