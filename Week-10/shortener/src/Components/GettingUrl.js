import React, { useState } from 'react';

function UrlEntryForm(props) {
  const [url, setUrl] = useState('');

  function changeHandler(event) {
    setUrl(event.target.value);
  }
 
  async function shortenUrlHandler(event) {
    event.preventDefault();
    const dat = await fetch('https://api.shrtco.de/v2/shorten?url=' + url);
    const dat1 = await dat.json();
    props.urlShorten({
      id: Math.random().toString(),
      data: dat1.result.short_link,
      main: url,
    });
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
