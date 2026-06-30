import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <NavLink
            to='/'
            className={`${styles.link} text text_type_main-default pt-4 pb-4 pr-5 pl-5`}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-primary-color)'
                : 'var(--text-inactive-color)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            {({ isActive }) => (
              <>
                <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                <p className='ml-2 mr-10'>Конструктор</p>
              </>
            )}
          </NavLink>

          <NavLink
            to='/feed'
            className={`${styles.link} text text_type_main-default pt-4 pb-4 pr-5 pl-5`}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-primary-color)'
                : 'var(--text-inactive-color)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            {({ isActive }) => (
              <>
                <ListIcon type={isActive ? 'primary' : 'secondary'} />
                <p className='ml-2'>Лента заказов</p>
              </>
            )}
          </NavLink>
        </div>

        <div
          className={styles.logo}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <Logo className='' />
        </div>

        <div className={styles.link_position_last}>
          <NavLink
            to='/profile'
            className={`${styles.link} text text_type_main-default pt-4 pb-4 pr-5 pl-5`}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-primary-color)'
                : 'var(--text-inactive-color)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            {({ isActive }) => (
              <>
                <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
                <p className='ml-2'>{userName || 'Личный кабинет'}</p>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
