import React from 'react';

export default function WhyGiveBlood() {
  const Thedonationprocess = () => {
    return (
      <>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-6  p-4 border  shadow-lg shadow-cyan-500/100 mb-2">
            <h1 className="text-4xl font-semibold mb-4 ">Why Give Blood</h1>
            <p className="text-lg mb-8 p-3 space-y-1">
              Giving blood saves lives. <br />
              The blood you give is a lifeline in an emergency and for people who need long-term treatments.
              We need new blood donors from all backgrounds to ensure there is the right blood available for patients who need it.
            </p>
            <p className="text-xl font-semibold mb-2 pt-4 ">Benefits of Donating Blood:</p>
            <ul className="list-disc pl-4 mb-8 space-y-1">
              <li>Your blood donation can be a lifeline in emergencies, helping save lives in critical situations.</li>
              <li>Patients undergoing long-term treatments often rely on blood transfusions to manage their conditions.</li>
              <li>Ethnically matched blood is crucial for sickle cell patients who need regular transfusions.</li>
              <li>Encouraging young people to donate ensures a sustainable blood supply for the future.</li>
            </ul>
            <p className="text-xl font-semibold mb-2 pt-4">Why do we need you to give blood?</p>
            <ul className="list-disc pl-4 text-lg mb-8 space-y-1">
              <li>4,300 blood donations every day on average to meet the needs of our hospitals</li>
              <li>Over 140,000 people to donate blood for the first time this year</li>
              <li>12,000 new Black heritage donors, to meet the growing demand for ethnically matched blood for sickle cell patients who need regular transfusions to stay alive</li>
              <li>More young people aged 17-35 to donate, to ensure we have enough blood for the future</li>
            </ul>

          </div>
        </div>

      </>
    );
  };

  return <Thedonationprocess />;
}
