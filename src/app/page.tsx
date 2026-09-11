export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Top Navigation / Shell Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold shadow-sm">
              ฿
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">
              ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคล
            </span>
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-300">
              สถานะ: เริ่มต้นโครงสร้างพื้นฐานแล้ว
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 w-full">
        {/* Hero Section */}
        <section className="text-center sm:text-left space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
            Personal Finance Tracker — TASK-0001
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคล
          </h1>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            โครงสร้างพื้นฐานของโครงการได้รับการเริ่มต้นเรียบร้อยแล้ว
            ฟังก์ชันการทำงานของระบบ เช่น การยืนยันตัวตน ฐานข้อมูล และการจัดการข้อมูลทางการเงิน
            จะได้รับการพัฒนาในงานถัดไป
          </p>
        </section>

        {/* Status / Plan Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-semibold">
              01
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              เริ่มต้นโครงสร้างพื้นฐานโครงการ
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              กำหนดค่า Next.js App Router, TypeScript โหมดเข้มงวด (Strict Mode)
              และ Tailwind CSS สำหรับเป็นรากฐานของระบบ
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-semibold">
              02
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              ระบบตรวจสอบและชุดทดสอบ
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              กำหนดค่าเครื่องมือตรวจสอบโค้ด พร้อมการทดสอบเบื้องต้นด้วย Vitest และ Playwright
              เพื่อรองรับการตรวจสอบคุณภาพงานอย่างต่อเนื่อง
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-semibold">
              03
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              การพัฒนาฟังก์ชันในงานถัดไป
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ฟังก์ชันการใช้งานจริง เช่น การเข้าสู่ระบบ ฐานข้อมูล การบันทึกธุรกรรม
              และสรุปผลทางการเงิน จะได้รับการพัฒนาตามลำดับในงานถัดไป
            </p>
          </div>
        </section>

        {/* Technical Status Box */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            สถานะทางเทคนิคของโครงการ
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-sm">
            <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
              <span className="text-xs text-slate-500 block">เฟรมเวิร์ก</span>
              <span className="font-medium text-slate-800">Next.js (App Router)</span>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
              <span className="text-xs text-slate-500 block">ภาษา</span>
              <span className="font-medium text-slate-800">TypeScript (Strict)</span>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
              <span className="text-xs text-slate-500 block">การจัดรูปแบบ</span>
              <span className="font-medium text-slate-800">Tailwind CSS</span>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
              <span className="text-xs text-slate-500 block">ระบบทดสอบ</span>
              <span className="font-medium text-slate-800">Vitest &amp; Playwright</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs text-slate-500">
            ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคล &bull; TASK-0001 โครงสร้างพื้นฐานโครงการ
          </p>
        </div>
      </footer>
    </div>
  );
}
