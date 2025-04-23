export type Product = {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  salePrice?: number
  category: string
  images: string[]
  rating: number
  reviews: number
  sizes: string[]
  colors: string[]
  inStock: boolean
  featured?: boolean
  new?: boolean
  sale?: boolean
  material?: string
  date?: string
}

export type Category = {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

// High-quality fashion product images from Unsplash
const mensFashionImages = [
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582023617394-9f99138316cc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617952385804-7b9a154f2dbc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515664069236-68a74c369d97?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565128939503-e195dafb8c8f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?q=80&w=1000&auto=format&fit=crop",
]

const womensFashionImages = [
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566958769312-82cef41d19ef?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551163943-3f7fffb9d770?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548549557-dbe9946621da?q=80&w=1000&auto=format&fit=crop",
]

const accessoriesImages = [
  "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
]

const footwearImages = [
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
]

// Category images
const categoryImages = [
  "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop", // Men
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop", // Women
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop", // Casual
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop", // Formal
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop", // Accessories
  "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000&auto=format&fit=crop", // Footwear
]

// Men's clothing products
const mensProducts = [
  {
    id: "mens-1",
    name: "Premium Cotton T-Shirt",
    description: "Soft and breathable cotton t-shirt with a modern fit.",
    longDescription:
      "This premium cotton t-shirt is crafted from 100% organic cotton for exceptional comfort and durability. The modern fit is designed to flatter your physique while providing all-day comfort. Perfect for casual outings or layering, this versatile piece is a must-have for any wardrobe.",
    price: 29.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[0]),
    rating: 4.7,
    reviews: 128,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray"],
    inStock: true,
    featured: true,
    material: "100% Organic Cotton",
    date: "2023-05-15",
  },
  {
    id: "mens-2",
    name: "Slim Fit Jeans",
    description: "Classic slim fit jeans with a touch of stretch for comfort.",
    longDescription:
      "Our slim fit jeans combine style and comfort with premium denim and just the right amount of stretch. The classic five-pocket design and versatile wash make these jeans perfect for both casual and semi-formal occasions. The durable construction ensures they'll remain a staple in your wardrobe for years to come.",
    price: 59.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[1]),
    rating: 4.5,
    reviews: 94,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true,
    new: true,
    material: "98% Cotton, 2% Elastane",
    date: "2023-06-20",
  },
  {
    id: "mens-3",
    name: "Casual Button-Down Shirt",
    description: "Versatile button-down shirt perfect for any occasion.",
    longDescription:
      "This casual button-down shirt is crafted from premium cotton with a subtle texture that adds visual interest. The relaxed fit provides comfort without sacrificing style, while the versatile design makes it suitable for both casual and smart-casual settings. Pair with jeans for a laid-back look or with chinos for a more polished appearance.",
    price: 45.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[2]),
    rating: 4.6,
    reviews: 76,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black", "Green"],
    inStock: true,
    material: "100% Cotton",
    date: "2023-04-10",
  },
  {
    id: "mens-4",
    name: "Wool Blend Blazer",
    description: "Sophisticated blazer for a polished, professional look.",
    longDescription:
      "Elevate your formal wardrobe with our wool blend blazer. The tailored fit creates a sleek silhouette, while the premium fabric ensures comfort and durability. Features include a two-button closure, notched lapels, and interior pockets. Perfect for business meetings, special events, or adding sophistication to casual outfits.",
    price: 129.99,
    salePrice: 99.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[3]),
    rating: 4.8,
    reviews: 52,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Charcoal", "Black"],
    inStock: true,
    sale: true,
    material: "70% Wool, 30% Polyester",
    date: "2023-02-28",
  },
  {
    id: "mens-5",
    name: "Lightweight Bomber Jacket",
    description: "Stylish bomber jacket perfect for transitional weather.",
    longDescription:
      "Our lightweight bomber jacket combines classic style with modern functionality. The water-resistant outer shell protects against light rain, while the breathable lining ensures comfort in varying temperatures. Features include ribbed cuffs and hem, multiple pockets, and a durable front zipper. An essential piece for your casual wardrobe.",
    price: 79.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[4]),
    rating: 4.4,
    reviews: 68,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black", "Navy"],
    inStock: true,
    featured: true,
    material: "100% Polyester",
    date: "2023-03-15",
  },
  {
    id: "mens-6",
    name: "Performance Polo Shirt",
    description: "Moisture-wicking polo shirt for active lifestyles.",
    longDescription:
      "This performance polo shirt is designed for both style and functionality. The moisture-wicking fabric keeps you dry during physical activities, while the classic polo design ensures you look good whether you're on the golf course or at a casual business meeting. The durable construction and color-fast fabric mean it will maintain its appearance wash after wash.",
    price: 34.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[5]),
    rating: 4.3,
    reviews: 45,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Red", "Black", "White"],
    inStock: true,
    material: "90% Polyester, 10% Elastane",
    date: "2023-07-05",
  },
  {
    id: "mens-7",
    name: "Chino Pants",
    description: "Classic chino pants with a comfortable stretch fit.",
    longDescription:
      "Our chino pants combine timeless style with modern comfort. The cotton-blend fabric with added stretch allows for easy movement throughout the day. The versatile design makes these pants perfect for both casual and business casual settings. Features include a flat front, side pockets, and back welt pockets.",
    price: 49.99,
    category: "Men",
    images: Array(4).fill(
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop",
    ),
    rating: 4.5,
    reviews: 87,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive", "Gray"],
    inStock: true,
    material: "98% Cotton, 2% Elastane",
    date: "2023-01-15",
  },
  {
    id: "mens-8",
    name: "Merino Wool Sweater",
    description: "Luxuriously soft merino wool sweater for ultimate comfort.",
    longDescription:
      "Experience the luxury of merino wool with our premium sweater. Known for its exceptional softness and temperature-regulating properties, merino wool keeps you warm without overheating. The classic crew neck design and ribbed cuffs and hem ensure a timeless look that pairs well with both casual and formal attire.",
    price: 89.99,
    salePrice: 69.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[7]),
    rating: 4.9,
    reviews: 63,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Navy", "Burgundy", "Forest Green"],
    inStock: true,
    sale: true,
    material: "100% Merino Wool",
    date: "2022-12-10",
  },
  {
    id: "mens-9",
    name: "Graphic Print T-Shirt",
    description: "Bold graphic t-shirt for a standout casual look.",
    longDescription:
      "Make a statement with our graphic print t-shirt. The eye-catching design is printed on premium cotton fabric for comfort and durability. The regular fit provides a relaxed feel, while the reinforced neckline ensures the shirt maintains its shape wash after wash. Perfect for casual outings or adding personality to your everyday style.",
    price: 24.99,
    category: "Men",
    images: Array(4).fill(
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    ),
    rating: 4.2,
    reviews: 41,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    inStock: true,
    new: true,
    material: "100% Cotton",
    date: "2023-08-05",
  },
  {
    id: "mens-10",
    name: "Cargo Shorts",
    description: "Functional cargo shorts with multiple pockets.",
    longDescription:
      "Our cargo shorts combine functionality with casual style. The durable cotton construction ensures longevity, while the multiple pockets provide practical storage for your essentials. The relaxed fit and knee-length design offer comfort and versatility for warm-weather activities. Perfect for outdoor adventures or casual weekend wear.",
    price: 39.99,
    category: "Men",
    images: Array(4).fill(mensFashionImages[9]),
    rating: 4.3,
    reviews: 58,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Olive", "Black", "Gray"],
    inStock: true,
    material: "100% Cotton",
    date: "2023-05-20",
  },
]

