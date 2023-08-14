var express = require('express');
var router = express.Router();


const itemList = [
    
    {'id': 1, 'terms':'DevOps','description':"DevOps is a collaborative approach that blends cultural principles, practices, and tools to enhance an organization's capacity for rapid application and service delivery. By continuously improving products at a faster rate than traditional methods, DevOps enables organizations to meet customer needs more effectively, fostering competitiveness in the market.",'references':'What is DevOps? - DevOps Models Explained - Amazon Web Services (AWS). (n.d.). Amazon Web Services, Inc. Retrieved July 30, 2023, from https://aws.amazon.com/devops/what-is-devops/'},
    {'id': 2, 'terms':'“Wall of Confusion”','description':'The DevOps Wall of Confusion refers to the divide between development and operations teams in traditional organizations. The development team aims to introduce new features, while the operations team seeks to maintain a stable environment. The clash arises when changes are made by the development team, potentially destabilizing the environment, causing a conflict between pushing changes and maintaining stability. DevOps seeks to break down this wall by fostering collaboration and alignment between these teams to achieve faster and more reliable application delivery.','references':'Kaiser, A. K. (2021, January 13). DevOps Wall of Confusion Explained. Technopedia. http://technopedia.info/devops/devops-wall-of-confusion-explained/'},
    {'id': 3, 'terms':'Agile','description':'The Agile Methodology is an iterative project management and software development approach that emphasizes collaboration, customer feedback, and frequent releases. It enable development teams to adapt to changing market conditions and customer demands by continuously incorporating changes and delivering usable versions of products in smaller batches, providing the flexibility to address customer needs and expectations in real-time.','references':'Atlassian. (n.d.). Agile vs DevOps. Atlassian. Retrieved July 30, 2023, from https://www.atlassian.com/devops/what-is-devops/agile-vs-devops'},
    {'id': 4, 'terms':'Microservices','description':'Microservices are a software development approach where applications are built as small, independent services that communicate through well-defined APIs, managed by self-contained teams. This architecture enables faster development, scalability, and promotes innovation, allowing organizations to bring new features to market more quickly.','references':'What are Microservices? | AWS. (n.d.). Amazon Web Services, Inc. Retrieved July 30, 2023, from https://aws.amazon.com/microservices/'},
    {'id': 5, 'terms':'Waterfall Model','description':'The Waterfall method is a linear and traditional software development model where each phase is completed before moving on to the next one. It follows a sequential approach, starting with requirement gathering, followed by analysis, design, coding, testing, and deployment, with each phase distinct and predefined from the outset.','references':'Agile VS Waterfall vs DevOps vs Lean -Professional-Devops.com. (n.d.). Retrieved July 30, 2023, from https://www.professional-devops.com/waterfall-agile-devops-lean-devops-lean.html'},
    {'id': 6, 'terms':'Cloud','description':'The cloud encompasses remote servers accessible via the Internet, along with the software and databases hosted on those servers. These cloud servers are distributed across global data centers. Cloud computing allows users and organizations to offload the management of physical servers and software applications, providing convenient and scalable access to computing resources over the Internet.','references':'What is the cloud? | Cloud definition. (n.d.). Cloudflare. Retrieved July 30, 2023, from https://www.cloudflare.com/learning/cloud/what-is-the-cloud/'},
    {'id': 7, 'terms':'express','description':'Express is a web application framework for Node.js, offering a wide range of features to develop web and mobile applications. It facilitates the creation of various types of applications, including single-page, multipage, and hybrid web applications. As a layer built on top of Node.js, Express simplifies server management and routing, making it an efficient choice for web application development.','references':'Express JS Tutorial: What is Express in Node JS? (n.d.). Simplilearn.Com. Retrieved July 30, 2023, from https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js'},
    {'id': 8, 'terms':'UX','description':'User Experience (UX) design is the process of crafting products that deliver meaningful and relevant experiences to users. It encompasses various aspects, including branding, design, usability, and functionality, throughout the entire process of acquiring and integrating the product. While usability and User Interface (UI) design are vital components of UX, they represent only subsets of the broader user experience design approach.','references':'What is User Experience (UX) Design? (2023, July 31). The Interaction Design Foundation. https://www.interaction-design.org/literature/topics/ux-design'},
    {'id': 9, 'terms':'Bootstrapping','description':'Using Bootstrap, a widely used HTML, CSS, and JavaScript framework, is referred to as bootstrapping when creating responsive and mobile-friendly websites. It offers design templates for a variety of features, including typography, forms, buttons, navigation, and more, and is freely available for download and use. This speeds up and simplifies the web creation process. Bootstrap is a popular option for simpler and quicker web development since it gives developers the tools to construct responsive designs with the inclusion of JavaScript plug-ins.','references':'Kumar, R. (2022, December 14). What is Bootstrap & How it works? An Overview and Its Use Cases!!! DevOpsSchool.Com. https://www.devopsschool.com/blog/what-is-bootstrap-how-it-works-an-overview-and-its-use-case/'},
    {'id': 10, 'terms':'"Shift Left" testing','description':'Software testing techniques known as "shift-left testing" entail bringing the testing process forwards in the software development lifecycle. Shift-left testing incorporates testing operations directly from the start of the development process, as opposed to waiting until the end of the development cycle. This proactive strategy aids in early issue and defect detection and remediation, lowering the cost and labour of correcting issues later in the development cycle and eventually producing software products of higher quality.','references':'Vaddadi, Srinivas & Thatikonda, Ramya & Padthe, Adithya & Arnepalli, Pandu Rangarao. (2023). Shift-Left Testing Paradigm Process Implementation for Quality of Software Based on Fuzzy. 10.21203/rs.3.rs-2845536/v1'},
    
    //additional 10 terms
    {'id': 11, 'terms':'Dashboard','description':'Dashboards are customizable interactive signboards that provide real-time information. Dashboards are associated with a team or a project and display configurable charts and widgets.','references':'“DevOps Dashboards: Tools, Template, and How to Create One.” https://www.knowledgehut.com/blog/devops/devops-dashboard (accessed Aug. 14, 2023).'},
    {'id': 12, 'terms':'Command Line Interfaces (CLI)','description':'A command-line interface (CLI) is a type of user interface that operates through text input, allowing users to interact with a computer system by entering specific commands using a keyboard. CLIs are used for tasks like running software programs, organizing computer files, and managing system configurations. Users input commands at a designated prompt, and the computer executes these commands to perform the requested tasks. CLIs are also known as console user interfaces, command-line user interfaces, or character user interfaces','references':'P. Loshin and A. Gillis, “What is a command-line interface (CLI)?,” SearchWindowsServer. https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI (accessed Aug. 14, 2023).'},
    {'id': 13, 'terms':'Everything-as-Code','description':'The concept of "everything as code" (EaC) is gaining prominence throughout the entire technology stack. Through the use of software code to represent infrastructure and procedures, this method makes it possible to describe both desired results and the precise actions necessary to reach them. By adopting EaC, numerous components, including infrastructures, workflows, and services, match with recognised programming standards and develop into more complex, methodical, and resilient systems.','references':'E. Batraski, “Moving to an ‘everything as code’ world,” VentureBeat, May 09, 2020. https://venturebeat.com/business/moving-to-an-everything-as-code-world/ (accessed Aug. 14, 2023).'},
    {'id': 14, 'terms':'Infrastructure as Code (IaC)','description':'Infrastructure as Code (IaC) involves creating and managing infrastructure using code, replacing manual setup. This approach utilizes configuration files to define infrastructure requirements, facilitating easy editing, distribution, and consistent provisioning. IaC promotes uniform environments by ensuring repeated deployments adhere to the same specifications, while also enhancing configuration management and reducing the risk of undocumented changes.','references':'“What is Infrastructure as Code (IaC)?” https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac (accessed Aug. 14, 2023).    '},
    {'id': 15, 'terms':'Continuous Integration','description':'Continuous integration is a collaborative approach in software development where team members regularly combine their code changes into a shared location, usually a main branch, using version control. This enables rapid identification of integration issues as every change is promptly built and tested. Unlike continuous delivery, which automates the entire process leading to production, continuous integration specifically emphasizes automating the building and testing of code to ensure its quality and compatibility.','references':'“What is Continuous Integration? – Amazon Web Services,” Amazon Web Services, Inc. https://aws.amazon.com/devops/continuous-integration/ (accessed Aug. 14, 2023).'},
    {'id': 16, 'terms':'Continuous Delivery','description':'Continuous delivery is a development approach that automates the process of getting code changes ready for release. It builds on continuous integration by automatically deploying code changes to testing or production environments after the initial build. This ensures developers consistently have a thoroughly tested and deployable build artifact available for release.','references':'“What is Continuous Delivery? – Amazon Web Services,” Amazon Web Services, Inc. https://aws.amazon.com/devops/continuous-delivery/ (accessed Aug. 14, 2023).'},
    {'id': 17, 'terms':'behaviour-driven design','description':'Behavior Driven Development (BDD) breaks down requirements into a central narrative or feature description and acceptance criteria presented as scenarios. Multiple scenarios can exist under one feature, documented in feature files using a shared vocabulary for improved communication. BDD aligns behaviors (features) with customer business needs, initially specifying failing behaviors that gradually pass as product development progresses, often using domain-specific languages like Gherkin.','references':'Mohsin Irshad, Ricardo Britto, Kai Petersen, Adapting Behavior Driven Development (BDD) for large-scale software systems, Journal of Systems and Software, Volume 177, 2021,110944, ISSN 0164-1212,https://doi.org/10.1016/j.jss.2021.110944.(https://www.sciencedirect.com/science/article/pii/S0164121221000418)'},
    {'id': 18, 'terms':'test-driven design','description':'Test-Driven Development (TDD) is a software development approach where tests are written prior to writing the actual code, emphasizing iterative cycles. TDD involves short development iterations that integrate building and testing. This practice ensures code correctness and indirectly drives design and architecture evolution by continually refining the development process.','references':'“What is Test-Driven Development?” https://testdriven.io/test-driven-development/ (accessed Aug. 14, 2023).'},
    {'id': 19, 'terms':'DevOps Cycle','description':'The DevOps lifecycle encompasses continuous software development, integration, testing, deployment, and monitoring, aiming to harness the full advantages of the DevOps methodology. It fosters agility, scalability, and continuous innovation for building, testing, and evolving software products. Embracing experimentation, feedback, and ongoing learning, DevOps reinvents products and processes. Proper comprehension of each phase is vital for effective DevOps implementation, as developers need to navigate these stages to ensure efficient and rapid results. Failure to grasp these phases can lead to complexity and delays in the development process. Here is a comprehensive breakdown and analysis of each component of the DevOps lifecycle.','references':'R. Mohanan, “What Is DevOps Lifecycle? Definition, Key Components, and Management Best Practices,” Spiceworks. https://www.spiceworks.com/tech/devops/articles/what-is-devops-lifecycle/ (accessed Aug. 14, 2023).'},
    {'id': 20, 'terms':'DevOps Culture','description':'DevOps culture means that the people who create software and those who make sure it runs smoothly work closely together and share responsibility. This helps the company focus better on what customers want. It is like having a team that knows how to build something and also how to take care of it, so they can make sure the customers are happy and the product works well.','references':'T. Hall, “DevOps Culture,” Atlassian. https://www.atlassian.com/devops/what-is-devops/devops-culture (accessed Aug. 14, 2023).'},
];

router.get('/', function(req, res, next) {
    res.render('index', {title: 'SIT722 DevOps Glossary', sub:'Welcome to my website showing a collection of DevOps terms and their brief descriptions.', names:itemList});
});

module.exports = router;
