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
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              สถานะ: โครงสร้างพื้นฐานพร้อมใช้งาน
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
            โครงสร้างพื้นฐานของระบบได้รับการเริ่มต้นและกำหนดค่าเรียบร้อยแล้ว
            พร้อมรองรับการพัฒนาระบบยืนยันตัวตน ฐานข้อมูล และการจัดการข้อมูลทางการเงินในขั้นตอนถัดไป
          </p>
        </section>

        {/* Feature / Principles Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-semibold">
              01
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              การแยกข้อมูลผู้ใช้อย่างปลอดภัย
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              สถาปัตยกรรมระบบได้รับการวางแผนเพื่อความปลอดภัยสูงสุด
              โดยผู้ใช้แต่ละรายจะสามารถเข้าถึงได้เฉพาะข้อมูลทางการเงินของตนเองเท่านั้น
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-semibold">
              02
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              มาตรฐานสกุลเงินบาทไทย (THB)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ใช้สกุลเงินบาทไทยเป็นมาตรฐานหลักในการบันทึกและคำนวณตัวเลขทางการเงิน
              โดยยึดรายการธุรกรรมที่บันทึกจริงเป็นแหล่งข้อมูลอ้างอิงหลัก
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-semibold">
              03
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              โครงสร้างทางเทคนิคที่ผ่านการอนุมัติ
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              พัฒนาด้วย Next.js App Router, TypeScript โหมดเข้มงวด (Strict Mode),
              Tailwind CSS พร้อมชุดทดสอบ Vitest และ Playwright
            </p>
          </div>
        </section>

        {/* Technical Status Box */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            สถานะการตรวจสอบโครงสร้างพื้นฐาน
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
