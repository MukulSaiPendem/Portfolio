import React from 'react';
import './Skills.css';

const skillsData = {
  Languages: [
    { name: 'C/C++', logo: '/logos/c++.png' },
    { name: 'Java', logo: '/logos/java.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'Go', logo: '/logos/go.png' },
    { name: 'JavaScript', logo: '/logos/javascript.png' },
    { name: 'HTML', logo: '/logos/html.png' },
    { name: 'CSS', logo: '/logos/css.png' },
    { name: 'SQL', logo: '/logos/sql.png' },
    // { name: 'GoLang', logo: '/logos/golang.png' },
    { name: 'Shell Script', logo: '/logos/shell.png' },
  ],
  Tools: [
    { name: 'Git/GitHub', logo: '/logos/git.png' },
    { name: 'Docker', logo: '/logos/docker.png' },
    { name: 'Terraform', logo: '/logos/terraform.png' },
    { name: 'Jenkins', logo: '/logos/jenkins.png' },
    { name: 'Packer', logo: '/logos/packer.png' },
    { name: 'Jira', logo: '/logos/jira.png' },
    { name: 'VS Code', logo: '/logos/vscode.png' },
    { name: 'IntelliJ IDEA', logo: '/logos/intellij.png' },
    { name: 'Excel', logo: '/logos/excel.png' },
    { name: 'Linux', logo: '/logos/linux.png' },
    { name: 'Maven', logo: '/logos/maven.png' },
  ],
  Frameworks_OS: [
    { name: 'Node.js', logo: '/logos/node.png' },
    { name: 'SpringBoot', logo: '/logos/spring.png' },
    { name: 'React', logo: '/logos/react.png' },
    { name: 'Angular', logo: '/logos/angular.png' },
    { name: 'Windows', logo: '/logos/windows.png' },
    { name: 'MacOS', logo: '/logos/macos.png' },
  ],
  Cloud_Tech: [
    { name: 'AWS', logo: '/logos/aws.png' },
    { name: 'GCP', logo: '/logos/gcp.png' },
    
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="main-heading">My Skills</h1>
      {Object.keys(skillsData).map((category) => (
        <div key={category} className="skill-category">
          <h2>{category}</h2>
          <div className="skills-grid">
            {skillsData[category].map((skill) => (
              <div key={skill.name} className="skill-item">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
