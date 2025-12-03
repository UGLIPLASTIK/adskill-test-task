import type { Metric } from '@/types';
import styles from './statsCard.module.scss';
import { MetricTypes } from '@/types';
import FinanceIcon from '../../assets/icons/Finance.svg';
import ClickIcon from '../../assets/icons/Click.svg';
import CPCIcon from '../../assets/icons/CPC.svg';
import CPAIcon from '../../assets/icons/CPA.svg';
import increaseArrow from '../../assets/icons/increase.svg';
import decreaseArrow from '../../assets/icons/decrease.svg';

type Props = {
  metric: Metric;
  type: keyof typeof cardTypes;
};

const cardTypes = {
  expenses: FinanceIcon,
  clicks: ClickIcon,
  cpc: CPCIcon,
  cpa: CPAIcon,
};

const StatsCard = ({ metric, type }: Props) => {
  const Icon = cardTypes[type];
  const color =
    metric.changeType === 'decrease'
      ? 'rgba(218, 2, 42, 1)'
      : 'rgba(7, 148, 85, 1)';

  return (
    <div className={styles.statsCard}>
      <div>
        <span>{MetricTypes[type]}</span>
        <img src={Icon} alt={type} />
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          {type === 'expenses' ? `$${metric.value.toFixed(2)}` : metric.value}
        </div>
        <div
          style={{
            width: '61px',
            height: '24px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '20px', height: '10px' }}
            src={
              metric.changeType === 'decrease' ? decreaseArrow : increaseArrow
            }
            alt={type}
          />
          <div style={{ color: color }}>{metric.change}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
