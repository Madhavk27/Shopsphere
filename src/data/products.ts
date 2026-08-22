import { Product, Address, Order } from '../types';

export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGI6YHp5r16RzDwz9SXp1MIVdx9Pe3eMGvv455xNxqIhsR5LS91S-ubCwt0uW_PSzWPSNrmHEZxiXIxrzUKizF1Y1230KVwU0VFzbI7P-_9W0kbR4xOE1ZkZLwZve00rX4DaxmiNDJf-25MHr_RxuNQVnTTUMNETSg743BdpzedwDfZ6AgkEoDQCNlfQE4LNxfsvCyHL9dJM47BFT66MIyEKZP2hkMx7SV5f5vp0Sb7Zaw2fRgPZcG',
    subcategories: ['Mobiles & Smartphones', 'Audio & Headphones', 'Laptops & Computers', 'Smart Watches', 'Accessories']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqikzqxPL5F8AbHG0mS27gihR2G8ocmoyrn7IVu80awxyqdjPjOiSi9yjFGE3Slzj1z-Cn3QipIhabhToBDiRR_1unBqXxeQD4G96bCHO98Lp8HXxld6W996x3kHMsQrGIotMznBKrvazHIlgEDunQMruZL1-0H2KE5cgc95P-pgryhSdzTh7zjlD76gLUZAFyomdC01NQGHLTIdybD5rMEowVfUIcncDyvfo_IPELQfTpwVEki2iz',
    subcategories: ['Men Fashion', 'Women Fashion', 'Footwear', 'Watches & Accessories']
  },
  {
    id: 'beauty',
    name: 'Beauty',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW_AVPwm59ypZYTg7KiiSE8qs1GvQCZKC_uMzzNbDrgmwI-SAcuJpM_iGatlg2vDeSwv4rp-IncWeeLk08X0oCwrK8olcvs4RDYOxyYwUhgSHyTBfK4fvI6KBrfRCcbuGnvUWbybQVC8-ifXUCLYPo6W-boUDVnWl31xojEr6OqqqxZIuMHj8BhJieTIIZzXXIssWh2cx_RvlcyjLrYuIP0JSK-bVRt9b4f3auK3K1XWzt2vNMQ0ZY',
    subcategories: ['Skincare', 'Fragrances', 'Haircare', 'Luxury Essentials']
  },
  {
    id: 'home',
    name: 'Home',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOqqGuE16VXhS8xJs4L825WTFSDUGPewEjvJwN9VOaqMUsSXBk2LrxgL79WzmNrqJEP5jH5U4Bfov6NLxDcOHZaP-f6uz3WPCYLo6oAc04h0Z67X5amL9F3E_C2DGSpQkzloiJFztIuk017ffSUJZPdWC96UFIzg2Eat7MXe1vw3NVA_HrqNLfbwMYOhfJGpF9DkqEwRzW4GPcZsyebETYv5WtUEOHHddNbljc9iWS1s12FgsxGshc',
    subcategories: ['Home & Kitchen', 'Appliances', 'Decor & Lighting', 'Furniture']
  }
];

