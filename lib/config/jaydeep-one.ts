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

const route = routes.JaydeepOne;

export const jaydeepOneConfig = {
  name: "Jaydeep One",
  about:
    "Jaydeep Group is a trusted name committed to delivering excellence, innovation, and long-term value across every project we undertake. With a strong foundation built on integrity, quality, and customer satisfaction, we specialize in creating spaces and solutions that enhance modern lifestyles while maintaining the highest standards of craftsmanship. Our team combines industry expertise with a forward-thinking approach to ensure timely delivery and superior results. At Jaydeep Group, we believe in building not just projects, but lasting relationships—driven by transparency, reliability, and a passion for excellence.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Mulund",
  },
  gtmId: "GTM-N7SLTPBP",
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
        "Download the brochure to learn more about Jaydeep One",
    },
  },

  branding: {
    logo: "/jaydeep-one/images/logo.jpeg",
    favicon: "/Logo.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/jaydeep-one/images/banner-1.png",
        alt: "Jaydeep One Interior",
      },
      {
        src: "/jaydeep-one/images/banner-2.png",
        alt: "Jaydeep One Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Jaydeep One.",
      },
      title: "Welcome to Jaydeep One",
      description: `Arihant Aspire Codename Ace of Panvel is a newly launched tower within this premium township, strategically located at Palaspe Phata, Panvel. It offers thoughtfully designed 1 BHK, 2 BHK, and 3 BHK luxury residences, complete with expansive decks and dedicated office spaces.

Each apartment features a smart, functional layout, refined finishes, and premium sanitary fittings, while opening up to stunning views of lush green surroundings. This gated community is enriched with an impressive range of modern amenities, including a mini theatre, clubhouse, gymnasium, maze garden, banquet hall, organic spa, pet zones, water fountains, cycling track, landscaped gardens, and a dedicated kids’ play area—creating a perfect blend of comfort, elegance, and lifestyle convenience.
`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Panvel by Arihant Superstructure",
      points: [
        { text: "Flexi Payment Plan" },
        { text: "Spot Booking Offers" },
        { text: "EOI Of ₹ 1 Lakhs" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "0.5 Acres",
        },
        {
          title: "Floors",
          value: "22 Storey",
        },
        // {
        //   title: "Possession",
        //   value: "March 2026",
        // },
      ],
      price: {
        title: "Luxurious 1 & 2 BHK Starts from",
        value: "1.18 Cr",
        suffix: "All Inc.",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "480 Sq.Ft.",
        price: "1.18 Cr",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "540 Sq.Ft.",
        price: "1.43 Cr",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "580 Sq.Ft.",
        price: "1.50 Cr",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "605 Sq.Ft.",
        price: "1.58 Cr",
        suffix: "All Inc",
      },
      {
        type: "2 BHK with Deck",
        carpetArea: "725 Sq.Ft.",
        price: "1.73 Cr",
        suffix: "All Inc",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/jaydeep-one/images/costing.webp",
        alt: "Jaydeep One Costing",
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
        src: "/jaydeep-one/images/coming.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Jaydeep One",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-480",
          image: "/jaydeep-one/images/plan-1.png",
          category: "1 BHK",
        },
        {
          type: "1 BHK-725",
          image: "/jaydeep-one/images/plan-2.png",
          category: "1 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Jaydeep One",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Jaydeep One",
    },
    amenities: [
      {
        title: "Swimming Pool",
        image: "/jaydeep-one/images/amenities/swimmingpools1.webp",
        description: "",
      },
      {
        title: "Yoga",
        image: "/jaydeep-one/images/amenities/yogazone1.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/jaydeep-one/images/amenities/joggingtrack.jpg",
        description: "",
      },
      {
        title: "Multi Purpose Hall",
        image: "/jaydeep-one/images/amenities/MultipurposeHall11.webp",
        description: "",
      },
      {
        title: "Senior Citizen Area",
        image: "/jaydeep-one/images/amenities/senior-citizen-area.jpg",
        description: "",
      },
      {
        title: "Garden",
        image: "/jaydeep-one/images/amenities/garden.jpg",
        description: "",
      },
    ],
    stats: {
      title: "42+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Jaydeep One",
    },
    images: [
      {
        title: "",
        image: "/jaydeep-one/images/gallery/g1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/jaydeep-one/images/gallery/g2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/jaydeep-one/images/gallery/g3.jpg",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.5866992188216!2d72.965266!3d19.170504999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9003ea88b7b%3A0x5cfea1fa9f7049cb!2sJaydeep%20One!5e1!3m2!1sen!2sin!4v1774011626356!5m2!1sen!2sin",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Line 4 Mumbai metro",
        description: "13 Mins",
      },
      {
        title: "Thane Railway Station",
        description: "14 Mins",
      },
      {
        title: "Apna Bazaar",
        description: "13 Mins",
      },
      {
        title: "BKC Connector",
        description: "26 Mins",
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
      "Experience Jaydeep One from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/jaydeep-one/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Jaydeep One from the comfort of your home",
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
        src: "/jaydeep-one/images/ride.png",
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
      description: "",
        // "According to the RERA Act 2016 of the Government of India, all projects of the Jaydeep One, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Jaydeep One",
          reraNumber: "",
          qrCode: "/jaydeep-one/images/coming.jpg",
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
      //     "RERA Project Registration No.:P52000014107",
      // },
      {
        title: "Site Address",
        description:
          "Site Address: Jaydeep One:Bhanu Darshan Gali, Gurupushyamrut Society, Arunoday Nagar, Mulund East, Mumbai, Maharashtra 400081",
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
      "Jaydeep One 1 & 2 BHK in Mulund | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Jaydeep One,Mulund. 1 & 2 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Jaydeep One",
      "1 bhk",
      "2 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Jaydeep One | Terms & Conditions",
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
      title: "Jaydeep One | Privacy Policy",
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
      title: "Jaydeep One | Cookies Policy",
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
      title: "Jaydeep One | Thank You",
      description: "Thank you for your interest in Jaydeep One",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_184",
      publicId: "78ddfc627691a319641473d7a7d3ad9d",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Jaydeep One",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Jaydeep One",
      },
    },
  },
};

export type JaydeepOneConfig = typeof jaydeepOneConfig;
