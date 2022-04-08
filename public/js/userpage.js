
const userDetail = document.getElementById('userDetails');
const userOrder = document.getElementById('userOrder');

async function userDetailfunction() {
    console.log("USER DETAIL START")
    // const idfinder = req.session['user'];
    // const id = idfinder.id
    // const res = await fetch(`/user/${id}/`)
    const res = await fetch(`/user/1/`)
    console.log("USER DETAIL fetch")
    const userDetail = await res.json();
    console.log(res)
    console.log("---")
    console.log(userDetail)
    const tableDisplay = document.querySelector('#userDetails')
    tableDisplay.innerHTML += `
    <tbody id="userDetails">
        <tr>
            <td>${userDetail.first_name}</td>
            <td>${userDetail.last_name}</td>
            <td>${userDetail.email}</td>
            <td>${userDetail.company_name}</td>
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
    const orderTable = document.querySelector('#userOrder')
    orderTable.innerHTML = ''
    for (let order in userOrder.orders){
        orderTable.innerHTML += `
        <tr>
        <td>${result.id}</td>
        <td>${result.product_id}</td>
        <td>${result.order_date}</td>
        </tr>
        `

       }
};


window.onload = function() {
    console.log("onloaded fuck you!")
    userDetailfunction()
    userOrderfunction()
}
