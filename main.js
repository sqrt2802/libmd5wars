function safe_add(x, y) {
    var a = new Number((x & 0xffff) + (y & 0xffff));
    var b = new Number((x >> 16) + (y >> 16) + (a >> 16));
    return (b << 16) | (a & 0xffff);
}
function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function MD5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function MD5_ff(a, b, c, d, x, s, t) {
    return MD5_cmn((b & c) | (~b & d), a, b, x, s, t);
}
function MD5_gg(a, b, c, d, x, s, t) {
    return MD5_cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function MD5_hh(a, b, c, d, x, s, t) {
    return MD5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function MD5_ii(a, b, c, d, x, s, t) {
    return MD5_cmn(c ^ (b | ~d), a, b, x, s, t);
}
function coreMD5(x, len) {
    x[len >> 5] |= 128 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var loc2 = 271733878,
        loc3 = -1732584194,
        loc4 = -271733879,
        loc5 = 1732584193,
        loc8,
        loc9,
        loc10,
        loc11;
    for (let i = 0; i < x.length; i += 16) {
        loc11 = loc5;
        loc10 = loc4;
        loc9 = loc3;
        loc8 = loc2;
        loc5 = MD5_ff(loc5, loc4, loc3, loc2, x[i + 0], 7, -680876936);
        loc2 = MD5_ff(loc2, loc5, loc4, loc3, x[i + 1], 12, -389564586);
        loc3 = MD5_ff(loc3, loc2, loc5, loc4, x[i + 2], 17, 606105819);
        loc4 = MD5_ff(loc4, loc3, loc2, loc5, x[i + 3], 22, -1044525330);
        loc5 = MD5_ff(loc5, loc4, loc3, loc2, x[i + 4], 7, -176418897);
        loc2 = MD5_ff(loc2, loc5, loc4, loc3, x[i + 5], 12, 1200080426);
        loc3 = MD5_ff(loc3, loc2, loc5, loc4, x[i + 6], 17, -1473231341);
        loc4 = MD5_ff(loc4, loc3, loc2, loc5, x[i + 7], 22, -45705983);
        loc5 = MD5_ff(loc5, loc4, loc3, loc2, x[i + 8], 7, 1770035416);
        loc2 = MD5_ff(loc2, loc5, loc4, loc3, x[i + 9], 12, -1958414417);
        loc3 = MD5_ff(loc3, loc2, loc5, loc4, x[i + 10], 17, -42063);
        loc4 = MD5_ff(loc4, loc3, loc2, loc5, x[i + 11], 22, -1990404162);
        loc5 = MD5_ff(loc5, loc4, loc3, loc2, x[i + 12], 7, 1804603682);
        loc2 = MD5_ff(loc2, loc5, loc4, loc3, x[i + 13], 12, -40341101);
        loc3 = MD5_ff(loc3, loc2, loc5, loc4, x[i + 14], 17, -1502002290);
        loc4 = MD5_ff(loc4, loc3, loc2, loc5, x[i + 15], 22, 1236535329);
        loc5 = MD5_gg(loc5, loc4, loc3, loc2, x[i + 1], 5, -165796510);
        loc2 = MD5_gg(loc2, loc5, loc4, loc3, x[i + 6], 9, -1069501632);
        loc3 = MD5_gg(loc3, loc2, loc5, loc4, x[i + 11], 14, 643717713);
        loc4 = MD5_gg(loc4, loc3, loc2, loc5, x[i + 0], 20, -373897302);
        loc5 = MD5_gg(loc5, loc4, loc3, loc2, x[i + 5], 5, -701558691);
        loc2 = MD5_gg(loc2, loc5, loc4, loc3, x[i + 10], 9, 38016083);
        loc3 = MD5_gg(loc3, loc2, loc5, loc4, x[i + 15], 14, -660478335);
        loc4 = MD5_gg(loc4, loc3, loc2, loc5, x[i + 4], 20, -405537848);
        loc5 = MD5_gg(loc5, loc4, loc3, loc2, x[i + 9], 5, 568446438);
        loc2 = MD5_gg(loc2, loc5, loc4, loc3, x[i + 14], 9, -1019803690);
        loc3 = MD5_gg(loc3, loc2, loc5, loc4, x[i + 3], 14, -187363961);
        loc4 = MD5_gg(loc4, loc3, loc2, loc5, x[i + 8], 20, 1163531501);
        loc5 = MD5_gg(loc5, loc4, loc3, loc2, x[i + 13], 5, -1444681467);
        loc2 = MD5_gg(loc2, loc5, loc4, loc3, x[i + 2], 9, -51403784);
        loc3 = MD5_gg(loc3, loc2, loc5, loc4, x[i + 7], 14, 1735328473);
        loc4 = MD5_gg(loc4, loc3, loc2, loc5, x[i + 12], 20, -1926607734);
        loc5 = MD5_hh(loc5, loc4, loc3, loc2, x[i + 5], 4, -378558);
        loc2 = MD5_hh(loc2, loc5, loc4, loc3, x[i + 8], 11, -2022574463);
        loc3 = MD5_hh(loc3, loc2, loc5, loc4, x[i + 11], 16, 1839030562);
        loc4 = MD5_hh(loc4, loc3, loc2, loc5, x[i + 14], 23, -35309556);
        loc5 = MD5_hh(loc5, loc4, loc3, loc2, x[i + 1], 4, -1530992060);
        loc2 = MD5_hh(loc2, loc5, loc4, loc3, x[i + 4], 11, 1272893353);
        loc3 = MD5_hh(loc3, loc2, loc5, loc4, x[i + 7], 16, -155497632);
        loc4 = MD5_hh(loc4, loc3, loc2, loc5, x[i + 10], 23, -1094730640);
        loc5 = MD5_hh(loc5, loc4, loc3, loc2, x[i + 13], 4, 681279174);
        loc2 = MD5_hh(loc2, loc5, loc4, loc3, x[i + 0], 11, -358537222);
        loc3 = MD5_hh(loc3, loc2, loc5, loc4, x[i + 3], 16, -722521979);
        loc4 = MD5_hh(loc4, loc3, loc2, loc5, x[i + 6], 23, 76029189);
        loc5 = MD5_hh(loc5, loc4, loc3, loc2, x[i + 9], 4, -640364487);
        loc2 = MD5_hh(loc2, loc5, loc4, loc3, x[i + 12], 11, -421815835);
        loc3 = MD5_hh(loc3, loc2, loc5, loc4, x[i + 15], 16, 530742520);
        loc4 = MD5_hh(loc4, loc3, loc2, loc5, x[i + 2], 23, -995338651);
        loc5 = MD5_ii(loc5, loc4, loc3, loc2, x[i + 0], 6, -198630844);
        loc2 = MD5_ii(loc2, loc5, loc4, loc3, x[i + 7], 10, 1126891415);
        loc3 = MD5_ii(loc3, loc2, loc5, loc4, x[i + 14], 15, -1416354905);
        loc4 = MD5_ii(loc4, loc3, loc2, loc5, x[i + 5], 21, -57434055);
        loc5 = MD5_ii(loc5, loc4, loc3, loc2, x[i + 12], 6, 1700485571);
        loc2 = MD5_ii(loc2, loc5, loc4, loc3, x[i + 3], 10, -1894986606);
        loc3 = MD5_ii(loc3, loc2, loc5, loc4, x[i + 10], 15, -1051523);
        loc4 = MD5_ii(loc4, loc3, loc2, loc5, x[i + 1], 21, -2054922799);
        loc5 = MD5_ii(loc5, loc4, loc3, loc2, x[i + 8], 6, 1873313359);
        loc2 = MD5_ii(loc2, loc5, loc4, loc3, x[i + 15], 10, -30611744);
        loc3 = MD5_ii(loc3, loc2, loc5, loc4, x[i + 6], 15, -1560198380);
        loc4 = MD5_ii(loc4, loc3, loc2, loc5, x[i + 13], 21, 1309151649);
        loc5 = MD5_ii(loc5, loc4, loc3, loc2, x[i + 4], 6, -145523070);
        loc2 = MD5_ii(loc2, loc5, loc4, loc3, x[i + 11], 10, -1120210379);
        loc3 = MD5_ii(loc3, loc2, loc5, loc4, x[i + 2], 15, 718787259);
        loc4 = MD5_ii(loc4, loc3, loc2, loc5, x[i + 9], 21, -343485551);
        loc5 = safe_add(loc5, loc11);
        loc4 = safe_add(loc4, loc10);
        loc3 = safe_add(loc3, loc9);
        loc2 = safe_add(loc2, loc8);
    }
    return Array(loc5, loc4, loc3, loc2);
}
function str2binl(str) {
    var arr = new Array();
    var cc,
        a = 0,
        b = 0,
        d = 0;
    for (let i = 0; i < str.length; i++) {
        cc = str.charCodeAt(i);
        d = cc < 256 ? 1 : 2;
        if (a + d < 5) {
            b |= cc << (a * 8);
            a += d;
            if (a == 4) {
                arr.push(b);
                a = b = 0;
            }
        } else {
            b |= (cc & 0xff) << (a * 8);
            arr.push(b);
            a = 1;
            b = cc >> 8;
        }
    }
    if (a != 0) {
        arr.push(b);
    }
    return arr;
}
function binl2hex(binarr) {
    var dict = "0123456789abcdef";
    var out = new String("");
    for (let i = 0; i < binarr.length * 4; i++) {
        out +=
            dict.charAt((binarr[i >> 2] >> ((i % 4) * 8 + 4)) & 0x0f) +
            dict.charAt((binarr[i >> 2] >> ((i % 4) * 8)) & 0x0f);
    }
    return out;
}
function hash(s) {
    return binl2hex(coreMD5(str2binl(s), s.length * 8));
}
function md5array(s) {
    var loc5 = coreMD5(str2binl(s), s.length * 8);
    var arr = new Array();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 32; j++) {
            arr.push((loc5[i] >> j) & 1);
        }
    }
    return arr;
}

