const quickActions = [
  {
    title: "ผลการลงทะเบียน",
    text: "ตรวจสอบรายวิชาที่ลงทะเบียนและประวัติการลงทะเบียน",
    link: "/enrollment",
  },
  {
    title: "ตารางเรียน / ตารางสอบ",
    text: "ดูตารางเรียนและช่วงเวลาสอบของรายวิชา",
    link: "/timetable",
  },
  {
    title: "ข้อมูลนักศึกษา",
    text: "แสดงข้อมูลสถานภาพ คณะ และหลักสูตรแบบข้อมูลตัวอย่าง",
    link: "#",
  },
  {
    title: "ปฏิทินการศึกษา",
    text: "ตรวจสอบช่วงลงทะเบียน เพิ่ม/ลด และวันสอบ",
    link: "#",
  },
];

export default function HomePage() {
  return (
    <>
      {/* หัวข้อหน้า */}
      <section className="page-heading mb-5 flex flex-col gap-4 rounded-xl bg-linear-to-r from-green-50 to-white p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow mb-1 text-xs font-bold tracking-widest text-green-700">
            STUDENT PORTAL
          </p>

          <h1 className="text-2xl font-bold leading-tight text-green-800">
            ยินดีต้อนรับเข้าสู่ระบบบริการการศึกษา
          </h1>

          <p className="heading-subtitle mt-2 text-sm text-gray-500">
            ตรวจสอบข้อมูลการศึกษา ตารางเรียน และผลการลงทะเบียนได้ในที่เดียว
          </p>
        </div>

        <div className="semester-badge self-start rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700 md:self-center">
          ปีการศึกษา 2569 / 1
        </div>
      </section>

      {/* ข้อมูลนักศึกษา */}
      <section
        className="student-profile mb-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        aria-labelledby="profile-title"
      >
        <div className="section-title-row mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2
            id="profile-title"
            className="section-title text-xl font-bold text-green-700"
          >
            ข้อมูลนักศึกษา
          </h2>

          <span className="status-badge rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
            กำลังศึกษา
          </span>
        </div>

        <div className="profile-grid grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-50 p-3">
            <span className="block text-xs text-gray-500">
              รหัสนักศึกษา
            </span>
            <strong className="mt-1 block text-sm text-gray-800">
              68XXXXXXX
            </strong>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <span className="block text-xs text-gray-500">
              ชื่อ - นามสกุล
            </span>
            <strong className="mt-1 block text-sm text-gray-800">
              นายตัวอย่าง นักศึกษา
            </strong>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <span className="block text-xs text-gray-500">
              คณะ
            </span>
            <strong className="mt-1 block text-sm text-gray-800">
              วิทยาศาสตร์
            </strong>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <span className="block text-xs text-gray-500">
              หลักสูตร
            </span>
            <strong className="mt-1 block text-sm text-gray-800">
              วิทยาการคอมพิวเตอร์
            </strong>
          </div>
        </div>
      </section>

      {/* ประกาศสำคัญ */}
      <section
        className="notice-section mb-5 rounded-xl border border-gray-200 bg-white p-5"
        aria-labelledby="notice-title"
      >
        <div className="section-title-row mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2
            id="notice-title"
            className="text-lg font-bold text-green-700"
          >
            ประกาศสำคัญ
          </h2>

          <span className="section-note text-xs text-gray-500">
            อัปเดตล่าสุด
          </span>
        </div>

        <div className="notice-list grid gap-3">
          <article className="notice-item flex gap-3 rounded-lg border-l-4 border-green-600 bg-green-50 p-4">
            <span className="notice-dot flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
              !
            </span>

            <div>
              <h3 className="font-bold text-gray-800">
                ตรวจสอบผลการลงทะเบียน
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                ตรวจสอบรายวิชาและจำนวนหน่วยกิตก่อนเริ่มภาคการศึกษา
              </p>
            </div>
          </article>

          <article className="notice-item flex gap-3 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
            <span className="notice-dot flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              i
            </span>

            <div>
              <h3 className="font-bold text-gray-800">
                ตรวจสอบตารางเรียนและตารางสอบ
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                กรุณาตรวจสอบวัน เวลา และห้องเรียนของแต่ละรายวิชา
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* บริการที่ใช้บ่อย */}
      <section
        className="quick-section"
        aria-labelledby="quick-title"
      >
        <div className="section-title-row mb-4">
          <h2
            id="quick-title"
            className="text-lg font-bold text-green-700"
          >
            บริการที่ใช้บ่อย
          </h2>
        </div>

        <div className="quick-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="quick-card group flex min-w-0 gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
            >
              <span className="quick-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 font-bold text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                →
              </span>

              <div className="min-w-0">
                <h3 className="font-bold text-green-700">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {item.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}