import Navbar from "./Navbar";
import Footer from "./Footer";

function index({ children }) {
	return (
		<div>
			<Navbar />
			<div className="bg-gray-200">{children}</div>

			<Footer />
		</div>
	);
}

export default index;
