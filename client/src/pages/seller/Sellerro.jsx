import React, { useState } from "react";
import SellerProduct from "./SellerProduct"; // Import the component

export const Sellerro = () => {
  const [products, setProducts] = useState([
    {
      productId: 8,
      name: "Men's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/10bf6fee-cbf6-4521-94d3-a9cc394c8005.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Men'S Puffer Jacket with Hood - Winter Warmth, Casual Style, Letter Pattern, And Pockets - Conventional Fit",
      price: 9.99,
      quantity: 0,
      category: "Men",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/e3498f5a-2693-4907-a663-1083bb233762.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/077118d0301f47a049ddf5292d78cbe9.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/cd76a8e6-b80d-4617-a035-1dab9fd685eb.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/1d0b7106-8b13-43b1-ae46-7c19d8ff646c.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["M", "X"],
      reviews: [],
      available: false,
    },
    {
      productId: 4,
      name: "Women's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/open/2024-08-16/1723800050418-3182b31bb6bf489d8110993ee783bb02-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Women Contrast Color Hooded Coat, Long Sleeve Zip-up Plush Tops for Spring, Autumn",
      price: 10.99,
      quantity: 8,
      category: "Footwear",
      relatedImages: [
        "https://img.kwcdn.com/product/open/2024-06-24/1719216606849-1db49c47a77c405fac2821361f82f30c-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/open/2024-10-07/1728282702043-40a24c54453a49099347708303854525-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/c303d9c6-72a0-41fc-ad3d-aa140b35b098.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/5e1b3b1e-fd83-48f0-8004-9657ff1a3adc.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["S", "M"],
      reviews: [],
      available: true,
    },
    {
      productId: 5,
      name: "Women's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/c236766e-7e66-4450-84e3-ca1ef50bb2b9.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Milano Italy Inspired Hoodie - Casual Long Sleeve Hooded Sweatshirt with Kangaroo Pocket, Soft and Cozy Fabric, Perfect for Fall and Winter Seasons, Women's Fashion Clothing",
      price: 10.99,
      quantity: 8,
      category: "Footwear",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/3717a1e1-2abe-4ae3-9dc4-2b127656d3cb.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/2cd6a0ac-ca5b-42c8-a458-47a7df6ede55.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/586d2107-eb01-495a-9387-c24336b13f6d.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/8150fbed-f832-4e77-bdd4-0f741cdc69ad.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red", "Grey"],
      sizes: ["S", "M", "X"],
      reviews: [],
      available: false,
    },
    {
      productId: 6,
      name: "Men's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/8c3cf0a6-487a-47b5-a5a9-0e2405b61d3b.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Men's Winter Warm Fleece-Lined Casual Skate Shoes - High Top, Non-Slip Sole for Outdoor & Daily Wear",
      price: 12.99,
      quantity: 10,
      category: "Men",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/65821494-1b1c-455b-afee-35063b943f91.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/ab9ee294-59f6-415a-b404-2986e6e16f5e.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/7b7b46d2-0abc-45cc-a2e4-808aeea0bec0.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/3c69ded9-21a5-4359-84da-84049e3252c5.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red", "Grey"],
      sizes: ["S", "M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 24,
      name: "Digital Thermometer",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1-6Lkov_ChlzkzZExSw434lvlu6kvnV_ZhQSmMzN_iWOAdMCXAKF042HiAQvsvHh9Vm7FRE4TO8_QJanDnNUNp33_otjFA3OL8xlMNKmb7EPtV3Vsbjj0",
      description: "Accurate Digital Thermometer | Easy-to-Use",
      price: 12.99,
      quantity: 100,
      category: "Medicine",
      relatedImages: [
        "https://img.uline.com/is/image/uline/H-9012?$Mobile_SI$",
        "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF",
        "c_pad",
        "dpr_1.0",
        "f_auto",
        "q_auto",
        "w_700/c_pad",
        "w_700/R1365671-01",
        "https://ooni.com/cdn/shop/files/950-Digi-Thermometer.jpg?v=1685609243&width=315",
      ],
      colors: ["White", "Blue"],
      sizes: ["One Size"],
      reviews: [],
      available: true,
    },
    {
      productId: 35,
      name: "Weighted Jump Rope",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8RdYwVhI6cRkI5vleEeNqnOYsXzKwRRzMg&s",
      description: "Adjustable Weighted Jump Rope | Boosts Cardio and Strength",
      price: 14.99,
      quantity: 90,
      category: "Health",
      relatedImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYOA9T7fXy0inNfHXHpsF29TWZh9eoqPABA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPyYu-8p8gg1NebTHCr6VhZnpgwbnj6bxFg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCn9-1jb5O1PpfLUwRqpK5qmhHq9xbkryHw&s",
      ],
      colors: ["Red", "Black", "Gray"],
      sizes: ["Adjustable"],
      reviews: [],
      available: true,
    },
    {
      productId: 26,
      name: "Vitamin C Tablets",
      imageUrl:
        "https://m.media-amazon.com/images/I/711YwEZQ-HL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "High-Strength Vitamin C | Immune Support",
      price: 14.99,
      quantity: 200,
      category: "Medicine",
      relatedImages: [
        "https://m.media-amazon.com/images/I/814Te29TBKS._AC_UF480",
        "480_SR480",
        "480_.jpg",
        "https://m.media-amazon.com/images/I/81SYgT9qcDL._AC_UF480",
        "480_SR480",
        "480_.jpg",
        "https://m.media-amazon.com/images/I/41id2i739hL._AC_.jpg",
      ],
      colors: ["Orange", "White"],
      sizes: ["60 Tablets", "120 Tablets"],
      reviews: [],
      available: true,
    },
    {
      productId: 25,
      name: "Vitamin C Tablets",
      imageUrl:
        "https://m.media-amazon.com/images/I/711YwEZQ-HL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "High-Strength Vitamin C | Immune Support",
      price: 14.99,
      quantity: 200,
      category: "Medicine",
      relatedImages: [
        "https://m.media-amazon.com/images/I/814Te29TBKS._AC_UF480",
        "480_SR480",
        "480_.jpg",
        "https://m.media-amazon.com/images/I/81SYgT9qcDL._AC_UF480",
        "480_SR480",
        "480_.jpg",
        "https://m.media-amazon.com/images/I/41id2i739hL._AC_.jpg",
      ],
      colors: ["Orange", "White"],
      sizes: ["60 Tablets", "120 Tablets"],
      reviews: [
        {
          reviewId: 7,
          rating: 5,
          comment: "Outstanding product, will buy again!",
          createdAt: "2024-11-22T17:48:37.903455",
        },
      ],
      available: true,
    },
    {
      productId: 7,
      name: "Men's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/77d382caaa0762d19dc13ccda7c9bcb0.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Fall Winter Keep Warm With This Snow Shoes - Wear Resistance Non Slip Plush Lined Furry Slip On Snow Boots, Christmas Gifts, Mama Shoes",
      price: 19.99,
      quantity: 20,
      category: "Men",
      relatedImages: [
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c54135d653255040812a65bdc5ae1ea1.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/077118d0301f47a049ddf5292d78cbe9.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/71592b9134719ad22923ba6e98197cdb.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d8f737ceef9be9ccdc84b0479246ad32.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red", "Grey"],
      sizes: ["S", "M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 32,
      name: "Building Blocks Set",
      imageUrl:
        "https://generaljimstoys.com/cdn/shop/products/Family-Holiday-Modular-Toy-Building-Blocks-Bricks-Set-1-General-Jims_800x.jpg?v=1680026014",
      description: "Colorful Building Blocks | Creative and Educational Play",
      price: 24.99,
      quantity: 120,
      category: "Toys",
      relatedImages: [
        "https://m.media-amazon.com/images/I/81kjI886uDL.jpg",
        "https://greenelephanthome.com/cdn/shop/products/25961625723655_.pic_hd_800x.jpg?v=1626200864",
        "https://img.lakeshorelearning.com/is/image/OCProduction/rr794?wid=800&fmt=jpeg&qlt=85",
        "1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1",
        "0.65",
        "6",
        "0",
      ],
      colors: ["Multicolor"],
      sizes: ["Standard"],
      reviews: [],
      available: true,
    },
    {
      productId: 23,
      name: "First Aid Essentials",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUcG6LPlVQ2V_4OdoS6PyFfRwjjG3R57fsg&s",
      description: "Compact First Aid Kit | Emergency Ready",
      price: 25.99,
      quantity: 50,
      category: "Medicine",
      relatedImages: [
        "https://m.media-amazon.com/images/I/71s1RIz6GsL._AC_UF1000",
        "1000_QL80_.jpg",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT63grFXr1C9_kRPBL0oJa4pNdPWt1NQM9GuqRhhVWpQCGf01dh5spYzzzDPmiswsz-x5XjZbvqsy4L57z7RdYzRolQQf_qZbaj_ODnCScHWgJ4aYnHamgySAfYYEcmVRYkNJ7oeciBfPU&usqp=CAc",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXxXd4REYM0fUd5bnfBS7zs6rgmZPhD8jjw&s",
      ],
      colors: ["Red", "White"],
      sizes: ["S", "M"],
      reviews: [
        {
          reviewId: 5,
          rating: 3,
          comment: "Average quality, works fine but could be better.",
          createdAt: "2024-11-22T17:47:08.148807",
        },
      ],
      available: true,
    },
    {
      productId: 29,
      name: "Yoga Mat",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0YgPzAoRXhjr8yNMqlDPe2-DYIpilG7kgw&s",
      description: "Eco-friendly Yoga Mat | Non-Slip Design",
      price: 29.99,
      quantity: 200,
      category: "Sports",
      relatedImages: [
        "https://www.yogadesignlab.com/cdn/shop/files/combo-yoga-mat-2-in-1-mat-towel-tribeca-sand-best-hot-yoga-mat-towel-yoga-design-lab-7.jpg?v=1686372003",
        "https://www.shopstakt.com/cdn/shop/products/Stakt_Green_and_Pink_Rough_Edits-1226333_c33a4ab2-f5ac-4373-8bf1-94689d594963.jpg?v=1708462160",
        "https://cdn.shopify.com/s/files/1/0552/0565/8817/files/2_714fa8e2-a282-4378-93b3-d31ef5fdb4bd_600x600.jpg?v=1637225317",
      ],
      colors: ["Purple", "Green", "Black"],
      sizes: ["Standard", "Large"],
      reviews: [],
      available: true,
    },
    {
      productId: 22,
      name: "product1",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Test product",
      price: 34.0,
      quantity: 12,
      category: "nature",
      relatedImages: [
        "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      colors: ["Black", "White"],
      sizes: ["S", "M"],
      reviews: [
        {
          reviewId: 4,
          rating: 1,
          comment: "Terrible experience, product arrived broken.",
          createdAt: "2024-11-22T17:46:39.478758",
        },
      ],
      available: true,
    },
    {
      productId: 36,
      name: "Toy Kitchen Set",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjhPkl_leV98IaaSLTiyp5IIuwk41Ve2Q7i7wPM1_S4MOkwxpbH6MRTaS45QgKt0XWSDZqlFSaCpOIMp64KMTgKN1BNeQuWXtov9lFAm6kqpqpZDkUuVJAhvh4bdrKAxEWGBg4Hw&usqp=CAc",
      description: "Miniature Toy Kitchen Set | Fun Role-Playing Activity",
      price: 34.99,
      quantity: 90,
      category: "Toys",
      relatedImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitRYcboJJ9zJjd0pDIlWSzhhgieF8XdJ1oQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14saOHFy0JkL2b9wwbqHGXQbwFL8i88zolw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjL_so_XWvQy8NcWH8QjUmnCfI7nmRx1u2jw&s",
      ],
      colors: ["Pink", "Blue", "Yellow"],
      sizes: ["Standard"],
      reviews: [],
      available: true,
    },
    {
      productId: 1,
      name: "Women's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/3c5bdf7d-8b96-4428-9c97-2416449cf55c.jpg?imageView2/2/w/800/q/70/format/webp",
      description: "Comfortable sneakers for daily wear and casual outings.",
      price: 39.99,
      quantity: 8,
      category: "Footwear",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/43dc60b3-8a3f-4e39-8966-a7cc84ed571f.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/1e537514-79e5-48db-a380-71c4ef478d98.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/484b363e-78f3-433d-9818-06a2e22351ab.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
    },
    {
      productId: 2,
      name: "Women's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/4a266a9a-50c7-4ce1-9996-125204713222.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        " Drawstring Hoodie, Casual Long Sleeve Pocket Sweatshirt For Fall & Winter, Women's Clothing",
      price: 39.99,
      quantity: 8,
      category: "Footwear",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/288890a8-c4c2-4ea9-b700-d6948c6be4e2.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/97b0dfdf-86e6-4e60-9ec5-faa8e3b58ddd.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/fe85fdfa-e14c-418f-91b1-e60f722f7bea.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
    },
    {
      productId: 3,
      name: "Women's Fashion",
      imageUrl:
        "https://img.kwcdn.com/product/open/2024-10-07/1728282691736-12c53ce44a28471db897c07381b1f1d8-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Women's 2 Piece Outfits Lounge Set 2024 Oversized Half Zip Sweatshirt Wide Leg Sweatpant Set Sweatsuit Tracksuit",
      price: 39.99,
      quantity: 8,
      category: "Footwear",
      relatedImages: [
        "https://img.kwcdn.com/product/open/2024-10-07/1728282689413-8b4f5d5395644822aa42b100f1939ee1-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/open/2024-10-07/1728282702043-40a24c54453a49099347708303854525-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/fe85fdfa-e14c-418f-91b1-e60f722f7bea.jpg?imageView2/2/w/800/q/70/format/webphttps://img.kwcdn.com/product/open/2024-10-07/1728282687072-341aa12580304cfe95c403efd9f3b75b-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/open/2024-10-07/1728282660437-aba9bc8ab329469ea417a9bd6faff013-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
    },
    {
      productId: 38,
      name: "Luxury Skincare Set",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnPPs2JxA0wZ4FQZv4BRxsu7msF_TEjkD7w&s",
      description: "Premium skincare essentials for glowing skin.",
      price: 49.99,
      quantity: 150,
      category: "Woman",
      relatedImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WRvnExPMow68_3mdItXdsYRiYIRlB-MGmg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpvIFTbpxqOmbkL39LXJhI5NZ6kigAIz9kw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdyNXewgNjTpZ74NARM9y736gq56v9dwsOA&s",
      ],
      colors: ["White", "Gold"],
      sizes: ["One Size"],
      reviews: [],
      available: true,
    },
    {
      productId: 19,
      name: "Men's Fashion",
      imageUrl:
        "https://www.gingtto.com/cdn/shop/products/22_a8fa5643-2191-46e1-a114-824281be6096.jpg?v=1703473739&width=1445",
      description:
        "Explore men’s fashion with trendy apparel, stylish accessories, and comfortable footwear for every occasion.",
      price: 49.99,
      quantity: 10,
      category: "Men",
      relatedImages: [
        "https://ae01.alicdn.com/kf/H89316b79a78145cd97934887a54ffb8dz.jpg_960x960.jpg",
        "https://i.redd.it/cickmhgojbo51.jpg",
        "https://www.longbida.us/cdn/shop/products/longbida-ripped-jeans-skinny-stretch-elastic-waist-patchwork-trousers-for-men-blue-xxxl-29113810878524.jpg?v=1636941409&width=416",
        "https://wornstar.com/cdn/shop/products/all-access-collection-rampager-waxed-denim-pants-40389965021466_1600x.jpg?v=1687840256",
      ],
      colors: ["BLack", "White", "Blue"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
    },
    {
      productId: 18,
      name: "Men's Fashion",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMT4YCnYQv2OE3rUEX6wv6cNiUxhFCbWTQtq6v47YQUNBya-2-3JWCmtzQ4VG8ayn20SpqgaQYCt0EC4RSDL36GBJVkycfKB1uIQ1COVwIOO0LfSw8iNhaKcQypj2j&usqp=CAc",
      description:
        "Explore men’s fashion with trendy apparel, stylish accessories, and comfortable footwear for every occasion.",
      price: 49.99,
      quantity: 10,
      category: "Men",
      relatedImages: [
        "https://miro.medium.com/v2/resize:fit:2000/1*8wVE8QNAz70NBRNLVjiLRQ.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATB2JXAT6BvrnVZQQR2oD2XZh0EoujzG2jA&s",
        "https://img.mensxp.com/media/content/2023/May/Main-Image---iStock_6468788f18ba9.jpeg",
        "https://theimpression.com/wp-content/uploads/2024/09/todd-snyder-spring-2025-mens-fashion-show-the-impression-009-552x828.jpg",
      ],
      colors: ["BLack", "White", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [
        {
          reviewId: 1,
          rating: 4,
          comment: "Very good Product ",
          createdAt: "2024-11-22T17:43:05.79479",
        },
      ],
      available: true,
    },
    {
      productId: 33,
      name: "Remote Control Car",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuHCYABJ-54oBhjjvMI5skrNt9X24RCyVsg&s",
      description: "High-Speed Remote Control Car | Durable and Fun",
      price: 49.99,
      quantity: 60,
      category: "Toys",
      relatedImages: [
        "https://m.media-amazon.com/images/I/71M0R2x-LUL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUe8Ksz8Lo3vK7iD0kRTfnrt0k9t4THpRBVg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLey6q0u-QZjNMtdzMjBkkK39IEMvrJWppw&s",
      ],
      colors: ["Red", "Blue", "Green"],
      sizes: ["Compact"],
      reviews: [],
      available: true,
    },
    {
      productId: 37,
      name: "Luxury Skincare Set",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnPPs2JxA0wZ4FQZv4BRxsu7msF_TEjkD7w&s",
      description: "Premium skincare essentials for glowing skin.",
      price: 49.99,
      quantity: 150,
      category: "Woman",
      relatedImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WRvnExPMow68_3mdItXdsYRiYIRlB-MGmg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpvIFTbpxqOmbkL39LXJhI5NZ6kigAIz9kw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdyNXewgNjTpZ74NARM9y736gq56v9dwsOA&s",
      ],
      colors: ["White", "Gold"],
      sizes: ["One Size"],
      reviews: [],
      available: true,
    },
    {
      productId: 34,
      name: "Portable Massage Gun",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKALHdscRlaIAbDSMEKEAAuz2mnDOyawcp0g&s",
      description: "Rechargeable Portable Massage Gun | Relieves Muscle Pain",
      price: 89.99,
      quantity: 50,
      category: "Health",
      relatedImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8frFU2bA5xThIFDQGogxCt0WFEB3yu6RYEg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPu1Nos3J7vX4qb5zTHalMRzmkeLOybqvrw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhbdK3Grc67DyBf2O3klyikl0dwG2cANW_w&s",
      ],
      colors: ["Black", "Silver", "Blue"],
      sizes: ["Standard"],
      reviews: [],
      available: true,
    },
    {
      productId: 12,
      name: "Electronics",
      imageUrl:
        "https://purgexonline.com/wp-content/uploads/2022/01/gc3_packing-electronics-04.jpg",
      description:
        "10 Inch HD Touch Screen Android Tablet - Tablets with 3GB RAM, 64GB ROM, 512GB Expand, WiFi, Wireless, Dual Camera, GMS Certification and Latest Android 13 OS",
      price: 109.99,
      quantity: 9,
      category: "Electronics",
      relatedImages: [
        "https://img.freepik.com/premium-photo/electronics-laptop-mobile-phone-tablet-pc_826551-3368.jpg?w=360",
        "https://img.freepik.com/premium-photo/electronics-laptop-mobile-phone-tablet-pc_826551-3357.jpg",
        "https://i.pcmag.com/imagery/roundups/067euC84LLCbwSVigm6cKvU-24..v1726012388.jpg",
        "https://s3.amazonaws.com/cms.ipressroom.com/352/files/20222/62420ce8b3aed3372d65ff89_shutterstock_1694462707/shutterstock_1694462707_mid.jpg",
      ],
      colors: ["Blue", "White", "Cyan"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 11,
      name: "Electronics",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/dd5e4d2f-830d-4f55-befd-1f88ac313187.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "10 Inch HD Touch Screen Android Tablet - Tablets with 3GB RAM, 64GB ROM, 512GB Expand, WiFi, Wireless, Dual Camera, GMS Certification and Latest Android 13 OS",
      price: 109.99,
      quantity: 9,
      category: "Electronics",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/270e583b-6897-450a-b580-a84079e0e113.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/1d0b7106-8b13-43b1-ae46-7c19d8ff646c.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 10,
      name: "Electronics",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/dd5e4d2f-830d-4f55-befd-1f88ac313187.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "10 Inch HD Touch Screen Android Tablet - Tablets with 3GB RAM, 64GB ROM, 512GB Expand, WiFi, Wireless, Dual Camera, GMS Certification and Latest Android 13 OS",
      price: 109.99,
      quantity: 9,
      category: "Electronics",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/270e583b-6897-450a-b580-a84079e0e113.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/1d0b7106-8b13-43b1-ae46-7c19d8ff646c.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 9,
      name: "Electronics",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/dd5e4d2f-830d-4f55-befd-1f88ac313187.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "10 Inch HD Touch Screen Android Tablet - Tablets with 3GB RAM, 64GB ROM, 512GB Expand, WiFi, Wireless, Dual Camera, GMS Certification and Latest Android 13 OS",
      price: 109.99,
      quantity: 9,
      category: "Electronics",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/270e583b-6897-450a-b580-a84079e0e113.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/1d0b7106-8b13-43b1-ae46-7c19d8ff646c.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 27,
      name: "Tennis",
      imageUrl:
        "https://img.tennis-warehouse.com/watermark/rs.php?path=BABOR2-1.jpg&nw=540",
      description: "High-performance Tennis Racket | Lightweight and Durable",
      price: 119.99,
      quantity: 50,
      category: "Sports",
      relatedImages: [
        "https://www.sportsmomsurvivalguide.com/wp-content/uploads/2018/06/Wilson-Tennis-Racket-1.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.2s2ivs8ZLknWXYgSd75bvwHaHa&pid=Api&P=0&h=180",
        "https://sp.yimg.com/ib/th?id=OPHS.lJRFgf3o8V7kKQ474C474&o=5&pid=21.1&w=160&h=105",
      ],
      colors: ["White", "Black", "Blue"],
      sizes: ["Junior", "Adult"],
      reviews: [],
      available: true,
    },
    {
      productId: 28,
      name: "Tennis",
      imageUrl:
        "https://img.tennis-warehouse.com/watermark/rs.php?path=BABOR2-1.jpg&nw=540",
      description: "High-performance Tennis Racket | Lightweight and Durable",
      price: 119.99,
      quantity: 0,
      category: "Sports",
      relatedImages: [
        "https://www.sportsmomsurvivalguide.com/wp-content/uploads/2018/06/Wilson-Tennis-Racket-1.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.2s2ivs8ZLknWXYgSd75bvwHaHa&pid=Api&P=0&h=180",
        "https://sp.yimg.com/ib/th?id=OPHS.lJRFgf3o8V7kKQ474C474&o=5&pid=21.1&w=160&h=105",
      ],
      colors: ["White", "Black", "Blue"],
      sizes: ["Junior", "Adult"],
      reviews: [
        {
          reviewId: 8,
          rating: 4,
          comment: "Good value for the price, very satisfied.",
          createdAt: "2024-11-22T17:49:03.557321",
        },
      ],
      available: false,
    },
    {
      productId: 31,
      name: "Camping Tent",
      imageUrl:
        "https://assets.wfcdn.com/im/77515168/resize-h800-w800%5Ecompr-r85/2319/231948224/Inflatable+Camping+Tent+with+Pump.jpg",
      description: "Waterproof Camping Tent | Perfect for Outdoor Adventures",
      price: 129.99,
      quantity: 30,
      category: "Sports and Outdoors",
      relatedImages: [
        "https://m.media-amazon.com/images/I/81DaQhY+yRL._AC_UF1000",
        "1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJxImrD9j-Zd2nwUxCC393ReBPvi7c4KAWQ&s",
        "https://trektechgear.com/cdn/shop/files/trek-tech-gear-outdoor-10-person-waterproof-inflatable-camping-tent-house-tents-42226386043191.jpg?v=1690181353",
      ],
      colors: ["Green", "Blue", "Orange"],
      sizes: ["2-person", "4-person", "6-person"],
      reviews: [],
      available: true,
    },
    {
      productId: 21,
      name: "Home and Life Style",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRYIpzNRQi5l8RQ2iE6AQvAhq5F4lAG6dNXUTT_sHPZo6fBvTIgN7M3z4eoB5SaEW28bIDRsvAUDuxKmkN3MLvNNh3kScZcGB0PWiil97X1BStXX7yeJbcX98k6k3acgjbmzAbLkEI&usqp=CAc",
      description:
        "Discover home essentials and accessories to elevate your space with style, comfort, and functionality.",
      price: 189.99,
      quantity: 10,
      category: "Home",
      relatedImages: [
        "https://everlastingfabric.com/cdn/shop/files/sweet-heart-bedding-set-pink-small-flat-140.jpg?v=1713496361",
        "https://images.ctfassets.net/5de70he6op10/6T1WD8A46kOVIbujO8HhF2/b477932cb7bd763b0b81926c145924de/673377346-beddinggateway_section2_2_duvets.jpg",
        "https://cdn.easternaccents.us/usermods/img/fall2024home/grenada-designer-bedding-m.jpg",
        "https://cdn11.bigcommerce.com/s-j8lceuq/images/stencil/874x481/uploaded_images/pexels-tamba-budiarsana-4070924.jpg?t=1696027679",
      ],
      colors: ["BLack", "White", "Blue"],
      sizes: ["L"],
      reviews: [
        {
          reviewId: 3,
          rating: 4,
          comment: "Good product, but shipping was delayed.",
          createdAt: "2024-11-22T17:46:07.830171",
        },
        {
          reviewId: 6,
          rating: 5,
          comment: "Outstanding product, will buy again!",
          createdAt: "2024-11-22T17:48:06.594437",
        },
      ],
      available: true,
    },
    {
      productId: 30,
      name: "Basketball Hoop",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRg5gg33VE3EqkGT7Nox-p2lw9iVka0LJ27Dlic5YOba8B4uOwGdhVhZBOufptRc97n1zoWxodrXIdn_zXzXg5z3jsmI_m4Q0oUhy4QHIBt",
      description: "Adjustable Basketball Hoop | Sturdy Outdoor Design",
      price: 199.99,
      quantity: 25,
      category: "Sports",
      relatedImages: [
        "https://njswingsets.com/cdn/shop/products/First-Team-Tempest-Triumph-Portable-Adjustable-Basketball-Hoop-72-inch-Tempured-Glass_162c3260-796b-4a8d-875b-45da0800d50a_1512x.jpeg?v=1523065464",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrS2tB2_lBMAfLeXlr0gx3onOkPwirsONLw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6rivnJsm1GCTcNFHUZTj5pL37eLsaMw28Q&s",
      ],
      colors: ["Red/White", "Blue/White", "Black"],
      sizes: ["Standard", "Large"],
      reviews: [],
      available: true,
    },
    {
      productId: 15,
      name: "Electronics",
      imageUrl:
        "https://ss7.vzw.com/is/image/VerizonWireless/apple-airpods-max-headphones-space-gray-mgyh3ama-a?wid=465&hei=465&fmt=webp",
      description:
        "Desktop Computers powerful performance and advanced camera features",
      price: 234.99,
      quantity: 10,
      category: "Electronics",
      relatedImages: [
        "https://i5.walmartimages.com/seo/HP-EliteDesk-800-G2-Desktop-Business-Computer-PC-Intel-Quad-Core-i5-8GB-RAM-1TB-HDD-Windows-10-Home-23-6-FHD-LED-Monitor-Keyboard-Mouse-DVD-Wi-Fi_05ac62ff-e7f1-4460-a138-cc01c985d286.5564f8243456465ee638daf2d755448e.jpeg",
        "https://target.scene7.com/is/image/Target/GUEST_999aae9b-6caf-47e5-acd7-0e0888bf6382?wid=800&hei=800&qlt=80&fmt=pjpeg",
        "https://static.digit.in/Apple-event-1.png",
        "https://target.scene7.com/is/image/Target/GUEST_3fc361f9-7fb8-431a-b314-8dc831cdf5ee?qlt=65&fmt=webp&hei=350&wid=350",
      ],
      colors: ["BLack", "White", "Cyan"],
      sizes: ["S", "M"],
      reviews: [],
      available: true,
    },
    {
      productId: 14,
      name: "Electronics",
      imageUrl: "https://m.media-amazon.com/images/I/61n2Bv5w+TL.jpg",
      description:
        "Desktop Computers powerful performance and advanced camera features",
      price: 234.99,
      quantity: 5,
      category: "Electronics",
      relatedImages: [
        "https://i5.walmartimages.com/seo/HP-EliteDesk-800-G2-Desktop-Business-Computer-PC-Intel-Quad-Core-i5-8GB-RAM-1TB-HDD-Windows-10-Home-23-6-FHD-LED-Monitor-Keyboard-Mouse-DVD-Wi-Fi_05ac62ff-e7f1-4460-a138-cc01c985d286.5564f8243456465ee638daf2d755448e.jpeg",
        "https://m.media-amazon.com/images/I/714c6ZoY6sL.jpg",
        "https://static.digit.in/Apple-event-1.png",
        "https://media.licdn.com/dms/image/C4D12AQG0ABpKR4WbeA/article-cover_image-shrink_600_2000/0/1598109521534?e=2147483647&v=beta&t=60en1xGXoMIhEZLlLpNDluUc6fkjgNiVnw72_e61SaU",
      ],
      colors: ["Blue", "White", "Cyan"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 13,
      name: "Electronics",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-FXvpVLM9Gc2S8tIMbTA_9WW6SEEFx8lkw&s",
      description:
        "iPhone 16 – Sleek design, powerful performance, and advanced camera features",
      price: 234.99,
      quantity: 5,
      category: "Electronics",
      relatedImages: [
        "https://m-cdn.phonearena.com/images/articles/390395-image/airpods-usb-c-iphone-15-4.jpg",
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2FTake-a-Closer-Look-at-Apples-New-iPhone-14-Pro-Apple-Watch-Ultra-and-AirPods-Pro-2-tw.jpg?w=1080&cbr=1&q=90&fit=max",
        "https://static.digit.in/Apple-event-1.png",
        "https://imageio.forbes.com/specials-images/imageserve/651a36c4527668aa572f9d7b/DSC06491/1960x0.jpg?height=474&width=711&fit=bounds",
      ],
      colors: ["Blue", "White", "Cyan"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
    },
    {
      productId: 20,
      name: "Home and Life Style",
      imageUrl:
        "https://media.architecturaldigest.com/photos/6553d8773947b7f6f77b02c5/16:9/w_8688,h_4887,c_limit/Living%20room_%20Devon%20Grace%20Interiors_credit_%20Dustin%20Halleck_1.jpg",
      description:
        "Discover home essentials and accessories to elevate your space with style, comfort, and functionality.",
      price: 2099.99,
      quantity: 10,
      category: "Home",
      relatedImages: [
        "https://www.homebarsusa.com/cdn/shop/products/Infinity-Smart-Chair-X3-3D_4D-Massage-Chair-in-Brown-lifestyle-Home-Bars-USA_1200x.png?v=1660932154",
        "https://homefurnitureandpatio.com/media/catalog/product/cache/1/image/580x420/9df78eab33525d08d6e5fb8d27136e95/p/k/pk-1084-19_30.jpg",
        "https://fancyhouse-design.com/wp-content/uploads/2024/02/Functional-design-reigns-supreme-in-the-well-organized-drawing-room.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8qyWJ3yexcHDNSlQjFAOzGgnqAeSnZj35A&s",
      ],
      colors: ["BLack", "White", "Blue"],
      sizes: ["L"],
      reviews: [
        {
          reviewId: 2,
          rating: 2,
          comment: "Not as described, disappointed with the quality.",
          createdAt: "2024-11-22T17:45:32.921356",
        },
      ],
      available: true,
    },
  ]);

  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      setProducts((prev) => prev.filter((p) => p !== product));
    }
  };

  const handleUpdate = (product) => {
    alert(`Redirecting to update page for ${product.name}`);
    // Implement redirection or update logic here
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Products</h1>
      {products.length > 0 ? (
        products.map((product, index) => (
          <SellerProduct
            key={index}
            product={product}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center">No products to display.</p>
      )}
    </div>
  );
};
