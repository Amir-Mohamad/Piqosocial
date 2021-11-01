import { AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import messages from "./../../constants/messages";

export default function index() {
	return (
		<div className="bg-white p-4 rounded-2xl text-xxl w-80 absolute right-0 mr-4 mt-20">
			<div className="flex justify-between items-center mb-5">
				<h2>Messages</h2>
				<AiOutlineMessage style={{ fontSize: "1.2rem" }} />
			</div>
			<div className="flex items-center bg-gray-200 px-3 p-2 rounded-full ">
				<button type="submit" className="rounded-full pr-1 border-l-2">
					<AiOutlineSearch className="text-xl" />
				</button>
				<input
					type="text"
					placeholder="Search Messages"
					className="outline-none bg-gray-200 text-sm"
				/>
			</div>
			<div className="flex justify-between mt-5 border-b-2 border-gray-200">
				<div className="flex">
					<p className="text-sm  border-b-2 border-primary">Primary</p>
					<p className="text-sm px-4">General</p>
				</div>
				<div>
					<p className="text-sm text-primary font-bold">Requests (2)</p>
				</div>
			</div>
			{messages.map((message) => (
				<div className="flex pl-1 mt-6">
					<img
						src={message.profile}
						alt=""
						className="rounded-full ring-2 ring-primary cursor-pointer"
						width={40}
					/>
					<div className="ml-2">
						<p>{message.user}</p>
						<p className="text-xs"> Active {message.time}</p>
					</div>
				</div>
			))}
		</div>
	);
}
