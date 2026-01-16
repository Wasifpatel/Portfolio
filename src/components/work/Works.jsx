import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData); // Load all projects directly
  }, []);

  return (
    <div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <WorkItems
              item={item}
              key={item.id}
              deploymentLink={item.deploymentLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