// Women's clothing products
const womensProducts = [
  {
    id: "womens-1",
    name: "Floral Maxi Dress",
    description: "Elegant floral maxi dress perfect for summer occasions.",
    longDescription:
      "This stunning floral maxi dress combines elegance with comfort. The flowing silhouette and vibrant print create a feminine look that's perfect for summer events, vacations, or casual outings. The lightweight fabric ensures all-day comfort, while the adjustable straps provide a customizable fit. The dress features a subtle side slit for ease of movement.",
    price: 69.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[0]),
    rating: 4.8,
    reviews: 112,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Red", "Green"],
    inStock: true,
    featured: true,
    material: "100% Rayon",
    date: "2023-04-15",
  },
  {
    id: "womens-2",
    name: "High-Waisted Skinny Jeans",
    description: "Flattering high-waisted jeans with a skinny fit.",
    longDescription:
      "Our high-waisted skinny jeans are designed to flatter your figure while providing exceptional comfort. The premium denim with added stretch moves with you throughout the day, while the high waist creates a sleek silhouette. The versatile design makes these jeans perfect for both casual and dressed-up looks.",
    price: 59.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[1]),
    rating: 4.6,
    reviews: 98,
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true,
    material: "92% Cotton, 6% Polyester, 2% Elastane",
    date: "2023-03-10",
  },
  {
    id: "womens-3",
    name: "Oversized Knit Sweater",
    description: "Cozy oversized sweater for ultimate comfort.",
    longDescription:
      "Wrap yourself in comfort with our oversized knit sweater. The soft, chunky knit provides warmth without weight, while the relaxed fit creates a casual, effortless look. Features include dropped shoulders, ribbed cuffs and hem, and a classic crew neckline. Perfect for lounging at home or casual outings during cooler weather.",
    price: 49.99,
    salePrice: 39.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[2]),
    rating: 4.7,
    reviews: 76,
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Gray", "Blush", "Sage"],
    inStock: true,
    sale: true,
    material: "70% Acrylic, 30% Wool",
    date: "2023-02-05",
  },
  {
    id: "womens-4",
    name: "Tailored Blazer",
    description: "Professional blazer with a modern, feminine cut.",
    longDescription:
      "Elevate your professional wardrobe with our tailored blazer. The modern cut creates a feminine silhouette while maintaining a professional appearance. The premium fabric ensures comfort during long workdays, while details like the lined interior and functional pockets add practicality. Perfect for business meetings, interviews, or adding polish to casual outfits.",
    price: 89.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[3]),
    rating: 4.9,
    reviews: 64,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    inStock: true,
    featured: true,
    material: "65% Polyester, 35% Viscose",
    date: "2023-01-20",
  },
  {
    id: "womens-5",
    name: "Pleated Midi Skirt",
    description: "Elegant pleated skirt with a flattering midi length.",
    longDescription:
      "Our pleated midi skirt combines timeless elegance with modern style. The flowing pleats create movement and dimension, while the midi length offers versatility for various occasions. The comfortable elastic waistband ensures a perfect fit, and the lightweight fabric provides all-day comfort. Pair with a blouse for work or a casual tee for weekend outings.",
    price: 45.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[4]),
    rating: 4.5,
    reviews: 52,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Blush", "Emerald"],
    inStock: true,
    material: "100% Polyester",
    date: "2023-05-25",
  },
  {
    id: "womens-6",
    name: "Satin Blouse",
    description: "Luxurious satin blouse for an elegant, polished look.",
    longDescription:
      "Add a touch of luxury to your wardrobe with our satin blouse. The smooth, lustrous fabric creates an elegant appearance, while the relaxed fit ensures comfort. Features include a classic collar, button-front closure, and long sleeves with button cuffs. Perfect for work, special occasions, or elevating your everyday style.",
    price: 54.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[5]),
    rating: 4.4,
    reviews: 48,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Blush", "Navy"],
    inStock: true,
    new: true,
    material: "100% Polyester",
    date: "2023-07-15",
  },
  {
    id: "womens-7",
    name: "Wrap Dress",
    description: "Flattering wrap dress suitable for multiple occasions.",
    longDescription:
      "Our wrap dress is designed to flatter every figure with its adjustable tie waist and V-neckline. The soft, stretchy fabric ensures comfort throughout the day, while the timeless silhouette makes it appropriate for both work and social events. The knee-length design offers versatility for all seasons - pair with sandals in summer or boots and a cardigan in cooler weather.",
    price: 59.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[6]),
    rating: 4.8,
    reviews: 87,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red", "Navy", "Floral"],
    inStock: true,
    featured: true,
    material: "95% Polyester, 5% Spandex",
    date: "2023-03-30",
  },
  {
    id: "womens-8",
    name: "Linen Blend Pants",
    description: "Breathable linen blend pants for effortless summer style.",
    longDescription:
      "Stay cool and stylish with our linen blend pants. The lightweight, breathable fabric is perfect for warm weather, while the relaxed fit provides all-day comfort. Features include a partially elasticated waistband, side pockets, and a straight leg design. These versatile pants pair beautifully with both casual and dressier tops.",
    price: 49.99,
    salePrice: 39.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[7]),
    rating: 4.3,
    reviews: 56,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Beige", "Black", "Olive"],
    inStock: true,
    sale: true,
    material: "55% Linen, 45% Cotton",
    date: "2023-06-10",
  },
  {
    id: "womens-9",
    name: "Cropped Cardigan",
    description: "Versatile cropped cardigan for layering.",
    longDescription:
      "Our cropped cardigan is the perfect layering piece for transitional weather. The soft knit fabric provides warmth without bulk, while the cropped length creates a modern silhouette. Features include a button-front closure, ribbed cuffs and hem, and a V-neckline. Layer over dresses, high-waisted pants, or skirts for a stylish, put-together look.",
    price: 39.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[8]),
    rating: 4.5,
    reviews: 42,
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Black", "Pink", "Blue"],
    inStock: true,
    new: true,
    material: "80% Cotton, 20% Polyester",
    date: "2023-08-05",
  },
  {
    id: "womens-10",
    name: "Denim Jacket",
    description: "Classic denim jacket with a modern fit.",
    longDescription:
      "A wardrobe essential, our denim jacket combines timeless style with modern details. The premium denim construction ensures durability, while the slightly fitted silhouette creates a flattering look. Features include button-front closure, chest pockets, side pockets, and adjustable button cuffs. This versatile piece layers perfectly over dresses, tees, or sweaters throughout the year.",
    price: 69.99,
    category: "Women",
    images: Array(4).fill(womensFashionImages[9]),
    rating: 4.7,
    reviews: 78,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Wash"],
    inStock: true,
    material: "100% Cotton",
    date: "2023-04-20",
  },
]

