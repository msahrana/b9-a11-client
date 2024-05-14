import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import MyJobsRow from "./MyJobsRow";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const MyJobs = () => {
  const {user} = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  const getData = async () => {
    const {data} = await axiosSecure(`/jobs/${user?.email}`);
    setJobs(data);
  };

  useEffect(() => {
    getData();
  }, [user?.email]);

  const handleDelete = async (id) => {
    try {
      const {data} = await axiosSecure.delete(`/job/${id}`);
      console.log(data);
      toast.success("Delete Successful");
      //refresh ui
      getData();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <section className="container px-4 mx-auto pt-12 min-h-[calc(100vh-280px)]">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Jobs:</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {jobs.length} Job
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Job Posting Date</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Job Category</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Salary
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Actions
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {jobs.map((job) => (
                    <MyJobsRow
                      key={job._id}
                      job={job}
                      handleDelete={handleDelete}
                    ></MyJobsRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJobs;
