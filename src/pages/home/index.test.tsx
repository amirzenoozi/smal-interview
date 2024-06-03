import React from 'react'
import { render, screen } from '@testing-library/react'
import Section from './components/section'

describe('Home', () => {
	test('Section Component', () => {
		render(<Section>Welcome</Section>)
		const linkElement = screen.getByText(/Welcome/i)
		expect(linkElement).toBeInTheDocument()
	})
})
