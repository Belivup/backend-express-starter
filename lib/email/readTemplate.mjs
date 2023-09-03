import fs from "node:fs";

async function readTemplate(template) {
    try {
        return await fs.promises.readFile(`./lib/email/templates/${template}.html`, 'utf-8');
    } catch (error) {
        console.error('Error reading email template:', error);
        throw error;
    }
}
export default readTemplate
