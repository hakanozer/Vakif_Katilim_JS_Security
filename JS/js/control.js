const localData = localStorage.getItem('user')
if (localData) {
    sessionStorage.setItem('user', localData)
}


const stData = sessionStorage.getItem('user')
if (!stData) {
    window.location.href = 'index.html'
}
let obj = null
async function userControl() {
    /*
    await axios.get('https://ipapi.co/json/').then(resData => {
        const key = btoa(resData.data.ip)
        try {
            var bytes  = CryptoJS.AES.decrypt(stData, key);
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            obj = JSON.parse(originalText)
            $('#namesurname').text(obj.firstName + " " + obj.lastName)
        } catch (error) {
            sessionStorage.removeItem('user')
            window.location.href = 'index.html'
        }
    })*/
    var _0x27ea=["\x69\x70","\x64\x61\x74\x61","\x64\x65\x63\x72\x79\x70\x74","\x41\x45\x53","\x65\x6E\x63","\x70\x61\x72\x73\x65","\x66\x69\x72\x73\x74\x4E\x61\x6D\x65","\x20","\x6C\x61\x73\x74\x4E\x61\x6D\x65","\x74\x65\x78\x74","\x23\x6E\x61\x6D\x65\x73\x75\x72\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x67\x65\x74"]; await axios[_0x27ea[18]](_0x27ea[17])[_0x27ea[16]]((_0x3dffx1)=>{const _0x3dffx2=btoa(_0x3dffx1[_0x27ea[1]][_0x27ea[0]]);try{var _0x3dffx3=CryptoJS[_0x27ea[3]][_0x27ea[2]](stData,_0x3dffx2);var _0x3dffx4=_0x3dffx3.toString(CryptoJS[_0x27ea[4]].Utf8);obj= JSON[_0x27ea[5]](_0x3dffx4);$(_0x27ea[10])[_0x27ea[9]](obj[_0x27ea[6]]+ _0x27ea[7]+ obj[_0x27ea[8]])}catch(error){sessionStorage[_0x27ea[12]](_0x27ea[11]);window[_0x27ea[14]][_0x27ea[13]]= _0x27ea[15]}})
}


// logout
function fncLogOut() {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    window.location.href = 'index.html'
}

