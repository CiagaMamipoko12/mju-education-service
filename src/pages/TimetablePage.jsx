const schedule = [
  {
    day: "จันทร์",
    time: "09:00 - 12:00",
    code: "10301211",
    name: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
    room: "SCB-402",
    group: "1",
    type: "บรรยาย",
  },
  {
    day: "จันทร์",
    time: "13:00 - 16:00",
    code: "10301222",
    name: "โครงสร้างข้อมูลและอัลกอริทึม",
    room: "COM-304",
    group: "1",
    type: "บรรยาย",
  },
  {
    day: "อังคาร",
    time: "09:00 - 12:00",
    code: "10301223",
    name: "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์",
    room: "COM-405",
    group: "1",
    type: "บรรยาย",
  },
  {
    day: "พุธ",
    time: "13:00 - 16:00",
    code: "10301225",
    name: "วิศวกรรมซอฟต์แวร์",
    room: "COM-304",
    group: "1",
    type: "บรรยาย",
  },
  {
    day: "พฤหัสบดี",
    time: "09:00 - 12:00",
    code: "10301231",
    name: "เว็บเทคโนโลยี",
    room: "COM-LAB2",
    group: "1",
    type: "ปฏิบัติการ",
  },
  {
    day: "ศุกร์",
    time: "09:00 - 12:00",
    code: "10700313",
    name: "ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม",
    room: "LA-201",
    group: "1",
    type: "บรรยาย",
  },
];

const exams = [
  {
    date: "10 ต.ค. 2569",
    day: "เสาร์",
    time: "09:00 - 12:00",
    code: "10301211",
    name: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
    room: "ศูนย์สอบ 1",
  },
  {
    date: "12 ต.ค. 2569",
    day: "จันทร์",
    time: "13:00 - 16:00",
    code: "10301222",
    name: "โครงสร้างข้อมูลและอัลกอริทึม",
    room: "ศูนย์สอบ 2",
  },
  {
    date: "14 ต.ค. 2569",
    day: "พุธ",
    time: "09:00 - 12:00",
    code: "10301223",
    name: "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์",
    room: "ศูนย์สอบ 1",
  },
  {
    date: "16 ต.ค. 2569",
    day: "ศุกร์",
    time: "13:00 - 16:00",
    code: "10301225",
    name: "วิศวกรรมซอฟต์แวร์",
    room: "ศูนย์สอบ 3",
  },
];

