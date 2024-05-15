import useAuth from "../../hooks/useAuth/useAuth";
import AppliedJobsRow from "./AppliedJobsRow";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";

const AppliedJobs = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const getData = async () => {
    const {data} = await axiosSecure(`/applied/${user?.email}`);
    return data;
  };

  const {data: applied = []} = useQuery({
    queryKey: ["applied", user?.email],
    queryFn: () => getData(),
  });

  return (
    <section className="container px-4 mx-auto pt-12 min-h-[calc(100vh-280px)]">
      <Helmet>
        <title>Elysian Estates | Applied Jobs</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Applied Jobs:</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {applied.length} Job
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
                      <span>Job Category</span>
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
                      <span>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {applied.map((apply) => (
                    <AppliedJobsRow
                      key={apply._id}
                      apply={apply}
                    ></AppliedJobsRow>
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

export default AppliedJobs;
