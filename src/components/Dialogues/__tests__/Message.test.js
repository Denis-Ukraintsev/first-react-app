/** @jest-environment-jsdom */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Message from '../Message/Message'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

test('message component test', () => {
  render(<Message message="test message" />)
  expect(screen.getByText('test message')).toBeInTheDocument()
})
