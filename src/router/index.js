import Vue from "vue";
import Router from "vue-router";
import Index from "../components/views/home/Index";


const PageNotFound = resolve => {
  require.ensure(["../components/views/PageNotFound"], () => {
    resolve(require("../components/views/PageNotFound"));
  });
};

const HomeLoan = resolve => {
  require.ensure(["../components/views/homeloan/Home-loan"], () => {
    resolve(require("../components/views/homeloan/Home-loan"));
  });
};

const SMELoan = resolve => {
  require.ensure(["../components/views/sme-loan/SMELoan"], () => {
    resolve(require("../components/views/sme-loan/SMELoan"));
  });
};
const CorporateLoan = resolve => {
  require.ensure(["../components/views/corporate-loan/CorporateLoan"], () => {
    resolve(require("../components/views/corporate-loan/CorporateLoan"));
  });
};
const PersonalLoan = resolve => {
  require.ensure(["../components/views/personal-loan/PersonalLoan"], () => {
    resolve(require("../components/views/personal-loan/PersonalLoan"));
  });
};
const CarLoan = resolve => {
  require.ensure(["../components/views/car-loan/CarLoan"], () => {
    resolve(require("../components/views/car-loan/CarLoan"));
  });
};
const StructuredFinance = resolve => {
  require.ensure(
    ["../components/views/structured-finance/StructuredFinance"],
    () => {
      resolve(
        require("../components/views/structured-finance/StructuredFinance")
      );
    }
  );
};

const SupplyChainFinance = resolve => {
  require.ensure(
    ["../components/views/supply-chain-finance/SupplyChainFinance"],
    () => {
      resolve(
        require("../components/views/supply-chain-finance/SupplyChainFinance")
      );
    }
  );
};

const FinancialInfoForShareholders = resolve => {
  require.ensure(
    [
      "../components/views/financial-information-for-shareholders/FinancialInfoForShareholders"
    ],
    () => {
      resolve(
        require("../components/views/financial-information-for-shareholders/FinancialInfoForShareholders")
      );
    }
  );
};
const OurManagement = resolve => {
  require.ensure(["../components/views/our-management/OurManagement"], () => {
    resolve(require("../components/views/our-management/OurManagement"));
  });
};
const TermDeposit = resolve => {
  require.ensure(["../components/views/term-deposit/TermDeposit"], () => {
    resolve(require("../components/views/term-deposit/TermDeposit"));
  });
};
const DPS = resolve => {
  require.ensure(["../components/views/dps/DPS"], () => {
    resolve(require("../components/views/dps/DPS"));
  });
};
const Priority = resolve => {
  require.ensure(["../components/views/priority/Priority"], () => {
    resolve(require("../components/views/priority/Priority"));
  });
};
const OnlineDPS = resolve => {
  require.ensure(["../components/views/online-dps/OnlineDPS"], () => {
    resolve(require("../components/views/online-dps/OnlineDPS"));
  });
};
const RegulatoryDisclosure = resolve => {
  require.ensure(
    ["../components/views/regulatory-disclosure/RegulatoryDisclosure"],
    () => {
      resolve(
        require("../components/views/regulatory-disclosure/RegulatoryDisclosure")
      );
    }
  );
};
const FinancialReports = resolve => {
  require.ensure(
    ["../components/views/financial-reports/FinancialReports"],
    () => {
      resolve(
        require("../components/views/financial-reports/FinancialReports")
      );
    }
  );
};
const CSR = resolve => {
  require.ensure(["../components/views/csr/CSR"], () => {
    resolve(require("../components/views/csr/CSR"));
  });
};
const IdlcFinancialLiteracyWing = resolve => {
  require.ensure(["../components/views/idlc-financial-literacy-wing/IdlcFinancialLiteracyWing"], () => {
    resolve(require("../components/views/idlc-financial-literacy-wing/IdlcFinancialLiteracyWing"));
  });
};
const SMESuccessStories = resolve => {
  require.ensure(
    ["../components/views/sme-success-story/SMESuccessStories"],
    () => {
      resolve(
        require("../components/views/sme-success-story/SMESuccessStories")
      );
    }
  );
};
const ApplyForLoan = resolve => {
  require.ensure(["../components/views/apply-for-loan/ApplyForLoan"], () => {
    resolve(require("../components/views/apply-for-loan/ApplyForLoan"));
  });
};
const ApplyForDeposit = resolve => {
  require.ensure(
    ["../components/views/apply-for-deposit/ApplyForDeposit"],
    () => {
      resolve(require("../components/views/apply-for-deposit/ApplyForDeposit"));
    }
  );
};
const OpenOnlineDepositAccount = resolve => {
  require.ensure(["../components/views/OpenOnlineDepositAccount"], () => {
    resolve(require("../components/views/OpenOnlineDepositAccount"));
  });
};
const GetInTouchWithUs = resolve => {
  require.ensure(["../components/views/get-in-touch/GetInTouchWithUs"], () => {
    resolve(require("../components/views/get-in-touch/GetInTouchWithUs"));
  });
};
const DownloadFormsRequiredDocuments = resolve => {
  require.ensure(
    ["../components/views/download-forms/DownloadFormsRequiredDocuments"],
    () => {
      resolve(
        require("../components/views/download-forms/DownloadFormsRequiredDocuments")
      );
    }
  );
};
const ContactUs = resolve => {
  require.ensure(["../components/views/contact-us/ContactUs"], () => {
    resolve(require("../components/views/contact-us/ContactUs"));
  });
};
const PromotionsAndCampaignsNewsAndEvents = resolve => {
  require.ensure(
    ["../components/views/PromotionsAndCampaignsNewsAndEvents"],
    () => {
      resolve(
        require("../components/views/PromotionsAndCampaignsNewsAndEvents")
      );
    }
  );
};
const FeedbackAndComplaintCell = resolve => {
  require.ensure(["../components/views/FeedbackAndComplaintCell"], () => {
    resolve(require("../components/views/FeedbackAndComplaintCell"));
  });
};
const ETender = resolve => {
  require.ensure(["../components/views/e-tender/ETender"], () => {
    resolve(require("../components/views/e-tender/ETender"));
  });
};
const FAQ = resolve => {
  require.ensure(["../components/views/faq/FAQ"], () => {
    resolve(require("../components/views/faq/FAQ"));
  });
};
const ProductBrochure = resolve => {
  require.ensure(
    ["../components/views/product-brochure/ProductBrochure"],
    () => {
      resolve(require("../components/views/product-brochure/ProductBrochure"));
    }
  );
};

