import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Landing Page', () => {
  it('renders Thai heading correctly', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคล');
  });

  it('displays foundation status badge', () => {
    render(<Home />);
    expect(screen.getByText(/เริ่มต้นโครงสร้างพื้นฐานแล้ว/)).toBeInTheDocument();
  });
});
