import React from 'react';
import pp from '../assets/image.jpg'
const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Top Section: Image + Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={pp}
            alt="Aman Kursange"
             className="w-full max-w-[280px] rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Intro Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">About Aman Kursange</h1>
          <h2 className="text-lg text-gray-600 mb-4">
            Founder of Metacrafter | Digital Strategist | Creator of Results
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            I wasn’t always the “marketing guy.” In fact, my journey started far from campaign dashboards and brand audits—it began with curiosity. As a college student hustling through backlogs and leadership roles, I found myself pulled towards understanding why some ideas spread like wildfire, and others faded unnoticed. That simple question lit a fire I couldn’t put out.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Rest of the Content */}
      <div className="text-gray-800 space-y-6 leading-relaxed">
        <p>
          I taught myself design, marketing psychology, video editing, and storytelling—piece by piece. No big agency background. No formal degree in it. Just late nights, failed experiments, and a growing hunger to figure out how to turn attention into action.
        </p>

        <p>
          In 2024, I launched Metacrafter, not as an agency, but as a craft-driven company—where every campaign feels personal, every reel has a strategy behind its punchline, and every brand we work with walks away with actual results, not just pretty graphics.
        </p>

        <ul className="list-disc pl-6">
          <li>We’ve helped cafés fill seats, realtors close deals, and creators become brands.</li>
          <li>I’ve built systems—funnels, strategies, and viral content engines—that don’t just “look good,” but convert.</li>
          <li>Our reels, ads, and brand stories have hit explore pages, built credibility, and brought real ROI to businesses that trusted us early.</li>
        </ul>

        <p>
          But here’s the real reason I do this… I’ve seen small business owners with incredible products fail to grow because they didn’t know how to “market.” I’ve also seen mediocre brands skyrocket just because they got attention. That imbalance pisses me off. So I built Metacrafter to fix it.
        </p>

        <p>
          We don’t just make content—we engineer attention, demand, and trust. With psychology-backed strategies, scroll-stopping edits, and campaigns that respect both creativity and conversion.
        </p>

        <p>
          Whether it’s a preschool, a solar startup, a pizzeria, or a legacy builder—we build them a digital presence that sells with soul.
        </p>

        <h3 className="text-xl font-semibold mt-6">This is not just marketing.<br />This is craft. This is Metacrafter.</h3>
      </div>
    </section>
  );
};

export default About;
