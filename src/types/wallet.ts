export interface WalletItem {
  name: string;
  cryptoValue: string;
  value: string;
  id: number;
  currencyFrom: string;
  last: number | undefined
}

export interface Currency {
  currencyFrom: string
  currencyFromScale: number
  currencyTo: string
  currencyToScale: number
  friendlyLast: string
  last: number
  lastHP: number
  timestamp: number
}

export type Amount = {
  beforeDecimals: string;
  afterDecimals: string;
};