import React from 'react';
import { Batch } from '../types';

interface BatchSelectorProps {
  batches: Batch[];
  selectedBatch: string;
  onBatchChange: (batchId: string) => void;
}

const BatchSelector: React.FC<BatchSelectorProps> = ({ batches, selectedBatch, onBatchChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="batch-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select Batch
      </label>
      <select
        id="batch-select"
        value={selectedBatch}
        onChange={(e) => onBatchChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        {batches.map((batch) => (
          <option key={batch.id} value={batch.id}>
            {batch.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BatchSelector;