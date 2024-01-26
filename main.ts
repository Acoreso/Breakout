namespace SpriteKind {
    export const OtherPlayer = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const MyProjectiles = SpriteKind.create()
    export const BossProjectile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.OtherPlayer, SpriteKind.Food, function (sprite, otherSprite) {
    ListValue = list._pickRandom()
    if (ListValue == 1) {
        sprites.destroy(otherSprite, effects.confetti, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(10)
        info.player2.changeLifeBy(10)
    }
    if (ListValue == 2) {
        sprites.destroy(otherSprite, effects.halo, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(25)
        info.player2.changeLifeBy(25)
    }
    if (ListValue == 3) {
        sprites.destroy(otherSprite, effects.coolRadial, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(50)
        info.player2.changeLifeBy(50)
    }
    if (ListValue == 4) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(100)
        info.player2.changeLifeBy(100)
    }
    if (ListValue == 5) {
        sprites.destroy(otherSprite, effects.rings, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . d e e e d . . . . . . 
        . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
        . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
        . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
        . . 4 4 . 4 4 4 4 4 . 4 4 . . . 
        . . d d . f f f f f . d d . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 4 e e e e e . . . . . . 
        . . . 4 f d e e e d f 4 . . . . 
        . . . 4 f 4 4 4 4 4 f 4 4 . . . 
        . . . 4 f 4 4 4 4 4 f 4 4 4 . . 
        . . . . . 4 4 4 4 4 . . d d . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e 4 . . . . . 
        . . . 4 f d e e e d f 4 . . . . 
        . . 4 4 f 4 4 4 4 4 f 4 . . . . 
        . 4 4 4 f 4 4 4 4 4 f 4 . . . . 
        . d d . . 4 4 4 4 4 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    200,
    true
    )
    Direction1 = 0
})
info.onScore(11, function () {
    tiles.setCurrentTilemap(tilemap`level19`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.OtherPlayer, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.MyProjectiles, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    sprites.destroy(sprite, effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    if (can_attack == 1) {
        statusbar.value += -1
    } else {
        info.changeLifeBy(-2)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `],
    100,
    false
    )
    info.changeLifeBy(-10)
    timer.after(400, function () {
        sprites.destroy(otherSprite, effects.ashes, 500)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (can_attack == 0) {
        if (controller.down.isPressed()) {
            animation.runImageAnimation(
            Player_1,
            [img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eedddddee.......
                ........ed1fdf1de.......
                .........d1fdf1d........
                .........dfdddfd........
                ..........dfffd.........
                ...bb..44f44444f44......
                ...b2..44f44444f44......
                ...b.2.44f44444f44......
                ......244.44444.44......
                .......2d.fffff.dd......
                ........2.44.44.........
                .........244.44.........
                ..........b4.44.........
                ..........ff.ff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eedddddee.......
                ........ed1fdf1de.......
                .........d1fdf1d........
                .........dfdddfd........
                ..........dfffd.........
                .......44fb4444f44......
                .......44244444f44......
                .......42f44444f44......
                .......24.44444.44......
                ......2dd.fffff.dd......
                .....2....44.44.........
                ...b2.....44.44.........
                ...bbb....44.44.........
                ..........ff.ff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eedddddee.......
                ........ed1fdf1de.......
                .........d1fdf1d........
                .........dfdddfd........
                ..........dfffd.........
                .........fb4444f44......
                ........4442444f44......
                ........444d244f44......
                ........444dd24.44......
                ..........ffff2.dd......
                ..........44.442.b......
                ..........44.44.2b......
                ..........44.44.bb......
                ..........ff.ff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eedddddee.......
                ........ed1fdf1dbbb.....
                .........d1fdf1d.2b.....
                .........dfdddfd2.......
                ..........dfffd2........
                ........4f44442f44......
                ........4444d24f44......
                ........4444dd4f44......
                ..........4b444.44......
                ..........fffff.dd......
                ..........44.44.........
                ..........44.44.........
                ..........44.44.........
                ..........ff.ff.........
                `],
            100,
            false
            )
            can_attack = 1
            timer.after(400, function () {
                can_attack = 0
            })
        }
        if (controller.up.isPressed()) {
            animation.runImageAnimation(
            Player_1,
            [img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eeeeeeeee.......
                ........eeeeeeeee.......
                .........eeeeeee........
                ..........eeeee.........
                ..........deeed.....bbb.
                .......44f44444f44...2b.
                .......44f44444f44..2...
                .......44f44444f44.2....
                .......44.44444.442.....
                .......dd.fffff.d2......
                ..........44.44.2.......
                ..........44.44b........
                ..........44.44.........
                ..........ff.ff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eeeeeeeee..bbb..
                ........eeeeeeeee...2b..
                .........eeeeeee...2....
                ..........eeeee...2d....
                ..........deeed..244....
                .......44f44444f4444....
                .......44f444444444.....
                .......44f4444444.......
                .......44.44444.........
                .......dd.fffff.........
                ..........44.44.........
                ..........44.44.........
                ..........44.44.........
                ..........ff.ff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ......bbeeeeeeeee.......
                ......b2eeeeeeeee.......
                ......b.2eeeeeee........
                .........2eeeee.........
                ..........deeed44.......
                .......44f44444f4.......
                .......44f44444f4.......
                .......44f44444f4.......
                .......44.44444.........
                .......dd.fffff.........
                ..........44.44.........
                ..........44.44.........
                ..........44.44.........
                ..........ff.ff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eeeeeeeee.......
                ........eeeeeeeee.......
                ...bb....eeeeeee........
                ...b2.....eeeee.........
                ...b.2....deeed.........
                ......244f44444f4.......
                .......44f44444f4.......
                .......44f44444f4.......
                .......44.44444.........
                .......dd.fffff.........
                ..........44.44.........
                ..........44.44.........
                ..........44.44.........
                ..........ff.ff.........
                `],
            100,
            false
            )
            can_attack = 1
            timer.after(400, function () {
                can_attack = 0
            })
        }
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            Player_1,
            [img`
                ........eeeeeee.........
                .......eeeeeeeee........
                ........ddddeeee........
                ........ddf1deee........
                ........ddf1deee........
                .......2dddddeee........
                ......2d.fdddee.........
                .....2dd44444...........
                ....2...44444...........
                ...2......444...........
                ..b.......fff...........
                ..........4dd...........
                ..........4dd...........
                ..........44............
                .........f44............
                .........fff............
                `,img`
                ........eeeeeee.........
                .......eeeeeeeee........
                ........ddddeeee........
                ........ddf1deee........
                .bb.....ddf1deee........
                .b2.....dddddeee........
                .b.2.....fdddee.........
                ....2....4444...........
                .....2d444444...........
                ......244.444...........
                .......2..fff...........
                ........b.4dd...........
                ..........4dd...........
                ..........44............
                .........f44............
                .........fff............
                `,img`
                ........eeeeeee.........
                .......eeeeeeeee........
                ........ddddeeee........
                ........ddf1deee........
                ........ddf1deee........
                ........dddddeee........
                .........fdddee.........
                ........44444...........
                .......442444...........
                ......442.444...........
                ......d2..fff...........
                ......2...4dd...........
                .....2....4dd...........
                ...b2.....44............
                ...bbb...f44............
                .........fff............
                `],
            100,
            false
            )
            can_attack = 1
            timer.after(400, function () {
                can_attack = 0
            })
        }
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            Player_1,
            [img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eeeedddd........
                ........eeed1fdd........
                ........eeed1fdd........
                ........eeeddddd2.......
                .........eedddf.d2......
                ...........44444dd2.....
                ...........44444...2....
                ...........444......2...
                ...........fff.......b..
                ...........dd4..........
                ...........dd4..........
                ............44..........
                ............44f.........
                ............fff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eeeedddd........
                ........eeed1fdd........
                ........eeed1fdd.....bb.
                ........eeeddddd.....2b.
                .........eedddf.....2.b.
                ...........4444....2....
                ...........444444d2.....
                ...........444.442......
                ...........fff..2.......
                ...........dd4.b........
                ...........dd4..........
                ............44..........
                ............44f.........
                ............fff.........
                `,img`
                .........eeeeeee........
                ........eeeeeeeee.......
                ........eeeedddd........
                ........eeed1fdd........
                ........eeed1fdd........
                ........eeeddddd........
                .........eedddf.........
                ...........44444........
                ...........444244.......
                ...........444.244......
                ...........fff..2d......
                ...........dd4...2......
                ...........dd4....2.....
                ............44.....2b...
                ............44f...bbb...
                ............fff.........
                `],
            100,
            false
            )
            can_attack = 1
            timer.after(400, function () {
                can_attack = 0
            })
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    ChainBall = sprites.create(assets.image`myImage`, SpriteKind.MyProjectiles)
    ChainBall.setVelocity(randint(-50, 50), randint(-50, 50))
    ChainBall.setPosition(Player_2.x, Player_2.y)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_2,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f d d d d d f f . . . . 
        . . . f d 1 f d f 1 d f . . . . 
        . . . . d 1 f d f 1 d . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . . . d f f f d . . . . . . 
        . . f f f f f f f f f f f . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . f f f f f f f f f f f . . . 
        . . 1 1 . 1 1 1 1 1 . 1 1 . . . 
        . . d d . f f f f f . d d . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f d d d d d f f . . . . 
        . . . f d 1 f d f 1 d f . . . . 
        . . . . d 1 f d f 1 d . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . f f d f f f d f f . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . f f f . f f f d d f . . . . . 
        . d d . . 1 1 1 d d . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f d d d d d f f . . . . 
        . . . f d 1 f d f 1 d f . . . . 
        . . . . d 1 f d f 1 d . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . f f d f f f d f f . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . f f d d f f f . f f f . . 
        . . . . . d d 1 1 1 . . d d . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . . . . 1 f . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    200,
    true
    )
    Direction2 = 1
})
scene.onOverlapTile(SpriteKind.OtherPlayer, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
function Animation () {
    moving = controller.right.isPressed() || (controller.left.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving) && Direction1 == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_1)
        animation.runImageAnimation(
        Player_1,
        [img`
            . . . . e e e e e e e . . . . . 
            . . . e e e e e e e e e . . . . 
            . . . e e e e e e e e e . . . . 
            . . . e e e e e e e e e . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . d e e e d . . . . . . 
            . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
            . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
            . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
            . . 4 4 . 4 4 4 4 4 . 4 4 . . . 
            . . d d . f f f f f . d d . . . 
            . . . . . 4 4 . 4 4 . . . . . . 
            . . . . . 4 4 . 4 4 . . . . . . 
            . . . . . 4 4 . 4 4 . . . . . . 
            . . . . . f f . f f . . . . . . 
            `],
        100,
        false
        )
    }
    if (!(moving) && Direction1 == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_1)
        animation.runImageAnimation(
        Player_1,
        [img`
            . . . . e e e e e e e . . . . . 
            . . . e e e e e e e e e . . . . 
            . . . e e d d d d d e e . . . . 
            . . . e d 1 f d f 1 d e . . . . 
            . . . . d 1 f d f 1 d . . . . . 
            . . . . d f d d d f d . . . . . 
            . . . . . d f f f d . . . . . . 
            . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
            . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
            . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
            . . 4 4 . 4 4 4 4 4 . 4 4 . . . 
            . . d d . f f f f f . d d . . . 
            . . . . . 4 4 . 4 4 . . . . . . 
            . . . . . 4 4 . 4 4 . . . . . . 
            . . . . . 4 4 . 4 4 . . . . . . 
            . . . . . f f . f f . . . . . . 
            `],
        100,
        false
        )
    }
    if (!(moving) && Direction1 == 2) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_1)
        animation.runImageAnimation(
        Player_1,
        [img`
            . . . e e e e e e e . . . . . . 
            . . e e e e e e e e e . . . . . 
            . . . d d d d e e e e . . . . . 
            . . . d d f 1 d e e e . . . . . 
            . . . d d f 1 d e e e . . . . . 
            . . . d d d d d e e e . . . . . 
            . . . . f d d d e e . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . d 4 4 4 4 4 4 . . . . . . . . 
            . d 4 4 . 4 4 4 . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . 4 d d . . . . . . . . 
            . . . . . 4 d d . . . . . . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . f 4 4 . . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `],
        100,
        false
        )
    }
    if (!(moving) && Direction1 == 3) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_1)
        animation.runImageAnimation(
        Player_1,
        [img`
            . . . . . . e e e e e e e . . . 
            . . . . . e e e e e e e e e . . 
            . . . . . e e e e d d d d . . . 
            . . . . . e e e d 1 f d d . . . 
            . . . . . e e e d 1 f d d . . . 
            . . . . . e e e d d d d d . . . 
            . . . . . . e e d d d f . . . . 
            . . . . . . . . 4 4 4 4 . . . . 
            . . . . . . . . 4 4 4 4 4 4 d . 
            . . . . . . . . 4 4 4 . 4 4 d . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . d d 4 . . . . . 
            . . . . . . . . d d 4 . . . . . 
            . . . . . . . . . 4 4 . . . . . 
            . . . . . . . . . 4 4 f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        false
        )
    }
    moving2 = controller.player2.isPressed(ControllerButton.Left) || (controller.player2.isPressed(ControllerButton.Right) || (controller.player2.isPressed(ControllerButton.Up) || controller.player2.isPressed(ControllerButton.Down)))
    if (!(moving2) && Direction2 == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_2)
        animation.runImageAnimation(
        Player_2,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . d f f f d . . . . . . 
            . . f f f f f f f f f f f . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . f f f f f f f f f f f . . . 
            . . 1 1 . 1 1 1 1 1 . 1 1 . . . 
            . . d d . f f f f f . d d . . . 
            . . . . . 1 1 . 1 1 . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . 1 1 . 1 1 . . . . . . 
            . . . . . f f . f f . . . . . . 
            `],
        100,
        false
        )
    }
    if (!(moving2) && Direction2 == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_2)
        animation.runImageAnimation(
        Player_2,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f d d d d d f f . . . . 
            . . . f d 1 f d f 1 d f . . . . 
            . . . . d 1 f d f 1 d . . . . . 
            . . . . d f d d d f d . . . . . 
            . . . . . d f f f d . . . . . . 
            . . f f f f f f f f f f f . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . f f f f f f f f f f f . . . 
            . . 1 1 . 1 1 1 1 1 . 1 1 . . . 
            . . d d . f f f f f . d d . . . 
            . . . . . 1 1 . 1 1 . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . 1 1 . 1 1 . . . . . . 
            . . . . . f f . f f . . . . . . 
            `],
        100,
        false
        )
    }
    if (!(moving2) && Direction2 == 2) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_2)
        animation.runImageAnimation(
        Player_2,
        [img`
            . . . f f f f f f f . . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . d d d d f f f f . . . . . 
            . . . d d f 1 d f f f . . . . . 
            . . . d d f 1 d f f f . . . . . 
            . . . d d d d d f f f . . . . . 
            . . . . f d d d f f . . . . . . 
            . . . . 1 1 1 1 . . . . . . . . 
            . d 1 f 1 f f f . . . . . . . . 
            . d 1 f . 1 1 1 . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . f d d . . . . . . . . 
            . . . . . 1 d d . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `],
        100,
        false
        )
    }
    if (!(moving2) && Direction2 == 3) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_2)
        animation.runImageAnimation(
        Player_2,
        [img`
            . . . . . . f f f f f f f . . . 
            . . . . . f f f f f f f f f . . 
            . . . . . f f f f d d d d . . . 
            . . . . . f f f d 1 f d d . . . 
            . . . . . f f f d 1 f d d . . . 
            . . . . . f f f d d d d d . . . 
            . . . . . . f f d d d f . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . f f f 1 f 1 d . 
            . . . . . . . . 1 1 1 . f 1 d . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . d d f . . . . . 
            . . . . . . . . d d 1 . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        false
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . e e e e e e e e e . . . . . 
        . . . d d d d e e e e . . . . . 
        . . . d d f 1 d e e e . . . . . 
        . . . d d f 1 d e e e . . . . . 
        . . . d d d d d e e e . . . . . 
        . . . . f d d d e e . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . d 4 4 4 4 4 4 4 . . . . . . 
        . . d 4 4 f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 4 4 f . . . 
        . . . . . 4 4 . 4 4 4 4 f . . . 
        . . . . 4 4 4 . . . . 4 f . . . 
        . . . f 4 4 . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . e e e e e e e . . . . . . 
        . . e e e e e e e e e . . . . . 
        . . . d d d d e e e e . . . . . 
        . . . d d f 1 d e e e . . . . . 
        . . . d d f 1 d e e e . . . . . 
        . . . d d d d d e e e . . . . . 
        . . . . f d d d e e . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . d 4 4 4 4 4 4 . . . . . . . 
        . . d 4 4 4 4 d d 4 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . 4 4 4 . . . . . 
        . . . . 4 4 4 . . 4 4 4 . . . . 
        . . . f 4 4 . . . . 4 4 f . . . 
        . . . f f f . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . e e e e e e e e e . . . . . 
        . . . d d d d e e e e . . . . . 
        . . . d d f 1 d e e e . . . . . 
        . . . d d f 1 d e e e . . . . . 
        . . . d d d d d e e e . . . . . 
        . . . . f d d d e e . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . d 4 4 4 4 4 4 4 . . . . . . 
        . . d 4 4 f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . 4 4 f . . . 
        . . . . . . . . . . f f f . . . 
        `],
    100,
    true
    )
    Direction1 = 2
})
scene.onHitWall(SpriteKind.MyProjectiles, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.BossProjectile, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `],
    100,
    false
    )
    timer.after(400, function () {
        sprites.destroy(sprite, effects.ashes, 500)
    })
})
info.onScore(10, function () {
    tiles.setCurrentTilemap(tilemap`level22`)
    ZombieBoss = sprites.create(img`
        ........855888888888.....
        ........855888888888.....
        ......88888888888888.....
        ......ff66ff6666669f.....
        ......f96ff96fff666f.....
        .....fff6666f111f66f.....
        ....f111f966f1f1f66f.....
        ....f1f1f666f111f96f.....
        ....f111f6666fff66f......
        .....fff6666666666f......
        ......f6121216666f.......
        ......ff22222269f8f......
        ........f121266f888f.....
        .......ffffffff5588f.....
        .......f88888f855f88f....
        .......f88888f888f88f....
        ......f88888ff8888f88f...
        ......f88888f88888f88f...
        .......f8888f888888f88f..
        .......f8888f888888f88f..
        .......f8888f888888f8ff..
        ......f66fffddfff8f666f..
        .....f66ff8888888f6f6f6..
        .....f6ff888ffff8886f6...
        ......f2e88f....f88fff...
        ......fe12f.....f88f.....
        ......f212f......f66f....
        ......f212ff......f66f...
        ......feeeeef.....fffef..
        ......feeeeeef...feeeef..
        ......feeeeeef..feeeef...
        .......ffffff...fffff....
        `, SpriteKind.Boss)
    animation.runImageAnimation(
    ZombieBoss,
    [img`
        ........855888888888.....
        ........855888888888.....
        ......88888888888888.....
        ......ff66ff6666669f.....
        ......f96ff96fff666f.....
        .....fff6666f111f66f.....
        ....f111f966f1f1f66f.....
        ....f1f1f666f111f96f.....
        ....f111f6666fff66f......
        .....fff6666666666f......
        ......f6121216666f.......
        ......ff22222269f8f......
        ........f121266f888f.....
        .......ffffffff5588f.....
        .......f88888f855f88f....
        .......f88888f888f88f....
        ......f88888ff8888f88f...
        ......f88888f88888f88f...
        .......f8888f888888f88f..
        .......f8888f888888f88f..
        .......f8888f888888f8ff..
        ......f66fffddfff8f666f..
        .....f66ff8888888f6f6f6..
        .....f6ff888ffff8886f6...
        ......f2e88f....f88fff...
        ......fe12f.....f88f.....
        ......f212f......f66f....
        ......f212ff......f66f...
        ......feeeeef.....fffef..
        ......feeeeeef...feeeef..
        ......feeeeeef..feeeef...
        .......ffffff...fffff....
        `,img`
        ........855888888888.....
        ........855888888888.....
        ......88888888888888.....
        ......ff66ff6666669f.....
        ......f96ff96fff666f.....
        .....fff6666f111f66f.....
        ....f111f966f1f1f66f.....
        ....f1f1f666f111f96f.....
        ....f111f6666fff66f......
        .....fff6666666666f......
        ......f6121216666f.......
        ......ff22222269f8f......
        ........f121266f888f.....
        .......ffffffff5588f.....
        .......f88888f855f88f....
        .......f88888f888f88f....
        ......f88888ff8888f88f...
        ......f88888f88888f88f...
        .......f8888f888888f88f..
        .......f8888f888888f88f..
        .......f8888f888888f8ff..
        ......f66fffddfff8f666f..
        .....f66ff8888888f6f6f6..
        .....f6ff888ffff8886f6...
        ......f2e88f....f88fff...
        .....fe122f.....f88f.....
        ....f211ef.......f66f....
        ....f212ff........f66f...
        ....feeeeef.......fffef..
        ....feeeeeef.....feeeef..
        ....feeeeeef....feeeef...
        .....ffffff.....fffff....
        `,img`
        ........855888888888.....
        ........855888888888.....
        ......88888888888888.....
        ......ff66ff6666669f.....
        ......f96ff96fff666f.....
        .....fff6666f111f66f.....
        ....f111f966f1f1f66f.....
        ....f1f1f666f111f96f.....
        ....f111f6666fff66f......
        .....fff6666666666f......
        ......f6121216666f.......
        ......ff22222269f8f......
        ........f121266f888f.....
        .......ffffffff5588f.....
        .......f88888f855f88f....
        .......f88888f888f88f....
        ......f88888ff8888f88f...
        ......f88888f88888f88f...
        .......f8888f888888f88f..
        .......f8888f888888f88f..
        .......f8888f888888f8ff..
        ......f66fffddfff8f666f..
        .....f66ff8888888f6f6f6..
        .....f6ff888ffff8886f6...
        ......f2e88f....f88fff...
        .....fe122f....f88f......
        ....f211ef.....f66f......
        ....f212ff.....f66f......
        ....feeeeef....ffff......
        ....feeeeeef..feeeef.....
        ....feeeeeef.feeeeef.....
        .....ffffff..ffffff......
        `],
    200,
    true
    )
    tiles.placeOnTile(ZombieBoss, tiles.getTileLocation(50, 50))
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 750
    statusbar.attachToSprite(ZombieBoss)
    statusbar.setColor(8, 10)
    ZombieBoss.follow(Player_2, 42)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_2,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . d f f f d . . . . . . 
        . . f f f f f f f f f f f . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . f f f f f f f f f f f . . . 
        . . 1 1 . 1 1 1 1 1 . 1 1 . . . 
        . . d d . f f f f f . d d . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f d f f f d f f . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . f f f f f f f . f f f . . 
        . . . . . 1 1 1 1 1 . . d d . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f d f f f d f f . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . f f f . f f f f f f f . . . . 
        . d d . . 1 1 1 1 1 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    200,
    true
    )
    Direction2 = 0
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(ZombieBoss, effects.blizzard, 500)
    info.changeScoreBy(1)
})
info.onScore(7, function () {
    tiles.setCurrentTilemap(tilemap`level12`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . . e e e e d d d d . . . 
        . . . . . e e e d 1 f d d . . . 
        . . . . . e e e d 1 f d d . . . 
        . . . . . e e e d d d d d . . . 
        . . . . . . e e d d d f . . . . 
        . . . . . . . 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 4 4 d . . 
        . . . . . . f f f f f 4 4 d . . 
        . . . f 4 4 4 4 . 4 4 . . . . . 
        . . . f 4 4 4 4 . 4 4 . . . . . 
        . . . f 4 . . . . 4 4 4 . . . . 
        . . . . . . . . . . 4 4 f . . . 
        . . . . . . . . . . f f f . . . 
        `,img`
        . . . . . . e e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . . e e e e d d d d . . . 
        . . . . . e e e d 1 f d d . . . 
        . . . . . e e e d 1 f d d . . . 
        . . . . . e e e d d d d d . . . 
        . . . . . . e e d d d f . . . . 
        . . . . . . . 4 4 4 4 4 . . . . 
        . . . . . . . 4 4 4 4 4 4 d . . 
        . . . . . . 4 d d 4 4 4 4 d . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . 4 4 . 4 4 . . . . . 
        . . . . . 4 4 4 . 4 4 . . . . . 
        . . . . 4 4 4 . . 4 4 4 . . . . 
        . . . f 4 4 . . . . 4 4 f . . . 
        . . . f f f . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . . e e e e d d d d . . . 
        . . . . . e e e d 1 f d d . . . 
        . . . . . e e e d 1 f d d . . . 
        . . . . . e e e d d d d d . . . 
        . . . . . . e e d d d f . . . . 
        . . . . . . . 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 4 4 d . . 
        . . . . . . f f f f f 4 4 d . . 
        . . . . . . 4 4 . 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . f 4 4 . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        `],
    100,
    true
    )
    Direction1 = 3
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f d d d d . . . 
        . . . . . f f f d 1 f d d . . . 
        . . . . . f f f d 1 f d d . . . 
        . . . . . f f f d d d d d . . . 
        . . . . . . f f d d d f . . . . 
        . . . . . . . f f f f 1 . . . . 
        . . . . . . 1 1 1 1 1 f f d . . 
        . . . . . . f f f f f 1 f d . . 
        . . . f 1 f 1 f . f f . . . . . 
        . . . f 1 f 1 f . 1 1 . . . . . 
        . . . f 1 . . . . f f f . . . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . . . . . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f d d d d . . . 
        . . . . . f f f d 1 f d d . . . 
        . . . . . f f f d 1 f d d . . . 
        . . . . . f f f d d d d d . . . 
        . . . . . . f f d d d f . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . f f f f f f d . . 
        . . . . . . 1 d d 1 1 1 1 d . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . 1 1 1 . 1 1 . . . . . 
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 . . . . 1 1 . . . . 
        . . . f f f . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f d d d d . . . 
        . . . . . f f f d 1 f d d . . . 
        . . . . . f f f d 1 f d d . . . 
        . . . . . f f f d d d d d . . . 
        . . . . . . f f d d d f . . . . 
        . . . . . . . f f f f 1 . . . . 
        . . . . . . 1 1 1 1 1 f f d . . 
        . . . . . . f f f f f 1 f d . . 
        . . . . . . f f . f 1 . . . . . 
        . . . . . 1 1 f f 1 f . . . . . 
        . . . . f f 1 1 f 1 . . . . . . 
        . . . f 1 1 . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        `],
    100,
    true
    )
    Direction2 = 3
})
info.onScore(1, function () {
    tiles.setCurrentTilemap(tilemap`level1`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (can_attack == 1) {
        sprites.destroy(sprite, effects.disintegrate, 500)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.OtherPlayer, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `],
    100,
    false
    )
    info.changeLifeBy(-10)
    timer.after(400, function () {
        sprites.destroy(otherSprite, effects.ashes, 500)
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e d d d d d e e . . . . 
        . . . e d 1 f d f 1 d e . . . . 
        . . . . d 1 f d f 1 d . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . . . d f f f d . . . . . . 
        . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
        . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
        . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
        . . 4 4 . 4 4 4 4 4 . 4 4 . . . 
        . . d d . f f f f f . d d . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e d d d d d e e . . . . 
        . . . e d 1 f d f 1 d e . . . . 
        . . . . d 1 f d f 1 d . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . 4 f d f f f d f 4 . . . . 
        . . 4 4 f 4 4 4 4 4 4 4 . . . . 
        . 4 4 4 f 4 4 4 d d 4 . . . . . 
        . d d . . 4 4 4 d d . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e d d d d d e e . . . . 
        . . . e d 1 f d f 1 d e . . . . 
        . . . . d 1 f d f 1 d . . . . . 
        . . . . d f d d d f d . . . . . 
        . . . 4 f d f f f d f 4 . . . . 
        . . . 4 4 4 4 4 4 4 f 4 4 . . . 
        . . . . 4 d d 4 4 4 f 4 4 4 . . 
        . . . . . d d 4 4 4 . . d d . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 4 4 . 4 4 . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    200,
    true
    )
    Direction1 = 1
})
info.onScore(3, function () {
    tiles.setCurrentTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.OtherPlayer, assets.tile`transparency16`, function (sprite, location) {
    info.player2.setLife(0)
})
info.onLifeZero(function () {
    sprites.destroy(Player_1, effects.ashes, 500)
    game.gameOver(false)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . . d d d d f f f f . . . . . 
        . . . d d f 1 d f f f . . . . . 
        . . . d d f 1 d f f f . . . . . 
        . . . d d d d d f f f . . . . . 
        . . . . f d d d f f . . . . . . 
        . . . . 1 f f f f . . . . . . . 
        . . d f f 1 1 1 1 1 . . . . . . 
        . . d f 1 f f f f f . . . . . . 
        . . . . . f f . f 1 f 1 f . . . 
        . . . . . 1 1 . f 1 f 1 f . . . 
        . . . . f f f . . . . 1 f . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . . d d d d f f f f . . . . . 
        . . . d d f 1 d f f f . . . . . 
        . . . d d f 1 d f f f . . . . . 
        . . . d d d d d f f f . . . . . 
        . . . . f d d d f f . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . d f f f f f f . . . . . . . 
        . . d 1 1 1 1 d d 1 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . 1 1 . 1 1 1 . . . . . 
        . . . . f f f . . f f f . . . . 
        . . . . 1 1 . . . . 1 1 f . . . 
        . . . f f f . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . . d d d d f f f f . . . . . 
        . . . d d f 1 d f f f . . . . . 
        . . . d d f 1 d f f f . . . . . 
        . . . d d d d d f f f . . . . . 
        . . . . f d d d f f . . . . . . 
        . . . . 1 f f f f . . . . . . . 
        . . d f f 1 1 1 1 1 . . . . . . 
        . . d f 1 f f f f f . . . . . . 
        . . . . . 1 f . f f . . . . . . 
        . . . . . f 1 f f 1 1 . . . . . 
        . . . . . . 1 f 1 1 f f . . . . 
        . . . . . . . . . . 1 1 f . . . 
        . . . . . . . . . . f f f . . . 
        `],
    100,
    true
    )
    Direction2 = 2
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`transparency16`, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.OtherPlayer, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.MyProjectiles, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbar.value += -3
    sprites.destroy(sprite, effects.ashes, 500)
})
function PowerUps () {
    Power_Up_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_1, tiles.getTileLocation(4, 22))
    Power_Up_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_2, tiles.getTileLocation(15, 16))
    Power_Up_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_3, tiles.getTileLocation(11, 4))
    Power_Up_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_4, tiles.getTileLocation(25, 1))
    Power_Up_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_5, tiles.getTileLocation(33, 27))
    Power_Up_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_6, tiles.getTileLocation(62, 8))
    Power_Up_7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_7, tiles.getTileLocation(19, 25))
    Power_Up_8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_8, tiles.getTileLocation(1, 62))
    Power_Up_9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_9, tiles.getTileLocation(58, 1))
    Power_Up_10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Power_Up_10, tiles.getTileLocation(18, 62))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    ListValue = list._pickRandom()
    if (ListValue == 1) {
        sprites.destroy(otherSprite, effects.confetti, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(10)
        info.player2.changeLifeBy(10)
    }
    if (ListValue == 2) {
        sprites.destroy(otherSprite, effects.halo, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(25)
        info.player2.changeLifeBy(25)
    }
    if (ListValue == 3) {
        sprites.destroy(otherSprite, effects.coolRadial, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(50)
        info.player2.changeLifeBy(50)
    }
    if (ListValue == 4) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.changeLifeBy(100)
        info.player2.changeLifeBy(100)
    }
    if (ListValue == 5) {
        sprites.destroy(otherSprite, effects.rings, 500)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
    }
})
info.player2.onLifeZero(function () {
    sprites.destroy(Player_2, effects.ashes, 500)
    game.gameOver(false)
})
function ZombieBossShoot (zombieBoss: Sprite) {
    if (true) {
        ShootInterval = 1000
        Gametime = game.runtime()
        if (Gametime - PreviousShot >= ShootInterval) {
            PreviousShot = Gametime
            speed = 50
            BossProjectile = sprites.create(img`
                . . . . . . . e e e e e . . . . 
                . . . . . e e 2 2 2 2 2 e . . . 
                . . . . e e 2 2 2 2 2 2 2 e . . 
                . . . . e 9 4 2 2 2 2 2 4 b e . 
                . . e e 9 9 4 4 2 2 2 2 4 9 b e 
                . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
                e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
                e 2 2 2 9 9 e e e e e e e 9 9 e 
                e 2 2 2 9 b e b b b e b e b 9 e 
                e 2 e e e e b b b b e b b e b e 
                e e 3 3 e e 2 2 2 2 e 2 2 e e e 
                e 3 3 e e e e e e e e e e e e e 
                e e e e e e e e e e e e e e e e 
                e e e e f f f e e e e f f f e e 
                . e e f b c c f e e f b c c f . 
                . . . . b b f . . . . b b f . . 
                `, SpriteKind.BossProjectile)
            BossProjectile.setVelocity(speed, 0)
            BossProjectile.setPosition(ZombieBoss.x, ZombieBoss.y)
            Angle = Math.atan2(Player_1.y - zombieBoss.y, Player_1.x - zombieBoss.x)
            BossProjectile.setVelocity(speed * Math.cos(Angle), speed * Math.sin(Angle))
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    info.setLife(0)
})
info.onScore(5, function () {
    tiles.setCurrentTilemap(tilemap`level10`)
})
info.onScore(8, function () {
    tiles.setCurrentTilemap(tilemap`level14`)
})
function EnemySpawn () {
    SpawnLocation = tiles.getTilesByType(sprites.dungeon.floorMixed)
    for (let index = 0; index < 5; index++) {
        EnemySprite = sprites.create(EnemyList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
        TargetPlayer = TargetList._pickRandom()
        if (TargetPlayer == 1) {
            EnemySprite.follow(Player_1, randint(40, 50))
        } else {
            EnemySprite.follow(Player_2, randint(40, 50))
        }
    }
}
let TargetPlayer = 0
let EnemySprite: Sprite = null
let SpawnLocation: tiles.Location[] = []
let Angle = 0
let BossProjectile: Sprite = null
let speed = 0
let PreviousShot = 0
let Gametime = 0
let ShootInterval = 0
let Power_Up_10: Sprite = null
let Power_Up_9: Sprite = null
let Power_Up_8: Sprite = null
let Power_Up_7: Sprite = null
let Power_Up_6: Sprite = null
let Power_Up_5: Sprite = null
let Power_Up_4: Sprite = null
let Power_Up_3: Sprite = null
let Power_Up_2: Sprite = null
let Power_Up_1: Sprite = null
let ZombieBoss: Sprite = null
let moving2 = false
let moving = false
let Direction2 = 0
let ChainBall: Sprite = null
let statusbar: StatusBarSprite = null
let Direction1 = 0
let ListValue = 0
let can_attack = 0
let TargetList: number[] = []
let EnemyList: Image[] = []
let list: number[] = []
let Player_2: Sprite = null
let Player_1: Sprite = null
game.splash("Breakout")
tiles.setCurrentTilemap(tilemap`level0`)
Player_1 = sprites.create(img`
    . . . . e e e e e e e . . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e d d d d d e e . . . . 
    . . . e d 1 f d f 1 d e . . . . 
    . . . . d 1 f d f 1 d . . . . . 
    . . . . d f d d d f d . . . . . 
    . . . . . d f f f d . . . . . . 
    . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 . 4 4 4 4 4 . 4 4 . . . 
    . . d d . f f f f f . d d . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
Player_2 = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f d d d d d f f . . . . 
    . . . f d 1 f d f 1 d f . . . . 
    . . . . d 1 f d f 1 d . . . . . 
    . . . . d f d d d f d . . . . . 
    . . . . . d f f f d . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . f f f f f f f f f f f . . . 
    . . 1 1 . 1 1 1 1 1 . 1 1 . . . 
    . . d d . f f f f f . d d . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.OtherPlayer)
tiles.placeOnTile(Player_1, tiles.getTileLocation(4, 1))
tiles.placeOnTile(Player_2, tiles.getTileLocation(5, 1))
controller.moveSprite(Player_1, 90, 90)
controller.player2.moveSprite(Player_2, 100, 100)
music.play(music.createSong(hex`001e000408020303001c0001dc00690000045e0100040000000000000000000005640001040003360000000400012004000800012508000c00011e0c001000012210001400011b14001800012218001c00011e1c002000012420002400012205001c000f0a006400f4010a0000040000000000000000000000000000000002060020002400011b06001c00010a006400f4016400000400000000000000000000000000000000021e0000000400011b08000c00011b10001400012518001c00012720002400011b`), music.PlaybackMode.LoopingInBackground)
splitScreen.setSplitScreenEnabled(true)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Player_1)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Player_2)
splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
PowerUps()
info.setLife(100)
info.player2.setLife(100)
info.setScore(0)
list = [
1,
2,
3,
4,
5
]
EnemyList = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 1 . . . . . . . 
    . . . . 6 9 6 6 6 e . . . . . . 
    . . . . 6 1 f 6 f 1 2 . . . . . 
    . . . . 6 1 1 6 1 1 6 . . . . . 
    . . . . 9 6 6 6 6 6 6 . . . . . 
    . . . . . 6 f f 6 9 . . . . . . 
    . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 . 4 4 4 4 4 . 4 4 . . . 
    . . 6 6 . f f f f f . 6 6 . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 9 1 . 1 2 . . . . . . 
    . . . . 6 1 e . 2 1 2 . . . . . 
    . . . . 6 f 2 . e 1 6 . . . . . 
    . . . . 9 6 6 e 6 6 6 . . . . . 
    . . . . . 6 f f 6 6 . . . . . . 
    . . 8 8 f 8 5 8 8 8 f 8 8 . . . 
    . . 8 8 f 8 8 8 8 8 f 8 8 . . . 
    . . 8 8 f 8 8 8 8 8 f 8 8 . . . 
    . . 8 8 . 8 8 8 8 8 . 8 8 . . . 
    . . 6 6 . f f f f f . 6 6 . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 2 . . . . . . . . 
    . . . . 6 9 6 2 1 . . . . . . . 
    . . . . 6 1 f 6 e 1 . . . . . . 
    . . . . 6 1 1 6 1 e . . . . . . 
    . . . . 9 6 6 6 6 2 . . . . . . 
    . . . . . 6 f f 6 9 . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . f f f f f f f f f f f . . . 
    . . 1 1 . 1 1 1 1 1 . 1 1 . . . 
    . . 6 6 . f f f f f . 6 6 . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 6 6 6 . . . . . . 
    . . . . . 2 1 6 6 6 6 . . . . . 
    . . . . e 1 . 6 1 f 6 . . . . . 
    . . . . 2 1 2 6 1 1 6 . . . . . 
    . . . . . e 1 6 6 6 6 . . . . . 
    . . . . . . 2 f 6 9 . . . . . . 
    . . f f f f 1 f 1 f f 2 . . . . 
    . . f f f f 1 f 1 f f 1 e . . . 
    . . f f f f 1 f 1 f f f 2 . . . 
    . . f f . f 1 1 1 f . f f . . . 
    . . 6 6 . f f f f f . 6 6 . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . e 6 6 6 6 . . . . . . 
    . . . . e 9 6 6 6 6 6 . . . . . 
    . . . . 6 1 1 6 1 1 6 . . . . . 
    . . . . 6 f 1 6 f 1 6 . . . . . 
    . . . . 9 6 6 6 6 6 6 . . . . . 
    . . . . . 6 f f 6 9 . . . . . . 
    . . . 2 1 2 8 8 8 1 1 1 1 . . . 
    . . 2 1 e e 8 8 8 1 1 1 1 . . . 
    . . . 1 . 2 8 8 8 1 1 1 1 . . . 
    . . . . . 1 8 8 8 1 . 1 1 . . . 
    . . . . . f f f f f . 6 6 . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 . 1 e . . . . . . 
    . . . . . 9 9 . 9 2 . . . . . . 
    . . . . f f f . f f f . . . . . 
    `
]
TargetList = [1, 2]
can_attack = 0
game.onUpdate(function () {
    Animation()
    if (sprites.allOfKind(SpriteKind.Boss).length > 0) {
        ZombieBossShoot(ZombieBoss)
    }
})
game.onUpdateInterval(5000, function () {
    EnemySpawn()
})
