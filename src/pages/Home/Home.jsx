import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import JobCategory from "../../components/JobCategory/JobCategory";
import History from "../../components/History/History";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elysian Estates | Home</title>
      </Helmet>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <History></History>
    </div>
  );
};

export default Home;
