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

const route = routes.TayalEnvogue1;

export const tayalEnvoug1SiteConfig = {
  name: "Tayal Envogoue1",
  about:
    `Tayal Corp, the developer behind Envogue 1, is redefining Pune’s real estate landscape through bold design, innovation, and uncompromising quality. Led by architect Sumit Tayal, the group has successfully delivered over 1,000 homes across 1.6 million sq. ft., building a strong reputation for transparency and timely execution.

With distinct brands like Envogue, K Better Homes, and Flow, Tayal Corp focuses on creating lifestyle-driven communities rooted in a design-first philosophy. Each project is thoughtfully crafted to stand apart, offering homes that truly reflect individuality, functionality, and modern urban living.
`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Mundhwa",
  },
  gtmId: "GTM-PL39XRKV",
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
        "Download the brochure to learn more about Tayal Envogoue1",
    },
  },

  branding: {
    logo: "/tayal-envogue/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/tayal-envogue/images/banner-1.jpeg",
        alt: "Tayal Envogoue1 Interior",
      },
      // {
      //   src: "/tayal-envogue/images/banner-2.webp",
      //   alt: "Tayal Envogoue1 Interior",
      // },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Tayal Envogoue1.",
      },
      title: "Welcome to Tayal Envogoue1",
      description: `Discover Envogue 1 – a striking address of style and elegance in Mundhwa, Pune. Offering spacious 3 and 4 BHK residences, this development seamlessly blends bold architecture with world-class comforts to create a truly elevated living experience.

Residents can indulge in premium amenities such as an infinity pool, spa, gym, mini theatre, and vibrant community spaces designed for relaxation and social living. Thoughtfully planned, every element reflects a balance of luxury, comfort, and contemporary design.

Strategically located, Envogue 1 ensures excellent connectivity to key destinations like Koregaon Park, Kharadi, and Magarpatta, placing you at the heart of Pune’s most dynamic neighbourhoods.

More than just a residence, Envogue 1 is a statement of individuality and refined living—crafted for those who seek a home as distinctive as their lifestyle.

`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Central Kharadi by Majestique Landmarks",
      points: [
        { text: "Flexible Payment Plan" },
        { text: "Spot Booking Offers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "3.5 Acres",
        },
        {
          title: "Tower",
          value: "3 Towers",
        },
        {
          title: "Possession",
          value: "Dec 2028",
        },
      ],
      price: {
        title: "Luxurious 3 & 4 BHK Starts from",
        value: "2.06 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious  3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK ",
        carpetArea: "1413 Sq.Ft. - 1446 Sq.Ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "4 BHK ",
        carpetArea: "1935 Sq.Ft. - 1953 Sq.Ft.",
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
        src: "/tayal-envogue/images/costing.webp",
        alt: "Tayal Envogoue1 Costing",
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
        src: "/tayal-envogue/images/coming.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Tayal Envogoue1",
      },
    },
    floorPlans: {
      categories: ["All", "3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1413-1446",
          image: "/tayal-envogue/images/coming.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1935-1953",
          image: "/tayal-envogue/images/coming.jpg",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Tayal Envogoue1",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Tayal Envogoue1",
    },
    amenities: [
      {
        title: "Clubhouse",
        image: "/tayal-envogue/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/tayal-envogue/images/amenities/gymnasium_1.webp",
        description: "",
      },
      {
        title: "Multipurpose Hall",
        image: "/tayal-envogue/images/amenities/multipurposehall.webp",
        description: "",
      },
      {
        title: "Infinity Pool",
        image: "/tayal-envogue/images/amenities/infinity-swimming.jpg",
        description: "",
      },
      {
        title: "Mini Home Theatre",
        image: "/tayal-envogue/images/amenities/minithether_01.webp",
        description: "",
      },
      {
        title: "Badminton court ",
        image: "/tayal-envogue/images/amenities/badmintoncourt1.webp",
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
      description: "Download the gallery of Tayal Envogoue1",
    },
    images: [
      {
        title: "",
        image: "/tayal-envogue/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/tayal-envogue/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/tayal-envogue/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/tayal-envogue/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46104.62368644118!2d73.92943400000001!3d18.531456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1811fa86275%3A0x35a75ba368a00091!2sMundhwa%2C%20Pune%2C%20Maharashtra%2C%20India!5e1!3m2!1sen!2sus!4v1775826999477!5m2!1sen!2sus",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Mundhwa Chowk",
        description: "850 m",
      },
      {
        title: "The Westin Pune",
        description: "3 km",
      },
      {
        title: "D-Mart ",
        description: "4.6 km",
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
      "Experience Tayal Envogoue1 from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/tayal-envogue/images/banner-1.jpeg",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Tayal Envogoue1 from the comfort of your home",
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
        src: "/tayal-envogue/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Tayal Envogoue1, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Tayal Envogoue1",
          reraNumber: "MahaRERA - P52100053239",
          qrCode: "/tayal-envogue/images/qr-code.png",
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
          "RERA Project Registration No.: P52100053239",
      },
      // {
      //   title: "Site Address",
      //   description:
      //     "Site Address:Survey no. 39/1, Ashoka Nagar, Central Kharadi, Kharadi, Pune, 411014 ",
      // },
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
      "Tayal Envogoue1  2, 3 & 4 BHK in Central Kharadi | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Tayal Envogoue1,Central Kharadi . 2, 3 & 4 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Tayal Envogoue1",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Tayal Envogoue1 | Terms & Conditions",
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
      title: "Tayal Envogoue1 | Privacy Policy",
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
      title: "Tayal Envogoue1 | Cookies Policy",
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
      title: "Tayal Envogoue1 | Thank You",
      description: "Thank you for your interest in Tayal Envogoue1",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_194" ,
      publicId: "ef579239735e8b90b9c089c7cd53d93b",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Tayal Envogue" ,
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Tayal Envogoue1",
      },
    },
  },
};

export type TayalEnvoug1SiteConfig = typeof tayalEnvoug1SiteConfig;
