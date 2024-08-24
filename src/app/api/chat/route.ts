import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import kv from '@vercel/kv';
import { Ratelimit } from '@upstash/ratelimit';
import { NextRequest } from 'next/server';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.API_KEY,
});


// // const triyas = [ `About triyas: WHO WE ARE AND WHAT WE OFFER:
// //   At Triyas we create befitting solutions for advanced technology products with technological prowess. We make organizations explore design innovation and build game-changing products with great quality and less time to market.
  
// //   Our team of experts deliver uncompromising quality, timely design & engineering solutions, with out-of-the-box approach & strategic thinking. We help our clients design products that are radical breakthroughs. We aim to leverage latest technology trends with in-house excellence and streamlining processes.
  
// //   We strongly believe in building meaningful relationships with clients by providing them value.
  
// //   We are a team of technology, design, and business enthusiasts with over 20 years of combined industry experience. We've been delivering remarkable tech solutions along with an exceptional business value to ensure client satisfaction. We constantly aim to bring creativity, precision and passion in everything we take up
  
// //   WHY TRIYAS:
// //   1)Leading in CAD/CAE technology:
// //   Turn-key solution provider
// //   Technology management embedded in corporate strategy
// //   Comprehensive capabilities
// //   Thorough knowledge of development and production
// //   Strategic partnerships.
// //   2)Provide flexible work force:
// //   On site and offshore expandable capacity
// //   Flexible pool of experienced consultants
// //   Extensive project and product management experience
// //   State-of-the-art software and hardware.
// //   OUR VISION:
// //   Our vision is to simplify complexity in design with technological intelligence and innovation.
  
// //   OUR MISSION:
// //   Our mission is to help organizations build products that their consumers are looking forward to.
// //   `,
  
// //   `contact: Our Address
  
// //   Plot Number #682 Babukhan Rasheed Plaza Road #36, Jubilee Hills, Hyderabad 500033 India
  
// //   mobile: +919704477677
  
// //   mail: info@triyas.com
  
// //   for any inquiries fill the form in contact section`,
  
// //   `Products: 1)CAD: i)creo: Creo Parametric:
// //   With PTC Creo Parametric, supercharge your innovation with advanced features and cutting-edge technologies. Simplify design iterations, reduce costs, enhance quality, and capture a larger market share.
  
  
// //   Benefits of Creo:
// //   The benefits of PTC Creo?
// //   PTC Creo Parametric is a comprehensive 3D CAD solution that provides engineers with a seamless journey from concept to product validation. With a rich set of powerful features, engineers can precisely simulate and optimize their designs, taking into account factors such as weight, performance, cost, and sustainability. The software accommodates a wide range of materials and manufacturing processes. Furthermore, it goes beyond traditional engineering practices by replacing 2D drawings with fully-annotated 3D models, simplifying the manufacturing, inspection, and servicing of parts and assemblies.
  
// //   a)Lower cost
// //   Our CAD tools provide several benefits for cost savings, including reducing material, labor, and overhead expenses. Take advantage of our part optimization tools to minimize material costs and streamline assembly processes.
  
// //   b)Performance
// //   Set your products apart with outstanding performance. Optimize your designs for weight, reliability, and sustainability, while harnessing the full potential of cutting-edge additive and composite manufacturing processes.
  
// //   c)Time to Market
// //   PTC Creo accelerates product development. Ensure design quality from the start to prevent costly redesigns and rework. Streamline downstream processes with annotated 3D models.
  
// //   PTC Creo 10 – New Features and Functionality:
// //   a)Usability and Productivity
// //   Introducing our finest Creo yet. Experience a wide array of enhancements designed to boost daily productivity. These improvements encompass advanced tools for CAD model management and manipulation, expanded capabilities for composite product design, and enhancements in areas like electrification, ergonomics design, model-based definition (MBD), simulation, and both additive and subtractive manufacturing.
// //   Discover Creo Composites
  
// //   b)Creo Composites
// //   Utilize Creo for designing with composite materials to achieve products that are both robust and lightweight. Composites allow for precise customization by combining different fabrics to enhance strength, flexibility, and localized impact absorption within the design. The outcome is a highly optimized structure perfectly aligned with your engineering objectives.
// //   Discover Creo Composites
  
// //   c)Creo Electrification
// //   Creo Electrification refers to the suite of features and capabilities within PTC's Creo software that enables engineers and product designers to create and optimize electrified products. This includes electric vehicles, electronic components, and systems that rely on electrical power. It's a critical part of the broader Creo product design and engineering platform.
// //   Discover Routed Systems
  
// //   d)Design for Ergonomics
// //   Ensuring the safety and efficiency of your product users is paramount. Explore the latest Creo enhancements designed to consider factors like range of movement, field of vision, and user uniqueness. With Visual Field features now offering reflection analysis and manikins supporting multiple reach envelopes, your design process is more user-centric than ever.
// //   Explore Human factors
  
// //   e)Simulation Driven Design
// //   Meet Creo Ansys Simulation Advanced, the newest addition to our Creo simulation lineup, featuring support for nonlinear materials. Creo Simulation Live has been enhanced with expanded contact simulation choices and improved results options for fluid and structural analyses. We've also enriched Creo Flow Analysis and Creo Simulate with improved animations and enhanced multibody support. Furthermore, our generative design capabilities now include rotational symmetry and the ability to incorporate point mass and remote loads, providing even more design versatility .
// //   Discover Creo Ansys Simulation
  
  
// //   f)Additive and Subtractive Manufacturing
// //   In Creo 10, our additive manufacturing capabilities offer users the flexibility to design various beam-based lattice types, including rhombic and formula-driven lattices. On the subtractive manufacturing front, High-Speed Milling now supports barrel tools for both wall and floor 5-axis finishing, optimizing toolpath efficiency and enhancing surface finish quality.
// //   Discover Additive Manufacturing
  
// //   PTC Creo 3D CAD packages – Design the products for the future
// //   The PTC Creo 3D CAD/CAM/CAE product design solution equips you with precisely the tools you need to create top-tier designs efficiently. Benefit from the industry's most scalable array of 3D CAD product development solutions. Exclusively accessible through certified PTC resellers, our affordable and adaptable Creo Design packages cater to a diverse range of design disciplines and evolving business requirements, making them an ideal choice for growing companies.
  
// //   ii)Creo+ SaaS CAD
// //   Creo+ merges the strength and established features of Creo, delivered through SaaS (Software as a Service), with innovative cloud-based tools for improved collaboration and streamlined CAD administration.
  