const OurAchivement = resolve => {
  require.ensure(["../components/views/our-achivement/OurAchivement"], () => {
    resolve(require("../components/views/our-achivement/OurAchivement"));
  });
};
const NewsAndEvents = resolve => {
  require.ensure(["../components/views/news-events/NewsAndEvents"], () => {
    resolve(require("../components/views/news-events/NewsAndEvents"));
  });
};
const News = resolve => {
  require.ensure(["../components/views/news-events/News"], () => {
    resolve(require("../components/views/news-events/News"));
  });
};
const TheWorldOfIDLC = resolve => {
  require.ensure(["../components/views/world-of-idlc/TheWorldOfIDLC"], () => {
    resolve(require("../components/views/world-of-idlc/TheWorldOfIDLC"));
  });
};
const GreenFinance = resolve => {
  require.ensure(["../components/views/green-finance/GreenFinance"], () => {
    resolve(require("../components/views/green-finance/GreenFinance"));
  });
};
const UnepFIActivities = resolve => {
  require.ensure(
    ["../components/views/unep-fi-activities/UnepFIActivities"],
    () => {
      resolve(
        require("../components/views/unep-fi-activities/UnepFIActivities")
      );
    }
  );
};
const ExploreCareerAtIDLC = resolve => {
  require.ensure(
    ["../components/views/explore-career/ExploreCareerAtIDLC"],
    () => {
      resolve(
        require("../components/views/explore-career/ExploreCareerAtIDLC")
      );
    }
  );
};
const ApplyForJobs = resolve => {
  require.ensure(["../components/views/apply-for-job/ApplyForJobs"], () => {
    resolve(require("../components/views/apply-for-job/ApplyForJobs"));
  });
};
const PriceSensitiveInformationAndNotices = resolve => {
  require.ensure(
    [
      "../components/views/PriceSensitiveInformationAndNotices/PriceSensitiveInformationAndNotices"
    ],
    () => {
      resolve(
        require("../components/views/PriceSensitiveInformationAndNotices/PriceSensitiveInformationAndNotices")
      );
    }
  );
};
const BranchLoacator = resolve => {
  require.ensure(["../components/views/contact-us/branch-locator"], () => {
    resolve(require("../components/views/contact-us/branch-locator"));
  });
};
const Calculators = resolve => {
  require.ensure(["../components/views/calculators/Calculators"], () => {
    resolve(require("../components/views/calculators/Calculators"));
  });
};
const AppliedCareer = resolve => {
  require.ensure(["../components/views/apply-resume/AppliedCareer"], () => {
    resolve(require("../components/views/apply-resume/AppliedCareer"));
  });
};
const Sitemap = resolve => {
  require.ensure(["../components/views/Sitemap"], () => {
    resolve(require("../components/views/Sitemap"));
  });
};

