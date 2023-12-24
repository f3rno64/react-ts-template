/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Home from '../'

describe('pages:home', () => {
  it('matches snapshot with default test props', async () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })

  it('uses the provided class name', async () => {
    const className = 'test-class'
    const { container } = render(<Home className={className} />)

    expect(container).toMatchSnapshot()
  })

  it('renders the template header text', async () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()

    const header = container.querySelector('h2')

    expect(header).toHaveTextContent('React TypeScript Web App Template')
  })
})