// //   What does SaaS mean for CAD?
// //   CAD Software as a Service (SaaS) represents a licensing and delivery model for engineering CAD software, offering benefits such as improved accessibility, scalability, collaboration, and security. While in-office communication software like Customer Relationship Management (CRM) and Human Resource Management (HRM) have already embraced SaaS. The CAD SaaS sector is approaching a pivotal moment, with widespread adoption anticipated in the near future. PTC is uniquely positioned to assist customers in their transition to SaaS with cloud-based CAD and PLM solutions.
// //   What are the CAD advantages of SaaS?
// //   Software as a Service (SaaS) presents abundant opportunities for businesses, particularly in the realm of CAD solutions. Ultimately, adopting CAD as a SaaS product can significantly enhance the power and efficiency of your CAD system.
  
// //   a)Real-time design
// //   SaaS customers can anticipate boosted productivity and innovation through swift access to the latest CAD features, utilization of cloud-computing technologies, and seamless real-time design collaboration.
  
// //   b)Accessibility and availability.
// //   With CAD software under a SaaS model, automatic updates ensure a consistently improved user experience for all. Additionally, CAD SaaS offers enhanced accessibility and availability.
  
// //   Introducing Creo+
// //   Creo+ integrates the robust features of Creo, delivered through SaaS, with innovative cloud-based tools designed to foster collaboration, elevate accessibility, and streamline license management. Beyond the capabilities of Creo 10, Creo+ incorporates collaborative tools enabling real-time part design review, exploration, and editing by multiple team members.
  
// //   Feature's of Creo +
// //   a)Real-Time Collaboration
// //   Creo+ facilitates real-time collaboration with multiple contributors, both within and beyond your organization.
// //   Enhance Collaboration and Communication.
// //   It ensures that everyone is working on the most up-to-date design.
  
// //   b)Simplified CAD Administration
// //   Simplify the administration and rollout of Creo throughout your organisation using PTC Control Center.
// //   Centralised Management and Deployment.
// //   Minimize software installation and upgrades time.
  
  
// //   iii)Cloud-Native CAD & PDM
// //   Accelerated Product Design through Improved Collaboration and Cost Efficiency.
  
  
  
// //   Cloud-based Design Tools - Shaping the Future of CAD
// //   Onshape stands as the forefront of cloud-based product development platforms, offering a comprehensive suite encompassing 3D CAD, PDM, collaboration, and analysis tools. With Onshape, seamless work across devices and browsers is a reality, ensuring convenient access and editing of your designs from any location. Onshape redefines CAD with its pure Cloud SaaS approach, eliminating the need for files and enabling real-time simultaneous engineering. It's a hassle-free solution that requires no system crashes, implementation efforts, or updates. Start your journey with Onshape in minutes and witness the future of CAD technology.
  
// //   a)Seamless Product Development, No IT Burden
// //   Effortless, Cloud-Based Product Development. No downloads or installations needed. Accessible via any modern web browser. Includes an integrated PDM system for smooth collaboration. Empowers design teams to prioritize creativity over IT concerns.
  
// //   b)Accelerated Time-to-Market.
// //   Onshape expedites product development through its accessible, cloud-based platform compatible with any device. Seamless global collaboration enables teams to explore design alternatives simultaneously, eliminating data conflicts. This efficiency accelerates the product development cycle, ensuring a competitive edge in today's fast-paced market.
  
// //   Onshape Features
  
// //   a)Data Management
// //   Integrated version control and release management tools eliminate the necessity of a separate PDM system. Everyone collaborates on the most current design data continuously. Each user's edits are automatically recorded and can be reversed at any time, offering limitless undo/redo capabilities and a well-documented audit trail. Branching and merging support the simultaneous development of multiple product ideas.
  
// //   b)Collaboration
// //   Collaborate in real-time with simultaneous design edits, witnessing changes instantly. Share design data effortlessly with your team, company, or suppliers, while maintaining precise permissions for viewing, editing, and exporting. Enhance collaboration by adding comments and task assignments to keep everyone aligned. Utilize 'Follow' mode for interactive design reviews, presentations, and seamless collaboration.
  
// //   c)Workflow
// //   Streamline workflows by automating the management of part releases, assembly revisions, drawings, and imported files. Tailor custom workflows to align with your unique business processes. Enable users to work in parallel while awaiting approval for release candidates. Establish trigger points for notifications and email alerts.
  
// //   d)Parts
// //   Effortlessly create intricate solid and surface models employing both top-down and bottom-up approaches. Capture design intent and inter-part relationships by designing components together within a Part Studio. Additionally, enhance Onshape's extensive feature set by implementing custom features crafted with FeatureScript to automate intricate or repetitive design tasks.
  
// //   e)Assemblies
// //   Craft well-structured and highly detailed assemblies, utilizing built-in standard hardware and parts linked from other Documents. Easily capture intricate kinematic relationships using a single Mate. Design parts within context and efficiently handle updates. Onshape's distinctive database architecture eliminates the issues of broken links and missing files.
  
// //   f)Drawings
// //   Generate comprehensive drawings of parts and assemblies with detailed specifications, including dimensions, datums, surface finish and weld symbols, geometric tolerances, notes, tables, balloons, callouts, sheets, and customizable drawing properties. Onshape supports seamless import and export of DWG, DWT, and DXF file formats.
  
// //   g)Bill of Materials
// //   Effortlessly configure and oversee a Bill of Materials (BOM) while making simultaneous edits to an assembly. Easily incorporate non-geometric items with specified quantities and predefined units. Enhance assembly drawings with BOM tables featuring intelligent balloon callouts. Real-time updates guarantee that the BOM remains perfectly synchronized with the assembly it represents.
  
// //   h)Configurations
// //   Create intricate families of parts and assemblies using separate tables for each configuration option, significantly reducing the volume of rows and cells. Configuration variables empower endless product variations. Each configuration can maintain its unique part number and revision history.
  
// //   i)Analytics
// //   Monitor project status with Activity, Release, Project, and User Dashboards. Review document access and conduct security reviews. Stay up-to-date with the user activity stream. Users can see and access reports according to Global Permissions.
  
// //   j)Integrations
// //   Develop your own Onshape integrations via a robust REST API. Extend Onshape to meet your business and engineering needs with ERP, PLM, SSO, simulation, and CAM add-ons available in the Onshape App Store. New partners and integrations are being continuously added.
  
// //   k)Support
// //   Create custom Onshape integrations using our powerful REST API. Tailor Onshape to align with your business and engineering requirements by exploring ERP, PLM, SSO, simulation, and CAM add-ons in the Onshape App Store. We're constantly expanding our network of partners and integrations to provide you with even more options.
  
// //   l)Security
// //   Safeguard your design data against unauthorized access with role-based access control, AES-256 encryption, optional two-factor authentication, and detailed audit logs. Onshape adheres to SOC 2 Type 2 compliance and is hosted on AWS, ensuring robust security measures. Payments processed through Onshape are PCI compliant for added protection.
  
// //   Mitigate risks and safeguard Intellectual Property (IP).
// //   Onshape's database-driven architecture guarantees secure design data with precise access controls for every team member, minimizing the risk of unauthorized duplication and data breaches. Comprehensive version history facilitates effortless review and changes, fortifying the safeguarding of intellectual property.
  
// //   2)simulation
// //   i)altair
// //   As an Altair Channel Partner, we deliver leading-edge solutions designed to propel your organisation towards unprecedented innovation, performance excellence, and enduring success. Our collaboration with Altair opens the gateway to a comprehensive suite of top-tier products and invaluable expertise, poised to redefine your industry's competitive landscape.
// //   We are the Channel Partners of Altair
// //   We are proud to be a dedicated channel partner for Altair, a global leader in engineering and product design solutions. Our partnership with Altair enables us to deliver cutting-edge technology and expertise to empower different organisations.
  
// //   5+ Years of Excellence
  
// //   25+ Client's Satisfaction
  
// //   altair products:
// //   1)SimSolid
// //   Revolutionizing structural simulation by eliminating geometry preparation and meshing, saving time and reducing errors for designers, engineers, and analysts.
// //   More Details(need to fill the form)
  
// //   2)SimLab
// //   A versatile, process-driven simulation environment that streamlines complex assembly analysis, simplifying the setup of multiple physics simulations and reducing finite element model creation time.
// //   More Details
  
// //   3)OptiStruct
// //   Trusted by industry leaders, OptiStruct empowers engineers with robust simulation capabilities for efficient product development and performance assessment.
// //   More Details
  
// //   4)Inspire Form
// //   Inspire Form streamlines the stamping simulation process, aiding product designers and engineers in enhancing designs, ensuring robust manufacturing, and achieving cost-efficiency.
// //   More Details
  
// //   5)Inspire Cast
// //   Inspire Cast is a user-friendly casting simulation software for quality components. It helps visualize and rectify casting defects early, saving downstream costs.
// //   More Details
  
// //   6)Inspire Extrude
// //   Inspire Extrude Metal is an accessible simulation tool for all. It enhances understanding of profile features and process variables, reduces costs, and improves quality and yield.
// //   More Details
  
// //   7)Inspire Mold
// //   Inspire Mold offers a streamlined approach to injection molding design. It democratizes simulation, enabling early exploration, improved products, and reduced costs.
// //   More Details
  
// //   8)Inspire Print3D
// //   Inspire Print3D expedites the design and simulation of efficient 3D-printed parts. It aids engineers in understanding design changes, reducing costs, and improving manufacturability.
// //   More Details
  
// //   9)HyperMesh
// //   Altair HyperMesh, a leading product for finite element modeling, has evolved into Altair HyperWorks. It offers an enhanced user experience, legacy functionality, and compatibility with previous HyperMesh versions.
// //   More Details
  
// //   10)Radioss
// //   Radioss is a top solution for optimizing product performance under dynamic loadings. It's an industry standard for crash and safety analysis, improving design safety and manufacturability.
// //   More Details
  
// //   11)MotionSolve
// //   MotionSolve is a powerful tool for simulating and optimizing multi-body systems and mechanical assemblies. It aids in product design and performance evaluation.
// //   More Details
  
// //   12)CFD
// //   Altair offers comprehensive tools for computational fluid dynamics (CFD) modeling. AcuSolve enables robust, scalable, and accurate analysis of flow, heat transfer, and turbulence, expediting results analysis and physics exploration.
// //   More Details
  
// //   13)HyperLife
// //   HyperLife is a durability analysis tool that predicts product life under various loading conditions. It helps optimize product design for longevity and reliability.
// //   More Details
  
// //   14)HyperCrash
// //   HyperCrash is a robust pre-processing environment specifically designed to automate the creation of finite element models for crash analysis and safety evaluation.
// //   More Details
  
// //   15)HyperForm
// //   Sheet metal forming simulation with fast solver, die design analysis, and browser-based results visualization for enhanced manufacturing. Integrated with advanced analysis tools.
// //   More Details
  
// //   16)EDEM
// //   EDEM is a discrete element method software application for bulk material simulation. It's used for optimizing equipment design and analyzing the behavior of granular materials.
// //   More Details
  
// //   17)FEKO
// //   Feko is a leader in high-frequency electromagnetic simulation, serving industries like aerospace and automotive to enhance product design and reduce time-to-market.
// //   More Details
  
// //   18)WinProp
// //   WinProp provides fast, accurate wave propagation models and radio network planning for various standards. It's ideal for coverage planning, network optimization, and IoT deployments.
// //   More Details
  
// //   19)FLUX
// //   Flux, a reference in electromechanical equipment simulation, optimizes performance and efficiency. It simulates various conditions, aiding designers in creating optimized, high-performance products efficiently.
// //   More Details
  
// //   20)POLLEX
// //   PollEx applies Altair's simulation-driven design philosophy to electronics, enabling physics-based analysis and cross-discipline collaboration. It ensures innovation, performance, reliability, and compliance.
// //   More Details
  
// //   21)RapidMiner
// //   RapidMiner's integration includes seamless collaboration with Altair Knowledge Studio, Altair SmartWorks, and Altair SLC for enhanced data analytics and insights.
// //   More Details
  
// //   22)Monarch
// //   Monarch stands as a premier desktop-based self-service data preparation solution, empowering efficient and user-friendly data management for diverse tasks.
// //   More Details
  
// //   23)Panopticon
// //   Panopticon empowers business users, analysts, and engineers, providing real-time insights to those deeply involved in operations and decision-making processes.
// //   More Details
  
// //   3)PLM: i)windchill
// //   Windchill PLM Software
// //   Realize value quickly with standardized, out-of-the-box functionality across a comprehensive portfolio of core PDM and advanced PLM applications.
// //   Windchill product lifecycle management software
// //   Windchill revolutionizes product development with real-time information sharing, dynamic data visualization, and seamless collaboration. Its open architecture enables integration with other systems, including IoT, creating a robust digital thread for product-driven processes. With comprehensive functionality and configurable role-based apps, Windchill optimizes PLM while ensuring traceable product data access for non-experts without excessive complexity.


// //   15%
// //   PTC PLM market growth

// //   50%
// //   Increase operational efficiency

// //   59%
// //   of businesses consider PLM business critical or significant

// //   10K+
// //   PTC Windchill worldwide customers

// //   30%
// //   PLM market size 2020

// //   50%
// //   Faster Leads Time

