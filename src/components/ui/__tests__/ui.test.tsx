/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import UI from '../'

describe('components:ui', () => {
  it('matches snapshot with default test props', async () => {
    const { container } = render(<UI />)

    expect(container).toMatchSnapshot()
  })

  it('uses the provided class name', async () => {
    const className = 'test-class'
    const { container } = render(<UI className={className} />)

    expect(container).toMatchSnapshot()
  })
})
