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

const route = routes.VJBalevadi;

export const vjBalevadiSiteConfig = {
  name: "Vj Balewadi Central",
  about:
    `Vilas Javdekar Developers is a well-established and trusted name in Pune’s real estate market. With a strong track record and a loyal customer base, the group is committed to delivering high-quality projects that strike the perfect balance between luxury and affordability.

Built on the core values of trust and transparency, the developer focuses on creating thoughtfully designed homes with innovative features and modern aesthetics. Each project reflects attention to detail and a commitment to enhancing the overall living experience.

Some of the group’s notable developments include Yashwin Hinjewadi, Portia, Palash 2i, and Prime Panache, showcasing its consistent excellence in crafting desirable residential spaces.

`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "East Kharadi, Pune",
  },
  gtmId: "GTM-5RM7JLVK",
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
        "Download the brochure to learn more about Vj Balewadi Central",
    },
  },

  branding: {
    logo: "/vj-balevadi/images/logo.svg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/vj-balevadi/images/banner-1.webp",
        alt: "Vj Balewadi Central Interior",
      },
      {
        src: "/vj-balevadi/images/banner-2.webp",
        alt: "Vj Balewadi Central Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Vj Balewadi Central.",
      },
      title: "Welcome to Vj Balewadi Central",
      description: `Vilas Javdekar Developers, widely recognized as one of Pune’s most trusted real estate brands, are set to introduce their latest premium project—Palladio Balewadi Central in the prime locale of Balewadi.

Spread across approximately 6.5 acres, the development is thoughtfully planned with five elegant towers, each rising up to 34 storeys. It will offer luxurious 3 and 4 BHK residences, designed with efficient layouts, superior specifications, and careful attention to Vaastu principles.

Blending modern architecture with functional design, Palladio Balewadi Central promises a refined living experience tailored for those seeking comfort, quality, and a prestigious address in Pune.

`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "Kharadi, Pune by Gera Developments",
      points: [
        { text: "Limited Time Period Offer" },
        { text: "High-Speed Elevators" },
        { text: "Early Buy Discounts" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: " 7.5 Acre",
        },
        {
          title: "Floors",
          value: "34 Floors",
        },
        {
          title: "Possession",
          value: "2029",
        },
      ],
      price: {
        title: "Luxurious 3 & 4 BHK Homes Starts from",
        value: "1.70 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of 3 & 4.5 BHK rescidences , each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1050 Sq.Ft. - 1150 Sq.Ft.",
        price: "1.70 Cr* - 1.80 Cr*",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "1500 Sq.Ft. - 1550 Sq.Ft.",
        price: "2.25 Cr* - 2.50 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/vj-balevadi/images/costing.webp",
        alt: "Vj Balewadi Central Costing",
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
        src: "/vj-balevadi/images/master-plan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Vj Balewadi Central",
      },
    },
    floorPlans: {
      categories: ["All", "3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1050-1150 ",
          image: "/vj-balevadi/images/floorplan1.webp",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1500-1550",
          image: "/vj-balevadi/images/floorplan2.webp",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Vj Balewadi Central",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Vj Balewadi Central",
    },
    amenities: [
      {
        title: "Lawn Terrace",
        image: "/vj-balevadi/images/amenities/lawn-terrace.jpg",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/vj-balevadi/images/amenities/kids-play-area-1.jpg",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/vj-balevadi/images/amenities/swimming-pool-1.jpg",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/vj-balevadi/images/amenities/jogging.jpg",
        description: "",
      },
      {
        title: "Skating Rink",
        image: "/vj-balevadi/images/amenities/skating_01.webp",
        description: "",
      },
      {
        title: "Multipurpose Lawn",
        image: "/vj-balevadi/images/amenities/multipurpose-lawn.jpg",
        description: "",
      },
    ],
    stats: {
      title: "50+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Vj Balewadi Central",
    },
    images: [
      {
        title: "",
        image: "/vj-balevadi/images/gallery/g1.png",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/vj-balevadi/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/vj-balevadi/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/vj-balevadi/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7383909490486!2d73.7787338!3d18.578886800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90e9ab7e55d%3A0x945538b0be3feb71!2sPalladio%20Balewadi%20Central%20by%20Vilas%20Javdekar%20Developers!5e1!3m2!1sen!2sin!4v1775893448420!5m2!1sen!2sin",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "CM International School",
        description: "900 M",
      },
      {
        title: "Bharti Vidyapith ",
        description: "1 km",
      },
      {
        title: "D-Mart, Balewadi",
        description: "2 km",
      },
      {
        title: "Balewadi Highstreet",
        description: "1 km",
      },
      {
        title: "Balewadi Stadium",
        description: "2.2 km",
      },
      {
        title: "Jupital Hospital",
        description: "1.5 km",
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
      "Experience Vj Balewadi Central from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/vj-balevadi/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Vj Balewadi Central from the comfort of your home",
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
        src: "/vj-balevadi/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Vj Balewadi Central, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Vj Balewadi Central",
          reraNumber: "Project Rera Number : P52100051590",
          qrCode: "/vj-balevadi/images/qr.webp",
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
          "RERA Project Registration No.: P52100051590",
      },
      {
        title: "Site Address",
        description:
          "Site Address:1, Balewadi High St, Baner, Pune, Maharashtra 411045",
      },
      // {
      //   title: "Contact Us",
      //   description:
      //     "Contact Us: Corporate Office: 200, Gera Plaza, Boat Club Rd, Sangamvadi, Pune, Maharashtra 411001",
      // },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Vj Balewadi Central  3, 3.5 & 4.5  BHK in East Kharadi | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Vj Balewadi Central,East Kharadi . 3, 3.5 & 4.5  BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Vj Balewadi Central",
      "3 bhk",
      "3.5 bhk",
      "4.5 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Vj Balewadi Central | Terms & Conditions",
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
      title: "Vj Balewadi Central | Privacy Policy",
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
      title: "Vj Balewadi Central | Cookies Policy",
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
      title: "Vj Balewadi Central | Thank You",
      description: "Thank you for your interest in Vj Balewadi Central",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_193",
      publicId: "985c60c927e1ef706c6d340d4c77b626",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "VJ Balevadi",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Vj Balewadi Central",
      },
    },
  },
};

export type VJBalevadiSiteConfig = typeof vjBalevadiSiteConfig;
