export default function robots(){
    const baseUrl = "https://great-grandfather-bakery.netlify.app/";

    return{
        rules:{
            userAgent:"*",
            allow:"/"
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}