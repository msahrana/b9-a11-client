const AllJobsRow = ({job}) => {
  const {job_title, deadline, jobPostingDate, salary} = job || {};

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
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p
            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs"
          >
            $ {salary}
          </p>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button className="bg-orange-500 p-2 text-white rounded-xl">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default AllJobsRow;
