import React, { PureComponent } from 'react'

function debounce(func, wait = 300) {
	let timeout

	return function(event) {
		clearTimeout(timeout)
		event.persist && event.persist()

		timeout = setTimeout(() => {
			func(event)
		}, wait)
	}
}

class Touchable extends PureComponent {
	constructor(props, context) {
		super(props, context)

		this.state = {}
	}

	render() {
		const { children, onClick, onKeyDown, delay } = this.props

		return (
			<div
				{...this.props}
				onClick={
					!!onClick
						? debounce(e => {
								onClick(e)
						  }, delay)
						: () => {}
				}
				onKeyDown={
					!!onKeyDown
						? debounce(e => {
								onKeyDown(e)
						  }, delay)
						: () => {}
				}>
				{!!children ? children : ''}
			</div>
		)
	}
}

export default Touchable
