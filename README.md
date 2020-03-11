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
  isIcon: false,
  className: "ScrollDigit",
  marginL: "0"
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
  // 是否使用格式化数字
  isIcon: true,
  //   单位
  unit: "单位"
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
  isComma: false,
  marginL: "0"
};
// 可配置项
options = {
  // 选择器
  selector: "",
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
  // 是否有小数点
  isComma: Boolean,
  // 除第一个左边距 作用于格式化数字的 滚动数字无效
  marginL: "0",
  //   单位
  unit: "单位"
};
```

# 注意事项

1. 第二个fonts字体图标不行 因为图标的原因数字对不齐

2. 滚动数字不能加小数点以及逗号  所以代码默认把isComma设置为false



# 待解决问题


# Version Iterate

### v1.0
1. initial

### v1.1
1. 修复iconfont的shuzi0
