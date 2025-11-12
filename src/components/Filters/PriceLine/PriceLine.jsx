import { useEffect, useState } from "react";

import Styles from './PriceLineStyles.module.scss'

const PriceLine = ({filterPrice, setFilterPrice}) =>{

  
    const [activeTumbler, setActiveTumbler] = useState(null);

    const mouseDown = (tumb) => setActiveTumbler(tumb);
    const mouseMove = (e) => {
        if (!activeTumbler) return;

        let clientX = e.clientX;
        if (e.type.startsWith('touch')) clientX = e.touches[0].clientX;

        const line = document.querySelector(`.${Styles.FilterList_Price_Line}`);
        if (!line) return;
        const rect = line.getBoundingClientRect();
        const percent = Math.round(Math.min(100, Math.max(1, ((clientX - rect.left) / rect.width) * 100)));

      setFilterPrice(prev => {
          let newMin = prev.minPrice;
          let newMax = prev.maxPrice;

          if (activeTumbler === 'min') newMin = Math.round(Math.min(percent, Math.round(prev.maxPrice) - 1));
          if (activeTumbler === 'max') newMax = Math.round(Math.max(percent, Math.round(prev.minPrice) + 1));

          return { minPrice: newMin, maxPrice: newMax };
      });

    };

    const mouseUp = () => setActiveTumbler(null);



    useEffect(() => {
        if (activeTumbler) {
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp);
        window.addEventListener('touchmove', mouseMove);
        window.addEventListener('touchend', mouseUp);
        }
        return () => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseup', mouseUp);
        window.removeEventListener('touchmove', mouseMove);
        window.removeEventListener('touchend', mouseUp);
        };
    }, [activeTumbler]);

    return(
        
            <section className={Styles.FilterList_Price_Line}>
              <span
                style={{ left: filterPrice.minPrice + '%' }}
                className={Styles.FilterList_Price_Line_cursor}
                onMouseDown={() => mouseDown('min')}
                onTouchStart={() => mouseDown('min')}
              ></span>
              <span
                style={{ left: filterPrice.maxPrice + '%' }}
                className={Styles.FilterList_Price_Line_cursor}
                onMouseDown={() => mouseDown('max')}
                onTouchStart={() => mouseDown('max')}
              ></span>
            </section>
        
    )
}

export default PriceLine
