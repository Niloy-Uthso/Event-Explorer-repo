import React, { useState } from 'react';

const faqs = [
  {
    question: "What is this website about?",
    answer: "This website helps users manage their profiles securely using Firebase authentication and provides event-related features."
  },
  {
    question: "How can I update my profile information?",
    answer: "You can go to the 'My Profile' page after logging in and update your name or profile picture."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use Firebase Authentication and Firestore to ensure your data is securely stored and accessed."
  },
  {
    question: "Can I use this on mobile devices?",
    answer: "Absolutely! Our site is fully responsive and mobile-friendly."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-12 bg-base-100 shadow rounded">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium hover:bg-base-200"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-base text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
