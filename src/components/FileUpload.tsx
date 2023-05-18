import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ visible, setVisible, children }: ModalProps) {

  return (
    <div className="card flex justify-content-center">
      <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        {children}
    </Dialog>
    </div>
  )
}