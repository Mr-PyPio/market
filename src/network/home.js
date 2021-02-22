// 首页网络请求,方便管理首页的URL

import {request} from './request.js'

export function getHomeMultidata(){
	return request({
		url: '/home/multidata'
	})
}

export function getHomeGoods(type, page){
	return request({
		url: '/home/data',
		// /home/data?type=type&page=page
		params: {
			type,
			page
		}
	})
}
