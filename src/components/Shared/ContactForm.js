import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <input type="text" {...register('name')} placeholder="Your Name" required />
      <input type="email" {...register('email')} placeholder="Your Email" required />
      <textarea {...register('message')} placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
