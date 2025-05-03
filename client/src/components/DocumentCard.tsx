import { Document } from '../utils/types';

interface DocumentCardProps {
  doc: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ doc }) => (
  <div className="p-4 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md">
    <h3 className="text-lg font-semibold">{doc.title}</h3>
    <p className="text-sm text-gray-500 truncate">{doc.excerpt}</p>
  </div>
);

export default DocumentCard;