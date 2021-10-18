import Layout from "./Layout";
import Activity from "./components/Activity";
import Posts from "./components/Posts";
import Messages from "./components/Messages";
import Story from "./components/Story";

function App() {
	return (
		<Layout>
			<div className="grid gap-4 grid-cols-3 p-28">
				<Activity />
				<div className="flex flex-col">
					<Story />
					<Posts />
				</div>
				<Messages />
			</div>
		</Layout>
	);
}

export default App;
