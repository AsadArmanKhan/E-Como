// import React, { useState } from "react";
// import ForMobile from "../Pages/ForMobile";
// import Products from "../Pages/Products";

// export default function ShopPage() {
//   const [filters, setFilters] = useState({
//     brand: [],
//     color: [],
//     prices: [0, 1000], // default price range for error less code
//     topDeals: false,
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-6">
//       {/* Sidebar */}
//       <div className="md:w-1/4">
//         <ForMobile filters={filters} setFilters={setFilters} />
//       </div>

//       {/* Products */}
//       <div className="md:w-3/4">
//         <Products filters={filters} />
//       </div>
//     </div>
//   );
// }
