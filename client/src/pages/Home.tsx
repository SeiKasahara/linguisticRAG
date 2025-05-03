import React from 'react';
import { Document } from '../utils/types';
import DocumentList from '../components/DocumentList';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import { useFetchDocuments } from '../hooks/useFetchDocuments';

const Home: React.FC = () => {
  const { docs, loading, error } = useFetchDocuments({ limit: 5, sort: 'recent' });

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500">Loading Failed: {error.message}</div>;

  return (
    <div className="space-y-6">
      <SearchBar />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recommend Document</h2>
        <DocumentList docs={docs as Document[]} />
      </section>
    </div>
  );
};

export default Home;