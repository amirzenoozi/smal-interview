import React, { useRef } from 'react'
import Container from '../../components/container'
import './style.scss'
import FlexRow from '../../components/flex-row'
import FlexCol from '../../components/flex-col'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTranslation } from 'react-i18next'
import { type FeatureInterface } from './feature.interface'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Home () {
	const { t } = useTranslation(['home'])
	const main = useRef<HTMLElement | null>(null) as React.MutableRefObject<HTMLInputElement>
	const features: FeatureInterface[] = [
		{
			image: '/assets/4K144.svg',
			title: t('features.0.title'),
			desc: t('features.0.desc')
		},
		{
			image: '/assets/hdmi21.svg',
			title: t('features.1.title'),
			desc: t('features.1.desc')
		},
		{
			image: '/assets/plugnplay.svg',
			title: t('features.2.title'),
			desc: t('features.2.desc')
		},
		{
			image: '/assets/hdr10.svg',
			title: t('features.3.title'),
			desc: t('features.3.desc')
		},
		{
			image: '/assets/variablerefreshrate.svg',
			title: t('features.4.title'),
			desc: t('features.4.desc')
		},
		{
			image: '/assets/softwarecompatible.svg',
			title: t('features.5.title'),
			desc: t('features.5.desc')
		}
	]

	useGSAP(() => {
		gsap.to('.section__content', {
			y: 0,
			scrollTrigger: {
				trigger: '.section__content',
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
					<div className={['section', 'section--blue', 'section--centered'].join(' ')}>
						<p className={'section__title'}>{t('welcome')}</p>
					</div>
					<div className={['section', 'section--parallax'].join(' ')} ref={main}>
						<div className={'section__content'}>
							<p className={'section__desc'}>{t('promotion_content')}</p>
							<FlexRow>
								{
									features.map((feature: FeatureInterface, index: number) => (
										<FlexCol key={index} xs={12} sm={8}>
											<div className={'feature'}>
												<figure className={'figure__thumb'}>
													<img src={feature.image} alt={feature.title}/>
												</figure>
												<div className={'feature__content'}>
													<h3>{feature.title}</h3>
													<p>{feature.desc}</p>
												</div>
											</div>
										</FlexCol>
									))
								}
							</FlexRow>
						</div>
					</div>
					<div className={['section', 'section--red', 'section--centered'].join(' ')}>
						<p className={'section__title'}>{t('thanks')}</p>
					</div>
				</Container>
			</section>
		</>
	)
}

export default Home
