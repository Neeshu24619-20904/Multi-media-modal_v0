import React, { useState } from 'react';
import { Camera, FileJson } from 'lucide-react';
import Dropzone from './Dropzone';
import FileProcessor from './FileProcessor';

const UploadZone = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [jsonFiles, setJsonFiles] = useState([]);

  const handleMediaDrop = (acceptedFiles) => {
    setMediaFiles(prev => [...prev, ...acceptedFiles.map(file => ({ file, id: Math.random().toString(36).substr(2, 9) }))]);
  };

  const handleJsonDrop = (acceptedFiles) => {
    setJsonFiles(prev => [...prev, ...acceptedFiles.map(file => ({ file, id: Math.random().toString(36).substr(2, 9) }))]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Dropzone
          onDrop={handleMediaDrop}
          accept={{ 'image/*': [], 'video/*': [] }}
          Icon={Camera}
          title="Media Upload"
          description="Drag & drop images or videos, or click to browse"
          buttonText="Browse Files"
          hoverClassName="border-purple-500 bg-purple-500/10"
        />
        <Dropzone
          onDrop={handleJsonDrop}
          accept={{ 'application/json': [] }}
          Icon={FileJson}
          title="JSON Upload"
          description="Drag & drop JSON files, or click to browse"
          buttonText="Browse Files"
          hoverClassName="border-blue-500 bg-blue-500/10"
        />
      </div>

      {(mediaFiles.length > 0 || jsonFiles.length > 0) && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Processing Files</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mediaFiles.map(item => <FileProcessor key={item.id} file={item.file} />)}
            {jsonFiles.map(item => <FileProcessor key={item.id} file={item.file} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadZone;
