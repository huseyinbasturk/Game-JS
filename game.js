function getSadInterval() {
    return Date.now() + 1000;
    
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}
const moles = [
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-0')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-1')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-2')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-3')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-4')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-5')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-6')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-7')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-8')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-9')
    },
    
];

function getNextStatus (mole) {
    switch (mole.status) {
        case "sad":
            mole.next = getSadInterval();
            mole.status = "leaving";
            mole.node.source = './mole-leaving.png';
            break;
        case "leaving"
            mole.next
    }
}

let runAgainAt = Date.now() + 100;
function nextFrame() {
    const now = Date.now();
    console.log(now, runAgainAt);

    if(runAgainAt >= now) {
    for(let i = 0; i < moles.length; i++) {
        if (moles[i].next <= now) {
            getNextStatus(moles[i]);
        }
    
    
    }
        

        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

nextFrame();