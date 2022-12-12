const left_btn = document.querySelector(".btn_l");
const cursor = document.querySelector('.cursor');
const body = document.querySelector('body');

// left_btn.addEventListener("mouseenter", test);
// left_btn.addEventListener("mouseleave", test2);
body.addEventListener("mouseenter", visible_cursor)
body.addEventListener("mouseleave", invisible_cursor)

function visible_cursor() {
    cursor.classList.remove('none')
    document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
    // console.log(e.pageY);
})
}

function invisible_cursor() {
    cursor.classList.add('none')
}

function test() {
    cursor.classList.add("enter-anim")
//     document.addEventListener('mousemove', e => {
//         cursor.setAttribute('style', 'top:'+(e.pageY - 50)+"px; left:"+(e.pageX - 50)+"px;")
// })
}

// function test2() {
//     cursor.classList.remove("enter-anim")
// }


document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})