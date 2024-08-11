import Chance from 'chance'

const BASE_STR = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

export const randomStr = {
    /**
     * 随机字符串
     * @param min 字符串最小长度
     * @param max 字符串最大长度
     * @param baseStr 基础字符串
     * @returns {string} 随机字符串
     */
    randomStr: (min = 1, max = Number.MAX_VALUE, baseStr = BASE_STR) => {
        let result = "";
        for (let i = 0; i < randomNumber.randomInt(min, max); i++) {
            result += (baseStr + "").charAt(randomNumber.randomInt(0, baseStr.length))
        }
        return result;
    },

    /**
     * 随机字符串
     * @param len 字符串长度
     * @param baseStr 基础字符串
     * @returns {string} 随机字符串
     */
    randomStrByLen: (len = 1, baseStr = BASE_STR) => {
        return randomStr.randomStr(len, len, baseStr);
    }
}

export const randomList = {
    /**
     * 随机数组
     * @param min 数组的最小长度
     * @param max 数组的最大长度，如果小于min，则=min
     * @param baseList 从基础数组中取值
     * @returns {*[]} 随机数组结果
     */
    randomList: (min = 0, max = 0, baseList = []) => {
        if (max < min) {
            max = min
        }
        const size = randomNumber.randomInt(min, max);
        const result = []
        for (let i = 0; i < size; i++) {
            const index = randomNumber.randomInt(0, baseList.length - 1);
            result.push(baseList[index]);
        }
        return result;
    },

    /**
     * 随机数组
     * @param len 数组的长度
     * @param baseList 基础数组
     * @returns {*[]} 返回结果
     */
    randomListByLen: (len = 1, baseList = []) => {
        return randomList.randomList(len, len, baseList);
    },

    /**
     * 随机数组，在基础数组中获取，不会重复获取
     * @param len 数组长度
     * @param baseList 基础数组
     * @returns {*[]} 随机数组
     */
    randomListNotRepeating: (len = 1, baseList = []) => {
        let sortBase = baseList.sort(() => randomBool() ? -1 : 1);
        return sortBase.slice(0, len);
    },
    /**
     * 从数组中随机获取一个
     * @param baseList 数组
     * @return {*}
     */
    randomFormList: (baseList = []) => {
        if (baseList.length < 0) {
            return undefined;
        }
        if (baseList.length === 1) {
            return baseList[0];
        }
        return randomList.randomListByLen(1, baseList)[0];
    },
}

/**
 * 随机boolean
 * @returns {boolean} true/false
 */
export function randomBool() {
    return randomNumber.randomInt(0, 1) === 0;
}

export const randomNumber = {
    /**
     * 获取从min到max的随机整数，包含[min,max]
     * @param min 最小值
     * @param max 最大值
     * @returns {number} 随机结果
     */
    randomInt: (min = 1, max = Number.MAX_VALUE) => {
        return randomUtil.integer({min: min, max: max})
    },
    /**
     * 获取从min到max的随机小数，包含[min,max]
     * @param min 最小值
     * @param max 最大值
     * @param decimalPlaces 小数位数，如果小于1则认为是整数
     * @returns {number} 随机结果
     */
    randomDecimal: (min = 1, max = Number.MAX_VALUE, decimalPlaces = 1) => {
        if (decimalPlaces < 1) {
            // 认为取整
            return randomNumber.randomInt(min, max);
        }
        const pow = Math.pow(10, decimalPlaces);
        return Math.round((Math.random() * (max - min + 1) + min) * pow) / pow;
    }
}

export const randomColor = {
    randomRgbColor() {
        let r = Math.floor(Math.random() * 256); //随机生成256以内r值
        let g = Math.floor(Math.random() * 256); //随机生成256以内g值
        let b = Math.floor(Math.random() * 256); //随机生成256以内b值
        return [r, g, b]
    },
    randomHexColor() {
        let hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
        while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
            hex = '0' + hex;
        }
        return '#' + hex; //返回‘#'开头16进制颜色
    },
    hex2Rgb(hex) {
        let rgb = []; // 定义rgb数组
        if (/^\#[0-9A-F]{3}$/i.test(hex)) { //判断传入是否为#三位十六进制数
            let sixHex = '#';
            hex.replace(/[0-9A-F]/ig, function (kw) {
                sixHex += kw + kw; //把三位16进制数转化为六位
            });
            hex = sixHex; //保存回hex
        }
        if (/^#[0-9A-F]{6}$/i.test(hex)) { //判断传入是否为#六位十六进制数
            hex.replace(/[0-9A-F]{2}/ig, function (kw) {
                rgb.push(eval('0x' + kw)); //十六进制转化为十进制并存如数组
            });
            return rgb; //输出RGB格式颜色
        } else {
            throw new Error(`Input ${hex} is wrong!`)
        }
    },
    rgb2Hex(rgb) {
        if (rgb && rgb.length === 3) {
            let hex = '#'; //定义十六进制颜色变量
            rgb.forEach((kw) => { //提取rgb数字
                kw = parseInt(kw).toString(16); //转为十六进制
                kw = kw.length < 2 ? 0 + kw : kw; //判断位数，保证两位
                hex += kw; //拼接
            });
            return hex; //返回十六进制
        } else {
            // console.log(`Input ${rgb} is wrong!`);
            throw new Error(`Input ${rgb} is wrong!`)
        }
    },
    rgbReverseColor(rgb) {
        if (rgb && rgb.length === 3) {
            return rgb.map(color => 255 - color);
        } else {
            // console.log(`Input ${rgb} is wrong!`);
            throw new Error(`Input ${rgb} is wrong!`)
        }
    },
    createBgAndTextColorHex() {
        let c = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]
        let bgColor = this.rgb2Hex(c)
        let color = this.rgb2Hex([(255 - c[0]), (255 - c[1]), (255 - c[2])])
        return {
            bgColor: bgColor,
            color: color
        }
    }
}

export const probability = {
    calculateTheProbability(number) {
        if (number >= 1) {
            return true;
        }
        if (number <= 0) {
            return false;
        }
        return number * 100 > randomNumber.randomInt(0, 100);
    }
}

export const randomUtil = new Chance();
