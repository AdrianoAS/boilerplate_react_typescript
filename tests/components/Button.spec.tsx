import { render, screen } from '@testing-library/react'

import Button from '../../src/Components/Button'

describe('Component Button', () => {
  it('Should be able title Salvar ', () => {
    render(<Button title="Salvar" />)

    expect(screen.getByRole('button', { name: /Salvar/ })).toBeInTheDocument()
  })
})
