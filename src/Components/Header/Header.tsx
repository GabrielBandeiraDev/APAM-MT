import { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '/images/logo.png';

import Logo from '@/Components/Logo/Logo.tsx';

export type HeaderProps = HTMLAttributes<HTMLHeadingElement>;

import './_header.scss';

const Header: FC<HeaderProps> = ({ ...rest }) => (
  <header className="header" {...rest}>
    <Logo src={logo} />

    <nav className="header__nav">
      <ul className="header__nav__list">
        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/a"
          >
            Como Ajudar
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/b"
          >
            Adoção
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/c"
          >
            Contato
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/d"
          >
            Ajudar
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
