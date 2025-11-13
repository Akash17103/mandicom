import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Single-file React component for a beautiful read-only restaurant menu UI.
// Tailwind CSS used for styling. Framer Motion for subtle animations.
// Customers can only view items; no cart or ordering controls.

export default function RestaurantMenu() {
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [query, setQuery] = useState("");

  const data = {
    name: "MANDI.COM",
    logo: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b3b3f0f0c9f3c6d9f3f4a9a1f2c",
    categories: ["All", "Starters", "Mains", "Biryani", "Seafood", "Desserts", "Drinks"],
    items: [
      {
        id: 1,
        name: "Afghani Chicken",
        category: "Starters",
        img: "https://images.unsplash.com/photo-1604908177522-2d7f6f8d2a6e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=23a4b7a1f2d8",
        short: "Chargrilled chicken full of spice and cream.",
        description:
          "Marinated chicken cooked in a rich, creamy Afghani sauce. Served with coriander and a squeeze of lime.",
        serves: [
          { label: "Half (250g)", price: 180 },
          { label: "Full (500g)", price: 320 },
        ],
      },
      {
        id: 2,
        name: "Paneer Tikka",
        category: "Starters",
        img: "https://images.unsplash.com/photo-1604908177527-3a8f6f8a2b7c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=aaa4b7a1f2d8",
        short: "Soft paneer cubes grilled with spices.",
        description:
          "Cubes of cottage cheese marinated in hung curd and spices, skewered and chargrilled till smoky. Served with mint chutney.",
        serves: [
          { label: "2 pcs", price: 120 },
          { label: "4 pcs", price: 220 },
        ],
      },
      {
        id: 3,
        name: "Hyderabadi Biryani",
        category: "Biryani",
        img: "https://images.unsplash.com/photo-1600718374199-9b1e2b4c3d4e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1111b7a1f2d8",
        short: "A fragrant layered biryani with saffron.",
        description:
          "Long-grain basmati layered with marinated meat, saffron, and traditional spices; slow-cooked to perfection.",
        serves: [
          { label: "Regular", price: 240 },
          { label: "Family", price: 480 },
        ],
      },
      {
        id: 4,
        name: "Gulab Jamun",
        category: "Desserts",
        img: "https://images.unsplash.com/photo-1612447571081-3f1b5b5f6d9b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2222b7a1f2d8",
        short: "Soft milk dumplings soaked in rose syrup.",
        description: "Classic syrupy dessert — deep-fried milk dumplings in rose-cardamom syrup.",
        serves: [{ label: "2 pcs", price: 90 }, { label: "4 pcs", price: 160 }],
      },
      {
        id: 5,
        name: "Prawn Curry",
        category: "Seafood",
        img: "https://images.unsplash.com/photo-1542444569-0ec2d3c3b4e7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3333b7a1f2d8",
        short: "Coconut-based coastal prawn curry.",
        description: "Fresh prawns simmered in coconut and tamarind gravy with coastal spices.",
        serves: [{ label: "250g", price: 330 }, { label: "500g", price: 600 }],
      },
      {
        id: 6,
        name: "Mango Lassi",
        category: "Drinks",
        img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4444b7a1f2d8",
        short: "Creamy mango yoghurt delight.",
        description: "Ripe mango pulp blended with chilled yogurt and a touch of cardamom.",
        serves: [{ label: "Small", price: 80 }, { label: "Large", price: 140 }],
      },
    ],
  };

  const filtered = data.items.filter((it) => {
    const matchCat = category === "All" || it.category === category;
    const matchQuery =
      query.trim() === "" ||
      it.name.toLowerCase().includes(query.toLowerCase()) ||
      it.short.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6">
          <img src={data.logo} alt="logo" className="w-20 h-20 rounded-2xl object-cover shadow-lg" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">{data.name}</h1>
            <p className="text-sm text-gray-500">Fresh | Local | Delicious</p>
          </div>
        </header>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg shadow-sm bg-white border text-sm"
          >
            {data.categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search items or descriptions..."
            className="px-4 py-2 rounded-lg shadow-sm bg-white border text-sm flex-1 min-w-[200px]"
          />

          <button
            onClick={() => {
              setCategory("All");
              setQuery("");
            }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow"
          >
            Reset
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer bg-white rounded-2xl p-4 flex gap-4 items-center shadow hover:shadow-lg"
            >
              <img src={item.img} alt={item.name} className="w-28 h-28 rounded-lg object-cover flex-shrink-0" />

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="text-sm text-gray-400">{item.category}</div>
                </div>

                <p className="text-sm text-gray-500 mt-1">{item.short}</p>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {item.serves.map((s, i) => (
                    <div key={i} className="text-sm px-3 py-1 border rounded-full text-gray-700">
                      {s.label} • ₹{s.price}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal / Expanded Item */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <motion.div
                layoutId={`card-${selectedItem.id}`}
                className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 md:col-span-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">{selectedItem.category}</p>
                      </div>

                      <button
                        onClick={() => setSelectedItem(null)}
                        className="rounded-full p-2 bg-gray-100 shadow"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="mt-4 text-gray-600">{selectedItem.description}</p>

                    <div className="mt-6">
                      <h4 className="text-sm text-gray-500 mb-2">Available serves & prices</h4>
                      <div className="flex gap-3 flex-wrap">
                        {selectedItem.serves.map((s, i) => (
                          <div key={i} className="p-3 border rounded-xl min-w-[140px]">
                            <div className="text-sm text-gray-500">{s.label}</div>
                            <div className="text-lg font-semibold">₹{s.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button onClick={() => navigator.share && navigator.share({ title: selectedItem.name, text: selectedItem.short })} className="px-4 py-2 rounded-lg border">Share</button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* backdrop */}
              <motion.div
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-8 text-center text-sm text-gray-400">MENU — For view only. Ask your waiter to place orders.</footer>
      </div>
    </div>
  );
}
