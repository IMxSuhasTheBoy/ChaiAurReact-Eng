import reactLogo from "../assets/react.svg";

function Card({
  username = "default username",
  post = "default post",
}: {
  username: string;
  post: string;
}) {
  return (
    <div className="m-2">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-4 dark:bg-slate-700">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto md:px-4 bg-gray-700"
          src={reactLogo}
          alt="React Logo"
          width="384"
          height="512"
        />

        <div className="text-center md:text-left p-4">
          <blockquote>
            <p className="text-lg font-medium pb-3">
              React components use props to communicate with each other. Every
              parent component can pass some information to its child components
              by giving them props. Props might remind you of HTML attributes,
              but you can pass any JavaScript value through them, including
              objects, arrays, and functions.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
