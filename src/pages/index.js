import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            <main className="max-w-screen-2xl mx-auto">
                {/* Banner */}
                <Banner />

                {/* Product Feed */}
                <ProductFeed products={products} />
            </main>

            {/* <div className="h-25 w-full border-t-2 mt-5 mb-10" /> */}

            {/* Footer */}
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return {
        props: {
            products, session
        },
    };
}

// GET -> https://fakestoreapi.com/products
