var FormatDigit;
function ScrollDigit(id, options = {}) {
    // 默认值
    var defaults = {
        number: 0, //传入值
        color: '#01E6E1',
        fontSize: '30px',
        // 宽度
        width: "auto",
        height: '100px',
        isIcon: false,
        className: 'ScrollDigit',
        // 除第一个左边距 作用于格式化数字的 滚动数字无效
        marginL: '0',
        isComma: false,
    };
    this.ele = document.querySelector('#' + id);
    if (!this.ele) {
        // throw new TypeError('容器id不存在或非string类型')
        return console.log('滚动插件','传入的id获取不到容器');
    }

    this.options = Object.assign(defaults, options);
    this.id = id;

    this.initHtml();
    if (this.options.isIcon) this.iconNum();
    else this.Num();
    this.scroNum();
}
ScrollDigit.prototype = {
    initHtml: function () {
        const that = this.ele;
        const options = this.options;
        const html = [];
        const str = options.number + ''
        // 获取不包含分号的长度
        var valLen = str.length;
        // 获取整数的长度
        const integer = str.search(/\./g) == -1 ? str.length : str.search(/\./g);
        // 获取小数 加上点 的长度
        const floatDot = valLen - integer;
        // 如果没有添加这个元素 或者长度不够 那么重新创建  
        if (!that.querySelector('.' + options.className) ||
            that.querySelectorAll('.dataOne').length/* 总长度 数字 + 小数点 + 分号  */ != getTotalLenght()) {
            // 根据数字个数添加几次
            for (var i = 0; i < valLen; i++) {
                // 分号 comma
                if (options.isComma && ((i - floatDot) % 3 == 0) && i - floatDot > 0) {
                    html.unshift('<li class="dataOne" style="' +
                        ';"><div class="dataBoc" style="height:' + options.height + ';line-height:' + options.height +
                        /* ';width:' + options.width + */ ';color:' + options.color + ';font-size:' + (parseInt(options.fontSize) + parseInt(options.fontSize) * 1 / 5) +
                        'px' + /* ';margin-left: ' + options.marginL + */
                        ';"><div class="tt" t="10">' +
                        ' <span class="comma"></span><br />' +
                        ' </div></div></li>');
                }
                // 不是小数点就是数字
                if (i !== floatDot - 1) {
                    html.unshift('<li class="dataOne" style="' +
                        ';"><div class="dataBoc" style="height:' + options.height + ';line-height:' + options.height +
                        ';width:' + options.width + ';color:' + options.color + ';font-size:' + options.fontSize +
                        ';margin-left: ' + options.marginL +
                        ';"><div class="tt ttroll" t="10">' +
                        ' <span class="num0"></span><br />' +
                        '   <span class="num1"></span><br />' +
                        '  <span class="num2"></span><br />' +
                        '    <span class="num3"></span><br />' +
                        '    <span class="num4"></span><br />' +
                        '    <span class="num5"></span><br />' +
                        '   <span class="num6"></span><br />' +
                        '    <span class="num7"></span><br />' +
                        '    <span class="num8"></span><br />' +
                        '      <span class="num9"></span><br />' +
                        ' <span class="num0"></span><br />' +
                        '   <span class="num1"></span><br />' +
                        '  <span class="num2"></span><br />' +
                        '    <span class="num3"></span><br />' +
                        '    <span class="num4"></span><br />' +
                        '    <span class="num5"></span><br />' +
                        '   <span class="num6"></span><br />' +
                        '    <span class="num7"></span><br />' +
                        '    <span class="num8"></span><br />' +
                        '      <span class="num9"></span><br />' +
                        '     </div></div></li>');
                } else {
                    // 小数点 dot
                    html.unshift('<li class="dataOne" style="' +
                        ';"><div class="dataBoc" style="height:' + options.height + ';line-height:' + options.height +
                        /* ';width:' + options.width + */ ';color:' + options.color + ';font-size:' + (parseInt(options.fontSize) + parseInt(options.fontSize) * 1 / 5) +
                        'px' + /* ';margin-left: ' + options.marginL + */
                        ';"><div class="tt" t="10">' +
                        ' <span class="dot"></span><br />' +
                        ' </div></div></li>');
                }

            }
            html.unshift('<ul class="' + options.className + '">');
            html.push('</ul>');
            // 注意height 和 fontSize的单位要一致
            options.unit && (html.push('<em style="height:' + options.height + ';line-height:' +
                (parseInt(options.height) + parseInt(options.fontSize) / 2 + options.height.match(/\D/g).reduce((total, item) => total + item)) +
                ';color:' + options.color +
                ';font-size:' + (parseInt(options.fontSize) / 2 + options.height.match(/\D/g).reduce((total, item) => total + item)) +
                ';vertical-align: baseline;display: inline-block;">' + options.unit + '</em>'));
            that.innerHTML = html.join('').trim();
        }

        function getTotalLenght() {
            // 分号的长度
            let comma = Math.ceil((integer / 3) - 1);
            return valLen + comma;
        }
    },

    scroNum: function () {
        const that = this.ele;
        const options = this.options;
        // 需要所有数字滚动  小数点和分隔号不滚动 那么在这里去除小数点
        var numberStr = options.number.toString().replace('.', '');
        var numItems = that.querySelectorAll('.ttroll');
        [].forEach.call(numItems, item => item.style.transition = 'all 0.5s ease-in-out')
        var h = Math.ceil(numItems[0].children[0].offsetHeight);
        // var ht = Math.ceil(numItems[0].offsetHeight);
        // 解决滚动数字对不齐的问题
        var ht = h * 20;
        // if (numberStr.length <= numItems.length - 1) {
        //     var tempStr = '';
        //     for (var a = 0; a < numItems.length - numberStr.length; a++) {
        //         tempStr += '0';
        //     }
        //     numberStr = tempStr + numberStr;
        // }

        var numberArr = numberStr.split('');
        [...numItems].forEach(function (item, i) {
            setTimeout(function () {
                item.style.transform = 'translateY(' + ((-Number(numberArr[i]) * h - h * 10) / Number(ht) * 100) + '%' + ')';
            }, i * 20)
        });
    },
    iconNum: function () {
        const options = this.options;
        const id = this.id;
        for (var i = 0; i < 10; i++) {
            new FormatDigit({
                selector: '#' + id + ' .num' + i,
                number: i.toString(),
                color: options.color,
                fontSize: options.fontSize,
                width: options.width,
                height: options.height,
                isComma: false,
                // marginL: options.marginL,
                isIcon: options.isIcon,
            });
        }
        // 分号
        if (options.isComma) {
            new FormatDigit({
                selector: '#' + id + ' .comma',
                number: ',',
                color: options.color,
                fontSize: options.fontSize,
                width: options.width,
                height: options.height,
                isComma: true,
                isIcon: options.isIcon,
                // marginL: options.marginL,
            });
        }
        new FormatDigit({
            selector: '#' + id + ' .dot',
            number: '.',
            color: options.color,
            fontSize: options.fontSize,
            width: options.width,
            height: options.height,
            isComma: false,
            isIcon: options.isIcon,
            // marginL: options.marginL,
        });
    },
    Num: function () {
        const options = this.options;
        const id = this.id;
        for (var i = 0; i < 10; i++) {
            [...document.querySelectorAll('#' + id + ' .num' + i)].forEach(item => {
                item.innerText = i;
            })
        }
        // 分号
        if (options.isComma) {
            document.querySelectorAll('#' + id + ' .comma').forEach(item => {
                item.innerText = ",";
            })
        }
        // 小数点
        document.querySelectorAll('#' + id + ' .dot').forEach(item => {
            item.innerText = ".";
        })

    },
}
ScrollDigit.colors = {
    red: "#DC7060",
    green: "#08A336",
    yellow: "#F7EA4B",
    grey: "#E6A23C",
    blue: "#5DADF7",
    orange: "#FBA63C",
    white: "white",
}

try {
    // 是window对象
    if (globalThis === window) {
        window.ScrollDigit = ScrollDigit;
        FormatDigit = window.FormatDigit;
    } else if (module && module.exports) {
        module.exports = ScrollDigit;
        FormatDigit = require("./format-digit")
    }
} catch {
    console.log('未知环境')
}

/*
使用方式
  new ScrollDigit(ID,options);
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
    marginL: '0',
    // 是否使用格式化数字
    isIcon: true,
    unit: '单位',
}
*/

// 正确的使用方式 字体间距 滚动数字控制宽度  字体间距 格式化数字控制左边距