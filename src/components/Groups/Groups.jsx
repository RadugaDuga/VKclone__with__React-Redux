import React from "react";
import s from "./Groups.module.css";

const Groups = (props) => {
	const GroupItem = (props) => {
		return (
			<div className={s.element}>
				<img src={props.image} alt="" />
				<div>
					<button className={s.btn} href="#"> {props.name} </button>
					<p> {props.type} </p>
					<p>
						{" "}
						{props.subsCount} <span> подписчиков</span>
					</p>
				</div>
			</div>
		);
	};

	let groupElements = props.groupsData.map( g => (
		<GroupItem
			id={g.id}
			image={g.image}
			name={g.name}
			type={g.type}
			subsCount={g.subsCount}
		/>
	));

	return <div className={s.groups_wrapper}>{groupElements}</div>;
};

export default Groups;
