import React from 'react'
import s from './Body.module.css'
import Match from './section/Content'

let Body = props => {
	let WindowsOkno = props.window.map(oco => (
		<div className={s.Oco}>
			<Match name={oco.name} />
		</div>
	))
	return (
		<div>
			<div className={s.igra}>{WindowsOkno}</div>
		</div>
	)
}
export default Body
