import React, { useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useModal } from '@/contexts/ModalContext';

export default function NewFolder() {
  const { closeModal } = useModal();
  const [folderName, setFolderName] = useState<string>('Untitled Folder')

  const createFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(folderName)
    closeModal()
  }

  return (
    <form onSubmit={createFolder} className="mt-1">
      <InputText className="w-full mb-3" id="folderName" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
      <div className="flex justify-content-end">
        <Button text formAction="submit" className="mt-1" label="Create" />
      </div>
    </form>
  )
}