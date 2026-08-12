import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { to: "/", label: "หน้าหลัก", end: true },
  { to: "/enrollment", label: "ผลการลงทะเบียน" },
  { to: "/timetable", label: "ตารางเรียน / สอบ" },
];

export default function Layout() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-gray-100 text-gray-800">

      {/* Header */}
      <header className="site-header bg-green-800 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          {/* Brand */}
          <div className="brand flex items-center gap-3">
            <div className="brand-mark flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-black text-green-800 shadow-sm">
              MJU
            </div>

            <div>
              <p className="brand-th text-base font-bold sm:text-lg">
                มหาวิทยาลัยแม่โจ้
              </p>

              <p className="brand-en text-xs tracking-wider text-green-100 sm:text-sm">
                MAEJO UNIVERSITY
              </p>
            </div>
          </div>

          {/* ชื่อระบบ */}
          <div className="header-title border-t border-green-700 pt-2 md:border-l md:border-t-0 md:pl-5 md:pt-0">
            <span className="block text-lg font-bold sm:text-xl">
              ระบบบริการการศึกษา
            </span>

            <small className="text-xs text-green-100 sm:text-sm">
              Education Service System
            </small>
          </div>
        </div>
      </header>

      {/* Student information bar */}
      <section className="student-bar border-b border-green-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              รหัสนักศึกษา:{" "}
              <strong className="text-green-700">
                68XXXXXXX
              </strong>
            </span>

            <span>
              นายตัวอย่าง นักศึกษา
            </span>
          </div>

          <span className="language text-xs text-gray-500">
            ภาษาไทย ▾
          </span>
        </div>
      </section>

      {/* Main Layout */}
      <div className="layout-grid mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-5 sm:px-6 md:grid-cols-[220px_minmax(0,1fr)] lg:px-8">

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

            <div className="sidebar-title rounded-t-xl bg-green-700 px-4 py-3 font-bold text-white">
              เมนูหลัก
            </div>

            <nav
              aria-label="เมนูระบบบริการการศึกษา"
              className="side-navigation flex flex-col p-2"
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `side-link rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-green-100 font-bold text-green-800"
                        : "text-gray-600 hover:bg-gray-100 hover:text-green-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content min-w-0">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="site-footer border-t border-gray-200 bg-gray-800 text-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 text-center text-xs sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <div>
            ระบบบริการการศึกษา มหาวิทยาลัยแม่โจ้
          </div>

          <div className="text-gray-400">
            ข้อมูลตัวอย่างสำหรับงาน Web Technology
          </div>
        </div>
      </footer>

    </div>
  );
}