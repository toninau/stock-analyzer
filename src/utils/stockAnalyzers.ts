import { Stock, StockA, StockB, StockC, SMAData } from '../types';

export const upwardTrend = (values: Stock[]): StockA => {
  let max = 1;
  let len = 1;
  let maxIndex = 0;

  for (let i = 1; i < values.length; i++) {
    if (values[i]['close/last'] > values[i - 1]['close/last']) {
      len++;
    } else {
      if (max < len) {
        max = len;
        maxIndex = i - max;
      }
      len = 1;
    }
  }
  if (max < len) {
    max = len;
    maxIndex = values.length - max;
  }
  return {
    type: 'A',
    length: max,
    start: values[maxIndex],
    end: values[max + maxIndex - 1]
  };
};

export const sma = (values: Stock[], range: number): StockC => {
  let smaArray: SMAData[] = [];

  for (let i = range; i < values.length; i++) {
    const sum = values.slice(i - range, i).reduce((sum, current) =>
      sum + current['close/last'], 0);
    const average = sum / range;
    const open = values[i].open;
    //const difference = Math.abs(open - average)/((open+average)/2)*100; //Percentage Difference
    const difference = (open - average) / average * 100; //Percentage Change
    const object = {
      change: difference,
      date: values[i].date,
      sma: average,
      open
    };
    smaArray = [...smaArray, object];
  }

  return {
    type: 'C',
    data: smaArray.sort((a, b) => b.change - a.change)
  };
};

export const volumeAndChange = (values: Stock[]): StockB => {
  const vacArray = values.map((historicalData) => {
    const obj = {
      change: Math.abs(historicalData.high - historicalData.low),
      date: historicalData.date,
      volume: historicalData.volume,
    };
    return obj;
  });

  return {
    type: 'B',
    data: vacArray.sort((a, b) => b.volume - a.volume || b.change - a.change)
  };
};