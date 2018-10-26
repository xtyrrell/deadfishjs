// Deadfish interpreter written by Max
const input = 'iissso'

let x = 0

let commands = {
    'i': () => x != 256 ? x++ : x = 0,
    'd': () => x != -1 ? --x : x = 0,
    's': () => x = x*x,
    'o': () => console.log(x)
}

;['x', 'd', 'k', 'c'].forEach((c, i) => commands[c] = Object.values(commands)[i])

for (const c of input) {
    if (c in commands) commands[c]()
}

