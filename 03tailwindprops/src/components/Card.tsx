import React from "react";

function Card({
  username = "HC",
  post = "Not assigned yet.",
  url = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
}) {
  // console.log(props)
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={url}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            iusto minima quas nesciunt, vero neque totam architecto ab incidunt
            quidem doloremque nostrum vel, temporibus pariatur, magni nemo sequi
            reiciendis repellat?
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">{post}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
