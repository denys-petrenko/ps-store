import styles from "./PriceFilter.module.scss";
import * as Slider from "@radix-ui/react-slider";


const PriceFilter = ({minPrice, maxPrice, value, setValue, setAppliedPrice, t}) => {

    return (
        <div className={styles.filterBox}>
            <h3 className={styles.filterTitle}>{t("filter.price")}</h3>
            <Slider.Root
                className={styles.sliderRoot}
                value={value}
                step={100}
                min={minPrice}
                max={maxPrice}
                onValueChange={(value) => setValue(value)}
            >
                <Slider.Track className={styles.sliderTrack}>
                    <Slider.Range className={styles.sliderRange} />
                </Slider.Track>
                <Slider.Thumb className={styles.sliderThumb} aria-label="Price" />
                <Slider.Thumb className={styles.sliderThumb} aria-label="Price" />
            </Slider.Root>

            <div className={styles.filterParameters}>
                <input type="number"
                    className={styles.filterPrice}
                    value={value[0]}
                    onChange={(e) => setValue(prev => [Number(e.target.value), prev[1]])}
                />
                <input
                    type="number"
                    className={styles.filterPrice}
                    value={value[1]}
                    onChange={(e) => setValue(prev => [prev[0], Number(e.target.value)])}
                />
            </div>

            <button
                className={styles.rangeBtn}
                onClick={() => setAppliedPrice(value)}>
                {t("filter.price_btn")}
            </button>
        </div>
    )
}

export default PriceFilter;