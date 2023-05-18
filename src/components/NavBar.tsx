
import React, { useState } from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import Modal from '@/components/Modal'

export default function NavBar() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const items: MenuItem[] = [
    {
      label: 'New',
      icon: 'pi pi-fw pi-plus',
      items: [
        {
            label: 'File upload',
            icon: 'pi pi-fw pi-upload',
            command: () => setModalVisible(true)
        },
        {
            label: 'New folder',
            icon: 'pi pi-fw pi-folder',
            command: () => setModalVisible(true)
        },

    ]
    }
  ];
  
  return (
    <div className="card">
      <Menubar model={items} />
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <div>Modal</div>
      </Modal>
    </div>
  )
}
        