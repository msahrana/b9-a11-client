const MyJobsRow = ({job}) => {
  const {job_title, deadline, jobPostingDate, salary, category} = job || {};

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
        <button className="bg-orange-500 px-3 py-1 rounded-full text-white">
          Update
        </button>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap font-medium">
        <button className="bg-red-500 px-3 py-1 rounded-full text-white">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyJobsRow;
