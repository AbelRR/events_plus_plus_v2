import { render } from '@redwoodjs/testing/web'

import ManagePage from './ManagePage'

describe('ManagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManagePage />)
    }).not.toThrow()
  })
})
