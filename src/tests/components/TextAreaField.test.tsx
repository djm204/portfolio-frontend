import React from 'react'
import TextAreaField from '../../components/TextAreaField'
import { render } from '@testing-library/react'

it('TextAreaField renders without crashing', () => {
  const result = render(
    <TextAreaField
      name="testField"
      placeholder="testInputField"
      onChangeHandler={() => 'test'}
      value={'thisValueNow'}
    />
  )

  expect(result).toMatchSnapshot()
})
