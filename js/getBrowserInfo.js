function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
		if(fIEVersion == 10) {
	            return 10;
	       }else{
	       	//IE版本<10
	       	return 9;
	       }
	    } else if(isEdge) {
	        return 'edge';//edge
	    } else if(isIE11) {
	        return 11; //IE11  
	    }else{
	        return -1;//不是ie浏览器
	    }
}

function addDiv(){
	var dom=document.createElement("div"),
		str = "",
		close = "";
	
	str += '<div style="HEIGHT: 100%; WIDTH: 100%; POSITION: fixed; LEFT: 0px; Z-INDEX: 99999; TOP: 0px; font-size: 18px;">';
	str += '	<div style="width: 100%; height: 100%; position: absolute; left: 0; top: 0; BACKGROUND-COLOR: black; opacity: 0.65; FILTER: alpha(opacity=65);"></div>';
	str += '	<div style="width: 800px; height: 540px; position: absolute; left: 50%; top: 50%; margin-left: -400px; margin-top: -270px;  BACKGROUND-COLOR: #FFFFFF; padding: 30px;">';
	str += '		<p style="color: #666;">您使用的浏览器版本过低，会影响体验当前网站内容。建议尽快升级当前的浏览器到最新版本、或安装以下推荐浏览器的最新版本：</p>';
	str += '		<div style="width: 100%; text-align: center;">';
	str += '			<a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank" style="width: 90px;margin: 30px 20px;display: inline-block;color: #666;">';
	str += '	    		<img src="browser/chrome.png" />';
	str += '	   			<span style="">chrome</span>';
	str += '	    	</a>';
	str += '	    	<a href="https://browser.qq.com/" target="_blank" style="width: 90px;margin: 30px 20px;display:inline-block;color: #666;">';
	str += '	    		<img src="browser/qq.png" />';
	str += '	   			<span style="">QQ浏览器</span>';
	str += '	    	</a>';
	str += '			<a href="https://browser.360.cn/se/" target="_blank" style="width: 90px;margin: 30px 20px;display: inline-block;color: #666;">';
	str += '	    		<img src="browser/360.png" />';
	str += '	   			<span style="">360浏览器</span>';
	str += '	    	</a>';
	str += '		</div>';
	str += '    	<p style="color: #666; font-size: 16px;">* 如果你正在使用的是双核浏览器，如QQ浏览器、360浏览器、搜狗浏览器、猎豹浏览器等，可使用浏览器的【极速模式】来继续访问当前网页。</p>';
	str += '    	<img src="browser/browser_tips.png" />';
	str += '    	<a id="browserClose" href="javascript:;" style="color: #FFFFFF; position: absolute; top: -35px; right: 0px; font-size: 30px;">X</a>';
	str += '	</div>';
	str += '</div>';
	
	dom.innerHTML = str;
	document.body.appendChild(dom);
	close = document.getElementById('browserClose');
	close.onclick = function(){
		document.body.removeChild(dom);
	}
}
window.onload = function(){
	if(IEVersion() == 9){
		addDiv();
		console.log("IE版本<10");
	}
	
}
