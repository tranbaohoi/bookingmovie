import "./App.css";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DetailMovie from "./components/DetailMovie/DetailMovie";
import { lazy, Suspense } from "react";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckOutTemplate";
import Login from "./components/Login/Login";

const HomeComponent = HomeTemplate(Home);

const DetailLazy = lazy(() => import("./components/DetailMovie/DetailMovie"));
const DetailComponent = HomeTemplate(DetailLazy);

const CheckoutLazy = lazy(() => import("./pages/Checkout/Checkout"));

const CheckoutComponent = CheckoutTemplate(CheckoutLazy);

const LoginLazy = lazy(() => import("./components/Login/Login"));

function App() {
  const history = useNavigate();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes history={history}>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/news" element={<News />} />
        <Route path="/detail/:id" element={<DetailComponent />} />
        <Route path="/checkout/:id" element={<CheckoutComponent />} />
        <Route path="/login" element={<LoginLazy />} />
      </Routes>
    </Suspense>
  );
}

export default App;
