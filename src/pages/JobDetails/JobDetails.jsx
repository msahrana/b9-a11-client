import {useLoaderData} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const JobDetails = () => {
  const job = useLoaderData();
  const {user} = useAuth();
  const {job_title, photo, description, applicantNumber, salary, category} =
    job || {};

  const handleApply = () => {
    console.log("clicked");
  };

  return (
    <div className="min-h-[calc(100vh-304px)]">
      <div className="card w-96 bg-base-100 shadow-xl mt-6 mx-auto">
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
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <p>Salary: ${salary}</p>
            <p>Applicants: {applicantNumber}</p>
          </div>
          <p>{description}</p>
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
                  className="file-input file-input-bordered file-input-primary"
                />
                <div className="modal-action">
                  <form method="dialog">
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
