import SideNav from "../ui/dashboard/sidenav";

export default function LayoutMain(
    { children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen ">
            <div className=" ">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
}