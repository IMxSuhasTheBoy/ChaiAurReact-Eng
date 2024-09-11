import { useLoaderData } from "react-router-dom";
import { GithubUserInfo } from "../../types";
// import { useState, useEffect } from "react";

function Github() {
  const data = useLoaderData() as GithubUserInfo;

  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center m-4 bg-sky-600 text-white p-4 text-3xl gap-8">
      <h3>Github followers: {data.followers}</h3>
      <img src={data.avatar_url} width={300} alt="Avatar" />
    </div>
  );
}

export default Github;
