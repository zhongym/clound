(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views"],{"19d1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"execution"},[i("basic-container",[i("div",{staticClass:"header"},[i("p",{staticClass:"header__title"},[t._v(t._s(t.name))]),i("el-button",{staticClass:"header__btn",attrs:{type:"primary"},on:{click:t.breaks}},[t._v("关闭返回列表\n      ")])],1)]),i("el-scrollbar",{staticClass:"main"},[i("iframe",{staticClass:"iframe",attrs:{src:t.src}})])],1)},s=[],n=(i("7f7f"),{data:function(){return{id:"",name:""}},created:function(){this.id=this.$route.params.id,this.name=this.$route.query.name},computed:{src:function(){return"".concat(this.actUrl).concat(this.id)}},methods:{breaks:function(){this.$router.$avueRouter.closeTag(),this.$router.push({path:"/activti/activiti"})}}}),r=n,c=(i("afd2"),i("2877")),l=Object(c["a"])(r,a,s,!1,null,"237a7d9f",null);e["default"]=l.exports},"696f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("basic-container",[i("div",{staticClass:"banner-text"},[i("span",[i("a",{attrs:{href:"https://avue.top/#/pay",target:"_blank"}},[i("img",{attrs:{src:"https://img.shields.io/badge/Avue-原子弹-green.svg",alt:"Build Status"}})]),i("img",{attrs:{src:"https://img.shields.io/badge/Spring%20Boot-2.1.2.RELEASE-yellowgreen.svg",alt:"Downloads"}}),i("img",{attrs:{src:"https://img.shields.io/badge/Spring%20Cloud-Greenwich.RELEASE-blue.svg",alt:"Coverage Status"}})]),i("br"),i("span",[i("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[i("el-collapse-item",{attrs:{title:"完整的微服务架构",name:"1"}},[i("div",[t._v("基于Spring Cloud Gateway")]),i("div",[t._v("基于Spring Cloud Greenwich.RELEASE")]),i("div",[t._v("基于Spring Boot 2.1.2.RELEASE")])]),i("el-collapse-item",{attrs:{title:"完善的权限控制",name:"2"}},[i("div",[t._v("基于Spring Security OAuth实现鉴权体系；")]),i("div",[t._v("深度定制，支持全流程的登录授权，Server Resource")])]),i("el-collapse-item",{attrs:{title:"完美的容器化支持",name:"3"}},[i("div",[t._v("支持docker部署")]),i("div",[t._v("支持Rancher2 + Kubernetes部署")]),i("div",[t._v("支持企业Pass Rainbond 部署")])]),i("el-collapse-item",{attrs:{title:"最终一致性分布式事务",name:"4"}},[i("div",[t._v("基于开源LCN 分布式事务解决方案深度定制")]),i("div",[t._v("完美兼容2.X，优化集群部署，提升性能")])]),i("el-collapse-item",{attrs:{title:"SAAS多租户",name:"5"}},[i("div",[t._v("扩展Spring Cache无缝兼容")]),i("div",[t._v("支持开发过程无感知")])]),i("el-collapse-item",{attrs:{title:"Activiti工作流",name:"6"}},[i("div",[t._v("基于activiti5.22整合OAuth2")]),i("div",[t._v("支持在线流程设计")])]),i("el-collapse-item",{attrs:{title:"动态路由",name:"7"}},[i("div",[t._v("支持数据库存储SCG路由信息")]),i("div",[t._v("支持前端动态编辑")])]),i("el-collapse-item",{attrs:{title:"其他功能",name:"8"}},[i("div",[t._v("单点登录")]),i("div",[t._v("扩展SBA支持服务监听事件redis保存")]),i("div",[t._v("扩展Turbine,定制展示UI")]),i("div",[t._v("扩展ResourceServer完全屏蔽实现细节开发更简单")])])],1)],1)])])],1)},s=[],n=i("cebc"),r=i("5880"),c={name:"wel",data:function(){return{activeNames:["1","2","3","4"],DATA:[],text:"",actor:"",count:0,isText:!1}},computed:Object(n["a"])({},Object(r["mapGetters"])(["website"])),methods:{getData:function(){this.count<this.DATA.length-1?this.count++:this.count=0,this.isText=!0,this.actor=this.DATA[this.count]},setData:function(){var t=this,e=0,i=0,a=!1,s=5e3,n=1e3,r=10;setInterval(function(){t.isText&&(a=i==t.actor.length,a?(e--,t.text=t.actor.substr(0,e),0==e&&(t.isText=!1,setTimeout(function(){i=0,t.getData()},n))):(e++,t.text=t.actor.substr(0,e),e==t.actor.length&&(t.isText=!1,setTimeout(function(){t.isText=!0,i=t.actor.length},s))))},r)}}},l=c,o=(i("b759"),i("2877")),u=Object(o["a"])(l,a,s,!1,null,"f5c2c1f2",null);e["default"]=u.exports},a60f:function(t,e,i){},afd2:function(t,e,i){"use strict";var a=i("a60f"),s=i.n(a);s.a},b759:function(t,e,i){"use strict";var a=i("c2fb"),s=i.n(a);s.a},c2fb:function(t,e,i){}}]);