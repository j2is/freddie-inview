"use client";

import React, { useState, Fragment, useCallback, useRef, useEffect } from "react";
import ImageBlockStyles from "./ImageBlock.styled";
import Link from "next/link";
import SimpleBlockContent from "../SimpleBlockContent";
import useWindowSize from "@/lib/useWindowSize";

import { urlFor, urlPortraitFor } from "@/lib/sanity";

export default function ImageBlock({
	portraitMobileCrop,
	alt,
	image,
	slug,
	isThumb,
	asset,
	noLazy,
	caption,
	hasPaddingBottom = true,
	desktopDimensions,
	mobileDimensions,
	textClass,
}) {
	const ref = useRef();
	const mobileBreakpoint = 750;
	const [loadingState, setLoadingState] = useState();
	const { viewportW } = useWindowSize();
	const [paddingBottom, setPaddingBottom] = useState("0%");

	const getPaddingBottom = useCallback(() => {
		const defaultRatio = "0%";

		if (!hasPaddingBottom) {
			return 'initial';
		}

		if (!asset) {
			return defaultRatio;
		}

		if (
			!"metadata" in asset ||
			!asset.metadata ||
			!"dimensions" in asset.metadata ||
			!"aspectRatio" in asset.metadata.dimensions
		) {
			return defaultRatio;
		}

		const viewportW =
			typeof window !== "undefined"
				? Math.max(
					window.innerWidth || html.clientWidth || window.screen.availWidth
				)
				: 1440;

		if (desktopDimensions) {
			return `${(desktopDimensions?.height / desktopDimensions?.width) * 100}%`;
		}

		if (portraitMobileCrop && viewportW <= mobileBreakpoint) {
			return `${process.env.portraitRatio * 100}%`;
		}

		return `${asset.metadata.dimensions.height / (asset.metadata.dimensions.width / 100)
			}%`;
	}, [asset, desktopDimensions, portraitMobileCrop, mobileBreakpoint]);

	const lazyImageLoad = () => {
		setLoadingState("lazy-visible");
	};

	const setupLazyLoading = () => {
		const img = ref.current.querySelector("img");
		if (!img.complete) {
			setLoadingState("lazy-pending");
			img.addEventListener("load", lazyImageLoad, false);
			img.addEventListener("error", lazyImageLoad, false);
		}
	};

	useEffect(() => {
		if ("loading" in HTMLImageElement.prototype) {
			// setupLazyLoading();
		}
	}, []);

	const renderBody = () => (
		<section
			ref={ref}
			className={`${loadingState} image-wrapper`}
			style={{ paddingBottom: getPaddingBottom() }}
		>
			<picture>
				<source
					media="(max-width: 750px)"
					srcSet={
						portraitMobileCrop
							? urlPortraitFor({ image, isThumb: true })
							: urlFor({
								image,
								isThumb: true,
								width: mobileDimensions?.width,
								height: mobileDimensions?.height,
							})
					}
				/>
				<img
					src={urlFor({
						image,
						isThumb: false,
						width: desktopDimensions?.width,
						height: desktopDimensions?.height,
					})}
					loading={!noLazy ? "lazy" : ""}
					alt={alt || "John"}
				/>
			</picture>
		</section>
	);
	return (
		<ImageBlockStyles
			className={`image-block ${!hasPaddingBottom ? "no-bottom-padding" : ""} ${textClass || ''}`}
		>
			{slug !== undefined ? (
				<Link href={slug} scroll={false}>
					<a>{renderBody()}</a>
				</Link>
			) : (
				renderBody()
			)}
			{caption ? <SimpleBlockContent blocks={caption} /> : null}
		</ImageBlockStyles>
	);
}
