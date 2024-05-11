const JobCard = ({job}) => {
  const {photo} = job || {};

  return (
    <div>
      <img src={photo} alt="" />
    </div>
  );
};

export default JobCard;
