import { render, screen } from '@testing-library/react'

import App from '../../src/App'

describe('App', () => {
  it('Should render App Page', () => {
    render(<App />)

    expect(screen.getByText(/hello world/)).toBeInTheDocument()
  })
})
