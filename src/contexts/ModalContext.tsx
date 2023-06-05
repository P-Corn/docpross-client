import { createContext, useState, useContext, ReactNode } from 'react';
import Modal from '@/components/Modal';

interface IModalContext {
  modalContent: ReactNode | null;
  modalHeader: string;
  modalStyles: object;
  openModal: (content: ReactNode, header: string, styles?: object) => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

interface IModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: IModalProviderProps) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalHeader, setModalHeader] = useState<string>('');
  const [modalStyles, setModalStyles] = useState<object>({});

  const openModal = (content: ReactNode, header: string, styles: object = {}) => {
    setModalContent(content);
    setModalHeader(header);
    setModalStyles(styles);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalHeader('');
    setModalStyles({})
  };

  const contextValue = {
    modalContent,
    modalHeader,
    openModal,
    modalStyles,
    closeModal
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Modal styles={modalStyles} header={modalHeader} visible={!!modalContent} setVisible={closeModal}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
