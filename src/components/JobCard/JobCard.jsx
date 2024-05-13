/* eslint-disable react/prop-types */

import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const JobCard = ({job}) => {
  const {user} = useAuth();
  const {
    _id,
    job_title,
    description,
    category,
    deadline,
    applicantNumber,
    jobPostingDate,
    salary,
  } = job || {};
  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className="text-xs font-light text-gray-800 ">
          Deadline: {new Date(jobPostingDate).toLocaleDateString()}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>

      <p>
        <span className="font-bold">Name: </span>
        {user?.displayName}
      </p>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800">
          <span className="font-bold">Job Title: </span>
          {job_title}
        </h1>

        <p title={description} className="mt-2 text-sm text-gray-600">
          <span className="font-bold">Description: </span>
          {description.substring(0, 70)}...
        </p>
        <p>
          <span className="mt-2 text-lg font-bold text-gray-600">
            Salary Range
          </span>
          : ${salary}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600">
          Job Applicant Number: {applicantNumber}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
