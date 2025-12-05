import PricingCard from "./PricingCard";

const PricingGrid = ({ data, contactData }) => (
  <div className="rounded-2xl  border border-white/10 p-4 sm:p-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item, index) => (
        <PricingCard
          key={index}
          item={item}
          contactData={contactData}
          highlight={index === 1} // middle card as "Most Popular"
        />
      ))}
    </div>
  </div>
);

export default PricingGrid