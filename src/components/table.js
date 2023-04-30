import React from "react";
import Button from "./form-elements/button";

const Table = ({ headers, data }) => {
  return (
    <table className="min-w-full divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          {headers.map((header) => {
            return (
              <>
                <th
                  scope="col"
                  className="capitalize px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  {header}
                </th>
              </>
            );
          })}
        </tr>
      </thead>
      <tbody className="capitalize divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {data.map((i) => {
          return (
            <>
              <tr>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <div className="font-medium text-gray-800 dark:text-white ">
                    {i.name}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className="text-gray-700 dark:text-gray-200">
                    {i.date}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className="text-gray-700 dark:text-gray-200">
                    {i.participants}
                  </div>
                </td>

                <td className="px-1 py-4 text-sm whitespace-nowrap w-[90px]">
                  <div className="text-gray-700 dark:text-gray-200">
                    <Button label="Event" onClick={() => {}} />
                  </div>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
