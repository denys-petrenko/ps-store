import styles from "./Slider.module.scss";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import slide from "./slide.png"

const Slider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    return (
        <div className={styles.slider}>
            <div className={styles["slider-viewport"]} ref={emblaRef}>
                <div className={styles["slider-container"]}>
                    <div className={styles["slider-slide"]}>
                        <img src={slide} alt="slide" />
                    </div>
                    <div className={styles["slider-slide"]}>
                        <img src={slide} alt="slide" />
                    </div>
                    <div className={styles["slider-slide"]}>
                        <img src={slide} alt="slide" />
                    </div>
                </div>
            </div>
            <button className={styles["slider-prev"]} aria-label="Previous slide" onClick={goToPrev}>
            </button>
            <button className={styles["slider-next"]} aria-label="Next slide" onClick={goToNext}>
            </button>
        </div>
    )
}

export default Slider;