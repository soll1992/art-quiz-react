import React from 'react';
import SettingsButton from '../../Components/SettingsButton';
import css from './styles.module.scss';

function Main() {
  // eslint-disable-next-line no-console
  console.log('render');

  return (
    <div className={css.main_bg}>
      <SettingsButton />
    </div>
  );
}

export default Main;
