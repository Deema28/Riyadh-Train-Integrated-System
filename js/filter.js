
// بيانات المحطات
const sharedSchedule = [
    { departure: "06:00 صباحًا", arrival: "06:02 صباحًا" },
    { departure: "08:03 صباحًا", arrival: "08:05 صباحًا" },
    { departure: "12:00 مساءً", arrival: "12:02 مساءً" }
  ];
  
const stations = {
  
    "محطة طويق": {
        metroLine: "المسار البرتقالي",
        schedule: sharedSchedule

    },
    "محطة جامعة الملك سعود": {
        metroLine: "المسار الأحمر",
        schedule: sharedSchedule

    },
    "محطة سابك": {
        metroLine: "المسار البنفسجي",
        schedule: sharedSchedule

    },
       " stc محطة ": {
        metroLine: "المسار الازرق",
        schedule: sharedSchedule

    },
   " محطة صاله مطار الملك خالد": {
    metroLine: "المسار الاصفر",
    schedule: sharedSchedule

},
" محطة وزاره التعليم": {
    metroLine: "المسار الاخضر",
    schedule: sharedSchedule

}


};

// وظيفة البحث
function filterStationDetails() {
    const input = document.getElementById("searchInput").value.trim();
    const stationDetails = document.getElementById("stationDetails");
    const stationTableBody = document.getElementById("stationTableBody");

    if (stations[input]) {
        const station = stations[input];
        stationTableBody.innerHTML = ""; // تفريغ الجدول

        station.schedule.forEach(schedule => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = input;

            const lineCell = document.createElement("td");
            lineCell.textContent = station.metroLine;

            const departureCell = document.createElement("td");
            departureCell.textContent = schedule.departure;

            const arrivalCell = document.createElement("td");
            arrivalCell.textContent = schedule.arrival;

            row.appendChild(nameCell);
            row.appendChild(lineCell);
            row.appendChild(departureCell);
            row.appendChild(arrivalCell);

            stationTableBody.appendChild(row);
        });

        stationDetails.classList.remove("hidden");
    } else {
        stationDetails.classList.add("hidden");
    }
}
