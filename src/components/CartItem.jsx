import style from './CartItem.module.css';
import { PiKeyReturnBold } from 'react-icons/pi';

const CartItem = () => {
  return (
    <>
      <h1 className={style.cartItemLabel}>Cart Item</h1>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1720048171098-dba33b2c4806"
            alt=""
          />
        </div>
        <div className={style.productDetailsContainer}>
          <div className={style.productInfo}>
            <p className={style.brandName}>Roadster</p>
            <p className={style.productName}>
              Men Black Solid Round Neck T-shirt
            </p>
            <p className={style.vendorInfo}>Sold by: KAPOOR AND SONS EXPORTS</p>
          </div>
          <div className={style.productSizeQty}>
            <p className={style.size}>Size : S</p>
            <p className={style.quantity}>Qty : 1</p>
          </div>
          <div className={style.productPrice}>
            <p className={style.discountedPrice}>Rs 339</p>
            <p className={style.originalPrice}>Rs 849</p>
            <p className={style.discountPercentage}>60% OFF</p>
          </div>
          <div className={style.productReturnWindow}>
            <PiKeyReturnBold />
            <p className={style.returnLabel}>14 days return available</p>
          </div>
        </div>
        <div className={style.closeMenu}>X</div>
      </div>
    </>
  );
};

export default CartItem;
