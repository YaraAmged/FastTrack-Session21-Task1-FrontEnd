import { useState } from "react";
import AccountImg from "../../icons/account.svg";
import EyeImg from "../../icons/eyecam-co.svg";
import FaceImg from "../../icons/faceit.svg";
import InsureImg from "../../icons/insure.svg";
import LoopImg from "../../icons/loop-studios.svg";
import ManageImg from "../../icons/manage.svg";
import MyhomeImg from "../../icons/myhome.svg";
import PhotoImg from "../../icons/photosnap.svg";
import ShortlyImg from "../../icons/shortly.svg";
import AirImg from "../../icons/the-air-filter-company.svg";
import JobCard from "../JobCard/JobCard";
import SelectedTagsList from "../SelectedTagsList/SelectedTagsList";
import "./JobsList.css";
const jobsList = [
  {
    id: 1,
    Img: PhotoImg,
    company: "Photosnap",
    title: "Senior Frontend Developer",
    time: "1d ago",
    contract: "Full Time",
    location: "USA only",
    skill: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    Img: ManageImg,
    company: "Manage",
    isNew: true,
    isFeatured: true,
    title: "Fullstack Developer",
    time: "1d ago",
    contract: "Part Time",
    location: "Remote",
    skill: ["Fullstack", "Midweight", "Python", "React"],
  },
  {
    id: 3,
    Img: AccountImg,
    company: "Account",
    isNew: true,
    title: "Junior Frontend Developer",
    time: "2d ago",
    contract: "Part Time",
    location: "USA only",
    skill: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
  {
    id: 4,
    Img: MyhomeImg,
    company: "MyHome",
    title: "Junior Frontend Developer",
    time: "5d ago",
    contract: "Contract",
    location: "USA only",
    skill: ["Frontend", "Junior", "CSS", "Javascript"],
  },
  {
    id: 5,
    Img: LoopImg,
    company: "Loop Studios",
    title: "Software Engineer",
    time: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    skill: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
  },
  {
    id: 6,
    Img: FaceImg,
    company: "FaceIt",
    title: "Junior Backend Developer",
    time: "2w ago",
    contract: "Full Time",
    location: "UK only",
    skill: ["Backend", "Junior", "Ruby", "RoR"],
  },
  {
    id: 7,
    Img: ShortlyImg,
    company: "Shortly",
    title: "Junior Developer",
    time: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    skill: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
  },
  {
    id: 8,
    Img: InsureImg,
    company: "Insure",
    title: "Junior Frontend Developer",
    time: "2w ago",
    contract: "Full Time",
    location: "USA only",
    skill: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
  },
  {
    id: 9,
    Img: EyeImg,
    company: "Eyecam Co.",
    title: "Full Stack Engineer",
    time: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    skill: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
  },
  {
    id: 10,
    Img: AirImg,
    company: "The Air Filter Company",
    title: "Front-end Dev",
    time: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    skill: ["Frontend", "Junior", "React", "Sass", "Javascript"],
  },
];
const JobsList = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const handleSelectTag = (tag) => {
    if (selectedTags.includes(tag)) return;
    setSelectedTags((selectedTags) => [...selectedTags, tag]);
  };
  const handleUnselectTag = (tag) => {
    setSelectedTags((selectedTags) =>
      selectedTags.filter((selectedTag) => selectedTag !== tag)
    );
  };
  const handleClear = () => {
    setSelectedTags([]);
  };
  const shownJobs =
    selectedTags.length === 0
      ? jobsList
      : jobsList.filter((job) =>
          selectedTags.every((skill) => job.skill.includes(skill))
        );
  return (
    <main>
      <img class="w-100" alt=" " src={process.env.PUBLIC_URL +"/desktop-design.jpg" } />
      <div class="container mt-5">
        <SelectedTagsList
          selectedTags={selectedTags}
          handleUnselectTag={handleUnselectTag}
          handleClear={handleClear}
        />
        <div class="row">
          {shownJobs.map((job) => (
            <JobCard key={job.id} job={job} handleSelectTag={handleSelectTag} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default JobsList;
