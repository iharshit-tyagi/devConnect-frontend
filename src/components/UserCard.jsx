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
