import styles from "./ProductSpecs.module.scss";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";


const ProductSpecs = ({ product }) => {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;
    const getLocalizedValue = (value) => typeof value === "object" && value !== null ? value[lang] : value;

    return (
        <section id="specs" className={`observe-section ${styles.specsSection}`}>
            <h2 className={styles.title}>{t("product_card.parameters")}</h2>
            <div className={styles.sectionsBox}>
                {Object.entries(product.specs).map(([key, section]) => (
                    <div key={key} className={styles.section}>
                        <h3 className={styles.sectionTitle}>{section.title[lang]}</h3>
                        <dl className={styles.sectionAttributes}>
                            {section.attributes.map(attr => (
                                <Fragment key={attr.key}>
                                    <dt className={styles.attributeTitle}>
                                        {getLocalizedValue(attr.title)}
                                    </dt>
                                    <dd className={styles.attributeValue}>
                                        {getLocalizedValue(attr.value)}
                                    </dd>
                                </Fragment>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>

            {/* <button className={styles.showMoreBtn}>Більше характеристик</button> */}
        </section>
    )
}

export default ProductSpecs;