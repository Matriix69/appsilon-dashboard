import { useState } from "react";
import "./styles.sass";
import { navLinks } from "../../utiles/utiles";
import DashboardContent from "./DashboardContent";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Dashboard = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="dashboard">
            <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

            {/* content */}
            <div className="content">
                {/* transparent overlay, when menu is open on smaller screens */}
                <div
                    className={toggleMenu ? "dashboard-overlay" : "dashboard-overlay-none"}
                    onClick={() => setToggleMenu(!toggleMenu)}
                ></div>

                {/* link routes */}
                <Routes>
                    {navLinks.map(({ link }) => (
                        <Route path={link} element={<DashboardContent />} />
                    ))}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
