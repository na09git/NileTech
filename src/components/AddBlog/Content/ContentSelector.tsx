"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

const ContentSelector = () => {
  const { theme } = useTheme();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Please Select Content for News
      </h3>
      {/* <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
        massa quis lectus.
      </p> */}
      <div>
        {/* <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        /> */}
        <input
          type="button"
          value="Add Content"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          onClick={() => setOpenModal(true)}
        />
        {/* <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
          No spam guaranteed, So please don’t send any spam mail.
        </p> */}
      </div>

      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed left-0 right-0 top-0 z-50 ${openModal ? " " : " hidden "} h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0`}
      >
        <div className="relative ml-32 mt-16 max-h-full w-full max-w-2xl p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <div className="space-y-4 p-4 md:p-5">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div> */}
            <div className="grid-rows-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        fill="#000000"
                        width="64px"
                        height="64px"
                        viewBox="0 0 14 14"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M12.023256 13V1.0000002H9.7209302v4.9709301H4.2790698V1.0000002H1.9767443V13h2.3023255V7.9244187h5.4418604V13h2.3023258"></path>
                        </g>
                      </svg>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path>
                      </svg> */}
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Header</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px]  dark:text-bg-color-dark">
                  Shows Header of the Blog.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: " 1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Pragraph</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  A place to highlight your professional experience - including
                  internships.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: " 1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M0 224.2C0 100.6 100.2 0 224 0h32c95.2 0 174.2 69.3 189.4 160.1c2.2 13 6.7 25.7 15 36.1l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM285.3 208H336c26.5 0 48-21.5 48-48s-21.5-48-48-48c-.9 0-1.8 0-2.7 .1C326.7 93.4 308.9 80 288 80c-8.6 0-16.6 2.2-23.5 6.2C255.9 72.8 241 64 224 64s-31.9 8.8-40.5 22.2c-7-3.9-15-6.2-23.5-6.2c-26.5 0-48 21.5-48 48c-26.5 0-48 21.5-48 48c0 20.9 13.4 38.7 32.1 45.3c0 .9-.1 1.8-.1 2.7c0 26.5 21.5 48 48 48c5.6 0 11-1 16-2.7V288c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3c5 1.8 10.4 2.7 16 2.7c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16zM160 176v2.7l-.1 0c0-.9 .1-1.8 .1-2.7z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Skill</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  List your technical, managerial or soft skills in this
                  section.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Language</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  You speak more than one language? Make sure to list them here.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M160 64c0-35.3 28.7-64 64-64H384V128c0 17.7 14.3 32 32 32H544V448c0 35.3-28.7 64-64 64H253.3c1.8-5.1 2.7-10.5 2.7-16V416c1.3-.5 2.5-1 3.8-1.5c6.8-3 14.3-7.8 20.6-15.5c6.4-7.9 10.1-17.2 11.4-27.1c.5-3.6 .8-5.7 1.1-7.1c1.1-.9 2.8-2.3 5.6-4.5c19.9-15.4 27.1-42.2 17.5-65.5c-1.4-3.3-2.1-5.4-2.6-6.7c.5-1.4 1.2-3.4 2.6-6.7c9.5-23.3 2.4-50.1-17.5-65.5c-2.8-2.2-4.5-3.6-5.6-4.5c-.3-1.4-.6-3.6-1.1-7.1c-3.4-24.9-23-44.6-47.9-47.9c-3.6-.5-5.7-.8-7.1-1.1c-.9-1.1-2.3-2.8-4.5-5.6c-15.4-19.9-42.2-27.1-65.5-17.5c-2.6 1.1-5.1 2.3-6.6 3l-.1 .1V64zm384 64H416V0L544 128zM141.2 161.6L157 168c1.9 .8 4.1 .8 6.1 0l15.8-6.5c10-4.1 21.5-1 28.1 7.5l10.5 13.5c1.3 1.7 3.2 2.7 5.2 3l16.9 2.3c10.7 1.5 19.1 9.9 20.5 20.5l2.3 16.9c.3 2.1 1.4 4 3 5.2l13.5 10.5c8.5 6.6 11.6 18.1 7.5 28.1L280 285c-.8 1.9-.8 4.1 0 6.1l6.5 15.8c4.1 10 1 21.5-7.5 28.1l-13.5 10.5c-1.7 1.3-2.7 3.2-3 5.2l-2.3 16.9c-1.5 10.7-9.9 19.1-20.5 20.6L224 390.2V496c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L160 483.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1V390.2l-15.5-2.1c-10.7-1.5-19.1-9.9-20.5-20.6l-2.3-16.9c-.3-2.1-1.4-4-3-5.2L41.1 334.9c-8.5-6.6-11.6-18.1-7.5-28.1L40 291c.8-1.9 .8-4.1 0-6.1l-6.5-15.8c-4.1-10-1-21.5 7.5-28.1l13.5-10.5c1.7-1.3 2.7-3.2 3-5.2l2.3-16.9c1.5-10.7 9.9-19.1 20.5-20.5l16.9-2.3c2.1-.3 4-1.4 5.2-3l10.5-13.5c6.6-8.5 18.1-11.6 28.1-7.5zM224 288c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Certificate</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  Drivers licenses and other industry-specific certificates you
                  have belong here.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 352c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Interest</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  Do you have interests that align with your career aspiration?
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Project</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  Worked on a particular challenging project in the past?
                  Mention it here.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M0 32C0 14.3 14.3 0 32 0H96c17.7 0 32 14.3 32 32V96H0V32zm0 96H128V384H0V128zM0 416H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V96H160V32zm0 96H288V384H160V128zm0 288H288v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416zm203.6-19.9L320 232.6V142.8l100.4-26.9 66 247.4L363.6 396.1zM412.2 85L320 109.6V11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6L412.2 85zM371.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L371.8 427z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Course</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  Did you complete MOOCs or an evening course? Show them off in
                  this section.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Award</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  Awards like student competitions or industry accolades belong
                  here.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Organization</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  If you volunteer or participate in a good cause, why not state
                  it?
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm0 184c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16zM160 400c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Publication</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  Academic publications or book releases have a dedicated place
                  here.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M288 64c0 13.7-4.3 26.3-11.6 36.7l29.2 62.5c9.8-2.1 20-3.2 30.4-3.2c36.1 0 69 13.3 94.3 35.2L512.4 135c-.2-2.3-.4-4.6-.4-7c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-9.2 0-17.9-1.9-25.8-5.4l-82 60.2c7.6 17.5 11.8 36.9 11.8 57.2c0 15.6-2.5 30.7-7.1 44.8l72 43.2c9.2-5.1 19.8-8 31.1-8c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64l0-1.1-72.1-43.3C413.7 431 376.8 448 336 448c-68.5 0-125.9-47.9-140.4-112H119.4c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64s28.7-64 64-64c23.7 0 44.4 12.9 55.4 32h76.1c7.5-33 26.3-61.6 52.1-81.7l-29.2-62.5C185.7 124.9 160 97.5 160 64c0-35.3 28.7-64 64-64s64 28.7 64 64zm48 288c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Reference</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  If you have former colleagues or bosses that vouch for you,
                  list them.
                </p>
              </div>
              <div className="rounded-medium cursor-pointer bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1 0 0-1-1 0 0-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Declaration</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  You need a declaration with signature?
                </p>
              </div>
              <div className="rounded-medium cursor-pointer border border-dashed border-black bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                <div className="grid grid-cols-[min-content_auto] items-center gap-2 text-black">
                  <div className="w-5">
                    <span
                      style={{
                        display: "flex",
                        height: "1.1em",
                        width: "1.1em",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ height: "1em", width: "auto" }}
                      >
                        <path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="truncate text-lg font-bold">Custom</h4>
                </div>
                <p className="text-textMedium mt-1 text-[15px] dark:text-bg-color-dark">
                  You didn't find what you are looking for? Or you want to
                  combine two sections to save space?
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-2 top-7">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute bottom-24 left-1.5">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
              fill="url(#paint0_linear_1028_601)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_601"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-2 top-[140px]">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
              fill="url(#paint0_linear_1028_602)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_602"
                x1="-0.571054"
                y1="-37.1717"
                x2="28.7937"
                y2="26.7564"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-0 top-0">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                opacity="0.45"
                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                stroke="url(#paint0_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                stroke="url(#paint1_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
                stroke="url(#paint2_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
                stroke="url(#paint3_linear_1028_603)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1028_603"
                x1="291.35"
                y1="12.1032"
                x2="179.211"
                y2="237.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1028_603"
                x1="333.35"
                y1="-12.8968"
                x2="221.211"
                y2="212.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1028_603"
                x1="294.35"
                y1="-3.89678"
                x2="182.211"
                y2="221.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1028_603"
                x1="331.35"
                y1="-36.8968"
                x2="219.211"
                y2="188.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ContentSelector;
