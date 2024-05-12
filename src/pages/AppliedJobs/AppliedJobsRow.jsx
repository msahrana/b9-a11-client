const AppliedJobsRow = ({apply}) => {
  const {job_title, deadline, jobPostingDate, salary, category} = apply || {};

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

      {/* <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
          <h2 className="text-sm font-normal ">Pending</h2>
        </div>
      </td> */}
    </tr>
  );
};

export default AppliedJobsRow;
