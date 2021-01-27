(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(138)),i={id:"translator-standards",title:"Translator Standards"},s={unversionedId:"translator-standards",id:"translator-standards",isDocsHomePage:!1,title:"Translator Standards",description:"This page provides a big picture of the various standards developed and used in the NCATS Biomedical Data Translator project.",source:"@site/docs/translator-standards.md",slug:"/translator-standards",permalink:"/docs/translator-standards",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/translator-standards.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1611746731,sidebar:"docs",previous:{title:"Setting up MySQL",permalink:"/docs/guide-mysql"},next:{title:"Argo installation",permalink:"/docs/argo-install"}},l=[{value:"BioLink model",id:"biolink-model",children:[]},{value:"Translator Reasoner API",id:"translator-reasoner-api",children:[]},{value:"Knowledge Graph eXchange",id:"knowledge-graph-exchange",children:[]},{value:"BioThings",id:"biothings",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page provides a big picture of the various standards developed and used in the NCATS Biomedical Data Translator project."),Object(o.b)("p",null,"What we mean about a ",Object(o.b)("strong",{parentName:"p"},"Translator API"),": an API developed in the context of the Translator project, by a Knowledge Provider (KP), or an Autonomous Relay Agent (ARA). A Translator API implements Translator standards to query the exposed data, and is described using the OpenAPI specifications."),Object(o.b)("h2",{id:"biolink-model"},"BioLink model"),Object(o.b)("p",null,"A high-level semantic model to represent biological and biomedical knowledge. "),Object(o.b)("p",null,"All Translator data and tools comply with this model: data is annotated using BioLink concepts, and tools can use the BioLink model to query the data."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/biolink/biolink-model/blob/master/biolink-model.yaml"}),"BioLink model is defined in a YAML file")," using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://biolink.github.io/biolinkml/"}),"BioLink modelling language (biolinkml)"),". From the YAML-defined model ",Object(o.b)("inlineCode",{parentName:"p"},"biolinkml")," automatically generates all resources required to define the BioLink model:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OWL ontology"),Object(o.b)("li",{parentName:"ul"},"ShEx shape for data validation"),Object(o.b)("li",{parentName:"ul"},"JSON-LD context"),Object(o.b)("li",{parentName:"ul"},"GraphQL schema"),Object(o.b)("li",{parentName:"ul"},"Human-readable documentation"),Object(o.b)("li",{parentName:"ul"},"And more...")),Object(o.b)("p",null,"Visit the BioLink model documentation at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://biolink.github.io/biolink-model/docs"}),"https://biolink.github.io/biolink-model/docs")),Object(o.b)("h2",{id:"translator-reasoner-api"},"Translator Reasoner API"),Object(o.b)("p",null,'Also known as "',Object(o.b)("strong",{parentName:"p"},"TRAPI"),'", or just "Reasoner API"'),Object(o.b)("p",null,"TRAPI defines standard operations to query a Translator API, described using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openapis.org/"}),"OpenAPI specifications")," (in an ",Object(o.b)("inlineCode",{parentName:"p"},"openapi.yml")," file). The TRAPI API operations are implemented in every Translator API, and allow to query the data using the BioLink model and a standard JSON model. It returns the results using a standard JSON message. Note that Translator APIs can also implement their own operations, alongside the TRAPI operations."),Object(o.b)("p",null,"See the Translator Reasoner API standard GitHub repository:\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NCATSTranslator/ReasonerAPI"}),"https://github.com/NCATSTranslator/ReasonerAPI")),Object(o.b)("p",null,"Example of a TRAPI 1.0.0 query message using the BioLink model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "query_graph": {\n        "nodes": {\n            "n0": {\n                "category": "biolink:Disease",\n                "id": "MONDO:0005737"\n            },\n            "n1": {\n                "category": "biolink:Gene"\n            }\n        },\n        "edges": {\n            "e01": {\n                "subject": "n0",\n                "object": "n1"\n            }\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"knowledge-graph-exchange"},"Knowledge Graph eXchange"),Object(o.b)("p",null,'Also known as "',Object(o.b)("strong",{parentName:"p"},"KGX"),'"'),Object(o.b)("p",null,"A format to define knowledge graphs by providing nodes and edges in CSV files"),Object(o.b)("p",null,"KGX is particularly used to share and load large Knowledge Graphs as dumps."),Object(o.b)("p",null,"See the python library on GitHub at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/biolink/kgx"}),"https://github.com/biolink/kgx")),Object(o.b)("h2",{id:"biothings"},"BioThings"),Object(o.b)("p",null,'Also known as "',Object(o.b)("strong",{parentName:"p"},"BTE"),'", "',Object(o.b)("strong",{parentName:"p"},"Smart API"),'\xa0specifications", or just "BioThings"'),Object(o.b)("p",null,"This standard extend the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://smart-api.info/guide"}),"Smart API specifications")," (which is an extension of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openapis.org/"}),"OpenAPI specifications"),') enabling to annotate non-standard API operations to make them "more standard" (so that the BioThings Explorer can analyze the API specifications to retrieve more informations about the API call, such as the types of inputs and outputs)'),Object(o.b)("p",null,"Originally the BioThings specifications are part of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://biothings.io/"}),"BioThings API ecosystem"),", which provides scalable tools in Python to expose data as standard APIs."),Object(o.b)("p",null,"See the BioThings GitHub organization:\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/biothings"}),"https://github.com/biothings")))}p.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);