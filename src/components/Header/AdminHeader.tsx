"use client";
import ThemeToggler from "./ThemeToggler";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="">
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          {/* <a href="https://flowbite.com" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                  </span>
                </a> */}
          <div className="flex items-center lg:order-2">
            <ThemeToggler />
            {/* <button
                    data-tooltip-target="tooltip-dark"
                    type="button"
                    className="mr-1 inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  </button> */}
            {/* <div
                    id="tooltip-dark"
                    role="tooltip"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    Toggle dark mode
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    data-tooltip-target="tooltip-statistics"
                    type="button"
                    className="hidden items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:inline-flex"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </button> */}
            {/* <div
                    id="tooltip-statistics"
                    role="tooltip"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    View analytics
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div> */}
            <button
              type="button"
              className="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
            <div
              className="absolute top-20 z-50 my-4 hidden  w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
              id="dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Neil sims
                </span>
                <span className="block truncate text-sm font-light text-gray-500 dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    My profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Account settings
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="mr-2 h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                    My likes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="mr-2 h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>{" "}
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <span className="flex items-center">
                      <svg
                        className="text-primary-600 dark:text-primary-500 mr-2 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        ></path>
                      </svg>{" "}
                      Pro version
                    </span>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() =>
                      signOut({ callbackUrl: process.env.BASE_URL })
                    }
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="text-primary-600 dark:text-primary-500 ml-1 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:ml-3 lg:px-5 lg:py-2.5"
            >
              Log out
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a
                  href="#"
                  className="text-primary-600 lg:hover:text-primary-700 dark:text-primary-500 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";
// import menuData from "./adminMenuData";
// // import userProfile from "./user-profile.png"
// import { signOut } from "next-auth/react";

