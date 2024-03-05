import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Const/Header/Header.jsx'
import Sitebur from './Const/Sitebar/Sitebar.jsx'
import Body from './coponents/Body/Body.jsx'
import SquashChat from './coponents/Dialogs/Chats/SquashChat.jsx'
import Dialogs from './coponents/Dialogs/Dialogs.jsx'
import MyProfile from './coponents/MyProfile/MyProfile.jsx'
import Settings from './coponents/Settings/Settings.jsx'
let App = props => {
	return (
		<div>
			<div className='Profect'>
				<Header />
				<div className='Telo'>
					<Sitebur />
					<Routes>
						<Route
							path='/body'
							element={<Body window={props.window} addPost={props.addPost} />}
						/>
						<Route path='/MyProfile' element={<MyProfile />} />
						<Route
							path='/Messengers/*'
							element={<Dialogs chat={props.chat} />}
						/>
						<Route path='/Settings' element={<Settings />} />
						<Route path='/Messengers/SquashChat' element={<SquashChat />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}
export default App
