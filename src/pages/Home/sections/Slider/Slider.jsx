import styles from "./Slider.module.scss";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Loader from "../../../../components/ui/Loader";
import { Link } from "react-router-dom";

const Slider = ({ variant, autoplay, onSlideClick, data, to }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const play = autoplay ? [Autoplay({ delay: 3000 })] : [];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, play);

    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    const handleSelectIndex = (ind) => {
        setSelectedIndex(ind);
        emblaApi?.scrollTo(ind);
    }

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.plugins().autoplay?.play();
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);


    if (!data?.length) {
        return <Loader />;
    }

    return (
        <div className={`${styles.slider} ${styles[variant]}`}>
            <div className={styles.sliderViewport} ref={emblaRef}>

                <div className={styles.sliderContainer}>
                    {data.map((el, i) => (
                        <div key={`${el.id}-${i}`} className={styles.slide}>
                            {to ? (
                                <Link to={to}>
                                    <img src={el.image} alt={el.name} className={styles.sliderImage} />
                                </Link>
                            ) : (
                                <img
                                    src={el.image}
                                    alt={el.name}
                                    onClick={() => onSlideClick?.(el)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className={styles.sliderPrev}
                aria-label="Previous slide"
                onClick={goToPrev}
            >
            </button>
            <button
                className={styles.sliderNext}
                aria-label="Next slide"
                onClick={goToNext}
            >
            </button>


            <div className={styles.thumbnails}>
                {data.map((el, i) => (
                    <div
                        key={`thumbnails-${el.name}-${i}`}
                        className={`${styles.thumbnail} ${selectedIndex === i ? styles.active : ""}`}
                        onClick={() => handleSelectIndex(i)}
                    >
                        <img src={el.image} alt={el.name} className={styles.thumbnailImg} />
                    </div>
                ))}
            </div>

            <div className={styles.dots}>
                {data.map((_, i) => (
                    <button
                        key={`dot-${i}`}
                        className={`${styles.dot} ${selectedIndex === i ? styles.active : ""}`}
                        onClick={() => handleSelectIndex(i)}
                    >
                    </button>
                ))}
            </div>
        </div >
    )
}

export default Slider;