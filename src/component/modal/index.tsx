import React from 'react';
import './modal.css';

interface ModalProps {
    onClose: () => void;
    data:{
        no:number;
        name:string;
        website:string;
    }
  }

const Modal = ({ onClose,data}:ModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={onClose}>
                x
            </span>
            <br/>
            <div className='text-wrapper'>
                <p className='text'>No: <span>{data.no}</span></p>
                <p className='text'>Nama Universitas: <span>{data.name}</span></p>
                <p className='text'>Website: <span>{data.website}</span></p>
            </div>
        </div>
  </div>
  );
}

export default Modal;
