// See this working at https://codepen.io/jhelst/pen/dybaPeZ?editors=0012
const response = {
  orders: [
    {
      orderId: 123456,
      orderDate: "12/12/2019",
      usingBooleanAsAString: 'true',
      orderItems: [
        {
          productId: 311,
          productName: "From Chaos",
          variant: { color: "blue", size: "medium" }
        }
      ]
    },
       {
      orderId: 123455,
      orderDate: "12/12/2019",
      orderItems: [
        {
          productId: 311,
          productName: "Down",
          variant: { color: "orange", size: "small" }
        }
      ]
    }
  ],
  reviews: [
    {
      orderId: 123455,
      productId: 312,
      rating: 5,
      comment: "This was the best thing ever!",
      isSoftDeleted: false
    }
  ]
};

// Stringify the response
const stringifiedResponse = JSON.stringify(response)
console.log(stringifiedResponse)

// Parse the stringified response
const parsedResponse = JSON.parse(stringifiedResponse)
console.log(parsedResponse)
