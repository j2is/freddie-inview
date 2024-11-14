import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/lib/sanity/lib/client";
import { token } from "@/lib/sanity/lib/token"

export const { GET } = defineEnableDraftMode({
	client: client.withConfig({ token }),
});