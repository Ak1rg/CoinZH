function addEvent(name,e) {
    document.querySelector(name).addEventListener('click', () => {
        document.querySelector(e).classList.toggle("active")
    })
}
function tbody(e) {
    document.querySelector("tbody").innerHTML = ''
    document.querySelector(".table_head_tr").innerHTML = ''
    for (let i = 0; i < e.length; i++) {
        document.querySelector(".table_head_tr").innerHTML += `<th>${e[i]}</th>`
    }
    for (let i = 0; i < 6; i++) {
        document.querySelector("tbody").innerHTML += `<tr class="table_body"></tr>`
        let table_list = document.querySelectorAll(".table_body");
        table_list[i].innerHTML += `<td>meh***@gmail.com</td>`
        for (let j = 1; j < e.length ; j++) {
            table_list[i].innerHTML += `<td>meh**</td>`
        }
    }
}
let bit_data_list = [["Contracts","Qty","Value","Entry Price","Mark Price","Liq. Prich","Position Margin","Unrealized P&h (%)","Realized P&h","TP/SL","Trailing Stop","ADL","Close By"],['Contracts','Qty','Entry Price','Exit Price','Trade Type','Closed P&L','Exit Type','Trade Time'],['Contracts','Qty','Order Price','Filled/Total','Trade Type','TP/SL','Order Type','Status','Order No.','Order Time','Action'],['Contracts','Qty','Order Price','Trigger Price','TP/SL','Price (Distance)','Trade Type','Order Type','Status','Order No.','Order Time','Action'],['Contracts','Filled/Total','Filled Price','Order Price','Trade Type','Order Typ','Filled Type','Order No.','Order Time'],['Contracts','Filled/Total','Order Price','Trigger Price','Trade Type','Order Type','Status','Order No.','Order Time']]


for (let i = 0; i < 17; i++) {
    document.querySelector(".side_bar_left-info table tbody").innerHTML += `
    <tr>
        <td>
            <div>
                <img src="./img/leftBar/grade.svg" alt="">
                <img src="./img/leftBar/btc.svg" alt="">
                <h4>BTCUSDT</h4>
            </div>
        </td>
        <td>
            <h5>18,889.50</h5>
        </td>
        <td>
            <h5>-4.7%</h5>
        </td>
        <td>
            <h5>4.45B (USDT)</h5>
        </td>
    </tr>
    `
}
tbody(bit_data_list[0])

let classAddList = [".bit_calc_button2","#Positions",".bit_calc_button",".bit_calc_button_conditional2",".bit_calc_button_conditional",".bit_calc_percent_button",".bit_calc_head_btn",".bit_data_order_img"]
classAddList.forEach(e => {
    document.querySelectorAll(e)[0].classList.add('active')
})
const all_buttons = [".bit_calc_button2",".bit_data_button",".bit_calc_button",".bit_calc_button_conditional2",".bit_calc_button_conditional",".bit_calc_percent_button",".bit_calc_head_btn",".bit_data_order_img"]
for (let i = 0; i < all_buttons.length; i++) {
    const buttons = document.querySelectorAll(all_buttons[i])
    buttons.forEach((e) => {
        e.addEventListener("click",()=>{
            buttons.forEach(e => {
                e.classList.remove('active')
            });
            e.classList.add('active')
        })
    });
}

document.querySelectorAll(".bit_data_button").forEach((e,i) => {
    e.addEventListener('click',()=>{
        tbody(bit_data_list[i])
    })
})