export const PRODUCTS: Product[] = [
  // 1. Hero / Featured Product: Samsung Galaxy S25 5G
  {
    id: 'samsung-galaxy-s25-5g',
    name: 'Samsung Galaxy S25 5G',
    brand: 'SAMSUNG',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 79999,
    originalPrice: 89999,
    discountPercentage: 11,
    rating: 4.8,
    reviewsCount: 2451,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDct8pKYJHLqwbYT2yUepiOkHljI8zPzmIXnVo_PssYfqcD26dmfkGLwwK8_P24E8zVFs0m5_4cUyCGZQz5CDr-V7sj_mCO-pE2Tpx58N_vAUa-dLoIz_n6uI72HJ6zGWEAVishB18nQ89fW6XUaD8bMIS5TCbLARYEF9WXmWkAD3pwnMbsNWLMPeAuG_dZ7bckA5fmzRiB877RpxBkqHkVF-fUJD9DovBPUu4Lm0NqW-smOa8JS4jo',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDct8pKYJHLqwbYT2yUepiOkHljI8zPzmIXnVo_PssYfqcD26dmfkGLwwK8_P24E8zVFs0m5_4cUyCGZQz5CDr-V7sj_mCO-pE2Tpx58N_vAUa-dLoIz_n6uI72HJ6zGWEAVishB18nQ89fW6XUaD8bMIS5TCbLARYEF9WXmWkAD3pwnMbsNWLMPeAuG_dZ7bckA5fmzRiB877RpxBkqHkVF-fUJD9DovBPUu4Lm0NqW-smOa8JS4jo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7bGQEfChKSJOLh8dmbz0IPG42QLTP-VkRVWXjVQmY3bEjMQ5nYIqdUlc2WrvASYbr02o-D9Da2nLfBUo6B6zZJzWEaR_b1B5k1rcf23UTkHf4fWmQu1vPmVyP5BIw0IPaTUF0hwudlwoaZdqSfOwySAF4poOeGBJk8mBEZlVHYcr0EOWoc-tyew0-jh1kWZx7DSjyUQGSU0ddemwcbQ305TmDOVAVBwU7ORsPzSbWanzlFbfhfJy6',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOn0glgssgTx5iODY2q1ziejPtz8VDwNotAuXfNndKQthBDSfTiiQ_At1OyGeKroiRIzzZJ2R_4gHs2b-Sj6_NoQpqlrrDarM3CYa9YfvzbdxHQ32sLXjt-Mg6EmEkZPzcEuFS-tzKh67pyqmmf9KmVDh6W_DGTKYk2kF2Vf2z-q0VupRJgrXayF6Muc7mGMEHHYWLJg_qxiPIG9BlDRieZ-Ys6SomYwMiPwSLz5ebEWLTDp6iyItI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMOSPV8uhm5ZsUeHXv6tmIW-YvOfX1P2M3aM4vLzoZjvaHB-Q0kdU3OUmED1_oIOWJQF14txZW3Mwu5XmzDrScL-f9P-MET38IQ9jy-rbY8rQC2s13Lsno2ILbnDZkt3WW9sptEYLGY-EDFF96GVwqo4Q3EacDuNmRGn3d7-2BQMhxH6CKft1x4OlhjlkU0DNLjOUGaCZozXYxjbmcvMXFa1U5jhrp3WrP9wwffk0147OEBmM-QIzl',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAo1_YTwoErZKcFtEcOoZfqIfLKZAQIS4BDaqhipLJmpA2VSgLR-re96sJz0h7wnAgWgExyBxhY8c9u7ev81R_F6HSxFTEq2XoJ3yp3IxxYrzkxsz1CYeCnWvoAvV_UwkeXM6_AA3EqJk2HBl2Iw-gq6dSOjIW0Ts0NpRINeT2F7-jjCPHW76jD7S9ujdGWqisZTiYx9uMgULl6Wb0stq12wa8aaYaZStsaciWzja2vpMdnIGtleaSS'
    ],
    description: 'Experience next-generation performance with the Samsung Galaxy S25 5G. Featuring an ultra-bright Dynamic AMOLED 2X display, pro-grade triple camera matrix with AI enhancements, and all-day intelligent battery life.',
    features: [
      '6.2" Dynamic AMOLED 2X Display with 120Hz adaptive refresh rate',
      'Snapdragon 8 Elite flagship mobile processor',
      '50MP AI Triple Camera System with 8K Video Recording',
      'Armor Aluminum frame with IP68 water & dust resistance',
      '4,000 mAh Intelligent All-Day Battery with Fast Wireless Charging'
    ],
    specifications: {
      'Display': '6.2-inch FHD+ Dynamic AMOLED 2X (2340 x 1080)',
      'Processor': 'Snapdragon 8 Elite / Exynos 2500',
      'Rear Camera': '50MP (Wide) + 12MP (Ultra-Wide) + 10MP (Telephoto)',
      'Front Camera': '12MP Dual Pixel AF',
      'Battery': '4,000 mAh with 25W Fast Charging',
      'Operating System': 'One UI 7.0 based on Android 15',
      'Weight': '167 grams'
    },
    colors: [
      { name: 'Phantom Black', hex: '#111111', label: 'Phantom Black' },
      { name: 'Cream White', hex: '#F5F5F5', label: 'Cream White' },
      { name: 'Titanium Gray', hex: '#7C859D', label: 'Titanium Gray' }
    ],
    storageOptions: ['256 GB', '512 GB', '1 TB'],
    ramOptions: ['8 GB', '12 GB'],
    emiStartsAt: 3879,
    isDeal: false,
    inStock: true
  },

  // 2. Galaxy S24 Ultra 5G
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Galaxy S24 Ultra 5G (Titanium Gray, 256GB, 12GB RAM)',
    brand: 'SAMSUNG',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 129999,
    originalPrice: 134999,
    discountPercentage: 24,
    rating: 4.6,
    reviewsCount: 1240,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCVuWpwAsaJl_M6KSQJmMF1bxS0GddG5XVrqwIynRivYgCBF9Tt1gK0kBqCenlZzRQYqJBkoZcFc2dFfXJiU-OAnNiOPexPhVlXy5bjy05ZD5wtxHUtU93OfGY5fVPJAScVOCaUd7VR3b95JewXudcV-09rjhr9qHMrnPcFXrMdDipZlnhFmaLB9EwGv9EzstbLtbqJ1ShO64gQiYRe7BGP5kh5Lc70zp0ttr8ewVHBH0a2GSVpml9',
    description: 'Galaxy S24 Ultra meets Titanium armor. Packed with Galaxy AI, a 200MP camera sensor with 100x Space Zoom, and built-in S Pen.',
    storageOptions: ['256 GB', '512 GB', '1 TB'],
    ramOptions: ['12 GB'],
    emiStartsAt: 6303,
    isDeal: true,
    inStock: true
  },

  // 3. Apple iPhone 15 Pro
  {
    id: 'apple-iphone-15-pro',
    name: 'iPhone 15 Pro (Blue Titanium, 128GB)',
    brand: 'APPLE',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 134900,
    originalPrice: 134900,
    rating: 4.9,
    reviewsCount: 3820,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb-doX6N7Y_4snaQH0-2gSP1ubbbe4I1ayBrKsoTaz_54AmLoYiuaK9x_Dno-sXpZ_LaFudCTjQESxT2rLVvjZZm8pWerKlvbP9DoikFi_wbjzcreXAcc8COP_iZSzmfQEgxEYfEOkXzvGagLoKaA2jMvPSxC4ITWWMu8MqSelm8_wAWHvBKwJI2XKkBT_wq0KGOHInn7Mjj-h3SHEOjzGxunscdNilVSpPWf8XEDd5OTanequPPqB',
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, customizable Action button, and 48MP main camera with multiple focal lengths.',
    storageOptions: ['128 GB', '256 GB', '512 GB', '1 TB'],
    ramOptions: ['8 GB'],
    emiStartsAt: 6540,
    isDeal: false,
    inStock: true
  },

  // 4. OnePlus 12 5G
  {
    id: 'oneplus-12-5g',
    name: 'OnePlus 12 5G (Flowy Emerald, 16GB RAM, 512GB)',
    brand: 'ONEPLUS',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 69999,
    originalPrice: 82351,
    discountPercentage: 15,
    rating: 4.3,
    reviewsCount: 940,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuLrl2XayuTLHQRAx0PbaImIqK7odxh81NcYBvRGV9QR_cI2Gp7irNbWF_X5f3APMGhmWgZvb5svJPh_ZuMjUXajOAM4IcGeReRmqrkPryC3sRe0LXDRt7lY98_JmGq8LPbTOdJpSjPdeq6W30cFOgO-GQ3RTd-r4oVHADakSu3t9267TrxmRJNPKSCirmT0UB7Iu6MFK-7VbC7YUtSkZafg_DjTYO9Scv7c3u0AD_fZh-2KJq713s',
    description: 'Smooth Beyond Belief. Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, and 5400 mAh Battery with 100W SUPERVOOC charging.',
    storageOptions: ['256 GB', '512 GB'],
    ramOptions: ['12 GB', '16 GB'],
    emiStartsAt: 3394,
    isDeal: true,
    inStock: true
  },

  // 5. Google Pixel 8
  {
    id: 'google-pixel-8',
    name: 'Pixel 8 (Obsidian, 128GB)',
    brand: 'GOOGLE',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 75999,
    originalPrice: 79999,
    rating: 4.5,
    reviewsCount: 540,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvR_yWrknXt341QjMwswdO4xHSmrmzfzC4KOwVhASnjuXSOmCOFhIJnsCH8L5KU1IY0nIInIQnqiV1OOGPBlTB8YIQPj6XQRGiMtY8F-ZRc3jxvMEG5ks_h2ii8N98_wXB4c-73fkIP5Ggh6EUU7kS3xx6DidMv_vvxzF1BtP4ejfoJr0zqjEhvVvmZKZ1U-zeh0ObFytoMZ6KYK7P9IaeLiItvRpmr6O24BmCowcxpXEc3IloLo8x',
    description: 'The helpful phone engineered by Google, featuring Google Tensor G3, advanced camera capabilities, and built-in AI for everyday magic.',
    storageOptions: ['128 GB', '256 GB'],
    ramOptions: ['8 GB'],
    emiStartsAt: 3680,
    isDeal: false,
    inStock: true
  },

  // 6. Premium Horizon X Pro Smartphone 256GB
  {
    id: 'horizon-x-pro',
    name: 'Premium Horizon X Pro Smartphone 256GB',
    brand: 'HORIZON',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 45999,
    originalPrice: 57499,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 1200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3B8RndqTDGeAAvmFozlie1jzQXJ8rwyt01ndb10D3XFaWwJGHwQGVeYR-43eybq1_TA-0WkC7TonhCxIF06elYj3_Imq9UT8O-7lfRRz-JJUX2ic8UpsfsvMW7JOAf0CUCJYN0EInOnKoEVG0ElEm2YvII1JXEkDgcAFsawhUD-ifmWNvlNDxRHKQY4u911nOtiJSs71ZiW6famBRvon8C-yVTJnNEM0eNMI5QbtBCyyHmUivbGm7',
    description: 'Sleek design, 120Hz OLED screen, precision-engineered metal edges, and cutting edge processor.',
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    ramOptions: ['8 GB', '12 GB'],
    emiStartsAt: 2230,
    isDeal: true,
    inStock: true
  },

  // 7. AcousticFlow ANC Wireless Headphones
  {
    id: 'acousticflow-anc',
    name: 'AcousticFlow ANC Wireless Headphones',
    brand: 'ACOUSTICFLOW',
    category: 'Electronics',
    subCategory: 'Audio & Headphones',
    price: 12499,
    originalPrice: 14700,
    discountPercentage: 15,
    rating: 4.6,
    reviewsCount: 850,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUzNF_a-rdQqBn4-SElt2WboIdC0aA7SsgLZBWTztXtnRDdK04j06QuTX80frX28kgUfLSQvUTLp-OG6F_MdpWvF-GgEJfeNuFoJtESyswwdACuaXFPoS_CosDNU_4IEayA5OMNrgBICqQAGtFPtKhZminEDP1oFSigI-ivT5ol9E6jkPi0-PEQJq4ne-FicDXER4YPucU3QNaXAMQdfITDFHqX9QiyX5UUGLhKnP6D2SRNEPdBVN7',
    description: 'Crisp studio-grade noise-cancelling over-ear headphones in matte black with 40-hour battery life.',
    emiStartsAt: 610,
    isDeal: true,
    inStock: true
  },

  // 8. Lumina Watch Series 5 - Titanium
  {
    id: 'lumina-watch-5',
    name: 'Lumina Watch Series 5 - Titanium',
    brand: 'LUMINA',
    category: 'Electronics',
    subCategory: 'Smart Watches',
    price: 24999,
    originalPrice: 35700,
    discountPercentage: 30,
    rating: 4.9,
    reviewsCount: 2100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8uz8eFz2vut2Z_IZQdGz4R8i_1X91h1vDVar_J5FNddAegdr2Z09wjUG5i5JvJCFAugnTj-t3ZwdNk_ksHrfnkZDupr85wtT5pTXSyrVFSB3kmMhu0QePz_JeapW6TY-QcUwZ3OfeadP1LGcJtGe1hLwxMfJ4JvQPGJ0RQEnT4ZrGB1bQelsdkEE0wzytJBJXg-rnx5zfEiOFFE3x5ABrC0aS9luHrgkPDdiL5vASu2jj4KnLrqz',
    description: 'Luxury titanium body, glowing always-on AMOLED display, heart rate and ECG telemetry.',
    emiStartsAt: 1210,
    isDeal: true,
    inStock: true
  },

  // 9. ZenithBook Ultra Slim 14" Laptop M2
  {
    id: 'zenithbook-ultra-slim',
    name: 'ZenithBook Ultra Slim 14" Laptop M2',
    brand: 'ZENITH',
    category: 'Electronics',
    subCategory: 'Laptops & Computers',
    price: 89990,
    originalPrice: 99990,
    discountPercentage: 10,
    rating: 4.7,
    reviewsCount: 540,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiFRdHh_lPv3JO0aiD_avI0h5LIOeQGsY8F6fmVF-Or5Sn2blOHcSU3EMWBd-WUs-W68XoUHLrQE2vx1qUKkp5xsV58fYpMCYPCWmvCn_IVnbf3u8e-_RIL8sjle6ttKKuxEKRB0lu55DN8PDq82VOgfk6GDQ8O9Y08lcdhW-pmYWjYVC8M5toyZePiVi4kz_dZmvvROCODqC14DiN2R2h5TrNWkpj10ujGoSTCRqvjB08S3CtjiLE',
    description: 'Ultra-thin, featherlight aerospace-grade aluminum laptop with high-res 120Hz display and 18-hour battery.',
    emiStartsAt: 4360,
    isDeal: true,
    inStock: true
  },

  // 10. Sony WH-1000XM5
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    brand: 'SONY',
    category: 'Electronics',
    subCategory: 'Audio & Headphones',
    price: 29990,
    originalPrice: 34990,
    rating: 4.9,
    reviewsCount: 3120,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbQkubj1EXBB0yGg8ALmNG8DdmAtTFTCIzBWx0PAEwhPkBAZ04xsMn6POjzDzdBqYYBy4Qj4yAaa_xiDYXjNH9zpHgJzSTw7iWNL0J0cdQLgJEmDINT4lQMhhKF0XnsDkZKPfVz0HCxEwEFiNyUA2f2BBNXOFMWOAzAhHjnvRGz_vnylNPU_fbe3EcTrsan0jTMbsaFx3ge8iGVfo6pL_cvsHSIfZ-tDRhjsS2HOYAxRWyRcMiyh6F',
    description: 'Industry-leading noise canceling with two processors and 8 microphones for unprecedented sound purity.',
    colors: [
      { name: 'Platinum Silver', hex: '#E6E6E6', label: 'Platinum Silver' },
      { name: 'Midnight Black', hex: '#1C1C1C', label: 'Midnight Black' }
    ],
    isRecommended: false,
    inStock: true
  },

  // 11. Nike Air Max
  {
    id: 'nike-air-max',
    name: 'Nike Air Max',
    brand: 'NIKE',
    category: 'Fashion',
    subCategory: 'Footwear',
    price: 12495,
    originalPrice: 13995,
    rating: 4.7,
    reviewsCount: 780,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHS0seZ2DbY2lluLDjVkGc0sDvtDVQOQt6VioFIfO4qttR7k6ZKMLS6dA7BZhW7mpPwVduZTYL5WhjIuNlZb3roXtALs046ZzV__BvWT5MTg172JkOwrUEg23N6mytXWEKd9ss-wZmbPFb9cnpWnMjA5H3gjxzUzuH0EGmdYDgwhHLWzJSUbPOF4tGdsZb94W5Nl9HDUanygbt52DR0tOvenqK6dfIU1IzG0Nt5BOKZZ5KlPh6_qHi',
    description: 'Iconic street style and responsive cushioning. Premium leather and breathable mesh upper.',
    colors: [
      { name: 'White/Red', hex: '#E53E3E', label: 'White/Red' },
      { name: 'Triple Black', hex: '#000000', label: 'Triple Black' }
    ],
    isRecommended: false,
    inStock: true
  },

  // 12. Titan Smart Pro 2.0 (Recommended Item 1)
  {
    id: 'titan-smart-pro-2',
    name: 'Titan Smart Pro 2.0',
    brand: 'TITAN',
    category: 'Electronics',
    subCategory: 'Smart Watches',
    price: 7995,
    originalPrice: 9995,
    discountPercentage: 20,
    rating: 4.5,
    reviewsCount: 124,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlwKeKWnZok9xJ61dC2KPZEzU1i7HvYXFW0a1rQtZKj28o7LKrM7RrbhS-xntVuH1ok3g3_Sw5Q6A1cAd8JGYUfiNR1hI1yRnyDlCK5oNYD-QmbRZPcP1fk1SUJOZZCWE8X7Ko3MWHziw7W7KJIzqMcMHpU26tS8yPQ84qjUrfVnbsJElY0tjjbkLqm2PZru_UwnYszH4DRGjClnknf8A2VRgT4tSeCqjVBJNNRVS2zmibnAcVISoR',
    description: 'AMOLED display, precision GPS, stress and sleep tracker with premium metal finish.',
    isRecommended: true,
    inStock: true
  },

  // 13. Bose SoundLink Flex (Recommended Item 2)
  {
    id: 'bose-soundlink-flex',
    name: 'Bose SoundLink Flex',
    brand: 'BOSE',
    category: 'Electronics',
    subCategory: 'Audio & Headphones',
    price: 13900,
    originalPrice: 15900,
    rating: 5.0,
    reviewsCount: 89,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdhaJSUdojHd08YTY0XN2yJwm-SE6_lsUxVghaWrprvAWBIESnbmednmZTZwbn95Bhq546io9e1rpSJ_HNffNU_4zNY4RqGzaF3KD1-2nOmk5TkkZPCkQCvTAnSud49aFSgGKuHfYfJRymERQAtrU6ha2SslF6fJE25mATGTU31qnTgebcSOhk2kU-D7RNETTk6q3md-X4JpKquvtTr2ZyPxZ99hblvmfxJh4yMRp-UbYEdZy8Ihuo',
    description: 'Portable waterproof Bluetooth speaker engineered to deliver clear, deep sound in any outdoor orientation.',
    isRecommended: true,
    inStock: true
  },

  // 14. Quantum X Pro Smartphone
  {
    id: 'quantum-x-pro',
    name: 'Quantum X Pro Smartphone - 256GB',
    brand: 'QUANTUM',
    category: 'Mobiles',
    subCategory: 'Mobiles & Smartphones',
    price: 54999,
    originalPrice: 62999,
    rating: 4.7,
    reviewsCount: 420,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJUNVaWovxAuXwmkIRR1n5BxI8v7vKYLqIZUv2f6693xSSY6afzxyQlQMxXkZgKLUa-N6Z58reZ-jqBNnqOhwZHPARjfyw_EwE_xilZ3GFXNZxMIJsPFrrq2Nlifm0EHOwpD0nTHnKVSdZaWir18j2O4PdAjGYgvOaDC4Owk1uO9hG6_G3SgV9ITLE_FmWn2eJlBI-TeidqvxiPXxfdPwTuAOzO7ZkeGwT0fr7Ws3MA4EFBcd25tV',
    description: 'Premium flagship smartphone with borderless AMOLED display, AI photography engine, and 120W HyperCharge.',
    storageOptions: ['256 GB', '512 GB'],
    ramOptions: ['12 GB'],
    isDeal: false,
    inStock: true
  },

  // 15. AeroBuds Noise Cancelling
  {
    id: 'aerobuds-noise-cancelling',
    name: 'AeroBuds Noise Cancelling',
    brand: 'AERO',
    category: 'Electronics',
    subCategory: 'Audio & Headphones',
    price: 8499,
    originalPrice: 10999,
    rating: 4.6,
    reviewsCount: 650,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdVmmb1aSELQ1mQbNzdG805eU75Dy-sjfOsp0o_4C9sUzmMu5TudJ1jLVQMMUG7lZzoe6Xoo6bsSEkZj4WM9KzpSFqpzmGsmGzA2HrI9DHI-sEhz9b8vWUkC9HaMMr0bKo-bsHhcRn91i7nKw6aV1WGvvXpSnSSbngH7z-MzLvnjwQ_elFb1iOGgbGJU6N3fVpwSp3syn9_nGAlze12h980RcLCsibfZclREELzAQYdvKpnJJLlIGC',
    description: 'Ultra-lightweight spatial audio earbuds with active noise cancellation and transparency mode.',
    isDeal: false,
    inStock: true
  }
];

