router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        const authUser = JSON.parse(window.localStorage.getItem('authUser'));
        if(authUser && authUser.access_token) {
            next()
        } else {
            next({name: 'login'})
        }
    }
    next()
});
