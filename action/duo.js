const { bot } = require('../bot')
const { Markup } = require('telegraf')

bot.hears('๐Duolar', ctx =>{
    ctx.reply( 'Tanlang', Markup
        .inlineKeyboard([
            [
                Markup.button.callback(
                  "Roโza tutish (saharlik, ogโiz yopish) duosi",
                  "Roโza tutish (saharlik, ogโiz yopish) duosi"
                )
            ],
            [
                Markup.button.callback(
                  "Iftorlik (ogโiz ochish) duosi",
                  "Iftorlik (ogโiz ochish) duosi"
                )
            ],
            [
                Markup.button.callback(
                  "Taroveh tasbehi",
                  "Taroveh tasbehi"
                )
            ]
        ])
        .oneTime()
        .resize())})
bot.action('Roโza tutish (saharlik, ogโiz yopish) duosi', ctx =>{
    let text = `<b>ููููููุชู ุฃููู ุฃูุตูููู ุตููููู ุดูููุฑู ุฑูููุถูุงูู ูููู ุงููููุฌูุฑู ุฅูููู ุงููููุบูุฑูุจูุ ุฎูุงููุตูุง ููููู ุชูุนูุงููู ุฃููููู ุฃูููุจูุฑู</b>
    -------------------------------------------------------------------------------------------------
    `+`<b> Navaytu an asuvma sovma shahri ramazona minal fajri ilal magโribi, xolisan lillahi taสผaalaa Allohu akbar.</b>
    -------------------------------------------------------------------------------------------------
    ` + `Maสผnosi: Ramazon oyining roโzasini subhdan to kun botguncha tutmoqni niyat qildim. Xolis Alloh uchun Alloh buyukdir.
    `
    ctx.replyWithHTML(text).then()  
})
bot.action('Iftorlik (ogโiz ochish) duosi', ctx =>{
    let text = `<b>ุงูููููููููู ูููู ุตูููุชู ูู ุจููู ุขููููุชู ูู ุนููููููู ุชููููููููุชู ูู ุนูููู ุฑูุฒููููู ุฃูููุชูุฑูุชูุ ููุบูููุฑูููู ููุง ููุฏููููุชู ูู ููุง ุฃูุฎููุฑูุชู ุจูุฑูุญูููุชููู ููุง ุฃูุฑูุญููู ุงูุฑููุงุญูููููู</b>
    -------------------------------------------------------------------------------------------------
    `+`<b>Allohumma laka sumtu va bika aamantu va aสผlayka tavakkaltu va aสผlaa rizqika aftartu, fagโfirliy ma qoddamtu va maa axxortu birohmatika yaa arhamar roohimiyn.</b>
    -------------------------------------------------------------------------------------------------
    ` + `Maสผnosi: Ey Alloh, ushbu Roโzamni Sen uchun tutdim va Senga iymon keltirdim va Senga tavakkal qildim va bergan rizqing bilan iftor qildim. Ey mehribonlarning eng mehriboni, mening avvalgi va keyingi gunohlarimni magโfirat qilgil.
    `
    ctx.replyWithHTML(text).then()  
})
bot.action('Taroveh tasbehi', ctx =>{
    let text = `<b>โSubhaana zil mulki val malakuut, subhaana zil สผizzati val สผazomati val qudroti val kibriyaai val jabaruut. Subhaanal malikil hayyillaziy laa yamuut. Subbuuhun qudduusur Robbunaa va Robbul malaaikati var-ruuh, Laa ilaaha illalohu nastagโfirulloh, nas-alukal jannata va naสผuuzu bika minan naarโ.</b>
    -----------------------------------------------------------------------------------------------------
    ` + `Maสผnosi: โMulk va malakut Egasini poklab yod etaman! Izzat, buyuklik, qudrat, ulugโvorlik va hukmronlik Egasini poklab yod etaman! Hargiz oโlmaydigan Hayyni, Malikni poklab yod etaman! U Zot Subbuhdir, Quddusdir, bizning Robbimizdir, farishtalarning va Ruhning Robbidir. Allohdan Oโzga iloh yoโq! Allohdan magโfirat soโraymiz. Sendan jannat soโraymiz va doโzaxdan Oโzingdan panoh tilaymizโ.
    `
    ctx.replyWithHTML(text).then()  
})
// bot.launch()