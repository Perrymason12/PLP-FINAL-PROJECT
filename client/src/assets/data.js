import logoImg from "./logo.svg";
import search from "./search.svg";
import user from "./user.svg";
import menu from "./menu.svg";
import menuClose from "./menu-close.svg";
import cartAdd from "./cart-add.svg";
import cartRemove from "./cart-remove.svg";
import cartAdded from "./cart-added.svg";
import forward from "./forward.svg";
import badge from "./badge.svg";
import heartAdd from "./heart-add.svg";
import returnRequest from "./return-request.svg";
import delivery from "./delivery.svg";
import secure from "./secure.svg";
import right from "./right.svg";
import pin from "./pin.svg";
import star from "./star.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import rocket from "./rocket.svg";
import mail from "./mail.svg";
import phone from "./phone.svg";
import house from "./house.svg";
import graph from "./graph.svg";
import dollar from "./dollar.svg";
import map from "./map.svg";
import list from "./list.svg";
import dashboard from "./dashboard.svg";
import plus from "./plus.svg";
import squarePlus from "./square-plus.svg";
import minus from "./minus.svg";
import trash from "./trash.svg";
import hero from "./hero.jpg";
import features1 from "../assets/features1.jpg";
import features2 from "../assets/features2.jpg";
import userImg from "./user.png";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import user4 from "./user4.png";
import uploadIcon from "../assets/upload_icon.png";
// Products
import product_1 from "./product_1.png";
import product_2_1 from "./product_2_1.png";
import product_2_2 from "./product_2_2.png";
import product_2_3 from "./product_2_3.png";
import product_2_4 from "./product_2_4.png";
import product_3 from "./product_3.png";
import product_4 from "./product_4.png";
import product_5 from "./product_5.png";
import product_6 from "./product_6.png";
import product_7 from "./product_7.png";
import product_8 from "./product_8.png";
import product_9 from "./product_9.png";
import product_10 from "./product_10.png";
import product_11 from "./product_11.png";
import product_12 from "./product_12.png";
import product_13 from "./product_13.png";
import product_14 from "./product_14.png";
import product_15 from "./product_15.png";
import product_16 from "./product_16.png";
import product_17 from "./product_17.png";
import product_18 from "./product_18.png";
import product_19 from "./product_19.png";
import product_20 from "./product_20.png";
import product_21 from "./product_21.png";
import product_22 from "./product_22.png";
import product_23 from "./product_23.png";
import product_24 from "./product_24.png";
import product_25 from "./product_25.png";
import product_26 from "./product_26.png";
import product_27 from "./product_27.png";
import product_28 from "./product_28.png";
import product_29 from "./product_29.png";
import product_30 from "./product_30.png";
import product_31 from "./product_31.png";
import product_32 from "./product_32.png";
import product_33 from "./product_33.png";
import product_34 from "./product_34.png";
import product_35 from "./product_35.png";
import product_36 from "./product_36.png";
import product_37 from "./product_37.png";
import product_38 from "./product_38.png";
import product_39 from "./product_39.png";
import product_40 from "./product_40.png";
import product_41 from "./product_41.png";
import product_42 from "./product_42.png";
import product_43 from "./product_43.png";
import product_44 from "./product_44.png";
import product_45 from "./product_45.png";
import product_46 from "./product_46.png";
import product_47 from "./product_47.png";
import product_48 from "./product_48.png";
import product_49 from "./product_49.png";
import product_50 from "./product_50.png";
import product_51 from "./product_51.png";
import product_52 from "./product_52.png";
import product_53 from "./product_53.png";
import product_54 from "./product_54.png";
// Blogs
import blog1 from "./blogs/blog1.jpg";
import blog2 from "./blogs/blog2.jpg";
import blog3 from "./blogs/blog3.jpg";
import blog4 from "./blogs/blog4.jpg";
import blog5 from "./blogs/blog5.jpg";
import blog6 from "./blogs/blog6.jpg";
import blog7 from "./blogs/blog7.jpg";
import blog8 from "./blogs/blog8.jpg";

export const assets = {
  logoImg,
  search,
  user,
  menu,
  menuClose,
  cartAdd,
  cartRemove,
  cartAdded,
  forward,
  badge,
  heartAdd,
  returnRequest,
  delivery,
  secure,
  right,
  pin,
  star,
  facebook,
  instagram,
  twitter,
  linkedin,
  rocket,
  mail,
  phone,
  dollar,
  house,
  graph,
  map,
  dashboard,
  plus,
  minus,
  squarePlus,
  trash,
  list,
  userImg,
  user1,
  user2,
  user3,
  user4,
  hero,
  features1,
  features2,
  uploadIcon,
};


