import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";
import React from "react";

const About = () => {
    const { t } = useTranslation();
    const aboutList = t("about", { returnObjects: true });

    return (
        <section className={styles.about}>
            <h1 className={styles.title}>{t(aboutList.title)}</h1>
            {aboutList.list.map((item, i) => (
                <React.Fragment key={`about-list-${i}`}>
                    <h2 key={`about-${i}`} className={styles["sub-title"]}>{item.title}</h2>
                    {item.description.map((p, i) => (
                        typeof p !== "object" && p !== null
                            ? <p key={`p-${i}`} className={styles.description}>{p}</p>
                            : <React.Fragment key={`sub_list-${i}`}>
                                <p key={`p-${i}`} className={styles.description} >{p.sub_title}</p>
                                <ol className={styles.list}>
                                    {p.sub_list.map((el, i) => (
                                        <li key={`sub_p-${i}`}>{el}</li>
                                    ))}
                                </ol>
                            </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </section>
    )
}

export default About;