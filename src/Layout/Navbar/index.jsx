import { AiOutlineVideoCameraAdd, AiOutlineFolderAdd } from "react-icons/ai";
import SearchBar from "./SearchBar";
function index() {
	return (
		<header>
			<nav className="flex items-center justify-between px-28 mt-4 mb-4">
				<div className="logo">
					<h2 className="font-bold text-2xl">Piqosocial</h2>
				</div>
				<div>
					<SearchBar />
				</div>
				<div className="items flex text-3xl">
					<AiOutlineVideoCameraAdd className="mr-2 cursor-pointer bg-gray-200 p-1 rounded-full" />
					<AiOutlineFolderAdd className="ml-2 cursor-pointer bg-gray-200 p-1 rounded-full" />
					<div className="ml-4 cursor-pointer rounded-full">
						<img src="/images/amir.png" alt="profile" width={25} />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default index;
