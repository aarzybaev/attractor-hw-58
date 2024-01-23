import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import {Button} from '../../types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: React.ReactNode;
  onClose: React.MouseEventHandler;
  buttons: Button[]
}
const Modal: React.FC<Props> = ({
                                  show,
                                  title,
                                  onClose,
                                  buttons ,
                                  children
}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose}/>
      <div className="modal show" style={{display: show? 'block':'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onClose}></button>
            </div>
            {children}
            <div className="modal-footer">
            {buttons.map(button => {
              return (
                <button key={Math.random()} className={`btn btn-${button.type}`} onClick={button.onClick}>{button.label}</button>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;