// Accessories products
const accessoriesProducts = [
  {
    id: "accessories-1",
    name: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag with adjustable strap.",
    longDescription:
      "Our leather crossbody bag combines style and functionality. Crafted from genuine leather, this bag features a spacious main compartment, interior pockets for organization, and an adjustable  this bag features a spacious main compartment, interior pockets for organization, and an adjustable strap for comfortable wear. The timeless design complements any outfit, while the durable construction ensures this bag will be a staple in your accessory collection for years to come.",
    price: 89.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[0]),
    rating: 4.8,
    reviews: 65,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    inStock: true,
    featured: true,
    material: "Genuine Leather",
    date: "2023-03-15",
  },
  {
    id: "accessories-2",
    name: "Minimalist Watch",
    description: "Sleek minimalist watch with a stainless steel band.",
    longDescription:
      "Our minimalist watch combines elegant simplicity with quality craftsmanship. The clean dial and slim profile create a timeless aesthetic that transitions seamlessly from day to night. Features include a stainless steel case and band, water resistance up to 30 meters, and a reliable quartz movement. This versatile accessory adds a touch of sophistication to any outfit.",
    price: 79.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[1]),
    rating: 4.9,
    reviews: 87,
    sizes: ["One Size"],
    colors: ["Silver", "Gold", "Rose Gold", "Black"],
    inStock: true,
    material: "Stainless Steel",
    date: "2023-02-10",
  },
  {
    id: "accessories-3",
    name: "Patterned Scarf",
    description: "Soft, versatile scarf with a unique pattern.",
    longDescription:
      "Add a touch of color and texture to any outfit with our patterned scarf. The lightweight fabric makes it perfect for year-round wear, while the generous size allows for multiple styling options. The unique pattern adds visual interest to simple outfits, and the soft touch ensures comfort throughout the day. A versatile accessory for both practical warmth and style enhancement.",
    price: 29.99,
    salePrice: 19.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[2]),
    rating: 4.6,
    reviews: 42,
    sizes: ["One Size"],
    colors: ["Multicolor", "Blue", "Red"],
    inStock: true,
    sale: true,
    material: "100% Viscose",
    date: "2023-01-25",
  },
  {
    id: "accessories-4",
    name: "Leather Belt",
    description: "Classic leather belt with a timeless buckle design.",
    longDescription:
      "Our leather belt combines timeless style with everyday functionality. Crafted from genuine leather, this belt features a classic buckle design and a versatile width that works with both casual and formal attire. The durable construction ensures longevity, while the simple design makes it a wardrobe essential that will never go out of style.",
    price: 34.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[3]),
    rating: 4.7,
    reviews: 56,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Tan"],
    inStock: true,
    material: "Genuine Leather",
    date: "2023-04-05",
  },
  {
    id: "accessories-5",
    name: "Aviator Sunglasses",
    description: "Classic aviator sunglasses with UV protection.",
    longDescription:
      "Our aviator sunglasses combine iconic style with modern functionality. The classic teardrop shape flatters most face shapes, while the metal frame ensures durability. The lenses provide 100% UV protection to keep your eyes safe from harmful rays. These versatile sunglasses add a touch of timeless cool to any outfit, from casual to dressy.",
    price: 59.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[4]),
    rating: 4.5,
    reviews: 78,
    sizes: ["One Size"],
    colors: ["Gold/Green", "Silver/Blue", "Black/Gray"],
    inStock: true,
    featured: true,
    material: "Metal Frame, Polycarbonate Lenses",
    date: "2023-05-20",
  },
  {
    id: "accessories-6",
    name: "Beanie Hat",
    description: "Warm knit beanie for cold weather comfort.",
    longDescription:
      "Stay warm and stylish with our knit beanie hat. The soft, stretchy fabric provides comfort and warmth during cold weather, while the classic design complements any winter outfit. The ribbed knit creates a snug fit that stays in place, and the cuffed edge allows for adjustable coverage. Available in multiple colors to match your personal style.",
    price: 19.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[5]),
    rating: 4.4,
    reviews: 45,
    sizes: ["One Size"],
    colors: ["Black", "Gray", "Navy", "Burgundy"],
    inStock: true,
    new: true,
    material: "100% Acrylic",
    date: "2023-09-10",
  },
  {
    id: "accessories-7",
    name: "Leather Wallet",
    description: "Slim leather wallet with multiple card slots.",
    longDescription:
      "Our slim leather wallet combines functionality with elegant design. Crafted from genuine leather, this wallet features multiple card slots, a bill compartment, and an ID window for organization. The compact size fits comfortably in pockets without bulk, while the quality construction ensures durability for years of use. A practical yet sophisticated accessory for everyday carry.",
    price: 39.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[6]),
    rating: 4.8,
    reviews: 92,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Navy"],
    inStock: true,
    material: "Genuine Leather",
    date: "2023-03-30",
  },
  {
    id: "accessories-8",
    name: "Statement Necklace",
    description: "Bold statement necklace to elevate any outfit.",
    longDescription:
      "Make a statement with our eye-catching necklace. The bold design adds instant interest to simple outfits, while the adjustable chain allows for versatile styling. The quality materials ensure durability and comfort throughout the day. Perfect for special occasions or adding a touch of glamour to everyday looks, this necklace is sure to become a favorite in your jewelry collection.",
    price: 45.99,
    salePrice: 29.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[7]),
    rating: 4.6,
    reviews: 38,
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Rose Gold"],
    inStock: true,
    sale: true,
    material: "Mixed Metals",
    date: "2023-02-15",
  },
  {
    id: "accessories-9",
    name: "Canvas Backpack",
    description: "Durable canvas backpack with multiple compartments.",
    longDescription:
      "Our canvas backpack combines style and functionality for everyday use. The spacious main compartment accommodates laptops and books, while multiple smaller pockets keep your essentials organized. The padded shoulder straps provide comfort during extended wear, and the durable canvas construction ensures longevity. Perfect for work, school, or weekend adventures.",
    price: 49.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[8]),
    rating: 4.7,
    reviews: 74,
    sizes: ["One Size"],
    colors: ["Gray", "Navy", "Olive", "Black"],
    inStock: true,
    material: "Canvas, Leather Trim",
    date: "2023-06-15",
  },
  {
    id: "accessories-10",
    name: "Silk Scarf",
    description: "Luxurious silk scarf with a vibrant print.",
    longDescription:
      "Add a touch of luxury to any outfit with our silk scarf. The smooth, lightweight fabric drapes beautifully, while the vibrant print adds a pop of color and visual interest. The versatile size allows for multiple styling options - wear it around your neck, as a headband, tied to a handbag, or even as a belt. This elegant accessory elevates both casual and formal looks.",
    price: 69.99,
    category: "Accessories",
    images: Array(4).fill(accessoriesImages[9]),
    rating: 4.9,
    reviews: 52,
    sizes: ["One Size"],
    colors: ["Multicolor", "Blue/Gold", "Red/Black"],
    inStock: true,
    featured: true,
    material: "100% Silk",
    date: "2023-04-25",
  },
]

