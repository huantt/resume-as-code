import {useEffect, useState} from "react";
import {Collapse, IconButton, Navbar, Typography,} from "@material-tailwind/react";
import Link from "next/link";
import {routers} from "@/routers";

export function NavbarDefault(props: {}) {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" color="blue-gray" className="p-1 font-semibold hover:text-green-500">
                <a href={routers.list} className="flex items-center">
                    My Resumes
                </a>
            </Typography>
            <Typography as="li" color="blue-gray" className="p-1 font-semibold hover:text-green-500">
                <Link href={routers.build} className="flex items-center">
                    Create
                </Link>
            </Typography>
            <Typography as="li" color="blue-gray" className="p-1 font-semibold hover:text-green-500">
                <Link href={routers.about} className="flex items-center">
                    About
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto py-0" fullWidth={true}>
            <div className="mx-auto flex items-center text-blue-gray-900">
                <Link href={"/"}>
                    <img className={"h-[60px] py-2"} src={"/logo.png"}/>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </Navbar>
    );
}