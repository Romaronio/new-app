import React from 'react'
let SsilkaForChatSquash = React.createRef()
let addPosts = props => {
	let texton = SsilkaForChatSquash.current.value
	alert(texton)
}
let SquashChat = props => {
	return (
		<div>
			<textarea ref={SsilkaForChatSquash}></textarea>
			<div>
				<button ref={SsilkaForChatSquash} onClick={addPosts}>
					Отправить
				</button>
			</div>
		</div>
	)
}
export default SquashChat
