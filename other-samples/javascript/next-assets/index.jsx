// Social/Email icon imports
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
import StackOverflowLineIcon from 'remixicon-react/StackOverflowLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'
export const copyRightIcon = <CopyrightLineIcon />

export const socialEmailIcons = [
    {
      icon: <MailLineIcon />,
      name: 'Email',
      href: 'mailto:brianwardwell@brianwardwell.com',
    },
    {
      icon: <LinkedinBoxLineIcon />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/briantwardwell/',
  },
  {
    icon: <GithubLineIcon />,
    name: 'GitHub',
    href: 'https://github.com/spartanbyte/',
  },
  {
    icon: <StackOverflowLineIcon />,
    name: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/7168765/jeepers-brian',
  },
]

// Background Images
export const laptopCoffeeAboveImage = '/images/heroimage-laptopcoffee-001.jpg'

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />

// Navigation Icons
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />
export const arrowUpLineIcon = <ArrowUpLineIcon />


/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: '/icons/png/interface/home.png',
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: '/icons/png/interface/skills-list.png',
  },
  {
    id: 'experience',
    name: 'Experience',
    icon:  '/icons/png/interface/experience.png',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: '/icons/png/interface/projects.png',
  },
  {
    id: 'about',
    name: 'About',
    icon: '/icons/png/interface/user.png',
  },
]

/* To use blue/grey theme, use navbarDataBlue */
export const navbarDataBlue = [
  {
    id: 'home',
    name: 'Home',
    icon: '/icons/png/interface/blue/home.png',
  },
    {
    id: 'skills',
    name: 'Skills',
    icon: '/icons/png/interface/blue/skills-list.png',
  },
  {
    id: 'experience',
    name: 'Experience',
    icon:  '/icons/png/interface/blue/experience.png',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: '/icons/png/interface/blue/projects.png',
  },
  {
    id: 'about',
    name: 'About',
    icon: '/icons/png/interface/blue/user.png',
  },
]

export const frontendSkills = [
  {
    id: 'html5',
    name: 'HTML5',
    icon: '/icons/png/technologies/blue/html5.png',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '/icons/png/technologies/blue/css3.png',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon:  '/icons/png/technologies/blue/javascript.png',
  },
  {
    id: 'reactjs',
    name: 'React.js',
    icon: '/icons/png/technologies/blue/react.png',
  },
  {
    id: 'typescript',
    name: 'Typescript',
    icon: '/icons/png/technologies/blue/typescript.png',
  },
    {
    id: 'wordpress',
    name: 'WordPress',
    icon: '/icons/png/technologies/blue/wordpress.png',
  },
]

export const backendSkills = [
  {
    id: 'php',
    name: 'PHP',
    icon: '/icons/png/technologies/blue/php.png',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    icon: '/icons/png/technologies/blue/laravel.png',
  },
  {
    id: 'rubyonrails',
    name: 'Ruby on Rails',
    icon:  '/icons/png/technologies/blue/ruby.png',
  },
  {
    id: 'csharp',
    name: 'C#',
    icon:  '/icons/png/technologies/blue/csharp.png',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon:  '/icons/png/technologies/blue/mysql.png',
  },
    {
    id: 'umbraco',
    name: 'Umbraco',
    icon:  '/icons/png/technologies/blue/umbraco.png',
  },
  {
    id: 'sql',
    name: 'SQL',
    icon:  '/icons/png/technologies/blue/sql.png',
  },
]

export const cloudServicesData = [
    {
        id: 'gitlab',
        name: 'GitLab',
        icon: '/icons/png/technologies/blue/gitlab.png',
    },
    {
        id: 'github',
        name: 'GitHub',
        icon: '/icons/png/technologies/blue/github.png',
    },
    {
        id: 'heroku',
        name: 'Heroku',
        icon:  '/icons/png/technologies/blue/heroku.png',
    },
    {
        id: 'laravelforge',
        name: 'Laravel Forge',
        icon:  '/icons/png/technologies/blue/laravelforge.png',
    },
    {
        id: 'runcloud',
        name: 'Runcloud',
        icon:  '/icons/png/technologies/blue/runcloud.png',
    },
    {
        id: 'awss3',
        name: 'AWS S3',
        icon:  '/icons/png/technologies/blue/aws-s3.png',
    },
    {
        id: 'bitbucketjira',
        name: 'Bitbucket and Jira',
        icon:  '/icons/png/technologies/blue/bitbucket.png',
    },
    {
        id: 'tfs',
        name: 'TFS and VSTS (Team Foundation Server)',
        icon:  '/icons/png/technologies/blue/tfs.png',
    },
]

