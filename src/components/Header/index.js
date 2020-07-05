import React from 'react'
import LogoDesktop from 'assets/img/breaking-bad-logo-5.png'
import LogoMobile from 'assets/img/breaking-bad-logo-6.png'
import Logo from 'components/Logo'
import { HeaderWrapper } from './styles'

const Header = () => (
  <HeaderWrapper>
    <Logo
      src={LogoMobile}
      srcSet={`${LogoMobile} 300w, ${LogoDesktop} 768w`}
      alt="Breaking Bad Logo"
    />
  </HeaderWrapper>
)

export default Header
