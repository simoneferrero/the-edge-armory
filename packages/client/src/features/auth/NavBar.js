import React from 'react'

import Header from '../../components/Header'
import Logo from '../../components/Logo'
import Controls from './Controls'

const NavBar = () => (
  <Header>
    <Logo src="http://awakenrealms.com/wp-content/uploads/2018/04/dgelogo-600x200.png" />
    <Controls />
  </Header>
)

export default NavBar
