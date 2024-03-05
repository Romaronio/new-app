import React from 'react'
import Classes from './Headers.module.css'
let Header = () => {
	return (
		<div className={Classes.header}>
			<div className={Classes.fotous}>
				<img
					src='https://avatars.mds.yandex.net/i?id=4c49f53ac552d4d8c7733908ced911bf0bf89dcd-4834227-images-thumbs&n=13'
					alt=''
				/>
			</div>
			<div className={Classes.Text}>
				<div className={Classes.squash_ne_loge}>Сквош - не ложь</div>
				<div className={Classes.squash_dla_silnich}>Сквош для сильных</div>
			</div>
		</div>
	)
}
export default Header
