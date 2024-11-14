const image = `
	image {
		...,
		image {
			_type,
			alt,
			asset->
		}
	}
`

const video = `
	_type,
	asset->
`

const link = `
	label,
	_type,
	openInNewTab,
	jumpScrollId,
	externalLink,
	internalLink->{
		_type,
		title,
		slug
	},
	file{
		_type,
		asset->
	}
`;

const internalLink = `
	_type,
	internalLink->{
		_type,
		title,
		slug
	}
`;

const normal = `
	...,
	en[]{
		...,
		markDefs[]{
			...,
			_type == 'link' => {
				...,
				${link}
			}
		}
	}
`;

const seo = `
	seo {
		...,
		"ogImageUrl": socialShareImage.asset->url
	}
`

export const homeQuery = `*[_type == 'home'][0]{
	...,
	title,
	${image},
	paragraph {
		...,
		${normal}
	},
	${seo}
}`;

export const pageQuery = `*[_type == 'page' && slug.current == $slug][0]{
	title,
	slug,
	...,
	${seo}
}`;

// example of how to use a variable eg. ${image} in a query

// export const homeQuery = `*[_type == 'home'][0]{
// 	...,
// 	blocks[]{
// 		...,
// 		_type == 'singleImage' => {
// 			...,
// 			${image},
// 			link{
// 				...,
// 				${internalLink}
// 			},
// 			buttons[]{
// 				...,
// 				${link}
// 			}
// 		},
// 	}
// }`;
