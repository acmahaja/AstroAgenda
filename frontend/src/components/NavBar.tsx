import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    console.log(process.env.REACT_APP_GITHUB_LINK)

    return (<nav className="sticky max-w-5xl mx-auto h-20 flex items-center justify-between p-6 border-solid border-stone-300 border-b-[1px] bg-[blur-sm] z-4">
        <img 
            src="/logo_transparent.svg" alt="logo"
            className="h-10 w-auto md:hidden"
         />

        <img 
            src="/logo_wide.svg" alt="logo"
            className=" hidden md:block h-10 w-auto"
         />

        <Link to={`${process.env.REACT_APP_GITHUB_LINK}`} className="flex gap-3 text-white min-w-fit bg-neutral-900 px-3 py-3 rounded-lg">
            <img 
                src="/github_logo.svg" alt="logo"
                className="h-6"
            />
            <p className="font-semibold">Star on Github</p>

        </Link>


    </nav>);
}

export default Navbar;