import activities from "../../constants/activities";
import { RiUserFollowLine } from "react-icons/ri";

export default function Activity() {
	return (
		<div className="bg-white p-4 rounded-2xl w-80 text-xxl mt-20 ml-10">
			<div className="flex justify-between border-b-2">
				<p className="font-bold ">Activity</p>
				<p className=" text-gray-600 items-center cursor-pointer">See all</p>
			</div>
			<p className="text-xxl font-bold mt-8 mb-2">Stories about you</p>
			<div className="flex pl-1">
				<img
					src="/profile/4.jpg"
					alt=""
					className="rounded-full ring-2 ring-primary cursor-pointer"
					width={40}
				/>
				<div className="ml-2">
					<p>Mentions</p>
					<p className="text-xs ">2 stories mentioned you</p>
				</div>
			</div>
			<p className="text-xxl font-bold mt-4">New</p>

			{activities.map((activity) => {
				// eslint-disable-next-line no-lone-blocks
				{
					if (activity.post !== null) {
						return (
							<div className="flex items-center justify-between p-1">
								<div className="flex  mt-4">
									<img
										src={activity.profile}
										alt="profile"
										width={40}
										className="rounded-full"
									/>
									<p className="text-sm ml-4">
										{activity.user} liked <br />
										your post.
										<time className="text-gray-600 text-xs ml-2">
											{activity.time}
										</time>
									</p>
								</div>

								<img src={activity.post} alt="" width={30} />
							</div>
						);
					} else {
						return (
							<div className="flex items-center justify-between p-1">
								<div className="flex mt-4">
									<img
										src={activity.profile}
										alt="profile"
										width={40}
										className="rounded-full"
									/>
									<p className="text-sm ml-4">
										{activity.user} started <br />
										following you.
										<time className="text-gray-600 text-xs ml-2">
											{activity.time}
										</time>
									</p>
								</div>

								<RiUserFollowLine className="text-3xl p-1 bg-gray-200 rounded-full" />
							</div>
						);
					}
				}
			})}
		</div>
	);
}
