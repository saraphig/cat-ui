
// 配置路由
export const SetRouterTransition = function(router) {
	/* change title */
	router.afterEach((transition) => {
		const title = transition.meta.pageTitle;
		document.title = title;
	});
};


