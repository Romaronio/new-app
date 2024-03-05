let state = {
	MassivChatov: [
		{ name: 'Сквош', id: 'SquashChat' },
		{ name: 'Хоккей', id: 'HockeyChat' },
		{ name: 'футбол', id: 'FootballChat' },
		{ name: 'Теннис', id: 'TennisChat' },
		{ name: 'Баскетбал', id: 'BasketballChat' },
	],
	masSoobshenei: [{ Messeg: 'Nais' }],
	MasWindows: [
		{
			name: 'Ali Farags',
		},
		{
			name: 'Paul Coll',
		},
		{
			name: 'Diego Elias',
		},
		{
			name: 'Mostafa Asal',
		},
		{
			name: 'Karim Abdel Gawad',
		},
		{
			name: 'Mohamed Elshorbagy',
		},
	],
}
export let addPost = postMessege => {
	let newPost = {
		name: postMessege,
	}
	state.MasWindows.push(newPost)
}
export default state
