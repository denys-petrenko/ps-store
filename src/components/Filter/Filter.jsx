import styles from "./Filter.module.scss";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FilterGroup from "./FilterGroup/FilterGroup";
import PriceFilter from "./PriceFilter/PriceFilter";

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
    }, [selectedFilters, setFiltersCounter])



    useEffect(() => {
        const filtered = items.filter(item => {
            if (item.price < appliedPrice[0] || item.price > appliedPrice[1]) return false;

            return Object
                .entries(selectedFilters)
                .every(([key, value]) => {
                    if (value.length === 0) return true;
                    const rawSpec = item.specs?.[key];
                    const spec = typeof rawSpec === "object"
                        && rawSpec !== null
                        ? rawSpec.value
                        : rawSpec;

                    return value.includes(spec);
                })
        })

        setFilteredProducts(filtered);
    }, [items, appliedPrice, selectedFilters, setFilteredProducts])

    useEffect(() => {
        document.body.style.overflow = isActive ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        }
    }, [isActive]);


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
                    <PriceFilter
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        value={value}
                        setValue={setValue}
                        setAppliedPrice={setAppliedPrice}
                        t={t}
                    />
                    <FilterGroup
                        filters={filters}
                        lang={lang}
                        selectedFilters={selectedFilters}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter;