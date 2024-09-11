import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-orange-500 text-sky-300 py-5">
      <p className="text-3xl">User: {userid}</p>
      <p className="text-xl">Ex: baseURL/user/heyYou</p>
    </div>
  );
}

export default User;