export default function TimetablePage() {
  return (
    <>
      {/* หัวข้อหน้า */}
      <section className="page-heading mb-5 rounded-xl bg-linear-to-r from-green-50 to-white p-5">
        <p className="eyebrow mb-1 text-xs font-bold tracking-widest text-green-700">
          TIMETABLE
        </p>

        <h1 className="text-2xl font-bold text-green-800">
          ตารางเรียน / ตารางสอบ
        </h1>

        <p className="heading-subtitle mt-2 text-sm text-gray-500">
          ปีการศึกษา 2569 / ภาคเรียนที่ 1
        </p>
      </section>

      {/* ข้อมูลภาคการศึกษา */}
      <section
        className="semester-info mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3"
        aria-label="ข้อมูลภาคการศึกษา"
      >
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <span className="block text-xs text-gray-500">
            ปีการศึกษา
          </span>

          <strong className="mt-1 block text-lg text-green-700">
            2569
          </strong>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <span className="block text-xs text-gray-500">
            ภาคเรียน
          </span>

          <strong className="mt-1 block text-lg text-green-700">
            ภาคเรียนที่ 1
          </strong>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <span className="block text-xs text-gray-500">
            จำนวนรายวิชา
          </span>

          <strong className="mt-1 block text-lg text-green-700">
            {schedule.length} รายวิชา
          </strong>
        </div>
      </section>

      {/* ตารางเรียน */}
      <section
        className="schedule-section mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
        aria-labelledby="schedule-title"
      >
        <div className="section-title-row mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2
            id="schedule-title"
            className="text-lg font-bold text-green-700"
          >
            ตารางเรียน
          </h2>

          <span className="text-xs text-gray-500">
            ตัวอย่างข้อมูล
          </span>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden overflow-hidden rounded-lg border border-gray-200 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-3">วัน</th>
                <th className="px-4 py-3">เวลา</th>
                <th className="px-4 py-3">รหัสวิชา</th>
                <th className="px-4 py-3">รายวิชา</th>
                <th className="px-4 py-3">ห้อง</th>
                <th className="px-4 py-3 text-center">กลุ่ม</th>
              </tr>
            </thead>

            <tbody>
              {schedule.map((item) => (
                <tr
                  key={`${item.day}-${item.code}`}
                  className="border-t border-gray-200 hover:bg-green-50"
                >
                  <td className="px-4 py-3 font-bold text-gray-800">
                    {item.day}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap">
                    {item.time}
                  </td>

                  <td className="px-4 py-3 font-bold text-green-700">
                    {item.code}
                  </td>

                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-800">
                      {item.name}
                    </div>

                    <span className="text-xs text-gray-500">
                      {item.type}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    {item.room}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {item.group}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="grid gap-3 md:hidden">
          {schedule.map((item) => (
            <article
              key={`${item.day}-${item.code}`}
              className="schedule-card rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  {item.day}
                </span>

                <span className="text-sm font-bold text-gray-700">
                  {item.time}
                </span>
              </div>

              <div className="mt-3">
                <strong className="text-sm text-green-700">
                  {item.code}
                </strong>

                <h3 className="mt-1 font-bold leading-relaxed text-gray-800">
                  {item.name}
                </h3>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                <span className="rounded-md bg-white px-2 py-1">
                  ห้อง {item.room}
                </span>

                <span className="rounded-md bg-white px-2 py-1">
                  กลุ่ม {item.group}
                </span>

                <span className="rounded-md bg-white px-2 py-1">
                  {item.type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ตารางสอบ */}
      <section
        className="exam-section rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
        aria-labelledby="exam-title"
      >
        <div className="section-title-row mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2
            id="exam-title"
            className="text-lg font-bold text-green-700"
          >
            ตารางสอบ
          </h2>

          <span className="text-xs text-gray-500">
            ตัวอย่างข้อมูล
          </span>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden overflow-hidden rounded-lg border border-gray-200 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3">วันที่</th>
                <th className="px-4 py-3">เวลา</th>
                <th className="px-4 py-3">รหัสวิชา</th>
                <th className="px-4 py-3">รายวิชา</th>
                <th className="px-4 py-3">ห้องสอบ</th>
              </tr>
            </thead>

            <tbody>
              {exams.map((exam) => (
                <tr
                  key={exam.code}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    <strong>{exam.date}</strong>
                    <br />
                    <span className="text-xs text-gray-500">
                      {exam.day}
                    </span>
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap">
                    {exam.time}
                  </td>

                  <td className="px-4 py-3 font-bold text-green-700">
                    {exam.code}
                  </td>

                  <td className="px-4 py-3">
                    {exam.name}
                  </td>

                  <td className="px-4 py-3">
                    {exam.room}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="grid gap-3 md:hidden">
          {exams.map((exam) => (
            <article
              key={exam.code}
              className="exam-card rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <strong className="text-sm text-gray-800">
                    {exam.date}
                  </strong>

                  <span className="ml-2 text-xs text-gray-500">
                    {exam.day}
                  </span>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  {exam.time}
                </span>
              </div>

              <strong className="mt-3 block text-green-700">
                {exam.code}
              </strong>

              <h3 className="mt-1 font-bold leading-relaxed text-gray-800">
                {exam.name}
              </h3>

              <div className="mt-3">
                <span className="rounded-md bg-white px-2 py-1 text-xs text-gray-600">
                  ห้องสอบ {exam.room}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}