$("#order_book1").click(() => {
    let div = document.querySelector(".bit_data_order_book_info_box-first")
    div.innerHTML = `
    <div class="bit_data_order_book_upper-numbers">
        <div class="bit_data_order_book_upper-numbers_first_col">
            <h5>Price(USDT)</h5>
            <ul id="order_price">
            </ul>
        </div>
        <div class="bit_data_order_book_upper-numbers_other_col">
            <h5>Quantity(BTC)</h5>
            <ul id="order_quantity">
            </ul>
        </div>
        <div class="bit_data_order_book_upper-numbers_other_col">
            <h5>Quantity(BTC)</h5>
            <ul id="order_quantity2">
            </ul>
        </div>
    </div>
    <div class="bit_data_order_book_middle-numbers">
        <div>
            <h3 class="red">19.936.00</h3>
            <img src="./img/arrow_downward_red.svg" alt="">
        </div>
        <div>
            <img src="./img/flag.svg" alt="">
            <h4>19.936.00</h4>
        </div>
    </div>
    <div class="bit_data_order_book_upper-numbers">
    <div class="bit_data_order_book_upper-numbers_first_col">
        <ul id="order_low_price"></ul>
    </div>
    <div class="bit_data_order_book_upper-numbers_other_col">
        <ul id="order_low_quantity"></ul>
    </div>
    <div class="bit_data_order_book_upper-numbers_other_col">
        <ul id="order_low_quantity2"></ul>
    </div>
    `
    for (let j = 1; j < 9; j++) {
        document.querySelector("#order_price").innerHTML += `<li class="red">19.936.00</li>`
        document.querySelector("#order_quantity").innerHTML += `<li>0.002</li>`
        document.querySelector("#order_quantity2").innerHTML += `<li>0.872</li>`
        document.querySelector("#order_low_price").innerHTML += `<li class="green">19.936.00</li>`
        document.querySelector("#order_low_quantity").innerHTML += `<li>24.365</li>`
        document.querySelector("#order_low_quantity2").innerHTML += `<li>235.365</li>`
    }
})
$("#order_book2").click(() => {
    let div = document.querySelector(".bit_data_order_book_info_box-first")
    div.innerHTML = `
    <div class="bit_data_order_book_middle-numbers">
        <div>
            <h3 class="green">19.936.00</h3>
            <img src="./img/arrow_downward_green.svg" alt="">
        </div>
        <div>
            <img src="./img/flag.svg" alt="">
            <h4>19.936.00</h4>
        </div>
    </div>
    <div class="bit_data_order_book_upper-numbers-order">
        <div class="bit_data_order_book_upper-numbers">
            <div class="bit_data_order_book_upper-numbers_first_col-order">
                <h5>Quantity(BTC)</h5>
                <ul id="order_quantity">
                </ul>
            </div>
            <div class="bit_data_order_book_upper-numbers_other_col-order">
                <h5>Price(USDT)</h5>
                <ul id="order_price">
                </ul>
            </div>
        </div>
        <div class="bit_data_order_book_upper-numbers">
            <div class="bit_data_order_book_upper-numbers_first_col-order">
                <h5>Price(USDT)</h5>
                <ul id="order_price">
                </ul>
            </div>
            <div class="bit_data_order_book_upper-numbers_other_col-order">
                <h5>Quantity(BTC)</h5>
                <ul id="order_quantity">
            </ul>
        </div>
        </div>
    </div>
    `
    for (let j = 1; j < 17; j++) {
        document.querySelector("#order_price").innerHTML += `<li class="green">19.936.00</li>`
        document.querySelectorAll("#order_price")[1].innerHTML += `<li class="red">19.936.00</li>`
        document.querySelector("#order_quantity").innerHTML += `<li>0.002</li>`
        document.querySelectorAll("#order_quantity")[1].innerHTML += `<li>0.002</li>`
    }
})
$("#order_book3").click(() => {
    let div = document.querySelector(".bit_data_order_book_info_box-first")
    div.innerHTML = `
    <div class="bit_data_order_book_middle-numbers">
        <div>
            <h3 class="green">19.936.00</h3>
            <img src="./img/arrow_downward_green_down.svg" alt="">
        </div>
        <div>
            <img src="./img/flag.svg" alt="">
            <h4>19.936.00</h4>
        </div>
    </div>
    <div class="bit_data_order_book_upper-numbers">
        <div class="bit_data_order_book_upper-numbers_first_col">
            <h5>Price(USDT)</h5>
            <ul id="order_price">
            </ul>
        </div>
        <div class="bit_data_order_book_upper-numbers_other_col">
            <h5>Quantity(BTC)</h5>
            <ul id="order_quantity">
            </ul>
        </div>
        <div class="bit_data_order_book_upper-numbers_other_col">
            <h5>Quantity(BTC)</h5>
            <ul id="order_quantity2">
            </ul>
        </div>
    </div>
    `
    for (let j = 1; j < 17; j++) {
        document.querySelector("#order_price").innerHTML += `<li class="green">19.936.00</li>`
        document.querySelector("#order_quantity").innerHTML += `<li>0.002</li>`
        document.querySelector("#order_quantity2").innerHTML += `<li>0.872</li>`
    }
})
$("#order_book4").click(() => {
    let div = document.querySelector(".bit_data_order_book_info_box-first")
    div.innerHTML = `
    <div class="bit_data_order_book_upper-numbers">
        <div class="bit_data_order_book_upper-numbers_first_col">
            <h5>Price(USDT)</h5>
            <ul id="order_price">
            </ul>
        </div>
        <div class="bit_data_order_book_upper-numbers_other_col">
            <h5>Quantity(BTC)</h5>
            <ul id="order_quantity">
            </ul>
        </div>
        <div class="bit_data_order_book_upper-numbers_other_col">
            <h5>Quantity(BTC)</h5>
            <ul id="order_quantity2">
            </ul>
        </div>
    </div>
    <div class="bit_data_order_book_middle-numbers">
        <div>
            <h3 class="green">19.936.00</h3>
            <img src="./img/arrow_downward_green_down.svg" alt="">
        </div>
        <div>
            <img src="./img/flag.svg" alt="">
            <h4>19.936.00</h4>
        </div>
    </div>
    `
    for (let j = 1; j < 17; j++) {
        document.querySelector("#order_price").innerHTML += `<li class="red">19.936.00</li>`
        document.querySelector("#order_quantity").innerHTML += `<li>0.002</li>`
        document.querySelector("#order_quantity2").innerHTML += `<li>0.872</li>`
    }
})


