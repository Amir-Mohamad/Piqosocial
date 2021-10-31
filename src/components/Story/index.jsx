import { AiFillRightCircle } from "react-icons/ai";
import stories from "../../constants/stories";

export default function index() {
	return (
		<div className="flex bg-white mt-20 items-center justify-center rounded-2xl mb-10 pl-2">
			{stories.map((story) => (
				<div className="flex p-2 flex-col items-center">
					<img
						src={story.profile}
						alt=""
						className="rounded-full w-14 ring-primary ring-2 cursor-pointer"
						style={{ padding: "0.75px" }}
					/>
					<p
						classname="text-xs flex items-center justify-center"
						style={{ fontSize: "0.9rem" }}
					>
						{story.name}
					</p>
				</div>
			))}
			<div clas classname="flex items-center" sName="">
				<AiFillRightCircle
					style={{ fontSize: "1.5rem", color: "gray", cursor: "pointer" }}
				/>
			</div>
		</div>
	);
}
