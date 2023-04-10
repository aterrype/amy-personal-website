import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function ResumePage() {
  return (
    <Layout>
      <h1>Amy Terry-Penak</h1>

      <h2>Work Experience</h2>
      <h3>Bendyworks: 2019&ndash;2023</h3>
      <h4>Senior Software Developer</h4>
      <div>
        Responsible for implementing technical solutions for clients
      </div>
      <div>
        Bendyworks provides software consulting services for clients
        ranging from new startups to Fortune 500 companies
      </div>
      <div>
        Built new tools for some clients, improved existing software for others
      </div>
      <div>
        Met directly with clients on a regular basis to discuss goals and progress
      </div>

      <h3>Epic Systems: 2014&ndash;2019</h3>
      <h4>Software Developer</h4>
      <div>
        Epic&apos;s software is used by over 300 major healthcare organizations,
        and over half of all US patients have records in Epic
      </div>
      <div>
        Responsible for developing Epic&apos;s electronic medical record software
      </div>
      <div>
        Worked on the 10-person Medications team,
        which owned medication-related features in Epic&apos;s outpatient clinical software
      </div>

      <h2>Education</h2>
      <h3>California Institute of Technology</h3>
      <div>Pasadena, CA</div>
      <div>B.S. in Mathematics, 2014</div>

      <h2>Skills</h2>
      <div>Frontend development: React, Angular, JavaScript and TypeScript, HTML/CSS</div>
      <div>Backend development: Ruby on Rails, NodeJS, Elixir, C#/.NET, Visual Basic</div>
      <div>Mobile development: React Native, Ionic</div>
      <div>Databases: SQL, M</div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Resume" />;
}

export default ResumePage;