// Footwear products
const footwearProducts = [
  {
    id: "footwear-1",
    name: "Leather Sneakers",
    description: "Classic leather sneakers with a comfortable fit.",
    longDescription:
      "Our leather sneakers combine timeless style with modern comfort. The premium leather upper provides durability and a polished appearance, while the cushioned insole ensures all-day comfort. The rubber outsole offers excellent traction and flexibility. These versatile sneakers pair perfectly with both casual and smart-casual outfits.",
    price: 89.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[0]),
    rating: 4.8,
    reviews: 124,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Brown"],
    inStock: true,
    featured: true,
    material: "Genuine Leather, Rubber Sole",
    date: "2023-03-10",
  },
  {
    id: "footwear-2",
    name: "Running Shoes",
    description: "Lightweight running shoes with responsive cushioning.",
    longDescription:
      "Designed for performance and comfort, our running shoes feature responsive cushioning that returns energy with every step. The breathable mesh upper keeps your feet cool during intense workouts, while the durable rubber outsole provides excellent traction on various surfaces. The supportive midsole reduces impact and enhances stability for a smooth running experience.",
    price: 79.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[1]),
    rating: 4.7,
    reviews: 98,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black/Red", "Blue/White", "Gray/Yellow"],
    inStock: true,
    material: "Synthetic Mesh, Rubber Sole",
    date: "2023-05-15",
  },
  {
    id: "footwear-3",
    name: "Ankle Boots",
    description: "Stylish ankle boots with a comfortable block heel.",
    longDescription:
      "Our ankle boots combine style and comfort for everyday wear. The modest block heel provides stability and elevation, while the cushioned insole ensures comfort throughout the day. The side zipper allows for easy on and off, and the durable construction promises longevity. These versatile boots pair beautifully with jeans, skirts, or dresses across multiple seasons.",
    price: 99.99,
    salePrice: 79.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[2]),
    rating: 4.6,
    reviews: 76,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Brown", "Tan"],
    inStock: true,
    sale: true,
    material: "Synthetic Leather, Rubber Sole",
    date: "2023-02-20",
  },
  {
    id: "footwear-4",
    name: "Canvas Slip-Ons",
    description: "Casual canvas slip-on shoes for effortless style.",
    longDescription:
      "Our canvas slip-on shoes offer effortless style and comfort for casual outings. The lightweight canvas upper provides breathability, while the cushioned footbed ensures all-day comfort. The elastic side gores allow for easy on and off, and the durable rubber outsole offers reliable traction. These versatile shoes pair perfectly with shorts, jeans, or casual pants.",
    price: 39.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[3]),
    rating: 4.5,
    reviews: 87,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Navy", "Gray", "White"],
    inStock: true,
    material: "Canvas, Rubber Sole",
    date: "2023-06-05",
  },
  {
    id: "footwear-5",
    name: "Leather Loafers",
    description: "Classic leather loafers for a polished look.",
    longDescription:
      "Our leather loafers combine timeless style with exceptional comfort. The premium leather upper molds to your foot for a custom fit, while the cushioned insole provides support throughout the day. The slip-on design offers convenience, and the durable construction ensures these loafers will remain a staple in your wardrobe for years to come. Perfect for both business and smart-casual settings.",
    price: 109.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[4]),
    rating: 4.9,
    reviews: 65,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown", "Burgundy"],
    inStock: true,
    featured: true,
    material: "Genuine Leather, Leather Sole",
    date: "2023-01-30",
  },
  {
    id: "footwear-6",
    name: "Hiking Boots",
    description: "Durable hiking boots with excellent traction.",
    longDescription:
      "Conquer any trail with our durable hiking boots. The waterproof upper keeps your feet dry in wet conditions, while the rugged outsole provides excellent traction on varied terrain. The padded collar and tongue enhance comfort, and the supportive midsole reduces fatigue during long hikes. These reliable boots are essential for outdoor enthusiasts seeking performance and protection.",
    price: 129.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[5]),
    rating: 4.8,
    reviews: 92,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Brown", "Gray/Orange", "Black"],
    inStock: true,
    new: true,
    material: "Waterproof Leather, Rubber Sole",
    date: "2023-08-10",
  },
  {
    id: "footwear-7",
    name: "Ballet Flats",
    description: "Elegant ballet flats for comfortable everyday wear.",
    longDescription:
      "Our ballet flats combine elegance with everyday comfort. The soft, flexible upper moves with your foot, while the lightly padded insole provides cushioning throughout the day. The classic design pairs beautifully with both casual and dressier outfits, making these flats a versatile addition to any wardrobe. The durable construction ensures they maintain their shape and comfort with regular wear.",
    price: 49.99,
    salePrice: 39.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[6]),
    rating: 4.6,
    reviews: 78,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Nude", "Red", "Navy"],
    inStock: true,
    sale: true,
    material: "Synthetic Leather, Rubber Sole",
    date: "2023-04-15",
  },
  {
    id: "footwear-8",
    name: "Athletic Sandals",
    description: "Comfortable athletic sandals with adjustable straps.",
    longDescription:
      "Our athletic sandals are designed for comfort and versatility in warm weather. The contoured footbed provides arch support and cushioning, while the multiple adjustable straps ensure a secure, customized fit. The durable outsole offers excellent traction on various surfaces, making these sandals perfect for walking, light hiking, or water activities.",
    price: 59.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[7]),
    rating: 4.5,
    reviews: 56,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Gray/Blue", "Brown"],
    inStock: true,
    material: "Synthetic, Rubber Sole",
    date: "2023-05-25",
  },
  {
    id: "footwear-9",
    name: "Dress Shoes",
    description: "Elegant dress shoes for formal occasions.",
    longDescription:
      "Our dress shoes combine classic style with modern comfort for formal occasions. The polished leather upper creates a sophisticated appearance, while the cushioned insole ensures comfort during extended wear. The leather sole provides a traditional look and feel, and the quality construction promises durability. These timeless shoes are perfect for business settings, special events, or formal gatherings.",
    price: 119.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[8]),
    rating: 4.7,
    reviews: 48,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown"],
    inStock: true,
    material: "Genuine Leather, Leather Sole",
    date: "2023-03-20",
  },
  {
    id: "footwear-10",
    name: "Casual Sneakers",
    description: "Versatile casual sneakers for everyday comfort.",
    longDescription:
      "Our casual sneakers offer the perfect blend of style and comfort for everyday wear. The breathable upper keeps your feet cool, while the cushioned midsole provides support and shock absorption. The durable rubber outsole ensures reliable traction on various surfaces. These versatile sneakers pair effortlessly with jeans, shorts, or casual pants for a laid-back, stylish look.",
    price: 69.99,
    category: "Footwear",
    images: Array(4).fill(footwearImages[9]),
    rating: 4.6,
    reviews: 104,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray", "Navy"],
    inStock: true,
    featured: true,
    material: "Canvas, Synthetic, Rubber Sole",
    date: "2023-02-10",
  },
]

