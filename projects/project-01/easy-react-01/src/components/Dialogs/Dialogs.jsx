import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items} ></div>
				<div className={s.dialog}>
					Иван токарев
				</div>
				<div className={s.dialog}>
					<img src='https://sun1-23.userapi.com/impg/kBTMqEc51V77suUcU8DXXV7NMWyz1SIXtR9acQ/cKvcJzxHqA4.jpg?size=50x0&quality=88&crop=5,4,853,853&sign=6f0a40472b73af61b1872a8b5a1006c8&ava=1'></img>	Дарья Амеличова
				</div>
				<div className={s.dialog}>
					Даниил Пищулин
				</div>
				<div className={s.dialog}>
					Александр Семченко
				</div>
				<div className={s.dialog}>
					Сергей Лисовов
				</div>
				<div className={s.dialog}>
					Эдгар Ибоян
				</div>
		</div>
	);
};

export default Dialogs;
