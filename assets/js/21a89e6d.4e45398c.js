"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1859],{33612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},r="Asylum",o={unversionedId:"applications/asylum",id:"applications/asylum",title:"Asylum",description:"- Team Name: Asylum",source:"@site/docs/applications/asylum.md",sourceDirName:"applications",slug:"/applications/asylum",permalink:"/Grants-Program/applications/asylum",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/applications/asylum.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Asylum overview",id:"asylum-overview",level:4},{value:"Asylum PoC overview",id:"asylum-poc-overview",level:4},{value:"Pallet",id:"pallet",level:5},{value:"Game Developers Console",id:"game-developers-console",level:5},{value:"Connection library",id:"connection-library",level:5},{value:"Games",id:"games",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Basic in-game NFT items standard and web-app",id:"milestone-1--basic-in-game-nft-items-standard-and-web-app",level:3},{value:"Milestone 2 \u2014 Extended web-app and testing games",id:"milestone-2--extended-web-app-and-testing-games",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asylum"},"Asylum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Asylum"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x4dE01f5904651353021b9694f16FAb5f02DCD00e (USDT (ERC20))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Asylum is a metaverse for next generation gaming."),(0,i.kt)("p",null,"Our vision of the future of gaming is unicity between the games: interoperability of the in-game items, unified economics, cross-game gameplay, etc. Nothing of that can be achieved without users' trust and here is where blockchain gaming is becoming a solution. Thanks to the migration of the games' economics and in-game items to the blockchain, players don't have to trust some particular game publishers or marketplaces and the game economy and world will become more stabilized."),(0,i.kt)("p",null,"But in fact, it's not the only thing that blockchain can give us. We, at the Asylum, believe that if the approaches to blockchain gaming will be standardized we will achieve much more than just trust - we can achieve the real metaverse experience, where will be no borders between the games and no limits for the creative minds. With the creation of basic building blocks for the gaming metaverse, we want to do for crypto gaming what Polkadot doing for the blockchains."),(0,i.kt)("p",null,"The ecosystem and standards of the Asylum are not going to be related to some specific blockchain, as the new chains, more suitable for games, can be created anytime. And in addition, the requirements of game developers can differ and we are not seeking to limit their choice. So, we are developing Asylum to support firstly substrate-based chains, as they are developed with interoperability in mind. Particularly Polkadot, as it provides access to the ecosystem of many different parachains with various possibilities and bridges to the most popular chains."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h4",{id:"asylum-overview"},"Asylum overview"),(0,i.kt)("p",null,"The Asylum project is about building the ecosystem, where every \u0441omponent is connected with each other, achieving a synergy."),(0,i.kt)("p",null,"So, the best way to give a detailed description of the Asylum - is to define its main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interoperability standards"))),(0,i.kt)("p",null,"The standard for storing the metadata will be used for NFT, representing ",(0,i.kt)("strong",{parentName:"p"},"in-game items"),". The main goal of this standard is to make every item as independent of the concrete game as possible. Storing various possible interpretations will give the ability to use them in different games.\nBased on this standard we plan also to introduce the ",(0,i.kt)("strong",{parentName:"p"},"standard for Avatar")," - player's identity in a virtual space. Like in-game items, Avatar standard will make it compatible with different games."),(0,i.kt)("p",null,"Also, besides the mentioned standards, we will create the ",(0,i.kt)("strong",{parentName:"p"},"standard for game distribution")," system using NFTs - one for developers, as the confirmation of their ownership, and another for players, like NFT-tickets to the game."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"On-chain metaverse ecosystem"))),(0,i.kt)("p",null,"The part of the Asylum project is an on-chain code (on layer 1, or layer 3), that gives the basic functionality to the games based on the blockchain.\n",(0,i.kt)("strong",{parentName:"p"},'"Core" block')," will cover the operations with the standards, defined below. Also, there will be an ",(0,i.kt)("strong",{parentName:"p"},"Economic block"),", which will include, but is not limited to Marketplace and token swap contracts to unite the economy of the games. And in addition, we want to extend our ecosystem with ",(0,i.kt)("strong",{parentName:"p"},"gameplay helpers block"),", such as a smart-contract for creating contracts between players, or any other repeatable gameplay logic that can be moved to the blockchain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Framework for ecosystem integration"))),(0,i.kt)("p",null,"As all functionality mentioned below is meant to be used by clients (apps, games) we will provide a framework for easy ecosystem integration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Application with admin tools"))),(0,i.kt)("p",null,"For game development studios will be created an ",(0,i.kt)("strong",{parentName:"p"},'"Admin console"')," - web app, where the game admin will be able to operate the game: add new items, tokens, etc."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Application with players interface"))),(0,i.kt)("p",null,"For players, Asylum will provide an application, similar to the common gaming platforms (like Steam) with Game store, Library, Inventory, and Avatar pages. Also, there will be introduced the ",(0,i.kt)("strong",{parentName:"p"},"Creator studio")," which will be used as a UGC tool - for the creation of the new items or adding interpretations for the existing ones."),(0,i.kt)("p",null,"A simple scheme with Asylum ecosystem components:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gitlab.com/asylum-space/asylum-docs/-/raw/main/materials/Asylum-core-components.png",alt:"Core-components"})),(0,i.kt)("p",null,"As it was described above, Asylum is a big and complex project. However, we are at the start for now, and work related to this grant application is about to build a PoC of our ecosystem."),(0,i.kt)("h4",{id:"asylum-poc-overview"},"Asylum PoC overview"),(0,i.kt)("p",null,"As a PoC we want to deliver a compact version of our ecosystem: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Substrate pallet with basic API for creating templates, minting in-game item NFTs, and updating items metadata. Our pallet will utilize ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate"},"https://github.com/rmrk-team/rmrk-substrate"),"."),(0,i.kt)("li",{parentName:"ol"},"Game Developers Console (admin web application), which allows creating/editing NFTs, uploading media resources for in-game items, and trying them on different games."),(0,i.kt)("li",{parentName:"ol"},"Connection library, which provides integration of the Asylum on-chain ecosystem into the client applications. "),(0,i.kt)("li",{parentName:"ol"},"Two sandbox games (2d and 3d), where admins can try out in-game items.")),(0,i.kt)("h5",{id:"pallet"},"Pallet"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tech: Rust, Substrate, JS (for tests)")),(0,i.kt)("p",null,"We will extend the RMRK Core pallet (built on top of the Uniques pallet) and introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"Asylum Core")," Pallet."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gitlab.com/asylum-space/asylum-item-nft/-/raw/basic-functionality/pallets/asylum-core/docs/Pallet-extension.png",alt:"Pallet-extension"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disclaimer: RMRK pallets are in the early stage of development, so the Asylum pallets\u2019 config, dispatchable functions, and storage structure are unstable.")),(0,i.kt)("p",null,"RMRK standard will always support a limited set of operations. For our goal, we need to extend RMRK core mechanics. We plan to create an association between the RMRK Collection and different Interpretation types and Interpretations. Each Item minted from this Template should have the same set of Interpretation types and Interpretations as Template. Updating the Template will lead to possible updating of the Item, but this update won't be forced. We intend to leverage RMRK multi-resource NFT's model to implement the Asylum Interpretation concept. Still, the current RMRK pallet state won't allow us to predict the best way to do this. For example, we need Resource mutability ","[https://github.com/rmrk-team/rmrk-spec/issues/44]",". Still, we don't have it right now, so we will manage Item's resources in the Asylum core pallet instead of using the RMRK resource model, but this can change depending on the RMRK pallet pace of development."),(0,i.kt)("p",null,"Dispatchable functions and storage model can be found ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/asylum-space/asylum-item-nft/-/blob/f62d9b694422b8deb40becdfe719182f524ccedf/pallets/asylum-core/INTERFACE.md"},"here")),(0,i.kt)("p",null,"Use-case diagram for pallet:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gitlab.com/asylum-space/asylum-item-nft/-/raw/basic-functionality/pallets/asylum-core/docs/Use-case-diagram.png",alt:"use-case-diagram"})),(0,i.kt)("p",null,"The standard way to work with items via our pallet is given below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Create a template"),"\nTemplate in the Asylum terms is such kind of \u201cNFT collection\u201d where the items have identical interpretations set (at least one interpretation is mandatory, with 'default-view' type). Every item can have its own custom properties, but the only way to  get any interpretation - is to be minted from a template (or updated, will be described below)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mint item"),"\nThe issuer of the Template can mint NFT items within it. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Edit template"),"\nAfter the template was built and items were minted in this collection the only way to update items interpretations set - is to update the template and then every owner of the item will be able to update it to the latest version (if he wants so). The template update process is planned to use DAO approval. However, we will not fully implement it within this grant application, just make a template update proposal logic, which will be automatically approved."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Update item"),"\nAfter the template was updated all items will have the ability to be updated, according to the template, by their owners.")),(0,i.kt)("p",null,'Interpretations for the items will be stored under the string key, which can be composite. Such an approach will give the ability to build "presets".'),(0,i.kt)("p",null,'For example, sword for "Heroes 2D" game can have such interpretations: "heroes-2D-pixeled-inventory-view", "heroes-2D-pixeled-equiped-view", "heroes-2D-pixeled-strike-animation-atlas".\nBy using such structure for keys, the "Heroes 2D" game client will be able to filter interpretations on fetch, to load all resources with the "heroes-2D-pixeled" prefix (in other terms, load "heroes-2D-pixeled" preset).'),(0,i.kt)("h5",{id:"game-developers-console"},"Game Developers Console"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tech: JS, TS, React, Redux")),(0,i.kt)("p",null,"The web application, that we are plan to deliver within this grant application will be a prototype of the Asylum Game Developers Console, where game admins will be able to manage their games and particularly set up the templates for in-game NFTs.\nHowever, in this app, we will also provide two features, that in the future will be available publicly - template update proposal (via Creator Studio) and items explorer."),(0,i.kt)("p",null,"Initial wireframes for application can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/file/wIbe2L0Y1lhuZbsCkSnZgJ/%5BAsylum%5D-Game-Developers-Console?node-id=1011%3A3346"},"here")," along with a comments"),(0,i.kt)("h5",{id:"connection-library"},"Connection library"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tech: JS")),(0,i.kt)("p",null,"This library is about to be a simple wrapper for Asylum on-chain ecosystem, which allows clients to easily integrate it. Library interfaces are currently not defined, but they will cover the base pallet functionality that client apps need."),(0,i.kt)("h5",{id:"games"},"Games"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tech: C#, Unity")),(0,i.kt)("p",null,"Games, delivered within this grant application will be small playable demos, with a purpose to show cross-games NFT items\u2019 use-cases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u201cGame A\u201d will be the 3D \u201cDiablo-like\u201d RPG, build on ",(0,i.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/templates/packs/prodigy-game-framework-119282"},"this")," assets pack\nBasic mechanics:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Base gameplay:\nyou will be able to move, jump and fight with enemies"),(0,i.kt)("li",{parentName:"ul"},"Inventory system\nNFT items will be fetched from the user\u2019s wallet and can be used in the game"),(0,i.kt)("li",{parentName:"ul"},"Loot system\nNFT items can be obtained during the game process\t"),(0,i.kt)("li",{parentName:"ul"},"Characters evolution with items\nNFT items can improve player\u2019s characteristic"))),(0,i.kt)("li",{parentName:"ul"},"\u201cGame B\u201d will be the 2D platformer adventure, build on ",(0,i.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/templates/packs/ninja-rian-complete-game-176835"},"this")," assets pack\nBasic mechanics:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Base gameplay:\nyou will be able to move, jump and fight with enemies"),(0,i.kt)("li",{parentName:"ul"},"Inventory system\nNFT items will be fetched from the user\u2019s wallet and can be used in the game"),(0,i.kt)("li",{parentName:"ul"},"Loot system\nNFT items can be obtained during the game process"),(0,i.kt)("li",{parentName:"ul"},"Hidden locations\nNFT items can gain access to the hidden locations"),(0,i.kt)("li",{parentName:"ul"},"In-game shop\nWith the possibility of passive income of in-game currency")))),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,i.kt)("p",null,"The Polkadot ecosystem should be very attractive for blockchain-based games development, thanks to the possibilities, that parachains opens. Such standards will help create a basis for game development and tools will help developers save their time. So, eventually, Asylum's mission is to create the ecosystem that accelerates games development in the Polkadot network, bringing a gaming experience to a new level."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?")),(0,i.kt)("p",null,"Our target audience is game development studios and their user base (players)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,i.kt)("p",null,"Asylum is seeking to become a starting point for the development of blockchain-based games."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,i.kt)("p",null,"There is the ",(0,i.kt)("a",{parentName:"p",href:"https://www.rmrk.app/"},"RMRK")," project in the Kusama ecosystem. We're considering their standards as a starting point for creating ours."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If so, how is your project different?")),(0,i.kt)("p",null,"The main difference is that Asylum builds a complete ecosystem for gaming when RMRK is only providing a standard for NFTs and tools."),(0,i.kt)("p",null,"Speaking particularly about standards, RMRK provides a basic standard for NFT legos, but Asylum wants to extend it to make a ready-to-use standard for an in-game item."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Illia Abrosimov")," (Founder and \u0421EO)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Markian Ivanichok")," (Co-founder | \u0421EO of Supercolony)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Maria Yaremenko")," (Co-founder)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sven Seven")," (Head of Engineering | Supercolony)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Horacio Lex")," (Rust Blockchain Developer | Supercolony)")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Illia Abrosimov"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:illia.abrosimov@asylum.space"},"illia.abrosimov@asylum.space")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website"),": ",(0,i.kt)("a",{parentName:"li",href:"https://asylum.space/"},"Asylum"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 68 Circular Road, #02-01, 049422, Singapore"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Asylum Labs PTE LTD")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Illia Abrosimov")," - CEO and Founder of Asylum.\nIllia used to be a backend developer since 2015, started coding at Unit Factory, had experience with algorithms, graphics, and game engines.\nWas working at Ubisoft as an online programmer for two years, was dealing with backend infrastructure, led game jams and hackathons.\nHave C#, C/C++, Rust, AWS in the stack."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Markian Ivanichok")," - CEO and co-founder of Supercolony.\nBlockchain entrepreneur, Software Engineer.\nMarkian started his engineering career back when he was 15. Since then, developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded, and invested in Sector F, one of the top consulting companies in Ukraine that help entrepreneurs to move faster.\nCo-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating Polkadot\u2019s ecosystem."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maria Yaremenko")," - Head of operations and co-founder of Asylum.\nIn 2019 started to work as a front-end developer, Maria became interested in blockchain technology and soon started her career as a blockchain developer in the Polkadot ecosystem in 2021.\nMaria has mentorship experience as a computer science tutor with, background in economics."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sven Seven")," - Head of Engineering at Supercolony.\nSoftware engineer with prod experience since 2015. Master degree in Information Security.\nHas worked in finance, e-commerce, networking domains as full-stack dev.\nProgramming languages are JS, Java, Python, Rust, C++.\nBlockchain dev since 2021."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Horacio Lex")," - Blockchain developer at Supercolony. Software engineer since 2018. Master of Science in Applied Mathematics. Has worked in data science and game development. Former Ubisoft employee was working on HUD/UI & gameplay systems. Programming languages are Python, C++, Rust. Blockchain developer since 2021."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/asylum-space/"},"https://gitlab.com/asylum-space/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/asylum-space/asylum-app"},"https://gitlab.com/asylum-space/asylum-app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/asylum-space/asylum-item-nft"},"https://gitlab.com/asylum-space/asylum-item-nft")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/asylum-space/asylum-standards"},"https://gitlab.com/asylum-space/asylum-standards"))),(0,i.kt)("p",null,"Members:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LastSymbol0"},"https://github.com/LastSymbol0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/0xMarkian"},"https://github.com/0xMarkian")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/YaremenkoM"},"https://github.com/YaremenkoM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sventime"},"https://github.com/sventime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SupremaLex"},"https://github.com/SupremaLex"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/illia-abrosimov/"},"https://www.linkedin.com/in/illia-abrosimov/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/maria-yaremenko/"},"https://www.linkedin.com/in/maria-yaremenko/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/0xmarkian/"},"https://www.linkedin.com/in/0xmarkian/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sven-seventimes/"},"https://www.linkedin.com/in/sven-seventimes/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/heorhii-lutsenko-502873164/"},"https://www.linkedin.com/in/heorhii-lutsenko-502873164/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"Asylum was firstly implemented on the Solana Ignition hackathon in its initial idea.\nAfter that, the project received its first positive feedback from game developers and multiple VCs and Supercolony venture studio entered the project as a co-founder. Was held two strategical sessions, the concept was largely clarified and reworked. For now, we already have such partners as Darvinia Network and Evolution land (first DeFi game) and conversations with games such as Eizper Chain, Wind metaverse, SpaceFalcon.io. Also, we have already raised the first money from Mempool ventures and speaking with other VCs (Hillrise Group, Woodstock Fund, 500 Startups, and others)."),(0,i.kt)("p",null,"Materials which was implemented during the time of the hackathon:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LastSymbol0/Asylum"},"Repository of Asylum demo made for Solana Ignition hackathon"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LastSymbol0/asylum-sdk"},"Basic SDK for interactions with the Asylum programs and data"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devpost.com/software/asylum"},"Asylum on devpost"))),(0,i.kt)("p",null,"Actual concept materials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1sEk159ISUZypgUSflsHFyqP0Z7IRJtdl/view"},"Asylum Litepaper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canva.com/design/DAE1y6AHyCA/Lh0gxRtIePVtb_QfzyP6aQ/view?utm_content=DA%5B%E2%80%A6%5Dtm_campaign=designshare&utm_medium=link&utm_source=sharebutton"},"Asylum Pitchdeck"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2-3 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 50,000 USD")),(0,i.kt)("h3",{id:"milestone-1--basic-in-game-nft-items-standard-and-web-app"},"Milestone 1 \u2014 Basic in-game NFT items standard and web-app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a repository with documentation for the defined standard of NFT metadata in the format of text docs (most likely in .md). Also, examples of metadata will be provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"For implemented standard unit tests will be provided along with a guide on how to run them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Item standard definition"),(0,i.kt)("td",{parentName:"tr",align:null},"The definition of the in-game item standard will consist of three parts: JSON schema, descriptive documentation, and examples of usage. Standard properties will be described below in the subparagraphs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.1"),(0,i.kt)("td",{parentName:"tr",align:null},"2D visualization"),(0,i.kt)("td",{parentName:"tr",align:null},"NFT item created with the proposed standard will have the ability to have a visual interpretation in form of a 2D image.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.2"),(0,i.kt)("td",{parentName:"tr",align:null},"3D visualization"),(0,i.kt)("td",{parentName:"tr",align:null},"NFT item created with the proposed standard will have the ability to have a visual interpretation in form of a 3D model.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.3"),(0,i.kt)("td",{parentName:"tr",align:null},"Multiple visual interpretations"),(0,i.kt)("td",{parentName:"tr",align:null},'NFT item created with the proposed standard will have the ability to have multiple visual interpretations, both for 2D or 3D visualization types. Interpretations will be stored under the different tags, for example, "2d-pixeled-inventory-view" or "3d-realistic-equipped".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Asylum Core pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We will deliver the implementation of the described standard. It will be pallets, which will implement base operations with item")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Connection library"),(0,i.kt)("td",{parentName:"tr",align:null},"We will deliver the JS library, that will cover functionality of Asylum Core pallet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Web application"),(0,i.kt)("td",{parentName:"tr",align:null},'We will create a web application that will give an ability to interact with mentioned pallets: create and update template and mint test NFT items. Related to the proposed UI mockups, the "templates section" will be implemented')))),(0,i.kt)("h3",{id:"milestone-2--extended-web-app-and-testing-games"},"Milestone 2 \u2014 Extended web-app and testing games"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 20,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"For manually testing we will provide a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial"),' that explains how a user can interact with the testing environment - go through a "happy path" which includes running a node, hosting web-app and games, minting the NFT in specified standard and trying to use it in two games.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Web application"),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend a web application to make it correspond provided mockups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Unity integration"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a simple library for Unity (SDK) for integration of the Asylum on-chain ecosystem (Asylum Core pallet) into the game client.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Game A"),(0,i.kt)("td",{parentName:"tr",align:null},'We will create a 2d web-faced platformer game sandbox in pixeled style with a small "level" space. A player will have a possibility to move, equip items from the inventory (inventory refers to the assets in the user\'s wallet), and use items (where applicable). The game will use NFT items minted on the Asylum Core pallet via the Unity library.')))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"As was described in the 'Overview' section, Asylum is a big project which has ambitious plans for the future. The milestones described in this grant application are about to become the first step for building a huge ecosystem for crypto gaming. We are planning to create a follow-up grant where we will describe one more game to show interoperability and extend our ecosystem."),(0,i.kt)("p",null,"In our plans, the launch of the Asylum platform is set for the end of the 2022 year, but we are planning to support and extend our product long-term. Also, we would like not only to build but also empower real metaverse gaming by creating Asylum Studio - an independent team that will develop games on top of the Asylum ecosystem."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Roadmap:\n",(0,i.kt)("img",{parentName:"li",src:"https://gitlab.com/asylum-space/asylum-docs/-/raw/main/materials/Asylum-roadmap.jpg",alt:"Roadmap"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canva.com/design/DAE1y6AHyCA/Lh0gxRtIePVtb_QfzyP6aQ/view?utm_content=DA%5B%E2%80%A6%5Dtm_campaign=designshare&utm_medium=link&utm_source=sharebutton"},"Pitch deck"))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,i.kt)("p",null,"Personal recommendation from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.supercolony.net"},"Supercolony"),"."))}u.isMDXComponent=!0}}]);