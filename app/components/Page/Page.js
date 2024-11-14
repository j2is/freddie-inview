import PageStyles from "./Page.styled";
import SimpleBlockContent from "../SimpleBlockContent";
import Link from "next/link";

export default function Page({ title, paragraph, encodeDataAttribute }) {
	return (
		<PageStyles>
			{!!title && (
				<h1 {...encodeDataAttribute?.('title')}>
					Page: {title}
				</h1>
			)}
			{!!paragraph && (
				<div {...encodeDataAttribute?.('paragraph')}>
					<SimpleBlockContent blocks={paragraph} />
				</div>
			)}
			<Link href={'/'}>
				Back to home
			</Link>
		</PageStyles>
	);
}