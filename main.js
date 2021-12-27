var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 100

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

dino.draw()

class Cactus {
    constructor() {
        this.x = 300
        this.y = 200
        this.width = 50
        this.height = 50
    }
    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var timer = 0
var cactusList = []

function animate() {
    requestAnimationFrame(animate)
    timer++
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(timer % 60 === 0) {
        var cactus = new Cactus()
        cactusList.push(cactus)
    }

    cactusList.forEach((a, i, o) => {
        if(a.x < 0) {
            o.splice(i, 1)
        }
        a.x--
        a.draw()
    })

    dino.y--
    dino.draw()
}

animate()
