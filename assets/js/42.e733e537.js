(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{207:function(t,s,a){"use strict";a.r(s);var i=a(0),e=Object(i.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github在线预览vue项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github在线预览vue项目","aria-hidden":"true"}},[t._v("#")]),t._v(" github在线预览vue项目")]),t._v(" "),a("h2",{attrs:{id:"本地预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地预览","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地预览")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包生成dist文件夹，里面包含 static 文件夹和一个 index.html 文件")]),t._v("\nnpm run build\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("试着打开dist文件夹下的index.html，发现页面空白，打开控制台，发现 script 标签的引入路径不对")]),t._v(" "),a("p",[t._v("static 文件夹和 index.html 是在同一个目录下的，这里却是从根目录引入 static 下的文件，正确的路径应该是 ./ 开头的相对路径： src='./static/...' 或者 src='static/...'")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/MY729/BLOG/raw/gh-pages/img/%E6%96%87%E7%AB%A0/vue-show-1.jpg",alt:"An image"}})]),t._v(" "),a("p",[t._v("重新build后打开index.html")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/MY729/BLOG/raw/gh-pages/img/%E6%96%87%E7%AB%A0/vue-show-2.jpg",alt:"An image"}})]),t._v(" "),a("p",[t._v("这和配置资源的路径有关，打开项目根目录 config 文件夹下的 index.js ，定位到 build 下的 assetsPublicPath （dev下也有一个assetsPublicPath，别弄混），把assetsPublicPath: '/' 修改为 assetsPublicPath: './'")]),t._v(" "),a("p",[t._v("重新执行npm run build,打开index.html，页面效果ok了")]),t._v(" "),a("h2",{attrs:{id:"线上预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上预览","aria-hidden":"true"}},[t._v("#")]),t._v(" 线上预览")]),t._v(" "),a("p",[t._v("找到项目根目录的 .gitignore 文件，这里设置一些文件名，对应的文件将不会被提交到 github 上面，将 dist 文件夹移除")]),t._v(" "),a("p",[t._v("提交代码到你的仓库，到github上点击项目的 setting 项，然后找到 Github Pages\n选择 master branch ，保存，接着你会看到项目在线预览链接")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/MY729/BLOG/raw/gh-pages/img/%E6%96%87%E7%AB%A0/%E9%A2%84%E8%A7%88.png",alt:"An image"}})]),t._v(" "),a("p",[t._v("点击链接，此时会看到空白，在地址栏后面添加 dist （因为 index.html 是在 dist目录 下），回车，ok了")])])},[],!1,null,null,null);s.default=e.exports}}]);