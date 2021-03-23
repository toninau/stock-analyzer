import React, { useEffect, useState } from 'react';

import { Stock, StockA, StockB, StockC } from './types';

import FileInput from './components/FileInput';
import Options from './components/Options';
import DateRangePickers from './components/DateRangePickers';
import AnalyzedData from './components/AnalyzedData';

import { upwardTrend, volumeAndChange, sma } from './utils/stockAnalyzers';

const App: React.FC = () => {
  const [stockData, setStockData] = useState<Stock[]>([]);
  const [option, setOption] = useState('A');
  const [dateRange, setDateRange] = useState({
    startIndex: -1,
    endIndex: -1
  });
  const [analyzedStockData, setAnalyzedStockData] = useState<StockA | StockB | StockC | null>(null);

  useEffect(() => {
    if (dateRange.startIndex !== -1 && dateRange.endIndex !== -1 &&
      dateRange.startIndex !== dateRange.endIndex) {
      const dataWithinDateRange = stockData.slice(dateRange.startIndex, dateRange.endIndex + 1);
      if (option === 'A') {
        setAnalyzedStockData(upwardTrend(dataWithinDateRange));
      } else if (option === 'B') {
        setAnalyzedStockData(volumeAndChange(dataWithinDateRange));
      } else if (option === 'C') {
        setAnalyzedStockData(sma(dataWithinDateRange, 5));
      }
    }
  }, [option, stockData, dateRange]);

  return (
    <div className="container">
      <FileInput setStockData={setStockData} setDateRange={setDateRange} />
      {stockData.length > 0 &&
        <>
          <div className="date-range">
            <p>Select date range</p>
            <DateRangePickers
              start={stockData[0].date}
              end={stockData[stockData.length - 1].date}
              setDateRange={setDateRange}
              stockData={stockData}
            />
            {(dateRange.startIndex === -1 ||
              dateRange.endIndex === -1 ||
              dateRange.startIndex === dateRange.endIndex) &&
              <p id="error">Pick a valid date range</p>
            }
          </div>
          <Options currentOption={option} setOption={setOption} />
        </>
      }
      <AnalyzedData analyzedData={analyzedStockData} />
    </div>
  );
};

export default App;