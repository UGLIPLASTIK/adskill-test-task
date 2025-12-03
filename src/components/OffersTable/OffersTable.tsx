import type { Offer, SortableKeys } from '@/types';
import sortIcon from '../../assets/icons/IconSort.svg';
import styles from './OffersTable.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  setfilter,
  setProgressive,
} from '@/store/slices/filtersSlice/filtersSlice';
import CheckBox from '@/shared/UI/CheckBox';
import TableRow from './TableRow/TableRow';
import { FIlteredOffers } from '@/store/slices/offersSlice/offersSelectors';
import { SortingFilter } from '@/store/slices/filtersSlice/filterSelectors';
import { useCallback, useState } from 'react';
import { SelectAllOffers } from '@/store/slices/offersSlice/offersSlice';

const OffersTable = () => {
  const currentOffers = useSelector(FIlteredOffers);
  const currentFilter = useSelector(SortingFilter);
  const [allSelected, setAllSelected] = useState(false);
  const dispatch = useDispatch();
  const setSorting = (filter: SortableKeys) => {
    if (currentFilter === filter) {
      dispatch(setProgressive());
      return;
    }
    dispatch(setfilter(filter));
  };

  const selectAll = useCallback(() => {
    setAllSelected((prew) => {
      const newValue = !prew;
      dispatch(SelectAllOffers(newValue));
      return newValue;
    });
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <div>
              <CheckBox selected={allSelected} onClick={selectAll} />
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
        {currentOffers.map((item) => (
          <TableRow key={item.id} item={item as Offer} />
        ))}
      </tbody>
    </table>
  );
};

export default OffersTable;
