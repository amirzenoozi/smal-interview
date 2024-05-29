import React from 'react'

interface SectionProps {
	classNames?: string[]
	id?: string
	children: React.ReactNode
}

const Section = ({ classNames = [], id = '', children }: SectionProps) => {
	return (
		<div className={['section', ...classNames].join(' ')} id={id}>
			{ children }
		</div>
	)
}

export default Section
