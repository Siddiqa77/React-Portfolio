import React from 'react';

const Contact = () => {
  return (
    <div
      id="Contact"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-90 rounded-lg p-8 md:p-12"
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Contact Us
        </h2>
        <iframe
          width="100%"
          height="350px"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2   bg-slate-950 shadow-xl bg-opacity-45 rounded-lg p-6 md:p-8 flex flex-col md:ml-auto relative z-10 ">
        <h2 className="text-gray-100 text-lg mb-1 font-medium title-font">
          Get In Touch
        </h2>
        <p className="leading-relaxed mb-5 text-gray-100">
          We would love to hear your feedback or answer any questions you may have!
        </p>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className= "lg:w-full text-black font-bold  bg-[#de7c3c] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:text-gray-200 rounded  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          Send Message
        </button>
        <p className="text-xs text-gray-100 mt-3">
          We'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;
