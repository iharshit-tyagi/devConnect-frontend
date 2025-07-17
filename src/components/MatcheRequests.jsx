import { useEffect, useState } from "react";
import { getMatchRequests } from "../api/matches";
const MatchRequests = () => {
  const dummyRequests = [
    {
      _id: "user1",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      bio: "Frontend developer passionate about React and UI/UX.",
      skills: ["React", "CSS", "Tailwind"],
      avatar_url: "https://i.pravatar.cc/150?img=1",
      github_url: "https://github.com/alicejohnson",
      linkedin_url: "https://linkedin.com/in/alicejohnson",
    },
    {
      _id: "user2",
      firstName: "Bob",
      lastName: "Smith",
      email: "bob@example.com",
      bio: "Backend developer who loves Node.js and clean APIs.",
      skills: ["Node.js", "Express", "MongoDB"],
      avatar_url: "https://i.pravatar.cc/150?img=2",
      github_url: "https://github.com/bobsmith",
      linkedin_url: "https://linkedin.com/in/bobsmith",
    },
    {
      _id: "user3",
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie@example.com",
      bio: "Full-stack dev interested in open source collabs.",
      skills: ["TypeScript", "Next.js", "Prisma"],
      avatar_url: "https://i.pravatar.cc/150?img=3",
      github_url: "https://github.com/charliedavis",
      linkedin_url: "https://linkedin.com/in/charliedavis",
    },
  ];
  const [matchRequests, setMatchRequests] = useState(null);
  useEffect(() => {
    callGetMatchRequest();
  }, []);
  const callGetMatchRequest = async () => {
    const reqs = await getMatchRequests();
    console.log(reqs?.data);

    setMatchRequests(reqs?.data);
  };
  const onAccept = async () => {
    console.log("Accepted");
  };
  const onReject = async () => {
    console.log("Accepted");
  };
  if (!matchRequests?.length) {
    return (
      <div className="text-center text-gray-400 mt-10">
        <p className="text-lg">No match requests at the moment 😴</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        Incoming Match Requests
      </h2>
      <div className="space-y-4">
        {matchRequests.map((user) => (
          <div
            key={user?.id}
            className="bg-base-200 shadow-md p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <p className="text-white text-lg font-medium">
                {user?.sender?.firstName} {user.lastName}
              </p>
              <p className="text-gray-400 text-sm">
                {user?.sender?.skills?.join(", ")}
              </p>
              <p className="text-gray-400 text-sm">{user?.sender?.bio}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onAccept(user)}
                className="btn btn-primary btn-sm"
              >
                Accept
              </button>
              <button
                onClick={() => onReject(user)}
                className="btn btn-neutral btn-sm"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchRequests;
