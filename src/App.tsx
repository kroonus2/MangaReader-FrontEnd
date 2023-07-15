import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
  return (
    <div className="bg-gray-700 overflow-auto">
      <Navbar />
      <MainRoutes />
    </div>
  )
}