# 实例

![实例](./example.jpg)

# 插件说明

## css 兼容性

> 兼容 ie8 以上

## js 兼容性

> 可能不兼容 ie11

## 扩展性

> 自行调整

## 迁移

> 此插件使用原生 js  
> format-digit 依赖 fonticon 数字图标

# 插件配置

### scroll-digit

```js
// 使用方式
new ScrollDigit(ID, options);

// 默认值
var defaults = {
  number: 0, //传入值
  color: "#01E6E1",
  fontSize: "30px",
  width: "auto",
  height: "100px",
  className: "ScrollDigit",
  marginL: "0"
  isComma: false,
  isIcon: false,

};

// 可配置项
options = {
  // 默认数字
  number: "",
  // 数字颜色
  color: "",
  // 数字大小
  fontSize: "",
  // 宽度
  width: "",
  // i元素以及dataBoc元素的高度 需要注意的是这个高度要和外部元素的高度一致
  height: "",
  // 除第一个左边距 作用于格式化数字的 滚动数字无效
  marginL: "0",
  //   单位
  unit: "单位"
  // 分隔
  isComma: true,
    // 是否使用格式化数字
  isIcon: true,
};

// 正确的使用方式：
// 字体间距：滚动数字控制宽度
// 字体间距： 格式化数字控制左边距
```

### format-digit

```js
// 默认值
var defaults = {
  number: 0, //传入值
  color: "#01E6E1",
  fontSize: "30px",
  width: "auto",
  height: "100px",
  marginL: "0"
  isComma: false,

};
// 可配置项
options = {
  // 选择器
  selector: "",

  // 下面七个参数和滚动数字参数一样的
  // 默认数字
  number: "",
  // 数字颜色
  color: "",
  // 数字大小
  fontSize: "",
  // 数字的宽度 对于逗号小数点无效
  width: "",
  // i元素以及dataBoc元素的高度 需要注意的是这个高度要和外部元素的高度一致
  height: "",
  // 除第一个左边距 作用于格式化数字的 滚动数字无效
  marginL: "0",
  //   单位
  unit: "单位",
  // 是否有逗号
  isComma: Boolean
};
```

# 格式化滚动数字的原理

就是将原来的每个数字一个个变成图标数字，

# 功能

### 格式化数字：

1. 可以有小数
2. 可以有分号

### 滚动数字：

1. 可以有分号，不能有小数

# 注意事项

1. 第二个 fonts 字体图标不行 因为图标的原因数字对不齐

2. 滚动数字不能逗号 所以代码默认把 isComma 设置为 false ，而小数点如果是小数 那么就会有小数点
   而逗号则是 3 位正数一个逗号

3. 滚动数字和格式化数字有 7 个参数是相同的

# 待解决问题

# Version Iterate

### v1.0

1. initial

### v1.1

1. 修复 iconfont 的 shuzi0

### v1.2

1. 字体图标错乱了 导致显示不全
2. 修改 scroll-digit.js 校验 id

### v1.3

1. 滚动数字新增可以添加分号功能
