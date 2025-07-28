const libmd5wars=require("../main.js");
// 只注入特定数值，其他数值保持不变
player1=new libmd5wars.Player("1",true);
player1.mhp=1000;
process.stdout.write(libmd5wars.fightString(player1,new libmd5wars.Player("2",true)));
