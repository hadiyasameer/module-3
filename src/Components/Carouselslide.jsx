import Carousel from 'react-bootstrap/Carousel';

function Carouselslide() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className="carousel-image d-block w-100" src="https://images.samsung.com/is/image/samsung/assets/ph/offer/2025/new-year-promo/revised-kvs/offer/new-year-promo-omnibus_pc.jpg?imwidth=1366" alt='{text}' />
      </Carousel.Item>
      <Carousel.Item>
      <img className="carousel-image d-block w-100" src="https://media-uk-india-banners.landmarkshops.in/Home-Centre/HC-Mobile-2-Offer-060917.jpg" alt='{text}' />
      </Carousel.Item>
      <Carousel.Item>
      <img className="carousel-image d-block w-100" src="https://images.samsung.com/is/image/samsung/assets/ph/offer/2025/new-year-promo/placeholders/voucher-kv1.png?$720_N_PNG$" alt='{text}' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselslide;