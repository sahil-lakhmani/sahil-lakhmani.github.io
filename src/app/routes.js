import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { MineMapperDetail } from "../pages/projects/MineMapperDetail";
import { WildhawkDetail } from "../pages/projects/WildhawkDetail";
import { MeddyBuddyDetail } from "../pages/projects/MeddyBuddyDetail";
import { OpenSourceDetail } from "../pages/projects/OpenSourceDetail";
import { LineFollowerDetail } from "../pages/projects/LineFollowerDetail";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project/mine-mapper" element={<MineMapperDetail />} />
        <Route path="/project/wildhawk" element={<WildhawkDetail />} />
        <Route path="/project/meddybuddy" element={<MeddyBuddyDetail />} />
        <Route path="/project/opensource" element={<OpenSourceDetail />} />
        <Route path="/project/line-follower" element={<LineFollowerDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
