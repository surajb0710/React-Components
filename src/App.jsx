import style from './App.module.css';
import ImageSlider from './components/ImageSlider';

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

  return (
    <>
      <div className={style.appContainer}>
        <ImageSlider
          images={images}
          arrows={false}
          bubbles={false}
          delayTime={2000}
        />
        <ImageSlider images={images} bubbles={false} />
        <ImageSlider images={images} arrows={false} />
        {/* <ImageSlider images={images} />
        <ImageSlider images={images} />
        <ImageSlider images={images} />
        <ImageSlider images={images} />
        <ImageSlider images={images} />
        <ImageSlider images={images} /> */}
      </div>
    </>
  );
};

export default App;
