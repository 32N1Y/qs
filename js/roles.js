$(function(){
	$('.main').css('opacity',1);
	$('.preload, .door').hide();
	$('.index_itme').eq(2).css({'z-index':1,'top': 0});
})
var roles = {
"gsjz":{
	name:"高杉晋作",
	country:"mu",
	cv:"images/man/cv/gsjz.png",
	role:"images/man/role/19role-gaoshanjinzuo.png",
	txt:"images/man/txt/gsjz.png",
	icon:"images/man/icon/icon_gsjz.png",
	av:"audio/gsjz.mp3",
	info:"比起动口总是先动手，似乎有些不良少年的感觉，但其实正义感强，十分为同伴着想。刀法高超，有“动如雷电，势如风雨”之称。"
},"gxwl":{
	name:"桂小五郎",
	country:"mu",
	cv:"images/man/cv/gxwl.png",
	role:"images/man/role/20role-guixiaowulang.png",
	txt:"images/man/txt/gxwl.png",
	icon:"images/man/icon/icon_gxwl.png",
	av:"audio/gxwl.mp3",
	info:"属于革新派，与新选组对立。不轻易拔刀，但实力应是不容小觑的。无论怎么追踪均能脱身，被揶揄为“逃跑的小五郎”。"
},"ctzs":{
	name:"冲田总司",
	country:"mu",
	cv:"images/man/cv/ctzs.png",
	role:"images/man/role/21role-chongtianzongs.png",
	txt:"images/man/txt/ctzs.png",
	icon:"images/man/icon/icon_ctzs.png",
	av:"audio/ctzs.mp3",
	info:"担任新选组一番队队长的天才剑士。喜欢恶作剧，对中意的人会各种唱反调。似乎有病在身，时不时会剧烈咳嗽不止。"
},"wz":{
	name:"武尊",
	country:"tian",
	cv:"images/man/cv/wz.png",
	role:"images/man/role/16role-wuzun.png",
	txt:"images/man/txt/wz.png",
	icon:"images/man/icon/icon_wz.png",
	av:"audio/wz.mp3",
	info:"中性美少年。虽有超越常识的怪力，但本人很厌恶纷争。拥有天真烂漫的单纯个性。能与动植物对话。"
},"ds":{
	name:"大蛇",
	country:"tian",
	cv:"images/man/cv/ds.png",
	role:"images/man/role/17role-dashe.png",
	txt:"images/man/txt/ds.png",
	icon:"images/man/icon/icon_ds.png",
	av:"audio/ds.mp3",
	info:"有着像蛇舌般的发尾，以及常人无法企及的美貌。据说与其对视的异性皆会被夺取心智。看似傲慢冷淡，实则坚守义理，内心温柔。"
},"bcw":{
	name:"八咫乌",
	country:"tian",
	cv:"images/man/cv/bcw.png",
	role:"images/man/role/18role-bachiniao.png",
	txt:"images/man/txt/bcw.png",
	icon:"images/man/icon/icon_bcw.png",
	av:"audio/bcw.mp3",
	info:"自诩为“天津神使”。总是带着目中无人的笑容。虽然讨厌人类，但对能召回天津神的太阳巫女抱有极强的执着心。"
},"dcgj":{
	name:"德川纲吉",
	country:"jiang",
	cv:"images/man/cv/dcgj.png",
	role:"images/man/role/13role-dechuangangji.png",
	txt:"images/man/txt/dcgj.png",
	icon:"images/man/icon/icon_dcgj.png",
	av:"audio/dcgj.mp3",
	info:"德川家的次男。拥有很为兄弟着想的温和性格。颇为好动，经常与爱犬狮子丸一起偷溜到城中小镇玩耍。"
},"dcjg":{
	name:"德川家光",
	country:"jiang",
	cv:"images/man/cv/dcjg.png",
	role:"images/man/role/14role-dechuanjiaguang.png",
	txt:"images/man/txt/dcjg.png",
	icon:"images/man/icon/icon_dcjg.png",
	av:"audio/dcjg.mp3",
	info:"德川家的长男。是不轻易显露真心、平日看上去漫不经心的类型。是骷髅的爱好者。喜好武艺，在剑术上达到“免许皆传”的水平。"
},"dcjz":{
	name:"德川吉宗",
	country:"jiang",
	cv:"images/man/cv/dcjz.png",
	role:"images/man/role/15role-dechuanjizong.png",
	txt:"images/man/txt/dcjz.png",
	icon:"images/man/icon/icon_dcjz.png",
	av:"audio/dcjz.mp3",
	info:"德川家的三男。气质高贵，知书达礼，稍稍有点不谙世事的单纯。总是被乱来的兄长们耍得团团转。有狩猎鹰的爱好。"
},"xmss":{
	name:"夏目漱石",
	country:"xian",
	cv:"images/man/cv/xmss.png",
	role:"images/man/role/10role-xiamushushi.png",
	txt:"images/man/txt/xmss.png",
	icon:"images/man/icon/icon_xmss.png",
	av:"audio/xmss.mp3",
	info:"离奇言行颇多，性格难以捉摸。自幼就喜欢猫，虽然常常与猫对话，其实完全无法沟通。"
},"jhclb":{
	name:"江户川乱步",
	country:"xian",
	cv:"images/man/cv/jhclb.png",
	role:"images/man/role/11role-jianghu.png",
	txt:"images/man/txt/jhclb.png",
	icon:"images/man/icon/icon_jhclb.png",
	av:"audio/jhclb.mp3",
	info:"天才推理作家。原为侦探，从他人处获取情报的交涉力与推理能力都十分优秀。一遇到事件就兴奋，追求极难解决的事件。"
},"jclzj":{
	name:"芥川龙之介",
	country:"xian",
	cv:"images/man/cv/jclzj.png",
	role:"images/man/role/12role-jiechuan.png",
	txt:"images/man/txt/jclzj.png",
	icon:"images/man/icon/icon_jclzj.png",
	av:"audio/jclzj.mp3",
	info:"作为文豪而闻名遐迩的时髦男性。举止优雅且兼具幽默。拥有不顾自己得失而帮助他人的温柔性格。"
},"sdtz":{
	name:"圣德太子",
	country:"gu",
	cv:"images/man/cv/sdtz.png",
	role:"images/man/role/7role-shengdetaizi.png",
	txt:"images/man/txt/sdtz.png",
	icon:"images/man/icon/icon_sdtz.png",
	av:"audio/sdtz.mp3",
	info:"识渊博且有能力的政治家，能够同时倾听与理解十人说话，并能应对自如。优秀且努力。总是用理性的思维方式，但很不擅长应对幽灵等非科学的事物。"
},"xymz":{
	name:"小野妹子",
	country:"gu",
	cv:"images/man/cv/xymz.png",
	role:"images/man/role/8role-xiaoyemeizi.png",
	txt:"images/man/txt/xymz.png",
	icon:"images/man/icon/icon_xymz.png",
	av:"audio/xymz.mp3",
	info:"圣德太子的得力部下，是一位交流能力强、备受青睐的青年。常被派往各种现场，在工作上深受太子的信赖。"
},"zclz":{
	name:"中臣镰足",
	country:"gu",
	cv:"images/man/cv/zclz.png",
	role:"images/man/role/9role-zhongchenlianzu.png",
	txt:"images/man/txt/zclz.png",
	icon:"images/man/icon/icon_zclz.png",
	av:"audio/zclz.mp3",
	info:"性格消极，被害妄想强烈。总是为了国家和平而埋头苦干。夙愿是希望“世间和平”，为此绝不做暗杀之类肮脏的勾当。"
},"slw":{
	name:"森兰丸",
	country:"zhan",
	cv:"images/man/cv/slw.png",
	role:"images/man/role/4role-senlanwan.png",
	txt:"images/man/txt/slw.png",
	icon:"images/man/icon/icon_slw.png",
	av:"audio/slw.mp3",
	info:"作为织田信长的侍童，从饮食起居到工作事务全部包揽，是一位有能力且眉清目秀的青年。从心底仰慕信长，性格坦率认真。"
},"ztxz":{
	name:"织田信长",
	country:"zhan",
	cv:"images/man/cv/ztxz.png",
	role:"images/man/role/5role-zhitianxinchang.png",
	txt:"images/man/txt/ztxz.png",
	icon:"images/man/icon/icon_ztxz.png",
	av:"audio/ztxz.mp3",
	info:"唯我独尊、勇猛无畏的奇才。在战略方面，有着常人所没有的思维能力。是一位比起语言更擅于行动的统率者。"
},"ydzz":{
	name:"伊达政宗",
	country:"zhan",
	cv:"images/man/cv/ydzz.png",
	role:"images/man/role/6role-yidazhengzong.png",
	txt:"images/man/txt/ydzz.png",
	icon:"images/man/icon/icon_ydzz.png",
	av:"audio/ydzz.mp3",
	info:"自由奔放的伊达家家主。经常到市集小镇上同市民相处，没有身份阶级的区别。兴趣是做料理，乐于为部下及同伴亲自下厨。"
},"abqm":{
	name:"安倍晴明",
	country:"ya",
	cv:"images/man/cv/abqm.png",
	role:"images/man/role/1role-anbejingming.png",
	txt:"images/man/txt/abqm.png",
	icon:"images/man/icon/icon_abqm.png",
	av:"audio/abqm.mp3",
	info:"绝代阴阳师，文武双全，万事皆能妥帖处理。稍有些远离尘世的感觉，是不向任何人敞露真心的神秘性格。"
},"pqs":{
	name:"平清盛",
	country:"ya",
	cv:"images/man/cv/pqs.png",
	role:"images/man/role/2role-pingqingsheng.png",
	txt:"images/man/txt/pqs.png",
	icon:"images/man/icon/icon_pqs.png",
	av:"audio/pqs.mp3",
	info:"武家贵族出身。旁人总认为其举止粗鲁，实际上是个忠厚且富有同情心的人。虽然对任何人都很亲切，但外表和语气总是吓跑对方。"
},"tydz":{
	name:"藤原道长",
	country:"ya",
	cv:"images/man/cv/tydz.png",
	role:"images/man/role/3role-tengyuandaozhang.png",
	txt:"images/man/txt/tydz.png",
	icon:"images/man/icon/icon_tydz.png",
	av:"audio/tydz.mp3",
	info:"总是面带微笑，说话带有独特口音。热爱文学，是一位有知识及教养的贵族，但喜欢用知识和权力来戏弄人。"
}};

