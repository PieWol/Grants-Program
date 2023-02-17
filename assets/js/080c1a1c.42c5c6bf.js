"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4245],{80894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(8209);const i={},l="Klevoya - Substrate WASM Smart Contract Fuzzer",o={unversionedId:"applications/klevoya_fuzzer",id:"applications/klevoya_fuzzer",title:"Klevoya - Substrate WASM Smart Contract Fuzzer",description:"Team Name:* Klevoya",source:"@site/docs/applications/klevoya_fuzzer.md",sourceDirName:"applications",slug:"/applications/klevoya_fuzzer",permalink:"/Grants-Program/applications/klevoya_fuzzer",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/klevoya_fuzzer.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Prior work",id:"prior-work",level:4},{value:"Scope",id:"scope",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Implementation of Substrate smart contract model",id:"milestone-1-implementation-of-substrate-smart-contract-model",level:3},{value:"Milestone 2: Substrate logic bugs",id:"milestone-2-substrate-logic-bugs",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"klevoya---substrate-wasm-smart-contract-fuzzer"},"Klevoya - Substrate WASM Smart Contract Fuzzer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Klevoya"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," DAI 0x31840be5bf48811ffa35512735de0a53b4ba230d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/420#issuecomment-1017430431"},"Terminated"))),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("h4",{id:"background"},"Background"),(0,n.kt)("p",null,"The novelty and complexity of smart contracts, in addition to their role in managing potentially high-value digital assets, requires a high degree of attention to be paid to their security. Yet to date it is estimated that hundreds of millions of dollars have been lost to hackers who have exploited vulnerabilities in smart contracts."),(0,n.kt)("p",null,"Currently blockchain developers mainly check their smart contracts using manually written tests and source inspection by internal and external audit teams. However security auditing is a highly specialised skill (and may even be more so for Substrate chains which are based on relatively new software technologies such as Rust and WebAssembly). Further, the growing complexity of smart contracts and their composable nature makes it difficult to scale manual methods."),(0,n.kt)("p",null,"Klevoya\u2019s mission is to build automated solutions that help blockchain developers find and eliminate bugs and zero-day vulnerabilities in their code before hackers can get to them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Our solution:"))," The ",(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet"},"Substrate Contracts pallet")," will be used to execute smart contracts written by 3rd party developers, and these smart contracts may contain a variety of bugs. In this grant we will develop a WebAssembly smart contract byte-code fuzzer (i.e. dynamic execution of the smart contract in response to random inputs) for smart contracts that are to be deployed/executed in ",(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet"},"Substrate\u2019s Contracts pallet"),". We will not be fuzzing the Contracts pallet itself, only the smart contacts that are to be deployed on it."),(0,n.kt)("p",null,"From experience with other blockchain ecosystems we have observed that the majority (if not all) of smart contract hacks that take place are a result of logic bugs. Therefore the main objective of this smart contract fuzzer will be to identify smart contract logic bugs. An ancilliary benefit will be to identify memory corruption errors in cases where developers use non-Rust programming languages (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/ask"},"Ask!")," which is based on AssemblyScript) to write their smart contracts."),(0,n.kt)("p",null,"This project builds on Klevoya\u2019s previous work developing byte-code fuzzers for other WASM based smart contract chains."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Benefits of fuzzers:"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In comparison to static analysis, fuzzers dynamically execute the code and therefore tend to give results that have fewer false positives/negatives than comparable static analysis techniques,"),(0,n.kt)("li",{parentName:"ol"},"Bugs found by a fuzzer are easily reproducible as the inputs needed to recreate a bug are a by-product of the fuzzing process,"),(0,n.kt)("li",{parentName:"ol"},"Fuzzing at the byte-code level means that we are agnostic to the smart contract programming language, whether that is ink! or some other future smart contract language, and,"),(0,n.kt)("li",{parentName:"ol"},"In comparison to formal verification techniques, it is relatively easier to set up a fuzzing campaign as it does not require training and expertise in formal methods.")),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("h4",{id:"prior-work"},"Prior work"),(0,n.kt)("p",null,"We have already developed a generic, coverage guided WASM binary smart contract fuzzer. The diagram below shows the general architecture of the smart contract fuzzer (the section in the red dotted line denotes the scope of work for this grant application):"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8709186/119012917-60797800-b98e-11eb-9c50-ce7ab80c9a64.png",alt:"fuzzer_arch2"})),(0,n.kt)("p",null,"The faster one can fuzz, then the more program paths that can be explored; therefore a key design feature of the fuzzer is its ability to execute many fuzz cases per seconds (we have benchmarked it executing several million fuzz cases/sec on a 16-core CPU with WASM binaries of a moderate size)."),(0,n.kt)("p",null,"There are two main ways we achieve this high fuzz case throughput:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Efficient compilation of WASM bytecode to optimised machine code: WASM bytecode naturally doesn\u2019t run on the processor. Modern compilers can generate high quality optimised code, but can take a long time to compile. However the compilation result can be cached, and reused between execution instances which leads to an ideal position of \u201ccompile once - run many\u201d. To get optimised machine code we leverage existing tooling, namely Cranelift JIT to lift WASM bytecode to Cranelift IR, then transpile to C++ whilst adding instrumentation that allows gathering of coverage statistics. (This multi-stage process is necessary as existing WASM JIT compilers are fast to generate machine code, but the code they do generate is of poor quality - performance wise.) The transpiled C++ is then compiled to machine code with the Clang compiler.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8709186/118856899-580e3800-b8cf-11eb-9a61-4927f9253bcc.png",alt:"transpiler"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Parallel execution: the fuzzer runs several (typically one per CPU core) independent WASM Virtual Machine instances (the output of the compilation step detailed above) in parallel. Each VM instance has a local seed corpus, mutator and input generator (these parts are specific to a fuzz target and we will be developing a Polkadot specific one as part of this grant). The individual VMs then periodically sync their corpora to a corpus aggregator that allows the VMs to share corpus mutations.")),(0,n.kt)("h4",{id:"scope"},"Scope"),(0,n.kt)("p",null,"In this grant we will only focus on fuzzing of WASM smart contracts."),(0,n.kt)("p",null,"In the future we plan to expand the fuzzer to include fuzzing of custom (i.e. developed by third-party developers) Substrate Runtimes; we plan to seek a separate grant for that activity."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"In scope:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implementation of a Substrate Smart contract model for integration with our generic WASM bytecode fuzzer. The model will be API compatible with the Contracts pallet with the underlying logic being mocked as much as possible (in order to reduce the maintenance of the model in response to future changes to the Contracts pallet)"),(0,n.kt)("li",{parentName:"ul"},"Development of scheme to detect simple logic bugs"),(0,n.kt)("li",{parentName:"ul"},"Finetune performance of fuzzing engine")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Out of scope:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No fuzzing of the Substrate Contracts pallet"),(0,n.kt)("li",{parentName:"ul"},"No Substrate Runtime fuzzing"),(0,n.kt)("li",{parentName:"ul"},"No fuzzing of non-WASM smart contracts (e.g. smart contracts that target the Substrate EVM Pallet)")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"Making DApps built on Polkadot/Kusama robust to hacking is critical to ensuring the health of, and confidence in, the Polkadot/Kusama ecosystem. To date we have not seen any tools that have been specifically developed to assess the security of Substrate smart contracts."),(0,n.kt)("p",null,"The results of this project will be used by smart contract developers to verify that their smart contracts are free of bugs and vulnerabilities prior to public deployment."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Similar work in this or other ecosystems"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A previous Web3 grant was awarded to a team to perform ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/9"},"WASM Runtime Fuzzing"),". However in that grant they specifically sought to fuzz the wasmi/wasmtime to identify errors in those components, whereas in this grant we seek to fuzz smart contracts not the runtime."),(0,n.kt)("li",{parentName:"ul"},"The greatest amount of similar work has been done in the Ethereum ecosystem where several blockchain security related organisations have developed fuzzers for Ethereum smart contracts. For example the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/crytic/echidna"},"Echidna")," fuzzer (by ",(0,n.kt)("a",{parentName:"li",href:"https://www.trailofbits.com/"},"TrailOfBits"),") and ",(0,n.kt)("a",{parentName:"li",href:"https://mythx.io/"},"MythX")," (by ",(0,n.kt)("a",{parentName:"li",href:"https://consensys.net/"},"Consensys"),") which is a security suite that includes a smart contract fuzzer. Those works are not applicable here as they fuzz smart contracts that run on the Ethereum Virtual Machine (EVM) whereas we specifically target fuzzing of WASM smart contracts running on Substrate's Contract pallet.")),(0,n.kt)("p",null,"In conclusion: we are not aware of any teams in the Polkadot/Kusama ecosystem that are currently pursuing a similar project."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Team Lead: Moti Tabulo"),(0,n.kt)("li",{parentName:"ul"},"Fuzzer Developer: David Morgan"),(0,n.kt)("li",{parentName:"ul"},"Blockchain Engineer: Christoph Michel")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Moti Tabulo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:moti.tabulo@klevoya.com"},"moti.tabulo@klevoya.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://klevoya.com"},"https://klevoya.com"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," ideaspace City, 3 Laundress Lane, Cambridge CB2 1SD, UK"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Barracuda Systems Ltd")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"The team is composed of members with many years of experience in general + blockchain software development, cybersecurity and blockchain security."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Moti Tabulo, PhD: Moti is the architect of Inspect, Klevoya's static vulnerability analysis engine. He has over 20 years' experience in technology R&D. Klevoya is his third startup after two previous startups in embedded software and robotics."),(0,n.kt)("li",{parentName:"ul"},"David Morgan: David is a performance and security conscious engineer with a keen eye for identifying vulnerabilities, and reverse engineering binaries. 4+ years experience finding hard to reach bugs. 10+ years finding, and exploiting vulnerabilities in gaming consoles."),(0,n.kt)("li",{parentName:"ul"},"Christoph Michel: Christoph has over a decade of experience in full-stack development. For the past several years he has been working on smart contract development for blockchain platforms like EOS and Ethereum. He has performed security audits on over a dozen smart contracts and regularly participates in CTF tournaments.")),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Team Repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/klevoya/"},"https://github.com/klevoya/")),(0,n.kt)("li",{parentName:"ul"},"Inspect static analyser: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/klevoya/inspect-analysis2"},"https://github.com/klevoya/inspect-analysis2")),(0,n.kt)("li",{parentName:"ul"},"Maintainer of EOSIO Smart Contract Weakness Registry: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/klevoya/eosio-wcr-registry"},"https://github.com/klevoya/eosio-wcr-registry"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/moti-tabulo/"},"https://www.linkedin.com/in/moti-tabulo/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/daveemorgan/"},"https://www.linkedin.com/in/daveemorgan/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/christoph-michel-dev/"},"https://www.linkedin.com/in/christoph-michel-dev/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"As described in the project prior work section above, we are currently developing a generic WebAssembly bytecode fuzzer. The code is currently closed source (let us know in case you would like to arrange a private session to review it)."),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE, the listed members would contribute to different deliverables based on their skill-set."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 29,000 USD")),(0,n.kt)("h3",{id:"milestone-1-implementation-of-substrate-smart-contract-model"},"Milestone 1: Implementation of Substrate smart contract model"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 19,000 USD"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Goal:")," Implement model of Substrate Smart Contract pallet within fuzzer.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use the fuzzer, and test their own smart contracts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"The code produced under this grant will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Article/Workshop"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article describing the work that was done during the grant and conduct a workshop describing how to fuzz a smart contract.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Fuzzer VM: Model Substrate WASM Smart contract pallet"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement model of blockchain logic: Substrate smart contract pallet calls, intrinsics, memory model etc within the fuzzer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Fuzzer: Input generation"),(0,n.kt)("td",{parentName:"tr",align:null},"Generate smart contract calls with appropriate inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Fuzzer: Seed mutation"),(0,n.kt)("td",{parentName:"tr",align:null},"Mutate seed corpus to allow efficient exploration of the smart contract with the aim of increasing code coverage")))),(0,n.kt)("h3",{id:"milestone-2-substrate-logic-bugs"},"Milestone 2: Substrate logic bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Goal:")," Implement logic bug checks within the fuzzer, tune fuzzer performance. Integrate and test fuzzer with several Substrate projects.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use the fuzzer, and test their own smart contracts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"The code produced under this grant will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article describing the work that was done during this phase of the grant and describing how to find common smart contract logic bugs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Prototype generic logic bugs"),(0,n.kt)("td",{parentName:"tr",align:null},"Prototype and document logic bugs that are generic across Substrate WASM smart contracts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Fuzzer: implement logic bug"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement logic bug checks within fuzzer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing against ecosystem smart contracts"),(0,n.kt)("td",{parentName:"tr",align:null},"Conduct testing of the developed fuzzer against several in-development (and live where possible) Substrate WASM smart contracts from the Polkadot ecosystem to verify the performance of the fuzzer and its efficacy in identifying bugs. We will summarise the results")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"Our vision is to provide a fuzzer that can identify security issues across the range of Substrate pallet functionality."),(0,n.kt)("p",null,"Future development:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extend the fuzzer to allow fuzzing of Substrate runtimes."),(0,n.kt)("li",{parentName:"ul"},"Implement fuzzer for EVM pallets"),(0,n.kt)("li",{parentName:"ul"},"Integrate and fuzz Substrate runtimes that include either WASM or EVM smart contract pallets"),(0,n.kt)("li",{parentName:"ul"},"Investigate feasibility of adding compiler engine as a backend to ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/sp-sandbox"},"sp_sandbox")," to reduce maintenance overhead of fuzzer model")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Work you have already done:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Implemented generic WASM fuzzer and version targeting EOSIO smart contracts"))),(0,n.kt)("li",{parentName:"ul"},"Whether there are any other teams who have already contributed (financially) to the project.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No"))),(0,n.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"None in the Polkadot/Web3 ecosystem. We have previously received a grant from EOS.VC for the development of the Inspect static analyser")))))}p.isMDXComponent=!0}}]);