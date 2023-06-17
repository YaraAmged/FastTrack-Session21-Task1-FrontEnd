import "./JobCard.css";
const JobCard = ({ job, handleSelectTag }) => {
  return (
    <li
      className={`job-card ${job.isNew ? "new" : ""} ${
        job.isFeatured ? "featured" : ""
      } row`}
    >
      <div className="job-card__info col-12 col-sm-6">
        <div className="row align-items-center">
          <div className="col-2">
            <div className="img-c">
              <img src={job.Img} alt={job.title} />
            </div>
          </div>
          <div className="col-12 col-sm-10">
            <div className="d-flex align-items-center">
              <p>{job.company}</p>
              {job.isNew && <p className="tag-new">New!</p>}
              {job.isFeatured && <p className="tag-featured">Featured</p>}
            </div>
            <h6>{job.title}</h6>

            <ul>
              <li>{job.time}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <ul className="job-card__tags d-flex">
          {job.skill?.map((skill) => (
            <li onClick={() => handleSelectTag(skill)}>{skill}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default JobCard;
