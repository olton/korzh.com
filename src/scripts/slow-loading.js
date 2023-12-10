window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload()
    }
};

function showLoadIndicator() {
    Metro.activity.open({
        type: "cycle",
        overlayColor: "#fff",
        overlayAlpha: .6,
        text: '<div class="mt-2 text-small">Loading...</div>'
    })
}

$(()=>{
    $("body").on("click", "a[slow-loading]", function() {
        showLoadIndicator();
    })
})