import Policy from '@/components/pages/auth/Policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '약관동의',
  robots: 'noindex',
};

export default function PolicyPage() {
  return <Policy step={1} title="약관동의" />;
}
