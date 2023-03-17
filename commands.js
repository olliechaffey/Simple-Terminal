function get_image(url) {
    return new Promise(function (resolve, reject) {
        const img = $('<img src="' + url + '"/>');
        img.on('load', () => resolve(img));
        img.on('error', reject);
    });
}
$('body').terminal({
    cat: function (width, height) {
        return get_image('https://placekitten.com/' + width +
            '/' + height);
    },
    dog: function (width, height) {
        return get_image('https://placedog.net/' + width +
            '/' + height);
    },
    title: function () {
        return fetch('https://terminal.jcubic.pl')
            .then(r => r.text())
            .then(html => html.match(/<title>([^>]+)<\/title>/)[1]);
    },
    hello: function (what) {
        this.echo('Hello, ' + what +
            '. Wellcome to this terminal.');
    },
    help: function () {
        return ('Useful commands:\n' + ' title: fetch the terminal title\n hello: enter hello + name\n cat: enter cat + width height\n dog: enter dog + width height\n clear: clears the terminal') +
            ('\n\nFun commands:\n' + ' title: fetch the terminal title\n hello: enter hello + name\n cat: enter cat + width height\n dog: enter dog + width height\n clear: clears the terminal');
    },
    restart: function () {
        location.reload();
    },
    restart: function () {
        location.reload();
    }

}, {
    greetings: greetings.innerHTML + 'type "help" for a list of commands\n'
});