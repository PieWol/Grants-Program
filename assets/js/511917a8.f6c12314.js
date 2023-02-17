"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[362],{3797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},l="Redstone Network",o={unversionedId:"applications/RedStone Network",id:"applications/RedStone Network",title:"Redstone Network",description:"- Team Name: Redstone Network",source:"@site/docs/applications/RedStone Network.md",sourceDirName:"applications",slug:"/applications/RedStone Network",permalink:"/Grants-Program/applications/RedStone Network",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/RedStone Network.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Passive defense and active alarms",id:"passive-defense-and-active-alarms",level:4},{value:"Intelligent termination of transactions with evil address monitoring",id:"intelligent-termination-of-transactions-with-evil-address-monitoring",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Multiple passive defense mechanisms, as well as on-chain and off-chain alerting mechanisms",id:"milestone-1-example--multiple-passive-defense-mechanisms-as-well-as-on-chain-and-off-chain-alerting-mechanisms",level:3},{value:"Milestone 2 Example \u2014 Intelligent meltdown mechanism, including abnormal trading meltdown, evil trading meltdown",id:"milestone-2-example--intelligent-meltdown-mechanism-including-abnormal-trading-meltdown-evil-trading-meltdown",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redstone-network"},"Redstone Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Redstone Network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x24cfc36f699dacc5cb652630ddd894a8df658233 (Ethereum ERC20 USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We are sincerely requesting a funding grant from the web3 Foundation to build a transaction firewall that will function as a last resort security barrier when user asset protection solutions fail. There have been several serious security incidents recently, including major asset losses due to the theft of private keys on the harmony and Ronin bridges. In the blockchain world, having a mnemonic or private key for an account is equivalent to getting ownership of that address; when a hacker obtains a user's mnemonic or private key, he or she is able to take all the assets in a short period of time without any problem, a situation that obviously should not exist all the time. When this problem is not solved or alleviated, the Web3 world is full of uneasiness and suspicion, and this situation will make it difficult for the Web3 world to gain larger scale support and popularity."),(0,i.kt)("p",null,"The Redstone Network is a network of trigger circuits where users combine and arrange simple atomic trigger components according to certain rules and processes to eventually implement a series of automated operational circuits. We propose transaction firewall middleware that can function between any blockchain network, regardless of the cross-chain mechanism and network topology used to execute asset transfers, and regardless of the type of assets traded, we will construct a firewall of different security levels for users. With the help of triggers and machine learning technologies, we will provide users with passive defense and proactive alerting capabilities."),(0,i.kt)("p",null,"We will work with parallel chains in Polkadot/Kusama to build and deploy the firewall function to enable a higher level of security for parallel chain asset interactions within the ecosystem; in addition, we can work with project parties or wallets in other ecosystems to provide them with this unique defense mechanism, ultimately reducing the risk of asset security across the Web3 world."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"For the transaction firewall functionality, Redstone Network will build a set of on-chain/off-chain trigger components and their implementations. In general, users will not be aware of the firewall's operation, and the firewall will truthfully notify users of potential security risks when there are triggered alarms on the chain."),(0,i.kt)("h4",{id:"passive-defense-and-active-alarms"},"Passive defense and active alarms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We build a series of stateless atomic trigger components, including on-chain triggers (quantity trigger, time trigger, price trigger), off-chain triggers (mail trigger, discord trigger, slack trigger) and off-chain message interaction components, which are responsible for actively obtaining external information or pushing messages to a specified server.;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Analyze transaction characteristics and behavior, design transaction protocol analyze the transaction characteristics and behavior, design the transaction protocol, check whether the basic information and check information of the transaction match through protocol parsing, and initially determine the validity of the transaction;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"according to the trigger and the transaction protocol, with the idea of social recovery and multiple signatures, formulate different security level trigger policies for users, including power grabbing mechanism, freezing mechanism and alarm mechanism."))),(0,i.kt)("h4",{id:"intelligent-termination-of-transactions-with-evil-address-monitoring"},"Intelligent termination of transactions with evil address monitoring"),(0,i.kt)("p",null,"The user-configured security scheme can effectively defend against known security problems, but not against unknown or unconfigured behaviors. By analyzing the transaction data recorded in the database under the chain, the transactions are analyzed according to the dimensions of transaction time, transaction frequency, transaction address, transaction direction, and transaction amount, and if the transaction behavior is different from the daily behavior, the meltdown mechanism will be triggered and alarmed; receiving the supervision instruction from a chain, the address that is doing evil and the derived address will be dynamically analyzed and the transaction meltdown mechanism will be triggered."),(0,i.kt)("p",null,"For the application scenario of transaction firewall, it is mainly divided into token assets and NFT assets. Users can choose the type of asset that needs to be configured with the firewall, either for a certain token, or to protect the account that issues NFT assets."),(0,i.kt)("p",null,"In addition, the transaction firewall feature is not dependent on any application, any architecture and any address type restrictions, making it flexible to handle a variety of new attack methods that are known or have not yet emerged in the future, as it aims to study the security of A to B transfers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Technology stack")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rust: Develop on-chain trigger/defense/alert modules"),(0,i.kt)("li",{parentName:"ul"},"Go/Python: Develop off-chain analysis/trace/alarm modules")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"This project will be developed, deployed and run based on the Substrate framework. Unlike other trigger projects, with the advanced features of OCW, we are able to provide users with an advanced on-chain alert push mechanism, which will help shorten the time for users to get critical information. At the same time, rooted in Polkadot/Kasuma ecology, as a parallel chain, the trigger interface on it will provide additional application features for all parallel chains, and with the help of relay chains, it can facilitate unique transaction defense capabilities for other parachains. We note that we are entering a completely new area that will provide an unprecedented protection experience for the blockchain space once our project is in actual operation."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bin Guo"),(0,i.kt)("li",{parentName:"ul"},"Li Smith"),(0,i.kt)("li",{parentName:"ul"},"yiwei Shi"),(0,i.kt)("li",{parentName:"ul"},"Leon")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Bin Guo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:bin.guo@deeper.network"},"bin.guo@deeper.network"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"(we are in the process of registering the legal entity)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bin Guo"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Over 9 years of experience in software development and project management, engaged in work related to blockchain and big data, and worked in a core research institution of State Grid (Fortune 500)."),(0,i.kt)("li",{parentName:"ul"},"Polkadot senior ambassador, Substrate Evangelist, and early participants in the Polkadot ecosystem."),(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AmadeusGB"},"https://github.com/AmadeusGB")),(0,i.kt)("li",{parentName:"ul"},"Email: ",(0,i.kt)("a",{parentName:"li",href:"mailto:amadeusgb123@gmail.com"},"amadeusgb123@gmail.com"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Smith Li"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Over 9 years of working experience in various aspects of computer programming."),(0,i.kt)("li",{parentName:"ul"},"Worked in the blockchain industry for 3+ years,  a blockchain development engineer, familiar with polkadot, bitshares, fabric, etc."),(0,i.kt)("li",{parentName:"ul"},"Hackathon winner as a team tech leader: Winners of Polkadot Hackathon 2022."),(0,i.kt)("li",{parentName:"ul"},"github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/baidang201"},"https://github.com/baidang201"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"yiwei Shi"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Art and management background, worked for Hearst, MSN, responsible for market and product, more than one year of blockchain development experience, familiar with computer science, cryptography and different economic mechanisms, good at Go and Rust development\u3002Hackathon winner as a team member: Winners of Polkadot Hackathon 2022"),(0,i.kt)("li",{parentName:"ul"},"Github : ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shiyivei"},"https://github.com/shiyivei")),(0,i.kt)("li",{parentName:"ul"},"Email : ",(0,i.kt)("a",{parentName:"li",href:"mailto:shiyivei@outlook.com"},"shiyivei@outlook.com"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"leon"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Over 7 years of working experience in web development experience ande more than one year of blockchain development experience, familiar with FrontEnd, good at Js,Ts and Rust development.Hackathon winner as a team member: Winners of Polkadot Hackathon 2022"),(0,i.kt)("li",{parentName:"ul"},"github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/walle233"},"https://github.com/walle233"))),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"We have forked substrate-template repository code to implement on-chain triggers (quantity triggers, time triggers, price triggers) and off-chain triggers (email triggers, slack triggers) with the help of decentralized off-chain communication components, in addition, we have implemented a simple oracle machine\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/difttt/difttt-node"},"difttt-node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/difttt/evm-proxy"},"evm-proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/difttt/slack-notify"},"slack-notify")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/difttt/oracle_price"},"oracle_price")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/difttt/frontend"},"frontend"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 20000 USD")),(0,i.kt)("h3",{id:"milestone-1-example--multiple-passive-defense-mechanisms-as-well-as-on-chain-and-off-chain-alerting-mechanisms"},"Milestone 1 Example \u2014 Multiple passive defense mechanisms, as well as on-chain and off-chain alerting mechanisms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," for the code and a ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," for users on how to configure the in-chain passive defense step, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," to explain the concept, design and implementation of the design in Grant and how to use these features in the blockchain)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Passive_Defense Pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide users with stateless and application-independent protective features, and this module will be implemented through Substrate Pallet:",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"transaction limit configuration"),": configure in advance the limit of transferring a transaction amount and limit the frequency of transactions within a specified time; protect users from suffering significant losses for a short period of time when their private keys are stolen.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Freezing configuration"),": advance configuration of freezing transaction time, freezing transaction type, and whether the freezing command can be withdrawn; when the user realizes that the private key has been stolen, the freezing operation will be triggered immediately to help the user further reduce losses.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Capture account authority configuration"),": configure in advance N friend addresses and M for friend operations to take effect; when the user realizes the private key has been stolen, let the account freeze first and contact their friends as soon as possible. When more than M friends vote to pass, the authority of the stolen account will be taken over and any transaction will be executed only after N friends vote. This way even if the hacker steals the private key, he will not be able to transfer money effectively.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Active_Alarming Pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide users with on-chain and off-chain alerting functions. This module will be implemented through Substrate Pallet:",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"On-chain alarm configuration"),": Any transaction that exceeds the limit will send an alarm event; for example, the user can configure that when N transactions exceeding the limit amount occur within a period of time, an off-chain alarm notification will be triggered; the user can configure, a period of Within a certain time, different times will trigger different alarm methods.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Off-chain triggering alarms"),": Provide users with three off-chain notification methods: Mail, Slack, and Discord. For example, general alarms are sent to Mail, important alarms are sent to Slack, and critical alarms are sent to Discord to achieve hierarchical management of alarms.")))),(0,i.kt)("h3",{id:"milestone-2-example--intelligent-meltdown-mechanism-including-abnormal-trading-meltdown-evil-trading-meltdown"},"Milestone 2 Example \u2014 Intelligent meltdown mechanism, including abnormal trading meltdown, evil trading meltdown"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 12,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," explaining the concept, design and implementation of smart meltdowns and how to use these features in the blockchain)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Analyzer Module"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide users with off-chain transaction analysis functionality, and this module will be implemented via the Go/Python programming language\uff1a",(0,i.kt)("br",null),"Users can choose whether to enable the off-chain transaction analysis function. The module records and analyzes user transaction characteristics based on a counter, and uploads to the blockchain when abnormal results emerge from the analysis. When a potentially abnormal transaction occurs, the user can choose, based on advance configuration, whether the module simply alerts when an abnormal transaction is reported, or freezes the account until the user comes to deal with the problem on their own. In this case, the hacker does not trigger any on-chain restrictions, only the off-chain transaction analysis detects the anomaly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Tracker Module"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide users with off-chain transaction analysis functionality, and this module will be implemented via the Go/Python programming language.",(0,i.kt)("br",null),"This module implements the function of tracking the transaction records of a certain address at a certain time period, helping users to assist in analyzing the loss of the current address from the hacking attack, as well as analyzing the chain through which the hacker transferred the funds.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Conceptualizing the application with the trigger concept, implementing the transaction firewall first, and refining our design based on user feedback.\nImplementation steps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"develop on-chain/off-chain triggers for firewall requirements."),(0,i.kt)("li",{parentName:"ul"},"refining the firewall design based on user feedback."),(0,i.kt)("li",{parentName:"ul"},"implementing cross-chain transactions and providing transaction protection for cross-chain links."),(0,i.kt)("li",{parentName:"ul"},"configure different levels of defense strategies based on implementation experience.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nHow did you hear about the Grants Program? We heard about the Grants Program from the Web 3 Foundation Website, as well as personal recommendations from Polkadot community members."))}h.isMDXComponent=!0}}]);