import React from 'react';

const Feedback = () => {
    return (
        <div className="bg-base-200 py-10 px-6 rounded-lg shadow-lg max-w-5xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">What Our Community Says</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-700 mb-2">
            “I met some amazing people at the creative meetup last month. It’s so refreshing to connect with like-minded individuals in person.”
          </p>
          <p className="text-sm text-gray-500">— Priya, Designer</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-700 mb-2">
            “The event organization was seamless, and the crowd was super friendly. Definitely attending more in the future!”
          </p>
          <p className="text-sm text-gray-500">— Arjun, Developer</p>
        </div>
      </div>
    </div>
    );
};

export default Feedback;