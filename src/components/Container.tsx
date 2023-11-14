import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <section className="container bg-white dark:bg-slate-600 overflow-x-hidden">
      <div className="pt-16 h-screen flex flex-col justify-start items-center">
        {children}
      </div>
    </section>
  );
}

export default Container;