import { BASE_URL, bela } from '../api';
export const getInvoice = async (invoice_id) => {
    const res = await bela(`/invoices/api/invoice-data/${invoice_id}`);
    return res.data
};