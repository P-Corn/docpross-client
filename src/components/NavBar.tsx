import React, { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import FileUpload from '@/components/FileUpload';
import NewFolder from '@/components/NewFolder';
import { useModal } from '@/contexts/ModalContext';

export default function NavBar() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModal();

  const handleFileUploadClick = () => {
    openModal(<FileUpload />, 'File upload', { width: '50vw' });
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  }

  const items: MenuItem[] = [
    {
      label: 'New',
      icon: 'pi pi-fw pi-plus',
      items: [
        {
          label: 'File upload',
          icon: 'pi pi-fw pi-upload',
          command: handleFileUploadClick,
        },
        {
          label: 'New folder',
          icon: 'pi pi-fw pi-folder',
          command: () => openModal(<NewFolder />, 'New folder', { width: '50vw' })
        },
      ]
    }
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  )
}
