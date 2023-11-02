// class based ❌ depreciated <--- no longer going to be upgraded
import './style.css';
// inline | internal | External
import user from './Screenshot 2023-07-28 075623.png'
function Navbar(){
        return(
                <nav class="dflex x-between"> 
                        <div className="brand dflex"> 
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="" />
                                <h2 className='text-white'> store  </h2>
                        </div>
                        <ul className='dflex text-white nav-items'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Products</li>
                                <li>Orders</li>
                                <li>Support</li>
                        </ul>
                        <div className='profile'>
                                <img src={user} alt="" />
                        </div>
                </nav>
        )
}
export default Navbar;