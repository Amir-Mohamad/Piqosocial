import Layout from "./Layout";
import Activity from "./components/Activity";
import Posts from "./components/Posts";
import Messages from "./components/Messages";
import Story from "./components/Story";

function App() {
	return (
		<Layout>
			<div className="grid gap-2 grid-cols-3">
				<Activity />
				<div className="">
					<Story />
					<Posts />
				</div>
				<Messages />
			</div>
		</Layout>
	);
}

export default App;
