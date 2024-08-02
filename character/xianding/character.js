const characters = {
	dc_sb_chengyu: ["male", "wei", 3, ["dcshizha", "dcgaojian"]],
	dc_lingcao: ["male", "wu", "4/5", ["dcdufeng"]],
	zhugejing: ["male", "qun", 3, ["dcyanzuo", "dczuyin", "dcpijian"], ["name:诸葛|京"]],
	liutan: ["female", "shu", 3, ["dcjingyin", "dcchixing"]],
	bianyue: ["female", "wei", 3, ["dcbizu", "dcwuxie"]],
	zhupeilan: ["female", "wu", 3, ["dccilv", "dctongdao"]],
	dc_sb_zhangxiu: ["male", "qun", 4, ["dcsbfuxi", "dcsbhaoyi"]],
	dc_sb_guanping: ["male", "shu", 4, ["dcsbwuwei"]],
	dc_sb_caoang: ["male", "wei", 4, ["dcsbfengmin", "dcsbzhiwang"]],
	dc_sb_dianwei: ["male", "wei", "4/5", ["dcsbkuangzhan", "dcsbkangyong"]],
	dc_caoshuang: ["male", "wei", 4, ["dcjianzhuan", "dcfanshi"]],
	dc_simashi: ["male", "wei", 3, ["dcsanshi", "dczhenrao", "dcchenlve"], ["name:司马|师"]],
	dc_wangling: ["male", "wei", 4, ["dcjichou", "dcmouli"], ["clan:太原王氏"]],
	dc_jiangji: ["male", "wei", 3, ["dcshiju", "dcyingshi"]],
	dc_sb_zhugejin: ["male", "wu", 3, ["dcsbtaozhou", "dcsbhoude"], ["name:诸葛|瑾"]],
	dc_sb_jiaxu: ["male", "qun", 3, ["dcsbsushen", "dcsbfumou"]],
	guanyue: ["male", "shu", 4, ["dcshouzhi", "dcfenhui"]],
	sp_zhenji: ["female", "qun", 3, ["dcjijie", "dchuiji"]],
	wu_guanyu: ["male", "shu", 5, ["dcjuewu", "dcwuyou", "dcyixian"]],
	caofang: ["male", "wei", 4, ["dczhimin", "dcjujian"], ["zhu"]],
	dc_sb_simayi: ["male", "wei", 3, ["dcsbquanmou", "dcsbpingliao"], ["name:司马|懿"]],
	chendong: ["male", "wu", 4, ["dcduanxie", "fenming"], ['name:陈|武-董|袭']],
	lvfan: ["male", "wu", 3, ["diaodu", "diancai"]],
	cuimao: ["male", "wei", 3, ["zhengbi", "fengying"], ["name:崔|琰-毛|玠"]],
	huzun: ["male", "wei", 4, ["dczhantao", "dcanjing"]],
	zhugemengxue: ["female", "wei", 3, ["dcjichun", "dchanying"], ["name:诸葛|梦雪"]],
	bailingyun: ["female", "wei", 3, ["dclinghui", "dcxiace", "dcyuxin"]],
	dc_qinghegongzhu: ["female", "wei", 3, ["dczhangji", "dczengou"], ["name:曹|null"]],
	caoxian: ["female", "wei", 3, ["dclingxi", "dczhifou"]],
	dc_sb_zhouyu: ["male", "wu", 4, ["dcsbronghuo", "dcsbyingmou"]],
	dc_sb_lusu: ["male", "wu", 3, ["dcsbmingshi", "dcsbmengmou"]],
	zhangjian: ["male", "qun", 105, ["dc_zj_a", "dc_zj_b"], ["unseen"]],
	zhugeruoxue: ["female", "wei", 3, ["dcqiongying", "dcnuanhui"], ["name:诸葛|若雪"]],
	caoyi: ["female", "wei", 4, ["dcmiyi", "dcyinjun"]],
	malingli: ["female", "shu", 3, ["dclima", "dcxiaoyin", "dchuahuo"]],
	wu_luxun: ["male", "wu", 3, ["dcxiongmu", "dczhangcai", "dcruxian"]],
	dc_xujing: ["male", "shu", 3, ["dcshangyu", "dccaixia"]],
	dc_zhaoxiang: ["female", "shu", 4, ["refanghun", "refuhan"]],
	dc_guansuo: ["male", "shu", 4, ["xinzhengnan", "xiefang"]],
	xin_baosanniang: ["female", "shu", 3, ["decadewuniang", "decadexushen"]],
	dc_shixie: ["male", "qun", 3, ["rebiluan", "ollixia"]],
	dc_sp_machao: ["male", "qun", 4, ["zhuiji", "dc_olshichou"]],
	old_huangfusong: ["male", "qun", 4, ["xinfenyue"], ["name:皇甫|嵩"]],
	dc_xiahouba: ["male", "shu", 4, ["rebaobian"], ["name:夏侯|霸"]],
	dc_daxiaoqiao: ["female", "wu", 3, ["dcxingwu", "dcluoyan"], ["tempname:daxiaoqiao", "name:桥|null-桥|null"]],
	tianshangyi: ["female", "wei", 3, ["dcposuo", "dcxiaoren"]],
	sunlingluan: ["female", "wu", 3, ["dclingyue", "dcpandi"]],
	dc_wangjun: ["male", "qun", 4, ["dctongye", "dcchangqu"]],
	zhoubuyi: ["male", "wei", 3, ["dcshiji", "dcsilun"]],
	dc_duyu: ["male", "wei", 4, ["dcjianguo", "dcdyqingshi"]],
	ganfurenmifuren: ["female", "shu", 3, ["dcchanjuan", "dcxunbie"], ["name:甘|null-糜|null"]],
	dc_ganfuren: ["female", "shu", 3, ["dcshushen", "dcshenzhi"], ["name:甘|null"]],
	dc_mifuren: ["female", "shu", 3, ["dcguixiu", "dccunsi"], ["name:糜|null"]],
	wanglang: ["male", "wei", 3, ["regushe", "rejici"]],
	ruanji: ["male", "wei", 3, ["dczhaowen", "dcjiudun"]],
	wu_zhugeliang: ["male", "shu", "4/7", ["dcjincui", "dcqingshi", "dczhizhe"], ['name:诸葛|亮']],
	duanqiaoxiao: ["female", "wei", 3, ["dccaizhuang", "dchuayi"]],
	zhangjinyun: ["female", "shu", 3, ["dchuizhi", "dcjijiao"]],
	huanfan: ["male", "wei", 3, ["dcjianzheng", "dcfumou"]],
	chentai: ["male", "wei", 4, ["dcctjiuxian", "dcchenyong"]],
	sunyu: ["male", "wu", 3, ["dcquanshou", "dcshexue"]],
	xizheng: ["male", "shu", 3, ["dcdanyi", "dcwencan"]],
	dc_ruiji: ["female", "wu", 4, ["dcwangyuan", "dclingyin", "dcliying"], ['name:芮|null']],
	zerong: ["male", "qun", 4, ["dccansi", "dcfozong"]],
	xielingyu: ["female", "wu", 3, ["dcyuandi", "dcxinyou"]],
	dc_yangbiao: ["male", "qun", 3, ["dczhaohan", "dcjinjie", "dcjue"]],
	dc_tengfanglan: ["female", "wu", 3, ["dcluochong", "dcaichen"]],
	yanghong: ["male", "qun", 3, ["dcjianji", "dcyuanmo"]],
	xuelingyun: ["female", "wei", 3, ["dcxialei", "dcanzhi"]],
	dc_wangyun: ["male", "qun", 4, ["dclianji", "dcmoucheng"], ["clan:太原王氏"]],
	dc_zhouxuān: ["male", "wei", 3, ["dcwumei", "dczhanmeng"]],
	chengbing: ["male", "wu", 3, ["dcjingzao", "dcenyu"]],
	dongguiren: ["female", "qun", 3, ["dclianzhi", "dclingfang", "dcfengying"], ["name:董|null"]],
	yuanji: ["female", "wu", 3, ["dcfangdu", "dcjiexing"], ['name:袁|null']],
	zhujianping: ["male", "qun", 3, ["dcxiangmian", "dctianji"]],
	zhaozhi: ["male", "shu", 3, ["dctongguan", "dcmengjie"]],
	dc_liuye: ["male", "wei", 3, ["dcpoyuan", "dchuace"]],
	luyi: ["female", "qun", 3, ["dcyaoyi", "dcfuxue"]],
	dingshangwan: ["female", "wei", 3, ["dcfengyan", "dcfudao"]],
	quanhuijie: ["female", "wu", 3, ["dchuishu", "dcyishu", "dcligong"]],
	dukui: ["male", "wei", 3, ["dcfanyin", "dcpeiqi"]],
	zhangfen: ["male", "wu", 4, ["dcwanglu", "dcxianzhu", "dcchaixie"]],
	liuhui: ["male", "qun", 4, ["dcgeyuan", "dcjieshu", "dcgusuan"]],
	dc_wangchang: ["male", "wei", 3, ["dckaiji", "dcpingxi"], ["clan:太原王氏"]],
	zhaoang: ["male", "wei", "3/4", ["dczhongjie", "dcsushou"]],
	caohua: ["female", "wei", 3, ["caiyi", "guili"]],
	dc_liuyu: ["male", "qun", 3, ["dcsuifu", "dcpijing"]],
	dc_huangzu: ["male", "qun", 4, ["dcjinggong", "dcxiaojuan"]],
	laiyinger: ["female", "qun", 3, ["xiaowu", "huaping"]],
	caomao: ["male", "wei", "3/4", ["qianlong", "fensi", "juetao", "zhushi"], ["zhu"]],
	dc_luotong: ["male", "wu", 3, ["renzheng", "jinjian"]],
	re_fengfangnv: ["female", "qun", 3, ["tiqi", "baoshu"]],
	wufan: ["male", "wu", 4, ["tianyun", "wfyuyan"]],
	re_zhangbao: ["male", "qun", 3, ["xinzhoufu", "xinyingbing"]],
	re_sunyi: ["male", "wu", 5, ["syjiqiao", "syxiongyi"]],
	caojinyu: ["female", "wei", 3, ["yuqi", "shanshen", "xianjing"]],
	zhouyi: ["female", "wu", 3, ["zhukou", "mengqing"]],
	re_panshu: ["female", "wu", 3, ["zhiren", "yaner"]],
	yangwan: ["female", "shu", 3, ["youyan", "zhuihuan"]],
	ruanyu: ["male", "wei", 3, ["xingzuo", "miaoxian"]],
	fanyufeng: ["female", "qun", 3, ["bazhan", "jiaoying"]],
	guozhao: ["female", "wei", 3, ["pianchong", "zunwei"]],
	re_xinxianying: ["female", "wei", 3, ["rezhongjian", "recaishi"]],
	liubian: ["male", "qun", 3, ["shiyuan", "dushi", "yuwei"], ["zhu"]],
	re_liuzan: ["male", "wu", 4, ["refenyin", "liji"]],
	wenyang: ["male", "wei", 5, ["xinlvli", "choujue"]],
	wangshuang: ["male", "wei", 8, ["spzhuilie"]],
	huaman: ["female", "shu", 3, ["manyi", "mansi", "souying", "zhanyuan"]],
	puyuan: ["male", "shu", 4, ["pytianjiang", "pyzhuren"]],
	guanlu: ["male", "wei", 3, ["tuiyan", "busuan", "mingjie"]],
	gexuan: ["male", "wu", 3, ["gxlianhua", "zhafu"]],
	leitong: ["male", "shu", 4, ["kuiji"]],
	wulan: ["male", "shu", 4, ["wlcuorui"]],
};

export default characters;
