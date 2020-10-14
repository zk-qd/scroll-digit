
// 格式化数字  需要改以防和 其他的同名方法冲突
function FormatDigit(config) {
    this.eles = document.querySelectorAll(config.selector);
    // 默认值
    this.number = config.number || 0;
    // 字体颜色
    this.color = config.color || '#01E6E1';
    // 字体大小
    this.fontSize = config.fontSize || '30px';
    // 字体间距
    // this.spacing = config.marginL || 0;
    // 数字的宽度 对于逗号小数点无效
    this.width = config.width || "auto";
    // 数字的高度
    this.height = config.height || "100px";
    // 是否有分数点
    this.isComma = config.isComma;
    // 数字的外左边距 去除第一个   对于逗号小数点都有效
    this.marginL = config.marginL || "0";
    // 单位
    this.unit = config.unit || "";
    // 是否使用格式化数字  默认为true
    this.isIcon = config.isIcon === undefined ? true : config.isIcon;
    // 新增
    this.setValue(this.number);
};


FormatDigit.prototype.setValue = function (val) {
    if (!val) return;
    var str = val.toString(),
        html = '';
    // 获取整数的长度
    const integer = str.search(/\./g) == -1 ? str.length : str.search(/\./g);
    for (var i = 0, length = str.length; i < length; i++) {
        var index = str[i],
            className = this.isIcon ? 'iconfont' + (index == '.' ? '' : ' icon-shuzi' + index) : ''
        if (index !== ',') {
            // 如果isIcon为false那么不使用字体图标
            html += '<i data-val="' + index + '" class="' + className + '" style= "font-size:' +
                this.fontSize + ';width:' +
                // 小数点不需要宽度
                (index == '.' ? 'auto' : this.width) + ';color:' +
                this.color + ';height:' +
                this.height + ';line-height:' +
                this.height +
                ';display:inline-block;text-align:center;vertical-align: top"> ' + (this.isIcon ? (index == '.' ? '.' : '') : index) + ' </i>'
        }
        //   分数点   格式化数字 条件 || 滚动数字 条件
        if (this.isComma && (integer - i) % 3 == 1 && integer - i !== 1 || index === ',') {
            html += '<i data-val="' + index + '" ' /* class="iconfont"  */ + 'style= "font-size:' +
                (parseInt(this.fontSize) + parseInt(this.fontSize) * 1 / 5) +
                // 逗号不需要调节宽度
                'px;color:' +
                this.color + ';height:' +
                this.height + ';line-height:' +
                this.height +
                ';display:inline-block;text-align:center;vertical-align: bottom">,</i>'
        }
    }
    if (this.unit) {
        // 单位
        html += '<span style="line-height:' + this.height + ';vertical-align: baseline;font-size: ' + this.fontSize.match(/(\d*)(\w*)/).reduce((total, current, index, arr) => {
            if (index == 0) {
                return total;
            }
            if (index == 1) {
                return total + current / 4;
            }
            return total + current;
        }, '') + ';position: relative;top: 3px;font-weight: 500;color:' + this.color + '">' + this.unit + '</span>';
    }
    for (let [i, v] of [...this.eles].entries()) {
        v.innerHTML = html;
        // 数字的左边距 数字间隔
        [...v.querySelectorAll('i')].forEach(item => item.style.marginLeft = this.marginL)
        // 取消第一个无效
        // v.querySelectorAll('i')[0].style.marginLeft = 0;
    }
}


try {
    // 是window对象
    if (globalThis === window) {
        window.FormatDigit = FormatDigit;
    } else if (module && module.exports) {
        module.exports = FormatDigit;
    }
} catch {
    console.log('未知环境')
}