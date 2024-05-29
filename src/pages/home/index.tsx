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
import Section from './components/section'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Home () {
	const { t } = useTranslation(['home'])
	const main = useRef<HTMLElement | null>(null) as React.MutableRefObject<HTMLInputElement>
	const parallaxTimeLine = gsap.timeline()
	const featureTimeLine = gsap.timeline()
	const descriptionTimeLine = gsap.timeline()
	const deviceTimeline = gsap.timeline()
	const matchMedia = gsap.matchMedia()
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
		parallaxTimeLine.from('.section--parallax', { yPercent: -100 })
		matchMedia.add('(min-width: 992px)', () => {
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 768px)', () => {
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 576px)', () => {
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(max-width: 576px)', () => {
			ScrollTrigger.create({
				animation: parallaxTimeLine,
				trigger: '.section--blue',
				start: 'top top',
				endTrigger: '.section--red',
				end: 'top 80%',
				scrub: true,
				markers: false
			})
		})

		matchMedia.add('(min-width: 992px)', () => {
			featureTimeLine.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_2', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_4', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_5', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			ScrollTrigger.create({
				animation: featureTimeLine,
				trigger: '.section--blue',
				start: 'bottom 35%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 768px)', () => {
			featureTimeLine.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_2', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_4', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_5', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			ScrollTrigger.create({
				animation: featureTimeLine,
				trigger: '.section--blue',
				start: 'bottom 35%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 576px)', () => {
			featureTimeLine.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_2', { yPercent: 10, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_4', { yPercent: 15, opacity: 0, delay: 3 }, 2)
			featureTimeLine.from('#feature_5', { yPercent: 15, opacity: 0, delay: 3 }, 2)
			ScrollTrigger.create({
				animation: featureTimeLine,
				trigger: '.section--blue',
				start: 'bottom 35%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(max-width: 576px)', () => {
			featureTimeLine.from('#feature_0', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_1', { yPercent: 10, opacity: 0, delay: 1 }, 0)
			featureTimeLine.from('#feature_2', { yPercent: 10, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_3', { yPercent: 15, opacity: 0, delay: 2 }, 1)
			featureTimeLine.from('#feature_4', { yPercent: 15, opacity: 0, delay: 3 }, 2)
			featureTimeLine.from('#feature_5', { yPercent: 15, opacity: 0, delay: 3 }, 2)
			ScrollTrigger.create({
				animation: featureTimeLine,
				trigger: '.section--blue',
				start: 'bottom 35%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})

		descriptionTimeLine.from('#content_desc', { yPercent: 20, opacity: 0 })
		matchMedia.add('(min-width: 992px)', () => {
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 75%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 768px)', () => {
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 75%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(min-width: 576px)', () => {
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 25%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})
		matchMedia.add('(max-width: 576px)', () => {
			ScrollTrigger.create({
				animation: descriptionTimeLine,
				trigger: '.section--blue',
				start: 'bottom 25%',
				endTrigger: '.section--red',
				end: 'top bottom',
				scrub: true,
				markers: false
			})
		})

		deviceTimeline.from('#pinned-image', { yPercent: -50 })
		matchMedia.add('(min-width: 992px)', () => {
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
		matchMedia.add('(min-width: 768px)', () => {
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
		matchMedia.add('(min-width: 576px)', () => {
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
		matchMedia.add('(max-width: 576px)', () => {
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
											<div className={'feature'} id={`feature_${index}`}>
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
