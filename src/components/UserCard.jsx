const UserCard = ({ userData, onConnect, onSkip }) => {
  const {
    firstName,
    lastName,
    email,
    bio,
    avatar_url,
    skills,
    github_url,
    linkedin_url,
  } = userData;

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {[firstName, lastName].filter(Boolean).join(" ")}
        </h2>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1 hover:underline"
            >
              📧 <span>{email}</span>
            </a>
          )}
          {"github_url" && (
            <a
              href={"https://github.com/iharshit-tyagi"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:underline mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="inline-block"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.208 11.385c.6.111.82-.26.82-.577v-2.234c-3.338.725-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.086 1.837 1.235 1.837 1.235 1.07 1.834 2.807 1.304 3.492.997.109-.775.418-1.304.76-1.604-2.665-.303-5.467-1.336-5.467-5.946 0-1.313.469-2.386 1.236-3.227-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.487 11.487 0 013.004-.404c1.02.004 2.047.138 3.004.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.234 1.914 1.234 3.227 0 4.62-2.807 5.64-5.48 5.937.43.371.814 1.102.814 2.222v3.293c0 .32.216.694.825.576A12.006 12.006 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 my-2">
            {typeof skills === "string"
              ? skills.split(",").map((skill, i) => (
                  <div
                    key={i}
                    className="badge badge-outline badge-info text-xs"
                  >
                    {skill.trim()}
                  </div>
                ))
              : skills.map((skill, i) => (
                  <div
                    key={i}
                    className="badge badge-outline badge-primary text-xs"
                  >
                    {skill}
                  </div>
                ))}
          </div>
        )}

        <p>{bio}</p>
        <div className="card-actions">
          <button onClick={onConnect} className="btn btn-primary">
            Connect
          </button>
          <button onClick={onSkip} className="btn btn-outline">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
