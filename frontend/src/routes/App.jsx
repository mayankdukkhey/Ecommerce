import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import Home from "./Home";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
    <Header></Header>
    <FetchItems></FetchItems>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> :<Home></Home>}
    <Footer></Footer>
    </>
  )
}

export default App
