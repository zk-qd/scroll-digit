
// 格式化数字  需要改以防和 其他的同名方法冲突
function formatDigit(config) {
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
    this.setValue(this.number);
};


formatDigit.prototype.setValue = function (val) {
    if (!val) return;
    var str = val.toString(),
        html = '';
    // 获取整数的长度
    const integer = str.search(/\./g) == -1 ? str.length : str.search(/\./g);
    for (var i = 0, length = str.length; i < length; i++) {
        var index = str[i];
        if (index !== ',') {
            html += '<i data-val="' + index + '" class="iconfont' +
                (index == '.' ? '' : ' icon-shuzi' + index) + '" style= "font-size:' +
                this.fontSize + ';width:' +
                // 小数点不需要宽度
                (index == '.' ? 'auto' : this.width) + ';color:' +
                this.color + ';height:' +
                this.height + ';line-height:' +
                this.height +
                ';display:inline-block;text-align:center;vertical-align: top"> ' + (index == '.' ? '.' : '') + ' </i>'
        }
        //   分数点
        if (this.isComma && (integer - i) % 3 == 1 && integer - i !== 1 || index === ',') {
            html += '<i data-val="' + index + '" class="iconfont" style= "font-size:' +
                this.fontSize +
                // 逗号不需要调节宽度
                ';color:' +
                this.color + ';height:' +
                this.height + ';line-height:' +
                this.height +
                ';display:inline-block;text-align:center;vertical-align: bottom">,</i>'
        }
    }
    if (this.unit) {
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
        v.querySelectorAll('i')[0].style.marginLeft = 0;
    }
}
try {
    // 是window对象
    if (this === window) {
        window.ScrollDigit = formatDigit;
    } else if (module && module.exports) {
        module.exports = formatDigit;
    }
} catch {
    console.log('未知环境')
}