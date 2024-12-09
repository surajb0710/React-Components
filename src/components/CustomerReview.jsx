import style from './CustomerReview.module.css';
import { IoStarSharp } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';

const CustomerReview = () => {
  return (
    <>
      <h1>Customer Review</h1>
      <div className={style.container}>
        <div className={style.ratingStars}>
          <p className={style.ratingValue}>5</p>
          <IoStarSharp />
        </div>
        <p className={style.customerComments}>
          Material: The fabric is a soft cotton blend, lightweight, and
          breathable. It feels comfortable on the skin and is suitable for
          casual daily wear. Durability: After multiple washes, the cloth holds
          its color well and doesn’t show signs of wear. However, the stitching
          could be more robust, as some seams feel loose. Appearance: The design
          is simple yet elegant, making it versatile for different outfits. It
          drapes well and resists wrinkling, a plus for low-maintenance care.
          Overall: A solid choice for its price range. Perfect for those seeking
          affordable comfort, though it might not stand up to heavy-duty use.
        </p>
        <div className={style.customerInfo}>
          <p className={style.customerName}>Aakansha Chheda</p>
          <p>|</p>
          <p className={style.commentDate}>15 Nov 2023</p>
        </div>
        <div className={style.likeSection}>
          <AiOutlineLike />
          <p className={style.likeCount}>10</p>
        </div>
        <div className={style.dislikeSection}>
          <AiOutlineDislike />
          <p className={style.dislikeCount}>10</p>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
