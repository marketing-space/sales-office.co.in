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

const route = routes.GeraKharadi;

export const geraKharadiSiteConfig = {
  name: "Gera - Own The Blue",
  about:
    `Gera Developers is a well-known name in the real estate industry, recognized for its commitment to quality, innovation, and customer-focused design. The company has pioneered the concept of child-centric homes, creating thoughtfully planned townships in some of India’s prime cities.

With a strong track record, Gera Developers has delivered homes to over 10,000 families and developed more than 6 million sq. ft. of space across Pune, Bengaluru, Goa, and even internationally in California. Their projects are built on the principles of transparency, customer satisfaction, and design-led, value-driven living.

The developer has also earned numerous awards and accolades, reflecting its dedication to excellence. Known for incorporating eco-friendly construction practices and sustainable features, Gera Developers continues to set benchmarks in creating modern, responsible, and comfortable living environments.

`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "East Kharadi, Pune",
  },
  gtmId: "GTM-PR9X252D",
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
        "Download the brochure to learn more about Gera - Own The Blue",
    },
  },

  branding: {
    logo: "/gera-kharadi/images/logo.svg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/gera-kharadi/images/banner-1.webp",
        alt: "Gera - Own The Blue Interior",
      },
      {
        src: "/gera-kharadi/images/banner-2.webp",
        alt: "Gera - Own The Blue Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Gera - Own The Blue.",
      },
      title: "Welcome to Gera - Own The Blue",
      description: `Gera Code: Own the Blue is an iconic lifestyle destination in East Kharadi, thoughtfully set within a premium 7.5-acre enclave and limited to just 120 ultra-exclusive residences. Designed for elevated urban living, the project offers spacious 3, 3.5, 4, and 4.5 BHK homes, making it one of the most distinctive residential offerings in Kharadi.

Each residence is crafted to deliver a sense of openness and luxury, featuring private plunge pools, expansive sit-outs, and two-sided open layouts. These elements come together to create a refined living experience that blends comfort, privacy, and sophistication.

The development offers a curated lifestyle with a host of indulgent amenities, including a spa, digital detox zones, private theatre, nutrition café, branded gym, jacuzzi, and elegant leisure lounges. Designed with a strong focus on wellness and exclusivity, every space enhances the feeling of a resort-like retreat within the city.

Residents can also enjoy world-class sports facilities such as tennis and pickleball courts, indoor badminton, and a dedicated sports arena. With private elevator access and meticulous attention to detail, the project ensures both convenience and exclusivity.

Whether you are looking for a spacious family home or a premium upgrade, Gera Code: Own the Blue stands out as a truly exclusive address in Kharadi—ideal for those who value space, privacy, and a sophisticated lifestyle.

`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "Kharadi, Pune by Gera Developments",
      points: [
        { text: "Avail Spot Booking Offers" },
        { text: "Early Bird Discount Available" },
        { text: "EOI Window Open" },
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
        // {
        //   title: "Floors",
        //   value: "G+19 Floors",
        // },
        // {
        //   title: "Possession",
        //   value: "Dec, 2027",
        // },
      ],
      price: {
        title: "Luxurious 3, 3.5 & 4.5 BHK Residences Starts from",
        value: "1.26 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of 3 3.5 & 4.5 BHK rescidences , each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK Grand",
        carpetArea: "1062 Sq.Ft.",
        price: "1.26 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Royal",
        carpetArea: "1264 Sq.Ft.",
        price: "1.47 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1,370 Sq.Ft.",
        price: "1.68 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3.5 BHK",
        carpetArea: "1,677 Sq.Ft.",
        price: "2.10 Cr*",
        suffix: "Onwards",
      },
      {
        type: "4.5 BHK",
        carpetArea: "2,224 Sq.Ft.",
        price: "2.90 Cr*",
        suffix: "Onwards",
      },
      {
        type: "Office Spaces",
        carpetArea: "566 Sq.Ft. - 2664 Sq.Ft.",
        price: "1.70 Cr* - 5.75 Cr*",
        suffix: "Onwards",
      },
      {
        type: "Shops",
        carpetArea: "1106 Sq.Ft. - 3072 Sq.Ft.",
        price: "7.50 Cr* - 17.24 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/gera-kharadi/images/costing.webp",
        alt: "Gera - Own The Blue Costing",
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
        src: "/gera-kharadi/images/coming.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Gera - Own The Blue",
      },
    },
    floorPlans: {
      categories: ["All", "3 BHK", "4.5 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1,370",
          image: "/gera-kharadi/images/coming.jpg",
          category: "3 BHK",
        },
        {
          type: "4.5 BHK-2,224",
          image: "/gera-kharadi/images/coming.jpg",
          category: "4.5 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Gera - Own The Blue",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Gera - Own The Blue",
    },
    amenities: [
      {
        title: "Meditation Zone",
        image: "/gera-kharadi/images/amenities/meditation-zone.webp",
        description: "",
      },
      {
        title: "Library",
        image: "/gera-kharadi/images/amenities/Library.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/gera-kharadi/images/amenities/Mini-Theatre.webp",
        description: "",
      },
      {
        title: "Gardening Area",
        image: "/gera-kharadi/images/amenities/Gardening-Area.webp",
        description: "",
      },
      {
        title: "Half Olympic Swimming",
        image: "/gera-kharadi/images/amenities/Swimming-Pool.webp",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/gera-kharadi/images/amenities/Pet-Park.webp",
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
      description: "Download the gallery of Gera - Own The Blue",
    },
    images: [
      {
        title: "",
        image: "/gera-kharadi/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/gera-kharadi/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/gera-kharadi/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/gera-kharadi/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5762.772011745348!2d73.983481!3d18.540528!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1775820159911!5m2!1sen!2sin",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Panchshil Tower",
        description: "5 Mins",
      },
      {
        title: "Upcoming Kharadi Metro Station",
        description: "10 Mins",
      },
      {
        title: "Holy Angels Convent High School",
        description: "6 Mins",
      },
      {
        title: "Shree Lifecare Hospital",
        description: "12 Mins",
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
      "Experience Gera - Own The Blue from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/gera-kharadi/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Gera - Own The Blue from the comfort of your home",
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
        src: "/gera-kharadi/images/ride.png",
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
        // "According to the RERA Act 2016 of the Government of India, all projects of the Gera - Own The Blue, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Gera - Own The Blue",
          reraNumber: "Project Rera Number : PR1261012500289",
          qrCode: "/gera-kharadi/images/qr.webp",
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
          "RERA Project Registration No.: PR1261012500289",
      },
      // {
      //   title: "Site Address",
      //   description:
      //     "Site Address:Gera - Own The Blue: opposite to EON Free Zone, EON Free Zone, Kharadi, Pune, Maharashtra 411014",
      // },
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
      "Gera - Own The Blue  3, 3.5 & 4.5  BHK in East Kharadi | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Gera - Own The Blue,East Kharadi . 3, 3.5 & 4.5  BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Gera - Own The Blue",
      "3 bhk",
      "3.5 bhk",
      "4.5 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Gera - Own The Blue | Terms & Conditions",
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
      title: "Gera - Own The Blue | Privacy Policy",
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
      title: "Gera - Own The Blue | Cookies Policy",
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
      title: "Gera - Own The Blue | Thank You",
      description: "Thank you for your interest in Gera - Own The Blue",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_129" ,
      publicId: "3f9f710860637c0e9d8c635a0932d645",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Gera Kharadi",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Gera - Own The Blue",
      },
    },
  },
};

export type GeraKharadiSiteConfig = typeof geraKharadiSiteConfig;
