
const userDetail = document.getElementById('userDetails');
const userOrder = document.getElementById('userOrder');
const logOutBtn = document.getElementById('logOutBtn');

logOutBtn.addEventListener('click', logOut);

async function getLogInStatus() {
    const res = await fetch('/getLogInStatus');
    const result = await res.json();
    console.log(result)
    console.log(result.userId)
    return result;
    ;
};

async function getUserDetail(userId) {
    const res = await fetch(`/user/${userId}/`)
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

async function getUserOrder(userId) {
    const res = await fetch(`/user/${userId}/getUserOrder`)
    const userOrder = await res.json();
    const userOrder2 = userOrder.result
    const orderTable = document.querySelector('#userOrder')
    orderTable.innerHTML = ''
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
        orderTable.innerHTML += `
        <tr>
        <td>${order.id}</td>
        <td>${productname}</td>
        <td>${order.order_date}</td>
        </tr>
        `
    }
};

async function getProducts() {
    const res = await fetch(`/getProducts`)
    const products = await res.json();
    const productDetails = products.result
    const productTable = document.querySelector('#allProducts')
    console.log(productDetails)
    productTable.innerHTML += `
    <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Product Cost</th>
        <th scope="col">Product Discription</th>
      </tr>
      </thead>
    `
    for (let product of productDetails) {
        productTable.innerHTML += `
        <tr>
        <td>${product.id}</td>
        <td>${product.prod_name}</td>
        <td>${product.prod_cost}</td>
        <td>${product.prod_description}</td>
        </tr>
        `
    }
    productTable.innerHTML += `
    </tbody>
    </table>
    `
    console.log(productTable)
};

async function logOut() {
    const res = await fetch('/logOutUser');
    const result = await res.json();
    console.log(result);
    window.location = '/landing.html';
};

window.onload = async function () {
    const result = await getLogInStatus();
    getUserDetail(result.userId);
    if (result.adminresult == true){
        getProducts()
    } else {
        getUserOrder(result.userId);
    }
};
