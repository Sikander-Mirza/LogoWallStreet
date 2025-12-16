import Button from "../button/Button";

const PricingCard = ({ item, contactData, highlight }) => {
  const discount =
    item.oldPrice && item.price
      ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100 || 0)
      : 0;
const handleOrderNow = async () => {
  try {
    // create a short human-readable description from first few features
    const shortDescription = item.features.slice(0, 4).join(", ");

    const res = await fetch(
      "http://localhost:4000/payments/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageName: item.packageName,
          price: item.price,
          description: shortDescription,
        }),
      }
    );

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("No URL returned from Stripe session:", data);
    }
  } catch (err) {
    console.error("Checkout error:", err);
    alert("Unable to start payment. Please try again later.");
  }
};
  return (
    <div
      className={[
        "relative col-span-1 flex flex-col overflow-hidden rounded-2xl",
        "bg-white",
        "border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
        "transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)]",
        highlight ? "ring-2 ring-orange-400/60" : "",
      ].join(" ")}
    >
      {/* decorative background corner */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-100" />

     

      {/* Header */}
      <div className="relative px-5 pt-5 pb-4 border-b border-slate-200 flex items-center justify-between gap-3">
        <div>
          <h3
            style={{ fontFamily: "var(--font-Playfair)" }}
            className="text-[22px] sm:text-[24px] text-slate-900 font-semibold"
          >
            {item.packageName}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-orange-500 font-semibold">
            {item.tagline || "Perfect for growing brands"}
          </p>
        </div>

        <div className="text-right">
          <h4
            style={{ fontFamily: "var(--font-Poppins)" }}
            className="text-[30px] text-slate-900 font-semibold leading-none"
          >
            {item.currency}
            {item.price}
          </h4>
          {item.oldPrice && (
            <s
              style={{ fontFamily: "var(--font-Poppins)" }}
              className="text-[13px] text-slate-400 font-medium"
            >
              {item.currency}
              {item.oldPrice}
            </s>
          )}
          {discount > 0 && (
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-[3px] text-[11px] font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Save {discount}%
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <ul
        style={{ fontFamily: "var(--font-Poppins)" }}
        className="mt-3 px-4 space-y-1.5 h-[230px] overflow-y-auto pr-2
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100
          [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-400
        "
      >
        {item.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-[0.95rem] flex items-start gap-2 border-b border-slate-100 text-slate-700 py-2 last:border-b-0"
          >
            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <i className="ri-check-line text-[13px]" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Footer CTA + contact */}
      <div className="mt-4 px-4 pb-5 pt-2 flex items-end justify-between gap-3">
      <Button
  onClick={handleOrderNow}
  className={[
    "mt-4 rounded-full px-6 py-2 text-sm font-semibold",
    
       "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60"
           
  ].join(" ")}
  text="Order Now"
/>

        {contactData?.[0] && (
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <i className="ri-customer-service-fill text-[18px]" />
            </span>
            <a
              style={{ fontFamily: "var(--font-Playfair)" }}
              className="text-slate-900 text-[15px] whitespace-nowrap"
              href={`tel:${contactData[0].phoneNumber}`}
            >
              {contactData[0].phoneNumber}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;