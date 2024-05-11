import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const JobCategory = () => {
  return (
    <Tabs>
      <div className=" container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Browse Jobs By Categories
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          There are Four categories job available for the time being. They will
          be On Site, Remote, Part-Time and Hybrid. Browse them by clicking on
          the tabs below.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>On Site</Tab>
            <Tab>Remote</Tab>
            <Tab>Part-Time</Tab>
            <Tab>Hybrid</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {jobs
              .filter(j => j.category === 'On Site')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))} */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {jobs
              .filter(j => j.category === 'Remote')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))} */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {jobs
              .filter(j => j.category === 'Part-Time')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))} */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {jobs
              .filter(j => j.category === 'Hybrid')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))} */}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default JobCategory;
