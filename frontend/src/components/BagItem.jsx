import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
const BagItem = ({items}) => {
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
      dispatch(bagActions.removeFromBag(items.id));
    }
    return (
        <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src={items.image}/>
    </div>
    <div class="item-right-part">
      <div class="company">{items.company}</div>
      <div class="item-name">{items.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs {items.current_price}</span>
        <span class="original-price">Rs {items.original_price}</span>
        <span class="discount-percentage">({items.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">{items.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">{items.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onClick={handleRemoveItem}>
    <MdDelete />
    </div>
  </div>
    );
}

export default BagItem