var users, to_ary;
function gbt(a, b) {
    if (a.length < b) {
        if (users[0].hashstr < users[1].hashstr) {
            to_ary = to_ary.concat(md5array(users[0].str + users[1].str));
            to_ary = to_ary.concat(md5array(users[1].str + users[0].str));
            to_ary = to_ary.concat(md5array(users[0].str + users[1].hashstr));
            to_ary = to_ary.concat(md5array(users[1].hashstr + users[0].str));
        } else {
            to_ary = to_ary.concat(md5array(users[1].str + users[0].str));
            to_ary = to_ary.concat(md5array(users[0].str + users[1].str));
            to_ary = to_ary.concat(md5array(users[1].str + users[0].hashstr));
            to_ary = to_ary.concat(md5array(users[0].hashstr + users[1].str));
        }
        a = to_ary;
    }
    var loc2 = 1,
        loc3 = 0;
    for (let i = 0; i < b; i++) {
        loc3 += a.shift() * loc2;
        loc2 *= 2;
    }
    return loc3;
}
function gb(a, b) {
    var loc2 = 1,
        loc3 = 0;
    for (let i = 0; i < b; i++) {
        loc3 += a.shift() * loc2;
        loc2 *= 2;
    }
    return loc3;
}
function gbr(a, b) {
    return gbt(a, b) / (Math.pow(2, b) - 1);
}

