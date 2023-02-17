"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4483],{79044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));a(8209);const r={},i="Spacewalk: a Stellar bridge",o={unversionedId:"applications/spacewalk-bridge",id:"applications/spacewalk-bridge",title:"Spacewalk: a Stellar bridge",description:"- Team Name: Pendulum",source:"@site/docs/applications/spacewalk-bridge.md",sourceDirName:"applications",slug:"/applications/spacewalk-bridge",permalink:"/Grants-Program/applications/spacewalk-bridge",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/spacewalk-bridge.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team\u2019s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2013 Multi asset support",id:"milestone-1--multi-asset-support",level:3},{value:"Milestone 2 \u2013 Stellar oracle",id:"milestone-2--stellar-oracle",level:3},{value:"Milestone 3 \u2013 Multi asset collateral management",id:"milestone-3--multi-asset-collateral-management",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spacewalk-a-stellar-bridge"},"Spacewalk: a Stellar bridge"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Pendulum"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x41826C59a853969DA6B819130E1c32A9fd7c94ba#tokentxns"},"0x41826C59a853969DA6B819130E1c32A9fd7c94ba")," (DAI)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Spacewalk is a bridge between Substrate-based parachains and ",(0,n.kt)("a",{parentName:"p",href:"https://stellar.org"},"Stellar")," which enables asset transfers to and from Stellar. This grant application is for developing the ",(0,n.kt)("em",{parentName:"p"},"Spacewalk protocol and pallet"),". The Spacewalk bridge is built by the team behind the ",(0,n.kt)("a",{parentName:"p",href:"http://pendulumchain.org"},"Pendulum")," network (an upcoming parachain that connects fiat tokens from across multiple blockchain ecosystems)."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,"Spacewalk bridge is developed to be a decentralized and trustless bridge to Stellar. This bridge enables two main activities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deposit"),": bridge any Stellar asset to Substrate-based chains. The tokens of the source asset are transferred to some dedicated ",(0,n.kt)("strong",{parentName:"li"},"vault")," in Stellar where they are locked. The bridge then mints wrapped tokens in the target chain and transfers them to the recipient account."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Withdrawal"),": bridge wrapped tokens in Substrate-based chains to Stellar. First, the user instructs the bridge to burn wrapped tokens in the Substrate-based chain. Afterwards, an appropriate vault unlocks tokens and transfers them to some target account.")),(0,n.kt)("p",null,"Stellar is not smart contract capable \u2013 therefore we follow the recommendation laid out in the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-bridges#via-higher-order-protocols"},"Polkadot documentation")," and base our bridge design on XCLAIM, which is based on the following four core features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement a chain relay for Stellar in the bridge pallet"),(0,n.kt)("li",{parentName:"ul"},"Employ collateralization in order to ensure that the vault exhibits good behavior"),(0,n.kt)("li",{parentName:"ul"},"Ensure that the economic value of the collateral exceeds the value of the vault"),(0,n.kt)("li",{parentName:"ul"},"Enable a decentralized network of vaults")),(0,n.kt)("p",null,"XCLAIM has been implemented and further improved by ",(0,n.kt)("a",{parentName:"p",href:"https://interlay.io/"},"Interlay")," for the open source Bitcoin bridge ",(0,n.kt)("em",{parentName:"p"},"interBTC"),". Spacewalk is based on the interBTC implementation. It differs from interBTC as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Currently Stellar does not use Merkle trees inside its blocks. Therefore, there is no efficient way to prove that a transaction is included in a block given only the block header \u2013 a prover would require to complete the complete set of transactions instead of a Merkle path."),(0,n.kt)("li",{parentName:"ul"},"Stellar does not employ Nakamoto consensus but a custom consensus algorithm called ",(0,n.kt)("a",{parentName:"li",href:"https://www.stellar.org/papers/stellar-consensus-protocol"},"Stellar Consensus Protocol"),". For that reason it is not possible to infer from sequences of block headers alone which sequence is valid \u2013\xa0for Nakamoto consensus this is simply the sequence with the highest amount of work."),(0,n.kt)("li",{parentName:"ul"},"Stellar supports custom assets: every account holder can create new assets and mint their own tokens. Spacewalk supports to bridge any Stellar asset to the Substrate chain. This implies that the Spacewalk pallet can dynamically create and mint new assets that are not known beforehand.")),(0,n.kt)("p",null,"The first two differences imply that there is no efficient way to implement an SPV client and a chain relay for Stellar. Spacewalk will address this by replacing the chain relay with an oracle for Stellar."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Architecture")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15174476/150945211-31393eef-9e86-425d-921a-a48e3fd7af70.png",alt:"Stellar Bridge Web3 Grant(5)"})),(0,n.kt)("p",null,"The architecture of the bridge consists of the following components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vaults"),": this is a set of escrow accounts used to lock assets in Stellar. Their behavior is defined in XCLAIM and interBTC. In Spacewalk they have an additional property: each vault has an allow list of assets that it can lock and support for bridging operations between Stellar and the Substrate chain. This allow list is implemented through ",(0,n.kt)("a",{parentName:"li",href:"https://developers.stellar.org/docs/issuing-assets/anatomy-of-an-asset/#trustlines"},"trustlines")," of the Stellar account. There can be at most 1000 supported assets per vault due to limitations in Stellar. Stellar users initiate a deposit by sending tokens to an appropriate vault, which they request from the bridge pallet prior to the deposit. Likewise vaults will unlock and send tokens back to Stellar accounts during a withdrawal. Every vault needs to lock a certain amount of DOT or KSM (or related) tokens as collateral with the bridge pallet. These tokens are slashed in case the vault misbehaves."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bridge Pallet"),": this is the main component of the Spacewalk bridge that implements all logic on the side of the Substrate-based chain. Its behavior is based on interBTC. It is particularly responsible for minting tokens during deposits and burning tokens during withdrawals. It is able to support any Stellar asset by employing the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/tokens"},"Tokens")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/currencies"},"Currrencies")," pallets of the Substrate Open Runtime Module Library. The storage of the bridge pallet maintains the complete state that is required for the bridge to work correctly. This state contains (among others): the account ids of the vaults, the asset allow lists of each vault and book keeping information about the state of the Stellar network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stellar Oracle"),": is a decentralized system that provides information about the state of the Stellar network to the bridge pallet. In interBTC this is implemented through a Bitcoin chain relay. However, for reasons explaned above we cannot implement a chain relay for Stellar in the same way. The Stellar oracle is trustless and reliable and its functionality is based on specific unique aspects of Stellar:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Stellar network has multiple levels of tiers, where the nodes in ",(0,n.kt)("em",{parentName:"li"},"Tier 1")," enjoy the highest level of trust of its peers. There are currently 23 Tier 1 nodes; this set and its structure is rather static and only changes rarely. It only ever changes through a voting process. We will incorporate complete information about the Tier 1 network in the bridge pallet."),(0,n.kt)("li",{parentName:"ul"},"Every Stellar node has a static signing key pair and signs messages that it gossips to the network. Particularly, every node announces through a signed message that a block has been finalized. The decentralized oracle will forward these signed messages from Tier 1 nodes to the bridge pallet. This way the bridge pallet can reliably infer what Stellar blocks are finalized.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Out of scope")),(0,n.kt)("p",null,"The following aspects are out of scope of the current proposal and subject to future applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stellar protocol updates that are required to implement a chain relay/light client/simplified payment verification for Stellar as a Substrate pallet")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"The Spacewalk bridge is the first bridge between the Stellar network and the Polkadot/Kusama ecosystem, which opens up a flow of stable tokens from the Stellar network into the Polkadot/Kusama ecosystem and, simultaneously, allow any Substrate-based blockchains to implement a direct Stellar bridge."),(0,n.kt)("p",null,"As part of the Pendulum goal of bringing as much fiat-based token liquidity to the parachain ecosystems, Spacewalk plays a central role. Furthermore, the entire community can benefit from this bridge by innovating on the open source code."),(0,n.kt)("p",null,"Currently, we are not aware of any projects in the Substrate/Polkadot/Kusama ecosystem that are building a bridge to the Stellar network, but similar bridges are being built for Ethereum layer 2 networks, such as the ",(0,n.kt)("a",{parentName:"p",href:"https://bridge.newscrypto.io/"},"Newscrypto")," bridge between Polygon and Stellar."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Meinhard Benn, Chairman"),(0,n.kt)("li",{parentName:"ul"},"Dr. Torsten St\xfcber, CTO"),(0,n.kt)("li",{parentName:"ul"},"Gonza Montiel, Full stack engineer")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Erasmus Hagen"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:erasmus@satoshipay.io"},"erasmus@satoshipay.io")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://pendulumchain.org/"},"pendulumchain.org"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, St. Lucia."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Pendulum Development Ltd.")),(0,n.kt)("h3",{id:"teams-experience"},"Team\u2019s experience"),(0,n.kt)("p",null,"Meinhard Benn"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Involved in blockchain since 2011"),(0,n.kt)("li",{parentName:"ul"},"One of the first miners of the Ethereum network"),(0,n.kt)("li",{parentName:"ul"},"SatoshiPay developed one of the first payment channels in Bitcoin")),(0,n.kt)("p",null,"Dr. Torsten St\xfcber"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ph.D. in theoretical Computer Science"),(0,n.kt)("li",{parentName:"ul"},"7 year academic researcher and lecturer in",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"formal languages, automata theory, complexity theory, computational logic, natural language processing, machine learning, cryptography"))),(0,n.kt)("li",{parentName:"ul"},"author of a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/TorstenStueber/TweetNacl-WebAssembly"},"WASM cryptography library"))),(0,n.kt)("p",null,"Eng. Gonzalo Montiel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Computer Science Engineer"),(0,n.kt)("li",{parentName:"ul"},"Degree orientation in production systems and automation"),(0,n.kt)("li",{parentName:"ul"},"10 years in the software industry as: Core/backend developer, technical Leader, team manager"),(0,n.kt)("li",{parentName:"ul"},"1 year as researcher in computer vision")),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pendulum-chain"},"https://github.com/pendulum-chain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pendulum-chain/pendulum"},"https://github.com/pendulum-chain/pendulum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pendulum-chain/pendulum-prototype"},"https://github.com/pendulum-chain/pendulum-prototype"))),(0,n.kt)("p",null,"Members:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gonzamontiel"},"https://github.com/gonzamontiel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TorstenStueber"},"https://github.com/TorstenStueber"))),(0,n.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/meinhard/"},"https://www.linkedin.com/in/meinhard/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/torstenstueber/"},"https://www.linkedin.com/in/torstenstueber/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/gonzamontiel/"},"https://www.linkedin.com/in/gonzamontiel/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"A single-node prototype of the bridge has been developed. See the link:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pendulum-chain/pendulum-prototype"},"Prototype bridge GitHub repo"))),(0,n.kt)("p",null,"A detailed bridge concept is currently being researched (described in this grant application)"),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 Months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 0.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD")),(0,n.kt)("h3",{id:"milestone-1--multi-asset-support"},"Milestone 1 \u2013 Multi asset support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 0.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 3,000 USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains how we extend interBTC to support multiple Stellar assets and that provides an overview of the upcoming milestones of the protocol.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Protocol specification"),(0,n.kt)("td",{parentName:"tr",align:null},"The protocol will describe how vaults need to behave in order to support multiple Stellar asset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2a."),(0,n.kt)("td",{parentName:"tr",align:null},"Multi asset deposit"),(0,n.kt)("td",{parentName:"tr",align:null},"Add support for a deposit operation involving any possible Stellar asset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2b."),(0,n.kt)("td",{parentName:"tr",align:null},"Multi asset withdrawal"),(0,n.kt)("td",{parentName:"tr",align:null},"Add support for a withdrawal operations involving any possible Stellar asset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2c."),(0,n.kt)("td",{parentName:"tr",align:null},"Stellar asset allow list"),(0,n.kt)("td",{parentName:"tr",align:null},"1) Allow vaults to register the set of allow listed Stellar assets with the Spacewalk pallet. 2) Allow users to query vaults and their supported assets from the Spacewalk pallet.")))),(0,n.kt)("h3",{id:"milestone-2--stellar-oracle"},"Milestone 2 \u2013 Stellar oracle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 12,000 USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains the completed Spacewalk protocol and pallet that we built as part of the grant.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Protocol specification"),(0,n.kt)("td",{parentName:"tr",align:null},"The protocol will specify how the Stellar oracle behaves and what messages it forwards to the bridge pallet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Stellar oracle consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"The bridge pallet processes information received from the oracle, which comprises signed messages from Tier 1 Stellar nodes. This is used to reliably find consensus about finalized Stellar blocks and incoming deposits.")))),(0,n.kt)("h3",{id:"milestone-3--multi-asset-collateral-management"},"Milestone 3 \u2013 Multi asset collateral management"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 2.5 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Protocol specification"),(0,n.kt)("td",{parentName:"tr",align:null},"The protocol will describe how vaults need to behave in case of vault liquidations involving multiple Stellar assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Monitoring of collatoral"),(0,n.kt)("td",{parentName:"tr",align:null},"The bridge pallet monitors whether vaults need to be liquidated. This requires to take all locked tokens for every supported token of a specific vault into account.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"This application covers the open source Spacewalk pallet and API/protocol definition. A fully functioning instance of a Spacewalk bridge will be implemented in parallel for Pendulum. With close connections in the Stellar ecosystem, Pendulum will encourage participation in the bridge network through key partnerships."),(0,n.kt)("p",null,"The Spacewalk project grows beyond the first version alongside the community of users and open source contributors, as we have seen interest in both the Stellar and Substrate communities for such a bridge. Pendulum itself will be the first use case for the bridge and will naturally justify further investment in maintenance and expansion."),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Any other grants?")," The Pendulum prototype was supported with a grant from the Stellar Development Foundation."))}d.isMDXComponent=!0}}]);