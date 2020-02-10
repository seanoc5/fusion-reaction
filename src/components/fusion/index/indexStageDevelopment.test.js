const document = require('./PipelineDocument');

test("example js to copy/split index doc url into more focused fields", () => {
    // https://doc.lucidworks.com/fusion-server/5.0/concepts/indexing/datasources/custom-javascript-indexing-stages.html
    // https://doc.lucidworks.com/fusion-server/5.0/concepts/indexing/datasources/custom-javascript-indexing-stages.html#add-a-field-to-a-document
    const doc = new document({
        'id': 'https://doc.lucidworks.com/fusion-pipeline-javadocs/4.2/com/lucidworks/apollo/common/pipeline/PipelineDocument.html',
        'title': 'test/sample page',
        'tag_ss': ['tasting', 'jest', 'js development']
    });
    const modifiedDoc = sampleSplitUrlIndexStage(doc);
    const topFolder = modifiedDoc.getFirstField('topFolder');
    expect(topFolder).toEqual('fusion-pipeline-javadocs');
});

function sampleSplitUrlIndexStage(doc) {
    console.log("Testing custom Fusion javscript stage development with JEST test framework");
    const url = doc.getFirstField('id');
    if (url) {
        let parts = url.split('/');
        if (parts && parts.length > 2) {
            console.log('Parts: ' + parts);
            const protocol = parts[0];
            const host = parts[2];
            doc.addField('host', host);
            if(parts.length > 3) {
                var topFolder = parts[3];

                if (parts.length > 3) {
                    var lastFolder = parts[-2];
                    var fileName = parts[-1];
                }
                doc.addField('topFolder', topFolder);
                doc.addField('lastFolder', lastFolder);
                doc.addField('fileName', fileName);
            } else {
                console.log("Top level doc?? parts==" + parts.length)
            }
            // get depth from parts length minus 3: protocol, (empty)double slashes, host (could argue -4 to have 0 depth for top level...)
            doc.addField('depth_i', parts.length - 3);
        } else {
            console.log("We expect a url split on slash to have at least 3 parts");
        }
    } else {
        console.error("No 'id' field in doc, html crawled Fusion docs have the url as the id (by default). We are stumped... giving up :-(");
    }

    return doc
}
