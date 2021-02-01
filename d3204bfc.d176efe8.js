(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(141)),i={id:"use-python",title:"Use Python"},c={unversionedId:"use-python",id:"use-python",isDocsHomePage:!1,title:"Use Python",description:"Add a requirements file",source:"@site/docs/use-python.md",slug:"/use-python",permalink:"/docs/use-python",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/use-python.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1612204462,sidebar:"docs",previous:{title:"Define RML mappings",permalink:"/docs/convert-rml"},next:{title:"Deploy workflows",permalink:"/docs/workflow-github"}},p=[{value:"Add a requirements file",id:"add-a-requirements-file",children:[]},{value:"Python for preprocessing",id:"python-for-preprocessing",children:[]},{value:"Python for RDF conversion",id:"python-for-rdf-conversion",children:[{value:"RDFLib",id:"rdflib",children:[]},{value:"Pandas",id:"pandas",children:[]},{value:"Dipper",id:"dipper",children:[]}]},{value:"Data Science on knowledge graphs",id:"data-science-on-knowledge-graphs",children:[{value:"kglab",id:"kglab",children:[]},{value:"pyRDF2Vec",id:"pyrdf2vec",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"add-a-requirements-file"},"Add a requirements file"),Object(o.b)("p",null,"Always add a ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file at the root of your repository with all libraries required to run your Python scripts."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"rdflib\nSPARQLWrapper\npandas\ndipper\n")),Object(o.b)("p",null,"Command to install the dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pip install -r requirements.txt\n")),Object(o.b)("h2",{id:"python-for-preprocessing"},"Python for preprocessing"),Object(o.b)("p",null,"Python is a good solution to perform preprocessing on the data for tasks not supported by RML. "),Object(o.b)("h2",{id:"python-for-rdf-conversion"},"Python for RDF conversion"),Object(o.b)("h3",{id:"rdflib"},"RDFLib"),Object(o.b)("p",null,"You can perform the conversion to RDF using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://rdflib.readthedocs.io/en/stable/"}),"RDFLib")," library."),Object(o.b)("p",null,"You can easily map any structured data (CSV, TSV, XLSX, SPSS, SQL, XML, JSON, YAML...) to RDF using Python and ",Object(o.b)("inlineCode",{parentName:"p"},"rdflib"),"."),Object(o.b)("h3",{id:"pandas"},"Pandas"),Object(o.b)("p",null,"We recommend to use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pandas.pydata.org/"}),"Pandas")," to handle tabular files as dataframes efficiently."),Object(o.b)("h3",{id:"dipper"},"Dipper"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://dipper.readthedocs.io/en/latest/"}),"Dipper")," is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pypi.org/project/dipper/"}),"Python package")," to generate RDF triples from common scientific resources. It has been used to build and expose RDF from multiple sources for the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://monarchinitiative.org"}),"Monarch Initiative"),"."),Object(o.b)("p",null,"Dipper includes subpackages and modules to create graphical models of this data, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Models package for generating common sets of triples, including  common OWL axioms, complex genotypes, associations, evidence and  provenance models.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Graph package for building graphs with RDFLib or streaming n-triples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Source package containing fetchers and parsers that interface with remote databases and web services"))),Object(o.b)("h2",{id:"data-science-on-knowledge-graphs"},"Data Science on knowledge graphs"),Object(o.b)("h3",{id:"kglab"},"kglab"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/DerwenAI/kglab"}),"kglab")," is an abstraction layer in Python for building knowledge graphs, integrated with popular graph libraries \u2013 atop Pandas, RDFlib, pySHACL, NetworkX,  iGraph, PyVis, pslpython, pyarrow, etc. Check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://derwen.ai/docs/kgl/"}),"kglab documentation"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"kglab")," features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Load a RDF graph with ",Object(o.b)("inlineCode",{parentName:"li"},"rdflib")),Object(o.b)("li",{parentName:"ul"},"Validate the RDF with ",Object(o.b)("inlineCode",{parentName:"li"},"pySHACL")," "),Object(o.b)("li",{parentName:"ul"},"RDFS, OWLRL and SKOS inference"),Object(o.b)("li",{parentName:"ul"},"Generate nodes/edges statistics"),Object(o.b)("li",{parentName:"ul"},"Generate graph embeddings from RDF subgraphs")),Object(o.b)("h3",{id:"pyrdf2vec"},"pyRDF2Vec"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBCNServices/pyRDF2Vec"}),"pyRDF2vec")," is a Python implementation and extension of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://rdf2vec.org/"}),"RDF2Vec")," to create a 2D feature matrix from a knowledge graph for downstream ML tasks. Check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pyrdf2vec.readthedocs.io/en/latest/"}),"pyRDF2Vec documentation"),"."))}s.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);