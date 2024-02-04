import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Logo } from './Logo'

describe('Logo', () => {
    it('renders the logo image', () => {
        render(<Logo />)
        const logoImage = screen.getByRole('img')
        expect(logoImage).toBeInTheDocument()
        expect(logoImage).toHaveAttribute('src', '/nantesjs-logo.svg')
        expect(logoImage).toHaveAttribute('height', '500')
        expect(logoImage).toHaveAttribute('width', '500')
    })
})
