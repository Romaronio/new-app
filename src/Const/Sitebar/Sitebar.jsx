import React from 'react'
import { Link } from 'react-router-dom'
import s from './Sitebar.module.css'
let Linking = props => {
	return (
		<Link className={s.link} rel='stylesheet' to={props.link}>
			<button className={s.macthes}>
				{props.name}
				<br />
			</button>
		</Link>
	)
}
let Sitebur = () => {
	return (
		<div className={s.menu}>
			<Linking name='Матчи сегодня' link='/body' />
			<Linking name='Мой профиль' link='/MyProfile' />
			<Linking name='Сообщения' link='/Messengers' />
			<Linking name='Настройки' link='Settings' />
			<img
				className={s.img}
				src='https://avatars.mds.yandex.net/i?id=692d48c4194ed26f6b1fdca5c6cda9d0dfbe4483-10599899-images-thumbs&n=13'
				alt=''
			/>
		</div>
	)
}
export default Sitebur
