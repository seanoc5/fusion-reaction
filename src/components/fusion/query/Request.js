/**
 * Mock up request object for fusion query pipeline
 */
class Request {
    // https://doc.lucidworks.com/fusion-pipeline-javadocs/4.2/com/lucidworks/apollo/pipeline/query/Request.html
    // Request(<any> queryParams, <any> headers, java.lang.String httpMethod)
    constructor(params, headers, method) {
        this.params = params;
        this.headers = headers;
        this.method = method;
    }

    addParam(name, value){
        this.params[name] = value;
    }

    getHeaders(){
        return this.headers;
    }

    getParam(name){
        return this.params[name];
    }

    getParams() {
        return this.params;
    }

    hasParam(paramName){
        if(this.params[paramName]) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Request;


/*
void	addParam(java.lang.String param, java.lang.String value)
void	clearParams()
static Request	create(MultivaluedHashMap initialParams, MultivaluedHashMap headers, MultivaluedHashMap mutableParams, java.lang.String httpMethod, byte[] entityBytes, MediaType entityMediaType)
byte[]	getEntityBytes()
MediaType	getEntityMediaType()
java.lang.String	getFirstFieldValue(java.lang.String param)
java.lang.String	getFirstParam(java.lang.String param)
<any>	getHeaders()
java.lang.String	getHttpMethod()
<any>	getInitialParams()
java.util.Collection<java.lang.String>	getParam(java.lang.String param)
<any>	getParams()
boolean	hasParam(java.lang.String param)
void	putAll(<any> params)
void	putParams(java.lang.String param, java.util.List<java.lang.String> values)
void	putSingleParam(java.lang.String param, java.lang.String value)
void	putSingleParamIfAbsent(java.lang.String param, java.lang.String value)
java.util.Collection<java.lang.String>	removeParam(java.lang.String param)

 */