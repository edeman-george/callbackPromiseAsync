// console.log('I')
//
// setTimeout(() => {
//
//     console.log('eat')
// }, 2000)
// console.log('Ice cream')

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}


let isShopOpen = true;
// isShopOpen = false;
const time = async (ms) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }

    catch(error){
        console.log("customer left")
    }
}
kitchen()

// const kitchen2 = async () => {
//     try {
//         await time(2000)
//             `${stocks.Fruits[0]} was selected`
//     } catch (e) {
//         console.log("Customer left", e)
//     } finally {
//         console.log("Day ended, shop is closed")
//     }
// }
// kitchen2()

// async function order3() {
//
// }
//
// const toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which topping would you like?"))
//         }, 3000)
//     })
// }
//
// const kitchen = async () => {
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppings_choice();
//     console.log("D");
//     console.log("E");
// }
// kitchen();
// console.log("do dishes");
// console.log("clean tables");
// console.log("take orders");

// let order2 = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (isShopOpen) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         } else {
//             reject(console.log("The shop is closed"))
//         }
//     })
// }
// order2(2000, () => console.log(`${stocks.Fruits[0]} was selected`)).then(() => {
//     return order2(0, () => console.log("production has started"))
// }).then(() => {
//     return order2(2000, () => console.log("Fruit has been chopped"))
// })
//     // step 4
//     .then(() => {
//         return order2(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//     })
//
//     // step 5
//     .then(() => {
//         return order2(1000, () => console.log("start the machine"))
//     })
//
//     // step 6
//     .then(() => {
//         return order2(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//     })
//
//     // step 7
//     .then(() => {
//         return order2(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//     })
//
//     // Step 8
//     .then(() => {
//         return order2(2000, () => console.log("Serve Ice Cream"))
//     }).catch((e) => {
//     console.log(e);
//     console.log("Customer left")
// }).finally(() => {
//     console.log("day ended, shop is closed")
// })
// pass a function to the second parameter of order to start working

// below is callback work
// console.log("...callback work here...");
//
// let order = (fruit, callProduction) => {
//     setTimeout(() => {
//         console.log("Order placed. Please call production");
//         console.log(`${stocks.Fruits[fruit]} was selected`)
//         callProduction()
//     }, 2000)
// }
//
// let production = () => {
//     setTimeout(() => {
//         console.log("Production has started")
//         setTimeout(() => {
//             console.log("Fruit has been chopped");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//                 setTimeout(() => {
//                     console.log("Start the machine")
//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} as toppings`)
//                             setTimeout(() => {
//                                 console.log("Serve Ice Cream")
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0)
// }
//
// order(0, production)