import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "../../component/navbar/Navbar";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/About/AboutUs";
import ContactUs from "../../pages/Contact/ContactUs";
import Pricing from "../../pages/Pricing/Pricing";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Review from '../../pages/Review/review';
import WebDevelopment from '../../pages/WebDevelopment/WebDevelopment';
import Ecommerce from '../../pages/Ecommerce/Ecommerce';
import Branding from '../../pages/Branding/Branding';
import SEO from "../../pages/SEO/Seo.jsx";
import Logo from '../../pages/Logo Design/Logo.jsx';
import AppDev from '../../pages/App Dev/AppDev.jsx';
import Illustration from '../../pages/illustration/Illustration.jsx';
import VideoAnim from '../../pages/VideoAnimation/VideoAnim.jsx';
import CopyWriting from '../../pages/CopyWriting/CopyWriting.jsx';
import { ScrollRestoration, Outlet } from "react-router-dom";
import ScrollToHashElement from "../../component/others/ScrollToHashElement.jsx";
import ChatWidget from "../../component/ChatWidget/ChatWidget.jsx";
import SuccessPage from "../../pages/Success/Success.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToHashElement/>
      {/* <ChatWidget/> */}
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/review", element: <Review /> },
      { path: "/web-design", element: <WebDevelopment /> },
      { path: "/ecommerce", element: <Ecommerce /> },
      { path: "/branding", element: <Branding /> },
      { path: "/SEO", element: <SEO /> },
      { path: "/Logo-design", element: <Logo /> },
      { path: "/App-Dev", element: <AppDev /> },
      { path: "/Illustration", element: <Illustration /> },
      { path: "/VideoAnimation", element: <VideoAnim /> },
      { path: "/copywriting", element: <CopyWriting /> },
      { path: "/Success", element: <SuccessPage/> },
    ],
  },
]);

export default function Routing() {
  return <RouterProvider router={router} />;
}
