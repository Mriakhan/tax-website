"use client"
import React, { useState } from "react";

interface props {
    tittle: string
}

function DropdownMenu({ tittle }: props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex group'>
                <p className='text-[18px] group-hover:!text-[#ffc00e]'>
                    {tittle}
                </p>
                <div className="relative inline-block  text-left ">
                    <div>
                        <button
                            onClick={toggleMenu}
                        // className="   flex items-center hover:!text-[#36D994] !text-[#FFC00E]"
                        // id="menu-button"
                        // aria-expanded={isOpen}
                        // aria-haspopup="true"
                        >

                            <svg
                                className="-mr-1 h-8 w-7 text-black group-hover:!text-[#ffc00e]"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-36 text-center origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            <div className="py-1 bg-white" role="none">
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    id="menu-item-0"
                                >
                                    German
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    id="menu-item-1"
                                >
                                    French
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    id="menu-item-2"
                                >
                                    Italian
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    id="menu-item-2"
                                >
                                    Latvian
                                </a>
                                <form method="POST" action="#" role="none">
                                    <button
                                        type="submit"
                                        className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                        role="menuitem"
                                        id="menu-item-3"
                                    ></button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>





        </>

    );
}

export default DropdownMenu;
