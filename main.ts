let sprite = game.createSprite(1, 3)
let list = [
game.createSprite(0, 4),
game.createSprite(1, 4),
game.createSprite(2, 4),
game.createSprite(3, 4),
game.createSprite(4, 4)
]
basic.pause(5000)
let spike = game.createSprite(4, 3)
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.Y) == 3 && input.buttonIsPressed(Button.B)) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.get(LedSpriteProperty.X) == spike.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == spike.get(LedSpriteProperty.Y)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(500)
    spike.change(LedSpriteProperty.X, -1)
})
