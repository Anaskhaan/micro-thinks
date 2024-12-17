import { Route, Routes } from "react-router-dom";
import TermsandConditions from "./T&Cs/TermsandConditions";
import PrivacyPolicy from "./T&Cs/PrivacyPolicy";
import LegalNotice from "./T&Cs/LegalNotice";
import Home from "./Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermsandConditions" element={<TermsandConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/LegalNotice" element={<LegalNotice />} />
      </Routes>
    </div>
  );
};

export default App;
