type DashboardLayoutProps = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex flex-row w-full h-full">
            <aside className="basis-1/6 flex flex-col justify-center">
                <div>Hello</div>
            </aside>
            <main>
                {children}
                hi
            </main>
        </div>
    )
}

export default DashboardLayout;