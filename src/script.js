const y = document.querySelector('.y');
const n = document.querySelector('.n');

n.addEventListener('mouseenter', () => {
    const X = Math.floor(Math.floor(Math.random() * 100))
    const Y = Math.floor(Math.floor(Math.random() * 100))
    n.style.position = "absolute";
    n.style.top = X + "%";
    n.style.left = Y + "%";
    n.style.transform = `translate(-${Y}%, -${X}%)`
})

y.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=WU9wahvX104"
})