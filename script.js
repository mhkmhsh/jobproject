const title = document.getElementById('head')
const text1 = document.getElementById('para1')
const text2 = document.getElementById('para2')
const text3 = document.getElementById('para3')
const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')


function general() {
    title.innerHTML=`The Facts`
    image1.src= 'image/'
    image2.src= 'image/'
    text1.innerHTML=`Being a Formula One software engineer means working at the cutting edge of technology, where milliseconds can make all the difference. It involves developing complex algorithms and software solutions to optimize car performance, analyzing massive amounts of data in real-time, and collaborating closely with engineers, data scientists, and drivers to push the boundaries of speed and efficiency. It's a thrilling blend of innovation, precision, and high-pressure teamwork in the fast-paced world of motorsport.`
    text2.innerHTML=``
    text3.innerHTML=``
}
function journey() {
    title.innerHTML=''
    image1.src= `image/`
    image2.src= `image/`
    text1.innerHTML=''
    text2.innerHTML=''
    text3.innerHTML=''
}
function myself() {
    title.innerHTML=''
    image1.src= `image/`
    image2.src= `image/`
    text1.innerHTML=''
    text2.innerHTML=''
    text3.innerHTML=''
}