// //   Benefits of Implementing PLM System
// //   Windchill brings significant benefits to the product development lifecycle, including reduced costs, faster time to market, improved product quality, and enhanced collaboration. Its streamlined processes and data management optimize resources and maximize efficiency, leading to higher customer satisfaction and cost savings through minimized prototyping and increased data re-use.

// //   Framework & Deployment
// //   Modern architecture
// //   Effortlessly manage extensive data volumes through a web architecture designed for seamless orchestration across multiple systems. This robust foundation ensures data scalability, accessibility, and integrity, driving efficient operations.
// //   Secure collaboration
// //   Work securely inside and outside the enterprise with IP- and platform-based protections.
// //   Streamlined Upgrades
// //   Reduce user disruption by upgrading data in place with time-saving automation.
// //   Admin and Support
// //   Leverage IoT-based “always on” system monitoring and PTC's expert-driven learning programs.
// //   Flexible Delivery
// //   Flexible delivery: Deliver on-premises or in the cloud for greater uptime and security compliance.

// //   4)AR/VR: Vuforia:
// //   Market-Leading Enterprise AR
// //   Vuforia is a comprehensive, scalable enterprise AR platform. Our wide-ranging solution suite ensures that we can provide the right AR technology to every customer based on their business needs.
// //   We are your trusted industrial AR partner.
// //   Our approach combines top-notch software solutions, technical support, and professional training, providing the leading industrial augmented reality solution in the market. We envision a future where businesses leverage visual technologies like AR and VR to enhance efficiency, streamline training, optimize operations, and expedite decision-making, enabling them to thrive and succeed just like individuals benefit from using visual information.

// //   Metrices

// //   Reduce Training and Labour Costs
// //   Leverage existing expertise more effectively. Improve onboarding and new skills development. Eliminate the need to train using multiple IT and OT systems. Cross-train users to improve workforce agility and flexibility.

// //   Improve Safety and Compliance
// //   Limit safety risks. Reduce the time and cost of compliance documentation. Create enforcable audit trails for management and reporting. Ensure traceability and quality reconciliation.

// //   Minimize Errors and Downtime
// //   Optimize machine configurations and maintenance tasks. Reduce overall operator and assembly errors. Provide role-based unified views into previously siloed data. Improve users own comprehension of complex products and processes.
// //   Vuforia Expert Capture
// //   Discover the easiest way to create step- by - step AR instructions and AI - enhanced inspections that enable frontline workers to get their jobs done more quickly and accurately.

// //   Vuforia Studio
// //   Efficiently create immersive AR experiences that leverage existing 3D and IoT data and improve worker safety, proficiency, and agility.

// //   Vuforia Engine
// //   Learn why over one million developers have chosen the advanced computer vision, calibrated performance, and cross- platform reach of Vuforia Engine, making it the most popular AR software on the planet.

// //   Vuforia Chalk
// //   Vuforia Chalk brings your technicians and experts together to solve problems faster and effectively.Power your people with Chalk's augmented reality remote assistance.

// //   5)industrial iot i)thingworx
// //   ThingWorx: Accelerate success.
// //   Embrace digital transformation effortlessly with ThingWorx, the purpose-built IIoT platform designed to tackle your business obstacles.
// //   Enhance your IIoT solution with ThingWorx.
// //   ThingWorx IIoT platform is a result of years of innovation, addressing challenges in manufacturing, service, and engineering. It offers solutions for workforce efficiency, asset optimization, and more, reducing barriers to building Industrial IoT solutions and enabling smooth scalability from pilots to enterprise-level applications.
// //   Unlock the full potential of your IIoT capabilities

// //   MAXIMIZE REVENUE
// //   Scale to new markets, improve throughput, and unlock new business models such as products as a service.

// //   REVOLUTIONIZE
// //   Get to market faster using a rich set of industrial IoT capabilities. Wrap and extend existing assets within your connected solution.

// //   REDUCE COSTS
// //   Leverage data from connected products and systems to increase productivity, lower cost, and increase efficiency.

// //   IMPROVE QUALITY
// //   Make product, service, and factory operations more secure and scalable. Improve service quality, reliability, and satisfaction.

// //   MAXIMIZE FLEXIBILITY
// //   Take control of your deployment options with on-premise, cloud, or a hybrid approach. Flexibly support any industrial use case.

// //   6)slm: SERVICE LIFECYCLE MANAGEMENT
// //   Shaping the Future of Asset-Centric Services
// //   Increase Revenue and Profitability from Service
// //   For complex products, manufacturing, construction machinery and transport vehicles it is crucial to be able to deliver top quality service, as well as considering the potential profitability of spare part sales. This puts high demand on maintenance in terms of diagnosis as well as correct, complete and easily accessible product information. It also stresses the need for a process approach.


// //   What is service lifecycle management?
// //   Service lifecycle management, often abbreviated as SLM, involves coordinating service parts management, technical communication,field service management, and product support activities to optimize customer equipment's operational time. Businesses utilize SLM to efficiently handle spare parts and inventory, facilitate communication among various teams, supervise service tasks, and ensure smooth product operations, all aimed at ensuring that customer's machinery and assets run with minimal downtime.


// //   The four steps in Service Lifecycle Management (SLM)
// //   An effective SLM (Service Lifecycle Management) setup involves four key phases: establishing a link with the asset, coordinating the allocation of resources, carrying out the required tasks, and establishing a solid data foundation to enhance operational efficiency.

// //   Link
// //   Establish a connection with installed assets and the customer: Monitor real-time performance and usage, anticipate future events, and build a rapport with the customer.

// //   Orchestrate
// //   Create service procedures and data structures: Build customer involvement and operational workflows, offer essential service information and materials, and define entitlements and associated obligations.

// //   Implement
// //   Fulfill work and customer obligations: Empower relevant parties, simplify task fulfillment and validation, and capture asset-related data.

// //   Enhance
// //   Prepare for resource requirements: Identify personnel and parts needed, gather necessary resources and information, and ensure adequate revenue coverage.
// //   Transform your after-sales service Organization
// //   Challenges like missing parts, outdated documentation, and low fix rates hinder after-sales growth. Transformation is needed in managing parts, delivering current service information, and predicting/preventing product failures.

// //   A Strategic Approach to Aftermarket
// //   Service Lifecycle Management (SLM) aligns service parts, technical communication, field service, and product support for enhanced operations. It's a combination of processes, tools, and methods customized for each case. Key benefits include visualizing enterprise data for service efficiency and utilizing real-time product data for proactive issue resolution, minimizing downtime.

