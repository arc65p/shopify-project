var shopifyAPI = require('shopify-node-api');
 
 
var Shopify = new shopifyAPI({
  shop: 'testyedni.myshopify.com', // MYSHOP.myshopify.com
  shopify_api_key: 'f4f5848a7081c1a2b95aa6e5e4ba2df4', // Your API key
  access_token: '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' // Your API password
});
Shopify.get('/admin/products.json', function(err, data, headers){
    console.log(data); // Data contains product json information
    console.log(headers); // Headers returned from request
  });

//   var post_data = {
//     "product": {
//       "title": "Burton Custom Freestlye 151",
//       "body_html": "<strong>Good snowboard!</strong>",
//       "vendor": "Burton",
//       "product_type": "Snowboard",
//       "variants": [
//         {
//           "option1": "First",
//           "price": "10.00",
//           "sku": 123
//         },
//         {
//           "option1": "Second",
//           "price": "20.00",
//           "sku": "123"
//         }
//       ]
//     }
//   }
   
//   Shopify.post('/admin/products.json', post_data, function(err, data, headers){
//     console.log(data);
//   });

// var put_data = {
//     "product": {
//       "body_html": "<strong>Updated!</strong>"
//     }
//   }
   
//   Shopify.put('/admin/products/5417293840544.json', put_data, function(err, data, headers){
//     console.log(data);
//   });

  Shopify.delete('/admin/products/5417293840544.json', function(err, data, headers){
    console.log(data);
  });