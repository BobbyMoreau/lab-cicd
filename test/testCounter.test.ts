import { setupCounter } from '../src/counter'
import { expect, test } from 'vitest'

test('setupCounter increments the counter', () => {
  let html = ''
  const mockElement = {
    innerHTML: '',
    addEventListener: (_: string, cb: () => void) => {
      mockElement.click = cb
    },
    click: () => {},
  }

  // @ts-expect-error we’re faking just enough for the test
  setupCounter(mockElement)

  expect(mockElement.innerHTML).toBe('count is 0')

  mockElement.click()
  expect(mockElement.innerHTML).toBe('count is 1')

  mockElement.click()
  expect(mockElement.innerHTML).toBe('count is 222')
})
