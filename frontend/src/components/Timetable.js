import React from "react";
const Timetable = () => {
  return (
    <section className="container text-gray-200">
      <div className="py-8 lg:py-16 text-center">
        <span className="h1">Timetable</span>
      </div>
      <div className="p-2 lg:p-10 text-center text-gray-200 bg-primary rounded-lg shadow-md">
        <h1 className="text-md lg:text-2xl font-semibold mb-4">
          Martial Arts Class Timetable
        </h1>
        <div className="overflow-auto">
          <table className="w-full table-auto border text-sm lg:text-lg">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-2 border">Time</th>
                {Array.from({ length: 7 }, (_, index) => (
                  <th key={index} className="p-2 border">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][index]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["06:00 – 07:30", "Jiu-jitsu", "Karate", "Judo", "Jiu-jitsu", "Muay Thai", "—", "—"],
                ["08:00 – 10:00", "Muay Thai", "Private Tuition", "Private Tuition", "Private Tuition", "Jiu-jitsu", "Private Tuition", "Private Tuition"],
                ["10:30 – 12:00", "Private Tuition", "Private Tuition", "Private Tuition", "Private Tuition", "Private Tuition", "Judo", "Karate"],
                ["13:00 – 14:30", "Open mat/ personal practice", "Open mat/ personal practice", "Open mat/ personal practice", "Open mat/ personal practice", "Open mat/ personal practice", "Karate", "Judo"],
                ["15:00 – 17:00", "Kids Jiu-jitsu", "Kids Judo", "Kids Karate", "Kids Jiu-jitsu", "Kids Judo", "Muay Thai", "Jiu-jitsu"],
                ["17:30 – 19:00", "karate", "Muay Thai", "Judo", "Jiu-jitsu", "Muay Thai", "—", "—"],
                ["17:30 – 19:00", "Jiu-jitsu", "Judo", "Jiu-jitsu", "karate", "Private Tuition", "—", "—"],
              ].map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={`p-2 border ${rowIndex === 0 ? "bg-gray-600" : "hover:bg-gray-800"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Timetable;
