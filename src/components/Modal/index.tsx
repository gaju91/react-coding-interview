import React from 'react';
import './styles.css';

const Modal = () => {

    const [toggleModal, setToggleModal] = React.useState(false);

    const onConfirm = () => {
        alert('Confirmed');
        setToggleModal(!toggleModal);
    }

    const onCancel = () => {
        alert('Canceled');
        setToggleModal(!toggleModal);
    }

    return (
        <div className="container">
            <div>
                <button 
                    className={`btn ${toggleModal ? 'untoggled' : 'toggled'}`}
                    onClick={() => setToggleModal(!toggleModal)}
                >
                    Open Modal
                </button>
            </div>

            <div 
                className={`modal ${toggleModal ? 'open' : ''}`}
            >

                <div className="modal-header">
                    <h2>Modal</h2>
                    <button 
                        className="btn close"
                        onClick={() => setToggleModal(!toggleModal)}
                    >
                        X
                    </button>
                </div>

                <div className="modal-body">
                    <p>
                        Modal Content
                    </p>
                </div>

                <div className="modal-footer">
                    <button 
                        className="btn confirm"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                    <button 
                        className="btn cancel"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Modal;