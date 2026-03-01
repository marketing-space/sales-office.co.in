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

const route = routes.RahejaJadeCity;

export const neelkanthVerratonSiteConfig = {
  name: "Neelkanth Verraton",
  about:
    "Founded in 1980, Neelkanth has grown into one of the most respected real estate developers in Mumbai. With a diverse portfolio spanning residential developments, shopping malls, and commercial spaces, the company continues to shape modern lifestyles through a steadfast commitment to design excellence, superior construction quality, and dependable, on-time delivery.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Navi Mumbai",
  },
  gtmId: "GTM-WXHGV54V",
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
        "Download the brochure to learn more about Neelkanth Verraton",
    },
  },

  branding: {
    logo: "/neelkanth-verraton/images/logo.svg",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/neelkanth-verraton/images/banner-1.webp",
        alt: "Neelkanth Verraton Interior",
      },
      {
        src: "/neelkanth-verraton/images/banner-2.webp",
        alt: "Neelkanth Verraton Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Neelkanth Verraton.",
      },
      title: "Welcome to Neelkanth Verraton",
      description: `Neelkanth Verraton is truly awe-inspiring, evoking the elegance of the world’s most coveted addresses such as Santorini, Kensington Palace Gardens, and Palm Beach. Designed with a visionary approach, it introduces an exceptionally rare lifestyle to Mumbai.

Now unveiling the new Tower Verona at The Verraton—an address that not only meets but surpasses the expectations of refined living. Inspired by the concept of a 7-star lifestyle, it offers absolute luxury through world-class amenities, sophisticated design, and breathtaking landscaped surroundings.
`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Manpada, Thane By T. Bhimjyani Realty Pvt. Ltd.",
      points: [
        { text: "Flexi Payment Plan" },
        { text: "Spot Booking Offers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "34 Acres",
        },
        {
          title: "Floors",
          value: "G + 41 Storeys",
        },
        {
          title: "Possession",
          value: " Dec 2026",
        },
      ],
      price: {
        title: "Luxurious 2, 2.5 & 3 BHK Starts from",
        value: "1.66 Cr ",
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
        type: "2 BHK",
        carpetArea: "870 Sq.ft.",
        price: "1.66 Cr",
        suffix: "Onwards",
      },
      {
        type: "2.5 BHK Prime Plus",
        carpetArea: "994 Sq.ft.",
        price: "2.01 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1175 - 1311 Sq.ft.",
        price: "2.45 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/neelkanth-verraton/images/costing.webp",
        alt: "Neelkanth Verraton Costing",
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
        src: "/neelkanth-verraton/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Neelkanth Verraton",
      },
    },
    floorPlans: {
      categories: ["All","2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-870 Sq.ft.",
          image: "/neelkanth-verraton/images/plan-1.webp",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1175-1311 Sq.ft.",
          image: "/neelkanth-verraton/images/plan-2.webp",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Neelkanth Verraton",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Neelkanth Verraton",
    },
    amenities: [
      {
        title: "Gymnasium",
        image: "/neelkanth-verraton/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/neelkanth-verraton/images/amenities/swimmingpool_1.webp",
        description: "",
      },
      {
        title: "Library",
        image: "/neelkanth-verraton/images/amenities/library_01.webp",
        description: "",
      },
      {
        title: "Indoor Games",
        image: "/neelkanth-verraton/images/amenities/Indoorgamesroom1.webp",
        description: "",
      },
      {
        title: "Meditation",
        image: "/neelkanth-verraton/images/amenities/yogazone_1.webp",
        description: "",
      },
      {
        title: "Multi Purpose Court",
        image: "/neelkanth-verraton/images/amenities/multipurposecourt1.webp",
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
      description: "Download the gallery of Neelkanth Verraton",
    },
    images: [
      {
        title: "",
        image: "/neelkanth-verraton/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/neelkanth-verraton/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/neelkanth-verraton/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/neelkanth-verraton/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.3177754560606!2d72.9662143752096!3d19.243222881996076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb919a7ece8f%3A0x6e867ab813d32a1b!2sThe%20Verraton%20Neelkanth%20Woods!5e1!3m2!1sen!2sin!4v1772345132221!5m2!1sen!2sin",
    image: {
      src: "/neelkanth-verraton/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Ghodbunder Road",
        description: "02 Min",
      },
      {
        title: "Eastern Express Highway ",
        description: "05 Min",
      },
      {
        title: "Thane Railway Station",
        description: "05 Min",
      },
      {
        title: "BKC via Santacruz- Chembur Link ",
        description: "10 Min",
      },
      {
        title: "Domestic Airport",
        description: "29 Mi",
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
      "Experience Neelkanth Verraton from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/neelkanth-verraton/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Neelkanth Verraton from the comfort of your home",
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
        src: "/neelkanth-verraton/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Neelkanth Verraton, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Neelkanth Verraton",
          reraNumber: "MahaRERA -P51700021698",
          qrCode: "/neelkanth-verraton/images/qr.webp",
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
          "RERA Project Registration No.:P51700021698",
      },
      {
        title: "Site Address",
        description:
          "Tikuji Ni Wadi Rd, Manpada, Resort, Thane, Maharashtra 400610",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Neelkanth Verraton 1, 2, 3 BHK & Jodi in Navi Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Neelkanth Verraton,Navi Mumbai. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Neelkanth Verraton",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Neelkanth Verraton | Terms & Conditions",
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
      title: "Neelkanth Verraton | Privacy Policy",
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
      title: "Neelkanth Verraton | Cookies Policy",
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
      title: "Neelkanth Verraton | Thank You",
      description: "Thank you for your interest in Neelkanth Verraton",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_176",
      publicId: "81821a85db616f148024325ee1da54c8",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Neelkanth Verraton",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Neelkanth Verraton",
      },
    },
  },
};

export type NeelkanthVerratonSiteConfig = typeof neelkanthVerratonSiteConfig;
