
const userDetail = document.getElementById('userDetails');
const userOrder = document.getElementById('userOrder');
const logOutBtn = document.getElementById('logOutBtn');

logOutBtn.addEventListener('click', logOut);

async function getLogInStatus() {
    const res = await fetch('/getLogInStatus');
    const result = await res.json();
    return result.result;
    ;
};

async function getUserDetail(userId) {
    const res = await fetch(`/user/${userId}/`)
    const userDetail = await res.json();
    const userDetail2 = userDetail.result
    const tableDisplay = document.querySelector('#userDetails')
    document.getElementById('fname').innerHTML = userDetail2.first_name;
    document.getElementById('lname').innerHTML = userDetail2.last_name;
    document.getElementById('email').innerHTML = userDetail2.email;
    document.getElementById('company').innerHTML = userDetail2.company_name;
    // tableDisplay.innerHTML += `
    // <tbody id="userDetails">
    //     <tr>
    //         <td>${userDetail2.first_name}</td>
    //         <td>${userDetail2.last_name}</td>
    //         <td>${userDetail2.email}</td>
    //         <td>${userDetail2.company_name}</td>
    //     </tr>
    // </tbody>
    // `
}

async function getUserOrder(userId) {
    const res = await fetch(`/user/${userId}/getUserOrder`)
    const userOrder = await res.json();
    const userOrder2 = userOrder.result
    const orderTable = document.getElementById('user-details-orders')
    // orderTable.innerHTML = ''
    for (let order of userOrder2) {
        let productname = ""
        if (order.product_id == "1") {
            productname = "Bronze"
        } else if (order.product_id == "2") {
            productname = "Silver"
        } else if (order.product_id == "3") {
            productname = "Gold"
        } else if (order.product_id == "4") {
            productname = "Platinum"
        }
        // document.getElementById('#ordernum').innerHTML = order.order.id;
        // document.getElementById('#product').innerHTML = order.order.id;
        // document.getElementById('#orderdate').innerHTML = order.order.id;
        // orderTable.innerHTML += `
        // <tr>
        // <td>${order.id}</td>
        // <td>${productname}</td>
        // <td>${order.order_date}</td>
        // </tr>
        // `
        orderTable.innerHTML += `
        <div class="row">
            <div class="col">${order.id}</div>
            <div class="col">${productname}</div>
            <div class="col">${order.order_date}</div>    
        </div>
        `
    }
};

async function logOut() {
    const res = await fetch('/logOutUser');
    const result = await res.json();
    console.log(result);
    window.location = '/landing.html';
};

window.onload = async function () {
    const userId = await getLogInStatus();
    getUserDetail(userId);
    getUserOrder(userId);
};
