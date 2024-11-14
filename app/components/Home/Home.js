import HomeStyles from "./Home.styled";
import LocalisedString from "../LocalisedString";
import SimpleBlockContent from "../SimpleBlockContent";
import Link from "next/link";
import ImageBlock from '../ImageBlock';

export default function Home({ title, paragraph, encodeDataAttribute, image }) {

	return (
		<HomeStyles>
			{!!title && (
				<h1 {...encodeDataAttribute?.('title')}>
					<LocalisedString string={title} />
				</h1>
			)}
			{!!paragraph && (
				<div {...encodeDataAttribute?.('paragraph')}>
					<SimpleBlockContent blocks={paragraph} />
				</div>
			)}
			<Link href={'/test'}>
				Test another page
			</Link>
			{!!image?.image?.asset && (
				<ImageBlock
					image={image?.image}
					asset={image?.image?.asset}
					hasPaddingBottom={true}
				/>
			)}
		</HomeStyles>
	);
}