module.exports = {
    Player: class {
        constructor(strin, docalc) {
            this.str = strin;
            this.hashstr = hash(strin);
            this.hasharr = md5array(strin);
            this.hp = 0;
            this.mhp = 0;
            this.atk = 0;
            this.def = 0;
            this.spd = 0;
            this.acr = 0;
            this.luk = 0;
            this.cdef = 0;
            this.cbit = 0;
            this.cpos = 0;
            this.cup = 0;
            this.ccrs = 0;
            this.ccnt = 0;
            this.cang = 0;
            this.cslp = 0;
            if (docalc) {
                gb(this.hasharr, 55);
                gb(this.hasharr, 3);
                gb(this.hasharr, 3);
                gb(this.hasharr, 4);
                gb(this.hasharr, 4);
                this.mhp = 145 + gb(this.hasharr, 8);
                gb(this.hasharr, 1);
                this.atk = 37 + gb(this.hasharr, 6);
                this.def = 37 + gb(this.hasharr, 6);
                this.spd = 37 + gb(this.hasharr, 6);
                this.acr = 37 + gb(this.hasharr, 6);
                this.luk = 37 + gb(this.hasharr, 6);
                this.cdef = gb(this.hasharr, 2) == 0 ? 1 : 0;
                this.cbit = gb(this.hasharr, 2) == 1 ? 1 : 0;
                this.cpos = gb(this.hasharr, 2) == 0 ? 1 : 0;
                this.cup = gb(this.hasharr, 2) == 3 ? 1 : 0;
                this.ccrs = gb(this.hasharr, 2) == 0 ? 1 : 0;
                this.ccnt = gb(this.hasharr, 2) == 2 ? 1 : 0;
                this.cang = gb(this.hasharr, 2) == 1 ? 1 : 0;
                this.cslp = gb(this.hasharr, 2) == 1 ? 1 : 0;
            }
        }
    },
    fightString: function (user1, user2) {
        users = [user1, user2];
        var strout = "";
        strout += "libmd5wars - MD5大作战 Javascript 改版\n";
        strout += "Alpha Preview v2 | Jul 28 2025\n\n";
        for (let i = 0; i < 2; i++) {
            strout += `${users[i].str}  HP:${users[i].mhp} 攻:${users[i].atk} 防:${users[i].def} 速:${users[i].spd} 技:${users[i].acr} 运:${users[i].luk} 技能:${users[i].cdef ? "防" : ""}${users[i].cbit ? "狂" : ""}${users[i].cpos ? "毒" : ""}${users[i].cup ? "垂" : ""}${users[i].ccrs ? "咒" : ""}${users[i].ccnt ? "绊" : ""}${users[i].cang ? "怒" : ""}${users[i].cslp ? "晕" : ""}\n`;
            users[i].hp = users[i].mhp;
            users[i].acr /= 100;
            users[i].luk /= 100;
        }
        if (users[1].spd == users[0].spd) {
            if (users[0].str > users[1].str) {
                users[0].spd += 0.001;
            } else {
                users[1].spd += 0.001;
            }
        }
        strout += "\n";
        to_ary = new Array();
        gbt(to_ary, 1);
        var usera, userd, usert;
        if (users[0].spd > users[1].spd) {
            usera = users[0];
            userd = users[1];
        } else {
            usera = users[1];
            userd = users[0];
        }
        var astat, dstat, tdmg, guardstat, trcv;
        while (users[0].hp > 0 && users[1].hp > 0) {
            astat = -1;
            dstat = -1;
            tdmg = -1;
            guardstat = 1;
            if (usera.cbit != 0 && gbt(to_ary, 3) == 0) {
                astat = 6;
                strout += `${usera.str} 发狂了, 上前咬了 ${userd.str} 一口, `;
            } else if (
                usera.cang != 0 &&
                usera.hp < usera.mhp &&
                gbt(to_ary, 3) == 0
            ) {
                astat = 5;
                strout += `${usera.str} 发怒了, 把 ${userd.str} 按在地上一顿暴打, `;
            } else if (usera.ccrs != 0 && gbt(to_ary, 3) == 0) {
                astat = 4;
                strout += `${usera.str} 诅咒 ${userd.str}, `;
            } else if (usera.cpos != 0 && gbt(to_ary, 3) == 0) {
                astat = 3;
                strout += `${usera.str} 向 ${userd.str} 投毒, `;
            } else {
                astat = 0;
                strout += `${usera.str} 发起攻击, `;
            }
            if (
                usera.acr + 0.65 - gbr(to_ary, 7) * userd.luk <
                gbr(to_ary, 7)
            ) {
                dstat = 5;
                strout += `但是被 ${userd.str} 闪开了\n`;
                usert = usera;
                usera = userd;
                userd = usert;
            } else if (
                (astat == 0 || astat == 6) &&
                userd.ccnt != 0 &&
                gbt(to_ary, 3) == 0
            ) {
                dstat = 4;
                strout += `但是却被 ${userd.str} 绊倒了, `;
                tdmg = Math.ceil(userd.luk * gbt(to_ary, 7) * 0.8);
                usera.hp -= tdmg;
                strout += `${usera.str} 受到 ${tdmg} 点伤害\n`;
                usert = usera;
                usera = userd;
                userd = usert;
                if (userd.hp < 1) {
                    strout += `${userd.str} 被击败了\n`;
                }
            } else {
                if (
                    (astat == 0 || astat == 5 || astat == 6) &&
                    userd.cdef &&
                    gbt(to_ary, 2) == 0
                ) {
                    dstat = 2;
                    guardstat = 2;
                    strout += `${userd.str} 防御, `;
                } else {
                    dstat = 0;
                }
                switch (astat) {
                    case 3:
                        if (
                            userd.hp < usera.mhp - usera.hp &&
                            gbt(to_ary, 2) > 0
                        ) {
                            tdmg = Math.ceil((usera.mhp - usera.hp) / 2);
                            userd.hp -= tdmg;
                            strout += `${userd.str} 受到 ${tdmg} 点伤害\n`;
                        } else {
                            userd.hp = Math.ceil(userd.hp / 2);
                            strout += `${userd.str} 体力减半\n`;
                        }
                        break;
                    case 4:
                        userd.atk *= 0.9;
                        userd.def *= 0.85;
                        userd.spd *= 0.85;
                        userd.acr *= 0.8;
                        userd.luk *= 0.85;
                        strout += `${userd.str} 所有数值下降\n`;
                        break;
                    case 6:
                        tdmg =
                            (usera.atk * (usera.atk + 8)) / userd.def +
                            usera.luk * gbt(to_ary, 7) * 0.8 -
                            userd.luk * gbt(to_ary, 6) * 0.8;
                        if (dstat == 2) {
                            tdmg /= guardstat;
                        }
                        if (tdmg < 1) {
                            tdmg = 1;
                            if (dstat == 2) {
                                tdmg = 0;
                            }
                        } else {
                            tdmg = Math.round(tdmg);
                        }
                        userd.hp -= tdmg;
                        strout += `${userd.str} 受到 ${tdmg} 点伤害\n`;
                        break;
                    case 0:
                        tdmg =
                            (usera.atk * usera.atk) / userd.def -
                            (usera.atk * Math.sqrt(userd.def)) / 20 +
                            usera.luk * gbt(to_ary, 7) -
                            userd.luk * gbt(to_ary, 6);
                        if (dstat == 2) {
                            tdmg /= guardstat;
                        }
                        if (tdmg < 1) {
                            tdmg = 1;
                            if (dstat == 2) {
                                tdmg = 0;
                            }
                        } else {
                            tdmg = Math.round(tdmg);
                        }
                        userd.hp -= tdmg;
                        strout += `${userd.str} 受到 ${tdmg} 点伤害\n`;
                        break;
                    case 5:
                        strout += "\n";
                        for (let i = 0; i < 13; i++) {
                            tdmg =
                                (usera.atk * usera.atk) / userd.def -
                                (usera.atk * Math.sqrt(userd.def)) / 30;
                            tdmg /= 3;
                            tdmg +=
                                usera.luk * gbt(to_ary, 6) -
                                userd.luk * gbt(to_ary, 6) * 0.8;
                            if (dstat == 2) {
                                tdmg /= guardstat;
                            }
                            if (tdmg < 1) {
                                tdmg = 1;
                                if (dstat == 2) {
                                    tdmg = 0;
                                }
                            } else {
                                tdmg = Math.round(tdmg);
                            }
                            userd.hp -= tdmg;
                            strout += `${userd.str} 受到 ${tdmg} 点伤害\n`;
                            if (
                                i == 12 ||
                                (usera.acr * (13 - i)) / 12 +
                                    usera.luk -
                                    userd.luk <
                                    gbr(to_ary, 7)
                            ) {
                                strout += `${userd.str} 挣脱了\n`;
                                break;
                            }
                        }
                        break;
                }
                if (userd.hp > 0) {
                    if (usera.cslp != 0 && tdmg > 10 && gbt(to_ary, 3) == 0) {
                        strout += `${userd.str} 被打晕了, `;
                        trcv = Math.ceil(usera.luk * gbt(to_ary, 7) * 0.8);
                        usera.hp += trcv;
                        strout += `${usera.str} 趁机恢复了体力 ${trcv} 点\n`;
                    }
                    if (
                        userd.cup != 0 &&
                        userd.hp * 5 < userd.mhp &&
                        gbt(to_ary, 1) == 0
                    ) {
                        userd.cup = 0;
                        userd.atk = Math.round(userd.atk * 1.4);
                        userd.def = Math.round(userd.def * 1.2);
                        userd.spd = Math.round(userd.spd * 1.2);
                        userd.acr = Math.round(userd.acr * 1.2);
                        userd.luk = Math.round(userd.luk * 1.3);
                        strout += `${userd.str} 作出垂死抗争, 所有数值上升\n`;
                    }
                    if (
                        (usera.spd - userd.spd >= 40 && gbt(to_ary, 1) == 0) ||
                        (usera.spd - userd.spd >= 8 &&
                            usera.spd - userd.spd < 40 &&
                            gbt(to_ary, 6) < usera.spd - userd.spd - 7) ||
                        (usera.spd - userd.spd >= 1 &&
                            usera.spd - userd.spd < 8 &&
                            gbt(to_ary, 6) == 0)
                    ) {
                        strout += `${userd.str} 发动连击\n`;
                    } else {
                        usert = usera;
                        usera = userd;
                        userd = usert;
                    }
                } else {
                    strout += `${userd.str} 被击败了\n`;
                }
            }
        }
        return strout;
    },
};
