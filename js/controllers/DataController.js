const app = angular.module("Offer", []);
app.controller("DataController", [
  "$scope",
  function(t) {
    function i() {
      var t = new Date();
      return t.getFullYear();
    }
    (t.currYear = i()),
      (t.data = {
        url: "keto-six.com/v1",
        phone: "1-866-400-2006",
        phones2: "1-866-400-6616",
        email: "info@keto-six.com",
        emailS2: "info@forskolin-six.com",
        returnAddress: {
          part1: "16478 Beach Blvd #377",
          part2: "Westminster, CA 92683\n "
        },
        processing: {
          express: 1.99,
          standard: {
            cost: 0,
            text: "FREE"
          }
        },
        rebill: {
          trialLength: {
            trialDays: 10,
            shipping: 4,
            total: 14,
            totalW: "fourteen",
            totals2: 15
          },
          initial: 45,
          autoShip: 30,
          autoShipW: "thirty"
        },
        rebill2: {
          trialLength: {
            trialDays: 11,
            shipping: 4,
            total: 15,
            totalW: "fifteen",
            totals2: 15
          },
          initial: 45,
          autoShip: 30,
          autoShipW: "thirty"
        }
      }),
      (t.downsell = "no"),
      (t.product_extra = "ShippingInsMain"),
      (t.shippingCost = 0),
      (t.shippingSave = 0),
      (t.expressCost = 0),
      (t.totalCost = 0),
      (t.updateExpress = function(i) {
        1 == i
          ? (t.expressCost = t.data.processing.express)
          : (t.expressCost = t.data.processing.standard.cost),
          t.updateTotal();
      }),
      (t.updateShipping = function(i) {
        "yes" != i
          ? ((t.shippingCost = t.S1.pricing.shipping.noDiscount),
            (t.shippingSave = t.S1.pricing.shipping.savings.noDiscount))
          : ((t.shippingCost = t.S1.pricing.shipping.discount),
            (t.shippingSave = t.S1.pricing.shipping.savings.discount)),
          t.updateTotal();
      }),
      (t.updateTotal = function() {
        t.totalCost = t.shippingCost + t.expressCost;
      }),
      (t.updateDownsell = function(i) {
        (t.downsell = i), t.updateShipping(i);
      }),
      (t.S1 = {
        name: "Keto 6",
        bottleImg: "product-S1.png",
        largeImg: "S1-large.png",
        threeImg: "product-S1-triple.png",
        pricing: {
          trial: 0,
          product: 89.99,
          shipping: {
            original: 9.95,
            savings: {
              noDiscount: 5,
              discount: 7
            },
            noDiscount: 4.95,
            discount: 2.95
          }
        },
        supply: 30,
        supplyW: "thirty",
        capsules: 60
      }),
      (t.S2 = {
        name: "Forskolin 6",
        bottleImg: "product-S2.png",
        pricing: {
          product: 87.99,
          shipping: {
            noDiscount: 4.99,
            discount: 2.99
          }
        },
        supply: 30,
        supplyW: "thirty",
        capsules: 60
      }),
      (t.S3 = {
        name: "Trim Pulse Garcinia",
        bottleImg: "product-S3.png",
        pricing: {
          product: 32.99
        },
        supply: 30,
        supplyW: "thirty",
        capsules: 60
      }),
      (t.rebill = function(t, i) {
        return t - t * i;
      });
  }
]);
