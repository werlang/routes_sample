async function request(url, options={}) {
    const baseURL = location.href.split('/').slice(0,-1).join('/');

    console.log()
    if (options.body) {
        options.body = new URLSearchParams(options.body).toString();
        options.headers = { 'Content-type': 'application/x-www-form-urlencoded' };
    }
    
    options.method = options.method || 'GET';

    const req = await fetch(`${baseURL}/${url}`, options);
    return await req.json();
}

export { request };