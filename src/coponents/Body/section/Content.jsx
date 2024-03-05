import React from 'react'
import s from './Content.module.css'

let Match = props => {
	return (
		<div className={s.match}>
			<div className={`${s.photo} ${s.photo1}`}>
				<img
					src='https://psa-media.imigino.com/image/1/process/200x200?source=https://d2h2jicm4ii9y.cloudfront.net/wp-content/uploads/2023/11/p9wIq5CA-1024x1024.png'
					alt=''
				/>
				<div className={s.Name}>{props.name}</div>
			</div>
			<div className={`${s.photo} ${s.photo2}`}>
				<img
					src='https://psa-media.imigino.com/image/1/process/200x200?source=https://www.psaworldtour.com/wp-content/uploads/2023/10/paul-coll-copy-1024x1024.png'
					alt=''
				/>
				<div className={s.Name}>Poul Coll</div>
			</div>
		</div>
	)
}
export default Match
