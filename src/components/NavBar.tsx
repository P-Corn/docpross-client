
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

export default function NavBar() {
  const items: MenuItem[] = [
    {
      label: 'Documents',
      icon: 'pi pi-fw pi-file'
    }
  ];

  const start = () => <Button label="Upload" size="small" icon="pi pi-plus" className="p-button-primary mx-2" />
  
  return (
    <div className="card">
      <Menubar model={items} start={start} />
    </div>
  )
}
        