// const Header = () => {
//   // Navbar toggle
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const navbarToggleHandler = () => {
//     setNavbarOpen(!navbarOpen);
//   };

//   // Sticky Navbar
//   const [sticky, setSticky] = useState(true);
//   const handleStickyNavbar = () => {
//     // if (window.scrollY >= 80) {
//     //   setSticky(true);
//     // } else {
//     //   setSticky(false);
//     // }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//   });

//   // submenu handler
//   const [openIndex, setOpenIndex] = useState(-1);
//   const handleSubmenu = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(-1);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   const usePathName = usePathname();

//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <>
//       <header
//         className={`header left-0 top-0 z-40 flex w-full items-center ${
//           sticky
//             ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
//             : "absolute bg-transparent"
//         }`}
//       >
//         <div className="container">
//           <div className="relative -mx-4 flex items-center justify-between">
//             <div className="w-60 max-w-full px-4 xl:mr-12">
//               <Link
//                 href="/"
//                 className={`header-logo block w-full ${
//                   sticky ? "py-5 lg:py-2" : "py-8"
//                 } `}
//               >
//                 <Image
//                   src="/images/logo/logo.png"
//                   alt="logo"
//                   width={140}
//                   height={30}
//                   className="w-full dark:hidden"
//                 />
//                 <Image
//                   src="/images/logo/logo.png"
//                   alt="logo"
//                   width={140}
//                   height={30}
//                   className="hidden w-full dark:block"
//                 />
//               </Link>
//             </div>
//             <div className="flex w-full items-center justify-between px-4">
//               <div>
//                 {/* <button
//                   onClick={navbarToggleHandler}
//                   id="navbarToggler"
//                   aria-label="Mobile Menu"
//                   className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
//                 >
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? " top-[7px] rotate-45" : " "
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? "opacity-0 " : " "
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? " top-[-8px] -rotate-45" : " "
//                     }`}
//                   />
//                 </button> */}
//                 <button
//                   type="button"
//                   // className="bg-topbar text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 inline-block rounded-full p-0 transition-all duration-200 ease-linear"
//                   className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
//                   id="dropdownMenuButton"
//                   onClick={toggleDropdown}
//                   data-bs-toggle="dropdown"
//                 >
//                   <div className="rounded-full bg-pink-100">
//                     <img
//                       src={"/images/user/user-profile.png"}
//                       alt="user image"
//                       className="h-[37.5px] w-[37.5px] rounded-full"
//                     />
//                   </div>
//                 </button>
//                 <nav
//                   id="navbarCollapse"
//                   className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
//                     navbarOpen
//                       ? "visibility top-full opacity-100"
//                       : "invisible top-[120%] opacity-0"
//                   }`}
//                 >
//                   <ul className="block lg:flex lg:space-x-12">
//                     {menuData.map((menuItem, index) => (
//                       <li key={index} className="group relative">
//                         {menuItem.path ? (
//                           <Link
//                             href={menuItem.path}
//                             className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
//                               usePathName === menuItem.path
//                                 ? "text-primary dark:text-white"
//                                 : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
//                             }`}
//                           >
//                             {menuItem.title}
//                           </Link>
//                         ) : menuItem.submenu ? (
//                           <>
//                             <p
//                               onClick={() => handleSubmenu(index)}
//                               className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
//                             >
//                               {menuItem.title}
//                               <span className="pl-3">
//                                 <svg width="25" height="24" viewBox="0 0 25 24">
//                                   <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
//                                     fill="currentColor"
//                                   />
//                                 </svg>
//                               </span>
//                             </p>
//                             <div
//                               className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
//                                 openIndex === index ? "block" : "hidden"
//                               }`}
//                             >
//                               {menuItem.submenu.map((submenuItem, index) => (
//                                 <Link
//                                   href={submenuItem.path}
//                                   key={index}
//                                   className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
//                                 >
//                                   {submenuItem.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           </>
//                         ) : (
//                           <></>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//               <div className="flex items-center justify-end pr-16 lg:pr-0">
//                 <button
//                   type="button"
//                   // className="bg-topbar text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 inline-block hidden rounded-full p-0 transition-all duration-200 ease-linear"
//                   className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
//                   id="dropdownMenuButton"
//                   onClick={toggleDropdown}
//                   data-bs-toggle="dropdown"
//                 >
//                   <div className="rounded-full bg-pink-100">
//                     <img
//                       src={"/images/user/user-profile.png"}
//                       alt=""
//                       className="h-[37.5px] w-[37.5px] rounded-full"
//                     />
//                   </div>
//                 </button>

//                 <div
//                   className={`dropdown-menu absolute !top-4 z-50 mt-14 min-w-[14rem] rounded-md bg-white p-4 shadow-md dark:bg-dark   ltr:text-left rtl:text-right ${isDropdownVisible ? "" : "hidden"}`}
//                   aria-labelledby="dropdownMenuButton"
//                 >
//                   <h6 className="mb-2 text-sm font-normal text-slate-500 dark:text-white/70">
//                     Welcome to Kowser Islamic College
//                   </h6>
//                   <a href="#!" className="mb-3 flex gap-3">
//                     <div className="relative inline-block shrink-0">
//                       <div className="dark:bg-zink-500 rounded bg-slate-100">
//                         {/* <img
//                                     src={<userProfile/>}
//                                     alt=""
//                                     className="h-12 w-12 rounded"
//                                   /> */}
//                         <img
//                           src={"/images/user/user-profile.png"}
//                           alt=""
//                           className="h-12 w-12 rounded"
//                         />
//                       </div>
//                       <span className="dark:border-zink-600 absolute -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400 ltr:-right-1 rtl:-left-1"></span>
//                     </div>
//                     <div>
//                       <h6 className="text-15 mb-1">{}</h6>
//                       <p className="dark:text-zink-300 text-slate-500"></p>
//                     </div>
//                   </a>
//                   <ul>
//                     <li>
//                       <a
//                         className="dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500 block py-1.5 text-base font-medium text-slate-600 transition-all duration-200 ease-linear ltr:pr-4 rtl:pl-4"
//                         href={"/client-profile"}
//                       >
//                         {/* <User2 className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"></User2>{" "} */}
//                         Profile
//                       </a>
//                     </li>
//                     {/* <li>
//                                 <a
//                                   className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500"
//                                   href={"/apps-mailbox"}
//                                 >
//                                   <Mail className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"></Mail>{" "}
//                                   Inbox{" "}
//                                   <span className="inline-flex items-center justify-center w-5 h-5 ltr:ml-2 rtl:mr-2 text-[11px] font-medium border rounded-full text-white bg-red-500 border-red-500">
//                                     15
//                                   </span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a
//                                   className="block ltr:pr-4 rtl:pl-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500"
//                                   href={"/apps-chat"}
//                                 >
//                                   <MessagesSquare className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"></MessagesSquare>{" "}
//                                   Chat
//                                 </a>
//                               </li> */}
//                     <li>
//                       <a
//                         className="dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500 block py-1.5 text-base font-medium text-slate-600 transition-all duration-200 ease-linear ltr:pr-4 rtl:pl-4"
//                         href={"/hst-help-portal"}
//                       >
//                         {/* <HelpCircle className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"></HelpCircle>{" "} */}
//                         Help
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500 block py-1.5 text-base font-medium text-slate-600 transition-all duration-200 ease-linear ltr:pr-4 rtl:pl-4"
//                         href={process.env.PUBLIC_URL + "/pages-pricing"}
//                       >
//                         {/* <Gem className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"></Gem>{" "} */}
//                         Upgrade{" "}
//                         <span className="inline-flex h-5 w-auto items-center justify-center rounded border border-sky-500 bg-sky-500 px-1 text-[12px] font-medium text-white ltr:ml-2 rtl:mr-2">
//                           Pro
//                         </span>
//                       </a>
//                     </li>
//                     <li className="dark:border-zink-500 mt-2 border-t border-slate-200 pt-2">
//                       <a
//                         className="dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500 block cursor-pointer py-1.5 text-base font-medium text-slate-600 transition-all duration-200 ease-linear ltr:pr-4 rtl:pl-4"
//                         // href={"/logout"}
//                         onClick={() =>
//                           signOut({ callbackUrl: process.env.BASE_URL })
//                         }
//                       >
//                         {/* <LogOut className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"></LogOut>{" "} */}
//                         Sign Out
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 {/* <Link
//                   href="/signin"
//                   className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
//                 >
//                   Sign Up
//                 </Link> */}
//                 <div>
//                   <ThemeToggler />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
