import React from 'react'
import type SpriteIconProps from './type'
import './style.scss'

const SpriteIcon = ({ width = 32, height = 32, classNames, iconName = '' }: SpriteIconProps) => {
	return (
		<svg style={{ width, height }} className={classNames?.join(' ')}>
			<use xlinkHref={`./assets/sprite.svg#smal_${iconName}`}></use>
		</svg>
	)
}

export default SpriteIcon
