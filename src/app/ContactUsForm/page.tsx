"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';
import f3HeroImg from '../../../public/f3_green_room_sunrise_2024.webp';

export default function ContactUsPage() {
  const [state, handleSubmit] = useForm("mdknepkq");
  const href = '/ContactUsForm';

  if (state.succeeded) {
    return (
      <>
        <Header href={href} />
        <main>
          <section className="bg-gloom py-16 px-4 min-h-[70vh] flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-lg w-full text-center">
              <h2 className="text-4xl mb-4">Thank You!</h2>
                <p className="text-xl text-gray-700">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="CONTACT US"
          subtitle="GET IN TOUCH"
          imgUrl={f3HeroImg.src}
        />
        <section className="bg-gloom py-16 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
            <h2 className="text-4xl mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  placeholder="Your name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  placeholder="Your email address"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  placeholder="Write your message here"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-6 py-3 bg-[rgb(8,8,63)] text-white rounded-md hover:bg-[rgb(16,16,126)] transition-colors duration-200"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}