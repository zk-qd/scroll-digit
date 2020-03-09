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
    };
    if (!id || typeof id != 'string' || !(this.ele = document.querySelector('#' + id))) {
        throw new TypeError('容器id不存在或非string类型')
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
        html.push('<ul class="' + options.className + '">');
        // 滚动数字的个数
        var valLen = (options.number + '').length;

        // 如果没有添加这个元素 或者长度不够 那么重新创建
        if (!that.querySelector('.' + options.className) || that.querySelectorAll('.dataOne').length != valLen) {
            // 根据数字个数添加几次
            for (var i = 0; i < valLen; i++) {
                html.push('<li class="dataOne" style="' +
                    ';"><div class="dataBoc" style="height:' + options.height + ';line-height:' + options.height +
                    ';width:' + options.width + ';color:' + options.color + ';font-size:' + options.fontSize +
                    ';"><div class="tt" t="10">' +
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
            }
            html.push('</ul>');
            // 注意height 和 fontSize的单位要一致
            options.unit && (html.push('<em style="height:' + options.height + ';line-height:' +
                (parseInt(options.height) + parseInt(options.fontSize) / 2 + options.height.match(/\D/g).reduce((total, item) => total + item)) +
                ';color:' + options.color +
                ';font-size:' + (parseInt(options.fontSize) / 2 + options.height.match(/\D/g).reduce((total, item) => total + item)) +
                ';vertical-align: baseline;display: inline-block;">' + options.unit + '</em>'));
            that.innerHTML = html.join('').trim();
        }
    },

    scroNum: function () {
        const that = this.ele;
        const options = this.options;
        var numberStr = options.number.toString();
        var numItems = that.querySelectorAll('.tt');
        [].forEach.call(numItems, item => item.style.transition = 'all 0.5s ease-in-out')
        var h = numItems[0].children[0].offsetHeight;
        var ht = numItems[0].offsetHeight;

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
                item.style.transform = 'translateY(' + ((-parseInt(numberArr[i]) * h - h * 10) / parseInt(ht) * 100) + '%' + ')';
            }, i * 20)
        });
    },
    iconNum: function () {
        const options = this.options;
        const id = this.id;
        for (var i = 0; i < 10; i++) {
            new formatDigit({
                selector: '#' + id + ' .num' + i,
                number: i.toString(),
                color: options.color,
                fontSize: options.fontSize,
                width: options.width,
                height: options.height,
                isComma: false,
                marginL: options.marginL,
            });
        }
    },
    Num: function () {
        const options = this.options;
        const id = this.id;
        for (var i = 0; i < 10; i++) {
            [...document.querySelectorAll('#' + id + ' .num' + i)].forEach(item => {
                item.innerText = i;
            })
        }
    },
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