var persion = function (){
	this.curArr = [],
	this.curCount = 0;
	
}
persion.prototype = {
	inner: function(){
		var type = "gsjz",
			curCount = this.curCount;
		
		//插入cv图片,角色图片,角色宣言
		this.insertElement();
		
		//插入角色头像(根据国家)
		this.insertIcon("mu");
		
		//添加点
		this.addDots();
		
		this.changeRoles(type, curCount);
	},
	//插入cv图片,角色图片,角色宣言
	insertElement: function(){
		var cvStr = manStr = txtStr = "";
		$.each(roles, function(name,val) {
			cvStr +='<div class="cv_item cv_'+ name +'" data-type = "'+ name +'">';
			cvStr +='   <img src="'+ val.cv +'" />';
			cvStr +='	<a class="btn_sound" title="点击播放" href="javascript:;"></a>';
			cvStr +='</div>';
			
			manStr +='<div class="man_item man_'+ name +'">';
			manStr +='   <img src="'+ val.role +'" />';
			manStr +='</div>';
			
			txtStr +='<div class="txt_item txt_'+ name +'">';
			txtStr +='   <img src="'+ val.txt +'" />';
			txtStr +='</div>';
		});
		$('.roles_cv').html(cvStr);
		$('.roles_man').html(manStr);
		$('.roles_txt').html(txtStr);
	},
	//插入角色头像(根据国家)
	insertIcon: function(type){
		var iconStr = "",
			that = this;
		$.each(roles, function(name,val) {
			if(val.country == type){
				iconStr +='<div class="icon_item icon_'+ name +'">';
				iconStr +='	<a href="javascript:;" data-type = "'+ name +'">';
				iconStr +='		<img class="icon_img" src="'+ val.icon +'" />';
				iconStr +='		<div class="icon_name"><span>'+ val.name +'</span></div>';
				iconStr +='	</a>';
				iconStr +='</div>';
				
				that.curArr.push(name);
			}
		})
		$('.roles_icon').html(iconStr);
	},
	//添加点
	addDots: function(){
		var str = "";
		$.each(this.curArr, function(){
			str += '<a class="dian_itme" href="javascript:;"></a>';
		});
		$('.dian').html(str);
	},
	//获取角色对象中info,av 属性
	getRolesPara: function(type){
		var arr =[],
			info = "",
			av = "";
		$.each(roles, function(name,val) {
			if(name = type){
				info = val.info;
				av = val.av;
			}
		})
		arr = [info, av];
		return arr;
	},
	//插入角色详情
	insertRolesIntro: function(info){
		var str = '<p><span>人物介绍：</span>'+info+'</p>';
		$('.roles_introduce').html(str);
	},
	//插入角色av
	insertAudio: function(av){
		var str = "";
		str +='<audio id="audio">';
		str +='  <source src="'+av+'" type="audio/mpeg">';
		str +='  <source src="" type="audio/wave">';
		str +='  您的浏览器不支持 audio 元素。';
		str +='</audio>';
		
		$('.roles_audio').html(str);
	},
	//设置对应角色的 AV info等
	setRoleOther: function(type){
		var arr = this.getRolesPara(type);
		this.insertRolesIntro(arr[0]);
		this.insertAudio(arr[1]);
	},
	//设置人物动效
	setRolesAnima: function(type){
		if(!type){return;};
		$('.icon_'+ type).addClass('active').siblings().removeClass('active');
		$('.cv_'+type).addClass('active').siblings().removeClass('active');
		$('.man_'+type).addClass('active').siblings().removeClass('active');
		$('.txt_'+type).addClass('active').siblings().removeClass('active');
	},
	//角色切换箭头显示
	showArrow:function(curCount){
		if(curCount >= this.curArr.length-1){
			$('.btn_next').fadeOut(500);
			$('.btn_prev').fadeIn(500);
		}else if(curCount <= 0){
			$('.btn_prev').fadeOut(500);
			$('.btn_next').fadeIn(500);
		}else{
			$('.btn_next').fadeIn(500);
			$('.btn_prev').fadeIn(500);
		}
	},
	//切换角色
	changeRoles: function(type, curCount){
		this.setRolesAnima(type);
		this.showArrow(curCount);
		this.setRoleOther(type);
		$('.dian_itme').eq(curCount).addClass('active').siblings().removeClass('active');
	}
	
}

