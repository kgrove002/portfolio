import data from './Data';
import React from 'react';

const Languages = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Language</th>
          <th>Knowledge Level</th>
          <th>Example of Work</th>
        </tr>
      </thead>
      <tbody>
        {data.map(data => {
          return (
            <tr>
              <td>{data.language}</td>
              <td
                className="stars"
                style={
                  data.rating > 3
                    ? { color: 'green' }
                    : data.rating < 3
                    ? { color: 'red' }
                    : { color: 'yellow' }
                }
              >
                {data.stars}
              </td>
              <td>
                {data.link === null ? (
                  'No Projects Available'
                ) : (
                  <a href={data.link} target="_blank" rel="noreferrer">
                    Link
                  </a>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Languages;
