import type { Offer } from '@/types';
import { format, parseISO } from 'date-fns';
import style from './OfferCard.module.scss';

type Props = {
  offer: Offer;
};

const OfferCard = ({ offer }: Props) => {
  return (
    <div className={style.offerCard}>
      <div>{offer.name}</div>
      <div>Platforms</div>
      <div>
        Дата запуска: {format(parseISO(offer.launchDate), 'dd.MM.yyyy')}
      </div>
      <div>Баланс: {`$${offer.balance.toFixed(2)}`}</div>
      <div>Расход: {`$${offer.spent.toFixed(2)}`}</div>
      <div>{offer.status}</div>
    </div>
  );
};

export default OfferCard;
