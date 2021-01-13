const document = require('./PipelineDocument');

var entityFieldName = "entity_s_lower";     // this will get the appropriate auth site name for matching in query pipeline (e.g. 'cnn')


/**
 * function to look at url and other elements to identify
 * site "main" page. Aka: home page, or best "start" page
 */
function flagEntityMainPage(doc) {
    var basicHomePage = /https?:\/\/([^.\/]+.)?([^.\/]+)\.([^.\/]+)\/?$/i;           // e.g. https://www.cnn.com
    var wikiHomePage = /https?:\/\/([^\/]+\.)?wiki\.([^\/]+)\/wiki\/([^\/]+)$/i;     // e.g. https://wiki.com/wiki/cnn. see https://regex101.com/r/b7TLjE/1
    var wordpressHomePage = /https?:\/\/(wordpress.com|talk.about.com)\/([^\/]+)$/i; // e.g. https://talk.about.com/cnn see https://regex101.com/r/tbb69q/2

    var url = doc.getId();

    var matchBasic = basicHomePage.exec(url);
    if (matchBasic) {
        var entityName = matchBasic[2];
        if (entityName && entityName.length > 0) {
            doc.setField(entityFieldName, entityName.toLowerCase());
        } else {
            // todo -- mock out logger object (info/warn/error levels)
            var msg = "No valid entity name found in url: " + url;
        }
    } else {
        var matchWiki = wikiHomePage.exec(url);
        if (matchWiki && matchWiki.length > 2) {
            var entityName = matchWiki[3];
            if (entityName && entityName.length > 0) {
                doc.setField(entityFieldName, entityName.toLowerCase());
            } else {
                var msg = "No valid entity name found in url: " + url;
            }
        } else {
            var matchWordPress = wordpressHomePage.exec(url);
            if (matchWordPress && matchWordPress.length>=2) {
                var entityName = matchWordPress[2];
                if (entityName && entityName.length > 0) {
                    doc.setField(entityFieldName, entityName.toLowerCase());
                } else {
                    var msg = "No valid entity name found in url: " + url;
                }
            } else {
                var msg = "No match - debug url: " + url;
            }
        }
    }
    return doc;
}


test("Flag url basic entity home page", () => {
    const doc = new document({
        'id': 'https://www.CNN.com',
    });
    const flaggedDoc = flagEntityMainPage(doc);
    const entity = flaggedDoc.getFirstFieldValue(entityFieldName);

    expect(entity).toEqual("cnn");
});


test("Flag url wiki entity page", () => {
    const doc = new document({
        'id': 'https://www.wiki.com/wiki/CNN',
    });
    const flaggedDoc = flagEntityMainPage(doc);
    const entity = flaggedDoc.getFirstFieldValue(entityFieldName);

    expect(entity).toEqual("cnn");
});

/**
 * not the 'main' page (has a trailing slash, or anything else after wiki/<entity>), so do NOT flag
 */
test("Do NOT Flag url wiki entity sub-page", () => {
    const doc = new document({
        'id': 'https://www.wiki.com/wiki/CNN/',
    });
    const flaggedDoc = flagEntityMainPage(doc);
    const entity = flaggedDoc.getFirstFieldValue(entityFieldName);

    expect(null).toBeNull();
});


test("Flag url WordPress entity pages", () => {
    const doc1 = new document({
         'id': 'https://talk.about.com/cnn',
    });
    const flaggedDoc1 = flagEntityMainPage(doc1);
    const entity1 = flaggedDoc1.getFirstFieldValue(entityFieldName);
    expect(entity1).toEqual("cnn");

    const doc2 = new document({
        'id': 'https://wordpress.com/cnn',
    });
    const flaggedDoc2 = flagEntityMainPage(doc2);
    const entity2 = flaggedDoc1.getFirstFieldValue(entityFieldName);
    expect(entity2).toEqual("cnn");

});

/**
 * not the 'main' page (has a trailing slash, or anything else after wiki/<entity>), so do NOT flag
 */
test("Do NOT Flag url WordPress entity sub-page", () => {
    const doc = new document({
        'id': 'https://talk.about.com/CNN/',
    });
    const flaggedDoc = flagEntityMainPage(doc);
    const entity = flaggedDoc.getFirstFieldValue(entityFieldName);

    expect(null).toBeNull();
});