import React from 'react';
import Bridge from '../components/Icons/Bridge';

const About: React.FC = () => {
  return (
    <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <span className="flex max-h-full max-w-full items-center justify-center">
          <Bridge />
        </span>
        <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
      </div>
      <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
        Perfect gallery page
      </h1>
      <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
       Perfect gallery page with Next.js, Tailwind and Cloudinary images
      </p>
      <a
        className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        Contact me
      </a>
    </div>
  );
};

export default About;
