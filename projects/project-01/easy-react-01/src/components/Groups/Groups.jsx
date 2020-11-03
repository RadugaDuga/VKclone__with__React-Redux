import React from "react";

const Groups = (props) => {
    

    const GroupItem = (props) => {
		return (
			<div>
				<div>
					<img src={props.image} alt="" />
				</div>
				<div>
					<p> {props.name} </p>
					<p> {props.type} </p>
					<p> {props.subsCount} </p>
				</div>
			</div>
		);
	};

    
	let groupsData = [
		{
			id: "",
			image:
				"https://sun9-18.userapi.com/impg/boB9lKw0bFY7tLGxtwqLY9oPQxK4RLxXYAOZBQ/BroGUMRvwSY.jpg?size=100x0&quality=96&crop=47,39,245,245&sign=8d8346b984ffa11b3f9d193470ebf714&ava=1",
			name: "Убежище Мурзача",
			type: "Юмор",
			subsCount: "120",
		},
		{
			id: "",
			image: "",
			name: "Убежище Мурзача",
			type: "Юмор",
			subsCount: "120",
		},
		{
			id: "",
			image: "",
			name: "Убежище Мурзача",
			type: "Юмор",
			subsCount: "120",
		},
	];

	let groupElements = groupsData.map((g) => (
		<GroupItem
			id={g.id}
			image={g.image}
			name={g.name}
			type={g.type}
			subCount={g.subCount}
		/>
	));

	return <section>{groupElements}</section>;
};

export default Groups;
