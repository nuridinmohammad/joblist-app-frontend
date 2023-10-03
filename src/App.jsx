import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../src/app/store";
import AccountPage from "./pages/account.page";
import TopbarComp from "./components/topbar.comp";
import PositionsPage from "./pages/positions.page";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import PositionsDetailPage from "./pages/PositionsDetail.page";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopbarComp />}>
              <Route index element={<PositionsPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="detail/:id" element={<PositionsDetailPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
