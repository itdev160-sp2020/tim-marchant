(function() {

    var data = [
        {
            name: 'Clubhouse',
            description: 'Clubhouse is the best software for project management.',
            author: 'Clubhouse Team',
            downloads: 165235609,
            stars: 53234524,
            price: 9.50,
            selector: 's1'
        },
        {
            name: 'Asana',
            description: 'Asana is excellent software for project management.',
            author: 'Asana Team',
            downloads: 1662209,
            stars: 2534,
            price: 20.50,
            selector: 's2'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
}

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    };

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var clubhouse = new Package(data[0]);
    writePackageInfo(clubhouse);

    var asana = new Package(data[1]);
    writePackageInfo(asana);

}());