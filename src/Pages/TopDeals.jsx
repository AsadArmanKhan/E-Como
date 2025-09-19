import { topDealsData } from "../data/topDeals";
export default function TopDeals({ hotDeal, onSelect }) {
  return (
    <section className="bg-[#F6F7F8]">
      <h2 className="text-xl font-semibold mb-4 ml-4">Hot Deals</h2>
      {topDealsData.map((deal, i) => (
        <div
          key={i}
          onClick={() => onSelect(deal.reference)}
          className={`flex justify-between p-4 rounded cursor-pointer ${
            hotDeal === deal.name
              ? "text-[#33A0FF] font-medium bg-blue-50"
              : "hover:bg-gray-100"
          }`}
        >
          <span>{deal.name}</span>
          <span className={hotDeal === deal.name ? "" : "text-gray-400"}>
            {deal.count}
          </span>
        </div>
      ))}
    </section>
  );
}
