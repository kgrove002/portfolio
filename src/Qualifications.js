import React from 'react';
import AbilityTable from './AbilityTable';
import Languages from './Languages';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Qualifications.css';

const Qualifications = () => {
  return (
    <main className="Qualifications">
      <h2>Qualifications</h2>
      <p>
        Below are various qualifications that makes me an excellent addition to
        your team or project.
      </p>

      <AbilityTable />

      <h2>Work Experience </h2>
      <p>
        Currently, I do not have any work experience in software development.
        This section will be updated as work experience is obtained.
      </p>

      <h2>Language Knowledge</h2>
      <Languages />
    </main>
  );
};

export default Qualifications;
