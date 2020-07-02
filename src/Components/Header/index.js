import React from 'react';

import { Container } from './styles';
import Logo from '../../Assets/logo.svg';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
    </Container>
  );
}

export default Header;
