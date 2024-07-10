const characters = {
	huan_zhugeliang: ["male", "shu", "3/4", ["twbeiding", "twjielv", "twhunyou"], ["name:诸葛|亮"]],
	huan_jiangwei: ["male", "shu", 4, ["huan_jiangwei_A", "huan_jiangwei_B"]],
	huan_guojia: ["male", "wei", 3, ["huan_guojia_A", "huan_guojia_B"]],
	huan_zhanghe: ["male", "wei", 4, ["huan_zhanghe_A"]],
	huan_zhaoyun: ["male", "shu", 4, ["huan_zhaoyun_A", "huan_zhaoyun_B"]],
	huan_simayi: ["male", "wei", 4, ["twzongquan", "twguimou"], ["name:司马|懿"]],
	huan_weiyan: ["male", "shu", 4, ["twqiji", "twpiankuang"]],
	tw_zhugejun: ["male", "qun", 3, ["twshouzhu", "twdaigui", "twcairu"], ["name:诸葛|均"]],
	simafu: ["male", "wei", 3, ["xunde", "chenjie"], ["name:司马|孚"]],
	tw_yanliang: ["male", "qun", 4, ["twduwang", "twylyanshi"]],
	tw_wenchou: ["male", "qun", 4, ["twjuexing", "twxiayong"]],
	tw_yuantan: ["male", "qun", 4, ["twqiaosi", "twbaizu"]],
	xia_yuzhenzi: ["male", "qun", 3, ["twhuajing", "twtianshou"]],
	xia_shie: ["male", "wei", 4, ["twdengjian", "twxinshou"]],
	xia_shitao: ["male", "qun", 4, ["twjieqiu", "twenchou"]],
	xia_guanyu: ["male", "qun", 4, ["twzhongyi", "twchue"]],
	xia_liubei: ["male", "shu", 4, ["twshenyi", "twxinghan"]],
	xia_xiahousone: ["female", "qun", 3, ["twchengxi"], ["name:夏侯|子萼"]],
	xia_xiahoudun: ["male", "qun", 4, ["twdanlie"], ["name:夏侯|惇"]],
	xia_zhangwei: ["female", "qun", 3, ["twhuzhong", "twfenwang"]],
	tw_zhanghong: ["male", "wu", 3, ["twquanqian", "twrouke"]],
	tw_zhangzhao: ["male", "wu", 3, ["twlijian", "twchungang"]],
	tw_ol_sunjian: ["male", "wu", "4/5", ["gzyinghun", "wulie", "twpolu"], ["zhu"]],
	tw_menghuo: ["male", "qun", 4, ["huoshou", "rezaiqi", "twqiushou"], ["zhu"]],
	ol_liuyu: ["male", "qun", 2, ["zongzuo", "zhige", "twchongwang"], ["zhu"]],
	tw_gongsunfan: ["male", "qun", 4, ["twhuiyuan", "twshoushou"], ["name:公孙|范"]],
	tw_yangang: ["male", "qun", 4, ["twzhiqu", "twxianfeng"]],
	xia_xiahouzie: ["female", "qun", "3/4", ["twxuechang", "twduoren"], ["name:夏侯|紫萼"]],
	xia_zhaoe: ["female", "qun", 3, ["twyanshi", "twrenchou"]],
	xia_lusu: ["male", "qun", 4, ["twkaizeng", "twyangming"]],
	xia_dianwei: ["male", "qun", 4, ["twliexi", "twshezhong"]],
	tw_bingyuan: ["male", "qun", 3, ["twbingde", "twqingtao"]],
	tw_niufudongxie: ["double", "qun", 4, ["twjuntun", "twxiongxi", "twxiafeng"], ["name:牛|辅-董|翓"]],
	tw_jianshuo: ["male", "qun", 6, ["twkunsi"]],
	tw_jiangji: ["male", "wei", 3, ["twjichou", "twjilun"]],
	tw_mateng: ["male", "qun", 4, ["mashu", "twxiongzheng", "twluannian"], ["zhu"]],
	tw_baoxin: ["male", "qun", 4, ["twmutao", "twyimou"]],
	tw_liufuren: ["female", "qun", 3, ["twzhuidu", "twshigong"], ["name:刘|null"]],
	tw_yufuluo: ["male", "qun", 6, ["twjiekuang", "twneirao"]],
	tw_fengxí: ["male", "shu", 4, ["twqingkou"]],
	tw_zhangji: ["male", "wei", 3, ["twdingzhen", "twyouye"]],
	tw_zhangnan: ["male", "shu", 4, ["twfenwu"]],
	tw_huchuquan: ["male", "qun", 4, ["twfupan"]],
	tw_liwei: ["male", "shu", 4, ["twjiaohua"]],
	tw_yanxiang: ["male", "qun", 3, ["twkujian", "twruilian"]],
	tw_xiahouen: ["male", "wei", 5, ["twfujian", "twjianwei"], ["name:夏侯|恩"]],
	tw_xiahoushang: ["male", "wei", 4, ["twtanfeng"], ["name:夏侯|尚"]],
	tw_qiaorui: ["male", "qun", 5, ["twxiawei", "twqiongji"]],
	tw_haomeng: ["male", "qun", 4, ["twgongge"]],
	tw_weixu: ["male", "qun", 4, ["twsuizheng", "twtuidao"]],
	xia_xushu: ["male", "qun", 4, ["twjiange", "twxiawang"]],
	xia_wangyue: ["male", "qun", 4, ["twyulong", "twjianming"]],
	xia_liyàn: ["male", "qun", 4, ["twzhenhu", "twlvren"]],
	xia_tongyuan: ["male", "qun", 4, ["twchaofeng", "twchuanshu"]],
	tw_zhangning: ["female", "qun", 3, ["twxingzhui", "twjuchen"]],
	tw_yangyi: ["male", "shu", 3, ["duoduan", "twgongsun"]],
	tw_dengzhi: ["male", "shu", 3, ["twjimeng", "shuaiyan"]],
	tw_wangling: ["male", "wei", 4, ["twmibei", "twxingqi"], ["clan:太原王氏"]],
	tw_zhugeguo: ["female", "shu", 3, ["twqirang", "twyuhua"], ["name:诸葛|果"]],
	tw_fanchou: ["male", "qun", 4, ["twxingluan"]],
	tw_xujing: ["male", "shu", 3, ["twboming", "twejian"]],
	tw_zhangfei: ["male", "shu", 4, ["new_repaoxiao", "twxuhe"]],
	tw_xuezong: ["male", "wu", 3, ["funan", "twjiexun"]],
	tw_xunchen: ["male", "qun", 3, ["twweipo", "mjchenshi", "twmouzhi"]],
	tw_jiangqing: ["male", "wu", 4, ["twshangyi", "twxiangyu"]],
	tw_guyong: ["male", "wu", 3, ["twgyshenxing", "twbingyi"]],
	tw_chendong: ["male", "wu", 4, ["twyilie", "twfenming"], ["name:陈|武-董|袭"]],
	tw_handang: ["male", "wu", 4, ["twgongji", "twjiefan"]],
	tw_jiling: ["male", "qun", 4, ["twshuangren"]],
	tw_re_fazheng: ["male", "shu", 3, ["twxuanhuo", "twenyuan"]],
	tw_madai: ["male", "shu", 4, ["mashu", "twqianxi"]],
	tw_niujin: ["male", "wei", 4, ["twcuorui", "twliewei"]],
	tw_guanqiujian: ["male", "wei", 3, ["twzhengrong", "twhongju"], ["name:毌丘|俭"]],
	tw_daxiaoqiao: ["female", "wu", 3, ["twxingwu", "twpingting"], ["tempname:daxiaoqiao", "name:桥|null-桥|null"]],
	tw_furong: ["male", "shu", 4, ["twxuewei", "twliechi"]],
	tw_yl_luzhi: ["male", "qun", 3, ["twmingren", "twzhenliang"]],
	tw_liuzhang: ["male", "qun", 3, ["jutu", "twyaohu", "rehuaibi"], ["zhu"]],
	tw_zongyu: ["male", "shu", 3, ["twzhibian", "twyuyan"]],
	tw_zhouchu: ["male", "wu", 4, ["twguoyi", "twchuhai"]],
	tw_qiaogong: ["male", "wu", 3, ["twyizhu", "twluanchou"]],
	tw_feiyi: ["male", "shu", 3, ["twshengxi", "twkuanji"]],
	tw_bianfuren: ["female", "wei", 3, ["twwanwei", "twyuejian"], ["name:卞|null"]],
	tw_chenzhen: ["male", "shu", 3, ["twmuyue", "twchayi"]],
	tw_caoxiu: ["male", "wei", 4, ["twqianju", "twqingxi"]],
	tw_sunyi: ["male", "wu", 4, ["twzaoli"]],
	tw_puyangxing: ["male", "wu", 4, ["twzhengjian", "twzhongchi"], ["name:濮阳|兴"]],
	tw_tianyu: ["male", "wei", 4, ["twzhenxi", "twyangshi"]],
	old_quancong: ["male", "wu", 4, ["zhenshan"]],
	tw_wujing: ["male", "wu", 4, ["twfenghan", "twcongji"]],
	tw_wangcan: ["male", "wei", 3, ["twdianyi", "twyingji", "twshanghe"]],
	tw_wangchang: ["male", "wei", 3, ["twkaiji", "twshepan"], ["clan:太原王氏"]],
	tw_caozhao: ["male", "wei", 4, ["twfuzuan", "twchongqi"]],
	tw_guohuai: ["male", "wei", 4, ["twjingce", "yuzhang"]],
	tw_chengpu: ["male", "wu", 4, ["twlihuo", "twchunlao"]],
	tw_zhangmancheng: ["male", "qun", 4, ["twfengji", "twyiju", "twbudao"]],
	tw_caocao: ["male", "qun", 4, ["twlingfa"]],
	tw_liuhong: ["male", "qun", 4, ["twyujue", "twgezhi", "twfengqi"], ["zhu"]],
	tw_huojun: ["male", "shu", 4, ["twsidai", "twjieyu"]],
	tw_zangba: ["male", "wei", 4, ["twhanyu", "twhengjiang"]],
	tw_re_caohong: ["male", "wei", 4, ["twyuanhu", "twjuezhu"]],
	tw_mayunlu: ["female", "shu", 4, ["mashu", "twfengpo"]],
	tw_hejin: ["male", "qun", 4, ["twmouzhu", "twyanhuo"]],
	tw_hucheer: ["male", "qun", 4, ["twshenxing", "twdaoji"]],
	tw_yujin: ["male", "qun", 4, ["xinzhenjun"]],
	tw_fuwan: ["male", "qun", 4, ["twmoukui"]],
	tw_zhaoxiang: ["female", "shu", 4, ["refanghun", "twfuhan", "twqueshi"]],
	yuejiu: ["male", "qun", 4, ["cuijin"]],
	wuban: ["male", "shu", 4, ["jintao"], ["clan:陈留吴氏"]],
	duosidawang: ["male", "qun", "4/5", ["equan", "manji"], ["name:null|null"]],
	jiachong: ["male", "qun", 3, ["beini", "dingfa"]],
	tw_dongzhao: ["male", "wei", 3, ["twmiaolve", "twyingjia"]],
	tw_gexuan: ["male", "qun", 3, ["twdanfa", "twlingbao", "twsidao"]],
	tw_beimihu: ["female", "qun", 3, ["zongkui", "guju", "baijia", "bingzhao"], ["zhu", "name:卑弥|呼"]],
	nashime: ["male", "qun", 3, ["chijie", "waishi", "renshe"], ["name:难升|米"]],
	tw_xiahouba: ["male", "shu", 4, ["twyanqin", "twbaobian"], ["name:夏侯|霸"]],
	tw_zumao: ["male", "wu", 4, ["twtijin"]],
	tw_caoang: ["male", "wei", 4, ["twxiaolian"]],
	tw_dingfeng: ["male", "wu", 4, ["twqijia", "twzhuchen"]],
	tw_caohong: ["male", "wei", 4, ["twhuzhu", "twliancai"]],
	tw_maliang: ["male", "shu", 3, ["twrangyi", "twbaimei"]],
	kaisa: ["male", "western", 4, ["zhengfu"], ["name:尤利乌斯|盖乌斯"]],
};

export default characters;
