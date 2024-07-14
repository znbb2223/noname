const translates = {
	sb_zhanghe_prefix: "谋",
	sb_yujin_prefix: "谋",
	sb_huaxiong_prefix: "谋",
	liucheng_prefix: "谋",
	sp_yangwan_prefix: "谋",
	sb_huangzhong_prefix: "谋",
	sb_lvmeng_prefix: "谋",
	sb_sunshangxiang_prefix: "谋",
	sb_sunquan_prefix: "谋",
	sb_huanggai_prefix: "谋",
	sb_zhouyu_prefix: "谋",
	sb_caoren_prefix: "谋",
	sb_xiahoushi_prefix: "谋",
	sb_zhangjiao_prefix: "谋",
	sb_caocao_prefix: "谋",
	sb_zhenji_prefix: "谋",
	sb_ganning_prefix: "谋",
	sb_machao_prefix: "谋",
	sb_xuhuang_prefix: "谋",
	sb_zhangfei_prefix: "谋",
	sb_zhaoyun_prefix: "谋",
	sb_liubei_prefix: "谋",
	sb_jiangwei_prefix: "谋",
	sb_fazheng_prefix: "谋",
	sb_chengong_prefix: "谋",
	sb_diaochan_prefix: "谋",
	sb_yuanshao_prefix: "谋",
	sb_pangtong_prefix: "谋",
	sb_sunce_prefix: "谋",
	sb_daqiao_prefix: "谋",
	sb_liubiao_prefix: "谋",
	sb_zhurong_prefix: "谋",
	sb_menghuo_prefix: "谋",
	sb_luxun_prefix: "谋",
	sp_yangwan: "谋杨婉",
	spmingxuan: "瞑昡",
	spmingxuan_info: "锁定技。出牌阶段开始时，你须选择至多X张花色各不相同的手牌（X为未选择过选项一的角色），将这些牌随机交给这些角色中的等量角色。然后这些角色依次选择一项：⒈对你使用一张【杀】。⒉交给你一张牌，然后你摸一张牌。",
	spxianchou: "陷仇",
	spxianchou_info: "当你受到有来源的伤害后，你可选择一名不为伤害来源的其他角色。该角色可以弃置一张牌，然后视为对伤害来源使用一张【杀】（无距离限制）。若其因此【杀】造成了伤害，则其摸一张牌，你回复1点体力。",
	liucheng: "谋刘赪",
	splveying: "掠影",
	splveying_info: "锁定技。①每回合限两次，当你使用【杀】指定目标后，你获得一个“椎”。②当你使用的【杀】结算结束后，若你的“椎”数大于1，则你弃置两个“椎”并摸一张牌，然后可以视为使用一张【过河拆桥】。",
	spyingwu: "莺舞",
	spyingwu_info: "若你拥有〖掠影〗，则：①每回合限两次，当你使用非伤害类普通锦囊牌指定目标后，你获得一个“椎”。②当你使用的非伤害类普通锦囊牌结算结束后，若你的“椎”数大于1，则你弃置两个“椎”并摸一张牌，然后可以视为使用一张【杀】。",
	sb_huangzhong: "谋黄忠",
	sbliegong: "烈弓",
	sbliegong_info: "①若你的装备区内没有武器牌，则你手牌区内所有【杀】的属性视为无属性。②当你使用牌时，或成为其他角色使用牌的目标后，你记录此牌的花色。③当你使用【杀】指定唯一目标后，若你〖烈弓②〗的记录不为空，则你可亮出牌堆顶的X张牌（X为你〖烈弓②〗记录过的花色数-1），令此【杀】的伤害值基数+Y（Y为亮出牌中被〖烈弓②〗记录过花色的牌的数量），且目标角色不能使用〖烈弓②〗记录过花色的牌响应此【杀】。此【杀】使用结算结束后，你清除〖烈弓②〗的记录。",
	sb_huaxiong: "谋华雄",
	sbyangwei: "扬威",
	sbyangwei_info: "出牌阶段，你可以摸两张牌，令此技能于你的下下个结束阶段前失效，且你获得如下效果直到回合结束：使用【杀】无距离限制，次数上限+1且无视防具。",
	sb_yujin: "谋于禁",
	sbxiayuan: "狭援",
	sbxiayuan_info: "每轮限一次。其他角色受到伤害后，若其因此伤害触发过护甲效果且其没有护甲，则你可弃置两张手牌，令其获得X点护甲（X为其因此伤害触发护甲效果而失去的护甲数量）。",
	sbjieyue: "节钺",
	sbjieyue_info: "结束阶段，你可以令一名其他角色获得1点护甲。然后其可以交给你一张牌。",
	sb_lvmeng: "谋吕蒙",
	sbkeji: "克己",
	sbkeji_info: "①出牌阶段各限一次。你可以选择一项：1.弃置一张手牌，然后获得1点护甲；2.失去1点体力，然后获得2点护甲。②你的手牌上限+X（X为你的护甲数）。③若你不为正在结算濒死流程的角色，你不能使用【桃】。",
	sbdujiang: "渡江",
	sbdujiang_info: "觉醒技。准备阶段，若你的护甲数不少于3，你获得〖夺荆〗，修改〖克己①〗为“出牌阶段限一次”。",
	sbduojing: "夺荆",
	sbduojing_info: "当你使用【杀】指定目标时，你可以失去1点护甲。然后令此【杀】无视防具，你获得目标角色一张牌，本回合使用【杀】的次数上限+1。",
	sb_sunshangxiang: "谋孙尚香",
	sbjieyin: "结姻",
	sbjieyin_info: "使命技。①游戏开始时，你令一名其他角色获得1枚“助”。②出牌阶段开始时，有“助”的角色选择一项：1.交给你X张手牌（X=min(2,其手牌数)且至少为1），然后获得1点护甲；2.令你将“助”移动给另一名其他角色，或移去其“助”（若其此前获得过“助”，则只能移去）。③失败：当一名角色死亡后，若其于死亡时有“助”，或当你因〖结姻②〗移去“助”后，你将势力改为吴，回复1点体力，获得所有“妆”并减1点体力上限。",
	sbliangzhu: "良助",
	sbliangzhu_info: "蜀势力技。出牌阶段限一次，你可以将一名其他角色装备区里的一张牌置于武将牌上，称为“妆”，然后有“助”的角色须选择回复1点体力或摸两张牌。",
	sbxiaoji: "枭姬",
	sbxiaoji_info: "吴势力技。当你失去装备区里的一张牌后，你摸两张牌，然后可以弃置场上的一张牌。",
	sb_sunquan: "谋孙权",
	sbzhiheng: "制衡",
	sbzhiheng_info: "出牌阶段限一次。你可以弃置任意张牌并摸等量的牌，若你以此法弃置的牌包括你所有手牌，则你多摸X张牌（X为你的“业”数+1），并弃1枚“业”。",
	sbtongye: "统业",
	sbtongye_info: "锁定技。结束阶段，你猜测场上装备牌数与你下一个准备阶段的场上装备牌数是否相等，并获得以下效果：你下一个准备阶段，若你猜对且“业”数小于2，你获得1枚“业”；若你猜错，你弃1枚“业”。",
	sbjiuyuan: "救援",
	sbjiuyuan_info: "主公技，锁定技。①其他吴势力角色使用【桃】时，你摸一张牌。②其他吴势力角色对你使用的【桃】的回复量+1。",
	sb_huanggai: "谋黄盖",
	sbkurou: "苦肉",
	sbkurou_info: "①出牌阶段开始时，你可以交给其他角色一张牌，若此牌于对方手牌区内为【桃】或【酒】，你失去2点体力，否则你失去1点体力。②当你失去1点体力后，你获得2点护甲。",
	sbzhaxiang: "诈降",
	sbzhaxiang_info: "锁定技。①摸牌阶段，你多摸X张牌。②你每回合使用的前X张牌无距离与次数限制且不能被响应（X为你已损失的体力值）。",
	sb_zhouyu: "谋周瑜",
	sbyingzi: "英姿",
	sbyingzi_info: "锁定技。摸牌阶段，你多摸X张牌，且令你本回合手牌上限+X（X为以下条件中你满足的项数：手牌数不小于2、体力值不小于2、装备区里的牌数不小于1）。",
	sbfanjian: "反间",
	sbfanjian_info: "出牌阶段，你可以声明一个花色并选择一张牌和一名其他角色（每种花色的牌每回合限一次）。其须选择一项：1.猜测此牌花色与你所声明花色是否相同；2.翻面。然后其正面向上获得此牌。若其选择猜测且猜测错误，其失去1点体力，否则其令你〖反间〗于本回合失效。",
	sb_caoren: "谋曹仁",
	sbjushou: "据守",
	sbjushou_info: "①出牌阶段限一次。若你的武将牌正面朝上，你可以弃置至多两张牌，然后你翻面并获得等量护甲。②当你受到伤害后，若你的武将牌背面朝上，你选择一项：1.翻面；2.获得1点护甲。③当你翻面后，若你的武将牌正面朝上，你摸X张牌（X为你的护甲数）。",
	sbjiewei: "解围",
	sbjiewei_info: "出牌阶段限一次。你可以失去1点护甲并选择一名其他角色。你观看其手牌并获得其中一张。",
	sb_xiahoushi: "谋夏侯氏",
	sbqiaoshi: "樵拾",
	sbqiaoshi_info: "每回合限一次。当你受到其他角色造成的伤害后，其可以令你回复等同于此次伤害值的体力，然后其摸两张牌。",
	sbyanyu: "燕语",
	sbyanyu_info: "①出牌阶段限两次。你可以弃置一张【杀】，然后摸一张牌。②出牌阶段结束时，你可以令一名其他角色摸3X张牌（X为你于此阶段发动〖燕语①〗的次数）。",
	sb_zhangjiao: "谋张角",
	sbleiji: "雷击",
	sbleiji_info: "出牌阶段，你可以选择一名其他角色并弃4枚“道兵”，对其造成1点雷电伤害。",
	sbguidao: "鬼道",
	sbguidao_info: "①游戏开始时/一名角色受到属性伤害后，你获得2枚“道兵”（标记上限为8）。②当你受到伤害时，你可以弃2枚“道兵”并防止此伤害。然后若当前回合角色不为你，〖鬼道①〗于你下回合开始前无效。",
	sbguidao_info_identity: "①游戏开始时/一名角色受到属性伤害后，你获得2/1枚“道兵”（标记上限为8）。②当你受到伤害时，你可以弃2枚“道兵”并防止此伤害。然后若当前回合角色不为你，〖鬼道①〗于你下回合开始前无效。",
	sbhuangtian: "黄天",
	sbhuangtian_info: "主公技，锁定技。①回合开始时，若本回合为你的第一个回合且游戏轮数为1，且游戏内没有【太平要术】，你装备【太平要术】。②其他群势力角色造成伤害后，若你拥有〖鬼道〗，你获得2枚“道兵”（每轮你至多以此法获得4枚“道兵”）。",
	sb_caocao: "谋曹操",
	sbjianxiong: "奸雄",
	sbjianxiong_info: "①游戏开始时，你可获得至多2枚“治世”标记。②当你受到伤害后，你可获得伤害牌，摸1-X张牌（X为“治世”数），然后你可弃1枚“治世”。",
	sbqingzheng: "清正",
	sbqingzheng_info: "出牌阶段开始时，你可以弃置3-X种花色的所有手牌（X为“治世”数），并观看一名有手牌的其他角色的手牌，你弃置其中一种花色的所有牌。若其被弃置的牌数小于你以此法弃置的牌数，你对其造成1点伤害。然后若X小于2且你拥有技能〖奸雄〗，你可以获得1枚“治世”。",
	sbhujia: "护驾",
	sbhujia_info: "主公技，每轮限一次。当你受到伤害时，你可以将此伤害转移给一名其他魏势力角色。",
	sb_zhenji: "谋甄宓",
	sbluoshen: "洛神",
	sbluoshen_info: "准备阶段，你可以选择一名角色。从其开始按逆时针方向的X名其他角色依次执行（X为角色数的一半，向上取整）：展示一张手牌，若此牌为黑色，你获得之且此牌不计入本回合手牌上限；若此牌为红色，其弃置之。",
	sb_ganning: "谋甘宁",
	sbqixi: "奇袭",
	sbqixi_info: "出牌阶段限一次。若你有手牌，你可以令一名其他角色猜测你手牌中最多的花色。若其猜对，你展示所有手牌；若其猜错，你可令其从其未选择过的花色中再次猜测，重复此流程。然后你弃置其区域内的X张牌（X为其于本次〖奇袭〗中猜错的次数）。",
	sbfenwei: "奋威",
	sbfenwei_info: "限定技。①出牌阶段，你可以将至多三张牌分别置于等量名角色的武将牌上，称为“威”，然后你摸等量牌。②当一名角色成为锦囊牌的目标时，若其有“威”，你须选择：1.令其获得其“威”；2.令其移去“威”，并取消此目标。",
	sb_machao: "谋马超",
	sbtieji: "铁骑",
	sbtieji_info: "当你使用【杀】指定其他角色为目标后，你可以令目标角色不能响应此【杀】，且其所有非锁定技失效直到回合结束。然后你与其进行谋弈。若你赢，且你选择的选项为：“直取敌营”，则你获得其一张牌；“扰阵疲敌”，你摸两张牌。",
	sb_xuhuang: "谋徐晃",
	sbduanliang: "断粮",
	sbduanliang_info: "出牌阶段限一次。你可以与一名其他角色进行谋弈。若你赢，且你选择的选项为：“围城断粮”，若其判定区没有【兵粮寸断】，你将牌堆顶牌当【兵粮寸断】对其使用，否则你获得其一张牌；“擂鼓进军”，你视为对其使用一张【决斗】。",
	sbshipo: "势迫",
	sbshipo_info: "结束阶段，你可以令一名体力少于你的角色或所有判定区有【兵粮寸断】的其他角色选择一项：1.交给你一张手牌；2.受到1点伤害。所有目标角色选择完成后，你可以将任意张你以此法得到的牌交给一名其他角色。",
	sb_zhangfei: "谋张飞",
	sbpaoxiao: "咆哮",
	sbpaoxiao_info: "锁定技。①你使用【杀】无次数限制。②若你的装备区内有武器牌，则你使用【杀】无距离限制。③当你于出牌阶段内使用第二张及以后【杀】时，你获得如下效果：{此【杀】不可被响应且伤害值基数+1；此【杀】指定目标后，目标角色的非锁定技于本回合内失效；此【杀】造成伤害后，若目标角色存活，则你失去1点体力并随机弃置一张手牌。}",
	sbxieji: "协击",
	sbxieji_info: "准备阶段开始时，你可以和一名其他角色进行协力。其的下个结束阶段开始时，若你与其协力成功，则你可以选择至多三名其他角色。你对这些角色视为使用一张【杀】，且当此【杀】因执行牌面效果造成伤害后，你摸X张牌（X为伤害值）。",
	sb_zhaoyun: "谋赵云",
	sblongdan: "龙胆",
	sblongdan_info: "蓄力技（1/3）。①你可以消耗1点蓄力值，将【杀】当做【闪】或将【闪】当做【杀】使用或打出，然后若你以此法使用牌，你摸一张牌。②一名角色的回合结束时，你获得1点蓄力值。",
	sbjizhu: "积著",
	sbjizhu_info: "准备阶段开始时，你可以和一名其他角色进行协力。其的下个结束阶段开始时，若你与其协力成功，则你修改〖龙胆〗直到你的下个结束阶段开始。",
	sblongdan_shabi: "龙胆",
	sblongdan_shabi_info: "蓄力技（1/3）。①你可以消耗1点蓄力值，将一张基本牌当做任意基本牌使用或打出，然后摸一张牌。②一名角色的回合结束时，你获得1点蓄力值。",
	sb_liubei: "谋刘备",
	sbrende: "仁德",
	sbrende_info: "①出牌阶段每名角色限一次。你可以将任意张牌交给一名其他角色，然后你获得等量“仁望”标记（至多为8）。②每回合限一次。你可以移去2枚“仁望”，视为使用或打出一张基本牌。③出牌阶段开始时，你获得2枚“仁望”。",
	sbzhangwu: "章武",
	sbzhangwu_info: "限定技。出牌阶段，你可以令所有于本局游戏成为过〖仁德①〗目标的其他角色依次交给你X张牌，然后你回复3点体力并失去〖仁德〗（X为游戏轮数-1，且至多为3）。",
	sbjijiang: "激将",
	sbjijiang_info: "主公技。出牌阶段结束时，你可以选择一名体力值不小于你的其他蜀势力角色A和一名在A攻击范围内的角色B。A选择一项：1.视为对B使用一张【杀】；2.下一个出牌阶段开始前，跳过此阶段。",
	sb_jiangwei: "谋姜维",
	sbtiaoxin: "挑衅",
	sbtiaoxin_info: "蓄力技（4/4）。①出牌阶段限一次。你可以选择至多X名角色（X为你的蓄力值），令这些角色选择一项：1.对你使用一张【杀】（无距离限制）；2.交给你一张牌。然后你消耗等同于你选择的目标数的蓄力值。②当你于弃牌阶段弃置牌后，你获得等量蓄力值。",
	sbzhiji: "志继",
	sbzhiji_info: "觉醒技。准备阶段，若你因〖挑衅①〗消耗过至少4点蓄力值，你减1点体力上限，令至少一名角色获得“北伐”标记并获得如下效果直到你的下回合开始：其使用牌只能指定你或其为目标。",
	sb_fazheng: "谋法正",
	sbxuanhuo: "眩惑",
	sbxuanhuo_info: "①出牌阶段限一次。你可以将一张牌交给一名没有“眩”标记的其他角色，然后令其获得“眩”标记。②当有“眩”的其他角色于摸牌阶段外得到牌后，若你以此法于其本次获得“眩”的期间内得到其的牌数小于5，你随机获得其一张手牌。",
	sbenyuan: "恩怨",
	sbenyuan_info: "锁定技。准备阶段，若场上存在有“眩”的角色，你移去该角色的“眩”，且你于其本次获得“眩”的期间内得到其的牌数：不小于3，你交给其三张牌；小于3，其失去1点体力，你回复1点体力。",
	sb_chengong: "谋陈宫",
	sbmingce: "明策",
	sbmingce_info: "①出牌阶段限一次。你可以将一张牌交给一名其他角色，其选择一项：1.失去1点体力，令你摸两张牌并获得1枚“策”；2.摸一张牌。②出牌阶段开始时，你可以移去所有“策”并对一名其他角色造成等量伤害。",
	sbzhichi: "智迟",
	sbzhichi_info: "锁定技。当你受到伤害后，防止你本回合受到的伤害。",
	sb_yuanshao: "谋袁绍",
	sbluanji: "乱击",
	sbluanji_info: "①出牌阶段限一次。你可以将两张手牌当【万箭齐发】使用。②每回合限三次，当其他角色因响应你使用的【万箭齐发】而打出【闪】时，你摸一张牌。",
	sbxueyi: "血裔",
	sbxueyi_info: "主公技，锁定技。①你的手牌上限+2X（X为场上其他群势力角色数）。②每回合限两次，当你使用牌指定其他群势力角色为目标后，你摸一张牌。",
	sb_diaochan: "谋貂蝉",
	sblijian: "离间",
	sblijian_info: "出牌阶段限一次。你可以选择至少两名其他角色并弃置X张牌（X为你选择的角色数-1）。然后每名你选择的角色依次视为对这些角色中与其逆时针座次最近的另一名角色使用一张【决斗】。",
	sbbiyue: "闭月",
	sbbiyue_info: "锁定技。结束阶段，你摸Y张牌（Y为本回合包括已死亡角色在内受到过伤害的角色数+1且至多为4）。",
	sb_pangtong: "谋庞统",
	sblianhuan: "连环",
	sblianhuan_info: "①出牌阶段，你可以重铸一张♣手牌。②出牌阶段限一次。你可以将一张♣手牌当【铁索连环】使用。③当你使用【铁索连环】时，你可以失去1点体力，然后当此牌指定第一个目标后，你随机弃置每名不处于连环状态的目标角色一张手牌。",
	sblianhuan_lv2: "连环·改",
	sblianhuan_lv2_info: "①出牌阶段，你可以重铸一张♣手牌。②出牌阶段限一次。你可以将一张♣手牌当【铁索连环】使用。③当你使用【铁索连环】时，你可以额外指定任意名角色为目标。④当你使用【铁索连环】指定第一个目标后，你随机弃置每名不处于连环状态的目标角色一张手牌。",
	sbniepan: "涅槃",
	sbniepan_info: "限定技。当你处于濒死状态时，你可以弃置区域里的所有牌，摸两张牌，将体力回复至2点，复原武将牌，然后修改〖连环〗。",
	sb_sunce: "谋孙策",
	sbjiang: "激昂",
	sbjiang_info: "①当你使用【决斗】或红色【杀】指定目标后，或当你成为【决斗】或红色【杀】的目标后，你摸一张牌。②当你使用【决斗】时，你可以额外指定一名目标，然后你失去1点体力。③出牌阶段限一次。你可以将所有手牌当【决斗】使用。",
	sbhunzi: "魂姿",
	sbhunzi_info: "觉醒技。当你脱离濒死状态后，你减1点体力上限，获得1点护甲，摸三张牌。然后你获得〖英姿〗和〖英魂〗。",
	sbzhiba: "制霸",
	sbzhiba_info: "主公技，限定技。当你进入濒死状态时，你可以回复X-1点体力并修改〖激昂③〗为“出牌阶段限X次”（X为场上其他吴势力角色数+1）。然后其他吴势力角色依次受到1点无来源伤害，且当有角色因此死亡后，你摸三张牌。",
	sb_daqiao: "谋大乔",
	sbguose: "国色",
	sbguose_info: "出牌阶段限两次，你可以将一张♦牌当【乐不思蜀】使用或弃置场上一张【乐不思蜀】，然后你摸一张牌。",
	sbguose_info_identity: "出牌阶段限四次，你可以将一张♦牌当【乐不思蜀】使用或弃置场上一张【乐不思蜀】，然后你摸一张牌。",
	sbliuli: "流离",
	sbliuli_info: "当你成为【杀】的目标时，你可以弃置一张牌并选择你攻击范围内的一名不为此【杀】使用者的角色，将此【杀】转移给该角色。若你以此法弃置了♥牌，则你可以令一名不为此【杀】使用者的其他角色获得“流离”标记，且移去场上所有其他的“流离”（每回合限一次）。有“流离”的角色回合开始时，其移去其“流离”并执行一个额外的出牌阶段。",
	sb_liubiao: "谋刘表",
	sbzishou: "自守",
	sbzishou_info: "锁定技。其他角色的结束阶段，若其与你于本局游戏内均未对对方造成过伤害，其须交给你一张牌。",
	sbzongshi: "宗室",
	sbzongshi_info: "锁定技。每名角色限一次。当你受到伤害后，你令伤害来源弃置所有手牌。",
	sb_zhurong: "谋祝融",
	sblieren: "烈刃",
	sblieren_info: "当你使用【杀】指定唯一目标后，你可以摸一张牌，然后与其拼点。若你赢，此【杀】结算结束后，你可以对另一名其他角色造成1点伤害。",
	sbjuxiang: "巨象",
	sbjuxiang_info: "锁定技。①【南蛮入侵】对你无效。②当其他角色使用【南蛮入侵】结算结束后，你获得此牌对应的所有实体牌。③结束阶段，若你未于本回合使用过【南蛮入侵】，你可以将一张游戏外的随机【南蛮入侵】（共2张）交给一名角色。",
	sb_menghuo: "谋孟获",
	sbhuoshou: "祸首",
	sbhuoshou_info: "锁定技。①【南蛮入侵】对你无效。②当其他角色使用【南蛮入侵】指定第一个目标后，你代替其成为此牌的伤害来源。③出牌阶段开始时，你随机获得弃牌堆中的一张【南蛮入侵】。④出牌阶段，若你于此阶段使用过【南蛮入侵】，你不能使用【南蛮入侵】。",
	sbzaiqi: "再起",
	sbzaiqi_info: "蓄力技（0/7）。①弃牌阶段结束时，你可以消耗任意点蓄力值并选择等量名角色，然后令这些角色选择一项：1.令你摸一张牌；2.弃置一张牌，然后你回复1点体力。②每回合限一次。当你造成伤害后，你获得1点蓄力值。",
	sb_zhanghe: "谋张郃",
	sbqiaobian: "巧变",
	sbqiaobian_info: "每回合限一次。①你可以失去1点体力并跳过判定阶段，将判定区的所有牌移动给一名其他角色（无法置入其判定区的牌改为弃置之）。②你可以跳过摸牌阶段，于下个准备阶段摸五张牌并回复1点体力。③你可以将手牌数弃置至六张（若手牌数少于六张则跳过之）并跳过出牌阶段和弃牌阶段，然后移动场上的一张牌。",
	sb_yl_luzhi: "谋卢植",
	sb_yl_luzhi_prefix: "谋",
	sbzhenliang: "贞良",
	sbzhenliang_info: "转换技。阴：出牌阶段限一次，你可以弃置X张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害（X为你与其体力值值差且X至少为1）。阳：你的回合外，一名角色使用或打出牌结算完成后，若此牌与“任”类别相同，则你可以令一名角色摸两张牌。",
	sb_xiaoqiao: "谋小乔",
	sb_xiaoqiao_prefix: "谋",
	sbtianxiang: "天香",
	sbtianxiang_info_identity: "①出牌阶段限三次，你可以交给一名没有“天香”标记的其他角色一张红色牌，然后令其获得此牌花色的“天香”标记。②当你受到伤害时，你可以移去一名角色的“天香”标记，若此“天香”标记为：红桃，你防止此伤害，其受到伤害来源对其造成的1点伤害（若没有伤害来源则改为无来源伤害）；方片，其交给你两张牌。③准备阶段，你移去场上所有的“天香”标记，然后摸等量的牌。",
	sbtianxiang_info: "①出牌阶段限三次，你可以交给一名没有“天香”标记的其他角色一张红色牌，然后令其获得此牌花色的“天香”标记。②当你受到伤害时，你可以移去一名角色的“天香”标记，若此“天香”标记为：红桃，你防止此伤害，其受到伤害来源对其造成的1点伤害（若没有伤害来源则改为无来源伤害）；方片，其交给你两张牌。③准备阶段，你移去场上所有的“天香”标记，然后摸X张牌（X为移去的“天香”标记数+2）。",
	sb_sp_zhugeliang: "谋诸葛亮",
	sb_sp_zhugeliang_prefix: "谋",
	sbhuoji: "火计",
	sbhuoji_info: "使命技。①使命：出牌阶段限一次。你可以对一名其他角色造成1点火焰伤害，然后你对所有与其势力相同的不为其的其他角色各造成1点火焰伤害。②成功：准备阶段，若你本局游戏已造成的火焰伤害不小于本局游戏总角色数，则你失去〖火计〗和〖看破〗，然后获得〖观星〗和〖空城〗。③失败：使命成功前进入濒死状态。",
	sbkanpo: "看破",
	sbkanpo_info: "①一轮游戏开始时，你清除〖看破①〗记录的牌名，然后你可以依次记录任意个未于上次发动〖看破①〗记录清除过的非装备牌牌名（对其他角色不可见，每局游戏至多记录4个牌名）。②其他角色使用你〖看破①〗记录过的牌名的牌时，你可以移去一个〖看破①〗中的此牌名的记录令此牌无效，然后你摸一张牌。",
	sbkanpo_info_doudizhu: "①一轮游戏开始时，你清除〖看破①〗记录的牌名，然后你可以依次记录任意个未于上次发动〖看破①〗记录清除过的非装备牌牌名（对其他角色不可见，每局游戏至多记录2个牌名）。②其他角色使用你〖看破①〗记录过的牌名的牌时，你可以移去一个〖看破①〗中的此牌名的记录令此牌无效，然后你摸一张牌。",
	sbkanpo_info_versus_two: "①一轮游戏开始时，你清除〖看破①〗记录的牌名，然后你可以依次记录任意个未于上次发动〖看破①〗记录清除过的非装备牌牌名（对其他角色不可见，每局游戏至多记录2个牌名）。②其他角色使用你〖看破①〗记录过的牌名的牌时，你可以移去一个〖看破①〗中的此牌名的记录令此牌无效，然后你摸一张牌。",
	sbguanxing: "观星",
	sbguanxing_info: "①准备阶段，你将所有“星”置入弃牌堆，将牌堆顶的X张牌置于你的武将牌上，称为“星”（X为7-此前发动〖观星①〗次数的三倍，且X至少为0）。然后你可以将任意张“星”置于牌堆顶。②结束阶段，若你未于本回合的准备阶段将“星”置于过牌堆顶，你可以将任意张“星”置于牌堆顶。③你可以如手牌般使用或打出“星”。",
	sbkongcheng: "空城",
	sbkongcheng_info: "锁定技。当你受到伤害时，若你拥有技能〖观星〗，且若你：有“星”，你判定，若结果点数不大于你的“星”数，此伤害-1；没有“星”，此伤害+1。",
	sb_huangyueying: "谋黄月英",
	sb_huangyueying_prefix: "谋",
	sbqicai: "奇才",
	sbqicai_backup: "奇才",
	sbqicai_info: "①出牌阶段限一次。你可以将手牌中或弃牌堆中的一张装备牌置于一名其他角色的对应装备栏，然后其获得如下效果：当其得到普通锦囊牌后，其将此牌交给你（限三张）。②你使用锦囊牌无距离限制。",
	sbqicai_info_doudizhu: "①出牌阶段限一次。你可以将手牌中或弃牌堆中的一张防具牌置于一名其他角色的对应装备栏（每种牌名的装备牌每局游戏限选择一次），然后其获得如下效果：当其得到普通锦囊牌后，其将此牌交给你（限三张）。②你使用锦囊牌无距离限制。",
	sbjizhi: "集智",
	sbjizhi_info: "锁定技，当你使用一张普通锦囊牌时，你摸一张牌，且此牌本回合不计入你的手牌上限。",
	sb_guanyu: "谋关羽",
	sb_guanyu_prefix: "谋",
	sbwusheng: "武圣",
	sbwusheng_wusheng_backup: "武圣",
	sbwusheng_info: "你可以将一张手牌当作任意【杀】使用或打出。出牌阶段开始时，你可以选择一名非主公的其他角色，本阶段对其使用【杀】无距离和次数限制，使用【杀】指定其为目标后摸一张牌，对其使用三张【杀】后不能对其使用【杀】。",
	sbwusheng_info_identity: "你可以将一张手牌当作任意【杀】使用或打出。出牌阶段开始时，你可以选择一名非主公的其他角色，本阶段对其使用【杀】无距离和次数限制，使用【杀】指定其为目标后摸两张牌，对其使用三张【杀】后不能对其使用【杀】。",
	sbyijue: "义绝",
	sbyijue_info: "锁定技，每名角色每局游戏限一次，一名其他角色受到你对其造成的大于等于其体力值的伤害时，你防止此伤害，且本回合你使用牌指定其为目标时，此牌对其无效。",
	sb_caopi: "谋曹丕",
	sb_caopi_prefix: "谋",
	sbxingshang: "行殇",
	sbxingshang_info: "①当一名角色受到伤害后（每回合限一次）或死亡时，你获得2个“颂”标记（你至多拥有9个“颂”标记）。②出牌阶段限两次，你可以：1.移去2个“颂”标记，令一名角色复原武将牌；2.移去2个“颂”标记，令一名角色摸X张牌（X为场上阵亡角色数，且X至少为2，至多为5）；3.移去5个“颂”标记，令一名体力上限小于10的角色加1点体力上限，回复1点体力，随机恢复一个已废除的装备栏；4.移去5个“颂”标记，获得一名阵亡角色武将牌上的所有技能，然后你失去〖行殇〗〖放逐〗〖颂威〗。",
	sbfangzhu: "放逐",
	sbfangzhu_info: "出牌阶段限一次，你可以：1.移去1个“颂”标记，令一名其他角色于手牌中只能使用基本牌直到其回合结束；2.移去2个“颂”标记，令一名其他角色于手牌中只能使用锦囊牌直到其回合结束。3.移去3个“颂”标记，令一名其他角色于手牌中只能使用装备牌直到其回合结束；4.移去2个“颂”标记，令一名其他角色的非Charlotte技能失效直到其回合结束；5.移去2个“颂”标记，令一名其他角色不能响应除其以外的角色使用的牌直到其回合结束；6.移去3个“颂”标记，令一名其他角色将武将牌翻面；",
	sbfangzhu_info_doudizhu: "出牌阶段限一次，你可以：1.移去2个“颂”标记，令一名其他角色于手牌中只能使用锦囊牌直到其回合结束。2.移去2个“颂”标记，令一名其他角色不能响应除其以外的角色使用的牌直到其回合结束；3.移去3个“颂”标记，令一名其他角色将武将牌翻面；",
	sbsongwei: "颂威",
	sbsongwei_info: "主公技。①出牌阶段开始时，你获得Y个“颂”标记（Y为场上其他魏势力角色数的两倍）。②每局游戏限一次，出牌阶段，你可以令一名其他魏势力角色失去所有其武将牌上的技能。",
	sb_xunyu: "谋荀彧",
	sb_xunyu_prefix: "谋",
	sbquhu: "驱虎",
	sbquhu_info: "出牌阶段限一次。你可以选择两名有牌的其他角色，你与这些角色同时将任意张牌扣置于武将牌上。若你以此法扣置的牌唯一最少，则扣置牌最多的其他角色获得你扣置的牌，且这些角色获得各自扣置的牌；否则这两名角色中扣置牌较多的角色对较少的角色造成1点伤害，获得你扣置的牌，然后这些角色将各自扣置的牌置入弃牌堆（若这两名角色扣置的牌数相同，视为与你逆时针最近座次的角色扣置牌较多）。",
	sbjieming: "节命",
	sbjieming_info: "当你受到伤害后，你可以令一名角色摸四张牌，然后其可以弃置任意张牌。若其弃置的牌数小于X，你失去1点体力（X为你已损失的体力值，至少为1）。",
	sb_xiahoudun: "谋夏侯惇",
	sb_xiahoudun_prefix: "谋",
	sbganglie: "刚烈",
	sbganglie_info: "出牌阶段限一次。你可以选择任意名本局游戏对你造成过伤害且你以此法选择过其的次数小于2的角色，你对其造成2点伤害。",
	sbqingjian: "清俭",
	sbqingjian_info: "①当有一张牌不因使用而进入弃牌堆后，若你的“清俭”数小于X，你将此牌置于你的武将牌上，称为“清俭”（X为你的体力值-1，且至少为1）。②出牌阶段结束时，你将所有“清俭”分配给任意角色。",
	sb_gaoshun: "谋高顺",
	sb_gaoshun_prefix: "谋",
	sbxianzhen: "陷阵",
	sbxianzhen_info_identity: "出牌阶段限一次。你可以选择一名体力值小于你的角色，你于本阶段获得如下效果：⒈你对其使用牌无距离限制；⒉当你使用【杀】指定其为目标后，你可以与其拼点：若你赢，此【杀】无视防具且不计入次数，且若你本回合以此法对其造成的伤害小于2，你对其造成1点伤害；若其拼点牌为【杀】，则你获得之；若其拼点牌为其最后的手牌，则此【杀】对其造成伤害时，此伤害+1。",
	sbxianzhen_info: "出牌阶段限一次。你可以选择一名其他角色，你于本阶段获得如下效果：⒈你对其使用牌无距离限制；⒉当你使用【杀】指定其为目标后，你可以与其拼点：若你赢，此【杀】无视防具且不计入次数，且若你本回合以此法对其造成的伤害小于2，你对其造成1点伤害；若其拼点牌为【杀】，则你获得之；若其拼点牌为其最后的手牌，则此【杀】对其造成伤害时，此伤害+1。",
	sbjinjiu: "禁酒",
	sbjinjiu_info: "锁定技。①你的【酒】均视为【杀】。②当你受到酒【杀】的伤害时，你令此伤害减至1。③其他角色不能于你的回合内使用【酒】。④当一名其他角色的拼点牌亮出后，若你为发起者或参与者且此牌为【酒】，则此牌的点数视为A。",
	sb_handang: "谋韩当",
	sb_handang_prefix: "谋",
	sbgongqi: "弓骑",
	sbgongqi_info: "①出牌阶段开始时，你可以弃置一张牌，然后本阶段你获得如下效果：当你使用牌时，你令所有其他角色不能使用或打出与你弃置牌颜色不同的手牌响应此牌。②你的攻击范围+4。",
	sbjiefan: "解烦",
	sbjiefan_info: "出牌阶段限一次。你可以令一名角色选择一项：⒈令所有攻击范围内含有其的角色依次弃置一张牌；⒉其摸等同于攻击范围内含有其的角色数的牌（至多两张）；⒊背水：此技能失效直到你杀死一名角色，然后依次执行上述所有选项。",
	sb_gongsunzan: "谋公孙瓒",
	sb_gongsunzan_prefix: "谋",
	sbyicong: "义从",
	sbyicong_info: "蓄力技（2/4）。①一轮游戏开始时，你可以消耗任意点蓄力值并选择一项：⒈你于本轮内至其他角色的距离-X，令系统选择牌堆中的一张【杀】；⒉其他角色于本轮内至你的距离+X，令系统选择牌堆中的一张【闪】（X为你消耗的蓄力值）。然后若你的“扈”数小于4，你将系统选择的牌置于武将牌上，称为“扈”。②你可以将“扈”如手牌般使用或打出。",
	sbqiaomeng: "趫猛",
	sbqiaomeng_info: "当你使用【杀】造成伤害后，若你有〖义从〗，你可以选择一项：⒈弃置受伤角色区域里的一张牌并摸一张牌；⒉获得2点蓄力值。",
	sb_luxun: "谋陆逊",
	sbqianxun: "谦逊",
	sbqianxun_info: "当一张锦囊牌对你生效时，若此牌名未记录且你不是使用者，则你记录之，然后可将至多X张牌置于你的武将牌上，此回合结束时获得（X为“谦逊”记录的牌名数且至多为5）。出牌阶段开始时，你可以移去一个记录的普通锦囊牌牌名，视为使用此牌。",
	sblianying: "连营",
	sblianying_info: "其他角色的回合结束时，你可以观看牌堆顶的X张牌，然后将这些牌交给任意角色（X为你本回合失去的牌数，至多为5）。",
};

export default translates;
