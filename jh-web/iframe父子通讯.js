
// ==UserScript==
// @name         IFrame嵌套
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huawei.com
// @supportURL   https://greasyfork.org/zh-CN/scripts/421876/feedback
// @source       https://github.com/PriateXYF
// @grant        none
// ==/UserScript==

(function () {
    'use strict';



    const iframeSrc = 'http://localhost:5173';
    if (window.location.href.includes(iframeSrc)) {
        // 不展示
        console.log('不展示');
    } else {
        const showIframe = document.createElement('div');
        showIframe.innerHTML = `
<div id="showIframe" >
<button id="show">展示</button>
<button id="hide" style="display: none">隐藏</button>
<div id="showMain" style="display: none">
<iframe id="child" src="${iframeSrc}" ></iframe>
</div>
</div>
<style>
#showIframe{
  resize: both;
  position: relative;
  z-index: 1999;
}
#showIframe iframe {
  width: 100%;
  height: 900px;
  overflow-y:scroll;
  border: none;
  z-index: 1999;
}
</style>
`;
        document.querySelector('html')
            .appendChild(showIframe);
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.key === 'q') {
                console.log("隐藏");
                document.getElementById('showMain').style.display = 'none';
                document.getElementById('hide').style.display = 'none';
                document.getElementById('show').style.display = '';
            }
        });
        setTimeout(() => {
            window.addEventListener('message', function (e) {
                try {
                    let data = JSON.parse(e.data)
                    if (data.from === 'auth' && data.event === 'close') {
                        document.getElementById('showMain').style.display = 'none';
                        document.getElementById('hide').style.display = 'none';
                        document.getElementById('show').style.display = '';
                    }
                } catch (error) {
                    console.log(error)
                }
            })

            const showBtn = document.getElementById('show');
            showBtn.addEventListener('click', function () {
                document.getElementById('showMain').style.display = '';
                document.getElementById('hide').style.display = '';
                document.getElementById('show').style.display = 'none';
            });
            const hide = document.getElementById('hide');
            hide.addEventListener('click', function () {
                document.getElementById('showMain').style.display = 'none';
                document.getElementById('hide').style.display = 'none';
                document.getElementById('show').style.display = '';
            });
        }, 1000);
    }
})();
