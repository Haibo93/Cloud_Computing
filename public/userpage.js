const userDetail = document.getElementById('userDetails');

window.onload = function() {
    userDetail();
};

async function userDetail() {
    const result = await fetch(`/user/${id}/`)
}