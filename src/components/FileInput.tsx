import React from 'react';

import { parseCSV } from '../utils/parseFile';
import { Stock } from '../types';

interface FileInputProps {
  setStockData: (stockData: Stock[]) => void;
  setDateRange: (obj: { startIndex: number, endIndex: number }) => void;
}

const FileInput: React.FC<FileInputProps> = ({ setStockData, setDateRange }) => {

  const submitFile = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.currentTarget.files?.length) {
      const file = event.currentTarget.files[0];
      const fileData = await parseCSV(file);
      setDateRange({ startIndex: -1, endIndex: -1 });
      setStockData(fileData);
    }
  };

  return (
    <form>
      <input
        name="file"
        type="file"
        onChange={submitFile}
        multiple={false}
        accept=".csv"
        id="file"
        className="inputfile" />
      <label htmlFor="file">Choose a file...</label>
    </form>
  );
};

export default FileInput;