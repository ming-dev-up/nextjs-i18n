import Navbar from "./Navbar/index";
import Footer from "./Footer/index";

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};
export default Layout;
