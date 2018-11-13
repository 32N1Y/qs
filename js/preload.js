//图片预加载

(function($){
	
	function PreLoad(imgs, options){//imgs:图片数组，options:参数
		//将参数保存成属性，方便后面调用
		this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;//判断imgs参数是否为字符串，是就将imgs定义为数组,不是就返回imgs
		this.opts = $.extend({}, PreLoad.DEFAULTS, options);//当没有传递options参数时就调用默认参数，后者覆盖前者，并返回给opts属性
		
		if(this.opts.order === 'ordered'){
			//有序限加载方法
			this._ordered();
		}else{
			//无限加载方法
			this._unordered();
		}
	}
	//默认参数
	PreLoad.DEFAULTS = {
		order: "unordered", //默认为无限加载
		each: null,//每一张图片加载完后执行
		all: null//所以图片加载完后执行
	}
	
	//有序加载方法
	PreLoad.prototype._ordered = function(){
		var imgs = this.imgs,
			lens = imgs.length,
			opts = this.opts,
			count = 0;
		
		ordered();
		
		function ordered(){
			
			var imgObj = new Image();
			
			$(imgObj).on('load error',function(){
				//每张加载完后执行的代码
				opts.each && opts.each(count);
				
				if(count >= lens){
					//所以图片已加载完
					opts.all && opts.all();
				}else{
					ordered();
				}
				
				count++;

			});
			
			imgObj.src = imgs[count];
			
		}
	},
	
	//无限加载方法
	PreLoad.prototype._unordered = function(){
		var imgs = this.imgs,
			opts = this.opts,
			count = 0,
			lens = imgs.length;
		
		$.each(imgs, function(i, src) {   
				if(typeof src != "string") return;
			
				var imgObj = new Image();
			
				$(imgObj).on('load error',function(){
					//加载完每张图后修改loading页的进度值
					opts.each && opts.each(count);
					
					
					//所以图片加载完后隐藏loading页
					if(count >= lens-1){
						opts.all && opts.all();
					}
					count++;
				});
				imgObj.src = src;
			});
	};
	
	$.extend({
		preload: function(imgs, opts){
			new PreLoad(imgs, opts);
		}
	});
	
})(jQuery);


// 该方式引用自其它博客,仅供借鉴  获取背景图片
function getallBgimages() {
	var e, t = [],
		r = document.getElementsByTagName("*");
	for(r = t.slice.call(r, 0, r.length); r.length;)(e = document.deepCss(r.shift(), "background-image")) && (e = /url\(['"]?([^")]+)/.exec(e) || []), (e = e[1]) && -1 == t.indexOf(e) && (t[t.length] = e);
	return t
}
 
document.deepCss = function (who, css) {
  if (!who || !who.style) return '';
  var sty = css.replace(/\-([a-z])/g, function (a, b) {
    return b.toUpperCase();
  });
  if (who.currentStyle) {
    return who.style[sty] || who.currentStyle[sty] || '';
  }
  var dv = document.defaultView || window;
  return who.style[sty] ||
  dv.getComputedStyle(who, "").getPropertyValue(css) || '';
},Array.prototype.indexOf = Array.prototype.indexOf ||
  function (what, index) {
    index = index || 0;
    var L = this.length;
    while (index < L) {
    if (this[index] === what) return index;
    ++index;
  }
  return -1;
}