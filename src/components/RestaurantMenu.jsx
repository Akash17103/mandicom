import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  RestaurantMenu.jsx
  - Full menu embedded from the provided menu images.
  - Images are placeholder paths under /assets/. Replace with your files.
  - Many menu items included. Prices set to 0 where unclear — edit as needed.
*/

export default function RestaurantMenu() {
  // ---- FULL MENU DATA (embedded) ----
  const data = {
    name: "MANDI.COM",
    logo: "/assets/logo.png",
    categories: [
      "All",
      "Chicken Mandi's",
      "Veg. Mandi",
      "Mandi.com Special Mandi's",
      "Mutton Mandi's",
      "Fish & Prawns Mandi",
      "Quick Add Ons",
      "Chicken Starters",
      "Fish Starters",
      "Prawns Starters",
      "Chicken Kebab",
      "Veg. Kebab",
      "Mandi.com special items",
      "Cool Drinks",
      "Sweets",
      "Packages"
    ],
    items: [
      // === Chicken Mandi's ===
      { id: 1001, name: "Mandi Faham Chicken", category: "Chicken Mandi's", img: "/assets/chicken-faham.jpg", short: "", description: "", serves: [
        {label:"Small", price:0}, {label:"Medium", price:0}, {label:"Large", price:0}, {label:"Extra Large", price:0}
      ] },
      { id: 1002, name: "Mandi Fried Chicken", category: "Chicken Mandi's", img: "/assets/mandi-fried-chicken.jpg", short: "", description: "", serves:[
        {label:"Small", price:0},{label:"Medium", price:0},{label:"Large", price:0},{label:"Extra Large", price:0}
      ]},
      { id: 1003, name: "Peshwari Chicken Mandi", category: "Chicken Mandi's", img: "/assets/peshwari-chicken.jpg", short: "", description: "", serves:[
        {label:"Small", price:0},{label:"Medium", price:0},{label:"Large", price:0},{label:"Extra Large", price:0}
      ]},
      { id: 1004, name: "Mandi Regal Tandoori Chicken", category: "Chicken Mandi's", img: "/assets/regal-tandoori-chicken.jpg", short: "", description: "", serves:[
        {label:"Small", price:0},{label:"Medium", price:0},{label:"Large", price:0},{label:"Extra Large", price:0}
      ]},
      { id: 1005, name: "Mandi KFC Chicken", category: "Chicken Mandi's", img: "/assets/mandi-kfc-chicken.jpg", short: "", description: "", serves:[
        {label:"Small", price:0},{label:"Medium", price:0},{label:"Large", price:0},{label:"Extra Large", price:0}
      ]},
      { id: 1006, name: "Mixed Platter Mandi", category: "Chicken Mandi's", img: "/assets/mixed-platter.jpg", short: "", description: "", serves:[
        {label:"Small", price:0},{label:"Medium", price:0},{label:"Large", price:0}
      ]},

      // === Veg. Mandi ===
      { id: 2001, name: "Paneer Tikka Mandi", category: "Veg. Mandi", img: "/assets/paneer-tikka-mandi.jpg", short: "", description: "", serves:[
        {label:"Small", price:299},{label:"Medium", price:479},{label:"Large", price:669},{label:"Extra Large", price:919}
      ]},
      { id: 2002, name: "Soyachaap Peshwari Mandi", category: "Veg. Mandi", img: "/assets/soya-chaap-peshwari.jpg", short: "", description: "", serves:[
        {label:"Small", price:299},{label:"Medium", price:479},{label:"Large", price:669},{label:"Extra Large", price:919}
      ]},
      { id: 2003, name: "Peshwari Mushroom Mandi", category: "Veg. Mandi", img: "/assets/peshwari-mushroom.jpg", short: "", description: "", serves:[
        {label:"Small", price:299},{label:"Medium", price:479},{label:"Large", price:669},{label:"Extra Large", price:919}
      ]},

      // === Mandi.com Special Mandi's ===
      { id: 3001, name: "Banjara Chicken Mandi (Mild Spicy)", category: "Mandi.com Special Mandi's", img: "/assets/banjara-chicken.jpg", short: "", description: "", serves:[
        {label:"Regular", price:669},{label:"Large", price:869},{label:"Family", price:1169}
      ]},
      { id: 3002, name: "Afghani Chicken Mandi (Malai Creamy)", category: "Mandi.com Special Mandi's", img: "/assets/afghani-chicken.jpg", short: "", description: "", serves:[
        {label:"Regular", price:669},{label:"Large", price:869},{label:"Family", price:1169}
      ]},
      { id: 3003, name: "Salami Chicken Mandi (Yellow/Red Gravy)", category: "Mandi.com Special Mandi's", img: "/assets/salami-chicken.jpg", short: "", description: "", serves:[
        {label:"Regular", price:669},{label:"Large", price:869},{label:"Family", price:1169}
      ]},
      { id: 3004, name: "Chicken Full Bird Mandi (Full Bird Roast)", category: "Mandi.com Special Mandi's", img: "/assets/chicken-full-bird.jpg", short: "", description: "", serves:[
        {label:"Single", price:719},{label:"Large", price:919}
      ]},
      { id: 3005, name: "Arabian Fish Mandi (Crispy texture)", category: "Mandi.com Special Mandi's", img: "/assets/arabian-fish-mandi.jpg", short: "", description: "", serves:[
        {label:"Regular", price:719},{label:"Large", price:919}
      ]},
      { id: 3006, name: "Sea Pomfret Fish Mandi (Flavourful)", category: "Mandi.com Special Mandi's", img: "/assets/sea-pomfret.jpg", short: "", description: "", serves:[
        {label:"Regular", price:719},{label:"Large", price:919}
      ]},
      { id: 3007, name: "Majilis Mutton Mandi (Mutton & Rice Semi Cooked in Pot)", category: "Mandi.com Special Mandi's", img: "/assets/majilis-mutton.jpg", short: "", description: "", serves:[
        {label:"Regular", price:0}
      ]},
      { id: 3008, name: "Mudfoon Mutton Mandi (Wrapped in Silver Foil Creamy Texture)", category: "Mandi.com Special Mandi's", img: "/assets/mudfoon-mutton.jpg", short: "", description: "", serves:[
        {label:"Regular", price:0}
      ]},
      { id: 3009, name: "Raan Tandoori Mutton Mandi (Lamb Leg)", category: "Mandi.com Special Mandi's", img: "/assets/raan-tandoori.jpg", short: "", description: "", serves:[
        {label:"Regular", price:1199},{label:"Large", price:1349}
      ]},
      { id: 3010, name: "Zafrani Mutton Mandi", category: "Mandi.com Special Mandi's", img: "/assets/zafrani-mutton.jpg", short: "", description: "", serves:[
        {label:"Regular", price:0}
      ]},
      { id: 3011, name: "Ghee Roast Mandi", category: "Mandi.com Special Mandi's", img: "/assets/ghee-roast.jpg", short: "", description: "", serves:[
        {label:"Regular", price:749},{label:"Large", price:1049}
      ]},
      { id: 3012, name: "Egg Cheese Mandi (Eggs Filled with Cheese and Baked)", category: "Mandi.com Special Mandi's", img: "/assets/egg-cheese-mandi.jpg", short: "", description: "", serves:[
        {label:"Regular", price:449},{label:"Large", price:679}
      ]},

      // === Mutton Mandi's (separate listing present in menu) ===
      { id: 4001, name: "Mutton Mandi", category: "Mutton Mandi's", img: "/assets/mutton-mandi.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:719},{label:"Large", price:919},{label:"Extra Large", price:1219}
      ]},
      { id: 4002, name: "Mutton Mandi Tandoori", category: "Mutton Mandi's", img: "/assets/mutton-mandi-tandoori.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:719},{label:"Large", price:919},{label:"Extra Large", price:1219}
      ]},
      { id: 4003, name: "Mutton Mandi Juicy", category: "Mutton Mandi's", img: "/assets/mutton-juicy.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:719},{label:"Large", price:919},{label:"Extra Large", price:1219}
      ]},
      { id: 4004, name: "Mutton Fried Mandi", category: "Mutton Mandi's", img: "/assets/mutton-fried.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:719},{label:"Large", price:919},{label:"Extra Large", price:1219}
      ]},
      { id: 4005, name: "Mutton Laham Mandi (Boiled Piece)", category: "Mutton Mandi's", img: "/assets/mutton-laham.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:719},{label:"Large", price:919},{label:"Extra Large", price:1219}
      ]},

      // === Fish & Prawns Mandi ===
      { id: 5001, name: "Mandi Fried Fish (Basa)", category: "Fish & Prawns Mandi", img: "/assets/mandi-fried-fish-basa.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:699},{label:"Large", price:899},{label:"Extra Large", price:1149}
      ]},
      { id: 5002, name: "Mandi Grill Fish (Basa)", category: "Fish & Prawns Mandi", img: "/assets/mandi-grill-fish.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:699},{label:"Large", price:899},{label:"Extra Large", price:1149}
      ]},
      { id: 5003, name: "Mandi Telipiya Fish (Small Pieces)", category: "Fish & Prawns Mandi", img: "/assets/telipiya-fish.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:699},{label:"Large", price:899},{label:"Extra Large", price:1149}
      ]},
      { id: 5004, name: "Mandi Red Chilli Prawns (Fried)", category: "Fish & Prawns Mandi", img: "/assets/red-chilli-prawns.jpg", short: "", description: "", serves:[
        {label:"Small", price:369},{label:"Medium", price:699},{label:"Large", price:899},{label:"Extra Large", price:1149}
      ]},

      // === Quick Add Ons ===
      { id: 6001, name: "Mutton Piece", category: "Quick Add Ons", img: "/assets/mutton-piece.jpg", short: "", description: "", serves:[{label:"Each", price:219}]},
      { id: 6002, name: "Chicken Piece", category: "Quick Add Ons", img: "/assets/chicken-piece.jpg", short: "", description: "", serves:[{label:"Each", price:189}]},
      { id: 6003, name: "Fish Fry Piece", category: "Quick Add Ons", img: "/assets/fish-fry-piece.jpg", short: "", description: "", serves:[{label:"Each", price:209}]},
      { id: 6004, name: "Extra Prawns (12 Pieces)", category: "Quick Add Ons", img: "/assets/prawns-12.jpg", short: "", description: "", serves:[{label:"Each", price:209}]},
      { id: 6005, name: "Extra Rice", category: "Quick Add Ons", img: "/assets/extra-rice.jpg", short: "", description: "", serves:[{label:"Plate", price:179}]},
      { id: 6006, name: "Extra Dry Fruits", category: "Quick Add Ons", img: "/assets/extra-dry-fruits.jpg", short: "", description: "", serves:[{label:"Portion", price:30}]},
      { id: 6007, name: "Extra Fried Onion", category: "Quick Add Ons", img: "/assets/extra-fried-onion.jpg", short: "", description: "", serves:[{label:"Portion", price:20}]},
      { id: 6008, name: "Extra Mayonnaise", category: "Quick Add Ons", img: "/assets/extra-mayo.jpg", short: "", description: "", serves:[{label:"Portion", price:30}]},

      // === Chicken Starters ===
      { id: 7001, name: "Arabian Fried Chicken", category: "Chicken Starters", img: "/assets/arabian-fried-chicken.jpg", short: "", description: "", serves:[{label:"Half", price:269},{label:"Full", price:419}]},
      { id: 7002, name: "Red Hot Chicken", category: "Chicken Starters", img: "/assets/red-hot-chicken.jpg", short: "", description: "", serves:[{label:"Half", price:269},{label:"Full", price:419}]},
      { id: 7003, name: "Chicken Lollipop", category: "Chicken Starters", img: "/assets/chicken-lollipop.jpg", short: "", description: "", serves:[{label:"Half", price:269},{label:"Full", price:419}]},
      { id: 7004, name: "Gingely Chicken", category: "Chicken Starters", img: "/assets/gingely-chicken.jpg", short: "", description: "", serves:[{label:"Half", price:269},{label:"Full", price:419}]},
      { id: 7005, name: "Pepper Chicken", category: "Chicken Starters", img: "/assets/pepper-chicken.jpg", short: "", description: "", serves:[{label:"Half", price:269},{label:"Full", price:419}]},

      // === Fish Starters ===
      { id: 8001, name: "Golden Fried Fish", category: "Fish Starters", img: "/assets/golden-fried-fish.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 8002, name: "Apollo Fish Fried", category: "Fish Starters", img: "/assets/apollo-fish.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 8003, name: "Desi Fried Fish", category: "Fish Starters", img: "/assets/desi-fried-fish.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 8004, name: "Ajwain Fish Tikka", category: "Fish Starters", img: "/assets/ajwain-fish-tikka.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 8005, name: "Fish Amritsari", category: "Fish Starters", img: "/assets/fish-amritsari.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 8006, name: "Banjara Fish Tikka", category: "Fish Starters", img: "/assets/banjara-fish-tikka.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},

      // === Prawns Starters ===
      { id: 9001, name: "Arabian Prawns", category: "Prawns Starters", img: "/assets/arabian-prawns.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 9002, name: "Fried Desi Prawns", category: "Prawns Starters", img: "/assets/fried-desi-prawns.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 9003, name: "Malai Prawns Tandoori", category: "Prawns Starters", img: "/assets/malai-prawns.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},
      { id: 9004, name: "Tandoori Prawns", category: "Prawns Starters", img: "/assets/tandoori-prawns.jpg", short: "", description: "", serves:[{label:"Half", price:289},{label:"Full", price:439}]},

      // === Chicken Kebab ===
      { id: 10001, name: "Chicken Malai Kebabs", category: "Chicken Kebab", img: "/assets/chicken-malai-kebab.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 10002, name: "Zaffrani Chicken Tikka", category: "Chicken Kebab", img: "/assets/zaffrani-chicken-tikka.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 10003, name: "Regal Tandoori Chicken Kebab (with bone)", category: "Chicken Kebab", img: "/assets/regal-kebab.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 10004, name: "Chicken Banjara Kebab", category: "Chicken Kebab", img: "/assets/chicken-banjara-kebab.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 10005, name: "Methi Chicken Kebab", category: "Chicken Kebab", img: "/assets/methi-chicken-kebab.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 10006, name: "Chicken Angara Kebab", category: "Chicken Kebab", img: "/assets/chicken-angara-kebab.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},

      // === Veg. Kebab ===
      { id: 11001, name: "Soyachaap Tandoori", category: "Veg. Kebab", img: "/assets/soya-chaap.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 11002, name: "Paneer Tikka", category: "Veg. Kebab", img: "/assets/paneer-tikka.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},
      { id: 11003, name: "Mushroom Pepper Fry", category: "Veg. Kebab", img: "/assets/mushroom-pepper-fry.jpg", short: "", description: "", serves:[{label:"Plate", price:299}]},

      // === Mandi.com special items ===
      { id: 12001, name: "Mutton Shikampuri", category: "Mandi.com special items", img: "/assets/mutton-shikampuri.jpg", short: "", description: "", serves:[{label:"Each", price:479}]},
      { id: 12002, name: "Haleem Mutton (2 People)", category: "Mandi.com special items", img: "/assets/haleem-mutton.jpg", short: "", description: "", serves:[{label:"Portion", price:499}]},
      { id: 12003, name: "Nalli Gosh Haleem", category: "Mandi.com special items", img: "/assets/nalli-gosh-haleem.jpg", short: "", description: "", serves:[{label:"Portion", price:699}]},
      { id: 12004, name: "Sea Pomfret Fish Fry (1 Piece)", category: "Mandi.com special items", img: "/assets/sea-pomfret-fry-1.jpg", short: "", description: "", serves:[{label:"1 Piece", price:299}]},
      { id: 12005, name: "Sea Pomfret Fish Fry (2 Piece)", category: "Mandi.com special items", img: "/assets/sea-pomfret-fry-2.jpg", short: "", description: "", serves:[{label:"2 Piece", price:449}]},
      { id: 12006, name: "Korenemu Full Fish Fry or Tandoori", category: "Mandi.com special items", img: "/assets/korenemu-fish.jpg", short: "", description: "", serves:[{label:"Each", price:599}]},
      { id: 12007, name: "Mutton Marag", category: "Mandi.com special items", img: "/assets/mutton-marag.jpg", short: "", description: "", serves:[{label:"Each", price:399}]},
      { id: 12008, name: "Tawa Mutton", category: "Mandi.com special items", img: "/assets/tawa-mutton.jpg", short: "", description: "", serves:[{label:"Each", price:479}]},

      // === Cool drinks ===
      { id: 13001, name: "Thumsup", category: "Cool Drinks", img: "/assets/drink-thumsup.jpg", short: "", description: "", serves:[{label:"Bottle", price:35}]},
      { id: 13002, name: "Sprite", category: "Cool Drinks", img: "/assets/drink-sprite.jpg", short: "", description: "", serves:[{label:"Bottle", price:35}]},
      { id: 13003, name: "Water Bottle", category: "Cool Drinks", img: "/assets/drink-water.jpg", short: "", description: "", serves:[{label:"Bottle", price:30}]},
      { id: 13004, name: "Flavour Soda", category: "Cool Drinks", img: "/assets/flavour-soda.jpg", short: "", description: "", serves:[{label:"Bottle", price:69}]},

      // === Sweets ===
      { id: 14001, name: "Kadu ka Keer", category: "Sweets", img: "/assets/kadu-ka-keer.jpg", short: "", description: "", serves:[{label:"Each", price:99}]},
      { id: 14002, name: "Kunafa Small", category: "Sweets", img: "/assets/kunafa-small.jpg", short: "", description: "", serves:[{label:"Each", price:299}]},
      { id: 14003, name: "Kunafa Large", category: "Sweets", img: "/assets/kunafa-large.jpg", short: "", description: "", serves:[{label:"Each", price:699}]},
      { id: 14004, name: "Double ka Meeta", category: "Sweets", img: "/assets/double-ka-meeta.jpg", short: "", description: "", serves:[{label:"Each", price:99}]},

      // === Packages (from images) ===
      { id: 15001, name: "Queen Plate Mandi (8 People Package)", category: "Packages", img: "/assets/queen-plate.jpg", short: "8 People package", description: "1 Mutton Starter, 1 Chicken Starter, 1 Veg Starter, 2 Times Rice Filling, 4 Piece of Mutton, 4 Piece of Chicken", serves:[{label:"Package", price:3499}]},
      { id: 15002, name: "King Plate Mandi (16 People Package)", category: "Packages", img: "/assets/king-plate.jpg", short: "16 People package", description: "2 Mutton Starters, 2 Veg Starters, 2 Chicken Starters, 2 Time Rice Filling with Extra Complimentary Rice, 8 Piece of Chicken, 8 Piece of Mutton", serves:[{label:"Package", price:6499}]},
      { id: 15003, name: "Special Full Goat Mandi (2 Times Rice Filling)", category: "Packages", img: "/assets/full-goat-mandi.jpg", short: "", description: "", serves:[{label:"Package", price:9999}]},
      { id: 15004, name: "Special King Plate Mandi (Full Bird/Tandoori combo)", category: "Packages", img: "/assets/special-king.jpg", short: "", description: "", serves:[{label:"Package", price:2999}]}
    ]
  };

  // ---- component UI state ----
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [query, setQuery] = useState("");

  // ---- filter items ----
  const filtered = data.items.filter((it) => {
    const matchCat = category === "All" || it.category === category;
    const q = query.trim().toLowerCase();
    const matchQuery = q === "" || (it.name && it.name.toLowerCase().includes(q)) || (it.short && it.short.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 flex flex-col items-center" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'}}>
      <div className="w-full max-w-6xl">
        {/* Header */}
        <header style={{display:'flex', alignItems:'center', gap:16, marginBottom:18}}>
          <img src={data.logo} alt="logo" style={{width:88, height:88, objectFit:'cover', borderRadius:16, boxShadow:'0 6px 18px rgba(0,0,0,0.12)'}}/>
          <div>
            <h1 style={{margin:0, fontSize:28, fontWeight:800}}>{data.name}</h1>
            <div style={{color:'#6b7280'}}>Arabian Food — View Only Menu</div>
          </div>
        </header>

        {/* Controls */}
        <div style={{display:'flex', gap:12, flexWrap:'wrap', marginBottom:18}}>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} style={{padding:'10px 14px', borderRadius:10, border:'1px solid #e5e7eb', background:'#fff'}}>
            {data.categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search items or descriptions..." style={{padding:'10px 14px', borderRadius:10, border:'1px solid #e5e7eb', minWidth:280}} />

          <button onClick={() => { setCategory("All"); setQuery(""); }} style={{padding:'10px 14px', borderRadius:10, background:'linear-gradient(90deg,#4f46e5,#06b6d4)', color:'#fff', border:'none'}}>Reset</button>
        </div>

        {/* Menu Grid */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:16}}>
          {filtered.map(item => (
            <motion.div key={item.id} layout whileHover={{scale:1.02}} onClick={() => setSelectedItem(item)} style={{cursor:'pointer', background:'#fff', borderRadius:16, padding:16, display:'flex', gap:12, alignItems:'center', boxShadow:'0 8px 20px rgba(0,0,0,0.06)'}}>
              <img src={item.img} alt={item.name} style={{width:110, height:110, objectFit:'cover', borderRadius:12, flexShrink:0}} />
              <div style={{flex:1}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                  <h3 style={{margin:0, fontSize:18, fontWeight:700}}>{item.name}</h3>
                  <div style={{color:'#9ca3af', fontSize:13}}>{item.category}</div>
                </div>
                <p style={{margin:'6px 0 10px', color:'#6b7280'}}>{item.short}</p>
                <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                  {item.serves && item.serves.map((s, idx) => (
                    <div key={idx} style={{padding:'6px 10px', borderRadius:999, border:'1px solid #e5e7eb', fontSize:13, color:'#374151', background:'#fbfdff'}}>
                      {s.label} • {s.price ? `₹${s.price}` : '—'}
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
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'fixed', inset:0, zIndex:60, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
            <motion.div layoutId={`card-${selectedItem.id}`} style={{background:'#fff', width:'min(980px,100%)', borderRadius:18, overflow:'hidden', boxShadow:'0 20px 60px rgba(0,0,0,0.35)'}} initial={{scale:0.95}} animate={{scale:1}} exit={{scale:0.98}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 2fr'}}>
                <div style={{minHeight:260}}>
                  <img src={selectedItem.img} alt={selectedItem.name} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <div style={{padding:20}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
                    <div>
                      <h2 style={{margin:0, fontSize:22}}>{selectedItem.name}</h2>
                      <div style={{color:'#6b7280', marginTop:6}}>{selectedItem.category}</div>
                    </div>
                    <button onClick={()=>setSelectedItem(null)} style={{border:'none', background:'#f3f4f6', padding:8, borderRadius:8}}>✕</button>
                  </div>

                  <p style={{marginTop:12, color:'#374151'}}>{selectedItem.description || selectedItem.short}</p>

                  <div style={{marginTop:18}}>
                    <h4 style={{margin:0, color:'#6b7280'}}>Available serves & prices</h4>
                    <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:10}}>
                      {selectedItem.serves.map((s, i) => (
                        <div key={i} style={{border:'1px solid #e5e7eb', padding:12, borderRadius:12, minWidth:140}}>
                          <div style={{color:'#6b7280', fontSize:13}}>{s.label}</div>
                          <div style={{fontWeight:700, marginTop:6}}>{s.price ? `₹${s.price}` : 'Price on request'}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{marginTop:18, display:'flex', gap:10}}>
                    <button style={{padding:'10px 14px', borderRadius:10, border:'1px solid #e5e7eb'}}>Share</button>
                    <button onClick={()=>setSelectedItem(null)} style={{padding:'10px 14px', borderRadius:10, border:'1px solid #e5e7eb'}}>Close</button>
                  </div>

                </div>
              </div>
            </motion.div>

            <motion.div onClick={()=>setSelectedItem(null)} initial={{opacity:0}} animate={{opacity:0.45}} exit={{opacity:0}} style={{position:'fixed', inset:0, background:'#000'}} />
          </motion.div>
        )}
        </AnimatePresence>

        <footer style={{marginTop:22, textAlign:'center', color:'#9ca3af'}}>MENU — For view only. Ask your waiter to place orders.</footer>
      </div>
    </div>
  );
}
