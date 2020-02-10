/**
 * Mock class to help develop jest tests aimed at Fusion index pipeline Javascript stages
 * most methods left unmocked currently, can easily add as needed/wanted
 *
 * todo -- revisit basic javascript, especially ECMA2015 class usage -- any conflict with fusion js...?
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla
 */
class PipelineDocument {
    // class Person {
    constructor(fields) {
        this.fields = Object.assign({}, fields);
    }

    addField(fieldName, value){
        this.fields[fieldName] = value;
    }

    getFields() {
        return this.fields;
    }



    getFieldNames() {
        const fieldNames = Object.keys(this.fields);
        return fieldNames;
    }

    getFieldValues(fieldName){
        return Object.values(this.fields[fieldName]);
    }

    getFirstField(fieldName) {
        return this.fields[fieldName];
    }

    getFirstFieldValue(fieldName) {
        // todo -- add logic to handle multivalue fields better
        const value = this.fields[fieldName];
    }

}

module.exports = PipelineDocument;

/*
PipelineDocument	addCommand(Command c)
PipelineDocument	addCommand(java.lang.String cmd, java.util.Map<java.lang.String,java.lang.String> params)
void	addCommands(java.util.List<Command> commands)
PipelineDocument	addField(PipelineField fld)
PipelineDocument	addField(java.lang.String name, java.lang.Object value)
This will add a field to the document.
PipelineDocument	addField(java.lang.String name, java.lang.Object value, java.util.List<Annotation> annotations)
PipelineDocument	addField(java.lang.String name, java.lang.Object value, java.lang.String... meta)
PipelineDocument	addFieldIfDifferent(PipelineField fld)
PipelineDocument	addFieldIfDifferent(java.lang.String name, java.lang.Object value, java.util.List<Annotation> annotations)
PipelineDocument	addFieldIfDifferent(java.lang.String name, java.lang.Object value, java.lang.String... meta)
PipelineDocument	addFields(java.util.Collection<PipelineField> fields)
com.lucidworks.apollo.aggregation.Aggregatable	addFields(java.lang.String field, java.util.Collection<?> values)
PipelineDocument	addHint(java.lang.String name, java.lang.String tag)
PipelineDocument	addHints(java.lang.String name, java.util.Collection<java.lang.String> tags)
PipelineDocument	addHints(java.lang.String name, java.lang.String... tags)
PipelineDocument	addMetadata(java.lang.String name, java.lang.String value)
com.lucidworks.apollo.aggregation.Aggregatable	clear()
void	copyField(java.lang.String src, java.lang.String dest)
PipelineDocument	copyOf()
boolean	equals(java.lang.Object o)
java.util.Set<java.lang.String>	getAllFieldNames()
This method returns all field names, including those that are reserved for internal use.
java.util.List<Command>	getCommands()
byte[]	getContent()
java.util.Set<java.lang.String>	getFieldNames()
This method returns a subset of field names excluding those that are reserved for internal use.
java.util.Map<java.lang.String,java.util.List<PipelineField>>	getFields()
Return all fields as an (unmodifiable) Map.
java.util.List<PipelineField>	getFields(java.lang.String name)
java.util.List<java.lang.Object>	getFieldValues(java.lang.String name)
java.util.Set<java.lang.String>	getFilteredFieldNames(java.lang.String... excludePrefixes)
Returns a filtered subset of field names, where names that start with one of excludePrefixes are excluded.
PipelineField	getFirstField(java.lang.String name)
java.lang.Object	getFirstFieldValue(java.lang.String name)
java.util.List<PipelineField>	getFlattenedFields()
java.util.Map<java.lang.String,java.util.Set<java.lang.String>>	getHints()
java.util.Set<java.lang.String>	getHints(java.lang.String name)
java.lang.String	getId()
PipelineField	getLastField(java.lang.String name)
java.util.Map<java.lang.String,java.lang.String>	getMetadata()
java.lang.String	getMetadata(java.lang.String name)
java.util.Set<java.lang.String>	getMetadataNames()
java.util.Set<java.lang.String>	getReservedFieldNames()
This method returns a subset of field names that are reserved for internal use, i.e.
boolean	hasField(java.lang.String name)
Return true if this document has the given field.
int	hashCode()
boolean	hasHint(java.lang.String name, java.lang.String tag)
boolean	hasMetadata(java.lang.String name)
static java.lang.String	metadataKey(java.lang.String type, java.lang.String name, java.lang.String... additionalNames)
Prefix a key with our reserved prefix F_RESERVED_PREFIX and join remaining parts with underscores
static PipelineDocument	newCommit()
static PipelineDocument	newCommit(java.util.Map<java.lang.String,java.lang.String> params)
static PipelineDocument	newDelete(java.lang.String id, boolean commit)
static PipelineDocument	newDelete(java.lang.String id, int commitWithin)
static PipelineDocument	newDeleteById(java.lang.String id, java.util.Map<java.lang.String,java.lang.String> inputParams)
static PipelineDocument	newDeleteByQuery(java.lang.String query, boolean commit)
static PipelineDocument	newDeleteByQuery(java.lang.String query, java.util.Map<java.lang.String,java.lang.String> inputParams)
static PipelineDocument	newDocument()
static PipelineDocument	newDocument(java.lang.String id)
static PipelineDocument	newOptimize(java.util.Map<java.lang.String,java.lang.String> params)
java.util.Set<java.lang.String>	removeAllHints(java.lang.String name)
PipelineDocument	removeCommands()
PipelineDocument	removeFields(java.lang.String name)
Remove all fields from document that match the given field name.
boolean	removeHint(java.lang.String name, java.lang.String tag)
boolean	removeHints(java.lang.String name, java.util.Collection<java.lang.String> tags)
boolean	removeHints(java.lang.String name, java.lang.String... tags)
PipelineDocument	removeMetadata(java.lang.String name)
void	renameField(java.lang.String name, java.lang.String newName)
void	setContent(byte[] data)
PipelineDocument	setField(java.lang.String name, java.lang.Object value)
Set the value of the given field to the given value.
PipelineDocument	setField(java.lang.String name, java.lang.Object value, java.util.List<Annotation> annotations)
PipelineDocument	setField(java.lang.String name, java.lang.Object value, java.lang.String... meta)
void	setFields(java.util.Map<java.lang.String,java.util.List<PipelineField>> fields)
Set all fields for this document by clearing existing fields and adding all content from the given fields Map.
com.lucidworks.apollo.aggregation.Aggregatable	setFields(java.lang.String field, java.util.Collection<?> values)
PipelineDocument	setHints(java.lang.String name, java.util.Collection<java.lang.String> tags)
PipelineDocument	setHints(java.lang.String name, java.lang.String... tags)
PipelineDocument	setId(java.lang.String id)
void	setMetadata(java.util.Map<java.lang.String,java.lang.String> metadata)
java.lang.String	toString()
 */