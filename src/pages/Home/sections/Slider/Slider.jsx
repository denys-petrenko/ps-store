import styles from "./Slider.module.scss";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Loader from "../../../../components/ui/Loader";

const Slider = ({ variant, autoplay, onSlideClick, data }) => {
    const play = autoplay
        ? [Autoplay({ delay: 3000 })]
        : []

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, play);


    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    if (!data?.length) {
        return <Loader />;
    }

    return (
        <div className={styles[`slider-${variant}`]}>
            <div className={styles["slider-viewport"]} ref={emblaRef}>
                <div className={styles["slider-container"]}>
                    {data.map((image, i) => (
                        <div key={i} className={styles["slider-slide"]}>
                            <img src={image} alt="slide" />
                        </div>
                    ))}
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