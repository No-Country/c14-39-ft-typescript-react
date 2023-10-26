import { MercadoPagoConfig } from 'mercadopago';

const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN as string

export const client = new MercadoPagoConfig({
  accessToken,
  options: {
    timeout: 5000
  }
});