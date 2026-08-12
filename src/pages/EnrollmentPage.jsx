const courses = [
  [
    "10301211",
    "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
    "Mathematics for Computer Science",
    "A-F(E)",
    3,
    1,
  ],
  [
    "10301223",
    "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์",
    "Structure Relational Database",
    "A-F(E)",
    3,
    1,
  ],
  [
    "10700313",
    "ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม",
    "English for Science and Innovation",
    "A-F(E)",
    3,
    1,
  ],
  [
    "10301225",
    "วิศวกรรมซอฟต์แวร์",
    "Software Engineering",
    "A-F(E)",
    3,
    1,
  ],
  [
    "10301231",
    "เว็บเทคโนโลยี",
    "Web Technology",
    "A-F(E)",
    3,
    1,
  ],
  [
    "10301222",
    "โครงสร้างข้อมูลและอัลกอริทึม",
    "Data Structure and Algorithm",
    "A-F(E)",
    3,
    1,
  ],
];

const history = [
  ["1", "22 มิ.ย. 2569", "10301211", "ลงทะเบียน", "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์", "3", "1"],
  ["1", "22 มิ.ย. 2569", "10301222", "ลงทะเบียน", "โครงสร้างข้อมูลและอัลกอริทึม", "3", "1"],
  ["1", "22 มิ.ย. 2569", "10301223", "ลงทะเบียน", "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์", "3", "1"],
  ["1", "22 มิ.ย. 2569", "10301225", "ลงทะเบียน", "วิศวกรรมซอฟต์แวร์", "3", "1"],
  ["1", "22 มิ.ย. 2569", "10301231", "ลงทะเบียน", "เว็บเทคโนโลยี", "3", "1"],
];

