import type { Offer } from '@/types';

type Props = {
  offer: Offer;
};

const OfferInfo = ({ offer }: Props) => {
  console.log(offer);
  return <div>Честно, не понял какие данные сюда передавать(((</div>;
};

export default OfferInfo;
