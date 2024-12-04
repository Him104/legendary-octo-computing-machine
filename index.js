// function fetchData(callback) {

//     setTimeout(()=>{
//         callback("Data Fetched Successfully !!")
//     }, 2000)
    
// }

// fetchData((message)=> {
//     console.log(message)
// })


function fetchUser(callback) {

    setTimeout(()=>{
        console.log('fetched user!!')
        callback({userid: 1, name: "Himanshu"})
    }, 1000)

}

function fetchOrders(userid, callback) {

    setTimeout(()=>{
        console.log('fetched order!!')
        callback({orderId: 101, amount: 250})
    }, 1000)

    
}


function fetchOrderDetails(orderId, callback) {

    setTimeout(()=>{
        console.log('fetched order details!!')
        callback({orderId: orderId, items: ['LAPTOP', 'MOBILE', 'JEANS']})
    }, 1000)

    
}

// Nested Callbacks

fetchUser((user) => {
    console.log(user)
    fetchOrders(user.userid, (order) => {
        console.log(order)
        fetchOrderDetails(order.orderId, (orderDetails) => {
            console.log(orderDetails)
        })
    })
})