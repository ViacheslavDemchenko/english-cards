import React from 'react';
import CurrentCard from '../../components/currentCard';

import style from './mainPage.module.scss';

const MainPage: React.FC = () => {
  return(
    <div className={style.mainPage}>
      <CurrentCard />
    </div>
  );
};

export { MainPage };