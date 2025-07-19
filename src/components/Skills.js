import { useEffect, useState } from 'react'
import AnimatedWord from './AnimatedWord'
import './Skills.scss'
import {
  SiPython, SiRuby, SiJavascript, SiTypescript, SiNodedotjs,
  SiDjango, SiRubyonrails, SiExpress, SiFastapi, SiFlask,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiAmazondynamodb,
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiBootstrap,
  SiAmazonaws, SiDocker, SiKubernetes, SiTerraform,
  SiGithubactions, SiNginx, SiGit, SiPostman, SiGithub,
  SiGraphql, SiPrisma, SiJest, SiCss3, SiHtml5, SiSass, SiFlutter
} from 'react-icons/si'
import { FaGitAlt, FaDatabase, FaServer, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  const skillCategories = [
    {
      title: "Backend Languages",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Python", icon: <SiPython />, color: "#3776ab" },
        { name: "Ruby", icon: <SiRuby />, color: "#CC342D" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
        { name: "Flask", icon: <SiFlask />, color: "#000000" },
        { name: "Ruby on Rails", icon: <SiRubyonrails />, color: "#CC0000" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
        { name: "DynamoDB", icon: <SiAmazondynamodb />, color: "#FF9900" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="category-icon" />,
      skills: [
        { name: "AWS", icon: <SiAmazonaws />, color: "#FF9900" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
        { name: "Terraform", icon: <SiTerraform />, color: "#623CE4" },
        { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
        { name: "Nginx", icon: <SiNginx />, color: "#009639" }
      ]
    },
    {
      title: "Frontend & UI",
      icon: <SiReact className="category-icon" />,
      skills: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Sass", icon: <SiSass />, color: "#CC6699" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
        { name: "Flutter", icon: <SiFlutter />, color: "#02569B" }
      ]
    },
    {
      title: "Tools & Testing",
      icon: <FaGitAlt className="category-icon" />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
        { name: "Jest", icon: <SiJest />, color: "#C21325" },
        { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" }
      ]
    }
  ]

  return (
    <>
             <div id="skills-page" className="container-fluid min-vh-100">
         <div className="row min-vh-100 align-items-center">
          {/* PAGE TITLE AND DESCRIPTION */}
          <div className="col-12 text-center mb-5">
            <h1 className='display-3 mb-4'>
              <AnimatedWord letterClass={letterClass} strArray={['MY']} />
              &nbsp;
              <AnimatedWord letterClass={letterClass} strArray={['TECHNICAL']} />
              &nbsp;
              <AnimatedWord letterClass={letterClass} strArray={['STACK']} />
            </h1>
            <p className='fs-4 text-muted'>Backend-focused full-stack engineering expertise</p>
          </div>

          {/* SKILLS GRID */}
          <div className="col-12">
            <div className="row g-4">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="col-12 col-md-6 col-lg-4">
                  <div className="skill-category">
                    <div className="category-header">
                      {category.icon}
                      <h3 className="category-title">{category.title}</h3>
                    </div>
                    <div className="skills-grid">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
