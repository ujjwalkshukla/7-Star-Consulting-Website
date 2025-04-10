
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageHeader = ({ title, subtitle, children, className = '' }: PageHeaderProps) => {
  return (
    <div className={`py-16 md:py-24 px-4 ${className}`}>
      <div className="container-custom text-center">
        <h1 className="font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
