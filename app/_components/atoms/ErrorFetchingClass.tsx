import React from "react";

const ErrorFetchingClass = ({ children }: { children: string }) => {
  return (
    <tbody>
      <tr>
        <td className="bg-white py-6 text-center italic opacity-75">
          {children}
        </td>
      </tr>
    </tbody>
  );
};

export default ErrorFetchingClass;