// //   7)alm: codebeamer
// //   Codebeamer / ALM Solution
// //   Codebeamer is an Application Lifecycle Management (ALM) platform for modern product and software development. See how Codebeamer can help your organization to simplify complex product and software engineering at scale.
// //   Explore the benefits of Codebeamer
// //   For complex products, manufacturing, construction machinery and transport vehicles it is crucial to be able to deliver top quality service, as well as considering the potential profitability of spare part sales. This puts high demand on maintenance in terms of diagnosis as well as correct, complete and easily accessible product information. It also stresses the need for a process approach.

// //   Codebeamer features
// //   Codebeamer is a complete lifecycle management solution that excels in requirements, risk, and test
// //   management. It helps teams capture and track requirements, manage risks, and plan and execute
// //   tests efficiently, ensuring a smooth development process.
// //   Requirements Management
// //   Transform market insights into high-quality products at unprecedented speed. Achieve clarity and alignment across all stakeholders to minimize costs and accelerate delivery. Monitor objects and actions throughout the entire delivery process.

// //   Quality Assurance & Testing
// //   Incorporate quality management into your development processes, building trust in your products. Effectively monitor and manage QA activities across the entire lifecycle, accelerating product verification.`,

// //   `Services:
// //   1)design services:
// //   i)product design: Product Design
// //   At the heart of our product design philosophy lies a commitment to innovation and excellence. We understand that product design is not just about aesthetics; it's about delivering outstanding user experiences, optimising functionality, and ensuring manufacturability.

// //   a)Concept Ideation
// //   Design Ideation in Mechanical Engineering serves as the creative spark, igniting idea generation during the initial stages of conceptual design. This phase thrives on innovative approaches and strategies that enhance creativity, ultimately shaping the foundation for detailed design development. Ideation methods are meticulously crafted to foster ingenuity, ensuring a seamless transition towards the creation of intricate designs.

// //   b)Detailed Design
// //   Within Mechanical Engineering, the Detailed Design phase comes to the forefront as designers meticulously craft intricate designs tailored for efficient manufacturing. This crucial stage encompasses the creation of meticulous drawings and specifications, which precisely outline the product's measurements, materials, and manufacturing methodologies. Here, designers delve into concerns of manufacturability, clearances, and operational longevity, ensuring the product's usability without encountering potential hazards.

// //   c)Engineering Prototype
// //   We specialize in transforming ideas into reality through expertly crafted engineering prototypes. Our team of experienced engineers excels in creating functional prototypes that not only mirror your vision but also stand as a testament to the power of innovation. From intricate mechanical designs to cutting-edge electronics, we breathe life into concepts, ensuring they're well-prepared for the journey ahead.

// //   ii)3D CAD Modeling and Drafting
// //   Welcome to Triyas, where innovation meets precision in the realm of 3D CAD modeling and drafting. We are your trusted partner in transforming concepts into detailed digital designs, breathing life into your ideas, and setting the stage for exceptional product development.

// //   3D Modelling
// //   We are pioneers in harnessing the potential of 3D modeling in mechanical engineering. Our dedicated team of engineers and designers seamlessly translate concepts into intricate, lifelike digital models. With a keen eye for detail and a passion for innovation, we craft 3D representations that serve as the bedrock for groundbreaking products and solutions.

// //   a)Manufacturing Drawings
// //   We excel in transforming concepts into tangible reality through expertly crafted manufacturing drawings. Our team of skilled engineers possess an unmatched eye for detail, seamlessly translating design blueprints into precise directives for production. With meticulous care and a commitment to excellence, we ensure that your designs materialize flawlessly.

// //   b)Design Calculations
// //   We specialize in transforming conceptual designs into robust realities through meticulous design calculations. Our team of skilled engineers possess a deep understanding of mechanical principles, employing advanced analytical tools to ensure that your designs meet and exceed industry standards.

// //   c)Legacy Conversion
// //   We expertise in breathing new life into historical mechanical drawings through meticulous legacy conversion. Our adept team of engineers own a deep respect for tradition while embracing technological advancement. With utmost care, we convert legacy drawings into formats that not only preserve history but also lay the groundwork for future innovation.

// //   d)Preparation of Bill of Materials
// //   We specialize in crafting meticulous Bill of Materials documents that transform complex designs into structured realities. Our team of experienced engineers have an eye for detail, ensuring that every component finds its place in the grand design. With uncompromising precision, we create BOMs that guide projects from conception to fruition.

// //   iii)Reverse Engineering
// //   Reverse Engineering is a process that involves analyzing a product, device, or system to understand its design, structure, and functionality. This is typically done by taking an existing object, deconstructing it, and then creating detailed documentation or a digital model that reflects its original design and functionality.

// //   a)Legacy System Upgrades
// //   In situations where older technology or components are in use, our reverse engineering expertise empowers us to seamlessly replace or integrate newer parts while preserving compatibility with existing systems.

// //   b)Design Optimization
// //   We excel in design optimization, a pivotal process in engineering and product development. Our expertise lies in systematically refining and enhancing the design of products, components, or systems to achieve precise objectives. These objectives encompass heightened efficiency, superior performance, cost reduction, and enhanced sustainability.

// //   c)Tear-Down Approach
// //   Our 'Tear-Down Approach' in reverse engineering showcases our expertise in the systematic and meticulous disassembly and analysis of products, devices, or systems. This specialised approach allows us to gain a profound understanding of their design, constituent elements, materials, and functionality.

// //   2)CAE services
// //   i)FE Modeling & Meshing
// //   At Triyas, we excel in turning designs into precise digital simulations through advanced FEA modeling and meshing. Our skilled engineers use cutting-edge software for accurate virtual analysis, fostering innovation across various mechanical products.
// //   Transforming Designs into Digital Reality

// //   Precision FEA Modeling and Expert Meshing
// //   At Triyas, we specialize in turning designs into digital reality through expert FEA modeling and precise meshing. Our team of skilled engineers possess an unparalleled understanding of mechanical principles, employing cutting-edge software to simulate and optimize designs. With an unwavering focus on accuracy, we pave the way for innovation through virtual analysis. Expert Meshing for Diverse Mechanical Products: From Shell to Solid Elements

// //   ii)Static Analysis
// //   We offer cutting-edge engineering solutions that include static analysis using Finite Element Analysis (FEA). Static analysis is a crucial tool for understanding how structures and mechanical components perform under constant loads and boundary conditions.

// //   Linear Static Analysis
// //   We excel in solving linear static analysis, a method applied when there is a linear relationship between applied forces and displacements. This is particularly valuable in addressing structural challenges where stresses fall within the linear elastic range of the chosen material.

// //   Non-linear Static Analysis
// //   Nonlinear analysis involves the examination of scenarios in which a nonlinear connection exists between applied forces and displacements. Nonlinear effects can arise from factors such as geometric nonlinearity, material nonlinearity, and contact nonlinearity. These effects contribute to a stiffness matrix that undergoes variation during the application of loads, deviating from a constant value.

