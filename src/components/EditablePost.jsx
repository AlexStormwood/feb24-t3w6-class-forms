import React from "react";

export default class EditablePost extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			author: props.author,
			location: props.location,
			content: props.content
		}
	}

	handleAuthorChange = (event) => {
		this.setState({author: event.target.value});
	}

	handleLocationChange = (event) => {
		this.setState({location: event.target.value});
	}

	handleContentChange = (event) => {
		this.setState({content: event.target.value});
	}



	render(){
		return(
			<div className="editablePostContainer">
				{/* Editable author field */}
				<label htmlFor="authorField">Author:</label>
				<input 
					type="text" 
					name="authorField" 
					id="authorField" 
					value={this.state.author} 
					onChange={this.handleAuthorChange} 
				/>
				{/* Editable location field */}
				<label htmlFor="locationField">Location:</label>
				<input 
					type="text" 
					name="locationField" 
					id="locationField" 
					value={this.state.location} 
					onChange={this.handleLocationChange}
				/>
				{/* Editable content field */}
				<label htmlFor="contentField">Post content:</label>
				<input 
					type="text" 
					name="contentField" 
					id="contentField" 
					value={this.state.content} 
					onChange={this.handleContentChange}
				/>
			</div>
		)
	}
}