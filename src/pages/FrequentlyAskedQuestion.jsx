import { useState } from "react";
import { Plus, Minus, CircleQuestionMark } from "lucide-react";

const faqData = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items.",
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order through the tracking link emailed to you.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our customer support is available 24/7 via email and chat.",
  },
  {
    question: "Can I change my shipping address?",
    answer: "Yes, you can update your shipping address before the order is shipped.",
  },
];

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-start mt-10">
      <div className="max-w-2xl w-full">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <CircleQuestionMark />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow-sm"
            >
              <div
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <p className="text-gray-800 font-medium">{faq.question}</p>
                <button className="bg-gray-100 rounded-full p-2 ml-4">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