// //   iii)Thermal Analysis
// //   In engineering and product design, we excel in thermal analysis, comprehending heat transfer via conduction, convection, and radiation to optimise product thermal performance.

// //   Heat Transfer Modes and Product Performance
// //   There are three primary modes of heat transfer: conduction, convection, and radiation. When evaluating how a product
// //   responds to these heat transfer mechanisms, thermal analysis is employed to compute temperatures. This analysis aids in
// //   assessing the thermal performance of the product under varying conditions.
// //   Steady State
// //   At Triyas, we specialize in unravelling the mysteries of temperature equilibrium through expert Steady State Thermal Analysis. Our team of skilled engineers possess an intricate understanding of heat transfer principles, employing advanced simulation tools to predict thermal behaviour. With unwavering precision, we guide designs toward thermal excellence.

// //   Transient
// //   We excel in solving the complexities of dynamic temperature changes through expert Transient State Thermal Analysis. Our team of skilled engineers hold an in-depth understanding of heat dynamics, utilizing advanced simulation tools to predict transient thermal behaviour. With unwavering precision, we guide designs toward thermal excellence in fluctuating conditions.

// //   iv)Linear Dynamics
// //   In mechanical engineering, Linear Dynamics unravels the laws governing how objects respond to forces, enabling precise analysis of dynamic behavior in linear systems.


// //   Have You Explored the Fascinating World of Linear Dynamics in Mechanical Engineering?
// //   Step into a world where forces and motion intertwine, and equilibrium is the cornerstone of analysis. Linear Dynamics in mechanical engineering isn't just about movement; it's a journey through the laws that govern how objects respond to forces, translating complex interactions into mathematical precision. In the realm of mechanical design, Linear Dynamics stands as the key to understanding dynamic behaviour in linear systems.


// //   Frequency Analysis
// //   At Triyas, we expertise in unveiling the symphony of frequencies within mechanical systems through expert frequency analysis in linear & non-linear dynamics. Our skilled engineers possess a profound understanding of vibrational behaviour, utilizing advanced simulation tools to predict resonance patterns. With unwavering precision, we guide designs toward harmonic harmony and optimal performance.

// //   Shock Analysis
// //   We specialize in deciphering the intricacies of sudden impact through expert shock analysis. Our team of skilled engineers possess a profound understanding of material behaviour and impact dynamics, utilizing advanced simulation tools to predict and optimize designs. With unwavering precision, we ensure designs are fortified against unforeseen events.

// //   Random Vibration Analysis
// //   Random Vibration Analysis delves into the study of how structures respond to complex, unpredictable vibration inputs. It's an exploration of how materials, components, and systems react to dynamic loads that mimic real-world conditions. Through advanced simulations and statistical methods, we gain insights into the behavior of designs in scenarios where forces are inherently random.

// //   Sine Sweep Analysis
// //   Sine Sweep Analysis involves subjecting mechanical systems to varying frequency vibrations in a controlled manner. It's an exploration of how structures resonate and react to harmonic loads. By gradually through a range of frequencies, we gain insights into how designs respond, revealing potential resonances and weaknesses that might lead to vibrations and failure.

// //   v)Explicit Analysis
// //   Our expertise includes explicit finite element analysis, a method for simulating highly dynamic and transient events with precision and reliability.

// //   Drop Test Analysis
// //   We have expertise in deciphering the intricacies of sudden impacts through expert Drop Test Analysis. Our skilled engineers possess a profound understanding of material behavior and impact dynamics, utilizing advanced simulation tools to predict and optimize designs. With ultimate precision, we ensure designs are fortified against real-world drop tests.

// //   vi)MultiBody Dynamics
// //   We possess the capability to conduct multi-body dynamics simulations, a crucial tool for assessing the complex interactions between interconnected mechanical components. This enables us to optimize designs for superior performance, durability, and safety across various industries, from automotive to robotics.

// //   Rigid
// //   Rigid Multi-Body Dynamics involves studying the motion of interconnected rigid bodies within mechanical systems. It is an exploration of how components interact, collide, and influence each other's movement under the influence of forces and constraints. We excel in dealing with advanced simulations and mathematical models, and go insights into the dynamic behavior of systems comprising rigid bodies.

// //   Flexible
// //   Flexible Multi-Body Dynamics delves into the intricate world where motion and flexibility coalesce to define mechanical behavior. Unlike traditional rigid body dynamics that focus solely on rigid components, flexible multi-body dynamics considers the interaction between rigid and deformable elements within complex mechanical systems. Our approach bridges the gap between real-world complexities and simulations, offering a more accurate representation of how materials and components respond to forces, deformations, and vibrations.

// //   vii)Computational Fluid Dynamics
// //   We simplify the intricacies of computational fluid dynamics, enabling swift and effortless simulation of fluid flow, heat transfer, and fluid forces that hold paramount importance for your design considerations.

// //   Thermal Flow
// //   We step into a world where temperature orchestrates movement, and the subtle of energy shapes designs. We deal as thermal Flow in mechanical engineering is not just about heat; we study the complexity through the intricate pathways that heat energy follows within systems.

// //   Internal
// //   We possess the expertise to delve into the intricate movements of fluids within confined spaces, offering a window into their behavior that empowers our client's designs. Our Internal Flow Analysis capabilities extend to a range of applications, including pipes, ducts, and channels, where fluid dynamics shape the efficiency and performance of your systems. With advanced numerical simulations and sophisticated calculations, our skilled engineers navigate the complexities of fluid behavior. We explore how velocities, pressures, and temperatures evolve as fluids traverse intricate geometries, providing insights that drive optimization for efficiency, safety, and overall performance.

// //   External
// //   We bear the expertise to decipher the intricate moment of air or liquid interacting with surfaces, structures, or objects within an open environment. Our External Flow Analysis capabilities extend to understanding how velocities, pressures, and temperatures evolve as fluids gracefully flow over external contours.

// //   3)staffing
// //   i)staffing services
// //   We understand that finding the right talent for your organization is crucial to its success. We are dedicated to helping you discover the best candidates to drive your business forward. Our staffing services cover a wide range of industries and job categories, ensuring we meet your unique staffing needs.

// //   Why Choose Us as Your Partner ?
// //   We prioritise what we know best: delivering the ideal candidate for your contract or direct hire position. We're more than just a staffing agency; we're your strategic partner in cultivating a dynamic workforce.Our ability to identify exceptional talent ensures they seamlessly integrate into your team, contributing the creativity and enthusiasm that aligns with Triyas culture.

// //   Our Specializations
// //   We are having Expertise in
// //   We specialize in engineering, simulation, and product sales, offering expertise in these key areas.


