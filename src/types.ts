export type Metric = {
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  previousValue: number;
};

export type Platform = {
  id: string;
  name: string;
  color: string;
};

export type Offer = {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'paused';
  launchDate: string;
  balance: number;
  spent: number;
  platforms: Platform[];
};

export const MetricTypes: { [key: string]: string } = {
  expenses: 'Расходы',
  clicks: 'Клики',
  cpc: 'CPC',
  cpa: 'CPA',
};

export type OfferKey = keyof Offer;
export type SortableKeys = Extract<
  keyof Offer,
  'id' | 'name' | 'launchDate' | 'balance' | 'spent' | 'status'
>;
