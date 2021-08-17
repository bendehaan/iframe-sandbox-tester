console.log("Fetching cookies...")

const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [ name, value ] = cookie.split('=').map(c => c.trim());
    cookies[name] = value;
    return cookies;
}, {})

document.getElementById("cookies").innerHTML = JSON.stringify(cookies, null, 2);