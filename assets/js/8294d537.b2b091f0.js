"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6949],{21588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(8209);const i={},r="PESA - On-ramp/off-ramp to crypto/local currencies for Polkadot",o={unversionedId:"applications/pesa_pallet",id:"applications/pesa_pallet",title:"PESA - On-ramp/off-ramp to crypto/local currencies for Polkadot",description:"Proposer:* jdoshi1",source:"@site/docs/applications/pesa_pallet.md",sourceDirName:"applications",slug:"/applications/pesa_pallet",permalink:"/Grants-Program/applications/pesa_pallet",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/pesa_pallet.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"PESA pallet",id:"pesa-pallet",level:4},{value:"Interface and Design",id:"interface-and-design",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Implement Substrate Pallet &quot;PESA&quot;",id:"milestone-1---implement-substrate-pallet-pesa",level:3},{value:"Milestone 2 \u2014 PESA pallet send, receive tokens using phone number and reverse lookup",id:"milestone-2--pesa-pallet-send-receive-tokens-using-phone-number-and-reverse-lookup",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pesa---on-rampoff-ramp-to-cryptolocal-currencies-for-polkadot"},"PESA - On-ramp/off-ramp to crypto/local currencies for Polkadot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jdoshi1"},"jdoshi1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 3K37k6BQ1JwAczAyNzckS4cGRqhpL6UgYJ"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/69#issuecomment-844289904"},"Terminated"))),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"PESA is a decentralized cross-chain mobile money protocol that enables anyone to buy, sell, send, receive, lend, borrow - crypto, and mobile money (i.e. tokenized minutes, data, WiFi) globally using a phone number."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The goal of this project is to make telecom and financial services open and accessible to all. Anyone with a mobile phone can utilize PESA to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Access carrier-independent voice, text, data & WiFi (mobile money) "),(0,l.kt)("li",{parentName:"ul"},"Send/receive crypto and mobile money to/from any phone number "),(0,l.kt)("li",{parentName:"ul"},"Buy/sell crypto and mobile money using a phone number"),(0,l.kt)("li",{parentName:"ul"},"Lend, borrow, crypto assets using a phone number")),(0,l.kt)("p",null,"PESA is structured as a decentralized carrier and acts as a mobile money system. The traditional mobile money systems like ",(0,l.kt)("a",{parentName:"p",href:"https://www.vodafone.com/what-we-do/services/m-pesa"},"m-pesa")," use phone numbers to uniquely identify users. Similarly, PESA uses tokenized phone numbers. A phone number is universal across chains and mapped to respective wallet addresses."),(0,l.kt)("p",null,"PESA aims to serve as an on-ramp/off-ramp to crypto/local currencies for the Polkadot users, applications, and developers. This is enabled by allowing users to purchase tokenized voice, text, data and WiFi credits using credit card, cryptocurrencies and eventually cash. To achieve this, we can either create our own Substrate-based blockchain or Parachain or work with Parachains like Plasm, Moonbeam, Acala, etc."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"As a first step, we are proposing creating a pallet to perform Phone Number to Address resolution, reverse resolution, and execute transactions such as send & receive - crypto tokens, mobile money (i.e. tokenized minutes, data and WiFi) using phone numbers. "),(0,l.kt)("h4",{id:"pesa-pallet"},"PESA pallet"),(0,l.kt)("p",null,"The goal of PESA pallet is to resolve the phone number to an address and allow the phone number to execute transactions - send, receive. It will be extensible to allow more functionality like lend & borrow, etc. Furthermore, it will be beneficial to dapps building financial systems (DeFi) including allowing unbanked users to onboard onto the system by just using a phone number."),(0,l.kt)("h4",{id:"interface-and-design"},"Interface and Design"),(0,l.kt)("p",null,"The PESA pallet will expose the following callable functions:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"register")," - allows the user to register a Phone Number to its address"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," - allows any user to resolve a Phone Number to an address"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reverse_look_up")," - allows the user to look up Phone Number from an address. Provided the owner of the phone number/address opted to make it public."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"transfer")," - allows the owner of the Phone Number/address to transfer ownership of the Phone number to another address."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"send")," - allows the owner to send tokenized mobile money (i.e. mins, data and wifi)  and other tokens built on the parachain(s) using the Phone Number"),(0,l.kt)("p",null,"Mockups of PESA Dapp "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Register Phone number with wallet address"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/486098447410266112/766581062062702602/Screen_Shot_2020-10-16_at_1.14.08_AM.png",alt:"Register"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Verify Phone number ownership"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/486098447410266112/766581059923738694/Screen_Shot_2020-10-16_at_1.15.35_AM.png",alt:"Verify"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Send transaction"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/486098447410266112/766581053937942528/Screen_Shot_2020-10-16_at_1.39.04_AM.png",alt:"Send"})))),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"All web and mobile wallets like Airgap and Polkawallet can use PESA pallet to resolve phone numbers and access other pallet functions mentioned above. DeFi applications can also use the pallet to allow users to access financial services using a phone number."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Suruchi Gupta (Founder & CEO)"),(0,l.kt)("li",{parentName:"ul"},"Jinesh Doshi (Engineering head)"),(0,l.kt)("li",{parentName:"ul"},"Leo Anbarasan M (Tech Lead/ Lead developer)")),(0,l.kt)("h3",{id:"team-website"},"Team Website"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wificoin.com"},"https://wificoin.com")," (PESA website WIP)")),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"Wificoin, a Delaware C corporation, 3165 Olin Ave, San Jose, CA 95117. We also have \u201cWificoin Foundation\u201d incorporated in Panama. "),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"The team has extensive experience building and shipping web, mobile apps, and DevOps tools. Suruchi and Jinesh are co-founders and both hold a Masters in Computer Science. Prior to founding Wificoin, Suruchi was a full stack developer and Tech Lead at Juniper Networks. Jinesh in his most recent role is a Senior Developer at Salesforce, building DevOps tools. Leo has been building web2 applications for the last 12+ years. "),(0,l.kt)("p",null,"In the last year, Wificoin has built a pay-as-you-go, mobile-first carrier (a precursor to the decentralized carrier), that offers on-demand voice, text, data, and WiFi globally without needing to swap sim cards. Today, Wificoin users can access the internet on mobile via LTE eSIM in 45 countries (soon 113 countries), on the ground at 68M+ hotspots in 180 countries, on flights at 5000+ airplanes on 37 airlines (55% market penetration). In addition, users can call and text in 200 countries and get local phone numbers in US & Canada (soon 10 countries). Wificoin apps have been featured as a #1 Top grossing app in the Travel category several times. Over 11M credits (proxy for token) have been consumed by users. "),(0,l.kt)("p",null,"The team has also integrated with Telecom operators like AT&T, Claro, etc."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"No public repos to share yet.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Apps in App store & Play store:"),(0,l.kt)("p",{parentName:"li"},"Wificoin - ",(0,l.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/wificoin-gogo-inflight-wifi/id1444024115"},"iOS"),", ",(0,l.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=co.wificoin.app"},"Android")),(0,l.kt)("p",{parentName:"li"},"Hoom - ",(0,l.kt)("a",{parentName:"p",href:"https://apps.apple.com/lr/app/hoom-second-line-phone-number/id1508691693"},"iOS"),", ",(0,l.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=io.hoom.app"},"Android")))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/guptasuruchi/"},"https://www.linkedin.com/in/guptasuruchi/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jineshdoshi2610/"},"https://www.linkedin.com/in/jineshdoshi2610/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/leo-anbarasan-m-2b0b3a71/"},"https://www.linkedin.com/in/leo-anbarasan-m-2b0b3a71/"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 2 BTC")),(0,l.kt)("h3",{id:"milestone-1---implement-substrate-pallet-pesa"},'Milestone 1 - Implement Substrate Pallet "PESA"'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 1 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate pallet: PESA"),(0,l.kt)("td",{parentName:"tr",align:null},"1. Pallet will expose a function called register to allow caller to register the phone number to their wallet address",(0,l.kt)("br",null),"2. Pallet will allow users to perform Phone Number to address look up.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Create a dapp"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a custom chain with the PESA pallet and a dapp to allow users to enter a phone number and associate that with the owner's wallet address. Users will be able to perform address lookup by providing a phone number. Dapp will be in Angular/Javascript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. Readme will provide details on how to run the tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide a docker image with a substrate node using our pallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can interact with the substrate runtime to call the PESA pallet\u2019s APIs.")))),(0,l.kt)("h3",{id:"milestone-2--pesa-pallet-send-receive-tokens-using-phone-number-and-reverse-lookup"},"Milestone 2 \u2014 PESA pallet send, receive tokens using phone number and reverse lookup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 1 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"PESA pallet - send, receive and reverse lookup functions"),(0,l.kt)("td",{parentName:"tr",align:null},"1. Pallet will allow users to send and receive tokens using phone number instead of using complex hash.",(0,l.kt)("br",null),"2. Pallet will allow users to perform reverse resolution of address to Phone number if the users opted to allow during register operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Backend setup for Phone number verification"),(0,l.kt)("td",{parentName:"tr",align:null},"Backend will be in NodeJs to perform phone number verification/validation using Twilio.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Demo of the above functionalities using a web dapp"),(0,l.kt)("td",{parentName:"tr",align:null},"Dapp showing these features.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide a docker image with substrate node using our pallet. Docker image for backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit Tests and Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide documentation for:",(0,l.kt)("br",null),"1. Steps to run the substrate node with PESA pallet.",(0,l.kt)("br",null),"2. Steps to use web dapp to interact with it.",(0,l.kt)("br",null),"3. Steps to run backend locally.")))),(0,l.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,l.kt)("p",null,"The tutorials and Documentation that we provide will be published as articles in Medium and other social media platforms with due mention about Web3 grant."),(0,l.kt)("p",null,"We also intend to engage community by providing grants in our tokens to add more support and improve our codebase."),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"Our goal is to make telecom and financial services open and accessible to all. So we plan to continually increase the services that can be accessed using phone numbers (for eg: lend, borrow), aiming to unlock access to advanced financial services for the unbanked as well. "),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,"We are going to use this pallet for building a borderless mobile money system but anyone can extend it to support address resolution for other non-fungible tokens.  "))}m.isMDXComponent=!0}}]);