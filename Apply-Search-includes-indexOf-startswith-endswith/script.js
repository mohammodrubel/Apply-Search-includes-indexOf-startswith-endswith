// search product javascript 
const products = [
    'realme leptop',
    'one plus phone hello',
    'dell leptop',
    'iphone Phone',
    'google pixel',
    'samsung phone',
    'samsung Laptop',
    'symphony Phone',
    'blackbarry phone',
    'Oppo Phone',
    'Hp leptop',
    'HTC',
    'okapia'
]

    const searching = 'hello';
    const output = [];
        for (const product of products){
            if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
                // output.push(product)
            }
        }
    // console.log(output)

    // search product javascript  include system
        for (const product of products){
            if (product.toLowerCase().includes(searching.toLowerCase())){
                // output.push(product)
            }
        }
        // console.log(output)
    // start with function search array element 
    for (const product of products){
        if (product.toLowerCase().startsWith(searching.toLowerCase())){
            // output.push(product)
        }
    }
        // console.log(output)

    for (const product of products){
        if (product.toLowerCase().endsWith(searching.toLowerCase())){
            output.push(product)
        }
    }
    console.log(output)