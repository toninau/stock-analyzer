# Vincit Assignment

> https://whispering-brook-28949.herokuapp.com/

Initialized with create-react-app. Data can be imported from a CSV file that can be downloaded from nasdaq. [example](https://www.nasdaq.com/market-activity/stocks/aapl/historical)

Displays (within a given date range): 
 - Longest bullish (upward) trend
 - Highest trading volume and the most significant stock price change withing a day
 - Best opening price compared to 5 days simple moving average (SMA 5)

Analyzing functions can be found in:
```
src/utils/stockAnalyzers.ts
```

File parsing function can be found in:
```
src/utils/parseFile.ts
```

## Running locally

```
npm install
npm start
```