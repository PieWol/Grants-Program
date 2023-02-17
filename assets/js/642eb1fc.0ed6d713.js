"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8937],{82396:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(8209);const r={},l="Polkadot.{js} Desktop Application",i={unversionedId:"applications/polkadot-desktop-app",id:"applications/polkadot-desktop-app",title:"Polkadot.{js} Desktop Application",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/applications/polkadot-desktop-app.md",sourceDirName:"applications",slug:"/applications/polkadot-desktop-app",permalink:"/Grants-Program/applications/polkadot-desktop-app",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/polkadot-desktop-app.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Package as Electron App",id:"package-as-electron-app",level:4},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Account creation redesign and visual improvements",id:"account-creation-redesign-and-visual-improvements",level:4},{value:"Milestone 3",id:"milestone-3",level:3},{value:"Improve User Experience in Accounts app",id:"improve-user-experience-in-accounts-app",level:4},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Work done so far",id:"work-done-so-far",level:3},{value:"Have you applied for other grants so far?",id:"have-you-applied-for-other-grants-so-far",level:3},{value:"Similar projects",id:"similar-projects",level:3}],d={toc:p},m="wrapper";function u(t){let{components:e,...a}=t;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"polkadotjs-desktop-application"},"Polkadot.{js} Desktop Application"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/EthWorks/"},"EthWorks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," 37hdwwNqXHMrni1WGHruwWVzUy5kmsEfJs")),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot.{js}")," web application is now widely used to interact with Polkadot-based networks (Kusama, Alexander etc.). Soon it will also be a go-to app for the Polkadot Mainnet."),(0,o.kt)("p",null,"There are two problems which we\u2019d like to address with this development effort:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"So far, this application is feature-rich, but hard to use, especially for beginners."),(0,o.kt)("li",{parentName:"ol"},"The default way of holding the account secrets is browser\u2019s local storage. It\u2019s not a safe way to hold user\u2019s private keys")),(0,o.kt)("p",null,"We\u2019d like to package the app as a desktop application. This implies a change to the way accounts information is stored. Instead of browser\u2019s local storage we\u2019d use the filesystem for that, which is a much safer option.\nTo make it easier to use the application, especially for new users, we will work on improving the look and feel and UX experience, starting with the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," section."),(0,o.kt)("p",null,"Our team worked previously on Polkadot.{js} Browser Extension. We already have a decent understanding of the Polkadot frontends and theirs UX shortcomings."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Members:")," Krzysztof, Natalia, Bartek, Ivan, optionally other developers at Ethworks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LinkedIn Profiles:")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/krzysztofjelski/"},"Krzysztof"),", ",(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/nkirejczyk/"},"Natalia"),", ",(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bart%C5%82omiej-rutkowski-958751118/"},"Bartek"),", ",(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ivan-rukhavets-904ba7146/"},"Ivan")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/apps"},"https://github.com/polkadot-js/apps")," (the repo we want to contribute to)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://ethworks.io"},"https://ethworks.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Legal Structure:"),(0,o.kt)("br",null),"\nEthworks sp z o.o.",(0,o.kt)("br",null),"\nVAT ID: PL7010771665.",(0,o.kt)("br",null),"\nIgnacego Krasickiego 35",(0,o.kt)("br",null),"\n02-611 Warsaw, Poland",(0,o.kt)("br",null),"\nOffice:",(0,o.kt)("br",null),"\nCzeczota 29",(0,o.kt)("br",null),"\n02-606 Warsaw, Poland"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team's Experience:"))),(0,o.kt)("p",null,"We have been actively involved in the Ethereum ecosystem for many years, many of us even before Ethworks was founded. During this time we had the opportunity to build many widely used tools such as Ethereum.rb (the ethereum library for the Ruby language) or Waffle (a library for writing and testing smart contracts)."),(0,o.kt)("p",null,"For our clients we have developed numerous customer-facing dApps. We not only know how to create robust and reliable software, but also clean, modern and user-friendly UI. Our design team had pleasure to work with such great brands as Ethereum Foundation, Bitcoin or IOTA."),(0,o.kt)("p",null,"Additionally members of Ethworks are building Universal Login, a tool for storing funds and connecting to Ethereum applications, aiming to simplify on-boarding of new users."),(0,o.kt)("p",null,"In a previous ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/polkadot_js_chrome_extension.md"},"grant from W3F"),", we did an UX-overhaul of Polkadot.{js} extension and extended it with useful features."),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1.25"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 3,37 BTC")),(0,o.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,o.kt)("h4",{id:"package-as-electron-app"},"Package as Electron App"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:")," 1.25"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 1,12 BTC")),(0,o.kt)("p",null,"First step will be to convert the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot.{js} web application")," into a desktop application. We\u2019ll use ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron")," for that."),(0,o.kt)("p",null,"To make the application functional, we need to change the storage of accounts. So, instead of using browser\u2019s local storage, we\u2019ll store the accounts encrypted on the filesystem."),(0,o.kt)("p",null,"Part of the work will be the setup of CI/CD pipeline, including application signing and preparing packages for multiple platforms."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/"},"Polkadot.{js} web application")," as an Electron app"),(0,o.kt)("td",{parentName:"tr",align:null},"Functionality of the current web app delivered as a desktop app")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Redesigned account storage"),(0,o.kt)("td",{parentName:"tr",align:null},"Feature of using the filesystem to store encrypted accounts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Continuous Integration environment"),(0,o.kt)("td",{parentName:"tr",align:null},"Pipeline that build the desktop applications and runs automated tests on it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4."),(0,o.kt)("td",{parentName:"tr",align:null},"Continuous Delivery to automate packaging for Mac, Windows and Linux"),(0,o.kt)("td",{parentName:"tr",align:null},"Pipeline that creates release packages of the application for 3 operating system)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"Updates to the relevant documentation where needed")))),(0,o.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,o.kt)("h4",{id:"account-creation-redesign-and-visual-improvements"},"Account creation redesign and visual improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:")," 1.25"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 1,12 BTC")),(0,o.kt)("p",null,"We\u2019d like to improve ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),", the part of the application new users will mostly interact with. Thus we want to start with a redesign of this section in Milestone 2."),(0,o.kt)("p",null,"New designs will be more inviting to the users. We'll improve usability of account creation features by redesigning the flows and interactions."),(0,o.kt)("p",null,"As part of the design we\u2019ll create new visual components (sidebar, buttons, notifications, etc.)."),(0,o.kt)("p",null,"Here's how we envision the Accounts list:\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/KhKdMwl.png",alt:"Preliminary design - Accounst list"}),"\nThe following two designs are a result of our re-thinking of the user onboarding process. In this milestone we won't be working on the user onboarding yet. However, we might use parts of the following designs in the account creation modals.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/sO51bph.png",alt:"Preliminary design - First account creation"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/C9ys8Pn.png",alt:"Preliminary design - Adding a new account"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Accounts design"),(0,o.kt)("td",{parentName:"tr",align:null},"Design of ",(0,o.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," application, including sidebar and visual components (in Figma).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Updated UX flow for Account creation"),(0,o.kt)("td",{parentName:"tr",align:null},"Implement redesigned account creation flow. Password validation improvements.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Initial Style Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Document containing color palette and UI components for the application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4."),(0,o.kt)("td",{parentName:"tr",align:null},"Implement new style"),(0,o.kt)("td",{parentName:"tr",align:null},"Implement parts of the new designs, including consistent font usage, new navigation, minor improvements of layout and dark mode.")))),(0,o.kt)("h3",{id:"milestone-3"},"Milestone 3"),(0,o.kt)("h4",{id:"improve-user-experience-in-accounts-app"},"Improve User Experience in Accounts app"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:")," 1.25"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 1,13 BTC")),(0,o.kt)("p",null,"In this Milestone we'll tackle usability issues with ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),"."),(0,o.kt)("p",null,"Currently, users face following difficulties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cannot see at a glance the totals of their balances across all accounts"),(0,o.kt)("li",{parentName:"ul"},"account names cannot be edited"),(0,o.kt)("li",{parentName:"ul"},"accounts list default sort is not intuitive and cannot be changed by the user"),(0,o.kt)("li",{parentName:"ul"},"unlock is not next to the locked balance, but in the drop down menu"),(0,o.kt)("li",{parentName:"ul"},"some information provided in the accounts list gives little value to users (eg. type, tags, transactions count) and could be hidden in some detail view"),(0,o.kt)("li",{parentName:"ul"},"expanding balances messes up the table layout"),(0,o.kt)("li",{parentName:"ul"},"account modals don't react to keyboard, e.g. Enter to confirm or Escape to quit")),(0,o.kt)("p",null,"For sure coming up with an effective design will require some iterating over wireframes/prototypes, and possibly also with implementations."),(0,o.kt)("p",null,"Code-wise, we'll remove dependencies on SUI library components where possible. Also, we're going to add more unit and UI automated tests and remove code duplication where possible."),(0,o.kt)("p",null,"For a more detailed preliminary backlog, consult ",(0,o.kt)("a",{parentName:"p",href:"https://workflowy.com/s/accounts-backlog/9ppyPN0DpdNL3vG5"},"this list"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Accounts list redesign"),(0,o.kt)("td",{parentName:"tr",align:null},"Figma design that solve all usability issues mentioned above")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Accounts list implementation"),(0,o.kt)("td",{parentName:"tr",align:null},"Implementing the designs in Polkadot-JS apps")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Accounts sidebar implementation"),(0,o.kt)("td",{parentName:"tr",align:null},"Re-Implementing the sidebar that pops up after clicking on an account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4."),(0,o.kt)("td",{parentName:"tr",align:null},"Accounts App modals improvements"),(0,o.kt)("td",{parentName:"tr",align:null},"Improve usability and consistency in Account modal, eg. Derive, Add Proxy. Remove code duplication between Create and Derive")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation updates"),(0,o.kt)("td",{parentName:"tr",align:null},"We'll add or update the relevant documentation where needed, including screenshots in polkadot wiki")))),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("h3",{id:"work-done-so-far"},"Work done so far"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.figma.com/proto/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=763%3A81&viewport=-213%2C-44%2C0.2232329249382019&scaling=min-zoom"},"Preliminary designs"))),(0,o.kt)("h3",{id:"have-you-applied-for-other-grants-so-far"},"Have you applied for other grants so far?"),(0,o.kt)("p",null,"We have successfully applied for a grant on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/polkadot_js_chrome_extension.md"},"Polkadot.{js} Extension"),". We are now awaiting acceptance of the last milestone of this grant."),(0,o.kt)("h3",{id:"similar-projects"},"Similar projects"),(0,o.kt)("p",null,"We're aware of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstrateIDE.md"},"SubstrateIDE")," project, which also uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron")," to package the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot.{js}")," app. However, in case of this project the focus is on providing a developer environment, of which the Polkadot Apps is just a part. In our grant application we focus more on providing an end-user solution."))}u.isMDXComponent=!0}}]);