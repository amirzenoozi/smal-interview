import React from 'react'
import SpriteIcon from '../../../components/sprite-icon'

interface FeatureProps {
	id?: string
	title?: string
	desc?: string
	image?: string
}

const FeatureCard = ({ id = '', title = '', desc = '', image = '' }: FeatureProps) => {
	return (
		<div className={'feature'} id={id}>
			<SpriteIcon classNames={['figure__thumb']} iconName={image} width={120} height={120}/>
			<div className={'feature__content'}>
				{ (title !== '') && (<h3>{title}</h3>)}
				{ (desc !== '') && (<p>{desc}</p>)}
			</div>
		</div>
	)
}

export default FeatureCard
