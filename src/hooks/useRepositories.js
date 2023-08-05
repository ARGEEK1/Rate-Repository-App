import React, { useState } from "react";
export const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const fetchRepositories = async () => {
    const response = await globalThis.fetch(
      "http://localhost:5000/api/repositories"
    );
    const data = await response.json();
    setRepositories(data);
  };

  React.useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return {
    repositories: repositoriesNodes,
  };
};
