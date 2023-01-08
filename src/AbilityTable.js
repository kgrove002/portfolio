import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const AbilityTable = () => {
  return (
    <table className="table traits">
      <tbody>
        <tr>
          <td>
            <FaRegStar /> Strong Leadership
          </td>
          <td>
            <FaRegStar /> Excellent time management
          </td>
        </tr>
        <tr>
          <td>
            <FaRegStar /> A Driven Individual
          </td>
          <td>
            <FaRegStar /> Eager to Learn More
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AbilityTable;
