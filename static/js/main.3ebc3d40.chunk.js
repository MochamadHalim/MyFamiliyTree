(this["webpackJsonpfamily-tree-editor"]=this["webpackJsonpfamily-tree-editor"]||[]).push([[0],{33:function(e,t,a){},39:function(e){e.exports=JSON.parse('{"a":"0.9.0"}')},40:function(e){e.exports=JSON.parse('{"tree":{"name":"CEO","attributes":{},"children":[{"name":"Manager","attributes":{"Department":"Production"},"children":[{"name":"Foreman","attributes":{"Department":"Fabrication"},"children":[{"name":"Workers","attributes":{},"children":null}]},{"name":"Foreman","attributes":{"Department":"Assembly"},"children":[{"name":"Workers","attributes":{},"children":null}]}]},{"name":"Manager","attributes":{"Department":"Marketing"},"children":[{"name":"Sales Officer","attributes":{"Department":"A"},"children":[{"name":"Salespeople","attributes":{},"children":null}]},{"name":"Sales Officer","attributes":{"Department":"B"},"children":[{"name":"Salespeople","attributes":{},"children":null}]}]}]},"configurations":{"repositoryLink":"https://github.com/MochamadHalim/MyFamiliyTree","title":"My Family Tree Test2","orientation":"vertical","translateX":637.52783203125,"translateY":546.6666870117188,"pathFunc":"diagonal","renderCustomNodeElement":"svg","collapsible":true,"shouldCollapseNeighborNodes":false,"initialDepth":1,"depthFactor":null,"zoomable":true,"zoom":1,"scaleExtent":{"min":0.1,"max":1},"separation":{"siblings":2,"nonSiblings":2},"nodeSize":{"x":200,"y":200},"enableLegacyTransitions":false,"transitionDuration":500,"styles":{"nodes":{"node":{"circle":{"fill":"#52e2c5"},"attributes":{"stroke":"#000"}},"leafNode":{"circle":{"fill":"transparent"},"attributes":{"stroke":"#000"}}}}}}')},46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},53:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),l=(a(51),a(52),a(9)),s=a(10),c=a(1),u=a(13),m=a(12),d=a(27),p=a(5),h=a(31),g=a(39),b=(a(53),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.variable,a=e.name,n=e.onChange,o=e.checked;return r.a.createElement("div",{className:"onoffswitch"},r.a.createElement("input",Object.assign({type:"checkbox",className:"onoffswitch-checkbox",id:a,name:a,onChange:n,checked:o},t)),r.a.createElement("label",{className:"onoffswitch-label",htmlFor:a},r.a.createElement("span",{className:"onoffswitch-inner"}),r.a.createElement("span",{className:"onoffswitch-switch"})))}}]),a}(n.Component)),f=function(e){var t=e.nodeData,a=void 0===t?{}:t,n=e.triggerNodeToggle,o=e.foreignObjectProps,i=void 0===o?{}:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{r:20}),r.a.createElement("foreignObject",i,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid black",paddingBottom:"1rem",backgroundColor:"rgb(248, 248, 255)"}},r.a.createElement("h3",null,a.name),r.a.createElement("ul",{style:{listStyleType:"none",padding:0}},a.attributes&&Object.keys(a.attributes).map((function(e,t){return r.a.createElement("li",{key:"".concat(e,"-").concat(t)},e,": ",a.attributes[e])}))),a.children&&r.a.createElement("button",{style:{textAlign:"center"},onClick:n},a.__rd3t.collapsed?"\u2b05\ufe0f \u27a1\ufe0f Expand":"\u27a1\ufe0f \u2b05\ufe0f Collapse"))))},E={vertical:{title:{textAnchor:"start",x:40},attributes:{},attribute:{x:40,dy:"1.2em"}},horizontal:{title:{textAnchor:"start",y:40},attributes:{x:0,y:40},attribute:{x:0,dy:"1.2em"}}},N=function(e){var t=e.nodeDatum,a=e.orientation,n=e.toggleNode,o=e.onNodeClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{r:20,onClick:n}),r.a.createElement("g",{className:"rd3t-label"},r.a.createElement("text",Object.assign({className:"rd3t-label__title"},E[a].title,{onClick:o}),t.name),r.a.createElement("text",Object.assign({className:"rd3t-label__attributes"},E[a].attributes),t.attributes&&Object.entries(t.attributes).map((function(e,t){var n=Object(d.a)(e,2),o=n[0],i=n[1];return r.a.createElement("tspan",Object.assign({key:"".concat(o,"-").concat(t)},E[a].attribute),o,": ",i)})))))},y=(a(33),a(42)),v=a(20),C=a.n(v),x=C.a.mark(w),S=/^1(\.[1-9][0-9]*)*$/,O=/^(1(\.[1-9][0-9]*)*)\.[1-9][0-9]*$/;function k(e,t,a){if(!(a in t))throw Error("Entry:\n\n".concat(e,"\n\nmust have a '").concat(a,"' defined"));var n=t[a];return delete t[a],n}function j(e){if(0===e.trim().length)return null;var t={},a=e.trim().split("\n");if(0===a.length)return null;a.map((function(e){return e.split("=")})).forEach((function(a){if(2!==a.length)throw Error('Malformed line "'.concat(a.join("="),'" in entry:\n\n').concat(e,"\n\nThe expected format is: property=value"));if(a[0]in t)throw Error("Entry:\n\n".concat(e,"\n\nhas a duplicate property ").concat(a[0],"'"));t[a[0]]=(a[1]||"").trim()}));var n=k(e,t,"id"),r=k(e,t,"name");if(!n.match(S))throw Error('id must match pattern "'.concat(S,'" (eg: 1.2.1),\nbut instead ').concat(n," was found"));var o=n.match(O);return{id:n,parentId:o&&o.length>1?o[1]:null,data:{name:r,attributes:t,children:[]}}}function F(e){var t={};e.replace("\r","").split("\n\n").map(j).filter((function(e){return null!=e})).forEach((function(e){if(e.id in t)throw Error("Duplicate id found: ".concat(e.id));t[e.id]=e}));var a=null;if(Object.values(t).forEach((function(e){if(e.parentId){if(!(e.parentId in t))throw Error("Found an entry with 'id=".concat(e.id,"' but no parent exists with 'id=").concat(e.parentId,"'"));t[e.parentId].data.children.push(e.data)}else{if("1"!==e.id)throw Error("The original ancestor must have an id=1 .\n          All other entries must be descendents (eg. 1.1, 1.2, 1.2.1, etc).\n          But an entry was found with 'id=".concat(e.id,"'"));a=e.data}})),Object.values(t).filter((function(e){return 0===e.data.children.length})).forEach((function(e){return e.data.children=null})),null===a)throw Error("At least one entry must exist with id=1 to represent the original ancestor.");return a}function D(e){return"id=".concat(e.id,"\nname=").concat(e.node.name,"\n").concat(e.node.attributes?Object.entries(e.node.attributes).map((function(e){return e.join("=")+"\n"})).join(""):"")}function w(e){var t,a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=[{id:"1",node:e}],a=C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.shift(),e.next=3,a;case 3:a.node.children&&a.node.children.forEach((function(e,n){t.push({id:"".concat(a.id,".").concat(n+1),node:e})}));case 4:case"end":return e.stop()}}),e)}));case 2:if(!(t.length>0)){n.next=6;break}return n.delegateYield(a(),"t0",4);case 4:n.next=2;break;case 6:case"end":return n.stop()}}),x)}var z=a(6),T={svg:{description:"Default - Pure SVG node & label (IE11 compatible)",fn:function(e,t){return r.a.createElement(N,{nodeDatum:e.nodeDatum,toggleNode:e.toggleNode,orientation:t.orientation})}},mixed:{description:"MixedNodeElement - SVG `circle` + `foreignObject` label",fn:function(e,t){var a=e.nodeDatum,n=e.toggleNode;return r.a.createElement(f,{nodeData:a,triggerNodeToggle:n,foreignObjectProps:{width:t.nodeSize.x,height:t.nodeSize.y,x:-50,y:50}})}}};function M(){var e=window.location.href.match(/https:\/\/(.*)\.github.io\/(.*)\//);if(!e||e.length<3)return"https://github.com/reubenjohn/family-tree-editor/edit/master/src/data/data.json";var t=e[1],a=e[2];return"https://github.com/".concat(t,"/").concat(a,"/edit/master/src/data/data.json")}var P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n,r;return Object(l.a)(this,a),(n=t.call(this,e)).toggleCollapseNeighborNodes=function(){n.handleConfigChange((function(e){return{shouldCollapseNeighborNodes:!e.shouldCollapseNeighborNodes}}))},n.state={proposedAncestry:(r=e.data.tree,Object(y.a)(w(r)).map(D).join("\n")),ancestryParsingError:null},n.handleConfigChange=n.handleConfigChange.bind(Object(c.a)(n)),n.setTitle=n.setTitle.bind(Object(c.a)(n)),n.setOrientation=n.setOrientation.bind(Object(c.a)(n)),n.setPathFunc=n.setPathFunc.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleStringChange=n.handleStringChange.bind(Object(c.a)(n)),n.handleFloatChange=n.handleFloatChange.bind(Object(c.a)(n)),n.toggleCollapsible=n.toggleCollapsible.bind(Object(c.a)(n)),n.toggleZoomable=n.toggleZoomable.bind(Object(c.a)(n)),n.setScaleExtent=n.setScaleExtent.bind(Object(c.a)(n)),n.setSeparation=n.setSeparation.bind(Object(c.a)(n)),n.setNodeSize=n.setNodeSize.bind(Object(c.a)(n)),n.toggleLegacyTransitions=n.toggleLegacyTransitions.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"handleConfigChange",value:function(e){this.props.onDataChange&&("function"===typeof e&&(e=e(this.props.data.configurations)),this.props.onDataChange({tree:this.props.data.tree,configurations:Object(h.a)(Object(h.a)({},this.props.data.configurations),e)}))}},{key:"tryUpdateAncestry",value:function(e){this.setState({proposedAncestry:e});try{this.setState({ancestryParsingError:null}),this.props.onDataChange({tree:F(e),configurations:this.props.data.configurations})}catch(t){this.setState({ancestryParsingError:t.message})}}},{key:"setTitle",value:function(e){this.handleConfigChange({title:e})}},{key:"setOrientation",value:function(e){this.handleConfigChange({orientation:e})}},{key:"setPathFunc",value:function(e){this.handleConfigChange({pathFunc:e})}},{key:"handleChange",value:function(e){var t=e.target,a=parseInt(t.value,10);""===t.value?this.handleConfigChange(Object(p.a)({},t.name,void 0)):isNaN(a)||this.handleConfigChange(Object(p.a)({},t.name,a))}},{key:"handleStringChange",value:function(e){var t=e.target,a=t.name,n=t.value;""===n?this.handleConfigChange(Object(p.a)({},a,void 0)):this.handleConfigChange(Object(p.a)({},a,n))}},{key:"handleFloatChange",value:function(e){var t=e.target,a=parseFloat(t.value);""===t.value?this.handleConfigChange(Object(p.a)({},t.name,void 0)):isNaN(a)||this.handleConfigChange(Object(p.a)({},t.name,a))}},{key:"toggleCollapsible",value:function(){this.handleConfigChange((function(e){return{collapsible:!e.collapsible}}))}},{key:"toggleZoomable",value:function(){this.handleConfigChange((function(e){return{zoomable:!e.zoomable}}))}},{key:"setScaleExtent",value:function(e){this.handleConfigChange({scaleExtent:e})}},{key:"setSeparation",value:function(e){isNaN(e.siblings)||isNaN(e.nonSiblings)||this.handleConfigChange({separation:e})}},{key:"setNodeSize",value:function(e){isNaN(e.x)||isNaN(e.y)||this.handleConfigChange({nodeSize:e})}},{key:"toggleLegacyTransitions",value:function(){this.handleConfigChange((function(e){return{enableLegacyTransitions:!e.enableLegacyTransitions}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"column-left flex-container-vertical"},r.a.createElement("h2",{className:"title flex-conservative"},"Family Tree Editor v",g.a),r.a.createElement(z.d,{className:"controls-container flex-container-vertical flex-greedy"},r.a.createElement(z.b,{className:"flex-conservative"},r.a.createElement(z.a,null,"Save / Export"),r.a.createElement(z.a,null,"Ancestry"),r.a.createElement(z.a,null,"Configurations")),r.a.createElement(z.c,{className:"controls-container"},r.a.createElement("div",{className:"prop-container"},"Save your changes to avoid loosing your data.",r.a.createElement("br",null),r.a.createElement("h5",null,"Steps to save your changes"),r.a.createElement("ol",null,r.a.createElement("li",null,"Copy all your changes using the 'Copy Tree & Configurations' button below"),r.a.createElement("li",null,"Open your ",r.a.createElement("a",{href:M(),target:"_blank",rel:"noopener noreferrer"},"data file")," and paste your changes there.",r.a.createElement("br",null),"Finally, hit the 'Commit changes' button at the bottom."),r.a.createElement("li",null,"If all goes well, your changes should reflect in a few minutes once you refresh the page.")),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:function(){return navigator.clipboard.writeText(JSON.stringify(e.props.data,null,2))}},"Copy Tree & Configurations"))),r.a.createElement(z.c,{className:"controls-container flex-container-vertical flex-greedy"},this.state.ancestryParsingError&&r.a.createElement("pre",{className:"flex-conservative",style:{color:"red"}},this.state.ancestryParsingError),r.a.createElement("textarea",{className:"flex-greedy",style:{width:"100%",margin:"4px",color:this.state.ancestryParsingError?"red":"black"},value:this.state.proposedAncestry,onChange:function(t){return e.tryUpdateAncestry(t.target.value)}})),r.a.createElement(z.c,{className:"controls-container"},r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Title"),r.a.createElement("input",{type:"text",value:this.props.data.configurations.title,onChange:function(t){return e.setTitle(t.target.value)}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Orientation"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setOrientation("horizontal")}},"Horizontal"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setOrientation("vertical")}},"Vertical")),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Path Function"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("diagonal")}},"Diagonal"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("elbow")}},"Elbow"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("straight")}},"Straight"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("step")}},"Step")),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"customNodeElement"},"Custom Node Element"),r.a.createElement("select",{className:"form-control",name:"renderCustomNodeElement",onChange:this.handleStringChange},Object.entries(T).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1].description;return r.a.createElement("option",{key:a,value:a},n)})))),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Collapsible"),r.a.createElement(b,{name:"collapsibleBtn",checked:this.props.data.configurations.collapsible,onChange:this.toggleCollapsible})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Collapse neighbor nodes"),r.a.createElement(b,{name:"collapseNeighborsBtn",checked:this.props.data.configurations.shouldCollapseNeighborNodes,onChange:this.toggleCollapseNeighborNodes})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Enable Legacy Transitions"),r.a.createElement(b,{name:"enableLegacyTransitionsBtn",checked:this.props.data.configurations.enableLegacyTransitions,onChange:this.toggleLegacyTransitions})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("div",null,r.a.createElement("label",{className:"prop",htmlFor:"translateX"},"Translate X"),r.a.createElement("input",{className:"form-control",name:"translateX",type:"number",value:this.props.data.configurations.translateX,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{className:"prop",htmlFor:"translateY"},"Translate Y"),r.a.createElement("input",{className:"form-control",name:"translateY",type:"number",value:this.props.data.configurations.translateY,onChange:this.handleChange}))),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"initialDepth"},"Initial Depth"),r.a.createElement("input",{className:"form-control",style:{color:"grey"},name:"initialDepth",type:"text",value:this.props.data.configurations.initialDepth,onChange:this.handleChange})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"depthFactor"},"Depth Factor"),r.a.createElement("input",{className:"form-control",name:"depthFactor",type:"number",defaultValue:this.props.data.configurations.depthFactor,onChange:this.handleChange})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"zoom"},"Zoom"),r.a.createElement("input",{className:"form-control",name:"zoom",type:"number",defaultValue:this.props.data.configurations.zoom,onChange:this.handleFloatChange})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("span",{className:"prop prop-large"},"Scale Extent"),r.a.createElement("label",{className:"sub-prop",htmlFor:"scaleExtentMin"},"Min"),r.a.createElement("input",{className:"form-control",name:"scaleExtentMin",type:"number",defaultValue:this.props.data.configurations.scaleExtent.min,onChange:function(t){return e.setScaleExtent({min:parseFloat(t.target.value),max:e.props.data.configurations.scaleExtent.max})}}),r.a.createElement("label",{className:"sub-prop",htmlFor:"scaleExtentMax"},"Max"),r.a.createElement("input",{className:"form-control",name:"scaleExtentMax",type:"number",defaultValue:this.props.data.configurations.scaleExtent.max,onChange:function(t){return e.setScaleExtent({min:e.props.data.configurations.scaleExtent.min,max:parseFloat(t.target.value)})}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("span",{className:"prop prop-large"},"Node separation"),r.a.createElement("label",{className:"sub-prop",htmlFor:"separationSiblings"},"Siblings"),r.a.createElement("input",{className:"form-control",name:"separationSiblings",type:"number",defaultValue:this.props.data.configurations.separation.siblings,onChange:function(t){return e.setSeparation({siblings:parseFloat(t.target.value),nonSiblings:e.props.data.configurations.separation.nonSiblings})}}),r.a.createElement("label",{className:"sub-prop",htmlFor:"separationNonSiblings"},"Non-Siblings"),r.a.createElement("input",{className:"form-control",name:"separationNonSiblings",type:"number",defaultValue:this.props.data.configurations.separation.nonSiblings,onChange:function(t){return e.setSeparation({siblings:e.props.data.configurations.separation.siblings,nonSiblings:parseFloat(t.target.value)})}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("span",{className:"prop prop-large"},"Node size"),r.a.createElement("label",{className:"sub-prop",htmlFor:"nodeSizeX"},"X"),r.a.createElement("input",{className:"form-control",name:"nodeSizeX",type:"number",defaultValue:this.props.data.configurations.nodeSize.x,onChange:function(t){return e.setNodeSize({x:parseFloat(t.target.value),y:e.props.data.configurations.nodeSize.y})}}),r.a.createElement("label",{className:"sub-prop",htmlFor:"nodeSizeY"},"Y"),r.a.createElement("input",{className:"form-control",name:"nodeSizeY",type:"number",defaultValue:this.props.data.configurations.nodeSize.y,onChange:function(t){return e.setNodeSize({x:e.props.data.configurations.nodeSize.x,y:parseFloat(t.target.value)})}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"transitionDuration"},"Transition Duration"),r.a.createElement("input",{className:"form-control",name:"transitionDuration",type:"number",value:this.props.data.configurations.transitionDuration,onChange:this.handleChange})))))}}]),a}(n.Component),A=a(40),L=a(41),V=a.n(L),Y={svg:{description:"Default - Pure SVG node & label (IE11 compatible)",fn:function(e,t){return r.a.createElement(N,{nodeDatum:e.nodeDatum,toggleNode:e.toggleNode,orientation:t.orientation})}},mixed:{description:"MixedNodeElement - SVG `circle` + `foreignObject` label",fn:function(e,t){var a=e.nodeDatum,n=e.toggleNode;return r.a.createElement(f,{nodeData:a,triggerNodeToggle:n,foreignObjectProps:{width:t.nodeSize.x,height:t.nodeSize.y,x:-50,y:50}})}}},I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={translateX:e.configurations.translateX,translateY:e.configurations.translateY},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.treeContainer.getBoundingClientRect();this.setState({translateX:e.width/2.5,translateY:e.height/2})}},{key:"render",value:function(){var e=this,t=this.props,a=t.tree,n=t.configurations;return r.a.createElement("div",{className:"column-right"},r.a.createElement("div",{className:"tree-stats-container"},r.a.createElement("h2",null,n.title),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;return t+=1,a.children?a.children.reduce((function(t,a){return e(t,a)}),t):t}(0,Array.isArray(a)?a[0]:a)," family members.",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"gray"}},"Click a member to expand descendants. Click and drag to navigate.")),r.a.createElement("div",{ref:function(t){return e.treeContainer=t},className:"tree-container"},r.a.createElement(V.a,{data:a,renderCustomNodeElement:n.renderCustomNodeElement?function(e){return Y[n.renderCustomNodeElement].fn(e,n)}:void 0,rootNodeClassName:"demo-node",branchNodeClassName:"demo-node",orientation:n.orientation,translate:{x:this.state.translateX,y:this.state.translateY},pathFunc:n.pathFunc,collapsible:n.collapsible,initialDepth:n.initialDepth,zoomable:n.zoomable,zoom:n.zoom,scaleExtent:n.scaleExtent,nodeSize:n.nodeSize,separation:n.separation,enableLegacyTransitions:n.enableLegacyTransitions,transitionDuration:n.transitionDuration,depthFactor:n.depthFactor,styles:n.styles,shouldCollapseNeighborNodes:n.shouldCollapseNeighborNodes})))}}]),a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={editMode:!1,data:A},n.toggleEditMode=n.toggleEditMode.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"demo-container"},r.a.createElement("button",{title:"Edit",onClick:this.toggleEditMode}),this.state.editMode&&r.a.createElement(P,{data:this.state.data,onDataChange:function(t){return e.setState({data:t})}}),r.a.createElement("div",{className:"column-right"},r.a.createElement(I,{configurations:this.state.data.configurations,tree:this.state.data.tree}))))}},{key:"toggleEditMode",value:function(){this.setState({editMode:!this.state.editMode})}}]),a}(n.Component);i.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3ebc3d40.chunk.js.map