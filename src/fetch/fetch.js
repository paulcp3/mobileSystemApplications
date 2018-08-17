export default {
    fetch: (options) => {
        var myHeaders = new Headers();
        var success = options.success
        var erro = options.erro
        myHeaders.append('Content-Type', 'application/json');
        if (options.url && options.data) {
            let request = new Request(`http://118.178.190.171:8080/accchn-controller${options.url}`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(options.data),
                headers: myHeaders
            })
            fetch(request)
                .then(response => response.json())
                .then(result => {
                    if (result.resultCode == '0') {
                        return success(result)
                    } else {
                        return erro(result)
                    }
                })
        }
    }
}