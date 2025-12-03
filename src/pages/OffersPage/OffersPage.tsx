import { useSelector } from 'react-redux';
import { Offers, Metrics } from '@/store/slices/offersSlice/offersSelectors';
import StatsCard from '@/components/StatsCard';
import type { Metric, Offer } from '@/types';
import styles from './offersPage.module.scss';
import OffersTable from '@/components/OffersTable';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import OfferCard from '@/components/OfferCard';

const OffersPage = () => {
  const currentOffers = useSelector(Offers);
  const currentMetrics = useSelector(Metrics);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.offersPage}>
      <div
        style={{
          flexWrap: isMobile ? 'wrap' : 'nowrap',
        }}
        className={styles.metrics}
      >
        {Object.entries(currentMetrics).map(([key, metric]) => (
          <StatsCard
            key={key}
            metric={metric as Metric}
            type={key as keyof typeof currentMetrics}
          />
        ))}
      </div>
      <div className={styles.offers}></div>
      {!isMobile ? (
        <OffersTable />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {currentOffers.map((offer) => (
            <OfferCard offer={offer as Offer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OffersPage;
