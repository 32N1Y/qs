var roles = [{
	id:"gsjz",
	av:"../audio/gsjz.mp3",
	info:"比起动口总是先动手，似乎有些不良少年的感觉，但其实正义感强，十分为同伴着想。刀法高超，有“动如雷电，势如风雨”之称。"
},{
	id:"abqm",
	av:"../audio/abqm.mp3",
	info:"绝代阴阳师，文武双全，万事皆能妥帖处理。稍有些远离尘世的感觉，是不向任何人敞露真心的神秘性格。"
},{
	id:"slw",
	av:"../audio/slw.mp3",
	info:"作为织田信长的侍童，从饮食起居到工作事务全部包揽，是一位有能力且眉清目秀的青年。从心底仰慕信长，性格坦率认真。"
},{
	id:"sdtz",
	av:"../audio/sdtz.mp3",
	info:"识渊博且有能力的政治家，能够同时倾听与理解十人说话，并能应对自如。优秀且努力。总是用理性的思维方式，但很不擅长应对幽灵等非科学的事物。"
},{
	id:"xmss",
	av:"../audio/xmss.mp3",
	info:"离奇言行颇多，性格难以捉摸。自幼就喜欢猫，虽然常常与猫对话，其实完全无法沟通。"
},{
	id:"dcgj",
	av:"../audio/dcgj.mp3",
	info:"德川家的次男。拥有很为兄弟着想的温和性格。颇为好动，经常与爱犬狮子丸一起偷溜到城中小镇玩耍。"
}],
curCount = 0;

$(function(){
	//点击下载
	downloadVoid();
	//分页前端效果
	page();
	//预约推送
	yyPush()
	
	//点击进入官网
	$('.btn_home').on('click',function(){
		$('.yy_push').fadeOut(500);
	})
	
	//点击菜单
	$('.btn_menu').on('click',function(){
		$('.mask').fadeIn(500);
		$('.nav_box').slideDown(500);
	})
	//隐藏菜单
	$('.nav_box').on('click',function(){
		$('.mask').fadeOut(500);
		$(this).slideUp(500);
	})

	//关闭当前弹窗
	$('.btn_close').on('click', function(){
		$('.mask').fadeOut(100);
		$(this).parents('.mask_box').slideUp(200);
	
		if($(this).data('type') == "video"){
			//暂停视频
			videoPause();
		}
	})
	
	//点击视频列表--显示视频弹窗
	$('.view_sp, .btn_play').on('click', function(){
		var src = "../video/video.mp4",
		    str = "";
		    
			str += '<video id="vdo" width="100%" height="100%" controls="controls">';
			str += '  <source src="'+ src +'" type="video/mp4">';
			str += '  Your browser does not support the video tag.';
			str += '</video>';
		$('.video_con').html(str);
		
		if($('#vdo')[0]){
			$('#vdo')[0].play();
		}
		showBox('.video_box');
	});
		
	//点击福利
	$('.btn_weal').on('click',function(){
		showBox('.weal_box');
	})
	
	//立即预约
	$('.btn_yy').on('click', function(){
		showBox('.yy_box');
	});
	
	//show预约成功
	$('.btn_submit').on('click', function(){
		$('.yy_box').hide();
		showBox('.success_box');
	});
	
	//系统状态切换
	$('.sys_item').on('click',function(){
		var sys = $(this).text();
		$(this).children('em').addClass('on').parent('li').siblings().children('em').removeClass('on');
	})
	
	//点击角色头像
	$('.icon_item a').on('click', function(){
		var type = $(this).data('type');
		
		//添加人物介绍
		for (var i = 0; i < roles.length; i ++) {
			if(type == roles[i].id){
				curCount = i;
				//添加人物介绍
				addRolesIntro(i);
				//插入音频文件 
				addAudio(i);
			}
		}
		//设置人物动效
		setRolesAnima(type);
		//角色切换箭头显示
		showArrow(curCount)
		
	});
	//点击切换角色 btn_prev
	$('.btn_prev').on('click', function(){
		curCount--;
		if(curCount <= 0){
			curCount = 0;
		}
		var type = roles[curCount].id;
		
		//添加人物介绍
		for (var i = 0; i < roles.length; i ++) {
			if(type == roles[i].id){
				//添加人物介绍
				addRolesIntro(i);
				//插入音频文件 
				addAudio(i)
			}
		}
		//设置人物动效
		setRolesAnima(type);
		//角色切换箭头显示
		showArrow(curCount)
	})
	//点击切换角色 btn_next
	$('.btn_next').on('click', function(){
		curCount++;
		if(curCount >= roles.length-1){
			curCount = roles.length-1;
		}
		var type = roles[curCount].id;
		
		//添加人物介绍
		for (var i = 0; i < roles.length; i ++) {
			if(type == roles[i].id){
				//添加人物介绍
				addRolesIntro(i);
				//插入音频文件 
				addAudio(i)
			}
		}
		//设置人物动效
		setRolesAnima(type);
		//角色切换箭头显示
		showArrow(curCount)
	})
	//点击CV
	$('.cv_item').on('click', function(){
		var $audio = $('#audio')[0];
		if($audio){
			$audio.play();
		}
	})
	
	//点击微信
	$('.btn_weixin').on('click', function(){
		$(this).addClass('active');
		$('.code_qr').fadeIn(500)
	})
	
	//内容列表切换
	$('.menu_item').on('click', function(){
		var count = $(this).index(),
			type = $(this).data('type'),
			$tag = $(this).parents('.menu').children('.menu_tag'),
			tagLeft = 162.5;
			
		var Left = tagLeft + count * 325;
		$tag.animate({'left': Left},500);
		
		$(this).addClass('active').siblings().removeClass('active');
		if(type){
			$('.list_'+ type).show().siblings().hide();
		}
		
	})
	
	//点击 图片显示大图
	$('.view_tp').on('click', function(){
		var img = $(this).children('img');
		showPic(img);
	});
})


