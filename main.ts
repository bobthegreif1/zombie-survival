function addZombie () {
    zombieNumber = randint(0, zombieImgs.length - 1)
    zombie2 = sprites.create(zombieImgs[zombieNumber], SpriteKind.Enemy)
    zombie2.follow(oldLady, 15)
    tiles.placeOnRandomTile(zombie2, sprites.castle.tilePath5)
}
info.onCountdownEnd(function () {
    wave = wave + 1
    game.splash("The army came!!", "You are saved,")
    game.over(true)
    game.splash("WAVE" + wave + "IS COMING")
    nextWave()
})
function nextWave () {
    info.startCountdown(30)
    if (wave == 1) {
        for (let index = 0; index < 3; index++) {
            addZombie()
        }
    } else if (wave == 2) {
        for (let index = 0; index < 3; index++) {
            addZombie()
        }
    } else if (wave == 3) {
        for (let index = 0; index < 3; index++) {
            addZombie()
        }
    } else if (wave == 4) {
        for (let index = 0; index < 2; index++) {
            addZombie()
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash(" Awww yeah uh huh I am bitten!!,", "I'l turn into a zombie!!!")
    game.over(false)
})
let randomSaying = ""
let randomSayingNumber = 0
let randomZombie: Sprite = null
let randomZombieNumber = 0
let zombie: Sprite[] = []
let zombie2: Sprite = null
let zombieNumber = 0
let zombieImgs: Image[] = []
let wave = 0
wave = 1
zombieImgs = [
img`
    ...cccccccccccccc...
    ..c67777777777777c..
    ..c67777777777777c..
    .cc222277777777772c.
    c2222222777f77f7222c
    c222222277fd77df222c
    c222222277ff77ff222c
    .c2222277777777772c.
    ..c67777777dfffd7c..
    ..c67777777d777d7c..
    ..c67777777dd7dd7c..
    ...c677777777777c...
    ..c67777777777777c..
    ..c677cc777777777cc.
    ..c67667c7777777767c
    ..c67667c7777777767c
    ..c677cc777777777cc.
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ...cc677cccc677cc...
    ....ceeec...cce.....
    ....ceeec....c......
    .....ccc.....e......
    `,
img`
    .....aaaaaaaaaaa...
    ..aaaaaaaaaaaaaaa..
    .aaaaaaaaaaaaaaaaa.
    aaaaaaa7aaaaaaaaaaa
    aaaaa77777aaaaa7aaa
    aaaa77777c7777c7aa.
    aaa7777777f77f77aa.
    aa11777777f77f77c..
    aa11417777777771c..
    ac11114444444141c..
    .c11141114411141c..
    .c11114111411111c..
    ..c677711111414c...
    .c67777771411177c..
    .c677cc777111e77cc.
    .c67667c7effdee767c
    .c67667c7f..d.e767c
    .c677ccdf......ecc.
    .c67777ef.....fec..
    .c67777ef.df.fe7c..
    .c67777eefdfdee7c..
    .c677772eeeeee27c..
    .c6777727e77e277c..
    .c67777777777277c..
    ..cc677cccc677cc...
    ...c677c..c677c....
    ...c677c..c677c....
    ....ccc....ccc.....
    `,
img`
    .......cccccccc....
    ...cccc77777777c...
    ..c4b4477777777c...
    .cbb4bb77777777c...
    .c44bb76ffff6fff...
    .cb4b77ffff7ffff...
    c63d777ffff7ffff...
    c67377777777777c...
    c6737777fff7777c...
    c67777777777777c...
    c67777777777777c...
    .c677777777777c....
    c6777f677777777c...
    c6777cc76777777cc..
    c677667cf67777767c.
    c677667ce77777767c.
    c6777cc7e776777cc..
    c6777777777f677c...
    c6777777777e677c...
    c6777777777ef67c...
    c6777777777ee77c...
    c67777777777e77c...
    c67777777777777c...
    .cc6677cc6677cc....
    ....cd....cd.......
    ....cd....cd.......
    ...c.cd..c.cd......
    ...................
    ...................
    `,
img`
    .........7777..........
    .......7777777...77....
    ...77777777777777777...
    ..7777777777777777777..
    .777777777777777777777.
    7777777777777777777777.
    77777777777777777777777
    77777777777777777777777
    7777777777777777777777.
    .777777777777f7ff7777..
    .77771177777777ff77c...
    7777711417777777771c...
    7777c11114444444141c...
    .777c11141114411141c...
    ..77c11114111411111c...
    .....c677711111414c....
    ....c67777771411177c...
    ....c67777777111777cc..
    ....e6e77777777e77767c.
    .....e.e777eeee.e77e7c.
    ........eee3333d3eecc..
    .............3.........
    ..........d3ddd33......
    .............d.........
    ....ee....eeee.eeeee...
    ....c6eeee7777e7777c...
    ....c67777777777777c...
    .....cc677cccc677cc....
    ......cbddc..cbddc.....
    ......cbddc..cbddc.....
    .......ccc....ccc......
    `,
img`
    ....fffffffff......
    ..ffeeeeeeeeeff....
    .feeeeeeeeeeeeef...
    fe2eeeeeeeeeeeef...
    feeeeeeeeeeeeeef...
    feeeeeee2eeee22c...
    feeeeeeeefcdf22c...
    feeeeeeedfccfd2c...
    feee2222cccccc2c...
    c6222222cccccc2c...
    c6222222dcddcd2c...
    c62222222222222c...
    .c622222222222c....
    c22222222222221c...
    c2222cc22222221ccc.
    c222667c2222221c67c
    c222667c2222222c67c
    c2222cc22222221ccc.
    c22222222222221c...
    c22222222222221c...
    c22e24222222221c...
    c22227222222221c...
    c22222222bbb222c...
    c22227222222221c...
    .c22222cc22221c....
    ..ccbbc..ccbbc.....
    ..ccbbc..ccbbc.....
    ...ccc....ccc......
    `,
img`
    ...cccccccccccccc....
    ..c67777777777777c...
    ..c67777777777777c...
    .cc1111777cccccc71c..
    c111111177bdd2db111c.
    c111111177b3d3db111c.
    c1111111777bbbb7111c.
    .c1111177777777771c..
    ..c6777777dccc777c...
    ..c6777777cccc777c...
    ..c6777777eeee777c...
    ...c6777777ee777c....
    ..fffffff117e711ff...
    ..ffffccff11e11fffcc.
    ..fff667cf11c11fff67c
    ..fff667cff1c1ffff67c
    ..ffffccfff1f1f22fcc.
    ..ffffffffffffffff...
    ..ffffffffffffffff...
    ..fffffffff2f2ffff...
    ..ffffffffffffffff...
    ..ffffffffffffffff...
    ..fffffffff2f2ffff...
    ...ffffffffffffff....
    ......bb.....bb......
    ......bd.....bd......
    ......bd.....bd......
    `,
img`
    ...cccccc.......
    ..c444bbbc......
    .c44bbb44bccccc.
    c6b4444bbb22222c
    c6bb4bbb4b22222c
    c63b4b44b322222c
    c623b4b22322222c
    c6233322ff22ff2c
    c62323222f22f22c
    c62322222222222c
    c62222222ccc222c
    c6222222c222c22c
    c62222222222222c
    .c622222222222c.
    eeee22eeeeee222e
    eeee22eeeeee222e
    eeee22eeeeee222e
    cc2222222222222c
    cc2c5522222c5d2c
    cc2c5522222c552c
    cc2222222222222c
    cc2222222222222c
    cc222cccccccc22c
    cc2222cccccc222c
    cc2222222222222c
    .cc222cccc222cc.
    ..ceeec..ceeec..
    ..ceeec..ceeec..
    ...ccc....ccc...
    `,
img`
    ....fffffffff...
    ..ffeeeeeeeeeff.
    .feeeeeeeeeeeeef
    feeeeeeeeeeeeeef
    feeeeeeeeeeeeeef
    feeeeee6ffff6fff
    feeeeeeffffeffff
    feeeeeeffff7ffff
    feee77777777777c
    c67777777ccc777c
    c6777777c777c77c
    c67777777777777c
    .c677777777777c.
    cccc22cccccc22cc
    cccc22cccccc22cc
    cccc22cccccc22cc
    cc2222222222222c
    cc2c5522222c552c
    cc2c5522222c552c
    cc2222222222222c
    cc2222222222222c
    cc2222222222222c
    cc2222222222222c
    cc2222222222222c
    .cc222cccc222cc.
    ..cc22c..cc22c..
    ..cc22c..cc22c..
    ...ccc....ccc...
    `,
img`
    .....22222222222...
    ..222222222222222..
    .22222222222222222.
    2222222222222222222
    2222222222222222222
    222222222c2222c222.
    2222222222f22f2222.
    2222222222f22f22c..
    2222222222222222c..
    2222222222222222c..
    .222222222222222c..
    .222222222222222c..
    ..c622222222222c...
    .c62222222222222c..
    .c622cc2222e2e22c..
    .c62667ce22222ee...
    .c62667c22222ee....
    .c622cc2222e2eede..
    .c6222222e22eee....
    .c622222222eeeee...
    .c6222222222eeede..
    .c6222222e2eee7dc..
    .c6222222222ee77c..
    .c622222222e7e77c..
    ..cc622cccc677cc...
    ...fffcf..fffcf....
    ...fffcf..fffcf....
    ....fff....fff.....
    `,
img`
    ...cccccccccccccc...
    ..c62222222222222c..
    ..c62222222222222c..
    .cc2222222f22222f2c.
    c222222222ff222ff22c
    c22222222225f2f5222c
    c222222222222222222c
    .c2222222222222222c2
    ..c6222222dffff22c22
    ..c622222dd222222c22
    ..c62222222222222c22
    ...c622222222222c222
    ..c22222222222221c22
    ..c2222cc22222221ccc
    ..c222667c2222221c67
    ..c222667c2222222c67
    ..c2222cc22222222ccc
    ..c22222222222222c..
    ..c22222222222222c..
    ..c22e24222222222c..
    ..c22227222222222c..
    ..c22222222bbb222c..
    ..c22227222222221c..
    ...c22222cc22221c...
    ....ceeec...cce.....
    ....ceeec....c......
    .....ccc.....e......
    `
]
let zombieSayings = [
"Grrrrr",
"Brains",
"Eat your brainss",
"Arrrrr",
"Boooo",
"Pooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
]
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level_1`)
nextWave()
game.onUpdateInterval(1000, function () {
    zombie = sprites.allOfKind(SpriteKind.Enemy)
    randomZombieNumber = randint(0, zombie.length - 1)
    randomZombie = zombie[randomZombieNumber]
    randomSayingNumber = randint(0, zombieSayings.length - 1)
    randomSaying = zombieSayings[randomSayingNumber]
    randomZombie.say(randomSaying, 3000 )
})
