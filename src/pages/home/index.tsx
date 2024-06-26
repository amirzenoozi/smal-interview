import React, { useEffect, useRef } from 'react'
import Container from '../../components/container'
import FlexRow from '../../components/flex-row'
import FlexCol from '../../components/flex-col'
import FeatureCard from './components/feature'
import Section from './components/section'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTranslation } from 'react-i18next'
import { type FeatureInterface } from './feature.interface'
import { useSearchParams } from 'react-router-dom'
import i18n from 'i18next'
import './style.scss'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Home () {
	const [params] = useSearchParams()
	const { t } = useTranslation(['home'])
	const main = useRef<HTMLElement | null>(null) as React.MutableRefObject<HTMLInputElement>
	const matchMedia = gsap.matchMedia()
	const features: FeatureInterface[] = [
		{
			image: '4k144',
			title: t('features.0.title'),
			desc: t('features.0.desc')
		},
		{
			image: 'hdmi21',
			title: t('features.1.title'),
			desc: t('features.1.desc')
		},
		{
			image: 'plugnplay',
			title: t('features.2.title'),
			desc: t('features.2.desc')
		},
		{
			image: 'hdr10',
			title: t('features.3.title'),
			desc: t('features.3.desc')
		},
		{
			image: 'variablerefreshrate',
			title: t('features.4.title'),
			desc: t('features.4.desc')
		},
		{
			image: 'softwarecompatible',
			title: t('features.5.title'),
			desc: t('features.5.desc')
		}
	]

	useGSAP(() => {
		matchMedia.add('(max-width: 576px) and (prefers-reduced-motion: no-preference)', () => {
			const parallaxTimeLine = gsap.timeline()
			const featureTimeLine = gsap.timeline()
			const descriptionTimeLine = gsap.timeline()
			const deviceTimeline = gsap.timeline()

			parallaxTimeLine.from('.section--parallax', { yPercent: -100 })

			featureTimeLine.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_2', { yPercent: 10, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_4', { yPercent: 15, opacity: 0, delay: 3 }, 2)
			featureTimeLine.from('#feature_5', { yPercent: 15, opacity: 0, delay: 3 }, 2)

			descriptionTimeLine.from('#content_desc', { yPercent: 20, opacity: 0 })

			// Animating The Wrapper By Pulling It Down From The Top
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: featureTimeLine,
				trigger: '.section--blue',
				start: 'bottom 35%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 25%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: deviceTimeline,
				trigger: '.section--blue',
				start: 'bottom 50%',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 577px) and (max-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
			const parallaxTimeLine = gsap.timeline()
			const featureTimeLine1 = gsap.timeline()
			const descriptionTimeLine = gsap.timeline()
			const deviceTimeline = gsap.timeline()

			parallaxTimeLine.from('.section--parallax', { yPercent: -100 })

			featureTimeLine1.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine1.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine1.from('#feature_2', { yPercent: 10, opacity: 0, delay: 2 }, 1)
			featureTimeLine1.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine1.from('#feature_4', { yPercent: 15, opacity: 0, delay: 3 }, 2)
			featureTimeLine1.from('#feature_5', { yPercent: 15, opacity: 0, delay: 3 }, 2)

			descriptionTimeLine.from('#content_desc', { yPercent: 20, opacity: 0 })

			// Animating The Wrapper By Pulling It Down From The Top
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: featureTimeLine1,
				// trigger: '.section--parallax',
				// start: 'bottom 50%',
				trigger: '.section--blue',
				start: 'bottom 35%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 25%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: deviceTimeline,
				trigger: '.section--blue',
				start: 'bottom 50%',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
			const parallaxTimeLine = gsap.timeline()
			const featureTimeLine = gsap.timeline()
			const descriptionTimeLine = gsap.timeline()
			const deviceTimeline = gsap.timeline()

			parallaxTimeLine.from('.section--parallax', { yPercent: -100 })

			featureTimeLine.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_2', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_4', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_5', { yPercent: 15, opacity: 0, delay: 2 }, 1)

			descriptionTimeLine.from('#content_desc', { y: '30vh', opacity: 0 })

			// Animating The Wrapper By Pulling It Down From The Top
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: featureTimeLine,
				trigger: '.section--blue',
				start: 'bottom 15%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 30%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
			ScrollTrigger.create({
				animation: deviceTimeline,
				trigger: '.section--blue',
				start: 'bottom 50%',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})
	}, { scope: main })

	useEffect(() => {
		void i18n.changeLanguage(params.get('lng') ?? 'en')
	}, [])

	return (
		<>
			<section className={'page'} ref={main}>
				<Container>
					<Section classNames={['section--blue', 'section--centered', 'section--no-padding']}>
						<p className={'section__title'}>{t('welcome')}</p>
					</Section>
					<Section id={'features-wrapper'} classNames={['section--parallax']}>
						<>
							<p className={'section__desc'} id={'content_desc'}>{t('promotion_content')}</p>
							<FlexRow>
								{
									features.map((feature: FeatureInterface, index: number) => (
										<FlexCol key={index} xs={12} sm={12} md={8}>
											<FeatureCard
												id={`feature_${index}`}
												image={feature.image}
												title={feature.title}
												desc={feature.desc}
											/>
										</FlexCol>
									))
								}
							</FlexRow>
							<div className={'pinned-image'} id={'pinned-image'}>
								<img src={'./assets/capturecard.png'} alt='Capture Card'/>
							</div>
						</>
					</Section>
					<Section classNames={['section--red', 'section--centered', 'section--no-padding']}>
						<p className={'section__title'}>{t('thanks')}</p>
					</Section>
				</Container>
			</section>
		</>
	)
}

export default Home