export const dummyProducts = [
  {
    _id: "1",
    title: "Agricultural Forklift",
    images: [product_1],
    price: { "50m": 15, "100m": 25, "200m": 40 },
    description:
      "The Heavy-Duty Agricultural Forklift is built to handle tough farm tasks with ease. Designed for lifting and transporting produce, feed, equipment, and supplies, it combines strength, stability, and efficiency. With durable tires for rough terrain and smooth hydraulic control, this forklift ensures safe and effortless handling in any farm environment.",
    category: "tracks",
    type: "tools",
    sizes: ["50m", "100m", "200m"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "2",
    title: " Farm Tractor",
    images: [product_2_1, product_2_2, product_2_3, product_2_4],
    price: { "G-10": 20, "G-20": 35, "G-40": 50 },
    description:
      "The High-Performance Farm Tractor is built for power, reliability, and versatility on the field. Perfect for plowing, tilling, hauling, and other heavy farm duties, it delivers strong performance with excellent fuel efficiency. Its durable tires and sturdy frame ensure stability on all terrains, while the comfortable operator platform makes long working hours easier.",
    category: "machinery",
    type: "track",
    sizes: ["G-10", "G-20", "G-40"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "3",
    title: "Heavy-Duty Rotavator",
    images: [product_3],
    price: { "30m": 25, "50m": 40, "100m": 60 },
    description:
      "The Heavy-Duty Rotavator is designed for efficient soil preparation. It breaks, mixes, and levels the soil in one pass, saving time and fuel. Built with strong blades and a durable frame, it ensures smooth operation and long-lasting performance in all field conditions.",
    category: "machinery",
    type: "tools",
    sizes: ["30m", "50m", "100m"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "4",
    title: "Disc Harrow",
    images: [product_4],
    price: { "50m": 18, "100m": 30, "200m": 45 },
    description:
      "The Disc Harrow is a durable and efficient soil preparation implement designed for use with tractors. Built with high-quality steel and precision-engineered concave discs, this tool is perfect for breaking up soil clods, mixing crop residues, and leveling the land before planting. Its sturdy frame and corrosion-resistant finish ensure long-lasting performance even under tough field conditions.",
    category: "machinery",
    type: "tools",
    sizes: ["50m", "100m", "200m"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "5",
    title: "Sledge Hammer",
    images: [product_5],
    price: { "Small": 22, "Medium": 38, "Large": 55 },
    description:
      "The Sledge Hammer is a powerful, multi-purpose striking tool designed for demanding construction, metalworking, and agricultural tasks. Featuring a forged steel head and a durable fiberglass handle, it delivers maximum impact force while reducing vibration and user fatigue. Ideal for breaking stones, driving stakes, and demolition work, this hammer is built for both professional and farm use.",
    category: "machinery",
    type: "tools",
    sizes: ["Small", "Medium", "Large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "6",
    title: "Cordless Electric Drill",
    images: [product_6],
    price: { "small": 28, "medium": 45, "large": 65 },
    description:
      "The Cordless Electric Drill is a powerful, versatile tool designed for drilling and screw-driving tasks in wood, metal, and plastic. Equipped with a rechargeable lithium-ion battery and a high-torque motor, it delivers reliable performance for both DIY projects and professional jobs. Its ergonomic design and lightweight body ensure comfort and control during extended use.",
    category: "machinery",
    type: "tools",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "7",
    title: "Wheelbarrow",
    images: [product_7],
    price: { "Small": 12, "Medium": 20, "Large": 35 },
    description:
      "The Heavy-Duty Wheelbarrow is perfect for carrying soil, manure, tools, and farm produce with ease. Built with a strong steel tray and a sturdy wheel, it ensures smooth movement and excellent balance on all terrains. Ideal for everyday farm and garden work.",
    category: "machinery",
    type: "tools",
    sizes: ["Small", "Meduim", "Large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "8",
    title: "Protective Farming Gloves",
    images: [product_8],
    price: { "Small": 25, "Medium": 40, "Large": 60 },
    description:
      "These Protective Farming Gloves provide comfort, grip, and safety during farm work. Made with durable rubber coating and breathable fabric, they keep your hands protected from dirt, chemicals, and rough surfaces while ensuring flexibility and ease of movement.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["Small", "Medium", "Large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "9",
    title: "Garden Hand Trowel",
    images: [product_9],
    price: { "small": 30, "medium": 50, "large": 75 },
    description:
      "The Garden Hand Trowel is a must-have tool for planting, digging, and soil mixing. Its strong steel blade and comfortable wooden handle ensure easy handling and long-lasting performance, making garden and farm work smoother and more efficient.",
    category: "machinery",
    type: "tools",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "10",
    title: "Broiler Starter Poultry Feed",
    images: [product_10],
    price: { "50kg": 40, "100kg": 60, "200kg": 85 },
    description:
      "RN Feeds Broiler Starter is a high-quality poultry feed specially formulated to promote rapid growth and strong development in young broiler chicks. Packed with essential proteins, vitamins, and minerals, it ensures healthy weight gain, boosts immunity, and improves feed efficiency during the early growth stages. Ideal for farmers aiming for healthy, fast-growing broilers.",
    category: "chicken",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "11",
    title: "Bio Earn Poultry Feed Additive",
    images: [product_11],
    price: { "50kg": 45, "100kg": 65, "200kg": 90 },
    description:
      "Bio Earn Special for Poultry is a premium mixed feed additive designed to enhance the overall health, productivity, and growth of poultry. It contains a balanced blend of vitamins, minerals, and probiotics that improve digestion, strengthen immunity, and promote better egg and meat quality. Suitable for all types of poultry including chicks, layers, broilers, and quails.",
    category: "chicken",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "12",
    title: "Quality Animal Feeds",
    images: [product_12],
    price: { "50kg": 35, "100kg": 55, "200kg": 80 },
    description:
      "Mole Valley Farmers Quality Animal Feeds provide a balanced and nutritious diet for a variety of livestock, including cattle, sheep, pigs, and poultry. Formulated with premium ingredients, this feed supports healthy growth, improved productivity, and overall animal well-being. Ideal for both small-scale and commercial farmers looking to maintain strong, healthy animals.",
    category: "universal",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "13",
    title: "Grain Ultimate Scratch",
    images: [product_13],
    price: { "50kg": 42, "100kg": 62, "200kg": 88 },
    description:
      "The 7-Grain Ultimate Scratch is a premium, all-natural poultry treat crafted with non-GMO grains. It provides a healthy and engaging way for chickens to forage, promoting natural behavior and better nutrition. Perfect as a daily supplement to boost your flock’s energy and happiness.",
    category: "chicken",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "14",
    title: "Sunway Compound Cow Feed",
    images: [product_14],
    price: { "50kg": 38, "100kg": 58, "200kg": 82 },
    description:
      "Boost your dairy or beef cattle’s nutrition with YDAWAY Sunway Compound Feed for Cows. Formulated to support healthy growth, improved milk production, and overall animal wellbeing, this premium 25kg feed blend provides balanced nutrients essential for daily feeding. Ideal for farmers seeking reliable, high-quality cow feed for optimal herd performance.",
    category: "cow",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "15",
    title: "Backbone Broiler Grower Feed",
    images: [product_15],
    price: { "50kg": 44, "100kg": 64, "200kg": 89 },
    description:
      "Support fast and healthy broiler growth with Backbone Broiler Grower Feed No. 511. Designed for chicks aged 21–28 days, this pelleted feed provides balanced nutrition to enhance weight gain, immunity, and overall flock performance. Packaged in a 50kg bag, it’s ideal for poultry farmers aiming for strong, uniform birds during the grower stage.",
    category: "chicken",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "16",
    title: "Sunway Compound Chicken Feed",
    images: [product_16],
    price: { "50kg": 36, "100kg": 56, "200kg": 81 },
    description:
      "Ensure healthy growth and better egg production with YDAWAY Sunway Compound Feed for Chicken. This premium 25kg feed blend is formulated with essential nutrients to support strong development, enhanced immunity, and overall poultry performance. Ideal for both layer and broiler farmers looking for balanced, high-quality daily chicken nutrition.",
    category: "chicken",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "17",
    title: "Sunway Compound Pig Fee",
    images: [product_17],
    price: { "50kg": 48, "100kg": 70, "200kg": 95 },
    description:
      "YDAWAY Sunway Compound Feed for Pigs is a premium-quality, nutritionally balanced feed designed to support healthy growth, strong immunity, and optimal weight gain in pigs. Formulated with essential vitamins, minerals, and proteins, this 25kg bag ensures your pigs receive complete nourishment for superior farm productivity. Perfect for all pig breeds and growth stages.",
    category: "pig",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "18",
    title: "Goat Performance Feed",
    images: [product_18],
    price: { "50kg": 39, "100kg": 59, "200kg": 84 },
    description:
      "Show-Rite Goat Performance Feed is a premium nutrition blend specially crafted for show goats. Formulated to enhance muscle development, coat shine, and digestive health, this feed ensures optimal performance and presentation in the show ring. Enriched with balanced vitamins, minerals, and essential nutrients, it supports growth, stamina, and overall vitality in goats of all ages. Perfect for competitive and exhibition-quality livestock.",
    category: "goat",
    type: "feeds",
    sizes: ["50kg", "100kg", "200kg"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "19",
    title: "FarmEats Cattle Cube",
    images: [product_19],
    price: { "30kg": 25, "50kg": 40, "100kg": 60 },
    description:
      "FarmEats Cattle Cube is a high-quality 20% protein supplement feed formulated to enhance a forage-based diet for beef cattle. Made from nutrient-rich grains, it supports healthy growth, muscle development, and energy for optimal performance. Fortified with essential vitamins and minerals, including Vitamin A, this feed promotes strong immunity and overall herd health. Ideal for cattle grazing on pasture or hay-based diets.",
    category: "cow",
    type: "feeds",
    sizes: ["30kg", "50kg", "100kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "20",
    title: "Hi-Pro Premium Floating Feed",
    images: [product_20],
    price: { "30kg": 28, "50kg": 45, "100kg": 65 },
    description:
      "Hi-Pro Premium Floating Fish Feed is a high-quality, nutritionally balanced formula designed to enhance fish growth and health. With 24% protein and 4% fat, this ISO-certified feed ensures optimal digestion, better feed conversion, and reduced water pollution. Suitable for all types of freshwater fish, it provides a complete diet that supports maximum yield and performance.",
    category: "fish",
    type: "feeds",
    sizes: ["30kg", "50kg", "100kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "21",
    title: "Purina Start & Grow Medicated Crumbles",
    images: [product_21],
    price: { "30kg": 30, "50kg": 50, "100kg": 70 },
    description:
      "Purina Start & Grow Medicated Crumbles provide complete and balanced nutrition for baby chicks to help them develop into healthy, strong hens. Enriched with essential vitamins, minerals, and medication to aid in disease prevention, this feed supports steady growth, immune health, and optimal bone development. Ideal for chicks from hatch to laying age.",
    category: "chicken",
    type: "feeds",
    sizes: ["30kg", "50kg", "100kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "22",
    title: "Producer’s Pride Cracked Corn Grains",
    images: [product_22],
    price: { "30kg": 22, "50kg": 35, "100kg": 55 },
    description:
      "Producer’s Pride Cracked Corn is a premium-quality grain feed designed to provide energy and nutrition for cattle, sheep, goats, and chickens. Made from carefully cracked whole corn kernels, it offers an excellent source of carbohydrates for maintaining healthy weight and energy levels. Perfect as a feed supplement or treat for livestock and poultry.",
    category: "universal",
    type: "feeds",
    sizes: ["30kg", "50kg", "100kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "23",
    title: "Piveteau Bois Wood Pellets",
    images: [product_23],
    price: { "30kg": 32, "50kg": 52, "100kg": 75 },
    description:
      "Piveteau Bois Wood Pellets are a premium, eco-friendly biofuel made from 100% natural softwood with no additives. Designed for efficient and clean combustion, these pellets offer high heat output and minimal ash residue, making them perfect for wood pellet stoves and boilers. A sustainable heating solution for homes seeking comfort and environmental responsibility.",
    category: "rabbit",
    type: "feeds",
    sizes: ["30kg", "50kg", "100kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "24",
    title: "Hatortempt Dried Mealworms",
    images: [product_24],
    price: { "200kg": 15, "400kg": 25, "750kg": 40 },
    description:
      "Hatortempt Dried Mealworms are a premium, all-natural treat packed with 52% protein and 20% crude fat to promote strong growth and vibrant plumage in chickens, ducks, and wild birds. These nutrient-rich mealworms are raised on quality feed, ensuring top nutrition and taste that birds love. Perfect for daily feeding or as a high-protein snack.",
    category: "chicken",
    type: "feeds",
    sizes: ["200kg", "400kg", "750kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "25",
    title: "HimTOX-R Animal Feed Supplement",
    images: [product_25],
    price: { "200kg": 18, "400kg": 30, "750kg": 45 },
    description:
      "HimTOX-R is a premium animal feed supplement formulated as a powerful toxin binder and mould inhibitor. Designed to improve feed quality and protect livestock from harmful mycotoxins, it supports better health, immunity, and productivity in cattle, poultry, goats, pigs, and fish. Ideal for maintaining safe and effective feeding practices in all types of farms.",
    category: "universal",
    type: "feeds",
    sizes: ["200kg", "400kg", "750kg"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "26",
    title: "Kalmbach Feeds Goat Granola",
    images: [product_26],
    price: { "200kg": 20, "400kg": 35, "750kg": 50 },
    description:
      "Kalmbach Goat Granola is an all-natural, premium blend of whole grains and high-quality ingredients specially formulated to meet the nutritional needs of all classes of goats. Rich in essential vitamins, minerals, and probiotics, it promotes healthy growth, digestion, and overall vitality. Delicious and nutritious, this feed keeps goats happy and thriving.",
    category: "goat",
    type: "feeds",
    sizes: ["200kg", "400kg", "750kg"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "27",
    title: "Chirag Calf Starter",
    images: [product_27],
    price: { "200kg": 16, "400kg": 28, "750kg": 42 },
    description:
      "Chirag Calf Starter is a high-quality, nutritionally balanced feed designed to support the healthy growth and early development of calves. Formulated with essential vitamins, minerals, and proteins, it promotes better digestion, immunity, and muscle development, ensuring a strong foundation for future productivity.",
    category: "cow",
    type: "feeds",
    sizes: ["200kg", "400kg", "750kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "28",
    title: "Manikaran Balanced Cattle Feed",
    images: [product_28],
    price: { "200kg": 19, "400kg": 32, "750kg": 48 },
    description:
      "Manikaran Balanced Cattle Feed 5000 is a premium nutritional formula designed to enhance milk yield, health, and overall performance in dairy cattle. Enriched with essential vitamins, minerals, and proteins, it promotes better digestion, improved immunity, and sustained energy levels for productive and healthy livestock.",
    category: "cow",
    type: "feeds",
    sizes: ["200kg", "400kg", "750kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "29",
    title: "Nand Feed Premium Cattle Feed",
    images: [product_29],
    price: { "150kg": 12, "250kg": 20, "500kg": 35 },
    description:
      "Nand Feed Premium Cattle Feed 5000 is a high-performance, nutritionally balanced formula crafted to support maximum milk yield, strong immunity, and overall health in dairy cattle. Made from high-quality ingredients and fortified with essential vitamins, minerals, and proteins, it ensures consistent productivity and animal well-being.",
    category: "cow",
    type: "feeds",
    sizes: ["150kg", "250kg", "500kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "30",
    title: "Alltreat Naturals Composted Cattle Manure",
    images: [product_30],
    price: { "150kg": 14, "250kg": 22, "500kg": 38 },
    description:
      "Alltreat Naturals Composted Cattle Manure is an organic, nutrient-rich soil amendment made from CQA-certified compost. Ideal for growing healthy vegetables, flowers, lawns, and trees, it improves soil structure, enhances moisture retention, and provides a balanced source of nutrients for sustained plant growth. Safe, natural, and eco-friendly.",
    category: "manure",
    type: "fertilizer",
    sizes: ["150kg", "250kg", "500kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "31",
    title: "Manna Pro Chick Grit with Probiotics",
    images: [product_31],
    price: { "150kg": 13, "250kg": 21, "500kg": 36 },
    description:
      "Manna Pro Chick Grit is a natural digestive supplement crafted with probiotics to support the healthy digestion and development of young poultry and bantam breeds. Made from small-sized, insoluble crushed granite, it helps chicks efficiently grind and process feed while promoting gut health for strong growth.",
    category: "chicken",
    type: "feeds",
    sizes: ["150kg", "250kg", "500kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "32",
    title: "Purina Dairy Goat Feed",
    images: [product_32],
    price: { "150kg": 15, "250kg": 25, "500kg": 40 },
    description:
      "Purina Dairy Goat Feed is a high-quality, nutritionally balanced formula designed to support milk production, body condition, and overall health in lactating goats. Fortified with essential vitamins, minerals, and energy-rich ingredients, it promotes strong bones, a healthy immune system, and consistent milk yield for dairy goats of all breeds.",
    category: "goat",
    type: "feeds",
    sizes: ["150kg", "250kg", "500kg"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "33",
    title: "Allen & Page Specialist Feeds",
    images: [product_33],
    price: { "150kg": 11, "250kg": 18, "500kg": 32 },
    description:
      "Allen & Page Pygmy Goat Mix is a nutritionally balanced feed formulated to mimic the natural diet of pygmy goats. It includes alfalfa, dried fruits, vegetables, and added herbs to promote overall health, vitality, and a shiny coat. This mix supplies all essential nutrients without the use of animal products, making it a wholesome vegetarian option for goat owners.",
    category: "goat",
    type: "feeds",
    sizes: ["150kg", "250kg", "500kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "34",
    title: "Dibaq Sense Holistic Dog Food",
    images: [product_34],
    price: { "100kg": 15, "200kg": 25, "400kg": 40 },
    description:
      "Dibaq Sense Salmon is a grain-free, 100% natural holistic dog food made with 70% fresh salmon, vegetables, fruits, and herbs. Specially formulated for small adult dogs, it supports optimal digestion, joint health, and a shiny coat. With hypoallergenic ingredients and no artificial additives, it’s ideal for dogs with sensitivities or allergies.",
    category: "dog",
    type: "feeds",
    sizes: ["100kg", "200kg", "400kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "35",
    title: "Bio Magic Organic Fertilizer",
    images: [product_35],
    price: { "100kg": 18, "200kg": 30, "400kg": 45 },
    description:
      "Bio Magic is a 100% organic bio-fertilizer designed to enrich soil fertility and promote healthy plant growth. It enhances nutrient absorption, strengthens plant resistance, and increases crop yield naturally.",
    category: "Fertilizers & Soil Enhancers",
    type: "Organic Bio-Fertilizer",
    sizes: ["100kg", "200kg", "400kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "36",
    title: "Nutri Magnesium Sulphate",
    images: [product_36],
    price: { "100kg": 20, "200kg": 35, "400kg": 50 },
    description:
      "Nutri Magnesium Sulphate is a high-quality micronutrient fertilizer formulated to correct magnesium and sulphur deficiencies in crops. It promotes healthy leaf development, improves photosynthesis, and enhances crop yield when used as a foliar spray.",
    category: "Fertilizers & Soil Enhancers",
    type: "Magnesium Sulphate Foliar Fertilizer",
    sizes: ["100kg", "200kg", "400kg"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "37",
    title: "Vida Verde Fertilizer & Garden Soil",
    images: [product_37],
    price: { "100kg": 22, "200kg": 38, "400kg": 55 },
    description:
      "Vida Verde Fertilizer and Garden Soil provide essential nutrients and rich organic matter to promote healthy, vigorous plant growth. The fertilizer boosts flowering and greenery, while the garden soil enhances root development and improves soil texture — perfect for both indoor and outdoor plants.",
    category: "Fertilizers & Soil Enhancers",
    type: "Organic Fertilizer",
    sizes: ["100kg", "200kg", "400kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "38",
    title: "Sta-Green Natural Base Fertilizer",
    images: [product_38],
    price: { "100kg": 16, "200kg": 28, "400kg": 42 },
    description:
      "Sta-Green Natural Base Fertilizer is a 2-in-1 slow-release formula that nourishes your lawn while improving soil health. Enriched with humic acid, sea kelp, and protein hydrolysates, it strengthens grass against seasonal stress and provides up to two months of extended feeding. Eco-friendly and non-burning, it’s safe for all grass types.",
    category: "Fertilizers & Soil Enhancers",
    type: "Lawn Fertilizer",
    sizes: ["100kg", "200kg", "400kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "39",
    title: "Fertilita AMINO80 Organic Fertilizer",
    images: [product_39],
    price: { "250kg": 10, "500kg": 18, "1000kg": 30 },
    description:
      "Fertilita AMINO80 is an OMRI-listed organic fertilizer formulated with amino acids to enhance plant growth, root development, and soil health. Suitable for organic farming, it provides natural nutrition that supports strong, healthy crops and improves nutrient absorption efficiency.",
    category: "Fertilizers & Soil Enhancers",
    type: "Organic Amino Acid Fertilizer",
    sizes: ["250kg", "500kg", "1000kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "40",
    title: "Hydro Agri NPK 20-20-10 Fertilizer",
    images: [product_40],
    price: { "250kg": 12, "500kg": 20, "1000kg": 35 },
    description:
      "Hydro Agri NPK 20-20-10 is a balanced granular fertilizer designed to supply essential nutrients — nitrogen, phosphorus, and potassium — for optimal crop growth. Ideal for cereals, vegetables, and fruit crops, it promotes strong root development, lush foliage, and higher yields.",
    category: "Fertilizers & Soil Enhancers",
    type: "Compound NPK Fertilizer",
    sizes: ["250kg", "500kg", "1000kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "41",
    title: "Hi-Pro PolyFeed Sinking Fish Feed",
    images: [product_41],
    price: { "250kg": 11, "500kg": 19, "1000kg": 32 },
    description:
      "A high-quality sinking fish feed formulated to support healthy growth and improved immunity in fish and prawns. Ideal for commercial aquaculture, providing balanced protein and essential nutrients for optimal performance.",
    category: "fish",
    type: "feeds",
    sizes: ["250kg", "500kg", "1000kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "42",
    title: "Sta-Green Lawn Starter Fertilizer + Soil Conditioner",
    images: [product_42],
    price: { "250kg": 13, "500kg": 22, "1000kg": 38 },
    description:
      "A premium 2-in-1 lawn starter fertilizer enriched with soil conditioners to boost seed germination and promote fast, healthy grass growth. Ideal for establishing new lawns and strengthening young grass.",
    category: "Fertilizers & Soil Enhancers",
    type: "Lawn Starter Fertilizer",
    sizes: ["250kg", "500kg", "1000kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "43",
    title: "Engro DAP Fertilizer",
    images: [product_43],
    price: { "250kg": 14, "500kg": 24, "1000kg": 40 },
    description:
      "A high-phosphorus DAP fertilizer formulated to support strong root development and healthy crop establishment. Ideal for use at planting to boost early growth and improve productivity across a wide range of crops.",
    category: "Fertilizers & Soil Enhancers",
    type: "DAP Fertilizer",
    sizes: ["250kg", "500kg", "1000kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "44",
    title: "Biocare PROSIL Fertilizer",
    images: [product_44],
    price: { "3kg": 15, "5kg": 25 },
    description:
      "Biocare PROSIL is a premium multi-nutrient fertilizer enriched with essential micro and macro elements like Silicon (Si), Copper (Cu), Magnesium (Mg), Sulphur (Su), Iron (Fe), and Boron (Bn). It promotes healthy plant growth, improves crop yield, and enhances resistance to stress and disease.",
    category: "Fertilizers & Soil Enhancers",
    type: "Micronutrient Fertilizer",
    sizes: ["3kg", "5kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "45",
    title: "Sanyuanjiuqi Urea N46",
    images: [product_45],
    price: { "4kg": 10, "8kg": 18 },
    description:
      "Urea N46 is a high-quality nitrogen fertilizer containing 46% nitrogen, ideal for promoting vigorous plant growth and lush green foliage. It features low moisture content and fine white granules for easy application and quick nutrient absorption.",
    category: "Fertilizers & Soil Enhancers",
    type: "Nitrogen Fertilizer",
    sizes: ["4kg", "8kg"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "46",
    title: "Motorized Wheelbarrow Sprayer",
    images: [product_46],
    price: { "small": 12, "big": 20 },
    description:
      "A powerful, wheeled sprayer with a large capacity tank for efficient and less labor-intensive application of pesticides, herbicides, or fertilizers across medium to large crop areas.",
    category: "machinery",
    type: "tools",
    sizes: ["small", "big"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "47",
    title: "Beekeeping Protective Suit",
    images: [product_47],
    price: { "small": 18, "large": 30 },
    description:
      "A durable, full-body white protective suit with a detachable veil/hood, designed to offer complete sting protection and comfort during honey harvesting and hive inspection.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "48",
    title: "Dual-Cartridge Chemical Respirator Mask",
    images: [product_48],
    price: { "small": 14, "large": 24 },
    description:
      "A professional-grade, half-face respirator with twin filters providing respiratory protection against harmful agricultural chemicals, dust, mists, and fumes during spraying or mixing operations.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "49",
    title: "Beekeeping Suit and Leather Glove Set",
    images: [product_49],
    price: { "small": 15, "medium": 25, "large": 40 },
    description:
      "A practical, tan-colored full-body beekeeping suit with an integrated hooded veil, paired with comfortable leather and canvas gloves, offering essential protection for beginner or hobbyist beekeepers.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "50",
    title: "General Purpose Work Gloves",
    images: [product_50],
    price: { "small": 12, "medium": 20, "large": 35 },
    description:
      "Durable, knit nylon gloves featuring a textured nitrile coating for excellent grip and dexterity in wet or dry conditions, ideal for harvesting, planting, and general farm maintenance tasks.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "51",
    title: "Heavy-Duty Mechanic Gloves",
    images: [product_51],
    price: { "small": 18, "medium": 30, "large": 45 },
    description:
      "Premium work gloves featuring reinforced leather palms for durability, knuckle protection, and padded fingers to guard against impact and pinching injuries during equipment repair, maintenance, or construction tasks.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "52",
    title: "Cowhide Rigger Gloves",
    images: [product_52],
    price: { "small": 14, "medium": 22, "large": 38 },
    description:
      "Heavy-duty leather palm gloves with high-visibility orange canvas backing and safety cuff. Designed for superior protection, durability, and grip for tasks involving heavy machinery operation or rough material handling.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "53",
    title: "Forestry Safety Helmet with Visor",
    images: [product_53],
    price: { "small": 20, "medium": 35, "large": 50 },
    description:
      "An all-in-one safety kit featuring an adjustable hard hat, wire mesh face shield for debris, integrated earmuffs for noise reduction, and clear protective goggles for ultimate head, eye, and hearing protection during sawing or trimming.",
    category: "Equipment & Gear",
    type: "Protective Apparel",
    sizes: ["small", "medium", "large"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "54",
    title: "EURO D-G-C™ Poultry Oral Solution",
    images: [product_54],
    price: { "100ml": 16, "200ml": 28, "400ml": 42 },
    description:
      "A veterinarian-prescribed oral solution formulated for the preventive and therapeutic treatment of gastrointestinal and respiratory tract infections caused by various micro-organisms in poultry.",
    category: "Veterinary Inputs",
    type: "Poultry Medication",
    sizes: ["100ml", "200ml", "400ml"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
];


// Blogs Dummy Data 
export const blogs = [
  {
    title: "How Technology is Transforming Agriculture",
    category: "Agricultural Innovation",
    image: blog1,
    description:
      "Discover how drones, sensors, and AI are revolutionizing farming efficiency and productivity.",
  },
  {
    title: "The Secrets to Healthy Soil: Boosting Crop Yields Naturally",
    category: "Crop Management",
    image: blog2,
    description:
      "Learn simple techniques to improve soil fertility using organic methods and sustainable practices.",
  },
  {
    title: "Climate Change and Agriculture: Adapting for the Future",
    category:"Sustainability",
    image: blog3,
    description:
      "Explore how farmers can adapt to changing weather patterns to ensure long-term food security.",
  },
  {
    title: "Top 5 Profitable Crops to Grow in 2025",
    category: "Agribusiness",
    image: blog4,
    description:
      "A guide to the most lucrative crops for small and medium-scale farmers this year.",
  },
  {
    title: "Water-Smart Farming: Efficient Irrigation Techniques",
    category: "Farm Management",
    image: blog5,
    description:
      "Learn cost-effective irrigation methods that save water while maximizing yields.",
  },
  {
    title: "From Farm to Market: How to Sell Your Produce Online",
    category: "Agricultural Marketing",
    image: blog6,
    description:
      "Step-by-step tips for farmers to start selling their products digitally and reach more customers.",
  },
  {
    title: "Livestock Health: Preventing Common Animal Diseases",
    category: "Animal Husbandry",
    image: blog7,
    description:
      "Essential tips on maintaining healthy animals and reducing disease risks on your farm.",
  },
  {
    title: "Organic Farming: The Growing Trend Toward Chemical-Free Food",
    category: "Organic Agriculture",
    image: blog8,
    description:
      "Understand the benefits and challenges of switching to organic farming methods.",
  },
];


export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "68591d36daf423db94fa8f4f",
    firstName: "user",
    lastName: "one",
    email: "userone@gmail.com",
    street: "789 Elm Street",
    city: "Springfield",
    state: "California",
    zipcode: 90210,
    country: "US",
    phone: "+1-555-123-4567",
  },
  {
     _id: "67b5b9e54ea97fdfgdbcsd5",
    userId: "68591d36daf423db94fa8f4f",
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@gmail.com",
    street: "456 Elm Street",
    city: "Metropolis",
    state: "CA",
    zipcode: "998877",
    country: "United States",
    phone: "9876543210",
  },

];


export const dummyOrdersData = [
  {
    _id: "685a5bbfaff57babcdfcc171",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        product: dummyProducts[0], // Argan Hair Oil
        quantity: 1,
        size: "50ml",
        _id: "685a5bbfaff57babcdfcc172",
      },
      {
        product: dummyProducts[3], // Tea Tree Hair Oil
        quantity: 2,
        size: "100ml",
        _id: "685a5bbfaff57babcdfcc173",
      },
    ],
    amount: 40.6,
    address: dummyAddress[0],
    status: "Out for delivery",
    paymentMethod: "COD",
    isPaid: false,
    createdAt: "2025-06-24T08:03:11.197+00:00",
    updatedAt: "2025-06-24T11:02:04.631+00:00",
    __v: 0,
  },
  {
    _id: "685a5bbfaff57babcdfcc174",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        product: dummyProducts[8], // Vitamin C Face Oil
        quantity: 1,
        size: "30ml",
        _id: "685a5bbfaff57babcdfcc175",
      },
      {
        product: dummyProducts[24], // Volumizing Shampoo
        quantity: 3,
        size: "400ml",
        _id: "685a5bbfaff57babcdfcc176",
      },
    ],
    amount: 85.0,
    address: dummyAddress[0],
    status: "Delivered",
    paymentMethod: "Online",
    isPaid: true,
    createdAt: "2025-07-01T09:15:45.197+00:00",
    updatedAt: "2025-07-01T11:30:04.631+00:00",
    __v: 0,
  },
];


// Dashboard Dummy Data
export const dummyDashboardData = {
    "totalOrders": 2,
    "totalRevenue": 897,
    "orders": dummyOrdersData
}