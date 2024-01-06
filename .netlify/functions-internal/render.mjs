import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Randi.png","Tyler.png","favicon.ico","favicon.png","images/2017-08-18-17.46.16.jpg","images/20170723093657-84223-profile.png","images/2022-biketrip-start.jpg","images/Hike-to-campsite.png","images/La-Plata.png","images/LaPlata1.jpg","images/LaPlata2.jpg","images/LaPlata3.jpg","images/LaPlata4.jpg","images/LaPlata5.jpg","images/LaPlata6.jpg","images/Missouri1.jpeg","images/Missouri10.jpeg","images/Missouri2.jpeg","images/Missouri3.jpeg","images/Missouri4.jpeg","images/Missouri5.jpeg","images/Missouri6.jpeg","images/Missouri7.jpeg","images/Missouri8.jpeg","images/Missouri9.jpeg","images/MtHC1.jpg","images/MtHC10.jpg","images/MtHC11.jpg","images/MtHC12.jpg","images/MtHC13.jpg","images/MtHC14.jpg","images/MtHC15.jpg","images/MtHC16.jpg","images/MtHC2.jpg","images/MtHC3.jpg","images/MtHC6.jpg","images/MtHC7.jpg","images/MtHC8.jpg","images/MtHC9.jpg","images/RandiPack-small-1.jpg","images/RandiToiletries-small.jpg","images/Randiclothing-small.jpg","images/Shavano1.jpg","images/Shavano2.jpg","images/Shavano3.jpg","images/Shavano4.jpg","images/Shavano5.jpg","images/Shavano_cover.jpg","images/Tylerfolduphat-small.jpg","images/aboutus.jpeg","images/austria2022.jpg","images/berlin-biking-1.jpg","images/berlin-hike-1.jpg","images/berlin-in-stone.jpg","images/berlin-winter-1.jpg","images/budapest-boardgamebar.jpg","images/budapest-cover.jpg","images/bulgaria-1.jpg","images/bulgaria-2.jpg","images/bulgaria-3.jpeg","images/bulgaria-4.jpg","images/bulgaria-cover.jpg","images/christmas-buckeyes.jpg","images/clock.jpg","images/co-nc-mx.jpg","images/co-table-climb.jpeg","images/co-table-elevation.png","images/co-table-view-from-top.jpeg","images/co-table-waiting.jpeg","images/croatia-bikes.jpg","images/croatia-boat.jpg","images/croatia-food.jpg","images/croatia-food2.jpg","images/croatia-food3.jpg","images/croatia-food4.jpg","images/croatia-food5.jpg","images/croatia-hvar-map-with-island.png","images/croatia-korcula-map-2015.png","images/croatia-krka.jpg","images/croatia-map-2015.png","images/croatia-ocean.jpg","images/croatia-path.jpg","images/croatia-restaraunt.jpg","images/croatia-rock-beach.jpg","images/croatia-sign.jpg","images/croatia-wall-walk.jpg","images/croatia-water.jpg","images/croatia-wine.jpg","images/croatiacost.png","images/crystalmills.png","images/crystalmills1.jpg","images/crystalmills10.jpg","images/crystalmills11.jpg","images/crystalmills12.jpg","images/crystalmills13.jpg","images/crystalmills14.jpg","images/crystalmills15.jpg","images/crystalmills2.jpg","images/crystalmills3-1.jpg","images/crystalmills4.jpg","images/crystalmills5.jpg","images/crystalmills6.jpg","images/crystalmills7.jpg","images/crystalmills8.jpg","images/crystalmills9.jpg","images/democrat-hike-elevation.png","images/elevation-profile.png","images/eurovelo3-cover.jpg","images/ev6-france.jpg","images/fethiye-boat-launch-1.png","images/fethiye-boat-launch-2.png","images/fethiye-boat-launch-3.png","images/fethiye-boat-launch-4.png","images/fethiye-boat-launch-5.png","images/fethiye-boat-launch-6.png","images/fethiye-boat-launch-7.png","images/fethiye-cover.jpg","images/guadalajara.jpg","images/img_20211002_100551138.jpg","images/img_20211011_115432277.jpg","images/img_20211012_094754045_hdr.jpg","images/img_20211012_102511267_hdr.jpg","images/img_20211018_073242885.jpg","images/img_20211018_073452065_hdr.jpg","images/img_20211023_171517147_hdr.jpg","images/img_20211024_145447805_hdr.jpg","images/img_20211103_170741760_hdr.jpg","images/img_20211104_082643.jpg","images/img_20211106_145331.jpg","images/img_20211107_132849736.jpg","images/img_20211204_133609220.jpg","images/img_20220525_110250.jpg","images/malta1.jpg","images/malta2.jpg","images/malta3.jpg","images/malta4.jpg","images/malta5.jpg","images/moose.jpg","images/mtb2.jpg","images/mtb3.jpg","images/mtb4.jpg","images/mth1.jpg","images/mth2.jpg","images/mth4.jpg","images/northshore.jpg","images/oslo-frogner.jpg","images/p5280071.jpg","images/pm1.jpg","images/portugal1.jpg","images/portugal2.jpg","images/portugal3.jpg","images/portugal4.jpg","images/portugal5.jpg","images/portugal6.jpg","images/portugal7.jpg","images/puebla-mole.jpg","images/puebla-pasita.jpg","images/puebla-timeline.jpg","images/puebla-volcano.jpg","images/queretaro.jpg","images/randi.png","images/randiBag-small.jpg","images/randiWaterBottleSmall.jpg","images/randifootwear-small.jpg","images/rhinefalls.jpg","images/roadtrip2022-dc.jpg","images/sancris1.jpg","images/sancris2.jpg","images/sancris3.jpg","images/speaking.jpg","images/squawpass1.jpg","images/stuckinsnow01.jpg","images/stuckinsnow02.jpg","images/stuckinsnow03.jpg","images/stuckinsnow04.jpg","images/stuckinsnow05.jpg","images/stuckinsnow06.jpg","images/stuckinsnow07.jpg","images/stuckinsnow08.jpg","images/stuckinsnow09.jpg","images/stuckinsnow10.jpg","images/swimming.png","images/traverse-city.jpg","images/ts.png","images/turkiye-butterfly-valley-1.jpg","images/turkiye-fish-market.jpg","images/turkiye-food.jpg","images/turkiye-kayakoy.jpg","images/turkiye-patara.jpg","images/turkiye2cave.jpg","images/turkiye2cover.jpg","images/turkiye2dinner.jpg","images/turkiye2hike.jpg","images/turkiye2sub.jpg","images/tylerbackpack-small-1.jpeg","images/tylerbuttonup-small.jpg","images/tylerflash-small.jpeg","images/tylerlongsleeve-small.jpg","images/tylerpants-small.jpeg","images/tylerrainjacket-small.jpeg","images/tylershirts-small.jpg","images/tylershoes-small.jpg","images/tylershorts-small.jpg","images/tylersmallbits-small.jpg","images/white-ranch-elevation-map.png","images/whiteranch1.jpeg","images/whiteranch2.jpeg","images/whiteranch3.jpeg","images/whiteranch4.jpeg","images/whiteranch7.jpeg","randi-profile.png","tyler-profile.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.559ecb7a.js","app":"_app/immutable/entry/app.96c3af8e.js","imports":["_app/immutable/entry/start.559ecb7a.js","_app/immutable/chunks/index.a83001f8.js","_app/immutable/chunks/singletons.16f65af3.js","_app/immutable/entry/app.96c3af8e.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.a83001f8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
