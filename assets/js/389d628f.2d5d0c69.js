"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[28231],{22178:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},l="Static Analysis of Runtime Pallets",s={unversionedId:"docs/RFPs/Under Development/Static-Analysis-for-Runtime-Pallets",id:"docs/RFPs/Under Development/Static-Analysis-for-Runtime-Pallets",title:"Static Analysis of Runtime Pallets",description:"Status:* Under Development",source:"@site/docs/RFPs/Under Development/Static-Analysis-for-Runtime-Pallets.md",sourceDirName:"docs/RFPs/Under Development",slug:"/docs/RFPs/Under Development/Static-Analysis-for-Runtime-Pallets",permalink:"/docs/RFPs/Under Development/Static-Analysis-for-Runtime-Pallets",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Under Development/Static-Analysis-for-Runtime-Pallets.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Browser based IDE for ink! Smart Contracts",permalink:"/docs/RFPs/Under Development/IDE_for_ink_Smart_Contracts"},next:{title:"Alternative javascript console for Polkadot JS API",permalink:"/docs/RFPs/Under Development/alternative-polkadot-js-api-console"}},o={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables",id:"deliverables",level:2}],p={toc:d},c="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-analysis-of-runtime-pallets"},"Static Analysis of Runtime Pallets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/sarp-basic-functionality.md"},"Under Development")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh"},"Bhargav Bhatt"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"David Hawig"))),(0,i.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/fundamentals/runtime-development/"},"Runtime Pallets")," are modules for writing the business logic of blockchains in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," (a Rust framework fo rbuilding blockchians). These are usually concise pieces of standalone code with relatively few dependencies and clear specifications, hence tractable targets for performing static analysis and verification. We would like to develop tools and techniques to perform static analysis with reasonable soundness guarantees. In particular, we would like to target vunerability classes that are detectable using dataflow analysis techniques like ",(0,i.kt)("em",{parentName:"p"},"tag analysis")," and ",(0,i.kt)("em",{parentName:"p"},"taint analysis"),". Just to give a flavor, relevant might vulnerabilities include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/incorrect-origin/description.md"},"incorrect origin")," of dispatchable functions. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/unsigned-transaction/description.md"},"unsigned transaction")," validation."),(0,i.kt)("li",{parentName:"ul"},"tracking bad randomness: ensure bad randomness does not leak into sensitive functions."),(0,i.kt)("li",{parentName:"ul"},"detect panics statically to avoid potential DoS attacks: these include ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/arithmetic-overflow/description.md"},"unsafe arithmetic operations"),", access outside bounds, assertion failures, etc."),(0,i.kt)("li",{parentName:"ul"},"tracking unsanitised input leakage for sensitive functions.")),(0,i.kt)("p",null,"We seek applications that either extend existing static analysers for rust like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/MIRAI/"},"MIRAI"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.pm.inf.ethz.ch/research/prusti.html"},"Prusti"),", or build Rust front-ends to static analysis engines. Our preliminary feasibility study shows that MIRAI would be a good starting point as it includes a tag analysis framework, however, we are open to other tools and techniques. "),(0,i.kt)("h2",{id:"deliverables"},"Deliverables"),(0,i.kt)("p",null,"The deliverables listed are an innitial draft and can be modified taking into consideration the interests of the applicant. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"A document describing the design decisions for the tool and modeling of vulnerabilities. Clear usage guideline along with the trade-off of different modes if any.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Test-suite which exercises various features.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"A brief outreach article describing the high-level technique used and outcomes of the grant, including  asample of minimal examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Tool"),(0,i.kt)("td",{parentName:"tr",align:null},"A robust static analysis tool that works on Subsstrate runtime pallets and analyses vulnerabilities classes described above.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Engaegment"),(0,i.kt)("td",{parentName:"tr",align:null},"Engage with teams at Web3 Foundation and Parity to prioritise targeting vulnerability classes.")))))}u.isMDXComponent=!0}}]);