import React, { useState, useEffect } from 'react';
import { Word, WordsList } from '../../types';

import style from './wordsTable.module.scss';

const WordsTable: React.FC = () => {
  const [allWords, setAllWords] = useState<WordsList>([]);
  const [filteredWords, setFilteredWords] = useState<WordsList>([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('words') || '')) { // как заменить на переменную
      // const json = JSON.parse(localStorage.getItem('words'); 
      setAllWords(JSON.parse(localStorage.getItem('words') || '')); 
      setFilteredWords(JSON.parse(localStorage.getItem('words') || '')); 
    }
  }, []);

  const getLearnedWords = () => {
    const learnedWords: WordsList = allWords.filter((word: Word) => word.learned);
    setFilteredWords(learnedWords);
  };

  const getUnlearnedWords = () => {
    const unLearnedWords: WordsList = allWords.filter((word: Word) => !word.learned);
    setFilteredWords(unLearnedWords);
  };

  return(
    <div className={style.wordsListTableList}>
      <div className="container">
        <h1 className={style.wordsListTabletTitle}>Список всех слов</h1>
        <div className={style.wordsListTabletBtnsWrap}>
          <button className={style.wordsListTableBtnLearnedWords} onClick={getLearnedWords}>Изученные слова</button>
          <button className={style.wordsListTableBtnUnlearnedWords} onClick={getUnlearnedWords}>Неизученные слова</button>
        </div>
        <div className={style.wordsListTableContent}>
          {filteredWords.map((word: Word) => ( /// Надо ли указывать тип
            <div className={style.wordsListTableItem} key={word.id}>{word.en}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WordsTable };