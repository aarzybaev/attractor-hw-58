import React from 'react';

interface Props extends React.PropsWithChildren {
  show?: boolean;
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({
                                  show,
                                  type,
                                  onDismiss,
                                  children
                                }) => {
  let btn: React.ReactNode = '';

  if (onDismiss) {
    btn = <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onDismiss}></button>;
  }

  const showHide = {display: show ? 'block' : 'none'};
  const alwaysShow = {display: 'block'};

  return (
    <div
      className={`alert alert-${type} ${onDismiss ? 'alert-dismissible' : ''} fade show`}
      role="alert"
      style={onDismiss ? showHide : alwaysShow}
    >
      {children}
      {btn}
    </div>
  );
};

export default Alert;