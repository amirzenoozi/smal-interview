import React, { useRef } from 'react'
import Container from '../../components/container'
import './style.scss'
// import FlexRow from '../../components/flex-row'
// import FlexCol from '../../components/flex-col'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Home () {
	const { t } = useTranslation(['home'])
	const main = useRef<HTMLElement | null>(null) as React.MutableRefObject<HTMLInputElement>

	useGSAP(() => {
		gsap.to('.section__desc', {
			y: 0,
			scrollTrigger: {
				trigger: '.section__desc',
				start: 'bottom bottom',
				end: 'top 20%',
				scrub: true,
				markers: false
			}
		})
		// const boxes = gsap.utils.toArray('.box')
		// boxes.forEach((box: any) => {
		// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		// 	gsap.to(box, {
		// 		y: -300,
		// 		scrollTrigger: {
		// 			trigger: box,
		// 			start: 'bottom bottom',
		// 			end: 'top 20%',
		// 			scrub: true,
		// 			markers: false
		// 		}
		// 	})
		// })
	},	{ scope: main })

	return (
		<>
			<section className={'page'}>
				<Container>
					<div className={['section', 'section--blue'].join(' ')}>
						<p>{t('welcome')}</p>
					</div>
					<div className={'section'} ref={main}>
						<p className={'section__desc'}>{t('promotion_content')}</p>
					</div>
					<div className={['section', 'section--red'].join(' ')}>
						<p>{t('thanks')}</p>
					</div>
				</Container>
			</section>
		</>
	)
}

export default Home
