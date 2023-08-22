(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3816fa49","chunk-2d0df049"],{"87b6":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("el-dialog",{attrs:{width:"53%",title:"题目预览",visible:t.showPreview},on:{close:t.closeDialog}},[e("div",{staticClass:"el-row"},[e("div",{staticClass:"info"},[e("div",[t._v("【题型】："+t._s("1"===t.randomsDetail.questionType?"单选题":"2"===t.randomsDetail.questionType?"多选题":"简答题"))]),e("div",[t._v("【编号】："+t._s(t.randomsDetail.id))]),e("div",[t._v("【难度】："+t._s("2"===t.randomsDetail.difficulty?"一般":"3"===t.randomsDetail.difficulty?"困难":"简单"))]),e("div",[t._v("【标签】："+t._s(t.randomsDetail.tags))]),e("div",[t._v("【学科】："+t._s(4===t.randomsDetail.subjectID?"前端":"java"))]),e("div",[t._v("【目录】："+t._s(1===t.randomsDetail.catalogID?"java基础":2===t.randomsDetail.catalogID?"javaWEB":6===t.randomsDetail.catalogID?"js基础":5===t.randomsDetail.catalogID?"css基础":"vue基础"))]),e("div",[t._v("【方向】："+t._s(t.randomsDetail.direction))])]),e("hr"),t._v(" 【题干】： "),e("div",{staticClass:"toggle"},[e("div",{staticClass:"toggle-content",domProps:{innerHTML:t._s(t.randomsDetail.question)}}),"2"===t.randomsDetail.questionType?e("div",[e("div",{staticClass:"notice"},[t._v("多选题 选项：（以下选中的选项为正确答案）")]),t._l(t.randomsDetail.options,(function(o,s){return e("div",{key:s,staticStyle:{padding:"8px 0px"}},[e("el-checkbox",{attrs:{checked:0===o.isRight}},[t._v(t._s(o.title))])],1)}))],2):"1"===t.randomsDetail.questionType?e("div",[e("div",{staticClass:"notice"},[t._v("单选题 选项：（以下选中的选项为正确答案）")]),e("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.randomsDetail.options,(function(o,s){return e("div",{key:s},[e("el-radio",{attrs:{label:o.isRight}},[t._v(t._s(o.title))])],1)})),0)],1):e("div")]),e("hr"),e("div",[t._v("【参考答案】： "),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.showVideo(t.randomsDetail.videoURL)}}},[t._v("视频答案预览")])],1),t.videoShow&&t.randomsDetail.videoURL?e("div",{staticClass:"video"},[e("video",{attrs:{controls:"controls",src:t.randomsDetail.videoURL,autoplay:"",width:"300",height:"200"}})]):t._e(),e("hr"),e("div",{staticClass:"answerHtml",domProps:{innerHTML:t._s("【答案解析】:".concat(t.randomsDetail.answer))}}),e("hr"),e("div",[t._v("【题目备注】："+t._s(t.randomsDetail.remarks))])]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.closeDialog}},[t._v("关闭")])],1)])],1)},i=[],a=o("5530"),n=o("2f62"),r={computed:Object(a["a"])({},Object(n["e"])("questionsChoice/questionsRandoms",["randomsDetail","showPreview"])),data:function(){return{videoShow:!1,radio:1}},methods:Object(a["a"])(Object(a["a"])({},Object(n["d"])("questionsChoice/questionsRandoms",["setShowPreview"])),{},{closeDialog:function(){this.videoShow=!1,this.setShowPreview(!1)},showVideo:function(t){this.videoShow=!0,t||this.$message.error("当前题目无视频")}})},c=r,l=o("2877"),u=Object(l["a"])(c,s,i,!1,null,"9db28160",null);e["default"]=u.exports},9434:function(t,e,o){},"954d":function(t,e,o){"use strict";o("9434")},ada4:function(t,e,o){"use strict";o.r(e);o("14d9");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"choice-table"},[e("el-table",{attrs:{data:t.questions.items}},[e("el-table-column",{attrs:{width:"120px",label:"试题编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.number)+" ")]}}])}),e("el-table-column",{attrs:{width:"120px",label:"学科"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.subject)+" ")]}}])}),e("el-table-column",{attrs:{width:"120px",label:"目录"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.catalog)+" ")]}}])}),e("el-table-column",{attrs:{label:"题型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(1===e.row.questionType?"单选":"多选")+" ")]}}])}),e("el-table-column",{attrs:{width:"280px",label:"题干"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("div",{domProps:{innerHTML:t._s(o.row.question)}})]}}])}),e("el-table-column",{attrs:{width:"180px",label:"录入时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("parseTimeByString")(e.row.addDate))+" ")]}}])}),e("el-table-column",{attrs:{label:"难度"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s("1"===e.row.difficulty?"简单":"2"===e.row.difficulty?"一般":"困难")+" ")]}}])}),e("el-table-column",{attrs:{label:"录入人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.creator)+" ")]}}])}),e("el-table-column",{attrs:{label:"审核状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.chkState?"已审核":"待审核")+" ")]}}])}),e("el-table-column",{attrs:{label:"审核意见"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.chkRemarks)+" ")]}}])}),e("el-table-column",{attrs:{label:"审核人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.chkUser)+" ")]}}])}),e("el-table-column",{attrs:{label:"发布状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.publishState?"已发布":"待发布")+" ")]}}])}),e("el-table-column",{attrs:{width:"200px",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{staticStyle:{"font-size":"12px"},attrs:{type:"text"},on:{click:function(e){return t.preview(o.row.id)}}},[t._v("预览")]),e("el-button",{attrs:{type:"text",disabled:!!o.row.chkState},on:{click:function(e){return t.audit(o.row.id)}}},[t._v("审核")]),e("el-button",{attrs:{type:"text",disabled:!!o.row.publishState},on:{click:function(e){return t.$router.push("new?id=".concat(o.row.id))}}},[t._v("修改")]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.goUp(o.row.id,o.row.publishState)}}},[t._v(t._s(o.row.publishState?"下架":"上架"))]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.del(o.row.id)}}},[t._v("删除")])]}}])})],1),e("el-dialog",{attrs:{title:"题目审核",visible:t.showAudit,width:"400px"},on:{"update:visible":function(e){t.showAudit=e}}},[e("el-form",{staticStyle:{"margin-top":"0"},attrs:{model:t.dialogForm}},[e("el-form-item",[e("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("通过")]),e("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("拒绝")])],1),e("el-form-item",[e("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.chkRemarks,callback:function(e){t.chkRemarks=e},expression:"chkRemarks"}})],1)],1),e("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.showAudit=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submitAudit}},[t._v("确 定")])],1)],1),e("QuestionsPreview")],1)},i=[],a=o("c7eb"),n=o("1da1"),r=o("5530"),c=o("2f62"),l=o("87b6"),u={components:{QuestionsPreview:l["default"]},name:"choiceTable",data:function(){return{showAudit:!1,radio:"1",chkRemarks:"",auditId:"",showPreview:!1,videoShow:!1,dialogForm:{}}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["b"])("questionsChoice/article",["choiceCheckAsync","choicePublishAsync","removeAsync","getChoiceAsync"])),Object(c["b"])("questionsChoice/questionsRandoms",["lookDetailAsync"])),Object(c["d"])("questionsChoice/questionsRandoms",["setShowPreview"])),{},{preview:function(t){var e=this;return Object(n["a"])(Object(a["a"])().mark((function o(){return Object(a["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log(t),e.setShowPreview(!0),e.lookDetailAsync({id:t});case 3:case"end":return o.stop()}}),o)})))()},audit:function(t){console.log(t),this.showAudit=!0,this.auditId=t,this.chkRemarks="",this.radio="1"},submitAudit:function(){var t=this;return Object(n["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.chkRemarks){e.next=3;break}return t.$message({message:"请输入审核意见",type:"warning"}),e.abrupt("return");case 3:t.choiceCheckAsync({id:t.auditId,chkState:+t.radio,chkRemarks:t.chkRemarks}),t.showAudit=!1,t.$message({message:"审核成功",type:"success"});case 6:case"end":return e.stop()}}),e)})))()},goUp:function(t,e){var o=this;console.log("上架"),this.$confirm("您确认".concat(e?"下架":"上架","这道题目吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(Object(a["a"])().mark((function s(){return Object(a["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log(t,e),s.next=3,o.choicePublishAsync({id:t,publishState:1===e?0:1});case 3:o.$emit("setQuestionsArr"),o.$message({type:"success",message:"".concat(e?"下架":"上架","成功!")});case 5:case"end":return s.stop()}}),s)})))).catch((function(){o.$message({type:"info",message:"已取消"})}))},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(Object(a["a"])().mark((function o(){return Object(a["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.removeAsync({id:t});case 2:e.$message({type:"success",message:"删除成功!"});case 3:case"end":return o.stop()}}),o)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.showPreview=!1,this.videoShow=!1},setQuestions:function(t){console.log(88888888),this.questions=t}}),created:function(){return Object(n["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:Object(r["a"])({},Object(c["e"])("questionsChoice/article",["questions"]))},d=u,f=(o("954d"),o("2877")),h=Object(f["a"])(d,s,i,!1,null,"5f29b816",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-3816fa49.f6375036.js.map