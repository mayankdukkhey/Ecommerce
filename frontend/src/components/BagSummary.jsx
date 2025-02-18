import { useSelector } from "react-redux";

const BagSummary = () => {
    const bagItemIds = useSelector((state) => state.bag);
    const items = useSelector((state) => state.items);

    // Filter items that are in the bag
    const finalItems = items.filter((item) => bagItemIds.includes(item.id));

    const CONVENIENCE_FEES = 99;
    let totalItem = finalItems.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    // Calculate total MRP and total discount
    finalItems.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += (bagItem.original_price - bagItem.current_price);
    });

    // Calculate the final payment amount
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    return (
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    );
}

export default BagSummary;
