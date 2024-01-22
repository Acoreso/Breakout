namespace SpriteKind {
    export const OtherPlayer = SpriteKind.create()
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
info.onScore(10, function () {
    tiles.setCurrentTilemap(tilemap`level22`)
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
    info.changeLifeBy(-1)
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
info.onLifeZero(function () {
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
    Power_Up_11 = sprites.create(img`
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
    tiles.placeOnTile(Power_Up_11, tiles.getTileLocation(52, 52))
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
    game.gameOver(false)
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
let Power_Up_11: Sprite = null
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
let moving2 = false
let moving = false
let Direction2 = 0
let Direction1 = 0
let ListValue = 0
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
    . . . . 6 9 6 1 6 e . . . . . . 
    . . . . 6 1 f 6 f 1 2 . . . . . 
    . . . . 6 1 1 6 1 1 6 . . . . . 
    . . . . 9 6 6 6 6 6 6 . . . . . 
    . . . . . 6 f f 6 6 . . . . . . 
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
game.onUpdate(function () {
    Animation()
})
game.onUpdateInterval(5000, function () {
    EnemySpawn()
})
