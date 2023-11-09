// class based ❌ depreciated <--- no longer going to be upgraded
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// inline | internal | External
import user from "./Screenshot 2023-07-28 075623.png";
function Navbar() {
        // React: Hooks
        const [show, setShow] = useState(false);
        const handleShow = () => setShow(!show);
        return (
                <nav class="dflex x-between">
                        <div className="brand dflex">
                                <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                                        alt=""
                                />
                                <h2 className="text-white"> store </h2>
                        </div>
                        <ul className="dflex text-white nav-items">
                                <li><Link to='/'>Home</Link> </li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/product'>Product</Link></li>
                                <li>Orders</li>
                                <li>Support</li>
                        </ul>
                        <div className="profile">
                                <img src={user} alt="" />
                        </div>
                        <button className="handburger" onClick={handleShow}>
                                <i class="fi fi-rs-align-justify"></i>
                                {show && (
                                        <div className="nav-mobileItems">
                                                <ul className="text-white nav-itemmobile ">
                                                        <li>Home</li>
                                                        <li>Contact</li>
                                                        <li>Products</li>
                                                        <li>Orders</li>
                                                        <li>Support</li>
                                                </ul>
                                        </div>
                                )}
                        </button>
                </nav>
        );
}
export default Navbar;
