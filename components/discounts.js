const price = 1600;

const coupons = [
    {name: "SOLMAYOR", discount: 45}, 
    {name: "DOMAYOR", discount: 20}, 
    {name: "MIMAYOR", discount: 32}, 
]

document.getElementById("price").innerHTML = Number(price).toFixed(2);

const validateSpan = document.getElementById("validateCoupon");


function applyDiscount() {
    const inputCoupon = document.getElementById("coupon");
    const getCouponValue = inputCoupon.value;
    const couponValue = getCouponValue.toUpperCase().trim();

    const isCouponValid = function(coupon) {
        return coupon.name === couponValue;
    };
    
    const useCoupon = coupons.find(isCouponValid);

    if (!useCoupon || !couponValue) {
        document.getElementById("validateCoupon").innerHTML = "Invalid Coupon";
        validateSpan.className = 'validateCoupon-showed';
    } else {
        const discount = useCoupon.discount;
        const finalPrice = priceAfterDiscount(price, discount);
        document.getElementById("price").innerText = Number(finalPrice).toFixed(2);
        validateSpan.className = 'validateCoupon-success';
        document.getElementById("validateCoupon").innerHTML = `Discount of ${discount} % applied`;
    }
}

function priceAfterDiscount(price, discount) {
    return (price * (100 - discount))/100;
}