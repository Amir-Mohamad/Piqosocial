import { AiOutlineSearch } from "react-icons/ai";
function SearchBar() {
	return (
		<div className="flex items-center bg-gray-200 px-3 p-1 rounded-full ">
			<button type="submit" className="rounded-full p-1 border-l-2">
				<AiOutlineSearch className="text-xl" />
			</button>
			<input
				type="text"
				placeholder="Search for creators, inspirations, projects"
				className="outline-none bg-gray-200 text-sm"
				size="40"
			/>
		</div>
	);
}

export default SearchBar;