//预约推送
function yyPush(){
	var isPush = true;
	
   	if(!isPush){
   		$('.yy_push').remove();
   		
   	}
}

//菜单切换
function changeMenu(obj){
	var index = $(obj).index();
		$(obj).addClass('active').siblings().removeClass('active');
		$('.nav_box').slideUp(100);
		$('.mask').fadeOut(100);
}

//角色切换箭头显示
function showArrow(curCount){
	if(curCount >= roles.length-1){
		$('.btn_next').fadeOut(500);
		$('.btn_prev').fadeIn(500);
	}else if(curCount <= 0){
		$('.btn_prev').fadeOut(500);
		$('.btn_next').fadeIn(500);
	}else{
		$('.btn_next').fadeIn(500);
		$('.btn_prev').fadeIn(500);
	}
}

//设置人物动效
function setRolesAnima(type){
	if(!type){return;};
	$('.icon_'+ type).addClass('active').parent().siblings().children().removeClass('active');
	$('.cv_'+type).addClass('active').siblings().removeClass('active');
	$('.roles_'+type).addClass('active').siblings().removeClass('active');
	$('.txt_'+type).addClass('active').siblings().removeClass('active');
}

//添加人物介绍
function addRolesIntro(i){
	var str = '<span class="">人物介绍：</span><p class="role_intro">'+roles[i].info+'</p>';
	$('.roles_introduce').html(str);
}

//插入音频文件 
function addAudio(i){
	var str = "";
	str +='<audio id="audio">';
	str +='  <source src="'+roles[i].av+'" type="audio/mpeg">';
	str +='  <source src="" type="audio/wave">';
	str +='  您的浏览器不支持 audio 元素。';
	str +='</audio>';
	
	$('.roles_audio').html(str);
}

//点击下载
function downloadVoid(){
	var url = "http://www.baidu.com";
	var  browser = isSystem();
		
	$('.btn_download').on('click',  function(){
		if(url == ""){
			alert("敬请期待");
		}else{
			if(browser == "android"){
				$(this).attr('href', url);
			}else{
				alert("您好，本次封测仅在安卓平台进行。iOS用户可使用电脑登录 http://qs.ppgame.com/ 下载测试包，并通过模拟器进行封测体验")
			}
			
		}
	});
};

//暂停视频
function videoPause(){
	var video = $('#vdo')[0];
 	if (video) {
   		video.pause();
    }
}

//显示弹窗
function showBox(obj){
	$('.mask').fadeIn(100);
	$(obj).slideDown(200);
}

//显示大图
function showPic(img){
	var src = $(img).attr("src");
	var alt = $(img).attr("alt");
	var title = $(img).attr("title");
	$('.paint_box img').attr('src', src);
	$('.paint_box img').attr('alt', alt);
	$('.paint_box img').attr('title', title);
	setImgSize('.paint_box img');
	$('.mask').show();
	$('.paint_box').show();
	$('.paint_box').unbind('click').bind('click',function(){
		$('.paint_box').hide();
		$('.mask').hide();
	});
}

//改变图片大小
function setImgSize(item){
	$(item).width('auto');
	$(item).height('auto');
	var itemW = $(item)[0].naturalWidth;//原始宽度
	var itemH = $(item)[0].naturalHeight;
	var screenW = $(window).width();
	var screenH = $(window).height();
	if(itemW>=screenW&&itemH>=screenH){
		if((itemW/itemH) < (screenW/screenH)){
			$(item).height(screenH);
		}else{
			$(item).width((screenW-140)+'px');
		}
	}else if(itemW>=screenW){
		$(item).width((screenW-140)+'px');
	}else if(itemH>=screenH){
		$(item).height(screenH);
	}
}

//分页
function page(){
	var count = 0
	$('.pg_prev').on('click', function(){
		var pages = $(this).siblings('.pg_box').children().children();
		count--;
		if(count <= 0){
			count = 0;
		}
		pages.eq(count).addClass('on').siblings().removeClass('on');
	})
	$('.pg_next').on('click', function(){
		var pages = $(this).siblings('.pg_box').children().children();
		count ++;
		if(count >= pages.length-1){
			count = pages.length-1;
		}
		pages.eq(count).addClass('on').siblings().removeClass('on');
	});
	$('.pg_box li').on('click', function(){
		count = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
	})
}

//返回href 参数
function getQueryString(name) {
    var reg = new RegExp("(^|[&|?])" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//获取用户系统信息
function isSystem(){
	var browser = {
		versions: function() {
			var u = navigator.userAgent, app = navigator.appVersion;
			//alert(navigator.platform);
			return {//移动终端浏览器版本信息 
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
				iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
	if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
		//window.location.href = 'http://www.baidu.com';
		return 'ios';
	}
	else if (browser.versions.android) {
		//window.location.href = 'http://wap.mh.ppgame.com';
		return 'android';
	}
}