var role = new persion();
role.inner()


//国家
	$('.country_item').on('click',function(){
		var type = $(this).data('type'),
			iconType = "",
			str = "";
			
			role.curArr = [], 
			role.curCount = 0;
			
		$(this).addClass('active').siblings().removeClass('active');
		
		if(!type){return;};
		
		//切换当前国家头像
		role.insertIcon(type);
		
		//插入点
		role.addDots();
		
		iconType = role.curArr[0];
		//切换角色
		role.changeRoles(iconType, role.curCount)
	})
	//头像
	$('.roles_icon').on('click','.icon_item a',function(){
		var type = $(this).data('type'),
			curCount = role.curCount;
		
		curCount = $.inArray(type, role.curArr);

		//切换角色
		role.changeRoles(type, curCount);
		
		role.curCount = curCount;
	})
	
	//prev
	$('.btn_prev').on('click',function(){
		var type = "",
			curCount = role.curCount,
			curArr = role.curArr;
			
		curCount--;
		if(curCount <= 0){
			curCount = 0;
		}
		
		type = curArr[curCount];
		
		//切换角色
		role.changeRoles(type, curCount);
		
		role.curCount = curCount;
	})
	
	//next
	$('.btn_next').on('click',function(){
		var type = "",
			curCount = role.curCount,
			curArr = role.curArr;
		
		curCount++;
		if(curCount >= curArr.length-1){
			curCount = curArr.length-1;
		}
		
		type = curArr[curCount];
		//切换角色
		role.changeRoles(type, curCount)
		
		role.curCount = curCount;
	})
	
	//点
	$('.dian').on('click', '.dian_itme', function(){
		var type = "",
			curCount = role.curCount,
			curArr = role.curArr;
		
		curCount = $(this).index();
		type = curArr[curCount];
		
		//切换角色
		role.changeRoles(type, curCount);
		
		role.curCount = curCount;
	})
	
	//音频
	$('.roles_cv').on('click','.btn_sound',function(){
		var $audio = $('#audio')[0];
		if($audio){
			$audio.play();
		}
	})
