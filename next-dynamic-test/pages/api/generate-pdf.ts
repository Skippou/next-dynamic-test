// pages/api/generate-pdf.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

type PdfGenerationRequestData = {
    projectId: string;
    environment: 'development' | 'production';
};

const SITE_URL_PROD = 'https://solar-sizing-calculator.vercel.app';
const SITE_URL_DEV = 'http://localhost:3000';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { projectId, environment }: PdfGenerationRequestData = req.body;
    const siteUrl = environment === 'production' ? SITE_URL_PROD : SITE_URL_DEV;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const puppeteerAccessToken = process.env.PUPPETEER_ACCESS_TOKEN || "";
        if (!puppeteerAccessToken) {
            throw new Error("Puppeteer access token not set.");
        }
        await page.setExtraHTTPHeaders({
            "Puppeteer-Access-Token": puppeteerAccessToken,
        });
        const endpointUrl = `${siteUrl}/project/${encodeURIComponent(projectId)}`;
        await page.goto(endpointUrl, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#proposal');
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();
        res.status(200).json({ pdfBase64: pdfBuffer.toString('base64') });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Error generating PDF' });
    }
}