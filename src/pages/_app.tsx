import Layout from "../components/Layouts";

import { useRouter } from "next/router";

import "../styles/globals.css";

function getDirection(locale) {
    if (locale === "kr") {
        return "rtl";
    }

    return "ltr";
}

// import { DefaultSeo } from "next-seo";

// const DEFAULT_SEO = {
//     title: "",
//     description: "meta head description에 들어가는 값",
//     canonical: "https://www.carrotins.com",
//     openGraph: {
//         type: "website",
//         locale: ["en", "ko"],
//         url: "카카오톡, 페이스북에 링크 넣으면 연결되는 url",
//         title: "카카오톡, 페이스북에 링크 넣으면 올라올 타이틀",
//         site_name: "사이트이름",
//         images: [
//             {
//                 url: "카카오톡, 페이스북에에 링크 넣으면 올라올 이미지",
//                 width: 285,
//                 height: 167,
//                 alt: "이미지",
//             },
//         ],
//     },
// };
function MyApp({ Component, pageProps }) {
    const { locale } = useRouter();

    return (
        <>
            {/* <DefaultSeo {...DEFAULT_SEO} /> */}
            <Layout>
                <Component {...pageProps} dir={getDirection(locale)} />
            </Layout>
        </>
    );
}

export default MyApp;
