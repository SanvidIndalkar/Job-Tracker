import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from '../components/Logo'
import links from '../utils/links'
import NavLinks from "./NavLinks";


const SmallSidebar = () => {
    const data = useDashboardContext();
    const {showSidebar,toggleSidebar} = data;
    return <Wrapper>
        <div className={showSidebar? 'sidebar-container show-sidebar' : 'sidebar-container'}>
            <div className="content">
                <button type="button" className="close-btn" onClick={toggleSidebar}>
                    <FaTimes/>
                </button>
                <header>
                    <Logo/>
                </header>
                <NavLinks/>
            </div>
        </div>
    </Wrapper>
}

export default SmallSidebar;