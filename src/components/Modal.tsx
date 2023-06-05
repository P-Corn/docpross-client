import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
  header: string;
  styles: object;
}

export default function Modal({ visible, setVisible, children, header, styles }: ModalProps) {
  return (
    <div className="card flex justify-content-center">
      <Dialog header={header} visible={visible} style={styles} onHide={() => setVisible(false)}>
        {children}
      </Dialog>
    </div>
  )
}