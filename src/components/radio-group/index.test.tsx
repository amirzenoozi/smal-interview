import React from 'react'
import { render, screen } from '@testing-library/react'
import RadioGroup from './index'

const radioOptions = [
	{
		value: 'all',
		label: 'All'
	},
	{
		value: 'yes',
		label: 'Yes'
	},
	{
		value: 'no',
		label: 'No'
	}
]

describe('RadioGroup', () => {
	test('Single Radio', () => {
		render(<RadioGroup options={[radioOptions[0]]} name={'metric'} value={'all'} clickHandler={(msg) => { console.log(msg) }} />)
		const linkElement = screen.getByLabelText(/All/i)
		expect(linkElement).toBeInTheDocument()
	})

	test('Multiple Radio', () => {
		render(<RadioGroup options={radioOptions} name={'metric'} value={'all'} clickHandler={(msg) => { console.log(msg) }} />)
		const allLabel = screen.getByLabelText(/All/i)
		const cpuLabel = screen.getByLabelText(/Yes/i)
		const memoryLabel = screen.getByLabelText(/No/i)
		expect(allLabel).toBeInTheDocument()
		expect(cpuLabel).toBeInTheDocument()
		expect(memoryLabel).toBeInTheDocument()
	})
})
