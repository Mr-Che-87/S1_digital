import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import IntegratedMarketingPage from "./pages/IntegratedMarketingPage/IntegratedMarketingPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import SeoPage from "./pages/SeoPage/SeoPage";
import BrandingPage from "./pages/BrandingPage/BrandingPage";
import MarketingStrategyPage from "./pages/MarketingStrategyPage/MarketingStrategyPage";
import WebsitesPage from "./pages/WebsitesPage/WebsitesPage";
import ContentMarketingPage from "./pages/ContentMarketingPage/ContentMarketingPage";
import ContentStrategyPage from "./pages/ContentStrategyPage/ContentStrategyPage";
import SmmPage from "./pages/SmmPage/SmmPage";
import VideoProductionPage from "./pages/VideoProductionPage/VideoProductionPage";
import ContextualAdvertisingPage from "./pages/ContextualAdvertisingPage/ContextualAdvertisingPage";
import TargetedAdvertisingPage from "./pages/TargetedAdvertisingPage/TargetedAdvertisingPage";
import SalesMarketingPage from "./pages/SalesMarketingPage/SalesMarketingPage";
import CopywritingPage from "./pages/CopywritingPage/CopywritingPage";
import DesignPage from "./pages/DesignPage/DesignPage";
import CasePage from "./pages/CasePage/CasePage";
import CasesPage from "./pages/CasesPage/CasesPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BrandPromotionStrategyPage from "./pages/BrandPromotionStrategyPage/BrandPromotionStrategyPage";
import ComprehensivepromotionPage from "./pages/ComprehensivepromotionPage/ComprehensivepromotionPage";
interface AppRoutesProps {}

const AppRoutes: React.FunctionComponent<AppRoutesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/cases" element={<CasesPage />}></Route>
        <Route path="/blogs" element={<BlogsPage />}></Route>
        <Route path="/contacts" element={<Main />} />
        <Route path="case/:case" element={<CasePage />}></Route>
        <Route path="blog/:blog" element={<BlogPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        <Route
          path="/integratedMarketing"
          element={<IntegratedMarketingPage />}
        ></Route>
        <Route path="/seo" element={<SeoPage />}></Route>
        <Route path="/branding" element={<BrandingPage />}></Route>
        <Route
          path="/marketingStrategy"
          element={<MarketingStrategyPage />}
        ></Route>
        <Route path="/websites" element={<WebsitesPage />}></Route>
        <Route
          path="/contentMarketing"
          element={<ContentMarketingPage />}
        ></Route>
        <Route
          path="/contentStrategy"
          element={<ContentStrategyPage />}
        ></Route>
        <Route 
          path="/smm" 
          element={<SmmPage />}
        ></Route>
        <Route
          path="/videoProduction"
          element={<VideoProductionPage />}
        ></Route>
        <Route
          path="/contextualAdvertising"
          element={<ContextualAdvertisingPage />}
        ></Route>
        <Route
          path="/targetedAdvertising"
          element={<TargetedAdvertisingPage />}
        ></Route>
        <Route path="/salesMarketing" element={<SalesMarketingPage />}></Route>
        <Route path="/copywriting" element={<CopywritingPage />}></Route>
        <Route path="/design" element={<DesignPage />}></Route>
        <Route path="/brandPromotionStrategy" element={<BrandPromotionStrategyPage/>}></Route>
        <Route path="/comprehensivePromotion" element={<ComprehensivepromotionPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
