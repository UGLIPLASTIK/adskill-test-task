import type { Offer, SortableKeys } from '@/types';
import sortIcon from '../../assets/icons/IconSort.svg';
import styles from './OffersTable.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SortingFilter } from '@/store/slices/filtersSlice/filterSelectors';
import { setfilter } from '@/store/slices/filtersSlice/filtersSlice';
import CheckBox from '@/shared/UI/CheckBox';
import TableRow from './TableRow/TableRow';

type Props = {
  offers: Offer[];
};

const OffersTable = ({ offers }: Props) => {
  const filter = useSelector(SortingFilter);
  const dispatch = useDispatch();
  const setSorting = (filter: SortableKeys) => {
    dispatch(setfilter(filter));
  };
  console.log(offers);

  const sortedOffers = filter
    ? [...offers].sort((a, b) => {
        const aVal = a[filter];
        const bVal = b[filter];

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return aVal - bVal;
        }

        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return aVal.localeCompare(bVal);
        }

        return 0;
      })
    : offers;

  return (
    <table
      className={styles.table}
      // style={{ borderCollapse: 'collapse', width: '100%' }}
    >
      <thead>
        <tr>
          <th>
            <div>
              {' '}
              <CheckBox />
              Название офера
            </div>
          </th>
          <th>
            <div>
              <span>Площадки</span>
              <img src={sortIcon} alt="" />
            </div>
          </th>
          <th onClick={() => setSorting('launchDate')}>
            <div>
              <span>Дата запуска</span>
              <img src={sortIcon} alt="" />
            </div>
          </th>
          <th onClick={() => setSorting('balance')}>
            <div>
              <span>Баланс</span>
              <img src={sortIcon} alt="" />
            </div>
          </th>
          <th onClick={() => setSorting('spent')}>
            <div>
              <span>Расход</span>
              <img src={sortIcon} alt="" />
            </div>
          </th>
          <th onClick={() => setSorting('status')}>
            <div>
              <span>Статус</span>
              <img src={sortIcon} alt="" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedOffers.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default OffersTable;
