import React from 'react'
import { shallow } from 'enzyme'

import Lose from '../client/components/Lose'
import Win from '../client/components/Win'

test('<Lose /> contains a button with the correct class name', () => {

  const wrapper = shallow(<Lose />)
  expect(wrapper.find('button').hasClass('startButton')).toBeTruthy()
})

test('<Win /> contains a button with the correct class name', () => {

  const wrapper = shallow(<Win />)
  expect(wrapper.containsMatchingElement(<h1 className="resultHeading">You Win!</h1>)).toBeTruthy()
})
