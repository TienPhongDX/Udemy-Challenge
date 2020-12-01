const puppeteer = require ("puppeteer");
const randomString = require ("randomstring");

const createPDF = async () =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options ={
        path: "pdf/" + randomString.generate(10) + ".pdf",
        format: 'A4'
    };

    await page.goto("https://vntalking.com/object-va-prototype-javascript-cong-cu-ho-tro-oop-cho-js.html", {waitUntil: "networkidle2"});
    await page.pdf(options);

    await browser.close();
}

createPDF();