import { useState, useRef, useEffect } from 'react';
import Styles from './FiltersStyle.module.scss';
import Input from '../UI/Input/Input';
import PriceLine from './PriceLine/PriceLine';

const Filters = ({ setFilters, filters }) => {
  const [roomOpen, setRoomOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const roomRef = useRef(null);
  const priceRef = useRef(null);

  const [filterPrice, setFilterPrice] = useState({ minPrice: 1, maxPrice: 100 });

  const rooms = ['All Room', 'Living Room', 'Bedroom', 'Bathroom', 'Dinning', 'Outdoor'];

  const RoomChange = (room) => {
    setFilters(prev => ({ ...prev, room }));
    setRoomOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roomRef.current && !roomRef.current.contains(event.target)) setRoomOpen(false);
      if (priceRef.current && !priceRef.current.contains(event.target)) setPriceOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  useEffect(() => {
    const newFilters = {
      minPrice: filterPrice.minPrice * 50,
      maxPrice: filterPrice.maxPrice * 50,
    };
    setFilters(newFilters);
  }, [filterPrice, setFilters]);


  return (
    <section className={Styles.Shop_Filters_Wrapper}>
      <div className={Styles.Filter} ref={roomRef}>
        <h1>CATEGORIES</h1>
        <div className={Styles.FilterSummary} onClick={() => setRoomOpen(prev => !prev)}>
          {filters.room || 'Select Room'}
        </div>
        {roomOpen && (
          <ul className={Styles.FilterList}>
            {rooms.map(room => (
              <li key={room} onClick={() => RoomChange(room)}>
                {room}
              </li>
            ))}
          </ul>
        )}
      </div>

     
      <div className={Styles.Filter} ref={priceRef}>
        <h1>PRICE</h1>
        <div className={Styles.FilterSummary} onClick={() => setPriceOpen(prev => !prev)}>
          {filterPrice.minPrice !== 1 || filterPrice.maxPrice !== 100
          ? `${filterPrice.minPrice * 50}$ - ${filterPrice.maxPrice * 50}$`
          : 'Select Price'}

        </div>

        {priceOpen && (
          <div className={Styles.FilterList_Price}>
          <Input
            placeholder="from"
            label="Min Price"
            type="number"
            value={filterPrice.minPrice * 50} 
            onChange={e => {
                const val = e.target.value;
                setFilterPrice(prev => ({
                  ...prev,                                
                  minPrice: val === '' ? 0 : Number(val) / 50
                }));
              }}
          />

          <Input
            placeholder="to"
            label="Max Price"
            type="number"
            value={filterPrice.maxPrice * 50}

            onChange={e => {
              const val = e.target.value;
              setFilterPrice(prev => ({
                ...prev,
                maxPriceINput:val,
                maxPrice: val === "" ? 0 : Number(val) / 50
              }));
            }}
          />

            <PriceLine setFilterPrice={setFilterPrice} filterPrice={filterPrice} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Filters;
