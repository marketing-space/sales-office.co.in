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

const route = routes.WadhwaWiseCity;

export const wadhwaWiseCitySiteConfig = {
  name: "Wadhwa Wise City Launching New Tower",
  about:
    "With a legacy spanning over five decades, The Wadhwa Group stands among India’s most respected real estate developers. Its projects reflect enduring craftsmanship, forward-thinking vision, and distinctive architectural innovation. Known for designing spacious, well-ventilated residences filled with natural light, the group prioritizes comfort alongside quality. With a strong presence across key Mumbai neighborhoods such as Ghatkopar, Goregaon, Mulund, Powai, and Borivali, The Wadhwa Group has become synonymous with reliability and excellence in Indian real estate.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Panvel",
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
        "Download the brochure to learn more about Wadhwa Wise City",
    },
  },

  branding: {
    logo: "/wadhwa-wise-city/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/wadhwa-wise-city/images/banner-1.webp",
        alt: "Wadhwa Wise City Interior",
      },
      {
        src: "/wadhwa-wise-city/images/banner-2.webp",
        alt: "Wadhwa Wise City Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Wadhwa Wise City.",
      },
      title: "Welcome to Wadhwa Wise City",
      description: `Wadhwa Wise City is a thoughtfully planned township in Panvel, introducing a new residential tower featuring spacious 1, 2, 2.5, 3, and 4 BHK apartments with expansive balconies. Nestled against the scenic backdrop of the Prabalmachi Hill Range, the development is surrounded by lush greenery that enriches everyday living.

Designed with generous layouts and intelligent planning, each home ensures excellent ventilation and abundant natural light. Premium specifications include imported marble flooring, high-quality sanitary fittings, and refined finishes throughout. Residents can also enjoy a wide range of lifestyle amenities such as a reflexology park, gymnasium, herb garden, swimming pool, children’s play area, clubhouse, and rock garden — creating a well-rounded living experience that blends comfort with nature.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Panvel by Wadhwa Group",
      points: [
        { text: "Discount From 3 Lakhs to 15 Lakhs" },
        { text: "Avail Flexible Payment Plan" },
        { text: "Large 3 BHK Hill Facing Apartments" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "200 Acres",
        },
        {
          title: "Floors",
          value: "25 Floors",
        },
        // {
        //   title: "Possession",
        //   value: "RTMI / Under construction",
        // },
      ],
      price: {
        title: "Luxurious 3 & 4 BHK Flats, Bungalow & Plots Starts from",
        value: "1.69 Cr",
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
        type: "1 BHK",
        carpetArea: "390 Sq.ft. – 435 Sq.ft.",
        price: "64 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "639 Sq.ft.",
        price: "1.06 Cr",
        suffix: "Onwards",
      },
      {
        type: "2.5 BHK",
        carpetArea: "907 Sq.ft. – 1100 Sq.ft.",
        price: "1.59 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1100 Sq.ft.",
        price: "1.69 Cr",
        suffix: "Onwards",
      },
      {
        type: "Plots",
        carpetArea: "2131 Sq.ft. - 4000 Sq.ft.",
        price: "2.15 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Bungalow",
        carpetArea: "1827 + 480 Sq.ft.",
        price: "3 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK Bungalow",
        carpetArea: "2000 + 780  Sq.ft.",
        price: "3.69 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/wadhwa-wise-city/images/costing.webp",
        alt: "Wadhwa Wise City Costing",
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
        src: "/wadhwa-wise-city/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Wadhwa Wise City",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-639 Sq.ft.",
          image: "/wadhwa-wise-city/images/plan-1.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-907 Sq.ft.",
          image: "/wadhwa-wise-city/images/plan-2.jpg",
          category: "2 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Wadhwa Wise City",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Wadhwa Wise City",
    },
    amenities: [
      {
        title: "Amphitheatre",
        image: "/wadhwa-wise-city/images/amenities/amphitheatre.webp",
        description: "",
      },
      {
        title: "Senior Citizen’s Court",
        image: "/wadhwa-wise-city/images/amenities/seniorcitizencourt.webp",
        description: "",
      },
      {
        title: "Rock Garden",
        image: "/wadhwa-wise-city/images/amenities/rockgarden.webp",
        description: "",
      },
      {
        title: "Kid's Play Area",
        image: "/wadhwa-wise-city/images/amenities/kidsplayarea.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/wadhwa-wise-city/images/amenities/joggingtrack.webp",
        description: "",
      },
      {
        title: "Pet’s Zone",
        image: "/wadhwa-wise-city/images/amenities/petszone.webp",
        description: "",
      },
      {
        title: "Barbeque Area",
        image: "/wadhwa-wise-city/images/amenities/bbq.jpg",
        description: "",
      },
      {
        title: "Herbal Garden",
        image: "/wadhwa-wise-city/images/amenities/herbalgarden.webp",
        description: "",
      },
      {
        title: "Outdoor Gym",
        image: "/wadhwa-wise-city/images/amenities/opengym.webp",
        description: "",
      },
      {
        title: "Fountain",
        image: "/wadhwa-wise-city/images/amenities/fountain.webp",
        description: "",
      },
      {
        title: "Gazebos",
        image: "/wadhwa-wise-city/images/amenities/gazebos.webp",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/wadhwa-wise-city/images/amenities/BanquetHall.webp",
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
      description: "Download the gallery of Wadhwa Wise City",
    },
    images: [
      {
        title: "",
        image: "/wadhwa-wise-city/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/wadhwa-wise-city/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/wadhwa-wise-city/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/wadhwa-wise-city/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367929.4861296818!2d72.60737427343749!3d18.947510100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e5c1de398747%3A0x611268bec040c514!2sWadhwa%20Wise%20City!5e1!3m2!1sen!2sin!4v1772281644745!5m2!1sen!2sin",
    image: {
      src: "/wadhwa-wise-city/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Panvel Railway Station",
        description: "15 mins",
      },
      {
        title: "Upcoming Navi Mumbai Airport",
        description: "20 mins",
      },
      {
        title: "Palaspe Phata",
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
      "Experience Wadhwa Wise City from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/wadhwa-wise-city/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Wadhwa Wise City from the comfort of your home",
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
        src: "/wadhwa-wise-city/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Wadhwa Wise City, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Wadhwa Wise City",
          reraNumber: "MahaRERA - P52000052619",
          qrCode: "/wadhwa-wise-city/images/qr.webp",
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
          "RERA Project Registration No.:P52000052619",
      },
      {
        title: "Site Address",
        description:
          "Site Address:Wadhwa The Haven: Old Mumbai - Pune Hwy, Bhangarwadi, Mumbai, Maharashtra 410206.",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office: Wadhwa Group: 16th Floor, Vishwaroop IT Park, Pranavanandji Marg, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Wadhwa Wise City 1, 2, 3 BHK & Jodi in Navi Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Wadhwa Wise City,Navi Mumbai. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Wadhwa Wise City",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Wadhwa Wise City | Terms & Conditions",
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
      title: "Wadhwa Wise City | Privacy Policy",
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
      title: "Wadhwa Wise City | Cookies Policy",
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
      title: "Wadhwa Wise City | Thank You",
      description: "Thank you for your interest in Wadhwa Wise City",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_177",
      publicId: "aca4247570c85c8b91c29e13b70a0cc9",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Wadhwa Panvel",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Wadhwa Wise City",
      },
    },
  },
};

export type WadhwaWiseCitySiteConfig = typeof wadhwaWiseCitySiteConfig;
