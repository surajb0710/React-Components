import style from './App.module.css';
import ImageSlider from './components/ImageSlider';
import ProductFilter from './components/ProductFilter';
import ImageCarousal from './components/ImageCarousal';
import Slider from './components/Slider';
import products from '../data/data.json';
import ProductRating from './components/ProductRating';
import CustomerReview from './components/CustomerReview';
import CartItem from './components/CartItem';
import PaymentSummary from './components/PaymentSummary';

const App = () => {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1713646778050-2213b4140e6b',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1601027847517-8037885147f2',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/5706010/pexels-photo-5706010.jpeg',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1674027392851-7b34f21b07ee',
    },
  ];

  const product = products.products[0];

  return (
    <>
      <h1>React Begineer Friendly Components</h1>
      <div className={style.appContainer}>
        <ImageSlider images={images} />
        <ImageSlider
          images={images}
          arrows={false}
          navigationDots={false}
          delayTime={2000}
        />
        <ImageSlider images={images} navigationDots={false} />
        <ImageSlider images={images} arrows={false} />
        <div className={style.productFilterComponent}>
          <ProductFilter />
          <ImageCarousal images={images} />
          <CustomerReview />
          <CartItem />
        </div>
        <Slider min={1} max={20} />
        <ProductRating product={product} />
        <PaymentSummary />
      </div>
      <div className={style.webResponsiveTextContainer}>
        <h1>This site is best viewed on a computer.</h1>
      </div>
    </>
  );
};

export default App;
