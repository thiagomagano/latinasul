import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.PUBLIC_PB_API);

export default pb;
