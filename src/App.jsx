
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ShoppingBag, Mountain, Utensils, Users, Menu, X, ChevronRight, Star, ArrowLeft } from 'lucide-react';

const KukshiWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);

  const funFacts = [
    { en: "Kukshi's red chili market is one of Madhya Pradesh's largest!", hi: "कुक्षी का लाल मिर्च बाजार मध्य प्रदेश के सबसे बड़े बाजारों में से एक है!" },
    { en: "Home to vibrant Bhil and Bhilala tribal communities", hi: "जीवंत भील और भिलाला आदिवासी समुदायों का घर" },
    { en: "Cotton trading hub connecting farmers to global markets", hi: "किसानों को वैश्विक बाजारों से जोड़ने वाला कपास व्यापार केंद्र" },
    { en: "Ancient Bagh Caves nearby showcase 5th-century Buddhist art", hi: "पास के प्राचीन बाग गुफाएं 5वीं शताब्दी की बौद्ध कला प्रदर्शित करती हैं" },
    { en: "Yeshwant Lake: A serene escape for families and photographers", hi: "येशवंत झील: परिवारों और फोटोग्राफरों के लिए एक शांत स्थान" }
  ];

  const landmarkData = [
    {
      name: "Torna Devi Temple",
      description: "Sacred hilltop shrine offering panoramic views of the countryside. Popular pilgrimage site with stunning sunrise vistas and peaceful atmosphere for devotees seeking spiritual solace.",
      bestTime: "Early morning (5-8 AM) for sunrise views",
      features: ["Panoramic hilltop views", "Spiritual significance", "Sunrise photography point", "Peaceful meditation space"],
      type: "Temple"
    },
    {
      name: "Yeshwant Lake",
      description: "Serene picnic destination perfect for boating, photography, and family outings. The lake offers calm waters surrounded by natural beauty, making it ideal for relaxation and weekend getaways.",
      bestTime: "Evening (4-7 PM) for sunset",
      features: ["Boating facilities", "Photography spots", "Picnic areas", "Sunset views", "Family-friendly"],
      type: "Nature"
    },
    {
      name: "Shree Bada Ganesh Temple",
      description: "Ancient temple dedicated to Lord Ganesha, featuring beautiful traditional architecture and peaceful surroundings. A must-visit for devotees seeking blessings and spiritual peace.",
      bestTime: "Morning prayers (6-10 AM)",
      features: ["Ancient architecture", "Religious ceremonies", "Peaceful environment", "Cultural significance"],
      type: "Temple"
    },
    {
      name: "Badkeshwar Mahadev Mandir",
      description: "Historic Shiva temple known for its architectural beauty and religious importance. Attracts devotees from across the region, especially during Mahashivratri celebrations.",
      bestTime: "Evening aarti (6-8 PM)",
      features: ["Lord Shiva deity", "Traditional rituals", "Festival celebrations", "Architectural beauty"],
      type: "Temple"
    },
    {
      name: "Bagh Buddhist Caves",
      description: "UNESCO-linked 5th-century rock-cut Buddhist caves located 35km from Kukshi. Features ancient murals and architectural marvels showcasing Buddhist art, culture, and meditation chambers from the Gupta period.",
      bestTime: "October to March (pleasant weather)",
      features: ["Ancient rock art", "Buddhist heritage", "5th-century murals", "Historical significance", "Archaeological site"],
      type: "Historical"
    },
    {
      name: "Khatu Shyam Mandir",
      description: "Beautiful temple attracting devotees from across the region, known for its spiritual ambiance and regular prayer ceremonies. The temple hosts vibrant celebrations during major Hindu festivals.",
      bestTime: "Morning and evening aarti",
      features: ["Spiritual atmosphere", "Regular ceremonies", "Festival celebrations", "Community gatherings"],
      type: "Temple"
    }
  ];

  const shoppingData = [
    {
      name: "Cotton Mandi (Cotton Market)",
      description: "The heart of Kukshi's economy, this bustling cotton market connects local farmers with traders from across India. Witness the vibrant trade atmosphere where raw cotton is bought, sold, and processed.",
      whatToBuy: ["Raw cotton bales", "Cotton fabrics", "Textile materials", "Cotton seeds"],
      priceRange: "Wholesale pricing - varies by quality and season",
      bestTime: "Early morning hours (7-11 AM) when trading is most active"
    },
    {
      name: "Red Chili Market (Mirchi Mandi)",
      description: "One of Madhya Pradesh's largest and most famous chili markets. The vibrant red landscape during harvest season is a photographer's delight. Experience the spicy aroma and bustling trade of premium quality chilies.",
      whatToBuy: ["Fresh red chilies", "Dried chili varieties", "Chili powder", "Spice blends", "Local masalas"],
      priceRange: "₹200-500 per kg (varies by variety and quality)",
      bestTime: "Early morning during harvest season (October-February)"
    },
    {
      name: "Jewelry Bazaar",
      description: "Traditional gold and silver jewelry crafted by local tribal artisans, especially from the Bhil and Bhilala communities. Each piece reflects unique tribal designs and centuries-old craftsmanship techniques.",
      whatToBuy: ["Gold ornaments", "Silver tribal jewelry", "Traditional necklaces", "Earrings and bangles", "Handcrafted accessories"],
      priceRange: "₹2,000-₹50,000+ (depending on metal and design)",
      bestTime: "All day (10 AM - 8 PM), closed on major festivals"
    },
    {
      name: "Ready-Made Garments Market",
      description: "Extensive market offering affordable clothing options ranging from traditional Indian wear to modern fashion. Local traders offer competitive prices on bulk purchases and wholesale deals.",
      whatToBuy: ["Traditional Indian wear", "Modern clothing", "Children's garments", "Fabrics", "Accessories"],
      priceRange: "₹200-₹2,000 per piece",
      bestTime: "Afternoon to evening (2-8 PM)"
    },
    {
      name: "Local Handicrafts & Tribal Art",
      description: "Small shops and street vendors selling authentic tribal handicrafts, including traditional paintings, handwoven items, and decorative pieces made by local Bhil artisans.",
      whatToBuy: ["Tribal paintings", "Handwoven baskets", "Traditional crafts", "Decorative items", "Pottery"],
      priceRange: "₹100-₹5,000",
      bestTime: "All day, best during tribal fairs and festivals"
    }
  ];

  const cuisineData = [
    {
      name: "Malwa Thali",
      description: "A complete traditional meal featuring multiple dishes from the Malwa region, served on a single platter. This wholesome feast includes dal bafla (wheat dumplings with lentils), kadhi, seasonal vegetables, churma, and fresh rotis.",
      keyIngredients: ["Dal bafla", "Kadhi", "Seasonal vegetables", "Churma (sweet)", "Wheat rotis", "Ghee"],
      taste: "Mildly spiced, rich, wholesome, and satisfying",
      whereToFind: "Local thali restaurants near main market and highway dhabas"
    },
    {
      name: "Bhutta Chaat (Corn Chaat)",
      description: "Roasted corn on the cob seasoned with tangy spices, lime juice, and chaat masala. A beloved street snack enjoyed by locals and visitors, especially popular during monsoon and winter evenings.",
      keyIngredients: ["Roasted corn", "Lime juice", "Chaat masala", "Red chili powder", "Salt", "Butter"],
      taste: "Tangy, spicy, smoky, and refreshing",
      whereToFind: "Street vendors near Yeshwant Lake and main market area"
    },
    {
      name: "Mirchi-based Curries",
      description: "Spicy gravies featuring Kukshi's famous locally grown red chilies. These authentic regional curries showcase the town's signature produce in traditional recipes passed down through generations.",
      keyIngredients: ["Local red chilies", "Tomatoes", "Garlic", "Onions", "Regional spice blend", "Mustard oil"],
      taste: "Very spicy, aromatic, flavorful, and intense",
      whereToFind: "Traditional restaurants, dhabas, and home-style eateries"
    },
    {
      name: "Tribal Millet Dishes",
      description: "Nutritious preparations using bajra (pearl millet) and jowar (sorghum), reflecting the traditional diet of Bhil and Bhilala tribal communities. These healthy dishes are rich in fiber and nutrients.",
      keyIngredients: ["Bajra flour", "Jowar flour", "Jaggery", "Ghee", "Local vegetables"],
      taste: "Earthy, wholesome, mildly sweet, and nutty",
      whereToFind: "Tribal village restaurants and local eateries"
    },
    {
      name: "Poha and Jalebi",
      description: "Popular breakfast combination in Madhya Pradesh. Flattened rice cooked with spices, curry leaves, and peanuts, served with crispy sweet jalebis - a perfect sweet and savory pairing.",
      keyIngredients: ["Poha (flattened rice)", "Curry leaves", "Peanuts", "Turmeric", "Jalebis"],
      taste: "Savory poha with sweet, crispy jalebis",
      whereToFind: "Morning street stalls and breakfast joints"
    },
    {
      name: "Dal Bafla",
      description: "Signature Malwa dish similar to dal baati but boiled before being roasted. These wheat dumplings are served with generous amounts of ghee alongside aromatic dal, making it a hearty comfort food.",
      keyIngredients: ["Wheat flour dumplings", "Mixed dal", "Ghee", "Spices", "Garlic chutney"],
      taste: "Rich, ghee-laden, comforting, and filling",
      whereToFind: "Traditional Malwa restaurants and dhabas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      nav: ['Home', 'City Profile', 'Travel Guides', 'Community', 'About'],
      heroTitle: 'Welcome to Kukshi',
      heroSubtitle: 'Where Tribal Heritage Meets Bustling Bazaars',
      aboutTitle: 'Discover Kukshi',
      aboutText: 'A vibrant semi-urban town in Dhar district where cotton traders, chili farmers, and tribal artisans create a unique cultural tapestry in the heart of Malwa.',
    },
    hi: {
      nav: ['होम', 'शहर प्रोफाइल', 'यात्रा गाइड', 'समुदाय', 'हमारे बारे में'],
      heroTitle: 'कुक्षी में आपका स्वागत है',
      heroSubtitle: 'जहां आदिवासी विरासत मिलती है हलचल भरे बाजारों से',
      aboutTitle: 'कुक्षी की खोज करें',
      aboutText: 'धार जिले का एक जीवंत अर्ध-शहरी कस्बा जहां कपास व्यापारी, मिर्च किसान और आदिवासी कारीगर मालवा के दिल में एक अनूठी सांस्कृतिक छवि बनाते हैं।',
    }
  };

  const t = content[language];

  const LandmarksDetailPage = () => (
    <div className="space-y-8">
      <button 
        onClick={() => setCurrentPage('home')}
        className="flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-4"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </button>
      
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Famous Landmarks of Kukshi</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {landmarkData.map((landmark, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <MapPin size={64} className="text-white" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-800">{landmark.name}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {landmark.type}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{landmark.description}</p>
              
              <div className="mb-4">
                <h4 className="font-bold text-orange-600 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {landmark.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <ChevronRight className="text-orange-600 mr-1 flex-shrink-0 mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-sm">
                  <strong className="text-orange-700">Best Time:</strong> {landmark.bestTime}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ShoppingDetailPage = () => (
    <div className="space-y-8">
      <button 
        onClick={() => setCurrentPage('home')}
        className="flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-4"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </button>
      
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Shopping Hubs in Kukshi</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {shoppingData.map((shop, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <ShoppingBag size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{shop.name}</h3>
              <p className="text-gray-700 mb-4">{shop.description}</p>
              
              <div className="mb-4">
                <h4 className="font-bold text-green-600 mb-2">What to Buy:</h4>
                <ul className="space-y-1">
                  {shop.whatToBuy.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <ChevronRight className="text-green-600 mr-1 flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-green-700 mb-1">Price Range</p>
                  <p className="text-sm text-gray-700">{shop.priceRange}</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-orange-700 mb-1">Best Time</p>
                  <p className="text-sm text-gray-700">{shop.bestTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CuisineDetailPage = () => (
    <div className="space-y-8">
      <button 
        onClick={() => setCurrentPage('home')}
        className="flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-4"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </button>
      
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Local Cuisine of Kukshi</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {cuisineData.map((dish, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <Utensils size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{dish.name}</h3>
              <p className="text-gray-700 mb-4">{dish.description}</p>
              
              <div className="mb-4">
                <h4 className="font-bold text-red-600 mb-2">Key Ingredients:</h4>
                <div className="flex flex-wrap gap-2">
                  {dish.keyIngredients.map((ingredient, i) => (
                    <span key={i} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4 bg-orange-50 p-3 rounded-lg">
                <p className="text-sm">
                  <strong className="text-orange-700">Taste:</strong> {dish.taste}
                </p>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm">
                  <strong className="text-purple-700">Where to Find:</strong> {dish.whereToFind}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-12">
      <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-orange-600 via-red-500 to-orange-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4 md:p-8">
          <h1 className="text-3xl md:text-7xl font-bold mb-4 text-center">{t.heroTitle}</h1>
          <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">{t.heroSubtitle}</p>

          <div className="mt-8 md:mt-12 bg-white/10 backdrop-blur-md px-4 md:px-8 py-4 rounded-2xl border border-white/20">
            <p className="text-sm md:text-lg text-center">
              ✨ {funFacts[currentFact][language]}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div 
          onClick={() => setCurrentPage('landmarks')}
          className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <div className="text-3xl md:text-4xl mb-4"><MapPin /></div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Explore Landmarks</h3>
          <p className="opacity-90 text-sm md:text-base">Temples, lakes & caves</p>
        </div>

        <div 
          onClick={() => setCurrentPage('shopping')}
          className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <div className="text-3xl md:text-4xl mb-4"><ShoppingBag /></div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Shopping Hubs</h3>
          <p className="opacity-90 text-sm md:text-base">Cotton, chili & jewelry</p>
        </div>

        <div 
          onClick={() => setCurrentPage('cuisine')}
          className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <div className="text-3xl md:text-4xl mb-4"><Utensils /></div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Local Cuisine</h3>
          <p className="opacity-90 text-sm md:text-base">Malwa thali & street food</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Find Kukshi on the Map</h2>
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58946.89!2d74.75!3d22.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963a7b9a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sKukshi%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Kukshi Map"
          ></iframe>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t.aboutTitle}</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">{t.aboutText}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow">
                <Users className="text-orange-600 mb-2" size={32} />
                <p className="font-bold text-xl md:text-2xl">40-50K</p>
                <p className="text-xs md:text-sm text-gray-600">Population</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <Mountain className="text-green-600 mb-2" size={32} />
                <p className="font-bold text-xl md:text-2xl">350m</p>
                <p className="text-xs md:text-sm text-gray-600">Elevation</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-300 h-64 md:h-80 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop" 
              alt="Yeshwant Lake"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const CityProfilePage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
      <div className="space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">City Profile: Kukshi</h1>
        
        <div className="flex flex-wrap gap-2 border-b border-gray-200 overflow-x-auto">
          {['overview', 'history', 'landmarks', 'food', 'practical'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-3 font-semibold capitalize whitespace-nowrap ${activeTab === tab ? 'border-b-4 border-orange-600 text-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-orange-600">Geography</h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>Coordinates:</strong> 22.21°N, 74.75°E</li>
                    <li><strong>District:</strong> Dhar, Madhya Pradesh</li>
                    <li><strong>Elevation:</strong> ~350 meters</li>
                    <li><strong>Climate:</strong> Tropical (hot summers, mild winters)</li>
                    <li><strong>Best Season:</strong> October to March</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-green-600">Economy & Demographics</h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>Population:</strong> 40,000-50,000</li>
                    <li><strong>Type:</strong> Semi-urban Tier-3 town</li>
                    <li><strong>Key Industries:</strong> Cotton trading, red chili markets</li>
                    <li><strong>Crafts:</strong> Gold/silver jewelry, ready-made garments</li>
                    <li><strong>Communities:</strong> Bhil & Bhilala tribal heritage</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">History & Culture</h2>
              <div className="border-l-4 border-orange-600 pl-4 md:pl-6 space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-orange-600">Ancient Malwa Era</h3>
                  <p className="text-sm md:text-base text-gray-700">Part of the historic Malwa region, known for trade routes and agricultural prosperity.</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-orange-600">Tribal Heritage</h3>
                  <p className="text-sm md:text-base text-gray-700">Home to Bhil and Bhilala communities renowned for Gair dance, intricate jewelry craftsmanship, and vibrant festivals like Teej and local melas.</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-orange-600">Colonial Period</h3>
                  <p className="text-sm md:text-base text-gray-700">Developed as an agricultural trading hub under British rule, connecting rural producers to urban markets.</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-orange-600">Modern Era</h3>
                  <p className="text-sm md:text-base text-gray-700">Evolved into a bustling semi-urban center balancing tradition with commerce, hosting one of MP's largest chili markets.</p>
                </div>
              </div>
              
              <div className="mt-8 bg-orange-50 p-4 md:p-6 rounded-xl">
                <h3 className="text-lg md:text-xl font-bold mb-4">Cultural Highlights</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-600 mb-2">Gair Dance</h4>
                    <p className="text-xs md:text-sm text-gray-700">Traditional tribal folk dance performed during festivals</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">Jewelry Craft</h4>
                    <p className="text-xs md:text-sm text-gray-700">Exquisite gold and silver ornaments by local artisans</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-red-600 mb-2">Festivals</h4>
                    <p className="text-xs md:text-sm text-gray-700">Holi, Teej, and vibrant tribal melas year-round</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'landmarks' && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Landmarks & Attractions</h2>
              
              {landmarkData.map((landmark, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-4 md:pl-6 hover:bg-gray-50 p-4 rounded-r-xl transition">
                  <div className="flex flex-col md:flex-row md:items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{landmark.name}</h3>
                      <p className="text-sm md:text-base text-gray-700 mt-2">{landmark.description}</p>
                    </div>
                    <span className="mt-2 md:mt-0 md:ml-4 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs md:text-sm font-semibold self-start">
                      {landmark.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'food' && (
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Food & Drink</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-red-700">Must-Try Dishes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <div className="text-sm md:text-base">
                        <strong>Bhutta Chaat:</strong> Roasted corn with tangy spices
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <div className="text-sm md:text-base">
                        <strong>Mirchi-based Curries:</strong> Spicy gravies featuring local red chilies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <div className="text-sm md:text-base">
                        <strong>Tribal Millet Dishes:</strong> Nutritious bajra and jowar preparations
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <div className="text-sm md:text-base">
                        <strong>Authentic Malwa Thali:</strong> Complete meal with dal bafla, kadhi, vegetables
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-orange-700">Where to Eat</h3>
                  <ul className="space-y-3">
                    <li className="bg-white p-3 rounded-lg text-sm md:text-base">
                      <strong className="text-orange-600">Local Thali Restaurants:</strong> Authentic home-style cooking near main market
                    </li>
                    <li className="bg-white p-3 rounded-lg text-sm md:text-base">
                      <strong className="text-orange-600">Chai Stalls:</strong> Fresh masala chai at every corner
                    </li>
                    <li className="bg-white p-3 rounded-lg text-sm md:text-base">
                      <strong className="text-orange-600">Street Food Vendors:</strong> Evening snacks near Yeshwant Lake
                    </li>
                    <li className="bg-white p-3 rounded-lg text-sm md:text-base">
                      <strong className="text-orange-600">Market Eateries:</strong> Quick bites in Cotton Mandi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practical' && (
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Practical Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-700">Getting There</h3>
                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    <li><strong>From Indore:</strong> 100km via NH-52 (2-3 hours)</li>
                    <li><strong>Nearest Airport:</strong> Indore Airport</li>
                    <li><strong>Train:</strong> Ratlam Junction (80km)</li>
                    <li><strong>Local Transport:</strong> Auto-rickshaws, buses</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-green-700">When to Visit</h3>
                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    <li><strong>Best Season:</strong> October to March</li>
                    <li><strong>Summer:</strong> Apr-Jun (very hot, 35-45°C)</li>
                    <li><strong>Monsoon:</strong> Jul-Sep (moderate rainfall)</li>
                    <li><strong>Winter:</strong> Nov-Feb (cool, 10-25°C)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-orange-700">Budget Tips</h3>
                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    <li><strong>Hotels:</strong> ₹800-1500/night</li>
                    <li><strong>Food:</strong> Thali ₹80-150, street food ₹20-50</li>
                    <li><strong>Transport:</strong> Local auto ₹20-50</li>
                    <li><strong>Daily Budget:</strong> ₹1500-2500</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-purple-700">Safety & Eco-Tips</h3>
                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    <li><strong>Safety:</strong> Family-friendly, low crime</li>
                    <li><strong>Respect:</strong> Tribal customs & religious sites</li>
                    <li><strong>Sustainable:</strong> Support local farmers</li>
                    <li><strong>Eco-conscious:</strong> Avoid plastic near lakes</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TravelGuidesPage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Travel Guides</h1>
      
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">2 Days in Kukshi</h2>
        
        <div className="space-y-6 md:space-y-8">
          <div className="border-l-4 border-green-500 pl-4 md:pl-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Day 1: Temples & Nature</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 text-sm md:text-base">Morning (7am-11am)</p>
                <p className="text-gray-700 text-sm md:text-base">Start with sunrise at Torna Devi Temple. Enjoy panoramic views and peaceful morning prayers.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 text-sm md:text-base">Midday (11am-3pm)</p>
                <p className="text-gray-700 text-sm md:text-base">Visit Shree Bada Ganesh Temple and Badkeshwar Mahadev Mandir. Lunch at authentic Malwa thali restaurant.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 text-sm md:text-base">Evening (3pm-7pm)</p>
                <p className="text-gray-700 text-sm md:text-base">Relax at Yeshwant Lake. Try boating, photography, and bhutta chaat. Watch sunset.</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 pl-4 md:pl-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Day 2: Markets & History</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 text-sm md:text-base">Morning (8am-12pm)</p>
                <p className="text-gray-700 text-sm md:text-base">Explore Cotton Mandi and the famous red chili market. Shop for jewelry and garments.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-bold text-yellow-700 text-sm md:text-base">Afternoon (1pm-6pm)</p>
                <p className="text-gray-700 text-sm md:text-base">Day trip to Bagh Buddhist Caves (35km). Marvel at 5th-century rock art and ancient Buddhist heritage.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 text-sm md:text-base">Evening (6pm-8pm)</p>
                <p className="text-gray-700 text-sm md:text-base">Return to Kukshi. Visit Khatu Shyam Mandir for evening aarti. Farewell dinner with mirchi-based curries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">🎨 Tribal Culture Trail</h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>• Watch Gair dance performances</li>
            <li>• Visit tribal jewelry workshops</li>
            <li>• Attend local melas and festivals</li>
            <li>• Learn about Bhil heritage</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white p-6 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">🛍️ Shopping Spree</h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>• Gold & silver jewelry bargains</li>
            <li>• Ready-made garment markets</li>
            <li>• Fresh chili & spice shopping</li>
            <li>• Cotton textile exploration</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-6 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">🌿 Nature Escapes</h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>• Yeshwant Lake photography</li>
            <li>• Countryside village walks</li>
            <li>• Bird watching opportunities</li>
            <li>• Sunset viewpoint tours</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Kukshi vs. Dhar: Which to Visit?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-3 md:p-4 font-bold text-gray-700">Aspect</th>
                <th className="text-left p-3 md:p-4 font-bold text-orange-600">Kukshi</th>
                <th className="text-left p-3 md:p-4 font-bold text-blue-600">Dhar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 md:p-4 font-semibold">Vibe</td>
                <td className="p-3 md:p-4">Tribal heritage, bustling markets</td>
                <td className="p-3 md:p-4">Royal history, fort architecture</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 md:p-4 font-semibold">Best For</td>
                <td className="p-3 md:p-4">Cultural immersion, shopping</td>
                <td className="p-3 md:p-4">History buffs, architecture lovers</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 md:p-4 font-semibold">Key Attraction</td>
                <td className="p-3 md:p-4">Red chili market, Yeshwant Lake</td>
                <td className="p-3 md:p-4">Dhar Fort, Bhoj Shala</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 md:p-4 font-semibold">Crowd Level</td>
                <td className="p-3 md:p-4">Moderate, authentic local feel</td>
                <td className="p-3 md:p-4">More touristy, historical crowds</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-semibold">Recommendation</td>
                <td className="p-3 md:p-4" colSpan={2}>Visit both! Kukshi for culture, Dhar for history - Easy 40km connection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', story: '' });

    return (
      <div className="space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Community</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">Latest Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'A Day in Kukshi\'s Chili Fields',
                excerpt: 'Experience the vibrant red landscape where farmers cultivate some of India\'s finest chilies...',
                author: 'Priya Sharma',
                date: 'Nov 10, 2025',
                image: '🌶️'
              },
              {
                title: 'The Art of Bhil Jewelry Making',
                excerpt: 'Meet the artisans preserving centuries-old techniques. Silver threads transformed into intricate ornaments...',
                author: 'Rahul Patel',
                date: 'Nov 5, 2025',
                image: '💍'
              },
              {
                title: 'Yeshwant Lake at Sunrise',
                excerpt: 'A photographer\'s paradise where mist rises over calm waters. The golden hour reveals why this lake is Kukshi\'s hidden gem...',
                author: 'Anjali Mehta',
                date: 'Oct 28, 2025',
                image: '🌅'
              },
              {
                title: 'Festival Season in Tribal Villages',
                excerpt: 'When drums echo through the hills and Gair dancers paint the streets with color. An insider\'s guide to celebrations...',
                author: 'Vikram Singh',
                date: 'Oct 20, 2025',
                image: '🎭'
              }
            ].map((post, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 h-32 md:h-48 flex items-center justify-center text-4xl md:text-6xl">
                  {post.image}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700 text-sm md:text-base">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">Upcoming Events</h2>
          
          <div className="space-y-4">
            {[
              { event: 'Tribal Craft Fair', date: 'Dec 15-18, 2025', location: 'Main Market Square', type: 'Cultural' },
              { event: 'Cotton Harvest Festival', date: 'Jan 10, 2026', location: 'Cotton Mandi', type: 'Trade' },
              { event: 'Teej Celebrations', date: 'Aug 2026 (TBD)', location: 'Various Temples', type: 'Religious' },
              { event: 'Holi Tribal Dance', date: 'Mar 2026 (TBD)', location: 'City Center', type: 'Festival' }
            ].map((event, idx) => (
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl flex flex-col md:flex-row md:items-start justify-between hover:shadow-md transition gap-4">
                <div className="flex items-start space-x-4">
                  <Calendar className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-gray-800 text-base md:text-lg">{event.event}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{event.date}</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">📍 {event.location}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs md:text-sm font-semibold self-start">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">Share Your Kukshi Story</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">Have a memorable experience or photo from Kukshi? We'd love to feature it!</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Your Name</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Your Story</label>
              <textarea 
                value={formData.story}
                onChange={(e) => setFormData({...formData, story: e.target.value})}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                placeholder="Tell us about your Kukshi experience..."
              />
            </div>
            
            <button className="bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-sm md:text-base">
              Submit Story
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">About Us</h1>
      
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-base md:text-xl max-w-3xl mx-auto">
          "Discover the soul of Malwa's trade town — where tribal heritage, bustling markets, and natural beauty create an authentic Indian experience."
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Why Kukshi?</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Kukshi represents the heart of India's semi-urban transformation — a place where ancient tribal traditions meet modern commerce, where cotton farmers and chili traders thrive alongside jewelry artisans and textile merchants.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              This website celebrates Kukshi's unique identity as a Tier-3 town that remains authentic, accessible, and full of untold stories waiting to be discovered by curious travelers.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-sm md:text-base text-gray-700">Comprehensive travel guides and itineraries</span>
              </li>
              <li className="flex items-start">
                <Star className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-sm md:text-base text-gray-700">Cultural insights into Bhil and Bhilala communities</span>
              </li>
              <li className="flex items-start">
                <Star className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-sm md:text-base text-gray-700">Practical information for budget travelers</span>
              </li>
              <li className="flex items-start">
                <Star className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-sm md:text-base text-gray-700">Community stories and local perspectives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm md:text-base text-gray-700">
              <p><strong>Email:</strong> hello@visitkukshi.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> Main Market, Kukshi, Dhar District, MP 454331</p>
              <p><strong>Social Media:</strong> @VisitKukshi</p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-4">Newsletter Signup</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">Get monthly updates on Kukshi events and travel tips!</p>
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                />
                <button className="bg-orange-600 text-white px-4 md:px-6 py-2 rounded-r-lg hover:bg-orange-700 transition text-sm md:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-4">Send Us a Message</h3>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
              />
              <input 
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
              />
              <textarea 
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
              />
              <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-sm md:text-base">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">SEO Keywords & Links</h3>
        <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Kukshi Tourism</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Dhar District Attractions</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Tribal Culture MP</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Malwa Region Travel</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Bagh Caves</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Cotton Market India</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Privacy Policy</span>
          <span className="bg-white px-3 py-1 rounded-full text-gray-600">Terms of Service</span>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'landmarks': return <LandmarksDetailPage />;
      case 'shopping': return <ShoppingDetailPage />;
      case 'cuisine': return <CuisineDetailPage />;
      case 'profile': return <CityProfilePage />;
      case 'guides': return <TravelGuidesPage />;
      case 'community': return <CommunityPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                K
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-gray-800">Visit Kukshi</h1>
                <p className="text-xs text-gray-500 hidden md:block">Discover Malwa's Heritage Town</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['home', 'profile', 'guides', 'community', 'about'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`font-semibold capitalize transition text-sm lg:text-base ${
                    currentPage === page 
                      ? 'text-orange-600 border-b-2 border-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {page === 'profile' ? 'City Profile' : page === 'guides' ? 'Travel Guides' : page}
                </button>
              ))}
              
              <button 
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="px-3 md:px-4 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition text-sm"
              >
                {language === 'en' ? 'हिन्दी' : 'English'}
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'profile', 'guides', 'community', 'about'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 font-semibold capitalize transition rounded-lg text-sm ${
                    currentPage === page 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page === 'profile' ? 'City Profile' : page === 'guides' ? 'Travel Guides' : page}
                </button>
              ))}
              <button 
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="block w-full text-left px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold text-sm"
              >
                {language === 'en' ? 'हिन्दी में देखें' : 'View in English'}
              </button>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderPage()}
      </main>

      <footer className="bg-gray-900 text-white mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Visit Kukshi</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Your gateway to experiencing authentic Malwa culture, tribal heritage, and vibrant markets.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('profile')}>City Profile</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('guides')}>Travel Guides</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('community')}>Events Calendar</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('community')}>Blog Stories</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm md:text-base">Explore</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('landmarks')}>Temples & Spiritual Sites</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('shopping')}>Markets & Shopping</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('profile')}>Tribal Culture</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('landmarks')}>Nature & Lakes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm md:text-base">Connect</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li>📧 hello@visitkukshi.com</li>
                <li>📱 +91 98765 43210</li>
                <li className="flex space-x-4 mt-4">
                  <span className="hover:text-orange-500 cursor-pointer">Facebook</span>
                  <span className="hover:text-orange-500 cursor-pointer">Instagram</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
            <p>© 2025 Visit Kukshi. All rights reserved.</p>
            <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms</span>
              <span className="hover:text-white cursor-pointer">Sitemap</span>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>Kukshi Tourism | Dhar District | Madhya Pradesh | India</p>
            <p className="mt-2">Keywords: Kukshi tourism, Dhar attractions, Tribal culture MP, Malwa region travel, Bagh Caves, Cotton market India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KukshiWebsite;
