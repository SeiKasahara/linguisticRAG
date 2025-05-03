import DocumentCard from './DocumentCard';
import { Document } from '../types';

interface DocumentListProps {
  docs: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ docs }) => (
  <div>
    {docs.map(doc => <DocumentCard key={doc.id} doc={doc} />)}
  </div>
);

export default DocumentList;