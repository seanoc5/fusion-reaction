const request = require('./Request');

const params = {
    'q': 'fusion rocks',
    'fq': 'contentType:pdf',
    'pf': 'title^5 keywords^3 body'
}

const headers = {
    'browser-name': 'firefox'
}

const method = 'GET';

test('basic request creation', () => {
    const req = new request(params, headers, method);
    const p = req.getParams();
    expect(p).toEqual(params);
});

test('params has expected value', () => {
    const req = new request(params, headers, method);
    const qParam = req.getParam('q');
    expect(qParam).toEqual('fusion rocks');
});
