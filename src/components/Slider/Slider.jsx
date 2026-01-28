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
            <div className={styles["embla__viewport"]} ref={emblaRef}>
                <div className={styles["embla__container"]}>
                    <div className={styles["embla__slide"]}>
                        <img src={slide} alt="slide" />
                    </div>
                    <div className={styles["embla__slide"]}>
                        <img src={slide} alt="slide" />
                    </div>
                    <div className={styles["embla__slide"]}>
                        <img src={slide} alt="slide" />
                    </div>
                </div>
            </div>

            <button className={styles["embla__prev"]} onClick={goToPrev}>
                Scroll to prev
            </button>
            <button className={styles["embla__next"]} onClick={goToNext}>
                Scroll to next
            </button>
        </div>
    )
}

export default Slider;