export const otherSkillsAndToolsData = [
  {
    id: 'otherskills',
    name: 'Other Skills',
    skill_items: [
        { text: 'Agile Scrum' },
        { text: 'CI/CD Deployment' },
        { text: 'Code Reviews and Pull Requests' },
        { text: 'Unit and Feature Testing' },
        { text: 'Responsive and Mobile First Design' },
        { text: 'User Experience and User Interface Design' },
        { text: 'SEO (Search Engine Optimization' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps Skills',
    skill_items: [
        { text: 'CI/CD Deployment and YAML' },
        { text: 'Laravel Herd' },
        { text: 'DNS and SSL Certificates' },
        { text: 'UNIX Command Line, Shell Scripting' },
        { text: 'Docker Desktop' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    skill_items: [
        { text: 'Visual Studio Code' },
        { text: 'Sequel Ace' },
        { text: 'Insomnia and Postman (API integrations' }, 
        { text: 'Adobe Photoshop (interface composites)' },
        { text: 'Figma' },
    ],
  },
]

export const experienceData = [
  {
    id: 'one',
    summary_header: '',
    title: 'Full Stack Web Developer',
    company: 'Promotional Management Center (PMC)',
    location: 'Stacy, Minnesota',
    dates_start_end: '10/2025 - 02/2026',
    description: 'Developed new WordPress sites, new functionality, break/fix support for multiple clients in the WordPress CMS including custom plugins, custom functionality for third party plugins and performing regular maintenance and security checks. Enhanced functionality of two Laravel applications also using Vue.js, Laravel Nova, and Tailwind CSS. Performed DevOps duties for site migrations, database and server setup, DNS configuration and SSL certificates.',
    tools: [
        { text: 'Symfony' },
        { text: 'CakePHP' },
        { text: 'Stimulus.js' },
        { text: 'JavaScript ES6+' },
        { text: 'Sass, Bootstrap' },
        { text: 'Twig' },
        { text: 'Git/Bitbucket for version control' },
        { text: 'Other: database mangement, AWS EC2'},
    ],
  },
  {
    id: 'two',
    summary_header: '',
    title: 'Software Engineer',
    company: 'LuminFire',
    location: 'Minneapolis, Minnesota',
    dates_start_end: '09/2021 - 09/2024',
    description: 'Developed new WordPress sites, new functionality, break/fix support for multiple clients in the WordPress CMS including custom plugins, custom functionality for third party plugins and performing regular maintenance and security checks. Enhanced functionality of two Laravel applications also using Vue.js, Laravel Nova, and Tailwind CSS. Performed DevOps duties for site migrations, database and server setup, DNS configuration and SSL certificates.',
    tools: [
        { text: 'WordPress' },
        { text: 'Advanced Custom Fields Pro' },
        { text: 'Gravity Forms, WPFacet'},
        { text: 'Custom Plugin Development' },
        { text: 'Git for version control and GitLab for task management and documentation'},
        { text: 'jQuery'},
        { text: 'API Integration' },
        { text: 'Laravel' },
        { text: 'Vue.js'},
        { text: 'Controlled Integration/Controlled Development (CI/CD)'},
        { text: 'DevOps: SSL Certification and DNS Management'},
        { text: 'Other: VS Code, Laravel Herd, Livewire, AWS S3, Stripe API payment gateway, regular security maintenance'},
    ],
  },
  {
    id: 'three',
    summary_header: '',
    title: 'Web Developer (Contract)',
    company: 'Experis at Winnebago',
    location: 'Minneapolis, Minnesota',
    dates_start_end: '03/2021 - 09/2021',
    description: 'Leveraged C# and Razor template syntax for new/enhanced backend solutions in DynamicWeb and .NET as well as custom CSS and ES6 JavaScript. Developed configuration sites using React.js and Next.js. Attended regular team meetings, participated in code reviews, IIS environment setup, and occasionally trained users on functionality.',
        tools: [
        { text: 'DynamicWeb (ASP.NET content management system)' },
        { text: 'C# and Razor template syntax' },
        { text: 'JavaScript ES6+' },
        { text: 'React.js and Next.js'},
        { text: 'API Integration' },
        { text: 'MS SQL'},
        { text: 'Git for version control'},
        { text: 'Azure DevOps for code reviews' },
        { text: 'Team Foundation Server (TFS)' },
        { text: 'Other: Windows development environments, Java test suite development, unit testing'}
    ],
  },
  {
    id: 'four',
    summary_header: '',
    title: 'Software Engineer',
    company: 'Codelation',
    location: 'Fargo, North Dakota',
    dates_start_end: '07/2019 - 02/2021',
    description: 'Designed, developed, and enhanced applications in Ruby on Rails, React.js, Bootstrap, and Postgres. Integrated APIs such as Stripe and Pinterest into new MVC applications, implemented Spec and Capybara for testing frameworks, deployed applications to Heroku environments, kept track of issues and code reviews through Jira, and participated in team meetings and code reviews.',
        tools: [
        { text: 'Ruby on Rails' },
        { text: 'ERB (Embedded Ruby) and HAML Ruby template syntax' },
        { text: 'React.js' },
        { text: 'Bootstrap and jQuery' },
        { text: 'API Integration' },
        { text: 'Postgres' },
        { text: 'Git for version control'},
        { text: 'Heroku' },
        { text: 'Jira/Bitbucket for task management and code reviews' },
        { text: 'Figma' },
        { text: 'Controlled Integration/Controlled Development (CI/CD)'},
        { text: 'Other: Capybara/Rspec for unit and feature testing, Mac OS Ruby development environments, Stripe API payment gateway'},
    ],
  },
{
    id: 'five',
    summary_header: '',
    title: 'Software Engineer I',
    company: 'New Vision',
    location: 'Moorhead, Minnesota',
    dates_start_end: '05/2018 - 07/2019',
    description: '',
        tools: [
        { text: 'Thingworx (Internet of Things platform by PTC)' },
        { text: 'Java' },
        { text: 'VSTS (Visual Studio Team Services)' },
        { text: 'Git for version control'},
        { text: 'Vuforia for Augmented Reality development' },
        { text: 'Microsoft Visio for creating program flow and logic documentation' },
        { text: 'Other: Lua scripting language'},
    ],
  },
  {
    id: 'six',
    summary_header: '',
    title: 'Web Developer',
    company: 'Insight Technologies',
    location: 'Fargo, ND',
    dates_start_end: '05/2018 - 07/2019',
    description: '',
        tools: [
        { text: 'Laravel MVC' },
        { text: 'JavaScript' },
        { text: 'Custom CSS' },
        { text: 'Vue.js'},
        { text: 'Git and Github for version control, code reviews' },
        { text: 'Umbraco (CMS content management system)' },
        { text: 'C#, SQL and configuaring SQL Server' },
        { text: 'Transferring Adobe Photoshop comments to code' },
        { text: 'Sitefinity and osCommerce content management system (feature updates only)' },
        { text: 'Other: HTML5 static site development, IIS deployment'},
    ],
  },
  {
    id: 'seven',
    summary_header: '',
    title: 'Web Developer (Contract)',
    company: 'Preference Employment Solutions at Dakota Supply Group',
    location: 'Fargo, ND',
    dates_start_end: '04/2016 - 10/2016',
    description: '',
        tools: [
        { text: 'WordPress' },
        { text: 'Custom Fields, Custom Taxonomies development' },
        { text: 'User Experience and Information Design'},
        { text: 'Git for version control' },
        { text: 'SFTP' },
        { text: 'Bitbucket' },
        { text: 'Other: sole developer on consolidation project'},
    ],
  },
  {
    id: 'eight',
    summary_header: '',
    title: 'Support Engineer (Contract: Yammer, SharePoint Online',
    company: 'VMC Consulting at Microsoft',
    location: 'Fargo, ND',
    dates_start_end: '03/2015 - 03/2016',
    description: '',
        tools: [
        { text: 'Remote Desktop' },
        { text: 'LogMeIn for customer support conferenccing' },
        { text: 'Microsoft SQL Server' },
        { text: 'SSL Certificate configuration' },
        { text: 'Wireshark and Fiddler network logs' },
        { text: 'Client Case Management' },
        { text: 'Customer Service' },
    ],
  },
  {
    id: 'nine',
    summary_header: 'Other Noteworthy Role',
    title: 'Inbound Order Representative',
    company: 'Swanson Health Products',
    location: 'Fargo, ND',
    dates_start_end: '',
    description: '',
        tools: [
        { text: 'Customer Service' },
        { text: 'Data Entry' },
        { text: 'Conflict Management' },
        { text: 'ERP Order Management Software' },
    ],
  },
  {
    id: 'ten',
    summary_header: 'Other Noteworthy Role',
    title: 'Relay Communications Specialist',
    company: 'Communication Services for the Deaf',
    location: 'Moorhead, Minnesota',
    dates_start_end: '',
    description: '',
        tools: [
        { text: 'Customer Service' },
        { text: 'Team Training' },
    ],
  },
]

export const portfolioProjectData = [
    {
    id: 'next_portfolio',
    name: 'Personal Portfolio (2025, built in Next and React)',
    link_text: 'next.brianwardwell.com',
    technologies: 'Next.js, React.js, Tailwind CSS, custom CSS, Framer Motion',
    url: 'https://developer.brianwardwell.com',
    description: 'Portfolio website built in 2025 using Next.js/React.js, Tailwind CSS, Framer Motion. This replaced my previous portfolio that was built in Laravel. I realized later on that Laravel wasn\'t the best tool for a straight forward portfolio and I wanted to transition to a new design.',
    images: [
        { image: '/images/projects/nextjsportfolio-01-min.png', image_description: 'Next.js/React.js Portfolio Home' },
        { image: '/images/projects/nextportfolio-mobile-01-min.png', image_description: 'Next.js/React.js Mobile Home' },
    ],
  },
  {
    id: 'laravel_portfolio',
    name: 'Personal Portfolio (Laravel)',
    link_text: 'portfolio.brianwardwell.com',
    technologies: 'Laravel, Bootstrap, custom CSS, JavaScript, MySQL',
    url: 'https://developer.brianwardwell.com',
    description: 'Portfolio website built in 2017 using Laravel, Bootstrap, custom CSS. It originally had articles on various different technologies but were removed because it bloated the portfolio site and was confusing to the user.',
        images: [
        { image: '/images/projects/laravelportfolio-01-min.png', image_description: 'Laravel Portfolio Homepage' },
        { image: '/images/projects/laravelportfolio-02-min.png', image_description: 'Laravel Portfolio Experience' },
    ],
  },
  {
    id: 'music_pavilion',
    name: 'The Music Pavilion',
    link_text: 'No longer hosted',
    technologies: 'Umbraco, C#, SQL, custom CSS, JavaScript',
    url: '',
    description: 'The Music Pavilion was built in Umbraco (C#/ASP.NET content management system) to replace my previous music blog, Musicbytes that was built in WordPress. I chose Umbraco because I fell in love with it when building a custom marketing site for a client. I am now rebuilding this site in WordPress to keep it on a shared server and save on server costs',
    images: [
        { image: '/images/projects/themusicpavilion-01-min.png', image_description: 'The Music Pavilion Homepage' },
        { image: '/images/projects/themusicpavilion-02-min.png', image_description: 'The Music Pavilion About' },
    ],
  },
  {
    id: 'musicbytes',
    name: 'Musicbytes',
    link_text: 'No longer hosted',
    technologies: 'WordPress, custom CSS, jQuery',
    url: '',
    description: 'I love music and wanted to have a place for a music blog. This originally started as a barebones school project in 2014. I then added a different design, content, and lighthouse for images.',
    images: [
        { image: '/images/projects/musicbytes-01-min.png', image_description: 'Musicbytes Homepage' },
    ],
  },
  {
    id: 'portolio_original',
    name: 'Original Portfolio',
    link_text: 'brianwardwell.net',
    technologies: 'PHP, JavaScript, jQuery, custom CSS, MySQL',
    url: 'https://brianwardwell.net',
    description: 'My first portfolio from 2014 in vanilla PHP, custom CSS, JavaScript, and using MySQL. The site is still hosted on my server and includes a jQuery hide/show list for academics.',
    images: [
        { image: '/images/projects/vanillaphpportfolio-01-min.png', image_description: 'Vanilla PHP Portfolio Homepage' },
        { image: '/images/projects/vanillaphpportfolio-02-min.png', image_description: 'Vanilla PHP Portfolio Academics' },
    ],
  },
  {
    id: 'events_next_api',
    name: 'Events API (Next.js/React.js)',
    link_text: 'In Development',
    technologies: 'Next.js, React.js, API development, custom CSS',
    url: 'https://brianwardwell.net',
    description: 'Work in progress, images coming soon. Personal API project being built in Next.js and React.js with custom API endpoints and CSS.',
  },
]