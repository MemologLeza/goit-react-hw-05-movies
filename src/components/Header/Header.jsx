import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';
const Header = () => {
  return (
    <div className={styled.header}>
      <NavLink className={styled.navLink} to="/">
        Home
      </NavLink>

      <NavLink className={styled.navLink} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
