// import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries.js";

export const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
  const { repositories = null } = data;

  // const [repositories, setRepositories] = useState(null);
  // const fetchRepositories = async () => {
  //   const response = await globalThis.fetch(
  //     "http://192.168.1.136:5000/api/repositories"
  //   );
  //   const data = await response.json();
  //   setRepositories(data);
  // };

  // React.useEffect(() => {
  //   fetchRepositories();
  // }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { loading, repositories: repositoriesNodes, refetch };
};
