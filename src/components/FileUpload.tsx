import React, { useEffect, useRef } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fileInputRef.current?.click()
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        style={{ display: 'none' }} 
        ref={fileInputRef} 
        onChange={handleFileChange}
      />
      {file && (
        <div>
          <p>File Name: {file.name}</p>
          <p>File Size: {file.size}</p>
          <p>File Type: {file.type}</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
