"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React, { useState } from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";

const SelectGroupOne = ({ title }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className="mb-2">
      <label className="mb-2.5 block text-black dark:text-white">
        {" "}
        {title}{" "}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="USA" className="text-body dark:text-bodydark">
            Clicks
          </option>
          <option value="UK" className="text-body dark:text-bodydark">
            UK
          </option>
          <option value="Canada" className="text-body dark:text-bodydark">
            Canada
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

const CheckboxTwo = ({ title }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabelTwo"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelTwo"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && "border-primary bg-gray dark:bg-transparent"
            }`}
          >
            <span className={`opacity-0 ${isChecked && "!opacity-100"}`}>
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                  fill="#3056D3"
                  stroke="#3056D3"
                  strokeWidth="0.4"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        {title}
      </label>
    </div>
  );
};

const FormLayout = () => {
  return (
    <DefaultLayout>
      <title>New Campaign</title>
      <Breadcrumb pageName="New Campaign" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm ">
            <div className=" px-4 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Headlines
              </h3>
              <h4>Adding 3 headlines or more will help your ad performance.</h4>
            </div>
            <form action="#">
              <div className="p-4">
                <div className="mb-2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Headline 1
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a headline"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Headline 2
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a headline"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Headline 3
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a headline"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
            </form>
            <div className=" px-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Description
              </h3>
              <h4>
                Adding 2 descriptions or more will help your ad performance.
              </h4>
            </div>
            <form action="#">
              <div className="p-4">
                <div className="mb-2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Description 1
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Description 2
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="p-4">
                <CheckboxTwo title="Show a Call button in your ad." />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-4 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Ad Preview
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Bidding</h3>
        </div>
        <form action="#">
          <div className="p-4">
            <SelectGroupOne title="What do you want to focus on?" />
            <div className="py-2">
              <CheckboxTwo title="Set a maximum cost per click bid limit." />
            </div>
            <div className="py-2">
              <div>Or, select a bid strategy directly (not recommended)</div>
            </div>
          </div>
        </form>
      </div>
      <div className="py-4">
        <div className="dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Targeting and Audiences
          </h3>
          <h4>Choose who you want to reach?</h4>
        </div>
      </div>
      <div className="my-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Locations</h3>
        </div>
        <form action="#">
          <div className="p-4">
            <div className="py-2">
              <CheckboxTwo title="All countries and territories" />
            </div>
            <div className="py-2">
              <CheckboxTwo title="India" />
            </div>
            <div className="py-2">
              <CheckboxTwo title="Select another location" />
            </div>
          </div>
        </form>
      </div>
      <div className="my-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Languages</h3>
        </div>
        <form action="#">
          <div className="p-4">
            <div className="py-2">
              <CheckboxTwo title="Englissh" />
            </div>
            <div className="py-2">
              <CheckboxTwo title="Hindu" />
            </div>
            <div className="py-2">
              <CheckboxTwo title="Select another language" />
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
