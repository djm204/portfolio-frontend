import React from 'react'
import InputField from '../../components/InputField'
import { render } from '@testing-library/react'

it('InputField renders without crashing', () => {
  const result = render(
    <InputField
      name="testField"
      type="text"
      placeholder="testInputField"
      onChangeHandler={() => 'test'}
      value={'thisValueNow'}
    />
  )

  expect(result).toMatchSnapshot()
})
