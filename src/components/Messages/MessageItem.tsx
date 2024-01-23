import React from 'react';

interface Props {
  title: string;
  message: string;
  onClose: React.MouseEventHandler;
}

const MessageItem: React.FC<Props> = ({title, message, onClose}) => {
  return (
    <div className="card mb-2" onClick={onClose}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
};

export default MessageItem;