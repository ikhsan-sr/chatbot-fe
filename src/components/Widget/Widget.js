import React, { useState } from 'react';
import Config from '../../config';
import './widget.css';

const widgetName = Config.name;

const Widget = () => {
  const [message, setMessage] = useState(null);

  return (
    <div>
      Embedded Chat
    </div>
  );
};

export default Widget;
