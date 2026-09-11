import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

export default function RemovedArtifactLayout({
  children,
}: {
  children: ReactNode;
}) {
  void children;
  notFound();
}
