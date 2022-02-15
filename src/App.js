import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Shop/ProductDetail";
import useFetchData from "./hook/useFetchData";

const responseData = {
    products: [
        {
            id: 150,
            name: "The Power Prenatal (for eggs)",
            type: "physical",
            sku: "PNV-PWREGGS-1",
            description:
                "<h3><strong>When your eggs need some extra love.</strong></h3>\n<div><span>You can&rsquo;t stop the clock, but you can equip your eggs with a prenatal that goes above and beyond. This one&rsquo;s got all the go-tos you&rsquo;d expect, plus choline (which most prenatals skip or skimp on) and other powerful antioxidants and ingredients like COQ10, PQQ and NAC to protect DNA and fend off everyday stressors.&nbsp;</span></div>\n<h3><strong>What makes it special.</strong></h3>\n<ul>\n<li><span>30 daily packs to simplify your routine&mdash;just one sachet a day</span></li>\n<li><span>Scientifically backed ingredients like NAC, COQ10, PQQ and Reservatrol to support egg quality.</span></li>\n<li><span>High-quality bioavailable ingredients (that means they&rsquo;re ready for your body to use) at just the right dosages</span></li>\n<li><span>Free of gluten, dairy, shellfish, yeast, colors/dyes and preservatives.&nbsp;</span><br /><span></span></li>\n</ul>\n<h3><strong>Who it's designed for.</strong></h3>\n<div><span>Women and people with eggs and/or a uterus who:</span></div>\n<ul>\n<li><span>are over 30 and thinking about trying</span></li>\n<li><span>have been trying for more than 6 months</span></li>\n<li><span>are supported by a fertility clinic&nbsp;</span></li>\n</ul>\n",
            price: 60,
            search_keywords:
                "Prenatal, Women's prenatal, vitamins, prenatal vitamins, prenatals, egg health, antioxidants",
            page_title: "The Power Prenatal (for eggs)",
            meta_description:
                "A premium prenatal designed for women and people with eggs, with ingredients like NAC, COQ10, and PQQ that support fertility and egg health.",
            primary_image: {
                description: "The Power Prenatal for eggs box",
                url_standard:
                    "https://cdn11.bigcommerce.com/s-7vai0w05ca/products/127/images/470/PDP-Photos---Boxes---3__42243.1625952115.1280.1280__02320.1626025242.386.513.jpg?c=1",
            },
            options: [],
            modifiers: [
                {
                    id: 156,
                    name: "name",
                    display_name: "Full Name",
                    type: "text",
                    required: false,
                    config: {
                        default_value: "",
                        text_characters_limited: true,
                        text_min_length: 1,
                        text_max_length: 50,
                    },
                    option_values: [],
                },
                {
                    id: 159,
                    name: "Delivery Frequency",
                    display_name: "Subscribe & Save",
                    type: "radio_buttons",
                    required: true,
                    config: [],
                    option_values: [
                        {
                            id: 112,
                            option_id: 159,
                            label: "One-time",
                            is_default: true,
                        },
                        {
                            id: 113,
                            option_id: 159,
                            label: "Monthly (save 10%)",
                            is_default: false,
                        },
                    ],
                },
            ],
        },
        {
            id: 151,
            name: "The Power Prenatal (for sperm)",
            type: "physical",
            sku: "PNV-PWREGGS-1",
            description:
                '<h3><strong>Go for gold at your next swim meet.</strong><span></span></h3>\n<div><span>Despite being half of the equation, sperm is often overlooked when it comes to prenatals, but it needs folate too! Get it&mdash;and all the essentials such as Choline (which prenatals often skip or skimp on), Selenium, Zinc, Vitamin D and more&mdash;in daily doses to take your swimmers to the top of their game.</span></div>\n<h3><strong>What makes it special.</strong></h3>\n<ul>\n<li data-stringify-indent="0">30 daily packs to simplify your routine&mdash;just one sachet a day</li>\n<li><span>Loaded with all the essentials to support you while you&rsquo;re trying to conceive</span></li>\n<li><span>High-quality bioavailable ingredients (that means they&rsquo;re ready for your body to use) at just the right dose that most other brands miss</span></li>\n<li><span>Vegan formula free of gluten, dairy, shellfish, yeast, colors/dyes and preservatives</span></li>\n</ul>\n<h3><strong>Who it\'s designed for.</strong></h3>\n<div><span>Men and people with sperm who <strong><em>either</em></strong>:</span></div>\n<ul>\n<li><span>are under 30 and are thinking about trying</span></li>\n<li><span>are under 30 and have been trying for less than 6 months</span><span></span></li>\n</ul>\n',
            price: 40,
            search_keywords:
                "Prenatal, Women's prenatal, vitamins, prenatal vitamins, prenatals, egg health, antioxidants",
            page_title: "The Power Prenatal (for eggs)",
            meta_description:
                "A premium prenatal designed for women and people with eggs, with ingredients like NAC, COQ10, and PQQ that support fertility and egg health.",
            primary_image: {
                id: 470,
                description: "The Power Prenatal for Sperm box",
                url_standard:
                    "https://cdn11.bigcommerce.com/s-7vai0w05ca/products/127/images/470/PDP-Photos---Boxes---3__42243.1625952115.1280.1280__02320.1626025242.386.513.jpg?c=1",
            },
            options: [],
            modifiers: [
                {
                    id: 156,
                    name: "name",
                    display_name: "Full Name",
                    type: "text",
                    required: false,
                    config: {
                        default_value: "",
                        text_characters_limited: true,
                        text_min_length: 1,
                        text_max_length: 50,
                    },
                    option_values: [],
                },
                {
                    id: 159,
                    name: "Delivery Frequency",
                    display_name: "Subscribe & Save",
                    type: "radio_buttons",
                    required: true,
                    config: [],
                    option_values: [
                        {
                            id: 112,
                            option_id: 159,
                            label: "One-time",
                            is_default: true,
                        },
                        {
                            id: 113,
                            option_id: 159,
                            label: "Monthly (save 10%)",
                            is_default: false,
                        },
                    ],
                },
            ],
        },
    ],
};

function App() {
    // const { data, error, isLoading } = useFetchData(
    //     "https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview"
    // );

    const isLoading = false;
    const products = responseData.products;
    // const products = data;
    // console.log(isLoading);

    return (
        <Layout>
            {!isLoading && (
                <Routes>
                    <Route path="/" element={<Shop products={products} />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route
                        path="/ProductDetail/:id"
                        element={<ProductDetail products={products} />}
                    />
                </Routes>
            )}
        </Layout>
    );
}

export default App;