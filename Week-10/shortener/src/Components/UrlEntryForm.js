import React, { useState } from 'react';

function UrlEntryForm(props) {
  const [url, setUrl] = useState('');

  function changeHandler(event) {
    setUrl(event.target.value);
  }
  function getApi(link) {
    if(link.trim().length===0) return;
    fetch('https://api.shrtco.de/v2/shorten?url=' + link)
      .then((res) => res.json())
      .then((op) =>
        props.urlShorten({
          id: Math.random().toString(),
          main: link,
          data: op.result.short_link,
          loading: false,
        })
      );
  }

  function shortenUrlHandler(event) {
    event.preventDefault();
    getApi(url);
    setUrl('');
  }

  return (
    <div>
      <form onSubmit={shortenUrlHandler}>
        <input
          className="input_url"
          value={url}
          type="text"
          onChange={changeHandler}
          placeholder="Enter the url here"
          autoFocus
        />
        <button className="form_button">click me!</button>
      </form>
    </div>
  );
}

export default UrlEntryForm;
