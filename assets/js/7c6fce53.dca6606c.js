"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2352],{15425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const o={},i="Open rollup - MVP - Phase 1",l={unversionedId:"applications/openrollup-mvp-phase-1",id:"applications/openrollup-mvp-phase-1",title:"Open rollup - MVP - Phase 1",description:"- Team Name: Open rollup",source:"@site/docs/applications/openrollup-mvp-phase-1.md",sourceDirName:"applications",slug:"/applications/openrollup-mvp-phase-1",permalink:"/Grants-Program/applications/openrollup-mvp-phase-1",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/openrollup-mvp-phase-1.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Protocol overview",id:"protocol-overview",level:4},{value:"Prove and Verification abstraction",id:"prove-and-verification-abstraction",level:4},{value:"Scope of current proposal",id:"scope-of-current-proposal",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules",id:"milestone-1--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-rollup---mvp---phase-1"},"Open rollup - MVP - Phase 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Open rollup"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xC1347410Ee2Fc96C4e5a090FF97E3937A8aE158F (DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description.")," Open rollup provides a powerful and complete ZK rollup solution for substrate-based chains without contract enabled. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Background.")," We have developed some blockchain products, and the blockchain scalability problem is a serious problem. We believe that the off-chain zkapp solution is one of the best solutions to this problem. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proposal.")," We propose an open zk-rollups hub solution based on Substrate. There is no central operator here. Each zkapp developer can freely register their own zkapp on the chain, implement their own offline logic, and submit their ZK Proofs and state changes for their batch transactions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Zkapp.")," Zkapp can be a simple voting app, or a professional layer 2 solution with EVM support like zksync."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"The core of Open rollup is open-rollup-pallet, which saves the program-hash, balance, operations (e.g., transfer, swap, move),  and account state root hash of each zkapp. In addition it saves each users' balance of each zkapp, one child trie per zkapp.\nIt includes two main components: rollup and verifier.\nThe rollup component includes a zkapp registration, user deposits to a zkapp, exit when a zkapp is inactive which didn't submit a batch within 7 days and the handling of full-exit operations on the zkapp side.\nDue to resource and time constraints, this proposal currently contains a rollup component, and a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/miden"},"miden")," verifier instead of a zkvm that we want to implement in the future.\nThe verifier will be included in future proposals, and the rollup part will also increase the support of tokens and NFTs.\nOur initial idea about the verifier is to implement the verifier of ",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2021/1063.pdf"},"Cairo VM")," in the future, which requires implementing the AIR of zkstark for Cairo VM. Then the developers of zkapp can use ",(0,r.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/"},"Cairo-lang")," to develop zkapp."),(0,r.kt)("h4",{id:"protocol-overview"},"Protocol overview"),(0,r.kt)("p",null,"We give a brief overview of the rollup protocols."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zkapp registration.")," Developers use a program-hash to register a zkapp. The program-hash is derived from the bytecode of the zkapp. If the zkapp is open source, users can verify that the program-hash is indeed corresponding to the zkapp. In addition, the program-hash is also a public output of the verifier, which ensures that the submitted proof is indeed generated by this very zkapp's execution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User deposit.")," Users who want to participate in a zkapp deposit to this zkapp, and the batch submitted by this zkapp needs to include this deposit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User withdraw.")," If this zkapp ignores the user's operation in zkapp, the user can submit an withdraw transaction, and this zkapp must include this withdraw operation in the next submission.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User full exit.")," If the zkapp has not been submitted for a period of time, the user can exit the zkapp and withdraw the assets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zkapp batch submit.")," The submission includes the batch's commitment, operations, proof, and new and previous account state root hashes. The commitment is the hash of the batch's operations, it's the public output of the zkapp's execution, so the verifier can be convinced that the state transition of the operations is correct. Operations include transfers, swaps, moving to another zkapp, and exit ops, which are used to update user balances for int the zkapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zkapp management")," The registrant of one zkapp can manage the batch submitter and manually set the zkapp to be inactive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zkapps info api.")," Query the status (assets's balances, last submission time, inactive status) of each zkapp, and the assets's balances of each user in each zkapp"))),(0,r.kt)("h4",{id:"prove-and-verification-abstraction"},"Prove and Verification abstraction"),(0,r.kt)("p",null,"Open rollup supports arbitrary programs (zkapp) to interact with it, the open rollup pallet runs on-chain (L1), and zkapp runs off-chain (L2). To ensure the correctness of off-chain zkapp execution and state transitions, open rollup abstracts a zkvm that runs off-chain, and an on-chain verifier verifies the batch submitted by zkapp."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zkvm")," run a zkapp program, generate proofs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"program")," zkapp program, consisting of zkvm instructions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"program_hash")," any zkapp can be reduced to a single 32-byte value, called program-hash, it ensures that the verifier verifies the execution of a specific program"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zkapp-txs")," L2 transactions generated by the user's interaction with zkapp and L1 transactions submitted by the user to the Open rollup pallet (deposit/exit/move)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"operations")," emitted by zkapp-txs (such as transfer, swap, move) to update state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state")," merkle tree of the account's balances of tokens of a zkapp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state root")," the Merkle root hash of the state of a zkapp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"batch_commitment")," the state changes commitment (hash) of the batch, it ensures the submitted operations are the result of the batch's execution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pseudocode run offchain on zkapp side")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let (zk-proof, execute_program_hash, operations, new_state_root, batch_commitment) = zkvm.execute(program, current_state_root, zkapp-txs)\nassert program_hash == execute_program_hash\nzkapp.submit_to_onchain(program_hash, operations, current_state_root, new_state_root, batch_commitment)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pseudocode run onchain on pallet side")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"assert current_state_root == saved_state_roots[program_hash]\nlet verifier = new MockVerifier()\nassert batch_commitment == verifier.compute_batch_commitment(new_state_root, operations)\nlet public_inputs = (program_hash, batch_commitment)\nassert verifier.vefify(zk-proof, public_inputs)\nsaved_state_roots[program_hash] = new_state_root\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"note")),(0,r.kt)("p",null,"As the detailed zkvm is determined, this abstraction may change."),(0,r.kt)("h4",{id:"scope-of-current-proposal"},"Scope of current proposal"),(0,r.kt)("p",null,"Due to the time and resource constraints of us, we limit the scope of the current proposal to implementing the on-chain rollup part of the pallet involving Currency(Balances pallet)/Assets(Assets pallet)/NFT(Uniques pallet).\nWe are still considering and researching the proof and verification protocol, we can't provide very detailed details yet, we will design it while implementing this proposal."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"Open zk-rollup architecture")," Developers who want to participate in the Polkadot ecosystem do not need to invest in their own zk-rollup technology alone so that more developers can participate in the development of zkapp."),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},"increase scalability")," The off-chain zkapps greatly expands the scalability of the Polkadot/Substrate."),(0,r.kt)("p",null,"3) ",(0,r.kt)("strong",{parentName:"p"},"Modularity")," The architecture of Open rollup is suitable for different proof and verify protocols, and can adapt to zkapps of different ZK protocols in the future"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"),(0,r.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,r.kt)("p",null,"1) The application developers that are in search of scaling their blockchain application, for example, the payment application.\n2) The game developers who do not want to interact with the chain frequently only need to submit in batches for a period of time, which saves the cost of using the chain and improves the user experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,r.kt)("p",null,"There are many zk-rollup projects, such as zksync, starknet, hermez, plonky2, they are basically in the Ethereum ecosystem. They are all operated by a central operator, and in our protocol, each zkapp is an operator."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chris Cen")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Chris Cen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:chris@icen.cc"},"chris@icen.cc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://openrollup.org/"},"https://openrollup.org/")," (not yet established)")),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:"),"  not yet available"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," not yet available")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Our team has a lot of experience in applied cryptography, blockchain research, and software development.\nChris has been a software engineer for many years in the gaming industry and has led the development of various multiplayer online games. Recently he develop a hybrid consensus of Progpow and AuthorityRound ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chrisicen/openethereum-unity"},"https://github.com/chrisicen/openethereum-unity"),". He is currently devoted to the development of an off-chain ZK scalability solution for blockchain."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openrollup-zk"},"https://github.com/openrollup-zk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrisicen"},"https://github.com/chrisicen"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("p",null,"not yet available"),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"We've been working on techniques for zk-rollup, and verifiable computation for some time, including projects like zksync, halo2, plonky2, winterfell, hermez, and related papers and articles. We are starting to implement the rollup part."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 7.5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1.5 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD.")),(0,r.kt)("h3",{id:"milestone-1--implement-substrate-modules"},"Milestone 1 \u2014 Implement Substrate Modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 7.5 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,r.kt)("strong",{parentName:"td"},"article"),"/workshop that explains what was done/achieved as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Open rollup Pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"We provide the core data types and the functionalities(zkapp registration/user deposit/user exit/user full exit/zkapp batch submit/zkapp management/zkapp info api) which support currencies/tokens/NFTs as specified in Project Details. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"  - ",(0,r.kt)("strong",{parentName:"td"},"Pallet Data structures"),(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},"Zkapps"),": Map<programHash, zkappParams>, The zkappParams defining a zkapp, i.e., the ZkvmType, the submitter, and the inactive status ",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},"ZkappStates"),": Map<programHash, childTrieRootHash>,  A ",(0,r.kt)("a",{parentName:"td",href:"https://docs.substrate.io/main-docs/fundamentals/state-transitions-and-storage/"},"child Trie")," holds Users' balances of the Assets in each zkapp ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," - ",(0,r.kt)("strong",{parentName:"td"},"Pallet Functionality"),(0,r.kt)("br",null),(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn zkappRegister(programHash: Hash, zkvmType: ZkvmType)"),": Register a zkapp on the pallet",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn addAssetSuppport(programHash: Hash, asset: Asset)"),": Add support of one asset in the zkapp",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn changeSubmitter(programHash: Hash, asset: Asset, newSubmitter: AccountId)"),": Change the submitter of the zkapp",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn setInactive(programHash: Hash)"),": Set the zkapp is inactive, no batch can be submitted in the future, and the users can send an exit transaction to withdraw their assets",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn submitBatch(programHash: Hash, oldStateRoot: Hash, newStateRoot: Hash, operations: Vec<Operation>, proof: Vec<u8>)"),": Submit a new batch providing the L2 operations (transfer, swap, move, withdraw)",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn deposit(programHash: Hash, asset: Asset)"),": Deposits a given amount of assets into the zkapp.",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn withdraw(programHash: Hash, asset: Asset)"),": Withdraws a given amount of assets from the zkapp to the owner",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn moveAsset(fromProgramHash: Hash, toProgramHash: Hash, asset: Asset)"),": Move a given amount of assets from one zkapp to another zkapp",(0,r.kt)("br",null),"   - ",(0,r.kt)("inlineCode",{parentName:"td"},"fn exit(programHash: Hash)"),": If one zkapp is inactive, the user can exit the zkapp and withdraw the assets",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Miden verifier in Open rollup Pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"We provide the verifier trait suitable for general apps, and a miden verifier that implements the verifier trait.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A proof and verification protocol for developing Cairo programs using the Rust language. "),(0,r.kt)("li",{parentName:"ul"},"Add recursive zero-knowledge proof protocol")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Recommendation from a friend in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bifrost-finance/bifrost"},"Bifrost")," team."))}m.isMDXComponent=!0}}]);