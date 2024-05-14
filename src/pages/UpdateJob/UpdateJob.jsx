import {useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import {useLoaderData} from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const UpdateJob = () => {
  const job = useLoaderData();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const [startJob, setStartJob] = useState(new Date());

  const {
    job_title,
    deadline,
    jobPostingDate,
    salary,
    photo,
    description,
    applicantNumber,
    _id,
  } = job || {};

  const handleFormUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const email = form.email.value;
    const deadline = startDate;
    const jobPostingDate = startDate;
    const salary = parseInt(form.salary.value);
    const category = form.category.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const jobData = {
      job_title,
      email,
      deadline,
      jobPostingDate,
      salary,
      category,
      photo,
      description,
      applicantNumber,
    };
    try {
      const {data} = await axiosSecure.patch(`/job/${_id}`, jobData);
      console.log(data);
      toast.success("Job Data Successfully Updated!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-280px)]">
      <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md border">
        <h2 className="text-xl font-semibold text-gray-700 capitalize ">
          Update Job:
        </h2>

        <form onSubmit={handleFormUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="job_title">
                Job Title:
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                defaultValue={job_title}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="emailAddress">
                Email Address:
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Deadline:</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                defaultValue={deadline}
                disabled
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Job Posting Date:</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={startJob}
                onChange={(date) => setStartJob(date)}
                defaultValue={jobPostingDate}
                disabled
              />
            </div>
            <div>
              <label className="text-gray-700" htmlFor="salary">
                Salary Range:
              </label>
              <input
                id="salary"
                name="salary"
                type="number"
                defaultValue={salary}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700" htmlFor="category">
                Job Category:
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
                required
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 w-full">
            <div className="">
              <label className="text-gray-700" htmlFor="photo">
                Photo:
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                defaultValue={photo}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="">
              <label className="text-gray-700" htmlFor="applicantNumber">
                Job Applicants Number:
              </label>
              <input
                id=""
                type="applicantNumber"
                name="applicantNumber"
                disabled
                defaultValue={applicantNumber}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Job Description:
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              defaultValue={description}
              disabled
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update Job
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateJob;
