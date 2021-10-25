import React, {useState} from "react";

const Progress = ({done, bc}) => {
	const [style, setStyle] = useState({});
	setTimeout(() => {
		const newStyle = {
      padding: "10px",
      backgroundColor: bc,
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

export default Progress;
