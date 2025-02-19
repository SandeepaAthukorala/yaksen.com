import React from 'react';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
        {children}
      </div>
    </section>
  );
}
