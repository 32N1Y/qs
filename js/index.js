
$(function(){
	//导航切换状态
	var curType = getQueryString('type');
	if(curType != null) {
		isPush = false;
		navChange(curType);
	}
	//首页最新情报
	newInforVoid();
	//右侧关注
	attentionVoid();
	//测试下载
	downloadVoid();
	//分页前端效果
	page();
	//男子物语初始化
	initRoles();
	
	
		
//	$('.index_itme').eq(2).css({'z-index':1,'top': 0});
	
	//关闭当前弹窗
	$('.btn_close').on('click', function(){
		$('.mask').fadeOut(100);
		$(this).parents('.mask_box').slideUp(200);
		
		if($(this).data('type') == "video"){
			//暂停视频
			$('#vdo')[0].pause();
		}
	})
	
	//导航切换
	$('header').on('click', '.nav_item',  function(){
			var type = $(this).data('type');
			navChange(type);
	})
	
	//首页-更多
	$('.btn_more').on('click', function(){
		navChange('news');
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
	
	//内容列表切换
	$('.menu_itme').on('click', function(){
		var count = $(this).parent().index(),
			type = $(this).data('type'),
			$tag = $(this).parents('.menu').children('.menu_tag'),
			tagLeft = 162.5;
			
		var Left = tagLeft + count * 325;
		$tag.animate({'left': Left},500);
		
		$(this).addClass('active').parent().siblings().children().removeClass('active');
		if(type){
			$('.list_'+ type).show().siblings().hide();
		}
	})
	
	//点击视频列表
	$('.view_sp, .btn_play').on('click', function(){
		var src = "video/video.mp4",
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
	
	//点击 图片显示大图
	$('.view_tp, .view_yxjt').on('click', function(){
		var img = $(this).children('img');
		showPic(img);
	});
	
	
	//国家
	$('.country_item').on('click',function(){
		var type = $(this).data('type'),
			iconType = "",
			str = "";
			curArr = [], 
			curCount = 0;
			
		$(this).addClass('active').siblings().removeClass('active');
		
		if(!type){return;};
		
		for (var i = 0; i < roles.length; i ++) {
			if(type == roles[i].country){
				str +='<div class="icon_item icon_'+roles[i].id+'">';
				str +='	<a href="javascript:;" data-type = "'+roles[i].id+'">';
				str +='		<img class="icon_img" src="'+roles[i].icon+'" />';
				str +='		<div class="icon_name"><span>'+roles[i].name+'</span></div>';
				str +='	</a>';
				str +='</div>';
				
				curArr.push(roles[i].id);
			}
		}
		$('.roles_icon').html(str);
		iconType = curArr[0];
		
		//插入点
		addDots();
		
		//切换角色
		changeRoles(iconType, curCount)
	})
	//头像
	$('.roles_icon').on('click','.icon_item a',function(){
		var type = $(this).data('type');
		
		for(i in curArr){
			if(curArr[i] == type){
				curCount = i;
			}
		}
		//切换角色
		changeRoles(type, curCount)
	})
	
	//prev
	$('.btn_prev').on('click',function(){
		curCount--;
		if(curCount <= 0){
			curCount = 0;
		}
		var type = curArr[curCount];
		
		//切换角色
		changeRoles(type, curCount)
	})
	
	//next
	$('.btn_next').on('click',function(){
		curCount++;
		if(curCount >= curArr.length-1){
			curCount = curArr.length-1;
		}
		
		var type = curArr[curCount];
		
		//切换角色
		changeRoles(type, curCount)
	})
	
	//点
	$('.dian').on('click', '.dian_itme', function(){
		curCount = $(this).index();
		var type = curArr[curCount];
		
		//切换角色
		changeRoles(type, curCount)
	})
	
	//音频
	$('.roles_cv').on('click','.btn_sound',function(){
		var $audio = $('#audio')[0];
		if($audio){
			$audio.play();
		}
	})
	
	
})

var imgNum = 0;
var images = [];
function preLoadImg() {
  // 第一种方式:获取页面中所有img,包括<img>标签和css中的background-image;
  var imgs = document.images;
  for (var i = 0; i < imgs.length; i++) {
    images.push(imgs[i].src);
  }
  var cssImages = getallBgimages();
  for (var j = 0; j < cssImages.length; j++) {
    images.push(cssImages[j]);
  }
//	for(var h = 0; h < roles.length; h++){
//		images.push(roles[h].cv);
//		images.push(roles[h].role);
//		images.push(roles[h].txt);
//		images.push(roles[h].icon);
//	}
	$.preload(images, {
		each: function(count){
			$('.progress').html(Math.round((count+1) / images.length * 100) + "<sup>%</sup>");
		},
		all: function(){
			$(".progress").html("100<sup>%</sup>");
	   
		   $(".preload").fadeOut(500,function(){
		   	
			   	$('.door_left').addClass('doorFadeOutLeft');
			   	$('.door_right').addClass('doorFadeOutRight');
			   	setTimeout(function(){
			   		$('.door').fadeOut(500);
			   	}, 1000);
			   	$('.main').animate({'opacity': 1},1500);
			   	
			   	//如果有预约推送就显示
			   	yyPush();
		   });
		}
	})
}

//预约推送
var isPush = true;
function yyPush(){
	
   	if(isPush){
   		$('.mask').fadeIn();
   		$('.reward_box').fadeIn();
   	}
}

//导航切换
function navChange(type){
	if(type){
		$('.index_itme').css({'z-index':0});
		$('.index_'+ type).css('z-index',1).stop(true,true).addClass('active').animate({'top': 0},500,function(){
			$('.index_'+ type).siblings().css({'top':'100%'});
		})
//		$('.index_'+ type).fadeIn(500).addClass('active').siblings().fadeOut();
		if(type != "home"){
			$('.new_infor').fadeOut(500);
		}else{
			$('.new_infor').fadeIn(500);
		}
	}
	$('.nav_'+ type).addClass('active').siblings().removeClass('active');
}

//首页最新情报
function newInforVoid(){
	$('.btn_close1').on('click', function(){
		$('.new_infor_box').animate({'bottom':'-195px', 'opacity': 0},300);
		$('.btn_news').fadeIn(300);
	})
	$('.btn_news').on('click', function(){
		$('.new_infor_box').animate({'bottom':'0px', 'opacity': 1},300);
		$('.btn_news').fadeOut(300);
		
		//关注框收起
		$('.sidebar_con').animate({'right':'-190px', 'opacity': 0},300);
		$('.btn_show').fadeIn(300);
	})
};

//右侧关注
function attentionVoid(){
	// 右侧浮动关注框点击 显示 隐藏效果
	$('.attention').on('click', '.btn_hide', function(){
		$('.sidebar_con').animate({'right':'-190px', 'opacity': 0},300);
		$('.btn_show').fadeIn(300);
	});
	$('.attention').on('click', '.btn_show', function(){
		$('.sidebar_con').animate({'right':'0px', 'opacity': 1},300);
		$('.btn_show').fadeOut(300);
	});
	//切换关注渠道 -（微博，微信，qq,贴吧）
	$('.attention').on('click', '.btn_itme', function(){
		var type = $(this).data('type');
		$(this).addClass('active').siblings().removeClass('active');
		if(type){
			$('.item_'+ type).fadeIn(300).siblings().fadeOut(300);			
		}
	});
};
//点击下载
function downloadVoid(){
	var url = "";
	if(url != "") {$('.btn_download').addClass('active')};
		
	$('.attention').on('click', '.btn_download', function(){
		if(url == ""){
			alert("敬请期待");
		}else{
			$(this).attr('href', url);
		}
	});
};


var roles = [{
	id:"gsjz",
	name:"高杉晋作",
	country:"mu",
	cv:"images/man/cv/gsjz.png",
	role:"images/man/role/19role-gaoshanjinzuo.png",
	txt:"images/man/txt/gsjz.png",
	icon:"images/man/icon/icon_gsjz.png",
	av:"audio/gsjz.mp3",
	info:"比起动口总是先动手，似乎有些不良少年的感觉，但其实正义感强，十分为同伴着想。刀法高超，有“动如雷电，势如风雨”之称。"
},{
	id:"gxwl",
	name:"桂小五郎",
	country:"mu",
	cv:"images/man/cv/gxwl.png",
	role:"images/man/role/20role-guixiaowulang.png",
	txt:"images/man/txt/gxwl.png",
	icon:"images/man/icon/icon_gxwl.png",
	av:"audio/gxwl.mp3",
	info:"属于革新派，与新选组对立。不轻易拔刀，但实力应是不容小觑的。无论怎么追踪均能脱身，被揶揄为“逃跑的小五郎”。"
},{
	id:"ctzs",
	name:"冲田总司",
	country:"mu",
	cv:"images/man/cv/ctzs.png",
	role:"images/man/role/21role-chongtianzongs.png",
	txt:"images/man/txt/ctzs.png",
	icon:"images/man/icon/icon_ctzs.png",
	av:"audio/ctzs.mp3",
	info:"担任新选组一番队队长的天才剑士。喜欢恶作剧，对中意的人会各种唱反调。似乎有病在身，时不时会剧烈咳嗽不止。"
},{
	id:"wz",
	name:"武尊",
	country:"tian",
	cv:"images/man/cv/wz.png",
	role:"images/man/role/16role-wuzun.png",
	txt:"images/man/txt/wz.png",
	icon:"images/man/icon/icon_wz.png",
	av:"audio/wz.mp3",
	info:"中性美少年。虽有超越常识的怪力，但本人很厌恶纷争。拥有天真烂漫的单纯个性。能与动植物对话。"
},{
	id:"ds",
	name:"大蛇",
	country:"tian",
	cv:"images/man/cv/ds.png",
	role:"images/man/role/17role-dashe.png",
	txt:"images/man/txt/ds.png",
	icon:"images/man/icon/icon_ds.png",
	av:"audio/ds.mp3",
	info:"有着像蛇舌般的发尾，以及常人无法企及的美貌。据说与其对视的异性皆会被夺取心智。看似傲慢冷淡，实则坚守义理，内心温柔。"
},{
	id:"bcw",
	name:"八咫乌",
	country:"tian",
	cv:"images/man/cv/bcw.png",
	role:"images/man/role/18role-bachiniao.png",
	txt:"images/man/txt/bcw.png",
	icon:"images/man/icon/icon_bcw.png",
	av:"audio/bcw.mp3",
	info:"自诩为“天津神使”。总是带着目中无人的笑容。虽然讨厌人类，但对能召回天津神的太阳巫女抱有极强的执着心。"
},{
	id:"dcgj",
	name:"德川纲吉",
	country:"jiang",
	cv:"images/man/cv/dcgj.png",
	role:"images/man/role/13role-dechuangangji.png",
	txt:"images/man/txt/dcgj.png",
	icon:"images/man/icon/icon_dcgj.png",
	av:"audio/dcgj.mp3",
	info:"德川家的次男。拥有很为兄弟着想的温和性格。颇为好动，经常与爱犬狮子丸一起偷溜到城中小镇玩耍。"
},{
	id:"dcjg",
	name:"德川家光",
	country:"jiang",
	cv:"images/man/cv/dcjg.png",
	role:"images/man/role/14role-dechuanjiaguang.png",
	txt:"images/man/txt/dcjg.png",
	icon:"images/man/icon/icon_dcjg.png",
	av:"audio/dcjg.mp3",
	info:"德川家的长男。是不轻易显露真心、平日看上去漫不经心的类型。是骷髅的爱好者。喜好武艺，在剑术上达到“免许皆传”的水平。"
},{
	id:"dcjz",
	name:"德川吉宗",
	country:"jiang",
	cv:"images/man/cv/dcjz.png",
	role:"images/man/role/15role-dechuanjizong.png",
	txt:"images/man/txt/dcjz.png",
	icon:"images/man/icon/icon_dcjz.png",
	av:"audio/dcjz.mp3",
	info:"德川家的三男。气质高贵，知书达礼，稍稍有点不谙世事的单纯。总是被乱来的兄长们耍得团团转。有狩猎鹰的爱好。"
},{
	id:"xmss",
	name:"夏目漱石",
	country:"xian",
	cv:"images/man/cv/xmss.png",
	role:"images/man/role/10role-xiamushushi.png",
	txt:"images/man/txt/xmss.png",
	icon:"images/man/icon/icon_xmss.png",
	av:"audio/xmss.mp3",
	info:"离奇言行颇多，性格难以捉摸。自幼就喜欢猫，虽然常常与猫对话，其实完全无法沟通。"
},{
	id:"jhclb",
	name:"江户川乱步",
	country:"xian",
	cv:"images/man/cv/jhclb.png",
	role:"images/man/role/11role-jianghu.png",
	txt:"images/man/txt/jhclb.png",
	icon:"images/man/icon/icon_jhclb.png",
	av:"audio/jhclb.mp3",
	info:"天才推理作家。原为侦探，从他人处获取情报的交涉力与推理能力都十分优秀。一遇到事件就兴奋，追求极难解决的事件。"
},{
	id:"jclzj",
	name:"芥川龙之介",
	country:"xian",
	cv:"images/man/cv/jclzj.png",
	role:"images/man/role/12role-jiechuan.png",
	txt:"images/man/txt/jclzj.png",
	icon:"images/man/icon/icon_jclzj.png",
	av:"audio/jclzj.mp3",
	info:"作为文豪而闻名遐迩的时髦男性。举止优雅且兼具幽默。拥有不顾自己得失而帮助他人的温柔性格。"
},{
	id:"sdtz",
	name:"圣德太子",
	country:"gu",
	cv:"images/man/cv/sdtz.png",
	role:"images/man/role/7role-shengdetaizi.png",
	txt:"images/man/txt/sdtz.png",
	icon:"images/man/icon/icon_sdtz.png",
	av:"audio/sdtz.mp3",
	info:"识渊博且有能力的政治家，能够同时倾听与理解十人说话，并能应对自如。优秀且努力。总是用理性的思维方式，但很不擅长应对幽灵等非科学的事物。"
},{
	id:"xymz",
	name:"小野妹子",
	country:"gu",
	cv:"images/man/cv/xymz.png",
	role:"images/man/role/8role-xiaoyemeizi.png",
	txt:"images/man/txt/xymz.png",
	icon:"images/man/icon/icon_xymz.png",
	av:"audio/xymz.mp3",
	info:"圣德太子的得力部下，是一位交流能力强、备受青睐的青年。常被派往各种现场，在工作上深受太子的信赖。"
},{
	id:"zclz",
	name:"中臣镰足",
	country:"gu",
	cv:"images/man/cv/zclz.png",
	role:"images/man/role/9role-zhongchenlianzu.png",
	txt:"images/man/txt/zclz.png",
	icon:"images/man/icon/icon_zclz.png",
	av:"audio/zclz.mp3",
	info:"性格消极，被害妄想强烈。总是为了国家和平而埋头苦干。夙愿是希望“世间和平”，为此绝不做暗杀之类肮脏的勾当。"
},{
	id:"slw",
	name:"森兰丸",
	country:"zhan",
	cv:"images/man/cv/slw.png",
	role:"images/man/role/4role-senlanwan.png",
	txt:"images/man/txt/slw.png",
	icon:"images/man/icon/icon_slw.png",
	av:"audio/slw.mp3",
	info:"作为织田信长的侍童，从饮食起居到工作事务全部包揽，是一位有能力且眉清目秀的青年。从心底仰慕信长，性格坦率认真。"
},{
	id:"ztxz",
	name:"织田信长",
	country:"zhan",
	cv:"images/man/cv/ztxz.png",
	role:"images/man/role/5role-zhitianxinchang.png",
	txt:"images/man/txt/ztxz.png",
	icon:"images/man/icon/icon_ztxz.png",
	av:"audio/ztxz.mp3",
	info:"唯我独尊、勇猛无畏的奇才。在战略方面，有着常人所没有的思维能力。是一位比起语言更擅于行动的统率者。"
},{
	id:"ydzz",
	name:"伊达政宗",
	country:"zhan",
	cv:"images/man/cv/ydzz.png",
	role:"images/man/role/6role-yidazhengzong.png",
	txt:"images/man/txt/ydzz.png",
	icon:"images/man/icon/icon_ydzz.png",
	av:"audio/ydzz.mp3",
	info:"自由奔放的伊达家家主。经常到市集小镇上同市民相处，没有身份阶级的区别。兴趣是做料理，乐于为部下及同伴亲自下厨。"
},{
	id:"abqm",
	name:"安倍晴明",
	country:"ya",
	cv:"images/man/cv/abqm.png",
	role:"images/man/role/1role-anbejingming.png",
	txt:"images/man/txt/abqm.png",
	icon:"images/man/icon/icon_abqm.png",
	av:"audio/abqm.mp3",
	info:"绝代阴阳师，文武双全，万事皆能妥帖处理。稍有些远离尘世的感觉，是不向任何人敞露真心的神秘性格。"
},{
	id:"pqs",
	name:"平清盛",
	country:"ya",
	cv:"images/man/cv/pqs.png",
	role:"images/man/role/2role-pingqingsheng.png",
	txt:"images/man/txt/pqs.png",
	icon:"images/man/icon/icon_pqs.png",
	av:"audio/pqs.mp3",
	info:"武家贵族出身。旁人总认为其举止粗鲁，实际上是个忠厚且富有同情心的人。虽然对任何人都很亲切，但外表和语气总是吓跑对方。"
},{
	id:"tydz",
	name:"藤原道长",
	country:"ya",
	cv:"images/man/cv/tydz.png",
	role:"images/man/role/3role-tengyuandaozhang.png",
	txt:"images/man/txt/tydz.png",
	icon:"images/man/icon/icon_tydz.png",
	av:"audio/tydz.mp3",
	info:"总是面带微笑，说话带有独特口音。热爱文学，是一位有知识及教养的贵族，但喜欢用知识和权力来戏弄人。"
}];
var curArr = [],curCount = 0;

function initRoles(){
	curArr = [];
	//添加角色-插入值
	addElementRoles();
	
	//插入点
	addDots();
	
	//添加人物介绍
	addRolesIntro(0);
	
	//插入音频文件
	addAudio(0);

	$('.roles_country').children().eq(0).addClass('active').siblings().removeClass('active');
	$('.roles_cv').children().eq(0).addClass('active');
	$('.roles_man').children().eq(0).addClass('active');
	$('.roles_txt').children().eq(0).addClass('active');
	$('.roles_icon').children().eq(0).addClass('active');
	$('.dian').children().eq(0).addClass('active');
}

//添加角色-插入值
function addElementRoles(){
	var cvStr = manStr = txtStr = iconStr = "";
	for (var i = 0; i < roles.length; i ++) {
		
		cvStr +='<div class="cv_item cv_'+roles[i].id+'" data-type = "'+roles[i].id+'">';
		cvStr +='   <img src="'+roles[i].cv+'" />';
		cvStr +='	<a class="btn_sound" title="点击播放" href="javascript:;"></a>';
		cvStr +='</div>';
		
		manStr +='<div class="man_item man_'+roles[i].id+'">';
		manStr +='   <img src="'+roles[i].role+'" />';
		manStr +='</div>';
		
		txtStr +='<div class="txt_item txt_'+roles[i].id+'">';
		txtStr +='   <img src="'+roles[i].txt+'" />';
		txtStr +='</div>';
		
		if(roles[i].country == "mu"){
			iconStr +='<div class="icon_item icon_'+roles[i].id+'">';
			iconStr +='	<a href="javascript:;" data-type = "'+roles[i].id+'">';
			iconStr +='		<img class="icon_img" src="'+roles[i].icon+'" />';
			iconStr +='		<div class="icon_name"><span>'+roles[i].name+'</span></div>';
			iconStr +='	</a>';
			iconStr +='</div>';
			
			curArr.push(roles[i].id);
		}
	}
	
	$('.roles_cv').html(cvStr);
	$('.roles_man').html(manStr);
	$('.roles_txt').html(txtStr);
	$('.roles_icon').html(iconStr);
	
	
}
//添加人物介绍
function addRolesIntro(i){
	var str = '<p><span>人物介绍：</span>'+roles[i].info+'</p>';
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
//插入点
function addDots(){
	var str = ""
	for(var i = 0; i < curArr.length; i++){
		str += '<a class="dian_itme" href="javascript:;"></a>';
	}
	$('.dian').html(str);
}
//设置人物动效
function setRolesAnima(type){
	if(!type){return;};
	$('.icon_'+ type).addClass('active').siblings().removeClass('active');
	$('.cv_'+type).addClass('active').siblings().removeClass('active');
	$('.man_'+type).addClass('active').siblings().removeClass('active');
	$('.txt_'+type).addClass('active').siblings().removeClass('active');
}
//角色切换箭头显示
function showArrow(curCount){
	if(curCount >= curArr.length-1){
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
//切换角色
function changeRoles(type, curCount){
	//设置人物动效
	setRolesAnima(type)
	//角色切换箭头显示
	showArrow(curCount)
	//添加人物介绍
	for (var i = 0; i < roles.length; i ++) {
		if(type == roles[i].id){
			//添加人物介绍
			addRolesIntro(i);
			//插入音频文件 
			addAudio(i)
		}
	}
	$('.dian_itme').eq(curCount).addClass('active').siblings().removeClass('active');
	
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
	//alert('itemW:'+itemW+'-------itemH:'+itemH+'----------screenW:'+screenW+'-------:screenH'+screenH)
}

//返回href 参数
function getQueryString(name) {
    var reg = new RegExp("(^|[&|?])" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

