import { ProjectCard } from "../components/ProjectCard";
import useAuthStore from "../store/useAuthStore"
import { useEffect, useState } from "react"
import { API_URL } from '../config'
import { Link } from 'react-router-dom';

const ProjectFeed = () => {
  const { token } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/project/feed`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
          throw new Error(result.message);
        }
        setProjects(result.myProjectFeed);
      } catch (err) {
        console.log("error while fetching all projects", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      {loading ? (
        "Loading...."
      ) : (
        <div className="flex flex-col">
          <div className="mr-5 mt-5 flex gap-3 justify-end">
            <Link
              to="/create-project"
              className="btn bg-yellow-400 text-white font-semibold text-lg rounded-xl"
            >
              Add Project +
            </Link>
            <Link
              to="/myprojects"
              className="btn bg-orange-400 text-white font-semibold text-lg rounded-xl"
            >
              My Projects
            </Link>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              {projects?.map((project) => (
                <ProjectCard project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectFeed;
