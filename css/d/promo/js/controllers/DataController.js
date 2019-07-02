const app = angular.module("Offer", []);
app.controller("DataController", ["$scope", function(t) {
    t.currYear = (new Date).getFullYear(), t.data = {
        url: "macronutrient-forskolin.com",
        phone: "1-877-256-6110",
        phoneS2: "1-866-445-1624",
        email: "admin@macronutrient-forskolin.com",
        emailS2: "admin@macronutrient-keto.com",
        returnAddress: {
            part1: "16478 Beach Blvd #300, Westminster",
            part2: "CA 92683, United States\n"
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
            },
            initial: 45,
            autoShip: 30,
            autoShipW: "thirty"
        }
    }, t.downsell = "no", t.product_extra = "ShippingInsMain", t.shippingCost = 0, t.shippingSave = 0, t.expressCost = 0, t.totalCost = 0, t.updateExpress = function(p) {
        t.expressCost = 1 == p ? t.data.processing.express : t.data.processing.standard.cost, t.updateTotal()
    }, t.updateShipping = function(p) {
        "yes" != p ? (t.shippingCost = t.S1.pricing.shipping.noDiscount, t.shippingSave = t.S1.pricing.shipping.savings.noDiscount) : (t.shippingCost = t.S1.pricing.shipping.discount, t.shippingSave = t.S1.pricing.shipping.savings.discount), t.updateTotal()
    }, t.updateTotal = function() {
        t.totalCost = t.shippingCost + t.expressCost
    }, t.updateDownsell = function(p) {
        t.downsell = p, t.updateShipping(p)
    }, t.S1 = {
        name: "MacroNutrient Forskolin",
        bottleImg: "product-S1.png",
        largeImg: "S1-large.png",
        threeImg: "product-S1-triple.png",
        pricing: {
            trial: 0,
            product: 89.99,
            shipping: {
                original: 4.95,
                savings: {
                    noDiscount: 5,
                    discount: 7
                },
                noDiscount: 4.95,
                discount: 2.9
            }
        },
        supply: 30,
        supplyW: "thirty",
        capsules: 60
    }, t.S2 = {
        name: "MacroNutrient Keto",
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
    }, t.S3 = {
        name: "Trim Pulse Garcinia",
        bottleImg: "product-S3.png",
        pricing: {
            product: 32.99
        },
        supply: 30,
        supplyW: "thirty",
        capsules: 60
    }, t.rebill = function(t, p) {
        return t - t * p
    }
}]);