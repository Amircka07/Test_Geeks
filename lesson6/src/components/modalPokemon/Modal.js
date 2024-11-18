
import ReactDOM from 'react-dom';
import React from 'react';
import classes from './Modal.module.scss';
import Button from '../button/Button';

const ModalPokemon = ({ children, handleShow }) => {
    return ReactDOM.createPortal(
        <div className={classes.modal}>
            <div className={classes.wrapper} onClick={handleShow} />
            <div className={classes.content}>
                <Button name="❌" action={handleShow} />
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ModalPokemon;
