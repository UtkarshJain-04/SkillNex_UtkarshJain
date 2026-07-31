import useAuthStore from "../store/useAuthStore"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { ProjectCard } from "../components/projectCard"
import { API_URL } from '../config'

const MyProjects = () => {
  const { token } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [myProjects, setMyProjects] = useState([]);
  useEffect(() => {
    const fetchMyProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}/api/project/myprojects`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        setMyProjects(result.myProjects);
      } catch (err) {
        console.log("Error while fetching your projects", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyProjects();
  }, []);

  return (
    <>
      {loading ? (
        "Loading...."
      ) : (
        <div>
          {myProjects?.length === 0 ? (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-semibold">No Projects Yet!</h2>
              <p className="text-gray-500 mt-2">
                Start building your first project.
              </p>
              <Link to="/create-project" className="btn bg-green-400 text-white font-semibold text-lg mt-5">
                Create Project
              </Link>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              {myProjects?.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyProjects;