// //   Advantages of Partnering with Us

// //   Industry Expertise
// //   With 22 years of mechanical industry expertise, we empower companies in design, simulation, and talent acquisition for cost-effective, data-driven success.

// //   Exceptional Talent
// //   We invest in sourcing top talent, saving your time and resources. Specializing in Engineering and Simulation, we turn the impossible into reality.

// //   Onsite Management Initiative
// //   We take pride in comprehensive support throughout careers, from top-notch service to recognition, rewards, and immigration support when needed.

// //   Workforce Offerings
// //   Whether it's contract or direct hire engagements, we provide an array of workforce and payroll options to perfectly match your staffing requirements.

// //   Round-the-Clock Support
// //   Our dedicated team is available 24/7 to provide tailored support and assistance, no matter the circumstances or requirements.

// //   Training
// //   With a vision to empower our customers through informed decisions, we offer specialized training solutions for Design & Simulation. Our focus is nurturing talent.

// //   Equity and Diversity
// //   We value diversity for its unique perspectives and actively seek candidates from varied backgrounds to shape a collective vision of the future.

// //   Employee Benefits
// //   We provide our employees with a comprehensive total rewards package encompassing salary and time-off benefits.`,

// //   `Resources`,

// // ]

const triyas  = [
 `About triyas: WHO WE ARE AND WHAT WE OFFER:
  At Triyas we create befitting solutions for advanced technology products with technological prowess. We make organizations explore design innovation and build game-changing products with great quality and less time to market.
  
  Our team of experts deliver uncompromising quality, timely design & engineering solutions, with out-of-the-box approach & strategic thinking. We help our clients design products that are radical breakthroughs. We aim to leverage latest technology trends with in-house excellence and streamlining processes.
  
  We strongly believe in building meaningful relationships with clients by providing them value.
  
  We are a team of technology, design, and business enthusiasts with over 20 years of combined industry experience. We've been delivering remarkable tech solutions along with an exceptional business value to ensure client satisfaction. We constantly aim to bring creativity, precision and passion in everything we take up
  
  WHY TRIYAS:
  1)Leading in CAD/CAE technology:
  Turn-key solution provider
  Technology management embedded in corporate strategy
  Comprehensive capabilities
  Thorough knowledge of development and production
  Strategic partnerships.
  2)Provide flexible work force:
  On site and offshore expandable capacity
  Flexible pool of experienced consultants
  Extensive project and product management experience
  State-of-the-art software and hardware.
  OUR VISION:
  Our vision is to simplify complexity in design with technological intelligence and innovation.
  
  OUR MISSION:
  Our mission is to help organizations build products that their consumers are looking forward to.
  `,
  
  `contact: Our Address
  
  Plot Number #682 Babukhan Rasheed Plaza Road #36, Jubilee Hills, Hyderabad 500033 India
  
  mobile: +919704477677
  
  mail: info@triyas.com
  
  for any inquiries fill the form in contact section`,
  `Products: 1) CAD: i) Creo: Creo Parametric:
  With Creo Parametric, innovate with advanced features and cutting-edge technologies. Simplify design iterations, reduce costs, and enhance quality.

  Benefits of Creo:
  - Lower Cost: Reduce material, labor, and overhead expenses.
  - Performance: Optimize designs for weight, reliability, and sustainability.
  - Time to Market: Accelerate product development and streamline processes.

  Creo 10 – New Features:
  - Usability and Productivity: Enhancements in CAD model management, composite design, electrification, ergonomics, simulation, and manufacturing.
  - Creo Composites: Design robust, lightweight products with customizable composite materials.
  - Creo Electrification: Tools for electric vehicles and electronic components.
  - Design for Ergonomics: Features for range of movement, vision, and user uniqueness.
  - Simulation Driven Design: Enhanced simulation tools and capabilities.
  - Additive and Subtractive Manufacturing: New lattice types and barrel tools for milling.

  PTC Creo 3D CAD Packages – Design the Future:
  - Creo+ SaaS CAD: Merges Creo features with cloud-based tools for collaboration and CAD administration.

  ii) Creo+ SaaS CAD
  - Real-Time Design: Access latest CAD features and cloud computing.
  - Accessibility: Automatic updates and improved accessibility.

  iii) Cloud-Native CAD & PDM
  - Onshape: Comprehensive suite including 3D CAD, PDM, and analysis tools.
  - onshape Features: Data Management, Collaboration, Workflow, Parts, Assemblies, Drawings, BOM, Configurations, Analytics, Integrations, Support, Security.

  2) Simulation i) Altair:
  5+
Years of Excellence

25+
Client's Satisfaction
  - SimSolid: Eliminates geometry preparation and meshing.
  - SimLab: Streamlines complex assembly analysis.
  - OptiStruct: Robust simulation capabilities.
  - Inspire Form: Enhances stamping simulation.
  - Inspire Cast: User-friendly casting simulation.
  - Inspire Extrude: Enhances profile feature understanding.
  - Inspire Mold: Streamlines injection molding design.
  - Inspire Print3D: Expedites 3D-printed parts design.
  - HyperMesh: Enhanced finite element modeling.
  - Radioss: Optimizes performance under dynamic loads.
  - MotionSolve: Simulates multi-body systems and assemblies.
  - CFD: Comprehensive tools for fluid dynamics.
  - HyperLife: Predicts product life under various loads.
  - HyperCrash: Automates finite element models for crash analysis.
  - HyperForm: Sheet metal forming simulation.
  - EDEM: Optimizes equipment design and granular material behavior.
  - FEKO: Electromagnetic simulation for high-frequency applications.
  - WinProp: Wave propagation and network planning.
  - FLUX: Electromechanical equipment simulation.
  - POLLEX: Electronics simulation and cross-discipline collaboration.
  - RapidMiner: Data analytics integration.
  - Monarch: Self-service data preparation.
  - Panopticon: Real-time insights for business users.

  3) PLM: i) Windchill
  - Market Growth: 15%
  - Increase Operational Efficiency: 50%
  - Businesses Considering PLM Critical: 59%
  - Worldwide Customers: 10K+
  - PLM Market Size (2020): 30%
  - Faster Leads Time: 50%
  - Benefits: Reduced costs, faster time to market, improved quality, enhanced collaboration.
  - Framework & Deployment: Modern architecture, secure collaboration, streamlined upgrades, admin and support, flexible delivery.

  4) AR/VR: Vuforia
  - Reduce Training and Labour Costs: Improve onboarding and cross-train users.
  - Improve Safety and Compliance: Limit risks, reduce compliance costs, ensure traceability.
  - Minimize Errors and Downtime: Optimize machine configurations, reduce errors, improve comprehension.

  Vuforia Products:
  - Vuforia Expert Capture: Create AR instructions and AI-enhanced inspections.
  - Vuforia Studio: Create immersive AR experiences.
  - Vuforia Engine: Popular AR software with advanced features.
  - Vuforia Chalk: Augmented reality remote assistance.

  5) Industrial IoT: i) ThingWorx
  - Maximize Revenue: Scale to new markets, unlock new business models.
  - Revolutionize: Faster market entry with IoT capabilities.
  - Reduce Costs: Increase productivity and efficiency.
  - Improve Quality: Enhance security, reliability, and satisfaction.
  - Maximize Flexibility: Deployment options for any industrial use case.

  6) SLM: Service Lifecycle Management
  - Increase Revenue and Profitability: Deliver top quality service and profitable spare part sales.
  - Service Lifecycle Management Steps: Link, Orchestrate, Implement, Enhance.

  7) ALM: Codebeamer
  - Features: Requirements Management, Quality Assurance & Testing, Risk Management.
  - Benefits: Simplifies complex product and software engineering, accelerates delivery, builds trust in products.`,

  `Services:
  1) Design Services:
  i) Product Design:
  Product Design:
  At the heart of our product design philosophy lies a commitment to innovation and excellence. We understand that product design is not just about aesthetics; it's about delivering outstanding user experiences, optimizing functionality, and ensuring manufacturability.

  a) Concept Ideation:
  - Design Ideation in Mechanical Engineering serves as the creative spark during conceptual design.
  - Emphasizes innovative approaches and strategies to enhance creativity.

  b) Detailed Design:
  - Focuses on creating detailed drawings and specifications for efficient manufacturing.
  - Includes concerns of manufacturability, clearances, and operational longevity.

  c) Engineering Prototype:
  - Specializes in creating functional prototypes that mirror vision and stand as testaments to innovation.
  - Covers intricate mechanical designs and cutting-edge electronics.

  ii) 3D CAD Modeling and Drafting:
  - Triyas transforms concepts into detailed digital designs, setting the stage for exceptional product development.

  3D Modelling:
  - Pioneers in 3D modeling in mechanical engineering, translating concepts into lifelike digital models.

  a) Manufacturing Drawings:
  - Expertly transforms concepts into precise manufacturing directives.

  b) Design Calculations:
  - Ensures designs meet industry standards through advanced analytical tools.

  c) Legacy Conversion:
  - Converts historical mechanical drawings into new formats preserving history and enabling future innovation.

  d) Preparation of Bill of Materials:
  - Creates detailed BOMs that guide projects from conception to fruition.

  iii) Reverse Engineering:
  - Analyzes a product to understand its design, structure, and functionality.

  a) Legacy System Upgrades:
  - Integrates newer parts with existing systems while preserving compatibility.

  b) Design Optimization:
  - Refines designs to achieve efficiency, performance, cost reduction, and sustainability.

  c) Tear-Down Approach:
  - Systematic disassembly and analysis of products to understand design and functionality.

  2) CAE Services:
  i) FE Modeling & Meshing:
  - Converts designs into precise digital simulations through FEA modeling and meshing.

  Precision FEA Modeling and Expert Meshing:
  - Utilizes cutting-edge software for accurate virtual analysis.

  ii) Static Analysis:
  - Uses FEA to understand structural performance under constant loads.

  Linear Static Analysis:
  - Applied where there is a linear relationship between forces and displacements.

  Non-linear Static Analysis:
  - Examines scenarios with nonlinear relationships between forces and displacements.

  iii) Thermal Analysis:
  - Comprehends heat transfer via conduction, convection, and radiation to optimize product performance.

  Heat Transfer Modes and Product Performance:
  - Analyzes conduction, convection, and radiation effects on thermal performance.

  Steady State:
  - Predicts temperature equilibrium using advanced simulation tools.

  Transient:
  - Solves complexities of dynamic temperature changes and transient thermal behavior.

  iv) Linear Dynamics:
  - Analyzes dynamic behavior in linear systems.

  Frequency Analysis:
  - Predicts resonance patterns and harmonic behavior in mechanical systems.

  Shock Analysis:
  - Analyzes material behavior and impact dynamics in sudden impact scenarios.

  Random Vibration Analysis:
  - Studies how structures respond to complex, unpredictable vibration inputs.

  Sine Sweep Analysis:
  - Explores resonance and potential weaknesses through controlled frequency vibrations.

  v) Explicit Analysis:
  - Simulates highly dynamic and transient events with precision.

  Drop Test Analysis:
  - Predicts and optimizes designs against real-world drop tests.

  vi) MultiBody Dynamics:
  - Assesses interactions between interconnected mechanical components for optimized performance.

  Rigid:
  - Studies motion of interconnected rigid bodies within mechanical systems.

  Flexible:
  - Examines interactions between rigid and deformable elements in complex systems.

  vii) Computational Fluid Dynamics:
  - Simulates fluid flow, heat transfer, and fluid forces for design considerations.

  Thermal Flow:
  - Analyzes how heat energy moves within systems.

  Internal:
  - Delves into fluid movements within confined spaces.

  External:
  - Deciphers how fluids interact with surfaces and objects in open environments.

  3) Staffing:
  i) Staffing Services:
  - Provides comprehensive staffing solutions across various industries and job categories.

  Why Choose Us as Your Partner?
  - Delivers ideal candidates for contract or direct hire positions.
  - Acts as a strategic partner in cultivating a dynamic workforce.

  Our Specializations:
  - Expertise in engineering, simulation, and product sales.

  Advantages of Partnering with Us:
  - Industry Expertise: 22 years in mechanical industry.
  - Exceptional Talent: Sources top talent specializing in Engineering and Simulation.
  - Onsite Management Initiative: Comprehensive support including immigration support.
  - Workforce Offerings: Contract or direct hire engagements.
  - Round-the-Clock Support: 24/7 tailored support.
  - Training: Specialized training solutions for Design & Simulation.
  - Equity and Diversity: Valuing diverse perspectives and backgrounds.
  - Employee Benefits: Comprehensive rewards package including salary and time-off benefits.`

]

export const maxDuration = 30;

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(5, '30s'),
});

export async function POST(req: NextRequest) {
  const ip = req.ip ?? 'ip';
  const { success, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return new Response('Ratelimited!', { status: 429 });
  }

  const { messages } = await req.json();

  const result = await streamText({
    model: groq('llama3-8b-8192'),
    system: `You are a chatbot who answers questions about triyas's website only.
    Here is the information you know: ${triyas}.
    You only reply with information found in the above info. If you can't get your answer from there, say you don't know.
    No matter what the user asks do not search outside of the information you know.`,
    messages,
  });

  return result.toDataStreamResponse();
}
