import Navbar from "./Navbar";
import Footer from "./Footer";

function index({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default index;