// Combine all products
export const products = [...mensProducts, ...womensProducts, ...accessoriesProducts, ...footwearProducts]

// Generate categories
export const categories: Category[] = [
  {
    id: "category-1",
    name: "Men",
    slug: "men",
    description: "Stylish clothing for men",
    image: categoryImages[0],
    productCount: products.filter((p) => p.category === "Men").length,
  },
  {
    id: "category-2",
    name: "Women",
    slug: "women",
    description: "Elegant clothing for women",
    image: categoryImages[1],
    productCount: products.filter((p) => p.category === "Women").length,
  },
  {
    id: "category-3",
    name: "Casual",
    slug: "casual",
    description: "Comfortable casual wear",
    image: categoryImages[2],
    productCount: products.filter((p) => p.category === "Casual").length,
  },
  {
    id: "category-4",
    name: "Formal",
    slug: "formal",
    description: "Sophisticated formal attire",
    image: categoryImages[3],
    productCount: products.filter((p) => p.category === "Formal").length,
  },
  {
    id: "category-5",
    name: "Accessories",
    slug: "accessories",
    description: "Stylish accessories to complete your look",
    image: categoryImages[4],
    productCount: products.filter((p) => p.category === "Accessories").length,
  },
  {
    id: "category-6",
    name: "Footwear",
    slug: "footwear",
    description: "Quality footwear for every occasion",
    image: categoryImages[5],
    productCount: products.filter((p) => p.category === "Footwear").length,
  },
]

export const featuredProducts = products.filter((product) => product.featured)
export const newArrivals = products.filter((product) => product.new)
export const saleProducts = products.filter((product) => product.sale)

export function getProducts() {
  return products
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function getCategories() {
  return categories
}

// Update the getCategory and getProductsByCategory functions
export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug) || null
}

export function getProductsByCategory(categorySlug: string) {
  const category = categories.find((c) => c.slug === categorySlug)
  if (!category) return []

  // Make the category name comparison case-insensitive
  return products.filter((product) => product.category.toLowerCase() === category.name.toLowerCase())
}
