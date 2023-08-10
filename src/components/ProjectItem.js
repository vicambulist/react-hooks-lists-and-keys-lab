import React from "react";

function ProjectItem({ name, about, technologies }) {

  // Make a list of the technologies with mapping, using the key of technology
  // It's a constant, so you don't need brackets except in what will be JSX later to 
    // evaluate the JavaScript objects
  const technologyList = technologies.map((technology) => (
    <span key = {technology}>{technology}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
          {technologyList}
      </div>
    </div>
  );
}

export default ProjectItem;
