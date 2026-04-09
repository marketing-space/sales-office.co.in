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

const route = routes.RaymondWadala;

export const raymondWadalaSiteConfig = {
  name: "Raymond Wadala", 
  about:
    "Raymond Realty is the real estate division of the esteemed Raymond Group, a trusted Indian conglomerate with a legacy spanning decades. Renowned for its commitment to quality, precision, and excellence, Raymond Realty has rapidly emerged as a prominent developer in Mumbai’s premium residential market. The brand focuses on crafting thoughtfully designed living spaces that blend contemporary architecture with efficient layouts and world-class amenities. With successful developments in Thane and across Mumbai, Raymond Realty places strong emphasis on transparency, timely delivery, and a customer-first approach to development. Each project reflects meticulous planning, superior construction standards, and a keen attention to detail — values that resonate with the Raymond Group’s long-standing legacy of trust and craftsmanship. Through landmark developments such as its Sion East project, Raymond Realty aims to redefine luxury living in prime urban locations, offering residents a refined lifestyle supported by strong infrastructure and seamless connectivity.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Wadala, Mumbai",
  },
  gtmId: "GTM-WKRRSBJ9",
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
        "Download the brochure to learn more about Raymond Wadala",
    },
  },

  branding: {
    logo: "/raymond-wadala/images/logo.png",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/raymond-wadala/images/banner-1.webp",
        alt: "Raymond Wadala Interior",
      },
      {
        src: "/raymond-wadala/images/banner-2.webp",
        alt: "Raymond Wadala Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Raymond Wadala.",
      },
      title: "Welcome to Raymond Wadala",
      description: `The Address by GS, Wadala is more than just a location—it represents a bold transformation in Mumbai’s evolving landscape. Presented by Raymond Realty, this landmark development introduces a fresh vision of luxury, positioning Wadala as the new focal point of refined urban living—often described as the “Next Throne of SoBo Central.” It seamlessly blends the timeless elegance of South Bombay with the dynamic growth of the central suburbs, offering residents not just a home, but a place among a new generation of elite city dwellers.

Every amenity at The Address by GS is thoughtfully designed to deliver a truly elevated lifestyle, combining comfort, exclusivity, and sophistication. Strategically located, Wadala stands at the convergence of major metro lines, sea links, and key express corridors—bridging the heritage of South Mumbai with the rapid development of the eastern suburbs. Perfectly central and future-ready, Wadala is no longer just an emerging destination—it is shaping what Mumbai’s next chapter will look like.
`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Wadala, Mumbai By Raymond Realty",
      points: [
        { text: "Limited Period Pre-Booking Window" },
        { text: "Early Bird Offers Live!*" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "5.6 Acres",
        },
        {
          title: "Floors",
          value: "31 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2029",
        },
      ],
      price: {
        title: "Luxurious 2 & 3 BHK Homes Starts from",
        value: "2.57 Cr*",
        suffix: "Onwards",
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
        carpetArea: "696 - 873 Sq.Ft.",
        price: "2.57 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1022 - 1316 Sq.Ft.",
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
        src: "/raymond-wadala/images/costing.webp",
        alt: "Raymond Wadala Costing",
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
        src: "/raymond-wadala/images/MasterPlan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Raymond Wadala",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-696-873",
          image: "/raymond-wadala/images/plan-1.webp",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1022-1316",
          image: "/raymond-wadala/images/plan-1.webp",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Raymond Wadala",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Raymond Wadala",
    },
    amenities: [
      {
        title: "Cafe",
        image: "/raymond-wadala/images/amenities/cafe1.webp",
        description: "",
      },
      {
        title: "Spa",
        image: "/raymond-wadala/images/amenities/SPAWELLNESSCENTER11.webp",
        description: "",
      },
      {
        title: "Yoga",
        image: "/raymond-wadala/images/amenities/Yoga.webp",
        description: "",
      },
      {
        title: "Karoke Room",
        image: "/raymond-wadala/images/amenities/Karoke.webp",
        description: "",
      },
      {
        title: "Mini Hall",
        image: "/raymond-wadala/images/amenities/Mini-Hall.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/raymond-wadala/images/amenities/minithether_01.webp",
        description: "",
      },

    ],
    stats: {
      title: "40+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Raymond Wadala",
    },
    images: [
      {
        title: "",
        image: "/raymond-wadala/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/raymond-wadala/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/raymond-wadala/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/raymond-wadala/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11491.321519507339!2d72.874315!3d19.041273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c923ab1a81af%3A0xb8a46cf72f484f98!2sThe%20Address%20By%20GS%20-%20Wadala!5e1!3m2!1sen!2sin!4v1775737800921!5m2!1sen!2sin",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Monorail",
        description: "1 Mins",
      },
      {
        title: "Eastern Freeway",
        description: "4 Mins",
      },
      {
        title: "Kikabhai Trust Hospital - ",
        description: "6 Mins",
      },
      {
        title: "Nowrosjee Wadia Maternity Hospital ",
        description: "13 Mins",
      },
      {
        title: "Imax Dome",
        description: "4 Mins ",
      },
      {
        title: "PVR Sion",
        description: "6 Mins",
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
      "Experience Raymond Wadala from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/raymond-wadala/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Raymond Wadala from the comfort of your home",
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
        src: "/raymond-wadala/images/ride.png",
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
          title: "Raymond Wadala",
          reraNumber: "PR1170002501904",
          qrCode: "/raymond-wadala/images/qr.png",
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
        title: "Rera Number",
        description:
        "Project Rera Number :PR1170002501904",
      },
      {
        title: "Site Address",
        description:
          "Site Address: near Wadala Monorail Depot, Shastri Nagar, Sion East, Sion, Mumbai, Maharashtra 400022",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Raymond Wadala  2, 3 & 4 BHK in Sion East, Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Raymond Wadala,Sion East, Mumbai.  2, 3 & 4 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Raymond Wadala",
      "2 bhk",
      "3 bhk",
      "4 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Raymond Wadala | Terms & Conditions",
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
      title: "Raymond Wadala | Privacy Policy",
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
      title: "Raymond Wadala | Cookies Policy",
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
      title: "Raymond Wadala | Thank You",
      description: "Thank you for your interest in Raymond Wadala",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_189",
      publicId: "b0bf6e472f25140d4bc73875f84df0a8",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Raymond Wadala" ,
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Raymond Wadala",
      },
    },
  },
};

export type RaymondWadalaSiteConfig = typeof raymondWadalaSiteConfig;
