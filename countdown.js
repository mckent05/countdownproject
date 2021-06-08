const months=[
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const days=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
    
]
let headerText=document.querySelector('.header-text p')
let counters=document.querySelectorAll('.timer h3')
let theCount=document.querySelector('.countdown-contain')

let finishDate= new Date(2022,11, 16,11,30,0)
let year= finishDate.getFullYear()
let hours=finishDate.getHours()
let minutes=finishDate.getMinutes()
let month=months[finishDate.getMonth()]
let date=finishDate.getDate()
let day=days[finishDate.getDay()]

headerText.textContent=`This giveaway will end on ${day}, ${date}th ${month} ${year} ${hours}:${minutes}`

function remainingTime(){
    let finishTime=finishDate.getTime()
    let today=new Date().getTime()
    let t= finishTime - today
    let oneSec= 1000
    let oneDay= 24 * 60 * 60 * oneSec
    let oneHour= 60 * 60 * oneSec
    let oneMinute= 60 * oneSec

    let aDay= Math.floor(t/oneDay)
    let anHour= Math.floor((t % oneDay)/oneHour)
    let aMin= Math.floor((t % oneHour)/oneMinute)
    let aSec=Math.floor((t % oneMinute)/oneSec)
    let values=[aDay,anHour,aMin,aSec]
    function format(item){
        if(item<10){
            return `0${item}`
        }
        return item
    }
    counters.forEach(function(counter,index){
        counter.innerHTML=format(values[index])
    })
    if (t < 0){
        clearInterval(countdown)
        theCount.innerHTML=`<h4 class=expired>oops sorry, try again next time!!!!!!</h4>`
        headerText.textContent=`This giveaway expired on ${day}, ${date}th ${month} ${year} ${hours}:${minutes}`
    
    }
    

}
let countdown=setInterval(remainingTime, 1000 )
 remainingTime()