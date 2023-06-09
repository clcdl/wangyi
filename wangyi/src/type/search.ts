export interface HotSearchType {
	first: string;
	second: number;
	third?: any;
	iconType: number;
}
export class HotSearch {
    list:HotSearchType[]=[]
}

export interface Artist {
	id: number;
	name: string;
	picUrl?: any;
	alias: any[];
	albumSize: number;
	picId: number;
	fansGroup?: any;
	img1v1Url: string;
	img1v1: number;
	trans?: any;
}

export interface Album {
	id: number;
	name: string;
	artist: Artist;
	publishTime: number;
	size: number;
	copyrightId: number;
	status: number;
	picId: number;
	mark: number;
}

export interface Song {
	id: number;
	name: string;
	artists: Artist[];
	album: Album;
	duration: number;
	copyrightId: number;
	status: number;
	alias: any[];
	rtype: number;
	ftype: number;
	mvid: number;
	fee: number;
	rUrl?: any;
	mark: number;
}

export interface SearchType {
	songs: Song[];
	hasMore: boolean;
	songCount: number;
}
export class Search {
	data:SearchType = {
		songs:[],
		hasMore:false,
		songCount:-1
	}
}

//hot-search-detail
export interface HotSearchDetailType {
	searchWord: string;
	score: number;
	content: string;
	source: number;
	iconType: number;
	iconUrl: string;
	url: string;
	alg: string;
}
export class HotSearchDetail {
	list:HotSearchDetailType[]=[]
}
//association
export interface Playlist {
	id: number;
	name: string;
	coverImgUrl: string;
	creator?: any;
	subscribed: boolean;
	trackCount: number;
	userId: number;
	playCount: number;
	bookCount: number;
	specialType: number;
	officialTags?: any;
	action?: any;
	actionType?: any;
	recommendText?: any;
	score?: any;
	description: string;
	highQuality: boolean;
}

export interface AssociationType {
	albums: Album[];
	artists: Artist[];
	songs: Song[];
	playlists: Playlist[];
	order: string[];
}
export class Association {
	data:AssociationType = {
		albums:[],
		artists:[],
		songs:[],
		playlists:[],
		order:[]
	}
}