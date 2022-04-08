
const userDetail = document.getElementById('userDetails');
const userOrder = document.getElementById('userOrder');

async function userDetailfunction() {
    // let x = document.cookie
    // console.log(x)
    // const idfinder = x['user'];
    // const id = idfinder.id
    // const res = await fetch(`/user/${id}/`)
    const res = await fetch(`/user/1/`)
    const userDetail = await res.json();
    const userDetail2 = userDetail.result
    const tableDisplay = document.querySelector('#userDetails')
    tableDisplay.innerHTML += `
    <tbody id="userDetails">
        <tr>
            <td>${userDetail2.first_name}</td>
            <td>${userDetail2.last_name}</td>
            <td>${userDetail2.email}</td>
            <td>${userDetail2.company_name}</td>
        </tr>
    </tbody>
    `
}

async function userOrderfunction() {
    // const idfinder = req.session['user'];
    // const id = idfinder.id
    // const res = await fetch(`/user/${id}/getUserOrder`)
    const res = await fetch(`/user/1/getUserOrder`)
    const userOrder = await res.json();
    const userOrder2 = userOrder.result
    console.log(userOrder2)
    const orderTable = document.querySelector('#userOrder')
    orderTable.innerHTML = ''
    for (let order of userOrder2){
        console.log(order)
        orderTable.innerHTML += `
        <tr>
        <td>${order.id}</td>`
        if (order.product_id == "1"){
            orderTable.innerHTML +=  '<td>Bronze</td>'
        } else if (order.product_id == "2"){
            orderTable.innerHTML +=  '<td>Silver</td>'
        } else if (order.product_id == "3"){
            orderTable.innerHTML +=  '<td>Gold</td>'
        } else if (order.product_id == "4"){
            orderTable.innerHTML +=  '<td>Platinum</td>'
        }
        orderTable.innerHTML +=
        `
        <td>${order.order_date}</td>
        </tr>`
       }
};


window.onload = function() {
    userDetailfunction()
    userOrderfunction()
}
