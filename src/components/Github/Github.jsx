import React from "react";

import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-gray-800 text-white text-3xl text-center p-4">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Rehannn03");
  return response.json();
};
