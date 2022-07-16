import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Urlshortner({ listData, removeData }) {
  return listData.map((item, index) => (
    <div key={index} className="url_row">
      <div className="url_text" key={item.id}>
        <div>{item.main}</div>
      </div>
      <div className="icons">
        <div className="icons-text">{item.data}</div>
        <div>
          <CopyToClipboard text={item.data}>
            <button className="url_button">
              Copy
            </button>
          </CopyToClipboard>
        </div>
        <div className="delete_icon--div">
          <RiCloseCircleLine
            onClick={() => removeData(item.id)}
            className="delete_icon"
          />
        </div>
      </div>
    </div>
  ));
}

export default Urlshortner;
