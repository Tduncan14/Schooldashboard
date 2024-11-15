
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        <div className="h-screen flex">
            {/* left */}
            <div className="left  w-1/6  md:w[8%] lg:w-[16%]  xl:w-[14%]  p-4" >
                <Link className="flex items-center justify-center gap-2 lg:justify-start" href="/" >
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block"> Evanstontownship</span>
                </Link>


                <Menu />
            </div>


            {/* right */}
            <div className="right w-5/6 md:[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-scroll">
                <Navbar />
                {children}

            </div>
        </div>


    );
}
