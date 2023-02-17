"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8363],{81739:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},i="Data Store Pallet",o={unversionedId:"applications/ces_data_store",id:"applications/ces_data_store",title:"Data Store Pallet",description:"- Team Name: CESS LAB",source:"@site/docs/applications/ces_data_store.md",sourceDirName:"applications",slug:"/applications/ces_data_store",permalink:"/Grants-Program/applications/ces_data_store",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/ces_data_store.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Current Solution",id:"current-solution",level:4},{value:"Project Details",id:"project-details",level:3},{value:"High level design",id:"high-level-design",level:4},{value:"Typical example",id:"typical-example",level:4},{value:"API specifications of the core functionality",id:"api-specifications-of-the-core-functionality",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implement Data Store Pallet",id:"milestone-1-implement-data-store-pallet",level:3},{value:"Milestone 2 Implement Custom-built Storage Sidecar Featuring Interaction with Data Store Pallet",id:"milestone-2-implement-custom-built-storage-sidecar-featuring-interaction-with-data-store-pallet",level:3},{value:"Milestone 3 Complete Custom-built Storage Sidecar",id:"milestone-3-complete-custom-built-storage-sidecar",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-store-pallet"},"Data Store Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," CESS LAB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x41fC582784745Ec6B4860F47808b988a473fcEFc(USDT)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Level:")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"background"},"Background"),(0,r.kt)("p",null,"As a versatile blockchain framework, Substrate has a variety of modules (a.k.a. pallets) for developers to reuse. From resource management such as accounts and assets to utilities such as random number generators and schedulers, these existing pallets could meet the need of most developers' application scenarios. However, there is still room for improvement."),(0,r.kt)("p",null,"Recently we have a requirement to implement a data storage service on Substrate, and after checking through all existing pallets, we did not find one that meets our need. So we would like to develop a custom pallet to fulfill this purpose."),(0,r.kt)("p",null,"We are not talking about something very niche here. On the contrary, it is a common scenario that an application would continuously consume and generate various data, whether it is system, user, or just temporary levels, during operations. Many dApps have a large number of scenarios that require off-chain data storage services, such as NFTs. The quality of the storage service chosen will directly affect the performance and reliability of the entire application."),(0,r.kt)("p",null,"So we hope to offer Substrate/Polkadot community with pallets (and toolchains) dedicated for storage services that are compatible with current Substrate APIs. So developers only need to add tiny amount of code change to leverage CESS stable and secure data storage. We believe this will further enhance the development experiences when adopting Substrate and enrich the Polkadot ecosystem."),(0,r.kt)("h4",{id:"current-solution"},"Current Solution"),(0,r.kt)("p",null,"There is only one pallet related to data storage in the existing Substrate FRAME, aka, ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/latest/pallet_transaction_storage/index.html"},"Transaction Storage Pallet"),". It supports running an IPFS node side-by-side with Substrate and allowing data to be retrieved by IPFS after putting it in Substrate storage. However, its application scope is greatly limited due to its inherent characteristics and several defects in the following aspects."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Data need to be uploaded to the blockchain network. Although this data is not actually stored on the chain, they still incur additional gas costs and congestion, which is not suitable for large file storage.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All validator nodes need to establish IPFS service for themselves, which subject to many restrictions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The development is difficult since the Substrate-based code needs to be greatly modified.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This only supports file upload on the Substrate side. Viewers need to retrieve it via IPFS clients."))),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"We design and implement a data storage service based on Substrate. On one hand, there is no need for a validator node to start additional service, and no major modifications to substrate-based code as well. Therefore, developers can easily integrate our storage service, whether it is a newly-built chain or an existing chain. On the other hand, by customizing the storage REST component, users could upload and download data conveniently without installing additional client programs."),(0,r.kt)("h4",{id:"high-level-design"},"High level design"),(0,r.kt)("p",null,"Our proposal architecture is shown in the figure below, which consists of the Data Store Pallet and custom-built Storage Sidecar (inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"),")."),(0,r.kt)("h1",{id:"figure-1-proposal-architecture"},(0,r.kt)("img",{parentName:"h1",src:"https://raw.githubusercontent.com/CESSProject/W3F-illustration/main/substrate-builder-program/09.svg",alt:"Figure 1: Proposal architecture"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 1: Proposal architecture")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Store Pallet"),": Realize the recording and management of stored data. This pallet implements functions related to meta-data, e.g. root data management, data owner management, and data classification regarding the stored data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Custom-built Storage Sidecar"),": Provide RESTful service to interact with Data Store Pallet. The difference from Substrate API Sidecar is that, in addition to the basic functions of interacting with the substrate-based chain, Storage Sidecar encapsulates storage-related API, including data storage and data retrieval. The data transmitted by users will eventually be stored in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CESSProject/cess"},(0,r.kt)("strong",{parentName:"a"},"CESS Storage System"))," through this interface."))),(0,r.kt)("h4",{id:"typical-example"},"Typical example"),(0,r.kt)("p",null,"Data storage and retrieval are the two core features for a data storage service. They are illustrated in details below."),(0,r.kt)("h1",{id:"figure-2-typical-example-process"},(0,r.kt)("img",{parentName:"h1",src:"https://raw.githubusercontent.com/CESSProject/W3F-illustration/main/substrate-builder-program/10.svg",alt:"Figure 2: Typical example process"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 2: Typical example process")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Storage"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A user calls the data storage API of the Custom-built Storage Sidecar to upload the data file;"),(0,r.kt)("li",{parentName:"ol"},"Forward the data to CESS by calling the encapsulated CESS API;"),(0,r.kt)("li",{parentName:"ol"},"Once it is confirmed that the data has been written, Custom-built Storage Sidecar will call Extrinsic to record the relevant information of the data file on-chain;"),(0,r.kt)("li",{parentName:"ol"},"CESS Storage System maintains the integrity and privacy of data throughout its life cycle.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Retrieval"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"A user calls the storage API of the Custom-built Storage Sidecar to retrieve the target data;"),(0,r.kt)("li",{parentName:"ol"},"Custom-built Storage Sidecar to query on-chain data routing information;"),(0,r.kt)("li",{parentName:"ol"},"Call the CESS data retrieval API with the routing info;"),(0,r.kt)("li",{parentName:"ol"},"Retrieve and return the target data from CESS Storage System;"),(0,r.kt)("li",{parentName:"ol"},"Return the target data to Custom-built Storage Sidecar;"),(0,r.kt)("li",{parentName:"ol"},"Custom-built Storage Sidecar updates on-chain information, if necessary;"),(0,r.kt)("li",{parentName:"ol"},"Return the target data to the user.")),(0,r.kt)("h4",{id:"api-specifications-of-the-core-functionality"},"API specifications of the core functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Store Pallet: List of the publicly exposed methods"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 1"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"store"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Dispatchable Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 1 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"filename:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 2 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"fileid:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 3 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"filesize:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 4 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"keywords:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"DispatchResult")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Upload meta-info of stored file on chain.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 2"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"retrieve"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Dispatchable Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 1 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"fileid:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"DispatchResult")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if the caller has permission to get the specified file.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 3"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"replace"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Dispatchable Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 1 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"old_fileid:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 2 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"filename:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 3 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"fileid:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 4 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"filesize:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 5 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"keywords:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"DispatchResult")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Upload and replace old meta-info with new's of stored file on chain.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 4"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"delete"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Dispatchable Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 1 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"del_fileid:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"DispatchResult")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete the meta-info of the specified file, and the caller must be the owner of the file.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"edit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Dispatchable Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 1 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"fileid:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 2 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"new_filename:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 3 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"new_keywords:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"DispatchResult")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Support to modify meta-info of the owner's specified file.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 6"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"query"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom RPC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter 1 (Type)"),(0,r.kt)("td",{parentName:"tr",align:null},"keywords:Vec\\<u8",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"queried meta-info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Support to query meta-info of the owner's specified file with some keywords.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom-built Storage Sidecar: New API interface overview"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"API Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/store"),(0,r.kt)("td",{parentName:"tr",align:null},"Store files to the CESS storage system and will call store extrinsic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/retrieve"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if the caller has permission with retrieve extrinsic and get the specified file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace stored file with new one and store to the CESS storage system, then call replace extrinsic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Call delete extrinsic and delete the file in CESS storage system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Support to modify meta-info of the owner's specified file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/query"),(0,r.kt)("td",{parentName:"tr",align:null},"Support to query meta-info of the owner's specified file with some keywords.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/list"),(0,r.kt)("td",{parentName:"tr",align:null},"List all the files info of caller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,r.kt)("p",null,"Our project offers storage services to all Substrate-based networks in a convenient way which currently does not have a good enough solution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?")),(0,r.kt)("p",null,"The substrate developers who want to get storage services."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teh Sunn Liu"),(0,r.kt)("li",{parentName:"ul"},"Yeou Sunn Liu"),(0,r.kt)("li",{parentName:"ul"},"Ted Zhang")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Jessie Dai"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:jessie@cess.cloud"},"jessie@cess.cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"http://cess.cloud"},"http://cess.cloud"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Paul David Humphreys")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"We have a team of professionals in getting this done. The backgrounds of team members include but are not limited to cloud computing, consensus algorithms and distributed storage. Most of them have been working in their respective fields for many years and have rich industry experience and solutions. The team members are distributed in the UK, the US, China and India, ranging from research scholars and cryptography experts to senior technical managers and Substrate development engineers."),(0,r.kt)("p",null,"So far, one of the team's project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CESSProject/cess"},(0,r.kt)("strong",{parentName:"a"},"CESS"))," is gradually integrating into the Polkadot ecosystem. Won the 1st Place in Polkadot Hackthon APAC Edition in 2021, passed all deliveries of a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md"},(0,r.kt)("strong",{parentName:"a"},"applied grant")),", and officially joined the Substrate Builder Program on February 14, 2022."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CESSProject"},"https://github.com/CESSProject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CESSProject/cess"},"https://github.com/CESSProject/cess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CESSProject/fmd-cess"},"https://github.com/CESSProject/fmd-cess"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("p",null,"This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,r.kt)("a",{parentName:"p",href:"../docs/grant_guidelines_per_category.md"},"here"),". Since these will be part of the agreement, it helps to describe ",(0,r.kt)("em",{parentName:"p"},"the functionality we should expect in as much detail as possible"),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."),(0,r.kt)("p",null,"Below we provide an ",(0,r.kt)("strong",{parentName:"p"},"example roadmap"),". In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We ",(0,r.kt)("em",{parentName:"p"},"recommend")," that teams structure their roadmap as 1 milestone \u2248 1 month."),(0,r.kt)("p",null,"For each milestone,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"make sure to include a specification of your software. ",(0,r.kt)("em",{parentName:"li"},"Treat it as a contract"),"; the level of detail must be enough to later verify that the software meets the specification."),(0,r.kt)("li",{parentName:"ul"},"include the amount of funding requested ",(0,r.kt)("em",{parentName:"li"},"per milestone"),"."),(0,r.kt)("li",{parentName:"ul"},"include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community."),(0,r.kt)("li",{parentName:"ul"},"provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them."),(0,r.kt)("li",{parentName:"ul"},"commit to providing Dockerfiles for the delivery of your project."),(0,r.kt)("li",{parentName:"ul"},"indicate milestone duration as well as number of full-time employees working on each milestone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deliverables 0a-0d are mandatory for all milestones"),", and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a1 If any of your deliverables is based on somebody else's work, make sure you work and publish ",(0,r.kt)("em",{parentName:"p"},"under the terms of the license")," of the respective project and that you ",(0,r.kt)("strong",{parentName:"p"},"highlight this fact in your milestone documentation")," and in the source code if applicable! ",(0,r.kt)("strong",{parentName:"p"},"Teams that submit others' work without attributing it will be immediately terminated."))),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 9,000 USD")),(0,r.kt)("h3",{id:"milestone-1-implement-data-store-pallet"},"Milestone 1 Implement Data Store Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 3,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate module: data_store"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will implement meta-info management of stored data, including functions such as store, retrieve, replace, delete, edit, query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,r.kt)("td",{parentName:"tr",align:null},"The module will be on par with other pallets in FRAME, fully equipped with benchmarking, weights, tests.")))),(0,r.kt)("h3",{id:"milestone-2-implement-custom-built-storage-sidecar-featuring-interaction-with-data-store-pallet"},"Milestone 2 Implement Custom-built Storage Sidecar Featuring Interaction with Data Store Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 3,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"CESS Storage"),(0,r.kt)("td",{parentName:"tr",align:null},"We will integrate CESS storage module in Custom-built Storage Sidecar to support the data storage service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Data Store API"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement the data store API to support interaction with the data store pallet based on the stable version of the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"),", which contains at least 6 new interfaces required for data storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint Docs"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write Endpoint Docs explaining the usage of the all implemented RESTful API.")))),(0,r.kt)("h3",{id:"milestone-3-complete-custom-built-storage-sidecar"},"Milestone 3 Complete Custom-built Storage Sidecar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 3,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,r.kt)("strong",{parentName:"td"},"article"),"/workshop that explains our project's features, implementation, and user guidelines.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Data Integrity Verification"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide integrity verification for stored data to improve the quality of storage services.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Data Store API"),(0,r.kt)("td",{parentName:"tr",align:null},"We will add data storage functionality to the data store API, which adapts to existing interactions with Data Store Pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint Docs"),(0,r.kt)("td",{parentName:"tr",align:null},"We will update the Endpoint Docs to fit the upgraded Custom-built Storage Sidecar, which adds data storage features.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"In the short term, we will promote our project to get more people to use and test it. Next, we will continue to maintain component versions to accommodate Substrate updates, and as much as possible to provide more reliable storage services."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," We have heard from Parity Asia."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What work has been done already?")," We have already implemented a design prototype."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Have you ever applied for other grants?")," We had applied a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md"},"grant")," that had passed all the milestone deliveries on January 25, 2022."))}u.isMDXComponent=!0}}]);