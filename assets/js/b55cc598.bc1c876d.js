"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7500],{26732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},r="Decentralized Invoice",o={unversionedId:"applications/decentralized_invoice",id:"applications/decentralized_invoice",title:"Decentralized Invoice",description:"- Team Name: TwinP",source:"@site/docs/applications/decentralized_invoice.md",sourceDirName:"applications",slug:"/applications/decentralized_invoice",permalink:"/Grants-Program/applications/decentralized_invoice",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/decentralized_invoice.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Winner of a small grant to build an Escrow system on top of substrate",id:"winner-of-a-small-grant-to-build-an-escrow-system-on-top-of-substrate",level:3},{value:"Team Github",id:"team-github",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement create_invoice functionality",id:"milestone-1--implement-create_invoice-functionality",level:3},{value:"Milestone 2 \u2014 Implement show_all_invoices functionality",id:"milestone-2--implement-show_all_invoices-functionality",level:3},{value:"Milestone 3 \u2014 Implement pay_invoice functionality",id:"milestone-3--implement-pay_invoice-functionality",level:3},{value:"Future Plans",id:"future-plans",level:2}],u={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decentralized-invoice"},"Decentralized Invoice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," TwinP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xd042e53e22e9f941ceba02f4adb9d1b32ef43675"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will build a decentralized invoice system."),(0,i.kt)("li",{parentName:"ul"},"Business and clients can pay and create invoices."),(0,i.kt)("li",{parentName:"ul"},"Keep track of create/pay invoices."),(0,i.kt)("li",{parentName:"ul"},"The system can be used by B2B, B2C, C2C.")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"We aim to build a decentralized invoice system that will help businesses/clients create/pay bills for given services.\nWe will use substrate node template to build our pallet."),(0,i.kt)("p",null,"Pallet name: InvoicePallet"),(0,i.kt)("p",null,"Methods:"),(0,i.kt)("p",null,"1- create_invoice(amount, from  // It is optional, reason (msg is option), to)\n-> This method will create an invoice that should be paid."),(0,i.kt)("p",null,"2- show_all_invoices(from)\n-> This method will show: Date, from, to, amount and status. Status can be to be Awaiting Payment/Payed"),(0,i.kt)("p",null,"3- pay_invoice(to)\n-> send the amount to the receiver and change the status of invoice from Awaiting Payment to Payed"),(0,i.kt)("p",null,"A similar product has been made by Request Network. They do have some products and one of them is similar\nto the one I would like to build: ",(0,i.kt)("a",{parentName:"p",href:"https://create.request.network/"},"https://create.request.network/"),"\nThey have used ethereum and solidity and we are gonna use substrate and rust."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Businesses and clients who would like to create and pay invoices.")),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MSc Eljo Prifti - Substrate/Rust developer with proven experience. Contributor to substrate open source repositories."),(0,i.kt)("li",{parentName:"ul"},"Eng Gerti Prifti - Substrate/Rust developer with proven experience")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," MSc Eljo Prifti"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:elioprifti@gmail.com"},"elioprifti@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/elioprifti/"},"https://www.linkedin.com/in/elioprifti/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:"),"  We do not have any registered address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," We do not have any registered legal entity")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Hello, my name is Elio. I have a master's degree in computer science and I have more than 6 years of experience as a professional software developer in the Android/Java developer in the market. I have been deeply fascinated by blockchain and discovered Substrate. I have spent 1+ year learning/contributing to Rust/Substrate.I am a contributor to the Substrate recipes repo,\xa0 taking it upon myself to upgrade Substrate \u201cKitchen Node\u201d Recipes from v1 to v2, which took 5-6 months working in my spare time."),(0,i.kt)("p",null,"Hello, my name is Gerti. Over the last 5 years, I've been continuously working towards achieving clients' business goals through the application of IT technology. The collaborations I've had working in a few industries brought to life numerous products with an audience of thousands and even millions of users. The secret behind this success was creating an intuitive, visually attractive application customized to the needs of the target clientele.In addition to the substantial experience working as a Java Enterprise, I've also gained a Master's Degree in Computer Science that has equipped me with a strong knowledge of the newest tools and technologies to create flawless products your clients will enjoy.For the last few years, I have been curious about Substrate/Rust, and I am learning it in my spare time."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/JoshOrndorff/recipes/pull/471"},"https://github.com/JoshOrndorff/recipes/pull/471")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/herou/recipes"},"https://github.com/herou/recipes"))),(0,i.kt)("h3",{id:"winner-of-a-small-grant-to-build-an-escrow-system-on-top-of-substrate"},"Winner of a small grant to build an Escrow system on top of substrate"),(0,i.kt)("p",null,"Deliver everything on time and meet all the requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1094"},"https://github.com/w3f/Grants-Program/pull/1094")," - Winner of Grant Level 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/herou/EscrowPallet"},"https://github.com/herou/EscrowPallet")," - Source code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/599"},"https://github.com/w3f/Grant-Milestone-Delivery/pull/599")," - Milestone 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/566"},"https://github.com/w3f/Grant-Milestone-Delivery/pull/566")," - Milestone 2 and 3")),(0,i.kt)("h3",{id:"team-github"},"Team Github"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eljo : ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/herou"},"https://github.com/herou")),(0,i.kt)("li",{parentName:"ul"},"Gerti: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gertt"},"https://github.com/gertt"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MSc Eljo Prifti: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/elioprifti/"},"https://www.linkedin.com/in/elioprifti/")),(0,i.kt)("li",{parentName:"ul"},"Eng Gerti Prifti: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/gertiprifti/"},"https://www.linkedin.com/in/gertiprifti/"))),(0,i.kt)("h2",{id:"development-status"},"Development Status"),(0,i.kt)("p",null,"We would like to use the Substrate template node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-node-template"},"Substrate node template"))),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},"Full-Time Equivalent (FTE): 2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $10,000 USDT")),(0,i.kt)("h3",{id:"milestone-1--implement-create_invoice-functionality"},"Milestone 1 \u2014 Implement create_invoice functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Estimated Duration: 1 month"),(0,i.kt)("li",{parentName:"ul"},"FTE: 2"),(0,i.kt)("li",{parentName:"ul"},"Costs: $3,333 USDT")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how create_invoice works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains how the decentralized invoice system works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking will be provided for create_invoice.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0f."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: create_invoice"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will create an invoice.")))),(0,i.kt)("h3",{id:"milestone-2--implement-show_all_invoices-functionality"},"Milestone 2 \u2014 Implement show_all_invoices functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Estimated Duration: 1 month"),(0,i.kt)("li",{parentName:"ul"},"FTE: 2"),(0,i.kt)("li",{parentName:"ul"},"Costs: $3,333 USDT")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how show_all_invoices works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains how the decentralized invoice system works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking will be provided for show_all_invoices.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0f."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: show_all_invoices"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will show all the invoices.")))),(0,i.kt)("h3",{id:"milestone-3--implement-pay_invoice-functionality"},"Milestone 3 \u2014 Implement pay_invoice functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Estimated Duration: 1 month"),(0,i.kt)("li",{parentName:"ul"},"FTE: 2"),(0,i.kt)("li",{parentName:"ul"},"Costs: $3,333 USDT")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how pay_invoice works")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains how the decentralized invoice system works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking will be provided for pay_invoice.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0f."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: pay_invoice"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will pay an invoice.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Building front-end using React to interact with pallet and using metamask/polkadot wallet to create/pay/show invoices.")))}d.isMDXComponent=!0}}]);