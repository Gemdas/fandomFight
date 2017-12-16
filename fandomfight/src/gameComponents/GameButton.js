import React from "react";

export const GameButton = props =>{
	return(
		<button
		id={props.id}
		onClick={props.handleOnClick}>
			<img
			src={props.url}
			alt={props.id}
			width={150}
			height={150}/>
		</button>
	)
}