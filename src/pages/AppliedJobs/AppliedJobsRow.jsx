import {useRef} from "react";
import generatePDF from "react-to-pdf";

const AppliedJobsRow = ({apply}) => {
  const {job_title, deadline, jobPostingDate, salary, category} = apply || {};

  const targetRef = useRef();

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {job_title}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {new Date(deadline).toLocaleDateString()}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {new Date(jobPostingDate).toLocaleDateString()}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {category}
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p
            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs"
          >
            {salary}
          </p>
        </div>
      </td>

      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <button
          onClick={() => generatePDF(targetRef, {filename: "page.pdf"})}
          className="bg-blue-300 p-1 rounded-lg"
        >
          Download
        </button>
        <div ref={targetRef}></div>
      </td>
    </tr>
  );
};

export default AppliedJobsRow;
