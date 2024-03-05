import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
let Dialogs = props => {
	let MasChat = props.chat.map(D => (
		<NavLink to={D.id}>
			<button>{D.name}</button>
		</NavLink>
	))
	return (
		<div>
			{/* <div>{MasChat}</div> */}
			<textarea
				name=''
				id=''
				className={s.Dialogs}
				cols='100'
				rows='3'
			></textarea>
			<button className={s.button}>Отправить</button>
		</div>
	)
}
export default Dialogs
