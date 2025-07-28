// 输出战斗过程

const libmd5wars=require("../main.js");
process.stdout.write(libmd5wars.fightString(new libmd5wars.Player("1",true),new libmd5wars.Player("2",true)));
