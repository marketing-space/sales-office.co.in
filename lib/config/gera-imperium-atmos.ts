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

const route = routes.GeraImperiumAtmos;

export const geraImperiumAtmosSiteConfig = {
  name: "Gera Imperium Atmos",
  about:
    `Gera Developers is a well-known name in the real estate industry, recognized for its commitment to quality, innovation, and customer-focused design. The company has pioneered the concept of child-centric homes, creating thoughtfully planned townships in some of India’s prime cities.

With a strong track record, Gera Developers has delivered homes to over 10,000 families and developed more than 6 million sq. ft. of space across Pune, Bengaluru, Goa, and even internationally in California. Their projects are built on the principles of transparency, customer satisfaction, and design-led, value-driven living.

The developer has also earned numerous awards and accolades, reflecting its dedication to excellence. Known for incorporating eco-friendly construction practices and sustainable features, Gera Developers continues to set benchmarks in creating modern, responsible, and comfortable living environments.

`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kharadi, Pune",
  },
  gtmId: "GTM-KNX2JRD4",
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
        "Download the brochure to learn more about Gera Imperium Atmos",
    },
  },

  branding: {
    logo: "/gera-imperium-atmos/images/logo.svg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/gera-imperium-atmos/images/banner-1.webp",
        alt: "Gera Imperium Atmos Interior",
      },
      // {
      //   src: "/gera-imperium-atmos/images/banner-2.webp",
      //   alt: "Gera Imperium Atmos Interior",
      // },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Gera Imperium Atmos.",
      },
      title: "Welcome to Gera Imperium Atmos",
      description: `Gera Imperium Atmos is an upcoming commercial landmark in Kharadi, Pune, designed to elevate the workspace experience for modern businesses. This premium high-rise development will offer Grade-A office spaces tailored for startups, growing enterprises, and established organizations. In addition, it will feature well-planned spaces for branded retail outlets, restaurants, and cafés, creating a vibrant business ecosystem.

With its sleek glass façade and expansive frontage, the project ensures excellent visibility along one of Kharadi’s busiest commercial corridors. It is thoughtfully equipped with top-tier amenities, including a wide driveway, grand entrance lobby, ample parking, CCTV surveillance, power backup, high-speed elevators, and a comfortable waiting lounge.

Strategically located in Pune’s leading business district, Gera Imperium Atmos enjoys close proximity to prominent landmarks such as Radisson Blu Hotel, Four Points by Sheraton, Manipal Hospital, Phoenix Marketcity, EON IT Park, and the World Trade Center. The project also benefits from seamless connectivity via key routes like Dholepatil Farms Road, Magarpatta Road, the Pune-Ahilyanagar Highway, and access points such as Ramwadi Metro Station, Hadapsar Railway Station, and Pune International Airport.

Positioned at the heart of commercial growth, Gera Imperium Atmos offers an ideal destination to establish and expand a successful business in Pune.

`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "Kharadi, Pune by Gera Developments",
      points: [
        { text: "Instant Benefits On Spot-Booking" },
        { text: "Save Big On Early Buy Discounts" },
        { text: "Flexipay For First 100 Customers" },
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
          value: "G+19 Floors",
        },
        // {
        //   title: "Possession",
        //   value: "Dec, 2027",
        // },
      ],
      price: {
        title: "Luxurious Offices, Retail & F&B  Starts from",
        value: "1.45 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious Offices , Retail & F&B , each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "Offices",
        carpetArea: "On Request",
        price: "1.85 Cr",
        suffix: "Onwards",
      },
      {
        type: "Retail & F&B",
        carpetArea: "On Request",
        price: "7.50 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/gera-imperium-atmos/images/costing.webp",
        alt: "Gera Imperium Atmos Costing",
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
        src: "/gera-imperium-atmos/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Gera Imperium Atmos",
      },
    },
    floorPlans: {
      categories: ["All", "Offices", "Retail"],
      title: "Floor Plans",
      plans: [
        {
          type: "Offices",
          image: "/gera-imperium-atmos/images/plan-1.jpg",
          category: "Offices",
        },
        {
          type: "Retail & F&B",
          image: "/gera-imperium-atmos/images/plan-2.jpg",
          category: "Retail",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Gera Imperium Atmos",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Gera Imperium Atmos",
    },
    amenities: [
      {
        title: "Drive Pathway",
        image: "/gera-imperium-atmos/images/amenities/drivepathway.webp",
        description: "",
      },
      {
        title: "Extensive Frontage",
        image: "/gera-imperium-atmos/images/amenities/extensivefrontage.webp",
        description: "",
      },
      {
        title: "Grand Entrance Lobby",
        image: "/gera-imperium-atmos/images/amenities/grandentrancelobby.webp",
        description: "",
      },
      {
        title: "Parking Space",
        image: "/gera-imperium-atmos/images/amenities/parkingspace.webp",
        description: "",
      },
      {
        title: "High-Speed Elevators",
        image: "/gera-imperium-atmos/images/amenities/highspeedelevators.webp",
        description: "",
      },
      {
        title: "Waiting Lounge",
        image: "/gera-imperium-atmos/images/amenities/waitinglounge.webp",
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
      description: "Download the gallery of Gera Imperium Atmos",
    },
    images: [
      {
        title: "",
        image: "/gera-imperium-atmos/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/gera-imperium-atmos/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/gera-imperium-atmos/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/gera-imperium-atmos/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.191241674895!2d73.9494132!3d18.552072100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3f1480b525b%3A0xb3efd3efa93c6091!2sGera%27s%20Imperium%20Atmos!5e1!3m2!1sen!2sin!4v1775816309675!5m2!1sen!2sin",
    image: {
      src: "/gera-imperium-atmos/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Pune-Ahilyanagar Highway",
        description: "7 mins",
      },
      {
        title: "Hadapsar Railway Station",
        description: "15 mins",
      },
      {
        title: "Pune International Airport",
        description: "20 mins",
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
      "Experience Gera Imperium Atmos from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/gera-imperium-atmos/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Gera Imperium Atmos from the comfort of your home",
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
        src: "/gera-imperium-atmos/images/ride.png",
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
      description:"",
        // "According to the RERA Act 2016 of the Government of India, all projects of the Gera Imperium Atmos, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Gera Imperium Atmos",
          reraNumber: "",
          qrCode: "/gera-imperium-atmos/images/coming.jpg",
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
      // {
      //   title: "RERA Numbers",
      //   description:
      //     "RERA Project Registration No.: P52100054253",
      // },
      {
        title: "Site Address",
        description:
          "Site Address:Gera Imperium Atmos: opposite to EON Free Zone, EON Free Zone, Kharadi, Pune, Maharashtra 411014",
      },
      {
        title: "Contact Us",
        description:
          "Contact Us: Corporate Office: 200, Gera Plaza, Boat Club Rd, Sangamvadi, Pune, Maharashtra 411001",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Gera Imperium Atmos  2, 3 & 4 BHK in Central Kharadi | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Gera Imperium Atmos,Central Kharadi . 2, 3 & 4 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Gera Imperium Atmos",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Gera Imperium Atmos | Terms & Conditions",
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
      title: "Gera Imperium Atmos | Privacy Policy",
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
      title: "Gera Imperium Atmos | Cookies Policy",
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
      title: "Gera Imperium Atmos | Thank You",
      description: "Thank you for your interest in Gera Imperium Atmos",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_195" ,
      publicId: "24d827e973ffb1509b5eb24975e24540",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Gera Imperium Atmos",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Gera Imperium Atmos",
      },
    },
  },
};

export type GeraImperiumAtmosSiteConfig = typeof geraImperiumAtmosSiteConfig;
