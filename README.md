# KMP - Knowledge Management Portal


xFusion’s approach to the Pre-Qualified Vendor Pool for Agile Development – Digital Services (PQVP DS-AD) effort uses Agile Scrum methodology, User-Centric design techniques, Microservices API based Service Oriented Architecture (SOA), API Gateway, DevOps automation using Container technologies and Continuous Integration and Continuous Delivery (CI/CD) tools, modern Open-Source technologies, and Open Standards to plan, design, develop, test, build and deploy the Working Prototype – Knowledge Management Portal (KMP).The KMP allows State Agencies/Departments to capture, archive, and manage organizational knowledge from its employees and programs.


The Readme file provides a brief account of our approach to the project and the processes that we have followed to build the Working Prototype that meets the RFI requirements using modern, open source technologies.

In addition, we have documented our approach, process, tools and technologies in detail in our [Wiki pages](https://github.com/xFusionTech/KMT/wiki) in the GitHub repository.

Below are the key URLs for the working Prototype:

| **Application**  | **URL** | **Login Credentials**
| :------------- | :------------- | :--------------------
| **Working Prototype – Knowledge Management Portal** | http://ec2-18-144-75-92.us-west-1.compute.amazonaws.com:8088  | <font color="#1589F0"> **Role - Article Viewer** <br> **Permissions:** *Search and view articles*</font> <br><br> User ID: <br> Password: <br><br> **Role - Article Author** <br> **Permissions:** *Article Viewer permissions + Create new article, update draft articles* <br><br> User ID: <br> Password: <br><br> **Role - Article Approver/Publisher** <br> **Permissions:* *Article Author permissions + Approve/Publish Articles* <br><br> User ID:  <br> Password: 
| **GitHub – Source Code Repository** | https://github.com/xFusionTech/KMT | No credential required
| **Working Prototype Wiki** | https://github.com/xFusionTech/KMT/wiki | No credential required
| **DockerHub – Docker Image Repository** | fff| User ID: <br> Password:
| **Jenkins – CI/CD Server** | http://ec2-13-57-242-90.us-west-1.compute.amazonaws.com:8080/login?from=%2F | User ID: admin <br> Password: admin



## Sprint Zero - Planning Effort:
Upon the release of the RFI Pre-Qualified Vendor Pool for Agile Development, we took time to understand the [Statement of Work](https://github.com/xFusionTech/KMT/wiki/Statement-of-Work) in detail and then formed a [multidisciplinary team](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Roles%20and%20Responsibilities.pdf) of highly experienced Information Technology (IT) professionals, with relevant experience of working in agile software development projects, to collaborate and work on creating the prototype. Our team members have worked with one another in previous projects and this allowed us to conform quickly as a team and assign work based on each team member’s strengths. The team then designated a Product Manager who was made responsible for leading the team and being accountable for the quality of prototype being submitted.

Since we had a smaller time-frame to carry out the project, we decided to go ahead with five sprints to complete the project. The team adopted a Scrum-based approach to development and created the roadmap required to meet the Minimal Value Plan (MVP) for the Working Prototype. Sprint planning included translating the MVP into five sprints, creating high level user stories and determining how the Prototype architecture and infrastructure would be built to support the roadmap. During this planning phase, we started [whiteboarding and drafting](https://github.com/xFusionTech/KMT/wiki/Whiteboard-and-Drafts) the roles, logical flow and architecture models. We went ahead with modern tools and techniques with which we were already familiar with, thus reducing the ramp up time. This Planning effort was completed within three days of receipt of the RFI and development began immediately. 

Our execution process was extremely disciplined, complete with formal demos and retrospectives with each sprint, and a complete story board designed with the help of [Trello Boards](https://trello.com/xfusiontech) overlaying our GitHub Issues and Stories. We conducted daily, in person, scrum meetings to discuss the progress that was made since the previous scrum meeting , goals to accomplish before the next scrum meeting , and any impediments that were preventing team members from performing their work.

During the course of our project, we have heavily relied on collaborative development and communication tools such as [GitHub](https://github.com/xFusionTech/KMT/) and [JIRA](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/JIRA%20Snapshots.pdf). The result of our efforts is a collaboratively designed and built Working Prototype that meets the MVP of the RFI requirements using modern, open source technologies within a smaller time frame.


## Agile Process:

Our agile process followed various iterations of the stages discussed below:

**Backlog Release** – The team reported the [backlogs](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Team%20Communication/Sprint%204%20Backlog.png) from the previous sprint and the Product Manager prioritized those backlog items to be completed in order in the upcoming sprints

**Sprint Planning** – The team then selected a sprint goal and began decomposing the product backlog items into work tasks and estimating these in hours. We then outlined the tasks that needed to be completed in the next sprint in the [Sprint Planning meeting](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Meeting%20Snapshots/Meeting%20Snapshot1.jpg) This was reviewed by the Product Manager and the Agile Coach.

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
3.	**Technology Agnostic Application Layer** – The application is implemented using open source tools/technologies that are completely technology platform (such as Angular JS, Bootstrap, CSS, jQuery etc.) agnostic.  
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

The [N-Tier Distributed Service Oriented Architecture](https://github.com/xFusionTech/KMT/wiki/Service-Oriented-Architecture) for the KMP solution is presented in the following diagram.
  
  
<p align="center">
  <img width="480" height="540" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Technology%20Stack.jpg">
</p>



## Complete Infrastructure Architecture:


<p align="center">
  <img width="720" height="420" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Infrastructure%20Architecture.png">
</p>

### Development Environment

### Test Environment

### Production Environment

### Source Code Repository

### Docker Image Repository

	
### Container Model


<p align="center">
  <img width="680" height="240" src="https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Scrum%20Process/Docker%20Container.png">
</p>

### Infrastructure Deployment and CI/CD Framework 


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




_**--------------------------------------------------- End of Technical Approach--------------------------------------------------------**_

# Explicit Reference Requirements:

| Requirement  | Our approach |
| :------------- | :------------- |
| a. Assign one team leader | Sanjib Nayak was designated to lead our team as the Product Manager and was accountable and responsible for the quality of our working prototype  |
| b. Assembled a multidisciplinary and collaborative team  | We assembled a [multidisciplinary team](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/Project%20Team/Roles%20and%20Responsibilities.pdf) of twelve experienced professionals from fifteen of the labor categories identified in the RFI  |
| c. Understood what people needed | ---  |
| d. Used at least a minimum of three (3) “user-centric design” techniques and/or tools   | We have followed a [User-Centric Design](https://github.com/xFusionTech/KMT/wiki/User-Centric-Design) methodology for creating the Prototype. <br> [Personas](https://github.com/xFusionTech/KMT/wiki/Personas) <br> [User Stories](https://github.com/xFusionTech/KMT/wiki/Article-Lifecycle-and-User-Stories) <br> [StoryBoards](https://github.com/xFusionTech/KMT/wiki/StoryBoards) <br> [Wireframes](https://github.com/xFusionTech/KMT/blob/master/ReadMe_EvidenceFiles/UI-UX/Wireframe%20Mockup.pdf)|
| e. Used GitHub to document code commits  | [GitHub Deployment](https://github.com/xFusionTech/KMT/tree/master/DSSServices) and [GitHub WebApplication](https://github.com/xFusionTech/KMT/tree/master/WebApplication). The summary of the [commits](https://github.com/xFusionTech/KMT/graphs/commit-activity) made during the project phase is available too |
| f. Used OpenAPI to document the RESTful API, and provided a link to the OpenAPI  | ---  |
| g. Complied with Section 508 of the Americans with Disabilities Act and WCAG 2.0  | We have complied with the [Section 508](https://github.com/xFusionTech/KMT/wiki/Section-508-Compliance) of the ADA and WCAG 2.0  |
| h. Created or used a design style guide and/or a pattern library  | ---  |
| i. Performed usability tests with people  | ---  |
| j. Used an iterative approach, where feedback informed subsequent work or versions of the prototype  | ---  |
| k. Created a prototype that works on multiple devices, and presents a responsive design  | KMP Business functions are accessed and delivered to its business and system users through various access channels as delineated in [Responsive UI Design](https://github.com/xFusionTech/KMT/wiki/Responsive-UI-Design)  |
| l. Used at least five (5) modern and open-source technologies, regardless of architectural layer (frontend, backend, etc.)  | All the technologies that we have used are both modern and open-source [Technology Stack](https://github.com/xFusionTech/KMT/wiki/Technology-Stack)  |
| m. Deployed the prototype on an Infrastructure as a Service (IaaS) or Platform as Service (PaaS) provider, and indicated which provider they used | We have deployed our Working Prototype on Amazon Web Services – an Infrastructure as a Service provider  |
| n. Developed automated unit tests for their code  | We automated unit testing through GitHub and the Jenkins GitHub web hook so that GitHub commits kick off Jenkins builds, and updates/deploys of the Docker Hub Images to DockerHub  |
| o. Setup or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider  | ---  |
| p. Setup or used configuration management  | ---  |
| q. Setup or used continuous monitoring  | ---  |
| r. Deployed their software in an open source container, such as Docker (i.e., utilized operating-system-level virtualization)  | ---  |
| s. Provided sufficient documentation to install and run their prototype on another machine  | ---  |
| t. Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge  | ---  |