addEvent("#recent_trade",".bit_data_recent_trades_info")
addEvent("#order_book",".bit_data_order_book_info")


document.querySelector("#bit_calc_hide").addEventListener('click', () => {
    let text = document.querySelector("#bit_calc_hide_text")
    let img = document.querySelector("#bit_calc_hide")
    document.querySelector(".bit_calc_contract_details_hide").classList.toggle("active")
    if (text.innerHTML === "Hide") {
        text.innerHTML = "Show"
        img.classList.toggle("active")
    } else {
        text.innerHTML = "Hide"
        img.classList.remove("active")
    }
})

const inputs = document.querySelectorAll(".bit_calc_inputs")
const conditional = document.querySelector(".bit_calc_btns_conditional")
const conditional2 = document.querySelector(".bit_calc_btns_conditional2")
const btns = document.querySelector(".bit_calc_btns")
const btns2 = document.querySelector(".bit_calc_btns2")
const tpSl = document.querySelector(".bit_calc_tp-sl")

$("#bit_calc_head_btn_open").click(() => {
    btns2.classList.add("none")
    btns.classList.remove("none")
    tpSl.classList.remove('none')
    const button = document.querySelectorAll(".bit_calc_button")
    button.forEach(e => {
        e.classList.remove('active')
    });
    button[0].classList.add('active')
    inputs[1].classList.remove('none')
    inputs[2].classList.remove('none')
})
$("#bit_calc_head_btn_close").click(() => {
    btns.classList.add("none")
    btns2.classList.remove("none")
    tpSl.classList.add('none')
    const button = document.querySelectorAll(".bit_calc_button2")
    button.forEach(e => {
        e.classList.remove('active')
    });
    button[0].classList.add('active')
    inputs[0].classList.add('none')
    inputs[1].classList.remove('none')
    inputs[2].classList.remove('none')
    conditional.classList.remove('flex')
    conditional2.classList.remove('flex')
})

$("#bit_calc_limit").click(() => {
    inputs[1].classList.remove('none')
    inputs[2].classList.remove('none')
    inputs[0].classList.add('none')
    conditional.classList.remove('flex')
    conditional2.classList.remove('flex')
})
$("#bit_calc_market").click(() => {
    inputs[0].classList.add('none')
    inputs[1].classList.add('none')
    conditional.classList.remove('flex')
    conditional2.classList.remove('flex')
})
$("#bit_calc_conditional").click(() => {
    inputs[0].classList.remove('none')
    if (inputs[1].classList.contains('none') && document.querySelector("#bit_calc_button_conditional_market").classList.contains('active')) {
        inputs[1].classList.remove('none')
    } else {
        inputs[1].classList.add('none')
    }
    inputs[2].classList.remove('none')
    conditional.classList.add('flex')
    conditional2.classList.add('flex')
})

$("#bit_calc_button_conditional_limit").click(() => {
    document.querySelector("#bit_calc_button_conditional_market").classList.remove('active')
    inputs[1].classList.add('none')
})
$("#bit_calc_button_conditional_market").click(() => {
    document.querySelector("#bit_calc_button_conditional_market").classList.add('active')
    inputs[1].classList.remove('none')
})

$("#bit_calc_limit2").click(() => {
    inputs[1].classList.remove('none')
    inputs[2].classList.remove('none')
})
$("#bit_calc_market2").click(() => {
    document.querySelector("#bit_calc_button_conditional_market").classList.add('active')
    inputs[2].classList.remove('none')
    inputs[1].classList.add('none')
})

document.querySelector(".left_menu").addEventListener('click',()=>{
    document.querySelector(".side_bar_left").style.height = document.documentElement.scrollHeight + "px"
    document.querySelector(".side_bar_background").classList.add("active")
    document.querySelector(".side_bar_left").classList.add("active")
})

document.body.addEventListener("click",(e) => {
    if (e.target == document.querySelector(".side_bar_background") || e.target == document.querySelector("#side_bar_left_close")) {
        document.querySelector(".side_bar_background").classList.remove("active")
        document.querySelector(".side_bar_left").classList.remove("active")
    };
});


