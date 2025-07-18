import { useEffect, useState } from "react";
import {
  getMatchRequests,
  acceptMatchRequest,
  rejectMatchRequest,
} from "../api/matches";
import Toast from "./Toast";

const MatchRequests = () => {
  const [matchRequests, setMatchRequests] = useState(null);
  const [showNotification, setShowNotification] = useState(null);

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
    // Remove the accepted request from the state
    setMatchRequests((prev) => prev?.filter((req) => req.id !== reqId));
    setShowNotification("Request Accepted");
    setTimeout(() => setShowNotification(null), 2000);
  };

  const onReject = async (reqId) => {
    const res = await rejectMatchRequest(reqId);
    console.log("Rejected", res);
    // Remove the rejected request from the state
    setMatchRequests((prev) => prev?.filter((req) => req.id !== reqId));
    setShowNotification("Request Rejected");
    setTimeout(() => setShowNotification(null), 2000);
  };

  if (!matchRequests?.length) {
    return (
      <div className="text-center text-gray-400 mt-10">
        {showNotification && <Toast message={showNotification} />}
        <p className="text-lg">No match requests at the moment 😴</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="alert alert-success shadow-lg">
            <span>{showNotification}</span>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        Incoming Match Requests
      </h2>
      <div className="space-y-4">
        {matchRequests.map((matchReq) => (
          <div
            key={matchReq?.id}
            className="bg-base-200 shadow-md p-4 rounded-lg flex items-center justify-between"
          >
            {/* Avatar and Info Section */}
            <div className="flex items-center gap-4">
              <img
                src={
                  matchReq?.sender?.avatar_url || "https://i.pravatar.cc/150"
                }
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover border border-gray-600"
              />
              <div>
                <p className="text-white text-lg font-medium">
                  {matchReq?.sender?.firstName} {matchReq?.sender?.lastName}
                </p>
                <p className="text-gray-400 text-sm">
                  {matchReq?.sender?.skills?.join(", ")}
                </p>
                <p className="text-gray-400 text-sm">{matchReq?.sender?.bio}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onAccept(matchReq?.id)}
                className="btn btn-primary btn-sm"
              >
                Accept
              </button>
              <button
                onClick={() => onReject(matchReq?.id)}
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
