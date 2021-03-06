#  vuex基础实践

## 概念

通过在根实例中注册 `store` 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到仓库

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-1.png)

## State：状态树

通过 `store.state` 来获取状态对象，以及通过 `store.commit` 方法触发状态变更

当一个组件想要获取仓库里面的状态，可以在[计算属性](https://cn.vuejs.org/v2/guide/computed.html)中返回某个状态

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-2.png)
![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-3.png)

页面展示：

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-4.png)

## mapState： 辅助函数

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性

利用[对象展开运算符](https://github.com/tc39/proposal-object-rest-spread)将它与局部的计算属性混合在一起

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-5.png)

页面展示：

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-6.png)

## Getter: 由state派生的状态

有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。

此时，getter就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。它接受state作为其第一个参数

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-7.png)
![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-8.png)

页面展示：

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-9.png)

## mapGetters：辅助函数

将 store 中的 getter 映射到局部计算属性

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-10.png)
![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-11.png)

页面展示：

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-12.png)

## Mutation：更改状态

<font color="#f00">mutation 都是同步事务</font>

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，它会接受 state 作为第一个参数

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-13.png)
![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-14.png)

页面展示：点击加减按钮 数字会加减

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-15.png)

### 使用常量替代 Mutation 事件类型

把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然

另外：你可以向 `store.commit` 传入额外的参数，即 mutation 的 载荷（payload）

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-16.png)
![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-17.png)
![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-18.png)

页面展示：

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-19.png)

### mapMutations：在组件中提交Mutations

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-20.png)

## Action：异步更新状态

Action 类似于 mutation，不同在于：

  * Action 提交的是 mutation，而不是直接变更状态。
  * Action 可以包含任意异步操作。

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 `context.commit` 提交一个 mutation，或者通过 `context.state` 和 `context.getters ` 来获取 state 和 getters

实践中，我们会经常用到 ES2015 的 [参数解构](https://github.com/lukehoban/es6features#destructuring) 来简化代码,特别是我们需要调用 commit 很多次的时候）

## Module：模块化

在store文件夹下创建modules文件夹，在modules文件夹下创建helloWord.js文件（随意命名，此处将写入HelloWorld组件的数据，故此命名）

**目录结构**

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-21.png)

**在index.js中引入helloWord.js文件**

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-22.png)

**mutation.type.js文件中定义常量type**  
```javascript
// 发出获取数据的请求
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
// 获取数据成功
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
// 获取数据失败
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'
```

**在helloWorld.js文件中写入数据**
```javascript
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from '../mutation.type'
import service from '../../../config/axios.config.js'

const state = {
  tableData: []
}

const mutations = {
  [GET_DATA_REQUEST] () {

  },
  [GET_DATA_SUCCESS] (state, payload) {
    Object.assign(state, { tableData: payload })
  },
  [GET_DATA_FAILURE] () {

  }
}

const actions = {
  // 这里用的mockjs模拟数据接口，正常使用的时候，方式类似
  getTableData ({ commit }, city) {
    commit(GET_DATA_REQUEST)
    service.get('/api/demo', city).then(res => {
      commit(GET_DATA_SUCCESS, res.data.proData)
    }).catch((res) => {
      commit(GET_DATA_FAILURE)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
```  
**组件HelloWorld.vue中写入模板并引入vuex方法**  
```vue
<template>
  <div class="hello">
    <el-form>
      <el-form-item label="城市筛选">
        <el-input v-model="city" @change="getTableData"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="img" label="图片"></el-table-column>
      <el-table-column prop="mark" label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      city: ''
    }
  },
  methods: {
    ...mapActions([
      'getTableData'
    ])
  },
  computed: {
    ...mapState({
      tableData: state => state.helloWorld.tableData
    })
  },
  mounted () {
    this.getTableData(this.city)
  }
}
</script>
```
演示：  

![An image](https://github.com/MY729/blog/raw/gh-pages/img/vuex/vuex-23.png)


## 总结

使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态