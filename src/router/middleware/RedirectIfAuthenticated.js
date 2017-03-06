router.beforeEach((to, from, next) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'));
    if(authUser && authUser.access_token) {
        if(to.path == '/') {
            next({name: 'dashboard'})
        }
        next()
    }
    next()
});
