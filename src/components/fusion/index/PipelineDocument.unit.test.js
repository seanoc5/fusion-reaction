/**
 * Basic jest test -- mostly prep/tempalte for more focused test cases to help develop javascript stages for Fusion index pipelines
 * @type {DocumentClass}
 */
const document = require('./PipelineDocument');

const fields = {
    'id': '1234',
    'title_t': "my first test title",
    'body': "this is a test body in my first test doc"
};


test('Document created proper?', () => {
    const doc = new document(fields);
    expect(doc.getFields()).toEqual(fields);
});


test('Document created And modified', () => {
    const doc = new document(fields);
    doc.addField('test', 'fubar');
    expect(doc.getFields()).not.toEqual(fields);
    let output = Object.assign({}, fields);
    output.test = 'fubar';
    expect(doc.getFields()).toEqual(output);
});

test("get field names", () => {
    const doc = new document(fields);
    let names = doc.getFieldNames();
    expect(names).toEqual(Object.keys(fields));
});


