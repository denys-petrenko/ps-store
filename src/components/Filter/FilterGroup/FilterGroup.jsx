import styles from "./FilterGroup.module.scss";


const FilterGroup = ({filters, lang, selectedFilters, handleCheckboxChange}) => {


    return (
        <>
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
        </>
    )
}

export default FilterGroup;