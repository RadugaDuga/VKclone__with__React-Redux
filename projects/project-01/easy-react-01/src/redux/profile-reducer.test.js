import { addPost, profileReducer } from "./profile-reducer";

let newState = profileReducer({}, {});

it("renders without crashing", () => {
	let action = addPost('hi');
	let state = {
		postsData: [
			{
				postId: 1,
				name: "Георгий Букиа",
				image:
					"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
				text: `Мария Кюри изобрела теорию радиоактивности, лечение радиоактивности и смерть от радиоактивности.`,
				likes_count: 7,
				comments_count: "",
				repost_count: "2",
				views_count: "631",
				date: "18 ноя 2020",
			},

			{
				postId: 2,
				name: "Георгий Букиа",
				image:
					"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
				text: "До изобретения аэроплана братьями Райт, те, кто желал летать, должны были проглотить 200 фунтов гелия.",
				likes_count: "92",
				repost_count: "43",
				views_count: "1001",
				date: "4 сен 2020",
			},

			{
				postId: 3,
				name: "Георгий Букиа",
				image:
					"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
				text: "Парадокс кота Шрёдингера описывает ситуацию, в которой кот в ящике должен, во всех отношениях, рассматриваться как одновременно живой и мёртвый. Шрёдингер придумал этот парадокс, как оправдание для убийства котов.",
				likes_count: "92",
				repost_count: "43",
				views_count: "1001",
				date: "4 сен 2020",
			},

			{
				postId: 4,
				name: "Георгий Букиа",
				image:
					"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
				text: "В викторианской Англии, незнатный человек не имел права смотреть прямо на королеву, так как считалось, что бедняки могут украсть мысли. Сегодня наука доказала, что лишь менее 4% бедняков на это способны.",
				likes_count: "92",
				repost_count: "43",
				views_count: "1001",
				date: "4 сен 2020",
			},

			{
				postId: 5,
				name: "Георгий Букиа",
				image:
					"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
				text: "Сны - это способ подсознания напомнить человеку, что ему нужно прийти в школу голышом и лишиться зубов.",
				likes_count: "92",
				repost_count: "43",
				views_count: "1001",
				date: "4 сен 2020",
			},
		],
	};

	let newState = profileReducer(state, action);
});
