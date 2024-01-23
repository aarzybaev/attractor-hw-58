import {useState} from 'react';
import {Button, Message} from './types';
import Appbar from './components/Appbar/Appbar';
import Messages from './components/Messages/Messages';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {id: 1, title: 'Title', message: 'My first message'},
    {id: 2, title: 'Title', message: 'My second message'},
    {id: 3, title: 'Title', message: 'My third message'}
  ]);
  const cancel = () => setShowModal(false);
  const closeAlert = () => setShowAlert(false);

  const modalButtons: Button[] = [
    {type: 'primary', label: 'Continue', onClick: () => alert('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => cancel()}
  ];

  return (
    <>
      <header>
      <Appbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <h4>Messages</h4>
            <Messages
              messages={messages}
              onClose={() => setShowModal(true)}
            />

            <Modal
              show={showModal}
              onClose={cancel}
              title="Modal title"
              buttons = {modalButtons}
            >
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Modal>

            <Alert
              show={showAlert}
              type="warning"
              onDismiss={closeAlert}
            >This is a warning type alert</Alert>
            <Alert
              type="success">
              This is a success type alert
            </Alert>

          </div>
        </div>
        <div className="col"></div>
      </main>
    </>
  );
}

export default App;
