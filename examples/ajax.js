// see it on codepen: https://codepen.io/jhelst/pen/wvvBjdR
const xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://helsten-jeff.github.io/order-data.json";

xhr.open(method, url, true);
xhr.onprogress = () => {
  console.log("progressing network request");
};
xhr.onload = () => {
  // Check for http success status code
  if (xhr.status === 200) {
    console.log(xhr.responseText);
    const _response = JSON.parse(xhr.responseText);
    // Check that we received a shape and response we expected
    if (_response.length) {
      const { orderId, variants } = _response[0];
      console.log("orderId", orderId);
      console.log("variants", variants);
    }
  }
  // if not found
  if (xhr.status.toString().startsWith('4')){
    console.log('thing not found', xhr.status) 
  }
};
// handle xhr error
xhr.onerror = () => {
  console.log("handleError");
};
xhr.send();
