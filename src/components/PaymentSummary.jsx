import style from './PaymentSummary.module.css';

const PaymentSummary = () => {
  return (
    <div className={style.container}>
      <h1>Payment Summary</h1>
      <div className={style.couponsContainer}>
        <p>Apply Coupons</p>
        <div className={style.couponInputContainer}>
          <input type="text" placeholder="Enter coupon" />
          <button>Apply</button>
        </div>
      </div>
      <div className={style.paymentDetails}>
        <p className={style.paymentSectionLabel}>Payment Summary</p>
        <div className={style.originalPriceContainer}>
          <p className={style.originalPriceLabel}>Total MRP</p>
          <p className={style.originalPriceAmount}>Rs 5123</p>
        </div>
        <div className={style.discountAmountContainer}>
          <p className={style.discountAmountLabel}>Discount on MRP</p>
          <p className={style.discountAmount}>-Rs 2000</p>
        </div>
        <div className={style.couponDiscountContainer}>
          <p className={style.couponDiscountLabel}>Coupon Discount</p>
          <p className={style.couponDiscountAmount}>-Rs 100</p>
        </div>
        <div className={style.shippingAmountContainer}>
          <p className={style.shippingAmountLabel}>Shipping Fee</p>
          <p className={style.shippingAmountAmount}>
            Rs 80
            <span className={style.shippingAmountFreeLabel}>FREE</span>
          </p>
        </div>
      </div>
      <div className={style.totalAmountContainer}>
        <div className={style.totalAmount}>
          <p className={style.totalAmountLabel}>Total Amount</p>
          <p className={style.totalAmount}>Rs 5123</p>
        </div>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default PaymentSummary;
