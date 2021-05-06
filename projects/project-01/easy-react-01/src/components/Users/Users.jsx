import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";




let Users = (props) => {
	let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	
	return (
		
		<div className={s.content}>
			<section>
				<div className={s.users_counter}>
					Люди <span className={s.count}>{props.usersTotalCount}</span>
				</div>
				<div className={s.users_wrapper}>
					{props.users.map( u => (
						<div key={u.id} className={s.user_wrapper}>
							<div>
								<NavLink to={"/profile/" + u.id}>
									<img className={s.avatar} src={
										u.photos.small
											? u.photos.small
											: "https://vk.com/images/camera_200.png?ava=1"
										}
										alt=""
									/>
								</NavLink>
							</div>

							<div className={s.information}>
								<p><a href="#"> {u.name} </a></p>
								<p>  
									{
										u.status 
										? u.status 
										: null  
									}
								</p>
								<p className={s.message}> Написать сообщение </p>
							</div>

							{
								u.followed  
								? ( <button onClick={() => {
									axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{
													withCredentials:true,
													headers: {
														"API-KEY": "7fc96318-cc16-423f-b993-464136a7cea1"
													}
												}
											  )
										.then( response => { 
											if (response.data.resultCode == 0){
												props.unfollow(u.id);
												console.log(`Вы отписались от ${u.id}`);
											} else {
												console.log(`Отписка от ${u.id} не удалась`);
											}
										});

										}
									}
									
									className={s.unfollow}> Удалить из друзей </button>) 

								: ( <button onClick={() => {
									axios
										.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ },
											{ 
												withCredentials:true,
												headers: {
													"API-KEY": "7fc96318-cc16-423f-b993-464136a7cea1"
												}
											}
										)
										.then( response => { 
											if (response.data.resultCode == 0){ 
												props.follow(u.id);
												console.log(`Теперь вы друзья с ${u.id}`);
											}else {
												console.log(`Подписка на ${u.id} не удалась`);
											}
										});

										}
									}
									
									className={s.follow}> Добавить в друзья </button>) 
							}
						</div>
					))}
				</div>
			</section>

			<div>
				{
					pages.map( p => {
						
						return ( <button onClick={(e) => { props.onPageChanged(p)}} className={props.currentPageNum === p && s.activePage}>
								{p}
							</button>
						
						)
					})
				}
			</div>

			<div className={s.sidebar}></div>
		</div>
	);
};

export default Users;
