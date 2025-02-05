import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { question: 'How do I apply?', answer: 'You can apply online using our application form.' },
    { question: 'What documents are required?', answer: 'You need transcripts, certificates, and a photo ID.' },
    { question: 'When are the application deadlines?', answer: 'Deadlines vary by program. Check the timeline above.' },
  ];

  return (
    <div className="faqs">
      {questions.map((faq, index) => (
        <div key={index} className="faq-item">
          <h4 onClick={() => setOpenIndex(index === openIndex ? null : index)}>
            {faq.question}
          </h4>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
