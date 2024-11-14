import { defineLive } from "next-sanity";
import { client } from "@/lib/sanity/lib/client";
import { token } from "@/lib/sanity/lib/token";

export const { sanityFetch, SanityLive } = defineLive({
	client,
	browserToken: token,
	serverToken: token,
});