// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Switch from './switch'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Radio from './radio'
import RadioGroup from './radio-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfont.css'

const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Form,
  FormItem
]
// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}