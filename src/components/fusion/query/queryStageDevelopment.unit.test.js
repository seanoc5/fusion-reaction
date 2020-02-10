// const queryStage = require('./queryStageDevelopment');
const requestObj = require('./Request');

const params = {
    'q': 'fusion rocks',
    'fq': 'contentType:pdf',
    'pf': 'title^5 keywords^3 body'
}

const headers = {
    'browser-name': 'firefox'
}

const method = 'GET';


test('test stage should add query param foo:bar', () => {
    const request = new requestObj(params, headers, method);
    addRequestParamQueryJSStage(request);
    expect(request.getParam('foo')).toEqual('bar');
});


function addRequestParamQueryJSStage(request){
    request.addParam('foo', 'bar');
}