import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const FileProcessor = ({ file }) => {
  const [status, setStatus] = useState('analyzing');
  const [tags, setTags] = useState([]);
  const [storagePath, setStoragePath] = useState('');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus('tagging');
      const randomTags = ['nature', 'urban', 'people', 'animals', 'food', 'indoor', 'outdoor']
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 1);
      setTags(randomTags);
    }, 2000);

    const timer2 = setTimeout(() => {
      setStatus('storing');
      setStoragePath('Animals/Dogs/');
    }, 4000);

    const timer3 = setTimeout(() => {
      setStatus('completed');
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const isImage = file.type.startsWith('image/');
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (isImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file, isImage]);

  return (
    <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4">
      {isImage && imagePreview ? (
        <img src={imagePreview} alt={file.name} className="w-16 h-16 rounded-md object-cover" />
      ) : (
        <div className="w-16 h-16 rounded-md bg-gray-700 flex items-center justify-center">
          <p className="text-xs text-gray-400">.{file.name.split('.').pop()}</p>
        </div>
      )}
      <div className="flex-1">
        <p className="text-sm font-medium text-white truncate">{file.name}</p>
        <div className="mt-2 text-xs text-gray-400">
          {status === 'analyzing' && <div className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /><span>🤖 Analyzing...</span></div>}
          {status === 'tagging' && <p>🏷️ Detected tags: {tags.join(', ')}</p>}
          {status === 'storing' && <p>📁 Storing in: {storagePath}</p>}
          {status === 'completed' && <div className="flex items-center gap-2 text-green-400"><CheckCircle className="w-4 h-4" /><span>Processing Complete</span></div>}
        </div>
      </div>
    </div>
  );
};

export default FileProcessor;
