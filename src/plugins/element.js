import Vue from 'vue'
import { Form, FormItem, Button, Input } from 'element-ui'
//导入弹窗提示组件
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message