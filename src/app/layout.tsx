import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคล | Personal Finance Tracker',
  description: 'ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคลที่ปลอดภัย เรียบง่าย และใช้งานได้ทุกอุปกรณ์',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
