import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './notFound.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const returnToMain = () => {
    navigate('/', { replace: true });
  };

  return(
    <div className={style.notFound}>
      <h1 className={style.notFoundTitle}>Такой страницы не существует</h1>
      <button className={style.notFoundBtnBack} onClick={returnToMain}>Вернуться на главную</button>
    </div>
  );
}

export { NotFound };