export default function EnrollmentPage() {
  return (
    <>
      {/* หัวข้อหน้า */}
      <section className="page-heading mb-5 rounded-xl bg-linear-to-r from-green-50 to-white p-5">
        <p className="eyebrow mb-1 text-xs font-bold tracking-widest text-green-700">
          ENROLLMENT
        </p>

        <h1 className="text-2xl font-bold text-green-800">
          ผลการลงทะเบียน
        </h1>

        <p className="heading-subtitle mt-2 text-sm text-gray-500">
          ปีการศึกษา 2569 / ภาคเรียนที่ 1
        </p>
      </section>

      {/* สรุปผลการลงทะเบียน */}
      <section
        className="summary-section mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3"
        aria-label="สรุปผลการลงทะเบียน"
      >
        <div className="summary-card rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="block text-sm text-gray-500">
            รายวิชาที่ลงทะเบียน
          </span>

          <strong className="mt-2 block text-2xl font-bold text-green-700">
            {courses.length} รายวิชา
          </strong>
        </div>

        <div className="summary-card rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="block text-sm text-gray-500">
            หน่วยกิตรวม
          </span>

          <strong className="mt-2 block text-2xl font-bold text-green-700">
            18 หน่วยกิต
          </strong>
        </div>

        <div className="summary-card rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="block text-sm text-gray-500">
            สถานะ
          </span>

          <strong className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
            ยืนยันแล้ว
          </strong>
        </div>
      </section>

      {/* รายวิชาที่ลงทะเบียน */}
      <section
        className="data-section mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
        aria-labelledby="courses-title"
      >
        <div className="section-title-row mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2
            id="courses-title"
            className="text-lg font-bold text-green-700"
          >
            รายวิชาที่ลงทะเบียนทั้งหมด
          </h2>

          <span className="section-note text-xs text-gray-500">
            ตัวอย่างข้อมูล
          </span>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden overflow-hidden rounded-lg border border-gray-200 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-3">รหัสวิชา</th>
                <th className="px-4 py-3">ชื่อรายวิชา</th>
                <th className="px-4 py-3">แบบการศึกษา</th>
                <th className="px-4 py-3 text-center">หน่วยกิต</th>
                <th className="px-4 py-3 text-center">กลุ่ม</th>
              </tr>
            </thead>

            <tbody>
              {courses.map(
                ([code, th, en, type, credit, group]) => (
                  <tr
                    key={code}
                    className="border-t border-gray-200 hover:bg-green-50"
                  >
                    <td className="px-4 py-3 font-bold text-green-700">
                      {code}
                    </td>

                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-800">
                        {th}
                      </div>

                      <small className="text-gray-500">
                        {en}
                      </small>
                    </td>

                    <td className="px-4 py-3">
                      {type}
                    </td>

                    <td className="px-4 py-3 text-center">
                      {credit}
                    </td>

                    <td className="px-4 py-3 text-center">
                      {group}
                    </td>
                  </tr>
                )
              )}

              <tr className="border-t-2 border-green-200 bg-green-50 font-bold">
                <td
                  colSpan="3"
                  className="px-4 py-3 text-right"
                >
                  จำนวนหน่วยกิตรวม
                </td>

                <td className="px-4 py-3 text-center text-green-700">
                  18
                </td>

                <td className="px-4 py-3 text-center">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="grid gap-3 md:hidden">
          {courses.map(
            ([code, th, en, type, credit, group]) => (
              <article
                key={code}
                className="course-card rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <strong className="text-green-700">
                    {code}
                  </strong>

                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                    กลุ่ม {group}
                  </span>
                </div>

                <h3 className="mt-3 font-bold leading-relaxed text-gray-800">
                  {th}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {en}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-white px-2 py-1 text-gray-600">
                    {type}
                  </span>

                  <span className="rounded-md bg-white px-2 py-1 text-gray-600">
                    {credit} หน่วยกิต
                  </span>
                </div>
              </article>
            )
          )}

          <div className="flex items-center justify-between rounded-lg bg-green-50 p-4 font-bold">
            <span>จำนวนหน่วยกิตรวม</span>

            <span className="text-green-700">
              18 หน่วยกิต
            </span>
          </div>
        </div>
      </section>

      {/* ประวัติการลงทะเบียน */}
      <section
        className="data-section rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
        aria-labelledby="history-title"
      >
        <div className="section-title-row mb-4">
          <h2
            id="history-title"
            className="text-lg font-bold text-green-700"
          >
            ประวัติการทำรายการลงทะเบียน
          </h2>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden overflow-hidden rounded-lg border border-gray-200 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-3 py-3">ลำดับ</th>
                <th className="px-3 py-3">วันที่ / รหัสวิชา</th>
                <th className="px-3 py-3">รายการ</th>
                <th className="px-3 py-3">ชื่อรายวิชา</th>
                <th className="px-3 py-3 text-center">หน่วยกิต</th>
                <th className="px-3 py-3 text-center">กลุ่ม</th>
              </tr>
            </thead>

            <tbody>
              {history.map((row, index) => (
                <tr
                  key={`${row[2]}-${index}`}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-3 py-3">
                    {row[0]}
                  </td>

                  <td className="px-3 py-3">
                    {row[1]}
                    <br />
                    <strong className="text-green-700">
                      {row[2]}
                    </strong>
                  </td>

                  <td className="px-3 py-3 font-medium text-green-700">
                    {row[3]}
                  </td>

                  <td className="px-3 py-3">
                    {row[4]}
                  </td>

                  <td className="px-3 py-3 text-center">
                    {row[5]}
                  </td>

                  <td className="px-3 py-3 text-center">
                    {row[6]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="grid gap-3 md:hidden">
          {history.map((row, index) => (
            <article
              key={`${row[2]}-${index}`}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-gray-500">
                  รายการที่ {index + 1}
                </span>

                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                  {row[3]}
                </span>
              </div>

              <strong className="mt-3 block text-green-700">
                {row[2]}
              </strong>

              <h3 className="mt-1 font-bold leading-relaxed text-gray-800">
                {row[4]}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                <span className="rounded-md bg-white px-2 py-1">
                  {row[1]}
                </span>

                <span className="rounded-md bg-white px-2 py-1">
                  {row[5]} หน่วยกิต
                </span>

                <span className="rounded-md bg-white px-2 py-1">
                  กลุ่ม {row[6]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}