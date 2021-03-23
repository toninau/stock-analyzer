import { Stock } from '../types';

export const parseCSV = async (file: File): Promise<Stock[]> => {
  const fileString = await file.text();
  const [headerLine, ...lines] = fileString.trim().split('\n');
  const headers = headerLine.toLowerCase().split(',').map(value => value.trim());

  const stockArray = lines.map((line) => {
    const stockDataArray = line.split(',');
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    // Creates object based on stockDataArray values
    // Headers used as field names
    return stockDataArray.reduce((object, value, index) => ({
      ...object,
      [headers[index]]: index ? +value.replace('$', '') : new Date(value.trim())
    }), {} as Stock);
  });
  //sorted from oldest to newest
  return stockArray.sort((a, b) => +a.date - +b.date);
};