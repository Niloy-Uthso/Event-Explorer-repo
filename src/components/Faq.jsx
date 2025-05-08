import React, { useState } from 'react';

const faqs = [
  {
    question: "What is this platform used for?",
    answer: "Our platform allows users to discover, organize, and participate in a wide range of social events, from local meetups to large community gatherings."
  },
  {
    question: "How can I create or host an event?",
    answer: "After signing in, simply go to the Event detail page, fill in the details like title, date, location, and description, and your event will be listed for others to see and join."
  },
  {
    question: "Do I need an account to attend an event?",
    answer: "Yes, creating a free account helps us ensure secure participation and allows you to RSVP, receive updates, and interact with other attendees."
  },
  {
    question: "Is it possible to edit or cancel an event after publishing?",
    answer: "Absolutely! You can manage your events from the My Events dashboard where you can edit details or cancel if needed."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-12 bg-base-100 shadow rounded">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
