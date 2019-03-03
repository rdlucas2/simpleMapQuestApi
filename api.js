var MapQuestApi = (function() {
    function MapQuestApi(mapQuestApiKey) {
        this.mapQuestApiKey = mapQuestApiKey;
        this.baseUrl = 'https://open.mapquestapi.com/geocoding/v1/address?key=' + mapQuestApiKey;
    }

    MapQuestApi.prototype.Search = function(searchTerm) {
        searchTerm = searchTerm.toString().replace(/\//g, ' ');
        var formattedText = searchTerm.replace(/ /g, "+"); //encodeURIComponent(searchTerm);
        var url = this.baseUrl + '&location=' + formattedText;
        return $.get(url);
    }

    return MapQuestApi;
})();
