class Ajax {
    constructor(token) {
        this.token = token;
    }
    getAjax(apivegpont, myCallback) {
        const tomb = [];
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallback(tomb);
            },
        });
    }
}