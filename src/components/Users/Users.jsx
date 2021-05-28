import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem";
import Paginator from "./Paginator";

let Users = (props) => {
	return (
		<div className={s.content}>
			<section>
				<div className={s.users_counter}>
					Пользователи <span className={s.count}>{props.usersTotalCount}</span>
				</div>

				<div className={s.users_wrapper}>
					<Paginator
						usersTotalCount={props.usersTotalCount}
						pageSize={props.pageSize}
						currentPageNum={props.currentPageNum}
						onPageChanged={props.onPageChanged}
					/>

					{props.users.map((u) => (
						<UserItem
							key={u.id}
							follow={props.follow}
							unfollow={props.unfollow}
							followingProgress={props.followingProgress}
							user={u}
						/>
					))}
				</div>
			</section>

			<div className={s.sidebar}></div>
		</div>
	);
};

export default Users;
