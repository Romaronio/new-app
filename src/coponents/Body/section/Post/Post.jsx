import React from 'react'

let RefForPost = React.createRef()
let addPost = props => {
	let text = RefForPost.current.value
	props.addPost(text)
}
let Post = props => {
	return (
		<div>
			<textarea ref={RefForPost} name='' id='' cols='30' rows='10'></textarea>
			<button onClick={addPost}>Отправить</button>
		</div>
	)
}
export default Post
