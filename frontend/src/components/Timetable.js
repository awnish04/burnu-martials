import React from "react";

const Timetable = () => {
  return (
    <div>
      <section>
        <div className="container text-gray-200">
          <div className="py-8 lg:py-16 text-center">
            <span className="h1">Timetable</span>
          </div>
          
          <div class="p-2 lg:p-10 text-center text-gray-200 bg-primary rounded-lg shadow-md">
            <h1 class="text-md lg:text-2xl font-semibold mb-4">
              Martial Arts Class Timetable
            </h1>
            <div class="overflow-x-auto overflow-y-auto">
              <table class="w-full table-auto border text-sm lg:text-lg">
                <thead>
                  <tr className="bg-gray-900">
                    <th class="p-2 border">Time</th>
                    <th class="p-2 border">Monday</th>
                    <th class="p-2 border">Tuesday</th>
                    <th class="p-2 border">Wednesday</th>
                    <th class="p-2 border">Thursday</th>
                    <th class="p-2 border">Friday</th>
                    <th class="p-2 border">Saturday</th>
                    <th class="p-2 border">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border bg-gray-600">06:00 – 07:30</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Karate</td>
                    <td class="p-2 hover:bg-gray-800 border">Judo</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Muay Thai</td>
                    <td class="p-2 hover:bg-gray-800 border">—</td>
                    <td class="p-2 hover:bg-gray-800 border">—</td>
                  </tr>

                  <tr>
                    <td class="p-2 border bg-gray-600">08:00 – 10:00</td>
                    <td class="p-2 hover:bg-gray-800 border">Muay Thai</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                  </tr>

                  <tr>
                    <td class="p-2 border bg-gray-600">10:30 – 12:00</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">Judo</td>
                    <td class="p-2 hover:bg-gray-800 border">Karate</td>
                  </tr>

                  <tr>
                    <td class="p-2 border bg-gray-600">13:00 – 14:30</td>
                    <td class="p-2 hover:bg-gray-800 border">Open mat/ personal practice</td>
                    <td class="p-2 hover:bg-gray-800 border">Open mat/ personal practice</td>
                    <td class="p-2 hover:bg-gray-800 border">Open mat/ personal practice</td>
                    <td class="p-2 hover:bg-gray-800 border">Open mat/ personal practice</td>
                    <td class="p-2 hover:bg-gray-800 border">Open mat/ personal practice</td>
                    <td class="p-2 hover:bg-gray-800 border">Karate</td>
                    <td class="p-2 hover:bg-gray-800 border">Judo</td>
                  </tr>

                  <tr>
                    <td class="p-2 border bg-gray-600">15:00 – 17:00</td>
                    <td class="p-2 hover:bg-gray-800 border">Kids Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Kids Judo</td>
                    <td class="p-2 hover:bg-gray-800 border">Kids Karate</td>
                    <td class="p-2 hover:bg-gray-800 border">Kids Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Kids Judo</td>
                    <td class="p-2 hover:bg-gray-800 border">Muay Thai</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                  </tr>

                  <tr>
                    <td class="p-2 border bg-gray-600">17:30 – 19:00</td>
                    <td class="p-2 hover:bg-gray-800 border">karate</td>
                    <td class="p-2 hover:bg-gray-800 border">Muay Thai</td>
                    <td class="p-2 hover:bg-gray-800 border">Judo</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Muay Thai</td>
                    <td class="p-2 hover:bg-gray-800 border">—</td>
                    <td class="p-2 hover:bg-gray-800 border">—</td>
                  </tr>

                  <tr>
                    <td class="p-2 border bg-gray-600">17:30 – 19:00</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">Judo</td>
                    <td class="p-2 hover:bg-gray-800 border">Jiu-jitsu</td>
                    <td class="p-2 hover:bg-gray-800 border">karate</td>
                    <td class="p-2 hover:bg-gray-800 border">Private Tuition</td>
                    <td class="p-2 hover:bg-gray-800 border">—</td>
                    <td class="p-2 hover:bg-gray-800 border">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timetable;
