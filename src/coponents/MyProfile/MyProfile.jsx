import s from './MyProfile.module.css'
import Pictures from './Pictures/Pictures'
let MyProfile = props => {
	return (
		<div className={s.body}>
			<Pictures />
			<div className={s.competition}>Турниры за послежний год</div>
			<div className={s.FIO}>Фамилия Имя Отчество</div>
			<div className={s.NameCompetition}>
				<div className={s.One}>Первенство Росии 2024</div>
				<div className={s.One}>Кубок Росии 2024</div>
				<div className={s.One}>Чемпионат Росии 2024</div>
				<div className={s.One}>Командное первенство 2023</div>
				<div className={s.One}>Командный чемпионат 2023</div>
			</div>
		</div>
	)
}
export default MyProfile
