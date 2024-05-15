import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import JobCategory from "../../components/JobCategory/JobCategory";
import History from "../../components/History/History";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JobNest | Home</title>
      </Helmet>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <History></History>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
