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

const route = routes.RaymondSion;

export const raymondSionSiteConfig = {
  name: "Raymond New Launch",
  about:
    "Raymond Realty is the real estate division of the esteemed Raymond Group, a trusted Indian conglomerate with a legacy spanning decades. Renowned for its commitment to quality, precision, and excellence, Raymond Realty has rapidly emerged as a prominent developer in Mumbai’s premium residential market. The brand focuses on crafting thoughtfully designed living spaces that blend contemporary architecture with efficient layouts and world-class amenities. With successful developments in Thane and across Mumbai, Raymond Realty places strong emphasis on transparency, timely delivery, and a customer-first approach to development. Each project reflects meticulous planning, superior construction standards, and a keen attention to detail — values that resonate with the Raymond Group’s long-standing legacy of trust and craftsmanship. Through landmark developments such as its Sion East project, Raymond Realty aims to redefine luxury living in prime urban locations, offering residents a refined lifestyle supported by strong infrastructure and seamless connectivity.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Panvel",
  },
  gtmId: "GTM-WVDGLMM3",
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
        "Download the brochure to learn more about Raymond New Launch",
    },
  },

  branding: {
    logo: "/raymond-sion/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/raymond-sion/images/banner1.jpg",
        alt: "Raymond New Launch Interior",
      },
      {
        src: "/raymond-sion/images/banner2.jpg",
        alt: "Raymond New Launch Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Raymond New Launch.",
      },
      title: "Welcome to Raymond New Launch",
      description: `Discover a new benchmark of luxury living at Raymond Realty Sion, a prestigious residential address located in the heart of Mumbai. Thoughtfully crafted to offer the perfect balance of elegance, comfort, and seamless connectivity, this landmark development is redefining modern urban lifestyles in one of the city’s most desirable locations.

From the moment you arrive, you are welcomed by meticulously planned spaces that showcase refined architecture and contemporary design. Every element has been carefully curated to create homes that are not only visually striking but also exceptionally functional, ensuring a seamless and elevated living experience for discerning homeowners.

Surrounded by excellent infrastructure, vibrant neighborhoods, and easy access to key business districts, Raymond Realty Sion offers the perfect setting for a lifestyle that blends convenience with sophistication. Whether you seek a serene retreat from the city’s pace or a well-connected address close to everything that matters, this development presents the ideal balance of luxury and practicality.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Sion East, Mumbai By Raymond Realty",
      points: [
        { text: "EOI Window Now Open" },
        { text: "Avail Exclusive Pre-Launch Offers" },
        { text: "Jain Mandir in Premises" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "4 Acres",
        },
        {
          title: "Towers",
          value: "5",
        },
        {
          title: "Possession",
          value: "March 2026",
        },
      ],
      price: {
        title: "Luxurious 2, 3 & 4 BHK Starts from",
        value: "On Request",
        suffix: "",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "720 - 825 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "3 BHK",
        carpetArea: "970 - 1450 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "4 BHK",
        carpetArea: "1454 - 2313 Sq.Ft.",
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
        src: "/raymond-sion/images/costing.webp",
        alt: "Raymond New Launch Costing",
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
        src: "/raymond-sion/images/coming.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Raymond New Launch",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-720-825",
          image: "/raymond-sion/images/plan.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-970-1450",
          image: "/raymond-sion/images/plan.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1454-2313",
          image: "/raymond-sion/images/plan.jpg",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Raymond New Launch",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Raymond New Launch",
    },
    amenities: [
      {
        title: "Club House",
        image: "/raymond-sion/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Entry Lobby",
        image: "/raymond-sion/images/amenities/entrylobby.jpg",
        description: "",
      },
      {
        title: "Gym",
        image: "/raymond-sion/images/amenities/gymnasium_1.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/raymond-sion/images/amenities/minithether_01.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/raymond-sion/images/amenities/swimmingpools1.webp",
        description: "",
      },
      {
        title: "Spa",
        image: "/raymond-sion/images/amenities/spa.jpg",
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
      description: "Download the gallery of Raymond New Launch",
    },
    images: [
      {
        title: "",
        image: "/raymond-sion/images/gallery/g1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/raymond-sion/images/gallery/g2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/raymond-sion/images/gallery/g3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/raymond-sion/images/gallery/g4.jpg",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11491.875724793286!2d72.860175!3d19.033265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf002c0fe6d7%3A0x28733d0d5623cdea!2sRaymond%20Realty%20Sion!5e1!3m2!1sen!2sin!4v1772777764723!5m2!1sen!2sin",
    image: {
      src: "/raymond-sion/images/map.jpg",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: " Eastern Express Highway",
        description: "2 mins",
      },
      {
        title: "BKC",
        description: "7 mins",
      },
      {
        title: "Mumbai Trans Harbour Link",
        description: "10 mins",
      },
      {
        title: "Lower Parel",
        description: "10 mins",
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
      "Experience Raymond New Launch from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/raymond-sion/images/banner1.jpg",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Raymond New Launch from the comfort of your home",
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
        src: "/raymond-sion/images/ride.png",
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
        "",
      details: [
        {
          title: "Raymond New Launch",
          reraNumber: "",
          qrCode: "/raymond-sion/images/coming.jpg",
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
        title: "Site Address",
        description:
          "Site Address: Rd Number 31, Namdev Koli Marg, Sion, Mumbai, Maharashtra 400022",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Raymond New Launch  2, 3 & 4 BHK in Sion East, Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Raymond New Launch,Sion East, Mumbai.  2, 3 & 4 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Raymond New Launch",
      "2 bhk",
      "3 bhk",
      "4 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Raymond New Launch | Terms & Conditions",
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
      title: "Raymond New Launch | Privacy Policy",
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
      title: "Raymond New Launch | Cookies Policy",
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
      title: "Raymond New Launch | Thank You",
      description: "Thank you for your interest in Raymond New Launch",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_179",
      publicId: "66b3261305782ed5be1e3f3ba3899875",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Raymond Sion",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Raymond New Launch",
      },
    },
  },
};

export type RaymondSionSiteConfig = typeof raymondSionSiteConfig;
