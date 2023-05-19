import { useState } from 'react';

const TrailImagesCarousel = ({ trail }) => {
    const { images } = trail;
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const previous = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const renderIndicators = () => {
        return images.map((image, index) => {
            return (
                <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={index}
                    className={activeIndex === index ? 'active' : ''}
                    aria-current={activeIndex === index ? 'true' : 'false'}
                    onClick={() => setActiveIndex(index)}
                />
            );
        });
    };

    const renderSlides = () => {
        return images.map((image, index) => {
            return (
                <div
                    key={index}
                    className={`carousel-item${activeIndex === index ? ' active' : ''}`}
                >
                    <div className='image-container'>
                        <img 
                            className='d-block mw-100 mh-100'
                            src={image.url}
                            alt={image.altText}
                            style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }}
                        />
                    </div>
                </div>
            );
        });
    };

    return (
        <div id="carouselIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {renderIndicators()}
            </div>
            <div class="carousel-inner">
                {renderSlides()}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev" onClick={previous}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next" onClick={next}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default TrailImagesCarousel;