import { AiOutlineVideoCameraAdd, AiOutlineFolderAdd } from "react-icons/ai";
import SearchBar from "./SearchBar";
function index() {
	return (
		<header>
			<nav className="flex items-center justify-between px-28 mt-4">
				<div className="logo">
					<h2 className="font-bold text-2xl">Piqosocial</h2>
				</div>
				<div>
					<SearchBar />
				</div>
				<div className="items flex text-2xl">
					<AiOutlineVideoCameraAdd className="mr-2 cursor-pointer hover:border-2 hover:border-gray-400" />
					<AiOutlineFolderAdd className="ml-2 cursor-pointer hover:border-2 hover:border-gray-400" />
					<div className="ml-4">
						<img src="/images/amir.png" alt="profile" width={25} />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default index;
