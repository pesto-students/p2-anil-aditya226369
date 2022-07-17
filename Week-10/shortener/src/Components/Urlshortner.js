import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Urlshortner({ listData, removeData }) {
  return listData.map((item, index) => (
    <div key={index} className="url_row">
      <div className="url_text" key={item.id}>
        <span>{item.main}</span>
      </div>
      <div className="icons">
        <span className="icons-text">{item.data}</span>
        <div>
          <CopyToClipboard text={item.data}>
            <button className="url_button--copy">
              Copy
            </button>
          </CopyToClipboard>
        </div>
        <icon className="delete_icon--div" alt='remove data icon'>
          <button className="url_button--remove" onClick={() => removeData(item.id)}>
              Remove
            </button>
        </icon>
      </div>
    </div>
  ));
}

export default Urlshortner;
