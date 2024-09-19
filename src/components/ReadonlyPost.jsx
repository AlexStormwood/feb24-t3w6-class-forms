
export default function ReadonlyPost(props){
	return(
		<div className="socialMediaReadonlyPost">
			<h1>{props.author}</h1>
			<h6>Created on {props.dateCreated}</h6>
			{props.lastUpdated != props.dateCreated ? 
			<h6>Last edited on {props.lastUpdated}</h6>
			:
			null
			}
			<h3>{props.location}</h3>
			<p>{props.content}</p>
		</div>
	);
}