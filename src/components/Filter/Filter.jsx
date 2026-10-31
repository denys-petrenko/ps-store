import styles from "./Filter.module.scss";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { useTranslation } from "react-i18next";

const Filter = ({
    isActive,
    setShowFilters,
    items,
    maxPrice,
    minPrice,
    setFilteredProducts,
    filters,
    setFiltersCounter }) => {

    const [value, setValue] = useState([minPrice, maxPrice]);
    const [appliedPrice, setAppliedPrice] = useState([minPrice, maxPrice]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const { t, i18n } = useTranslation();
    const lang = i18n.language;


    const handleCheckboxChange = (option, filter) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filter.key]: prev[filter.key]?.includes(option)
                ? prev[filter.key].filter(key => key !== option)
                : [...(prev[filter.key] || []), option]
        }))
    }

    useEffect(() => {
        setFiltersCounter(
            Object.values(selectedFilters)
                .reduce((acc, cur) => acc + cur.length, 0)
        )
    }, [selectedFilters])



    useEffect(() => {
        const filtered = items.filter(item => {
            if (item.price < appliedPrice[0] || item.price > appliedPrice[1]) return false;

            return Object
                .entries(selectedFilters)
                .every(([key, value]) => {
                    if (value.length === 0) return true;

                    const spec = typeof item.specs[key] === "object"
                        && item.specs[key] !== null
                        ? item.specs[key].value
                        : item.specs[key];

                    return value.includes(spec);
                })
        })

        setFilteredProducts(filtered);
    }, [items, appliedPrice, selectedFilters, setFilteredProducts])


    return (
        <div className={`${styles.overlay} ${isActive ? styles.active : ""}`}>
            <div className={styles.filter}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t("filter.title")}</h1>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setShowFilters(false)}
                    >
                        <CircleX size={24} />
                    </button>
                </div>

                <div className={styles.filters}>
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

                    {filters?.map(filter => (
                        <div className={styles.filterBox} key={filter.key}>
                            <h3 className={styles.filterTitle}>{filter.label[lang]}</h3>
                            {filter.options.map(option => {
                                const optionValue = typeof option === "object" ? option.value : option;
                                const optionLabel = typeof option === "object" ? option.label[lang] : option;

                                return (
                                    <label className={styles.filterOption} key={optionValue}>
                                        <input
                                            type="checkbox"
                                            className={styles.filterCheckbox}
                                            checked={selectedFilters[filter.key]?.includes(optionValue) ?? false}
                                            onChange={() => handleCheckboxChange(optionValue, filter)}
                                        />
                                        <span className={styles.filterOptionLabel}>
                                            {optionLabel}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter;