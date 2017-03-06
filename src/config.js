export default {
    clientId: 2,
    clientSecret: '2fTxU8FNdlLvgv8QfeOZ3qPzD4M3Qglh24hecga3',
    baseUrl: 'http://playground.dev/',
    getHeader: function() {
       const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
       const header = {
           'Accept': 'application/json',
           'Authorization': 'Bearer ' + tokenData.access_token
       };

       return header;
    }
}