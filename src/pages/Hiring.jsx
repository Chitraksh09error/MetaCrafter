import React from "react";
import hiringData from "../data/hiringData";

const Hiring = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-4">💼 We’re Hiring!</h1>
      <p className="text-center text-lg mb-10">
        Join Our Digital Marketing Dream Team. Check out the open roles below 👇
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hiringData.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{job.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.summary}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Experience:</strong> {job.experience}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Type:</strong> {job.type}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hiring;
