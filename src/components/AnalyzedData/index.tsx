import React from 'react';

import { StockA, StockB, StockC } from '../../types';
import UpwardTrend from './UpwardTrend';
import VolumeAndChange from './VolumeAndChange';
import SimpleMovingAverage from './SimpleMovingAverage';

interface AnalyzedDataProps {
  analyzedData: StockA | StockB | StockC | null;
}

const AnalyzedData: React.FC<AnalyzedDataProps> = ({ analyzedData }) => {

  const assertNever = (x: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(x)}`
    );
  };

  if (analyzedData) {
    switch (analyzedData.type) {
      case 'A':
        return <UpwardTrend data={analyzedData} />;
      case 'B':
        return <VolumeAndChange data={analyzedData.data} />;
      case 'C':
        return <SimpleMovingAverage data={analyzedData.data} />;
      default:
        return assertNever(analyzedData);
    }
  }
  return <p>Insert a CSV file</p>;
};

export default AnalyzedData;