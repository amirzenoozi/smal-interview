import React from 'react'
import { render, screen } from '@testing-library/react'
import Section from './components/section'
import FeatureCard from './components/feature'

describe('Home', () => {
	test('Section Component', () => {
		render(<Section>Welcome</Section>)
		const linkElement = screen.getByText(/Welcome/i)
		expect(linkElement).toBeInTheDocument()
	})
	test('Feature Card Full', () => {
		render(<FeatureCard id={`feature_${1}`} title={'HDMI'} desc={'Sample Content'} image={'hdmi21'} />)
		const linkElement = screen.getByText(/HDMI/i)
		expect(linkElement).toBeInTheDocument()
	})
	test('Feature Card -> No Title', () => {
		render(<FeatureCard id={`feature_${1}`} desc={'Sample Content'} image={'hdmi21'} />)
		const linkElement = screen.queryByRole('heading', { level: 3 })
		expect(linkElement).not.toBeInTheDocument()
	})
	test('Feature Card -> No Desc', () => {
		render(<FeatureCard id={`feature_${1}`} title={'Sample Content'} image={'hdmi21'} />)
		const linkElement = screen.queryByRole('paragraph')
		expect(linkElement).not.toBeInTheDocument()
	})
})
