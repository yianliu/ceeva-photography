export default () => {
	return [
		{
			name: "Home",
			slug: "/",
			showInNav: false
		},
		{
			name: "About",
			slug: "about",
			showInNav: true
		},
		{
			name: "Portfolio",
			slug: "portfolio",
			showInNav: true,
			children: [
				{
					name: "Portrait",
					slug: "portrait",
					showInNav: true
				},
				{
					name: "Commercial",
					slug: "commercial",
					showInNav: true
				}
			]
		},
		{
			name: "Contact",
			slug: "contact",
			showInNav: true
		}
	]
}
