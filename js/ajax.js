function ajax({ url, type,data, success, error }) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText)
            } else {
                error(xhr.responseText)
            }
        }
    }
    xhr.onerror = (err) => {
        error(err)
    }
    xhr.open(type,url,true);
    xhr.send(data);
}

function jsonp({ url, data, success, error }){
    const script = document.createElement('script');
    script.src=`${url}?${data}`
    script.async = true;
    script.onload=(res)=>{
        console.log(res)
        script.parentNode.removeChild(script)
    }
    document.body.appendChild(script)
}