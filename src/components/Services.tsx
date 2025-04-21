import OurServices from "./OurServices"; // Import the new component
import MeetYakira from "./MeetYakira"; // Import the new component

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OurServices /> {/* Render the OurServices component */}
        <MeetYakira /> {/* Render the MeetYakira component */}
      </div>
    </section>
  );
}
