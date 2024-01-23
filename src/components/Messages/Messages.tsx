import React from 'react';
import MessageItem from './MessageItem';
import {Message} from '../../types';

interface Props {
  messages: Message[];
  onClose: React.MouseEventHandler;
}

const Messages: React.FC<Props> = ({messages, onClose}) => {
  return (
    <>
      {
        messages.map(message => {
            return (
              <MessageItem
                key={message.id}
                title={message.title}
                message={message.message}
                onClose={onClose}
              />
            );
          }
        )
      }
    </>
  );
};

export default Messages;