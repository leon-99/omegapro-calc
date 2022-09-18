const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let tbody = document.getElementById("tbody")
let htmlAmount, htmlReinvest, htmlMonth, htmlYear, htmllinvest

function invest(amount, month, year, times) {
    let passive, returnAmount, invest
    var d = new Date(year, month)
    result = []
    let i = 0
   while (i < times) {

    if (i === 0) {
        d.setMonth(d.getMonth() + +15)
        invest = amount
       returnAmount = (amount * 3)
       passive = returnAmount * 0.3
       returnAmount = returnAmount - passive
    } else {
        d = new Date(d.getFullYear(), d.getMonth())
        d.setMonth(d.getMonth() + +16)
        invest = returnAmount
        returnAmount = Math.round(returnAmount * 3)
        passive = Math.round(returnAmount * 0.3)
        returnAmount = returnAmount - passive
    }
    result.push({
        time: i+1,
        invest: invest,
        returnIncome: {
            finishedTime: `${months[d.getMonth()]}, ${d.getFullYear()}`,
            amount: returnAmount
        },
        passiveIncome: {
            amount: passive
        }
    })
    i++
   }
   return result
}



function setData() {
    tbody.innerHTML += ``
    htmlAmount = document.getElementById("amount").value
    htmlReinvest = document.getElementById("reInvest").value
    htmlMonth = document.getElementById("month").value
    htmlYear = document.getElementById("year").value
    let data = invest(htmlAmount, htmlMonth, htmlYear, htmlReinvest)
    data.forEach(i => {
        tbody.innerHTML += `<tr>
    <th scope="row">${i.time}</th>
    <td>${i.invest}</td>
    <td>${i.returnIncome.amount}</td>
    <td>${i.returnIncome.finishedTime}</td>
    <td>${i.passiveIncome.amount}</td>
    </tr>`
    });
}

document.getElementById("submit").addEventListener("click", setData)