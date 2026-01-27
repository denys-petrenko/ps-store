import styles from "./Slider.module.scss";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

const Slider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const goToPrev = () => emblaApi?.goToPrev()
    const goToNext = () => emblaApi?.goToNext()

    return (
        <div className={styles.slider}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">Slide 1</div>
                    <div className="embla__slide">Slide 2</div>
                    <div className="embla__slide">Slide 3</div>
                </div>
            </div>

            <button className="embla__prev" onClick={goToPrev}>
                Scroll to prev
            </button>
            <button className="embla__next" onClick={goToNext}>
                Scroll to next
            </button>
        </div>
    )
}

export default Slider;