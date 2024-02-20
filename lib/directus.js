import { createDirectus, rest } from "@directus/sdk";
console.log(process.env.DIRECT_US_URL,"process.env.DIRECT_US_URL")
const directus = createDirectus(process.env.DIRECT_US_URL).with(rest());

export default directus;
