import { useEffect, useState, useRef, useCallback } from "react";
import Styles from './PriceLineStyles.module.scss';

const PriceLine = ({ filterPrice, setFilterPrice }) => {
  const [activeTumbler, setActiveTumbler] = useState(null);
  const lineRef = useRef(null); // ссылка на линию

  const mouseDown = (tumb) => setActiveTumbler(tumb);

  const mouseMove = useCallback((e) => {
    if (!activeTumbler) return;

    let clientX = e.clientX;
    if (e.type.startsWith('touch')) clientX = e.touches[0].clientX;

    const line = lineRef.current;
    if (!line) return;

    const rect = line.getBoundingClientRect();
    const percent = Math.round(Math.min(100, Math.max(1, ((clientX - rect.left) / rect.width) * 100)));

    setFilterPrice(prev => {
      let newMin = prev.minPrice;
      let newMax = prev.maxPrice;

      if (activeTumbler === 'min') newMin = Math.min(percent, prev.maxPrice - 1);
      if (activeTumbler === 'max') newMax = Math.max(percent, prev.minPrice + 1);

      return { minPrice: newMin, maxPrice: newMax };
    });
  }, [activeTumbler, setFilterPrice]);

  const mouseUp = useCallback(() => setActiveTumbler(null), []);

  useEffect(() => {
    if (!activeTumbler) return;

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('touchmove', mouseMove);
    window.addEventListener('touchend', mouseUp);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('touchmove', mouseMove);
      window.removeEventListener('touchend', mouseUp);
    };
  }, [activeTumbler, mouseMove, mouseUp]);

  return (
    <section ref={lineRef} className={Styles.FilterList_Price_Line}>
      <span
        style={{ left: filterPrice.minPrice + '%' }}
        className={Styles.FilterList_Price_Line_cursor}
        onMouseDown={() => mouseDown('min')}
        onTouchStart={() => mouseDown('min')}
      />
      <span
        style={{ left: filterPrice.maxPrice + '%' }}
        className={Styles.FilterList_Price_Line_cursor}
        onMouseDown={() => mouseDown('max')}
        onTouchStart={() => mouseDown('max')}
      />
    </section>
  );
};

export default PriceLine;
