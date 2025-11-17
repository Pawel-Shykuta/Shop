import { useEffect, useState } from "react";
import Styles from "./ProductLoopTimerStyle.module.scss";

const ProductLoopTimer = () => {
    const offer = "22.11.2025 12:00";

    const [time, setTime] = useState(getTimerLeft(offer));
    const [isOffer, setIsOffer] = useState(true);

    function getTimerLeft(dateString) {
        const [day, month, yearAndTime] = dateString.split(".");
        const [year, time] = yearAndTime.split(" ");

        const normalized = `${year}-${month}-${day} ${time}`;

        const now = new Date();
        const target = new Date(normalized);

        const diff = target - now;

        if (diff <= 0) return null; // <--- ВАЖНО: без setState

        return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const t = getTimerLeft(offer);

            if (!t) {
                setIsOffer(false);    
                clearInterval(interval);
            } else {
                setTime(t);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!isOffer) return null;

    return (
        <section className={Styles.Product_Loop_Timer_Wrapper}>
        <h1>Offer expires in:</h1>

            <div className={Styles.Product_Loop_Timer}>
                {Object.entries(time).map(([key, value], index) => (
                <div key={index} className={Styles.Product_Loop_Timer_Item}>
                    <h3>{value}</h3>
                    <h2>{key}</h2>
                </div>
                ))}
            </div>
        </section>
    );

};

export default ProductLoopTimer;
