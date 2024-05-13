import {useLoaderData} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {
  const job = useLoaderData();
  const {user} = useAuth();
  const {
    job_title,
    photo,
    description,
    applicantNumber,
    salary,
    category,
    deadline,
    jobPostingDate,
    email,
  } = job || {};

  const handleApply = async (e) => {
    e.preventDefault();
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
      const {data} = await axios.post(
        `${import.meta.env.VITE_API_URL}/applied`,
        jobData
      );
      console.log(data);
      toast.success("Your Job Applied Successful!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-[calc(100vh-304px)]">
      <div className="card w-[500px] bg-base-100 shadow-xl mt-6 mx-auto">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center">
            <h2 className="card-title">
              <span className="font-bold">Position: </span>
              {job_title}
            </h2>
            <p>Category: {category}</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <p>Salary: ${salary}</p>
            <p>Applicants: {applicantNumber}</p>
          </div>
          <p className="text-justify">
            <span className="font-bold">Description: </span>
            {description}
          </p>
          <div className="w-full">
            {/* modal */}
            <button
              className="bg-orange-500 p-2 text-white rounded-xl w-full"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Apply Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <input
                  type="text"
                  name=""
                  defaultValue={user?.email}
                  className="p-2 border rounded-md mb-5"
                />
                <input
                  type="text"
                  name=""
                  defaultValue={user?.displayName}
                  className="p-2 border rounded-md mb-5 ml-5"
                />
                <input type="text" />
                <input
                  type="file"
                  name="file"
                  className="file-input file-input-bordered file-input-primary"
                  required
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle bg-orange-500 absolute right-2 top-2">
                      ✕
                    </button>
                    <button
                      onClick={handleApply}
                      className="bg-orange-500 px-10 py-2 text-white rounded-xl"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
