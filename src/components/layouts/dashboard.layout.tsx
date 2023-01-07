type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-row">
      <aside className="flex basis-1/6 flex-col items-center justify-center">
        <div>Hello</div>
      </aside>
      <main className="w-full">
        {children}
        hi
      </main>
    </div>
  );
};

export default DashboardLayout;
