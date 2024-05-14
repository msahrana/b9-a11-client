import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import JobCategory from "../../components/JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elysian Estates | Home</title>
      </Helmet>
      <Banner></Banner>
      <JobCategory></JobCategory>
    </div>
  );
};

export default Home;