const WarningMessage = resolve => {
  require.ensure(["../components/views/WarningMessage"], () => {
    resolve(require("../components/views/WarningMessage"));
  });
};
const OurCommitments = resolve => {
  require.ensure(
    ["../components/views/our-commitments/OurCommitments.vue"],
    () => {
      resolve(
        require("../components/views/our-commitments/OurCommitments.vue")
      );
    }
  );
};

const CorporateGovernance = resolve => {
  require.ensure(
    ["../components/views/corporate-governance/CorporateGovernance"],
    () => {
      resolve(
        require("../components/views/corporate-governance/CorporateGovernance")
      );
    }
  );
};
const Dividend = resolve => {
  require.ensure(["../components/views/dividend/Dividend"], () => {
    resolve(require("../components/views/dividend/Dividend"));
  });
};
const CitizensCharter = resolve => {
  require.ensure(["../components/views/citizens-charter/citizens-charter"], () => {
    resolve(require("../components/views/citizens-charter/citizens-charter"));
  });
};

const IDLCIslamic = resolve => {
  require.ensure(["../components/views/idlc-islamic/IDLC-Islamic"], () => {
    resolve(require("../components/views/idlc-islamic/IDLC-Islamic"));
  });
};
const IDLCIslamicProduct = resolve => {
  require.ensure(["../components/views/idlc-islamic-product/IDLC-Islamic-Product"], () => {
    resolve(require("../components/views/idlc-islamic-product/IDLC-Islamic-Product"));
  });
};
const IDLCIslamicFAQ = resolve => {
  require.ensure(["../components/views/idlc-islamic-faq/IDLC-Islamic"], () => {
    resolve(require("../components/views/idlc-islamic-faq/IDLC-Islamic"));
  });
};
const IDLCIslamicShariahAdvisory = resolve => {
  require.ensure(["../components/views/idlc-islamic-shariah-advisory/IDLC-Islamic"], () => {
    resolve(require("../components/views/idlc-islamic-shariah-advisory/IDLC-Islamic"));
  });
};

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      meta: {
        title: "Home",
        description:
          "Welcome to IDLC Finance PLC - Loans, Deposits, SME and Corporate Finance",
        seo_keyword:
          "Commercial Housing Loan, Commercial loan, Housing, Commercial Housing, Apartment Loan, New Apartment, Interest Rate, Mortgage, Home Loan Calculator, interest rate, Housing Loan, Flat loan, new home loan,Commercial Space Loan, Medium business, SME, Loan, interest rate, cash, inventory, Construction Loan, Home Loan, Interest Rate, Building, Land, Loan Calculator, Home Equity Loan, Home Renovate, Home Renovation, Extension Loan, Home Decoration, Home Loan Shield, Home Loan, Home Loan Shield, Home Insurance, Home Loan, Housing Loan, Apartment, Interest Rate, Mortgage, Home Loan Calculator, interest rate, Loan, Home Loan, Personal Loan, Housing Loan, Auto Loan, home loan calculator home loan home loan interest rate mortgage housing loan mortgage loan home loan eligibility affordable home loan rates affordable housing"
      },
      component: Index
    },
    {
      path: "/deposit-products",
      name: "Home-loan",
      meta: {
        title: "Home Loan",
        description: "Live in the Freedom of your own Home.",
        seo_keyword: ""
      },

      component: HomeLoan
    },
    {
      path: "/citizens-charter",
      name: "Citizens Charter",
      meta: {
        title: "Citizen's Charter",
        description: "Live in the Freedom of your own Home.",
        seo_keyword: ""
      },

      component: CitizensCharter
    },
    {
      path: "/car-loan",
      name: "CarLoan",
      meta: {
        title: "Car Loan",
        description: "Fuel your Dreams.",
        seo_keyword: ""
      },

      component: CarLoan
    },
    {
      path: "/personal-loan",
      name: "PersonalLoan",
      meta: {
        title: "Personal Loan",
        description: "Leave no Desire Unfulfilled",
        seo_keyword: ""
      },

      component: PersonalLoan
    },
    {
      path: "/financing-products",
      name: "SMELoan",
      meta: {
        title: "SME Loan",
        description: "Grow your Business. Achieve your Dreams",
        seo_keyword: ""
      },

      component: SMELoan
    },
    {
      path: "/corporate-loan",
      name: "CorporateLoan",
      meta: {
        title: "Corporate Loan",
        description: "Make your Corporate Endeavour a Success",
        seo_keyword: ""
      },

      component: CorporateLoan
    },
    {
      path: "/structured-finance",
      name: "StructuredFinance",
      meta: {
        title: "Structured Finance",
        description:
          "Accomplish your Unique Needs through our Comprehensive Solutions.",
        seo_keyword: ""
      },

      component: StructuredFinance
    },

    {
      path: "/supply-chain-finance",
      name: "SupplyChainFinance",
      meta: {
        title: "Supply Chain Finance",
        description: "Caters to Front and Back end Value Chain Financing.",
        seo_keyword: ""
      },

      component: SupplyChainFinance
    },
    {
      path: "/financial-information-for-investors-and-shareholders",
      name: "FinancialInfoForShareholders",
      meta: {
        title: "Financial information for investors and shareholder",
        description:
          "Stock Information | Shareholding Composition | Investment Calculator",
        seo_keyword: ""
      },
      component: FinancialInfoForShareholders
    },
    {
      path: "/shariah-advisory-committee",
      name: "OurManagement",
      meta: {
        title: "Shariah Advisory Committee",
        description: "Know More about our Leadership Team",
        seo_keyword: ""
      },
      component: OurManagement
    },
    {
      path: "/term-deposit",
      name: "TermDeposit",
      meta: {
        title: "Term deposit",
        description: "Save Today, for a Better Tomorrow",
        seo_keyword: ""
      },
      component: TermDeposit
    },
    {
      path: "/dps",
      name: "DPS",
      meta: {
        title: "DPS",
        description: "Realize your Goals through Regular Savings",
        seo_keyword: ""
      },
      component: DPS
    },
    {
      path: "/priority",
      name: "Priority",
      meta: {
        title: "Priority",
        description: "Gain your Access to Privilege",
        seo_keyword: ""
      },
      component: Priority
    },
    {
      path: "/online-dps",
      name: "OnlineDPS",
      meta: {
        title: "Online DPS",
        description: "Realize your Goals through Regular Savings",
        seo_keyword: ""
      },
      component: OnlineDPS
    },
    {
      path: "/regulatory-disclosure/:id",
      name: "RegulatoryDisclosure",
      meta: {
        title: "Regulatory Disclosure",
        description: "Important Information for Regulators",
        seo_keyword: ""
      },
      component: RegulatoryDisclosure
    },
    {
      path: "/financial-reports",
      name: "FinancialReports",
      meta: {
        title: "Financial Reports",
        description: "Annual and Quarterly Reports | Financial Highlights",
        seo_keyword: ""
      },
      component: FinancialReports
    },
    {
      path: "/corporate-governance",
      name: "CorporateGovernance",
      meta: {
        title: "Corporate Governance",
        description: "Corporate Governance",
        seo_keyword: ""
      },
      component: CorporateGovernance
    },
    {
      path: "/dividend",
      name: "Dividend",
      meta: {
        title: "Dividend",
        description: "Dividend",
        seo_keyword: ""
      },
      component: Dividend
    },
    {
      path: "/csr",
      name: "CSR",
      meta: {
        title: "CSR",
        description: "Sustainable Development by Creating Long-Term Value",
        seo_keyword: ""
      },
      component: CSR
    },
    {
      path: "/idlc-financial-literacy-wing",
      name: "idlc-financial-literacy-wing",
      meta: {
        title: "IDLC Financial Literacy Wing",
        description: "IDLC Financial Literacy Wing",
        seo_keyword: ""
      },
      component: IdlcFinancialLiteracyWing
    },
    {
      path: "/sme-success-stories",
      name: "SMESuccessStories",
      meta: {
        title: "Sme Success Stories",
        description: "Partnering with people in their journey of success",
        seo_keyword: ""
      },
      component: SMESuccessStories
    },
    {
      path: "/apply-for-loan/:applyFor?",
      name: "ApplyForLoan",
      meta: {
        title: "Apply For Loan",
        description: "We are here you",
        seo_keyword: ""
      },
      component: ApplyForLoan
    },

    {
      path: "/apply-for-deposit/:applyFor?",
      name: "ApplyForDeposit",
      meta: {
        title: "Apply For Deposit",
        description: "We are here you",
        seo_keyword: ""
      },
      component: ApplyForDeposit
    },
    {
      path: "/open-online-deposit-account",
      name: "OpenOnlineDepositAccount",
      meta: {
        title: "Open Online Deposit Account",
        description: "The Best of IDLC, all in One Place",
        seo_keyword: ""
      },
      component: OpenOnlineDepositAccount
    },
    {
      path: "/get-in-touch-with-us",
      name: "GetInTouchWithUs",
      meta: {
        title: "Get In Touch With Us",
        description: "Let us Help",
        seo_keyword: ""
      },
      component: GetInTouchWithUs
    },
    {
      path: "/download-forms-required-documents",
      name: "DownloadFormsRequiredDocuments",
      meta: {
        title: "Download Forms Required Documents",
        description: "Download your Required Forms",
        seo_keyword: ""
      },
      component: DownloadFormsRequiredDocuments
    },
    {
      path: "/contact-us/:branchId",
      name: "ContactUs",
      meta: {
        title: "Contact Us",
        description: "We are There to Help"
      },
      component: ContactUs
    },
    {
      path: "/promotions-and-campaigns-news-and-events",
      name: "Promotions And Campaigns News And Events",
      meta: {
        title: "Term deposit",
        description: "We try to Create an impact in every step that we take",
        seo_keyword: ""
      },
      component: PromotionsAndCampaignsNewsAndEvents
    },
    {
      path: "/feedback-and-complaint-cell/:id",
      name: "FeedbackAndComplaintCell",
      meta: {
        title: "Feedback And Complaint Cell",
        description:
          "If you have invested your part in IDLC, it is now our aim to make it easier for you to know the ins and outs of the stock-market updates.",
        seo_keyword: ""
      },
      component: FeedbackAndComplaintCell
    },
    {
      path: "/e-tender",
      name: "ETender",
      meta: {
        title: "ETender",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        seo_keyword: ""
      },
      component: ETender
    },
    {
      path: "/faq",
      name: "FAQ",
      meta: {
        title: "FAQ",
        description: "Frequently Asked Questions",
        seo_keyword: ""
      },
      component: FAQ
    },
    // {
    //   path: '/product-brochure',
    //   name: 'ProductBrochure',
    //   component: ProductBrochure
    // },
    {
      path: "/our-achievement",
      name: "OurAchivement",
      meta: {
        title: "Our Achievement",
        description: "Awards and Accolades",
        seo_keyword: ""
      },
      component: OurAchivement
    },
    {
      path: "/news-and-events",
      name: "NewsAndEvents",
      meta: {
        title: "News And Events",
        description: "Latest Updates and Media Releases of IDLC",
        seo_keyword: ""
      },
      component: NewsAndEvents
    },
    {
      path: "/news/:newsId",
      name: "News",
      meta: {
        title: "News",
        description: "Latest News",
        seo_keyword: ""
      },
      component: News
    },
    {
      path: "/idlc-at-a-glance",
      name: "TheWorldOfIDLC",
      meta: {
        title: "IDLC at a Glance",
        description: "About IDLC | Our Journey",
        seo_keyword: ""
      },
      component: TheWorldOfIDLC
    },
    {
      path: "/green-finance",
      name: "GreenFinance",
      meta: {
        title: "Green Finance",
        description: "Towards a Better and Sustainable Future",
        seo_keyword: ""
      },
      component: GreenFinance
    },
    {
      path: "/unep-fi-activities",
      name: "UnepFIActivities",
      meta: {
        title: "Unep FI Activities",
        description: "Towards a Better and Sustainable Future",
        seo_keyword: ""
      },
      component: UnepFIActivities
    },
    // {
    //   path: "/explore-career-at-idlc",
    //   name: "ExploreCareerAtIDLC",
    //   meta: {
    //     title: "Explore Career At IDLC",
    //     description: "Why Join IDLC?",
    //     seo_keyword: ""
    //   },
    //   component: ExploreCareerAtIDLC
    // },
    // {
    //   path: "/apply-for-jobs",
    //   name: "ApplyForJobs",
    //   meta: {
    //     title: "Apply For Jobs",
    //     description: "View Latest Vacancies and Apply",
    //     seo_keyword: ""
    //   },
    //   component: ApplyForJobs
    // },
    {
      path: "/price-sensitive-information-and-notices",
      name: "PriceSensitiveInformationAndNotices",
      meta: {
        title: "Price Sensitive Information And Notices",
        description: "IDLC Stock Updates and Notices for Shareholders",
        seo_keyword: ""
      },
      component: PriceSensitiveInformationAndNotices
    },
    {
      path: "/calculators",
      name: "Calculators",
      meta: {
        title: "Calculators",
        description: "Calculators",
        seo_keyword: ""
      },
      component: Calculators
    },
    {
      path: "/applied-career",
      name: "AppliedCareer",
      meta: {
        seo_keyword: ""
      },
      component: AppliedCareer
    },
    {
      path: "/sitemap",
      name: "Sitemap",
      meta: {
        title: "Sitemap",
        description: "IDLC Sitemap",
        seo_keyword: ""
      },
      component: Sitemap
    },
    {
      path: "/warning-message",
      name: "WarningMessage",
      meta: {
        title: "WarningMessage",
        description: "WarningMessage",
        seo_keyword: ""
      },
      component: WarningMessage
    },
    {
      path: "/our-commitments",
      name: "OurCommitments",
      meta: {
        title: "Our Commitments",
        description: "Our Commitments",
        seo_keyword: ""
      },
      component: OurCommitments
    },
    {
      path: "/idlc-islamic",
      name: "IDLCIslamic",
      meta: {
        title: "IDLC Islamic",
        description: "Live in the Freedom of your own Home.",
        seo_keyword: ""
      },
      component: IDLCIslamic
    },
    {
      path: "/idlc-islamic/product/:id",
      name: "IDLCIslamicProduct",
      meta: {
        title: "IDLC Islamic",
        description: "Live in the Freedom of your own Home.",
        seo_keyword: ""
      },
      component: IDLCIslamicProduct
    },
    {
      path: "/idlc-islamic/faq",
      name: "IDLCIslamicFAQ",
      meta: {
        title: "IDLC Islamic",
        description: "Live in the Freedom of your own Home.",
        seo_keyword: ""
      },
      component: IDLCIslamicFAQ
    },
    {
      path: "/*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});


// import HomeLoan from '../components/views/Home/Index'
// import SMELoan from '../components/views/SMELoan'
// import CorporateLoan from '../components/views/CorporateLoan'
// import PersonalLoan from '../components/views/PersonalLoan'
// import CarLoan from '../components/views/CarLoan'
// import StructuredFinance from '../components/views/StructuredFinance'



// import FinancialInfoForShareholders from '../components/views/FinancialInfoForShareholders'
// import IdlcFinancialLiteracyWing from '../components/views/IdlcFinancialLiteracyWing'
// import OurManagement from '../components/views/OurManagement'
// import TermDeposit from '../components/views/TermDeposit'
// import DPS from '../components/views/DPS'
// import Priority from '../components/views/Priority'

// import RegulatoryDisclosure from '../components/views/RegulatoryDisclosure'
// import FinancialReports from '../components/views/FinancialReports'
// import CSR from '../components/views/CSR'
// import SMESuccessStories from '../components/views/SMESuccessStories'
// import ApplyForLoan from '../components/views/ApplyForLoan'
// import OpenOnlineDepositAccount from '../components/views/OpenOnlineDepositAccount'
// import GetInTouchWithUs from '../components/views/GetInTouchWithUs'
// import DownloadFormsRequiredDocuments from '../components/views/DownloadFormsRequiredDocuments'
// import ContactUs from '../components/views/ContactUs'
// import PromotionsAndCampaignsNewsAndEvents from '../components/views/PromotionsAndCampaignsNewsAndEvents'
// import FeedbackAndComplaintCell from '../components/views/FeedbackAndComplaintCell'
// import ETender from '../components/views/ETender'
// import FAQ from '../components/views/FAQ'
// import ProductBrochure from '../components/views/ProductBrochure'
