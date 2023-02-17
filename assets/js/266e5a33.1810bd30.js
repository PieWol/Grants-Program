"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1756],{19809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={},l="Vanguard",o={unversionedId:"applications/vanguard",id:"applications/vanguard",title:"Vanguard",description:"- Team Name: Veridise",source:"@site/docs/applications/vanguard.md",sourceDirName:"applications",slug:"/applications/vanguard",permalink:"/Grants-Program/applications/vanguard",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/vanguard.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Core Vanguard Framework",id:"milestone-1--implement-core-vanguard-framework",level:3},{value:"Milestone 2 \u2014 Implement Common Vulnerability Detectors",id:"milestone-2--implement-common-vulnerability-detectors",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vanguard"},"Vanguard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Veridise"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," Ethereum: 0x0f8a5076a56b7ECD761562551FAd11DF631447B2 (USDC)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2 ")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Decentralized Finance (DeFi)  is taking off at a very rapid pace, and smart contracts running on the Polkadot ecosystem are starting to entirely revolutionize the landscape of modern commerce.  However, as with any technological revolution, this transformation ushers new security challenges that must be tackled head on: Because financial transactions are ",(0,r.kt)("em",{parentName:"p"},"automatically")," executed by DeFi apps, bugs and security vulnerabilities in these programs can \u2014and currently ",(0,r.kt)("em",{parentName:"p"},"do\u2014")," lead to significant amounts of financial loss. For example, over the past year alone, there have been repeated occurrences of so-called \u201cflash loan attacks\u201d, which exploit contract logic to manipulate the price of valuable assets, such as tokens, to obtain a purchase price well below its actual market value. In fact, according to many estimates, ",(0,r.kt)("em",{parentName:"p"},"over 1.3 Billion dollars")," worth of funds have been stolen in the year 2021 alone, all because of some underlying software vulnerability.  If such numbers are not staggering enough,  add to this the fact that smart contracts are immutable once deployed: this means that there is no way to fix the vulnerability  post-deployment even ",(0,r.kt)("em",{parentName:"p"},"after")," the problem has been discovered."),(0,r.kt)("p",null,"This is exactly why it is so crucial to ensure that the smart contracts on the Polkadot ecosystem are free of security vulnerabilities and that they function as intended ",(0,r.kt)("em",{parentName:"p"},"before")," they are deployed on a distributed ledger. Here, at Veridise, our mission is to ensure the correctness of modern DeFi applications through state-of-the-art technology based on cutting edge formal verification research. "),(0,r.kt)("p",null,"Because many DeFi apps suffer from a common set of vulnerabilities (e.g., arithmetic overflows, flash loan vulnerabilities, transaction order dependence etc), a key component of the Veridise toolchain is a static analyzer, called Vanguard, for detecting such common vulnerabilities in ink! contracts. Because Vanguard is based on a technique called abstract interpretation, it is guaranteed to report a vulnerability if one exists (among the vulnerability types checked by Vanguard). "),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Vanguard is a static smart contract analysis framework written in C++. It runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses. Vanguard enables developers to find vulnerabilities, enhance their code comprehension, and quickly prototype custom analyses. The Veridise team has been designing the product vision of the Vanguard for quite some time. We will go over the project details and provide references below for more in-depth context. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Static Analysis via Abstract Interpretation.")," At a high level, most static analyzers are based on a paradigm known as \u201cabstract interpretation\u201d. Just as a regular ",(0,r.kt)("em",{parentName:"p"},"interpreter")," for a programming language executes the program on ",(0,r.kt)("em",{parentName:"p"},"some specific")," input, an ",(0,r.kt)("em",{parentName:"p"},"abstract interpreter")," symbolically executes the program over ",(0,r.kt)("em",{parentName:"p"},"sets of inputs"),". "),(0,r.kt)("p",null,"To make this discussion more concrete, consider a simple function F that takes an integer x and returns x",(0,r.kt)("em",{parentName:"p"},"2 (let\u2019s assume unbounded integers for the purposes of this discussion). A regular interpreter can tell us that F will return 2 when executed on 1 and that it will return 4 when executed on 2 etc. However, when we do abstract interpretation, we can ask questions about what F returns on entire "),"sets* of inputs. For example, an abstract interpreter can tell us that F will return a value in the range ","[2, 10]"," when x is in the range ","[1, 5]"," or that the return value of F is always an even integer for any input x."),(0,r.kt)("p",null,"So, how can an abstract interpreter do that? The key idea is to define the semantics of the programming language over some underlying ",(0,r.kt)("em",{parentName:"p"},"abstract domain"),", where each element in the domain represents ",(0,r.kt)("em",{parentName:"p"},"a set of inputs"),". Again, the best way to understand this concept is to contrast it against a standard interpreter for a programming language. We can think of an interpreter as a program that takes as input a mapping M from variables to concrete values and a code snippet S and produces a new mapping M\u2019 from variables to values, as depicted below:"),(0,r.kt)("img",{src:"https://miro.medium.com/max/1400/1*HIophexilX7SeMT3wEhO-w.png",alt:"drawing",width:"600"}),(0,r.kt)("p",null,"The idea behind an abstract interpreter is exactly the same except that it operates over ",(0,r.kt)("em",{parentName:"p"},"abstract values,")," which are elements of an underlying so-called ",(0,r.kt)("em",{parentName:"p"},"abstract domain.")," For instance, an abstract value could be an interval of the form ","[a, b]"," denoting a set of integers x such that a \u2264 x \u2264 b. Then, just a standard interpreter executes the program over a concrete input, an abstract interpreter executes the program over such abstract inputs: "),(0,r.kt)("img",{src:"https://miro.medium.com/max/1400/1*IhNvOZShQjmvNZ1SyqaWJw.png",alt:"drawing",width:"600"}),(0,r.kt)("p",null,"So what does it mean to execute a statement over abstract values? Let\u2019s try to understand that through an example (again, assuming mathematical integers). Consider a statement like x = y+z, and suppose that our abstract values are intervals of the form ","[l, u]",". If we know that y is in the range ","[a, b]"," and z is in the range ","[c, d]",", we can conclude that x is in the range ","[a+c, b+d]",". This is precisely what we mean by ",(0,r.kt)("em",{parentName:"p"},"abstractly (symbolically) executing")," a given statement! Now, how can we leverage abstract interpretation to detect smart contract vulnerabilities?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reentrancy Detection."),"  One of the oldest DeFi attacks (responsible for the DAO Hack of 2016) is caused by \u201creentrancy\u201d, which occurs when  a contract invokes a function of another contract before it finishes updating any necessary contract state (such as a contract variable tracking refunds). Since the target contract can invoke functions in the source contract (hence the name \u201creentrancy\u201d), this will cause the vulnerable contract to use stale values. This, in turn, can allow an attacker to access resources that they don\u2019t have any claim to. Commonly, such an attack is used to withdraw more funds from a contract than they actually have, as illustrated below:"),(0,r.kt)("img",{src:"https://miro.medium.com/max/1400/1*b9zTnJ7CRQgIE1du0WezIg.png",alt:"drawing",width:"600"}),(0,r.kt)("p",null,"How to detect them: Such reentrancy vulnerabilities can be detected by statically checking that no storage variables are updated after an external function is called. In particular, the static analyzer needs to compute  which function calls can be made at every program point and which variables are updated. Then, if there exist two program points L1 and L2 such that (1) L1 can execute before L2, (2) L1 can invoke an external function, and (3) L2 can write to a storage variable, then there is a possible vulnerability in the code. It is worth noting that reentrancy vulnerabilities cannot be checked in a sound way using syntactic pattern matching \u2014 e.g., storage variables may be updated in subtle ways due to pointer aliasing and external functions may be called in non-obvious ways (e.g., through other function calls)."),(0,r.kt)("p",null,"For more information, please refer to the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Veridise Whitepaper ",(0,r.kt)("a",{parentName:"li",href:"https://veridise.com/wp-content/uploads/2022/05/white-paper.pdf"},"here")),(0,r.kt)("li",{parentName:"ul"},"Veridise Docs ",(0,r.kt)("a",{parentName:"li",href:"https://veridise.medium.com/"},"here"))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"It is well-known that bugs in blockchain ecosystem can have catastrophic consequences. As it stands today, the security landscape within the Polkadot ecosystem is not as mature as other ecosystems such as Ethereum. This is due to insufficient security tooling infrastructure in the ecosystem. Currently, the Polkadot ecosystem does not have the static analysis, symbolic execution, and other security tooling products as other major blockchains. By building the static analysis tooling products for ink! contracts, the Polkadot security landscape is hardened by utilizing the expertise from the Veridise team."),(0,r.kt)("p",null,"The target audience of the Vanguard analyzer are web3 developers who require a tool to ensure the robustness and security of their applications. Using the technical capabilities that Veridise provides, our project will meet the needs of the Polkadot community to harden their own ink! contracts away from commmon vulnerabilities such as DoS, ToD, Reentrancy, flashloan attack, and many others."),(0,r.kt)("p",null,"To the best of our knowledge, there is no comprehensive security tooling product for ink! contracts. The best option that the developers have is to leverage Linting rules that are supported by ink! 3.0. It is well-known that linting rules can only handle local and shallow patterns and they are completely insufficient for expressing common but serious vulnerabilities such as flashloan and reentrancy attacks. The only similar one is the Slither tool for Solidity. However, Vanguard differs from the Slither project in multiple ways. First, Slither can only support Solidity. On the other hand, Vanguard is language-agnostic and can easily support different versions of ink! language. Second, according to the results from our recent research paper, by evaluating both tools on the entire smart contracts from Etherscan, Vanguard significantly outperforms Slither in terms of both false positives and false negatives. "),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yu Feng"),(0,r.kt)("li",{parentName:"ul"},"Jon Stephens"),(0,r.kt)("li",{parentName:"ul"},"Ben Mariano")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Yu Feng"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:yu@veridise.com"},"yu@veridise.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"http://www.veridise.com"},"www.veridise.com"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 7109 Midwood Pkwy, Austin TX, USA, 78736"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Veridise INC.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Founded by a team of well-known professors and researchers from academia, Veridise's cofounders collectively have over 30+ years of experience in formal verification, program analysis, and security. Veridise develops cost-effective security audits tooling products for dApps, regardless of the programming language they are implemented in or what blockchain platform they run on.  Leveraging our expertise in automated program analysis, Veridise provides state-of-the-art solutions for ensuring security of decentralized finance applications. If you\u2019re interested in learning more information, please consider visiting our prior ",(0,r.kt)("a",{parentName:"p",href:"https://veridise.com/#research"},"research"),"."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/veridise"},"https://github.com/veridise")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Veridise/Vanguard"},"https://github.com/Veridise/Vanguard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Veridise/libBlockchain"},"https://github.com/Veridise/libBlockchain"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fredfeng"},"https://github.com/fredfeng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stephensj2"},"https://github.com/stephensj2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bmarwritescode"},"https://github.com/bmarwritescode"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fredfeng.github.io/"},"https://fredfeng.github.io/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stephensj2.github.io/"},"https://stephensj2.github.io/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bmarwritescode.github.io/"},"https://bmarwritescode.github.io/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"Before applying for the Web3 Foundation Grant, the Veridise team conducted the following research:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Published a research paper at the top-one security conference (Oakland'22) ",(0,r.kt)("a",{parentName:"li",href:"https://www.computer.org/csdl/proceedings-article/sp/2022/131600b235/1A4Q46YLRrq"},"here")),(0,r.kt)("li",{parentName:"ul"},"Published a ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/veridise/detecting-smart-contract-vulnerabilities-with-static-analysis-f362c0671f57"},"blog post")," about the technique behind Vanguard"),(0,r.kt)("li",{parentName:"ul"},"The focus for Vanguard will be automatic detecting common vulnerabilities on ink! contracts"),(0,r.kt)("li",{parentName:"ul"},"Spoke with David Hawig and Alberto Navarro from the Parity team regarding the development of Vanguard and the Web3 Grant application")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:"),"  2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USDC. ")),(0,r.kt)("h3",{id:"milestone-1--implement-core-vanguard-framework"},"Milestone 1 \u2014 Implement Core Vanguard Framework"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USDC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains the high-level overview of Vanguard as part of the grant, followed by a set of extensive examples.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"We will build the basic infrastructure that is shared by all incoming detectors, including callgraph, alias analysis, and data-flow analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Taint analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"Many detectors can be reduced to static taint analysis. We will implement it as part of the core analysis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Generic Vanguard API"),(0,r.kt)("td",{parentName:"tr",align:null},"Design and implement the generic API that will be extended by 3rd-party developers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic Detectors"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement basic detectors based on the core framework, including transaction order dependency, DoS, and uninitialized storage variables.")))),(0,r.kt)("h3",{id:"milestone-2--implement-common-vulnerability-detectors"},"Milestone 2 \u2014 Implement Common Vulnerability Detectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USDC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"In our medium website, we will publish an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains the functionality and usage of those detectors using real-world examples from the Polkadot ecosystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Design unused-state detector"),(0,r.kt)("td",{parentName:"tr",align:null},"Unused-state variables can potentially increase the attack surface. We will implement a detector to identify unused-state variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Improve Flashloan Detector"),(0,r.kt)("td",{parentName:"tr",align:null},"The current flashloan detector only works for very specific situations. It relies on someone calling balanceOf and tracks the taint to a transfer. I think that we can come up with a more generic version of the flashloan detector.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Pay without Withdraw Detector"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a detector that looks for contracts that will lock funds by having a payable function with no way of withdrawing the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluation on ink! contracts"),(0,r.kt)("td",{parentName:"tr",align:null},"Coordinate with the Parity community to collect a curated list of ink! ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paritytech/awesome-ink"},"contracts")," that will be used to evaluate the effectiveness of Vanguard.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will promote the project by giving talks in the community, writing tutorials and videos."),(0,r.kt)("li",{parentName:"ul"},"We will also work closely with the developers and clients of the Parity ecosystem for getting feedback and refine our project."),(0,r.kt)("li",{parentName:"ul"},"Our long-term plan is to make the tool become one of the default auditing tools for the Parity ecosystem.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website / Parity team / personal recommendation."),(0,r.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our team collectively has over 30+ years experience in formal methods and static analysis, which setups the foundation of the project: ",(0,r.kt)("a",{parentName:"li",href:"https://veridise.com/#research"},"https://veridise.com/#research"))))}m.isMDXComponent=!0}}]);