import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="bg-white">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://via.placeholder.com/150" alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="text-lg font-semibold leading-6 text-gray-900">Nav Item 1</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg font-semibold leading-6 text-gray-900">Nav Item 2</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg font-semibold leading-6 text-gray-900">Nav Item 3</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg font-semibold leading-6 text-gray-900">Nav Item 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-500 rounded-2xl sm:w-auto sm:mb-0">
                            Contact Us
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;