export const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    name: 'Arjun Patel',
    phone: '+91 98765 43210',
    addressLine: '123, Rosewood Apartments, Cyber City',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122002',
    country: 'India',
    isDefault: true
  },
  {
    id: 'addr-2',
    name: 'Arjun Patel (Office)',
    phone: '+91 98765 43210',
    addressLine: 'Tower B, 14th Floor, Tech Hub 1, DLF Phase 5',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122009',
    country: 'India',
    isDefault: false
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'SS4829137',
    date: 'Today, 10:45 AM',
    items: [
      {
        productId: 'acousticflow-anc',
        productName: 'AcousticFlow ANC Wireless Headphones',
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByUqksBETQFIg793BdlhUymS2fMgAmt2PH72eDtr9C6ukgV-TCfpfSLJie44fO7srwsXzrL2xLbuTAQSaSQN3vM7a7C_hNrFu2E7lr0n468xpUG2umoLkE9aNYHjIFrCqiav_vv13hnBzQHkO6ZmUN0IcqHk8yr5dwcNX0L1oViaWYKcFpbM8z5jUc2VfWwHPJfoEZjhP52BNVdEVhbWA6fHdnart4oUlU3rv_Lbwtc_6l5V82UnUB',
        price: 12499,
        quantity: 1
      },
      {
        productId: 'lumina-watch-5',
        productName: 'Titan Leather Strap (Accessory)',
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOhHlJ0tVdRNaA1F4fCaJaJPuBUYGO6ssoSmaOMo5aUaPzqKoc6ETfWv2Ef2XsQ3L2dDs26et7MWQx511_hxiEAt8T273NJHsUGqmyklItbbmvQlioEjKcw9cywAqrJOHvDkQ3lM3IzGzQhFJb58wx_JiLjakYVIEfDqxSPZjavFm4vIsp6PnBMeOg5x4_FIjoUO9cGpqFQU2R8mgknBtwyQ1Z7nZc7Tx2UP7Z2wCnzhXUZAQS_vRs',
        price: 2500,
        quantity: 1
      }
    ],
    subtotal: 14999,
    discount: 0,
    shipping: 0,
    tax: 0,
    total: 14999,
    status: 'Processing',
    deliveryType: 'Standard',
    paymentMethod: 'UPI',
    address: INITIAL_ADDRESSES[0],
    estimatedDelivery: 'Oct 25, 2026'
  },
  {
    id: 'SS4828902',
    date: 'Oct 12, 2023',
    items: [
      {
        productId: 'lumina-watch-5',
        productName: 'Lumina Watch Smart Band',
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOhHlJ0tVdRNaA1F4fCaJaJPuBUYGO6ssoSmaOMo5aUaPzqKoc6ETfWv2Ef2XsQ3L2dDs26et7MWQx511_hxiEAt8T273NJHsUGqmyklItbbmvQlioEjKcw9cywAqrJOHvDkQ3lM3IzGzQhFJb58wx_JiLjakYVIEfDqxSPZjavFm4vIsp6PnBMeOg5x4_FIjoUO9cGpqFQU2R8mgknBtwyQ1Z7nZc7Tx2UP7Z2wCnzhXUZAQS_vRs',
        price: 5499,
        quantity: 1
      }
    ],
    subtotal: 5499,
    discount: 0,
    shipping: 0,
    tax: 0,
    total: 5499,
    status: 'Delivered',
    deliveryType: 'Standard',
    paymentMethod: 'Card',
    address: INITIAL_ADDRESSES[0],
    estimatedDelivery: 'Delivered on Oct 14, 2023'
  }
];
