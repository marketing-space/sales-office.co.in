import {
  Car,
  Home,
  ImageIcon,
  IndianRupee,
  LayoutPanelTop,
  MapPin,
  Phone,
  Trees,
  Video,
} from "lucide-react";
import { routes } from "./routes";

const route = routes.MajesticEvolvus;

export const majesticEvolvusSiteConfig = {
  name: "Majestique Evolvus",
  about:
    `Majestique began its journey in the textile industry, steadily expanding its footprint with manufacturing units in Surat, Varanasi, Bengaluru, and Mumbai, along with 30 retail outlets spread across Maharashtra, covering over 3 lakh sq. ft.

In 2007, the company ventured into real estate, launching residential projects in Pune at Hadapsar and Market Yard. The success of these early developments led to a stronger focus on construction, with a wide range of residential projects across the city, each thoughtfully designed to cater to different segments of homebuyers.

Majestique’s reputation for delivering value-for-money homes is driven by a strong commitment to quality. This philosophy is reflected in every aspect of its operations—from the use of high-grade materials and efficient construction processes to a focus on skilled human resources and overall excellence.
`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Central Kharadi",
  },
  gtmId: "GTM-NSTZVHJM",
  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#pricing`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#sitefloorplan`,
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: `/${route}/#amenities`,
        label: "Amenities",
        icon: Trees,
      },
      {
        href: `/${route}/#gallery`,
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: `/${route}/#location`,
        label: "Location",
        icon: MapPin,
      },
      {
        href: `/${route}/#sitevisit`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description:
        "Download the brochure to learn more about Majestique Evolvus",
    },
  },

  branding: {
    logo: "/majestic-evolus/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/majestic-evolus/images/banner-1.jpeg",
        alt: "Majestique Evolvus Interior",
      },
      // {
      //   src: "/majestic-evolus/images/banner-2.webp",
      //   alt: "Majestique Evolvus Interior",
      // },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Majestique Evolvus.",
      },
      title: "Welcome to Majestique Evolvus",
      description: `Welcome to Evolvus Kharadi—a place where everything comes together effortlessly. It’s rare to find a location that truly offers the best of all worlds, where convenience, connectivity, and lifestyle blend seamlessly for the modern homebuyer.

Imagine living in a neighbourhood with excellent connectivity, top-tier social infrastructure, and a vibrant, cosmopolitan environment—all at a value that feels almost too good to be true. That’s the essence of Kharadi—balanced, dynamic, and perfectly suited for contemporary living.
`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Central Kharadi by Arihant Superstructure",
      points: [
        { text: "Flexible Payment Plan" },
        { text: "Spot Booking Offers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        // {
        //   title: "Land Parcel",
        //   value: "16 Acres",
        // },
        {
          title: "Floors",
          value: "27 Storey",
        },
        {
          title: "Possession",
          value: "Dec, 2027",
        },
      ],
      price: {
        title: "Luxurious 2 , 3 & 4 BHK Starts from",
        value: "1.45 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2 , 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "815 Sq.Ft. - 877 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "3 BHK",
        carpetArea: "1115 Sq.Ft. - 1149 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "3 BHK",
        carpetArea: "1209 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "4 BHK",
        carpetArea: "1715 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/majestic-evolus/images/costing.webp",
        alt: "Majestique Evolvus Costing",
      },
      title: "Need Complete Costing Details?",
      description:
        "Download our detailed cost breakdown including all charges and payment plans",
      cta: {
        title: "Get Price Details",
        description: "Request complete pricing information",
      },
    },
  },

  siteAndFloorPlan: {
    title: "Site & Floor Plan",
    description:
      "Explore our thoughtfully designed layouts that maximize space and comfort",
    masterPlan: {
      title: "Master Plan",
      image: {
        src: "/majestic-evolus/images/coming.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Majestique Evolvus",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-815-877 ",
          image: "/majestic-evolus/images/plan-1.jpg",
          category: "1 BHK",
        },
        {
          type: "3 BHK-1209",
          image: "/majestic-evolus/images/plan-2.jpg",
          category: "2 BHK",
        },
        {
          type: "4 BHK-1715",
          image: "/majestic-evolus/images/plan-3.jpg",
          category: "3 BHK"
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Majestique Evolvus",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Majestique Evolvus",
    },
    amenities: [
      {
        title: "Gymnasium",
        image: "/majestic-evolus/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/majestic-evolus/images/amenities/kids-playarea.jpg",
        description: "",
      },
      {
        title: "Temple",
        image: "/majestic-evolus/images/amenities/temple.webp",
        description: "",
      },
      {
        title: "Simming Pool",
        image: "/majestic-evolus/images/amenities/swmming_01.webp",
        description: "",
      },
      {
        title: "Multipurpose Court",
        image: "/majestic-evolus/images/amenities/multipurposesportscourt.webp",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/majestic-evolus/images/amenities/cricket.jpg",
        description: "",
      },
    ],
    stats: {
      title: "32+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Majestique Evolvus",
    },
    images: [
      {
        title: "",
        image: "/majestic-evolus/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/majestic-evolus/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/majestic-evolus/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/majestic-evolus/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.108086135718!2d73.934946988855!3d18.5569988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c5a1cb4ec9%3A0xb8addcd25b96173f!2sMajestique%20Evolvus!5e1!3m2!1sen!2sin!4v1775807851174!5m2!1sen!2sin",
    image: {
      src: "/majestic-evolus/images/Loction_Map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Gera Commerzone",
        description: "2.8 Km",
      },
      {
        title: "EON IT Park",
        description: "1.8 Km",
      },
      {
        title: "Pune Airport ",
        description: "7.5 Km",
      },
      {
        title: "Pune Railway Station ",
        description: "13.5 Km",
      },
      {
        title: "Pune-Ahmadnagar Highway ",
        description: "200 M",
      },
      {
        title: " Reliance Mart ",
        description: "2.5 Km",
      },
    ],
    location: {
      title: "Location Details",
      cta: {
        title: "Get Location",
        description: "Get detailed information about this location",
      },
    },
  },

  virtualTour: {
    title: "Virtual Tour Request",
    description:
      "Experience Majestique Evolvus from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/majestic-evolus/images/banner-1.jpeg",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Majestique Evolvus from the comfort of your home",
    features: [
      {
        title: "360° Views",
        description: "Explore every corner of our property in detail",
      },
      {
        title: "Live Interaction",
        description: "Real-time guidance from our property experts",
      },
      {
        title: "Flexible Timing",
        description: "Schedule your tour at your convenience",
      },
    ],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/majestic-evolus/images/ride.png",
        alt: "Book a Site Visit",
      },
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
    },

    callUs: {
      title: "Call Us",
      description: "Get in touch with our experts",
      phone: "+91 96190 95795",
    },
    enquiryFeatures: [
      {
        icon: Phone,
        title: "Instant Call Back",
        description: "Get a call from our experts",
      },
      {
        icon: Car,
        title: "Free Site Visit",
        description: "Schedule at your convenience",
      },
      {
        icon: IndianRupee,
        title: "Unmatched Price",
        description: "Best offers guaranteed",
      },
    ],
  },

  legal: {
    rera: {
      title: "RERA Information",
      description:
        "According to the RERA Act 2016 of the Government of India, all projects of the Majestique Evolvus, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Majestique Evolvus",
          reraNumber: "MahaRERA - P52100054253",
          qrCode: "/majestic-evolus/images/qr.webp",
        },
      ],
    },
    legalInfo: [
      {
        title: "Project Registration",
        description:
          "Project Registered under Government of India RERA Act 2016",
      },
      {
        title: "Authorised Advertiser",
        description:
          "Government RERA Authorised Advertiser's: Marketing Space Pvt Ltd, Registration No A51700000595, CIN U74999MH2016PTC288144",
      },
      {
        title: "RERA Numbers",
        description:
          "RERA Project Registration No.: P52100054253",
      },
      {
        title: "Site Address",
        description:
          "Site Address:Survey no. 39/1, Ashoka Nagar, Central Kharadi, Kharadi, Pune, 411014 ",
      },
      // {
      //   title: "Contact Us",
      //   description:
      //     "Contact Us: Corporate Office: Corporate Office: Arihant Superstructure: Floor No. 26, Plot No 13/1 ⚊ TTC Industrial Area, Thane Belapur Road, Turbhe MIDC, Turbhe, Navi Mumbai,Maharashtra - 400 705.",
      // },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Majestique Evolvus 1, 2, 3 BHK & Jodi in Navi Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Majestique Evolvus,Navi Mumbai. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Majestique Evolvus",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Majestique Evolvus | Terms & Conditions",
      description:
        "Please read these terms and conditions carefully before using our website.",
    },
    title: "Terms & Conditions",
    description:
      "Please read these terms and conditions carefully before using our website.",
    paragraphs: [
      {
        title: "",
        description:
          "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party",
      },
      {
        title: "Security",
        description:
          "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.",
      },
      {
        title: "Disclosing Information",
        description:
          "We do not disclose any personal information obtained about you from this website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms. We may also use the information to keep in contact with you and inform you of developments associated with us. You will be given the opportunity to remove yourself from any mailing list or similar device. If at any time in the future we should wish to disclose information collected on this website to any third party, it would only be with your knowledge and consent. We may from time to time provide information of a general nature to third parties - for example, the number of individuals visiting our website or completing a registration form, but we will not use any information that could identify those individuals. In addition, Marketing-Space may work with third parties for the purpose of delivering targeted behavioural advertising to the Marketing Space website. Through the use of cookies, anonymous information about your use of our websites and other websites will be used to provide more relevant adverts about goods and services of interest to you. For more information on online behavioural advertising and about how to turn this feature off, please visit https://marketing-space.in.",
      },
    ],
  },

  privacyPolicy: {
    seo: {
      title: "Majestique Evolvus | Privacy Policy",
      description: "This policy explains how we use your personal information.",
    },
    title: "Privacy Policy",
    description: "This policy explains how we use your personal information.",
    paragraphs: [
      {
        title: "",
        description:
          "In our endeavour and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.",
      },
      {
        title: "Updation of Privacy Policy",
        description:
          "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.",
      },
    ],
  },

  cookiesPolicy: {
    seo: {
      title: "Majestique Evolvus | Cookies Policy",
      description:
        "This policy explains how we use cookies and similar technologies on our website.",
    },
    title: "Cookies Policy",
    description:
      "This policy explains how we use cookies and similar technologies on our website.",
    paragraphs: [
      {
        title: "",
        description:
          "Your Internet browser has the in-built facility for storing small files - 'cookies' - that hold information which allows a website to recognise your account. Our website takes advantage of this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.",
      },
      {
        title: "",
        description:
          "We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact us.updates to you. Also, you hold an option of requesting removal from our mailing list. We do not share your personal information with any third party.",
      },
    ],
  },

  thankYou: {
    seo: {
      title: "Majestique Evolvus | Thank You",
      description: "Thank you for your interest in Majestique Evolvus",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_178",
      publicId: "5dd32b5d35c28f4504f3492b31c513d0",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Arihant Panvel",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Majestique Evolvus",
      },
    },
  },
};

export type MajesticEvolvusSiteConfig = typeof majesticEvolvusSiteConfig;
