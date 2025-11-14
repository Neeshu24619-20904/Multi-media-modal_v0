import React from 'react';
import { FileJson, Image as ImageIcon, MoreVertical, Download, Trash2 } from 'lucide-react';

const mockFiles = [
  { id: 1, name: 'vacation_photo.jpg', type: 'image', size: '2.3 MB', date: '2023-10-26', tags: ['nature', 'outdoor'], category: 'Images' },
  { id: 2, name: 'project_data.json', type: 'json', size: '512 KB', date: '2023-10-25', tags: ['data', 'project'], category: 'JSON' },
  { id: 3, name: 'beach_sunset.mp4', type: 'video', size: '15.8 MB', date: '2023-10-24', tags: ['nature', 'video'], category: 'Videos' },
];

const FileCard = ({ file }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 group relative">
      <div className="flex items-start gap-4">
        {file.type === 'image' || file.type === 'video' ? (
          <ImageIcon className="w-10 h-10 text-purple-400" />
        ) : (
          <FileJson className="w-10 h-10 text-blue-400" />
        )}
        <div className="flex-1">
          <p className="text-sm font-medium text-white truncate">{file.name}</p>
          <p className="text-xs text-gray-400">{file.size} - {file.date}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {file.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 text-xs bg-purple-600/50 text-purple-300 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full"><Download className="w-4 h-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/10 rounded-full"><Trash2 className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

const FileGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockFiles.map(file => <FileCard key={file.id} file={file} />)}
    </div>
  );
};

export default FileGrid;
