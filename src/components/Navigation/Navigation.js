import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { HiHome } from 'react-icons/hi';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navBlock}>
      <NavLink to="/" className={css.link}>
        <HiHome size="20px" fill="inherit" />
        <p className={css.logo}>Home</p>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
