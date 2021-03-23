export type Stock = {
  date: Date;
  'close/last': number;
  volume: number;
  open: number;
  high: number;
  low: number;
};

export type StockA = {
  length: number;
  start: Stock;
  end: Stock;
  type: 'A'
};

// Volume and price change
export type VACData = {
  change: number;
  date: Date;
  volume: number;
};

export type StockB = {
  data: VACData[];
  type: 'B';
};

// Simple moving average
export type SMAData = {
  change: number;
  date: Date;
  sma: number;
  open: number;
};

export type StockC = {
  data: SMAData[];
  type: 'C'
};