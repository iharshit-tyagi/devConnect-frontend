import { useEffect, useState } from "react";
import {
  getMatchRequests,
  acceptMatchRequest,
  rejectMatchRequest,
} from "../api/matches";

const MatchRequests = () => {
  const [matchRequests, setMatchRequests] = useState(null);

  useEffect(() => {
    callGetMatchRequest();
  }, []);

  const callGetMatchRequest = async () => {
    const reqs = await getMatchRequests();
    console.log(reqs?.data);
    setMatchRequests(reqs?.data);
  };

  const onAccept = async (reqId) => {
    const res = await acceptMatchRequest(reqId);
    console.log("Accepted", res);
  };

  const onReject = async (reqId) => {
    const res = await rejectMatchRequest(reqId);
    console.log("Rejected", res);
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
            {/* Avatar and Info Section */}
            <div className="flex items-center gap-4">
              <img
                src={user?.sender?.avatar_url || "https://i.pravatar.cc/150"}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover border border-gray-600"
              />
              <div>
                <p className="text-white text-lg font-medium">
                  {user?.sender?.firstName} {user?.sender?.lastName}
                </p>
                <p className="text-gray-400 text-sm">
                  {user?.sender?.skills?.join(", ")}
                </p>
                <p className="text-gray-400 text-sm">{user?.sender?.bio}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onAccept(user?.id)}
                className="btn btn-primary btn-sm"
              >
                Accept
              </button>
              <button
                onClick={() => onReject(user?.id)}
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
