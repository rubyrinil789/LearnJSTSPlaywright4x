function startBrowser() {
    let browser="edge";
    function installBrowser()
    {
        console.log(browser);
    }
    return installBrowser;
}
let run = startBrowser();
run();