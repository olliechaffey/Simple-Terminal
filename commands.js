function get_image(url) {
    return new Promise(function (resolve, reject) {
        const img = $('<img src="' + url + '"/>');
        img.on('load', () => resolve(img));
        img.on('error', reject);
    });
}

function changeColor(id)
{
  document.getElementById(id).style.backgroundColor = "red";
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
    math: function () {
        return('(option + two numbers):\n' + ' 1. +\n 2. -\n 3. x\n 4. ÷');
    },
    1: function (fnum, snum) {
        return (fnum + snum);
    },
    2: function (fnum, snum) {
        return (fnum - snum);
    },
    3: function (fnum, snum) {
        return (fnum * snum);
    },
    4: function (fnum, snum) {
        return (fnum / snum);
    },
    theme: function () {
        return(`Usage: theme_[arg]
        Args:
          - ls: list all themes
          - set: set a theme
          - random: set a random theme
        Example: 
          theme ls # to list all themes
          theme set Gruvbox # to set a theme`);
    }

}, {
    greetings: greetings.innerHTML + 'type "help" for a list of commands\n'
});