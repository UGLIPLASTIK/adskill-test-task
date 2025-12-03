import type { Offer } from '@/types';
import CheckBox from '@/shared/UI/CheckBox';
import classNames from 'classnames';
import { format, parseISO } from 'date-fns';
import styles from '../OffersTable.module.scss';
import { useState } from 'react';
import OfferInfo from '@/components/OfferInfo';

type Props = {
  item: Offer;
};

const TableRow = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr key={item.id}>
        <td>
          <div>
            <CheckBox />
            <button onClick={() => setOpen((prew) => !prew)}></button>
            {item.name}
          </div>
        </td>
        <td>Platforms</td>
        <td>{format(parseISO(item.launchDate), 'dd.MM.yyyy')}</td>
        <td>{`$${item.balance.toFixed(2)}`}</td>
        <td>{`$${item.spent.toFixed(2)}`}</td>
        <td>
          <span className={classNames([styles.status, styles[item.status]])}>
            {item.status}
          </span>
        </td>
      </tr>
      {open ? <OfferInfo offer={item} /> : null}
    </>
  );
};

export default TableRow;
