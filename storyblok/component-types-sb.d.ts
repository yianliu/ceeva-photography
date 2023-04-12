import { StoryblokStory } from "storyblok-generate-ts"

export interface AssetStoryblok {
	alt?: string
	copyright?: string
	id: number
	filename: string
	name: string
	title?: string
	focus?: string
	[k: string]: any
}

export interface BannerStoryblok {
	desktop_background?: AssetStoryblok
	body?: any
	position: "" | "start" | "center" | "right"
	alignment: "" | "left" | "center" | "right" | "justify"
	dark_text?: boolean
	tablet_background?: AssetStoryblok
	mobile_background?: AssetStoryblok
	darken?: boolean
	links?: CtaStoryblok[]
	_uid: string
	component: "banner"
	[k: string]: any
}

export type MultilinkStoryblok =
	| {
			cached_url?: string
			linktype?: string
			[k: string]: any
	  }
	| {
			id?: string
			cached_url?: string
			anchor?: string
			linktype?: "story"
			story?: {
				name: string
				created_at?: string
				published_at?: string
				id: number
				uuid: string
				content?: {
					[k: string]: any
				}
				slug: string
				full_slug: string
				sort_by_date?: null | string
				position?: number
				tag_list?: string[]
				is_startpage?: boolean
				parent_id?: null | number
				meta_data?: null | {
					[k: string]: any
				}
				group_id?: string
				first_published_at?: string
				release_id?: null | number
				lang?: string
				path?: null | string
				alternates?: any[]
				default_full_slug?: null | string
				translated_slugs?: null | any[]
				[k: string]: any
			}
			[k: string]: any
	  }
	| {
			url?: string
			cached_url?: string
			anchor?: string
			linktype?: "asset" | "url"
			[k: string]: any
	  }
	| {
			email?: string
			linktype?: "email"
			[k: string]: any
	  }

export interface CtaStoryblok {
	link: MultilinkStoryblok
	name?: string
	_uid: string
	component: "cta"
	[k: string]: any
}

export type MultiassetStoryblok = {
	alt?: string
	copyright?: string
	id: number
	filename: string
	name: string
	title?: string
	[k: string]: any
}[]

export interface GalleryStoryblok {
	title: string
	images: MultiassetStoryblok
	_uid: string
	component: "gallery"
	[k: string]: any
}

export interface NavbarStoryblok {
	menu: NavlinkStoryblok[]
	title: string
	_uid: string
	component: "navbar"
	[k: string]: any
}

export interface NavlinkStoryblok {
	link?: MultilinkStoryblok
	name: string
	children?: NavlinkStoryblok[]
	_uid: string
	component: "navlink"
	[k: string]: any
}

export interface PageStoryblok {
	body?: any[]
	_uid: string
	component: "page"
	uuid?: string
	[k: string]: any
}
