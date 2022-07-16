import React, { useState } from 'react';
import '../App.css';
import UrlEntryForm from './UrlEntryForm';
import Urlshortner from './Urlshortner';

function Display() {
  const [list, setList] = useState([]);
  const urlFromForm = (url) => {
    const newData = [url, ...list];
    setList(newData);
  };
  const removeUrlData = (id) => {
    const removeArr = [...list].filter((item) => item.id !== id);
    setList(removeArr);
  };

  return (
    <div className="display_form-data">
      <UrlEntryForm urlShorten={urlFromForm} />
      <Urlshortner listData={list} removeData={removeUrlData} />
    </div>
  );
}

export default Display;
