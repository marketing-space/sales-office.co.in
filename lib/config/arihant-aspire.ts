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

const route = routes.AshfordRegal;

export const arihantAspireSiteConfig = {
  name: "Arihant Aspire Codename ACE of Panvel",
  about:
    "Arihant Superstructures Ltd. is a renowned developer in Mumbai, known for delivering quality homes across both budget and luxury segments. The company has a strong presence in key locations such as Vashi, Panvel, Kharghar, Khopoli, Taloja, Badlapur, and Kalyan–Shil Road.Committed to creating modern, stylish living spaces, the developer also incorporates environmentally sustainable practices across select projects. With over 8,000 families already served, the company has delivered not just homes but also strong value appreciation for its investors in recent years.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Panvel",
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
        "Download the brochure to learn more about Arihant Aspire Codename ACE of Panvel",
    },
  },

  branding: {
    logo: "/arihant-aspire/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/arihant-aspire/images/banner-1.webp",
        alt: "Arihant Aspire Codename ACE of Panvel Interior",
      },
      {
        src: "/arihant-aspire/images/banner-2.webp",
        alt: "Arihant Aspire Codename ACE of Panvel Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Arihant Aspire Codename ACE of Panvel.",
      },
      title: "Welcome to Arihant Aspire Codename ACE of Panvel",
      description: `Arihant Aspire Codename Ace of Panvel is a newly launched tower within this premium township, strategically located at Palaspe Phata, Panvel. It offers thoughtfully designed 1 BHK, 2 BHK, and 3 BHK luxury residences, complete with expansive decks and dedicated office spaces.

Each apartment features a smart, functional layout, refined finishes, and premium sanitary fittings, while opening up to stunning views of lush green surroundings. This gated community is enriched with an impressive range of modern amenities, including a mini theatre, clubhouse, gymnasium, maze garden, banquet hall, organic spa, pet zones, water fountains, cycling track, landscaped gardens, and a dedicated kids’ play area—creating a perfect blend of comfort, elegance, and lifestyle convenience.
`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Panvel by Arihant Superstructure",
      points: [
        { text: "Launching New Tower Beneta" },
        { text: "EOI Of ₹ 1.08 Lakhs" },
        { text: "Save Big On Early Buy Discounts" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "16 Acres",
        },
        {
          title: "Floors",
          value: "42 Storey",
        },
        {
          title: "Possession",
          value: " March 2026",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts from",
        value: "54 Lacs ",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK (O)",
        carpetArea: "430 Sq.Ft. - 450 Sq.Ft.",
        price: "54 Lacs - 57 Lacs",
        suffix: "Onwards",
      },
      {
        type: "1 BHK",
        carpetArea: "403 Sq.Ft.",
        price: "56 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "583 Sq.Ft.",
        price: "76 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK (O)",
        carpetArea: "725 Sq.Ft.",
        price: "86 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK (O)",
        carpetArea: "680 Sq.Ft. - 750 Sq.Ft.",
        price: "79 Lacs - 88 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3 BHK (O)",
        carpetArea: "950 Sq.Ft. - 1000 Sq.Ft.",
        price: "1.11 Cr - 1.21 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/arihant-aspire/images/costing.webp",
        alt: "Arihant Aspire Codename ACE of Panvel Costing",
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
        src: "/arihant-aspire/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Arihant Aspire Codename ACE of Panvel",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-403",
          image: "/arihant-aspire/images/plan.jpg",
          category: "1 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Arihant Aspire Codename ACE of Panvel",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Arihant Aspire Codename ACE of Panvel",
    },
    amenities: [
      {
        title: "Mini Theater",
        image: "/arihant-aspire/images/amenities/minitheater11.webp",
        description: "",
      },
      {
        title: "Spa",
        image: "/arihant-aspire/images/amenities/spa11.webp",
        description: "",
      },
      {
        title: "Multi Purpose Hall",
        image: "/arihant-aspire/images/amenities/MultipurposeHall11.webp",
        description: "",
      },
      {
        title: "Reception",
        image: "/arihant-aspire/images/amenities/reception11.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/arihant-aspire/images/amenities/swmming_01.webp",
        description: "",
      },
      {
        title: "Temple",
        image: "/arihant-aspire/images/amenities/temple11.webp",
        description: "",
      },
      {
        title: "Food Mart",
        image: "/arihant-aspire/images/amenities/foodmart11.webp",
        description: "",
      },
      {
        title: "Garden",
        image: "/arihant-aspire/images/amenities/garden_01.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/arihant-aspire/images/amenities/gymnasium_1.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/arihant-aspire/images/amenities/kidsplayarea11.webp",
        description: "",
      },
      {
        title: "Lobby",
        image: "/arihant-aspire/images/amenities/lobby11.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/arihant-aspire/images/amenities/Joggingtrack1.webp",
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
      description: "Download the gallery of Arihant Aspire Codename ACE of Panvel",
    },
    images: [
      {
        title: "",
        image: "/arihant-aspire/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/arihant-aspire/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/arihant-aspire/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/arihant-aspire/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.1872586583086!2d73.13135849999999!3d18.9627078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e7fbcdaa9059%3A0xb940f2db4f6bb64b!2sArihant%20Aspire!5e1!3m2!1sen!2sin!4v1772350908901!5m2!1sen!2sin",
    image: {
      src: "/arihant-aspire/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Palaspe Phata Bus Station",
        description: "4 mins",
      },
      {
        title: "St Johannes International School",
        description: "15 mins",
      },
      {
        title: "Reach Panvel Railway Station",
        description: "15 mins",
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
      "Experience Arihant Aspire Codename ACE of Panvel from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/arihant-aspire/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Arihant Aspire Codename ACE of Panvel from the comfort of your home",
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
        src: "/arihant-aspire/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Arihant Aspire Codename ACE of Panvel, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Arihant Aspire Codename ACE of Panvel",
          reraNumber: "MahaRERA - P52000014107",
          qrCode: "/arihant-aspire/images/qr.webp",
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
          "RERA Project Registration No.:P52000014107",
      },
      {
        title: "Site Address",
        description:
          "Site Address: Arihant Aspire Codename ACE of Panvel: Palaspe Phata, Panvel, Navi Mumbai, Maharashtra 410221",
      },
      {
        title: "Contact Us",
        description:
          "Contact Us: Corporate Office: Corporate Office: Arihant Superstructure: Floor No. 26, Plot No 13/1 ⚊ TTC Industrial Area, Thane Belapur Road, Turbhe MIDC, Turbhe, Navi Mumbai,Maharashtra - 400 705.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Arihant Aspire Codename ACE of Panvel 1, 2, 3 BHK & Jodi in Navi Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Arihant Aspire Codename ACE of Panvel,Navi Mumbai. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Arihant Aspire Codename ACE of Panvel",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Arihant Aspire Codename ACE of Panvel | Terms & Conditions",
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
      title: "Arihant Aspire Codename ACE of Panvel | Privacy Policy",
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
      title: "Arihant Aspire Codename ACE of Panvel | Cookies Policy",
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
      title: "Arihant Aspire Codename ACE of Panvel | Thank You",
      description: "Thank you for your interest in Arihant Aspire Codename ACE of Panvel",
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
        subject: "New Enquiry from Arihant Aspire Codename ACE of Panvel",
      },
    },
  },
};

export type ArihantAspireSiteConfig = typeof arihantAspireSiteConfig;
