"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8587],{66308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(8209);const o={},s="SCALE Codec Comparator",l={unversionedId:"RFPs/Under Development/scale-codec-comparator",id:"RFPs/Under Development/scale-codec-comparator",title:"SCALE Codec Comparator",description:"Status:* In progress for Golang, submissions for other languages welcome, Under Development",source:"@site/docs/RFPs/Under Development/scale-codec-comparator.md",sourceDirName:"RFPs/Under Development",slug:"/RFPs/Under Development/scale-codec-comparator",permalink:"/Grants-Program/RFPs/Under Development/scale-codec-comparator",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Under Development/scale-codec-comparator.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Privacy Enhancement for Polkadot Extension",permalink:"/Grants-Program/RFPs/Under Development/privacy-enhancement-polkadot-extension"},next:{title:"Social Recovery Wallet",permalink:"/Grants-Program/RFPs/Under Development/social-recovery-wallet"}},i={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1: Feature-completeness &amp; FFI to Rust",id:"milestone-1-feature-completeness--ffi-to-rust",level:3},{value:"Milestone 2: Badge integration",id:"milestone-2-badge-integration",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scale-codec-comparator"},"SCALE Codec Comparator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arijitAD/dotscale"},"In progress")," for Golang, submissions for other languages welcome, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/scale-codec-comparator.md"},"Under Development")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mmagician/"},"Marcin G\xf3rny"))),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"To date, there are ",(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations"},"9 published")," implementations of the SCALE Codec. Since each is implemented by a different team & ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-scale-codec"},"the reference implementation")," still introduces small fixes, it would be beneficial to compile a table of feature-completeness.\nThis would provide (some) assurance that the implementation in a given language is safe & sound to use."),(0,n.kt)("p",null,"One approach would be to provide wrappers to the Rust reference implementation, like in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/itering/scale.rb/blob/develop/src/lib.rs"},"scale.rb")," and using the Foreign Function Interface (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/itering/scale.rb/blob/develop/spec/ffi_helper.rb"},"here"),") to call these directly from within the library."),(0,n.kt)("p",null,"Stage 2: To take this a step further, a GitHub action could be integrated to run all native unit tests also against the Rust lib. For repos which provide feature completeness & pass all relevant tests, a SCALE specific badge could be awarded."),(0,n.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2+ months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," ~ 12,000 DAI")),(0,n.kt)("h3",{id:"milestone-1-feature-completeness--ffi-to-rust"},"Milestone 1: Feature-completeness & FFI to Rust"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," ~ 10,000 DAI")),(0,n.kt)("p",null,"For each library listed on ",(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations"},"substrate.dev"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a PR, providing a FFI to Rust's reference implementation."),(0,n.kt)("li",{parentName:"ul"},"Ensure feature completeness, by ensuring there are comprehensive unit tests for each data type.")),(0,n.kt)("h3",{id:"milestone-2-badge-integration"},"Milestone 2: Badge integration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Estimated Duration:")," 1 week")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FTE:"),"  1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Costs:")," ~ 2000 DAI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a GitHub badge for SCALE feature complete libs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that each lib listed above has the process of publishing the badge integrated into the CI workflow (e.g. GitHub action to run tests & award badge on successful run)"))),(0,n.kt)("p",null,"Note: The goal is to have your changes merged upstream. While the final decision is taken by the repo owners, you should make sure that your PRs pass all checks specific to each lib, conforms to their contributing guidelines etc."))}u.isMDXComponent=!0}}]);