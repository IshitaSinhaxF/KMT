# KMP - Knowledge Management Portal


xFusion’s approach to the Pre-Qualified Vendor Pool for Agile Development – Digital Services (PQVP DS-AD) effort uses Agile Scrum methodology, User-Centric design techniques, Microservices API based Service Oriented Architecture (SOA), API Gateway, DevOps automation using Container technologies and Continuous Integration and Continuous Delivery (CI/CD) tools, modern Open-Source technologies, and Open Standards to plan, design, develop, test, build and deploy the Working Prototype – Knowledge Management Portal (KMP).The KMP allows State Agencies/Departments to capture, archive, and manage organizational knowledge from its employees and programs.


The Readme file provides a brief account of our approach to the project and the processes that we have followed to build the Working Prototype that meets the RFI requirements using modern, open source technologies.

In addition, we have documented our approach, process, tools and technologies in detail in our [Wiki pages](https://github.com/xFusionTech/KMT/wiki) in the GitHub repository.

The diagram below represents the User Roles, Permissions, Business Process Workflow and the key User Stories implemented in the Working Prototype.

<p align="center">
  <img width="900" height="450" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/Business%20Process%20Workflow.png">
</p>

Below are the key URLs for the working Prototype:

| **Application**  | **URL** | **Login Credentials**
| :------------- | :------------- | :--------------------
| **Working Prototype – Knowledge Management Portal** <br> [(User Manual)](https://github.com/xFusionTech/KMT/blob/master/KMP%20User%20Manual.pdf) | http://ec2-18-144-75-92.us-west-1.compute.amazonaws.com:8088  | <font color="#1589F0"> **Role - Article Viewer** <br> **Permissions: ** *Search and view articles*</font> <br><br> User ID: viewer John <br> Password: Password1 <br><br> **Role - Article Author** <br> **Permissions:** *Article Viewer permissions + Create new article, update draft articles* <br><br> User ID: author Kim <br> Password: Password1 <br><br> **Role - Article Approver/Publisher** <br> **Permissions:** *Article Author permissions + Approve/Publish Articles* <br><br> User ID: approver Ben  <br> Password: Password1 
| **GitHub – Source Code Repository** | https://github.com/xFusionTech/KMT | No credential required
| **Working Prototype Wiki** | https://github.com/xFusionTech/KMT/wiki | No credential required
| **DockerHub – Docker Image Repository** | https://hub.docker.com/| User ID: xfusiontech <br> Password: kmtadmin2018# 
| **Jenkins – CI/CD Server** | http://ec2-13-57-242-90.us-west-1.compute.amazonaws.com:8080/login?from=%2F | User ID: admin <br> Password: admin


All business and administrative email notifications are sent to the email id, kmtadmin@xfusiontech.com  : 

The email box can be accessed through the following URL:

**Email URL**: https://apps.rackspace.com/a/index.php?version=full <br>
**Email id**: kmtadmin@xfusiontech.com <br>
**Password**: kmtadmin2018# 


# Our Approach

## Sprint Zero - Planning Effort:
Upon the release of the RFI Pre-Qualified Vendor Pool for Agile Development, our CEO, Sanjib Nayak quickly reviewed the requirements and the scope for the Pre-Qualified Vendor Pool for Agile Development – Digital Services (PQVP DS-AD) RFI. He took the initiative to assemble a [multidisciplinary team](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Roles%20and%20Responsibilities.pdf) of highly experienced Information Technology (IT) professionals, with relevant experience of working in agile software development projects, to collaborate and work on creating the prototype. Our team members have worked in previous projects together; that allowed us to conform quickly as a team and assign work based on each team member’s strengths. The team then designated our CEO, Sanjib Nayak as the Product Manager who was responsible for leading the team and being accountable for the quality of prototype being submitted.

As a next step in our planning process, the team reviewed the guidelines for the Working Prototype, designed the [Business Process Workflow](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/Knowledge%20Article%20Lifecycle.jpg) and identified the [User Roles and User Stories](https://github.com/xFusionTech/KMT/wiki/User-Roles-and-User-Stories). Keeping the short project completion time frame in mind, the team identified the critical user stories for the Working Prototype that can be enhanced in subsequent iterations. The team created the [Statement of Work](https://github.com/xFusionTech/KMT/wiki/Statement-of-Work) for the Working Prototype.

Since we had a smaller time-frame to carry out the project, we decided to go ahead with five sprints to complete the project. The team adopted a Scrum-based development approach and established the [roadmap](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Product%20Roadmap.pdf) required to create the Minimal Viable Product (MVP) for the Working Prototype. The team conducted a release planning session where they prioritised the backlogs and created a high-level scope for the five sprints. We established our Agile Project Management and team collaboration environments using a SaaS tool, [JIRA](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/JIRA%20Snapshots.pdf). the team also established the source code repository on [GitHub](https://github.com/xFusionTech/KMT/) . 

During this planning phase, we started [whiteboarding and drafting](https://github.com/xFusionTech/KMT/wiki/Whiteboard-and-Drafts) the roles, process flows and solution architecture models. The team defined the solution architecture for the Working Prototype and identified Open- Source and Open-Standards based technology stack. This Planning effort was completed within three days of receipt of the RFI(Sprint Zero) and development effort began immediately. 

Our execution process was extremely disciplined, complete with formal demos and retrospectives with each sprint, and a complete story board designed with the help of [Trello Boards](https://trello.com/xfusiontech) overlaying our JIRA Issues and Stories. We conducted daily, in person, scrum meetings to discuss the progress that was made since the previous scrum meeting , goals to accomplish before the next scrum meeting , and any impediments that were preventing team members from performing their work.

The result of our efforts is a collaboratively designed and built Working Prototype that meets the RFI requirements using modern, open source technologies within a smaller time frame.


## Agile Process:

We used the following Scrum events during the implementation of the Working Prototype:

**Release Planning** - Our team created the backlogs(user stories and tasks) in our JIRA environment and a high-level prioritisation of the backlogs was performed during the planning phase. As part of the release planning, our team worked collaboratively to establish the release plan that includes high-level scoping for each of remaining four sprints.

**Backlog Grooming** – The backlogs were elaborated before the beginning of each sprint by the team. The team reported the [backlogs](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Team%20Communication/Sprint%204%20Backlog.png) from the previous sprint and the Product Manager prioritized those backlog items to be completed in order in the upcoming sprints

**Sprint Planning** – The team then refined the sprint goal, decomposed the product backlog items into work tasks and assigned the tasks among the team members for completion in the next sprint in the [Sprint Planning meeting](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Meeting%20Snapshots/Meeting%20Snapshot1.jpg) This was reviewed by the Product Manager and the Agile Coach.

**Stand-Up** - At the beginning of each day, the team came together for a quick, typically 15-20 minute, meeting to review prior accomplishments, the plan for the day, and highlight any roadblocks any member of the team is facing. Development team members reported work completed since the last session; planned work before the next session and any blockers. Blockers identified were cleared by the Agile Coach and Delivery Manager. Stand-Up provided a great forum for coordination across the team.

**Sprint Review** - In the [Sprint Review meeting](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Meeting%20Snapshots/Sprint%20Review%20Meeting.jpg), the team assessed the project development against the sprint goal determined during the planning meeting.  The team presented completed goals in the Sprint to the Product Manager for review and approval. Accomplishments were recognized and issues were documented to be completed during the next sprint. 

**Sprint Retrospective** – The team reflected on how their tools, processes and peers performed on the recently completed sprint. Each team member was asked to identify areas which met/ exceeded expectations, areas which lagged behind and one area for improvement. We created [Sprint Retrospective boards](https://github.com/xFusionTech/KMT/tree/master/ReadMe_EvidenceFiles/Team%20Communication/Sprint%20Retrospectives) using [Trello](https://trello.com/xfusiontech) project management board which provides a summary snapshot of each of our Sprint Retrospective meetings.

With each iteration, the prototype became increasingly aligned to the vision of the Product Manager, as well as the needs of our users. Our high-level roadmap included several user stories that ultimately were not included in the Working Prototype. 


  <p align="center">
  <img width="540" height="360" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Sprint%20Iteration.jpg">
</p>
  

# Technical Approach

Our development team chose modern tools that supported our need to bring features together quickly and deliver them continually with a high degree of quality. The team’s high level of experience and expertise delivering mission-critical applications—resulted in code that is easy to adapt to meet evolving business needs for the State of California. 

The Knowledge Management Portal solution architecture is implemented using the following architectural features/best practices:
1.	**N-Tier Distributed Architecture** – supports horizontal and vertical scalability
2.	**Service Oriented Architecture (SOA)** – uses SOA approach for business-driven technology architecture for business and system agility and flexibility
3.	**Technology Agnostic Application Layer** – The application is implemented using open source tools/technologies that are completely technology platform (such as Angular, Bootstrap, CSS, jQuery etc.) agnostic.  
4.	**Responsive UX/UI Design** – The web-based User Interface (UI) uses Responsive Design techniques/tools. 
      -	The Application is accessible through any web browser such as Google Chrome, Mozilla Firefox, MS Internet Explorer, Safari and Opera etc. 
      -	Accessible through wide range of Mobile devices (tablets/cell phones) running on iOS, Android, and Microsoft operating systems.
5.	**Section 508 Compliance** – The user interface is compliant to the Section 508 requirements.
6.	**Microservice Based Architecture** 
      -	The Business and Technical capabilities requirements are derived from the user stories
      - The Business and Technical Services are implemented using Microservices API architecture as RESTful web services. 
      -	Autonomous Services: Each Microservice is designed to have complete authority to perform CRUD (Create, Read, Update, Delete) operations on the specific set of domain data. No other services can perform CRUD operation on this domain data set. This makes the Microservices Autonomous API.
      -	The Microservices can be designed, implemented, built and deployed independently
7.	**API Gateway Pattern** – The API Gateway pattern is used to:
      -	Avoid any point-to-point integration of the APIs with the Applications that imposes direct and complex dependencies between the service consumers and the providers and creates a very inflexible and unmaintainable architecture. The API Gateway creates a layer of abstraction between the service consumers and the service providers. This eliminated direct dependencies between the service consumers and the service providers that makes the architecture flexible and maintainable.
      -	Route the service calls to the appropriate service providers
      -	Single Entry Point for all Service invocation – provides a pivotal point for all Security and compliance enforcements, service performance and SLA management and monitoring etc.
8.	**Open Standards Based** – The Application is implemented using various open standards that ensures interoperability of services and data as described in the following sections.


## KMP Solution Architecture and Technology:

The logical architecture for the Knowledge Management Portal (KMP) is based on Service Oriented, Microservice API based architecture as shown below.

<p align="center">
  <img width="320" height="300" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Logical%20Architecture.jpg">
</p>
  
-	The KMP Data and Business Functions are exposed to the various KMP users as API in the API Layer.
-	KMP Application access these APIs from the API Layer to deliver KMP business functions to the KMP Human Users through Web and Mobile Channels.
-	In future, various System users such as external IVR Application and the system partners can access the KMP functions by accessing the KMP APIs through the API Layer. 

The [N-Tier Distributed Service Oriented Architecture](https://github.com/xFusionTech/KMT/wiki/Solution-Architecture) for the KMP solution is presented in the following diagram and the detailed explanation of the Technology Stack is provided [here](https://github.com/xFusionTech/KMT/wiki/Technology-Stack).
  
  
<p align="center">
  <img width="480" height="540" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Technology%20Stack.jpg">
</p>



## Complete Infrastructure Architecture:


<p align="center">
  <img width="720" height="420" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Infrastructure%20Architecture.png">
</p>

### Development Environment

Developers used their local environment for development and unit testing where from they connected to GitHub source code repository and work on the individual stories/tasks. Before checking in, developers issued a pull request and reviewed the code and merged into the GitHub source code repository.

### Test Environment

We used our data centre environment host by Open Group on the public cloud as Test environment. The CI/CD job was scheduled nightly for the Test environment to avoid interfering with ongoing functional testing.

### Production Environment

The production environment is deployed on Amazon Web Services(AWS). The CI/CD job deploys the code on the production environment. The production environment uses the following Amazon Web Services: 
 - AWS-EC2 : Linux VMs are used to run all the KMP application components including the WSO2 DSS Server, WSO2 API Manager, and the front end application components on Angular and NGINX
 - AWS-RDS : PostgreSQL database runs on AWS-RDS 
 - AWS-S3 : Uploaded Knowledge Articles (files) are stored in AWS-S3
 - AWS-SES : The Working Prototype uses AWS Lambda function to send email notifications 
 
### Source Code Repository

We used GitHub as a source code repository where developers connect and performs check-in's and check-out's. 

### Docker Image Repository

We used Docker Hub as the repository for all the docker images. 

### Container Model

The following diagram shows the Docker images used for the Working Prototype. The Jenkins job creates the Docker containers by grouping Docker images that are deployed in various SDLC environments.  


<p align="center">
  <img width="680" height="240" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Docker%20Container.png">
</p>



## DevOps Automation:


### Infrastructure automation:

<p align="center">
  <img width="720" height="420" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Infrastructure%20Automation%20Architecture.png">
</p>


### Continuous Integration and Continuous Deployment (CI/CD):

Our team followed Continuous Integration approach and focused on integrating work from individual developers into the GitHub repository multiple times a day to catch integration bugs early and accelerate collaborative development. Our solution used GitHub to document code and unit test commits in our public GitHub repository.

<p align="center">
  <img width="680" height="420" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/CICD%20Framework%20Architecture.png">
</p>

Here is an overview of the steps we followed in our approach:

a.            Developer sets their local development environment connecting to GitHub repository to mimic the operations environment

b.            Developer creates unit tests and writes the appropriate source code to implement a user story/feature.

c.             To merge the unit test and source code, developer submits a pull request and validate and fixes in case of any code conflicts. Then they will check-in the changes

e.            Whenever any changes happened in source code, then Jenkins automatically compiles the source code and all unit tests are executed automatically

f.  In-case of any failures Jenkins will send an email to KMTadmin and developers.

g.  If these fail, developer is notified to fix the issue. Steps 3, 4 and 5 are repeated until the ad-hoc tests pass.

f.             Once the unit tests pass, Jenkins executes Docker files to build the Docker images for the UI and the back-end.

g.            Docker pushes the images to the Docker Hub, and then deploys them to the test environment where the functional tests are executed automatically.

h.            Once the functional tests succeed, a notification is sent regarding the successful test execution.

i.              QA performs ad-hoc/manual tests. If these fail, developer is notified to fix the issue. Steps 4, 5, 6, 7, 8 and 9 are repeated until the ad-hoc tests pass.

j.             Once the error is fixed, then Finally Jenkins takes the latest code and builds and create the final image

k.            Image created for testing is deployed to the production environment.





_**--------------------------------------------------- End of Technical Approach--------------------------------------------------------**_


# US Digital Services Playbook:

Our team followed the US Digital Services Playbook, covering each of the 13 plays.  We have provided [evidence of how each play was followed]().



# Explicit Reference Requirements:

| Requirement                                        | Our approach |
| :----------------------------------------------------------- | :------------- |
| a. Assign one team leader                 | Sanjib Nayak was designated to lead our team as the Product Manager and was accountable and responsible for the quality of our working prototype  |
| b. Assembled a multidisciplinary and collaborative team           | We assembled a [multidisciplinary team](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Roles%20and%20Responsibilities.pdf) of twelve experienced professionals from fifteen of the labor categories identified in the RFI  |
| c. Understood what people needed                 | We followed a [user-centric approach](https://github.com/xFusionTech/KMT/wiki/User-Centric-Design) to the design and development of our prototype. We engaged users early in the process through the use of interviews and surveys. Upon conducting interviews we created [User Personas](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/User%20Personas.pdf) for the various [User Roles](https://github.com/xFusionTech/KMT/wiki/User-Roles-and-User-Stories). Then we created wireframes which provided us a quick, visual way to communicate to developers the desired prototype look and feel so development could begin once the PM approved the initial stories.  |
| d. Used at least a minimum of three (3) “user-centric design” techniques and/or tools                   | We have followed a [User-Centric Design](https://github.com/xFusionTech/KMT/wiki/User-Centric-Design) methodology for creating the Prototype. <br> [Personas](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/User%20Personas.pdf) <br> [User Stories](https://github.com/xFusionTech/KMT/wiki/User-Roles-and-User-Stories) <br> [StoryBoards](https://github.com/xFusionTech/KMT/wiki/StoryBoards) <br> [Wireframes](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/Wireframe%20Mockup.pdf) <br> [Whiteboarding](https://github.com/xFusionTech/KMT/wiki/Whiteboard-and-Drafts)|
| e. Used GitHub to document code commits           | [GitHub Deployment](https://github.com/xFusionTech/KMT/tree/master/DSSServices) and [GitHub WebApplication](https://github.com/xFusionTech/KMT/tree/master/WebApplication). The summary of the [commits](https://github.com/xFusionTech/KMT/graphs/commit-activity) made during the project phase is available too |
| f. Used OpenAPI to document the RESTful API, and provided a link to the OpenAPI                      |  [KMP SwaggerHub URL](https://app.swaggerhub.com/apis/xFusionTech/KMTool/v1.0.0) <br> [KMP SwaggerHub Images](https://github.com/xFusionTech/KMT/tree/master/OpenAPI%20Specification/Readme_Evidence_OpenAPI) <br> [SwaggerHub YAML File](https://github.com/xFusionTech/KMT/blob/master/OpenAPI%20Specification/KMP-swagger.yaml)  |
| g. Complied with Section 508 of the Americans with Disabilities Act and WCAG 2.0                     | We have complied with the [Section 508](https://github.com/xFusionTech/KMT/blob/master/Testing/Usability%20Testing/KMP-Section508ScanReport-Chrome.pdf) of the ADA and WCAG 2.0  |
| h. Created or used a design style guide and/or a pattern library               | We used the Style Guide as per the [US Web Design](https://designsystem.digital.gov/components/) Standards. Our color scheme was selected based on State of California colors and approved by user feedback. Applying the US Web Design Standards along with input from users allowed us to build a prototype which was simple and intuitive to navigate and use.  |
| i. Performed usability tests with people                         | We have conducted usability tests with prospective users for all the user roles <br> [Author Role](https://github.com/xFusionTech/KMT/blob/master/Testing/Usability%20Testing/Usability%20Testing%20-%20Author%20Role.pdf) <br> [Approver Role](https://github.com/xFusionTech/KMT/blob/master/Testing/Usability%20Testing/Usability%20Testing%20-%20Approver%20Role.pdf) <br> [Viewer Role](https://github.com/xFusionTech/KMT/blob/master/Testing/Usability%20Testing/Usability%20Testing%20%20-%20Viewer%20Role.pdf) |
| j. Used an iterative approach, where feedback informed subsequent work or versions of the prototype                  | We conducted five sprints, each sprint informing the subsequent. The team decomposed the product [backlogs](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Team%20Communication/Sprint%204%20Backlog.png) into work tasks and assigned the tasks among the team members for completion in the next sprint in the [Sprint Planning meeting](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Meeting%20Snapshots/Meeting%20Snapshot1.jpg) and ended with a [Sprint Review meeting](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Meeting%20Snapshots/Sprint%20Review%20Meeting.jpg) and [Sprint Retrospective meetings](https://github.com/xFusionTech/KMT/tree/master/ReadMe_EvidenceFiles/Team%20Communication/Sprint%20Retrospectives) . Daily scrum meetings provided our team the opportunity to review our progress and discuss testing feedback. These were incorporated into the sprint and product backlog. For each sprint cycle, our product manager would lead a collaborative session of [whiteboarding brainstorming](https://github.com/xFusionTech/KMT/wiki/Whiteboard-and-Drafts) that ultimately drove the creation of user stories, [wireframes mockups](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/Wireframe%20Mockup.pdf) and defined what was to be accomplished in each sprint or put into the product backlog for the next iteration. |
| k. Created a prototype that works on multiple devices, and presents a responsive design                     | KMP Business functions are accessed and delivered to its business and system users through various access channels as delineated in [Responsive UI Design](https://github.com/xFusionTech/KMT/wiki/Responsive-UI-Design)  |
| l. Used at least five (5) modern and open-source technologies, regardless of architectural layer (frontend, backend, etc.)                                 | We have used the following modern open-source technologies and open standards for the implementation of our Working Prototype. The Solution Architecture and use of these technologies are described in the [Technology Stack](https://github.com/xFusionTech/KMT/wiki/Technology-Stack) page: <br>  Angular 4 <br>  Angular CLI <br>  Typescript <br>  Angular Bootstrap <br>  jQuery <br>  HTML5 <br>  CSS3 <br>  REST API <br>  JSON <br>  PostgreSql <br>  WSO2 API Manager <br> WSO2 Data Services Server <br>  Swagger <br>  Jasmine <br>  KARMA <br>  Selenium <br>  Jenkins <br>  Docker <br>  DockerHub <br>  GitHub   |
| m. Deployed the prototype on an Infrastructure as a Service (IaaS) or Platform as Service (PaaS) provider, and indicated which provider they used                     | We have deployed our Working Prototype on Amazon Web Services – an Infrastructure as a Service provider  |
| n. Developed automated unit tests for their code                       | We have used [Jasmine and Karma](https://github.com/xFusionTech/KMT/tree/master/Testing/Unit%20Testing) for automated Unit testing. The automated unit test scripts are integrated through Jenkins GitHub web hook. GitHub commits kick off Jenkins builds, and updates/deploys the Docker Hub Images to DockerHub and executes the test cases and if there are any failures it will send an notification to kmtadmin@xfusiontech.com  |
| o. Setup or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider  |  Our team followed Continuous Integration approach and focused on integrating work from individual developers into the GitHub repository multiple times a day to catch integration bugs early and accelerate collaborative development. Our solution used GitHub to document code and unit test commits in our public GitHub repository. <br> [CI/CD Framework](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/CICD%20Framework%20Architecture.png) <br> [AWS Jenkins URL](http://ec2-13-57-242-90.us-west-1.compute.amazonaws.com:8080/login?from=%2F) <br> [AWS Jenkins Dashboard](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/KMP%20Jenkins.png)   |
| p. Setup or used configuration management                 | We have used [GitHub](https://github.com/xFusionTech/KMT) for configuration Management  |
| q. Setup or used continuous monitoring                  | For the Working Prototype, we have used AWS Cloud Watch as our Continuous Monitoring Tool. It monitors the two Virtual Machines on AWS-EC2, AWS-S3 and AWS-SES, produces metrics and graphs in AWS console. <br> [EC2 Instance level monitoring](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/EC2%20Instance%20level%20monitoring%20-%20basic.PNG) <br> [High CPU Utilization Alarm Dashboard](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/High%20CPU%20Utilization%20Alarm%20Dashboard.PNG) <br> [High CPU Utilization Alarm setup](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/High%20CPU%20Utilization%20Alarm%20setup.PNG) <br> [KMP Dashboard using CPU utilization and DB connections](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/KMP%20Dashboard%20using%20CPU%20utilization%20and%20DB%20connections.PNG) <br> [KMP Dashboard using SES email count and success rate](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/KMP%20Dashboard%20using%20SES%20email%20count%20and%20success%20rate.PNG) <br> [KMP SES - notification email log sequence traced](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/KMP%20SES%20%20-%20notification%20email%20log%20sequence%20traced.PNG) <br> [KMP SES email through Lambda function for application specific notification](https://github.com/xFusionTech/KMT/blob/master/KMP%20Continuous%20Monitoring/KMP%20SES%20email%20through%20Lambda%20function%20for%20application%20specific%20notification.PNG)     |
| r. Deployed their software in an open source container, such as Docker (i.e., utilized operating-system-level virtualization)            | We have used all open-source [Docker containers](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Docker%20Container.png) <br> [DockerHub URL](https://hub.docker.com/) <br> [DockerHub dashboard](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/KMP%20DockerHub.png) |
| s. Provided sufficient documentation to install and run their prototype on another machine                      | Created installation guide and instructions for complete documentation |
| t. Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge                           | We used openly licensed and free of charge platforms  |



