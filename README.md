# alkislarlar-engelle
kullanıcı bazlı video engelleme eklentisi

``` kotlin

//init Pilosa client and set index
val client = getClient()
val indexName = "sample-index"
val schema = client.readSchema()
val index = makeIndex(schema, indexName)

val conf = SparkConf().setMaster("local[*]").setAppName("sampleapp");
val sc = JavaSparkContext(conf);
//set data
val data = sc.parallelize(listOf(10,20,20,40))
//write first distict value to Pilosa
val sparkValues = mapOf<String, Any>("field_name" to data.distinct().first())

//set import options
val importOpts = ImportOptions.builder()
                        .setBatchSize(10000)
                        .setRoaring(true)
                        .build()
val importer = SimpleMultiFieldImporter(client, indexName, importOpts)
var mapper = SimpleMapper()
mapper.initWithConfig(index, importer, makeConfig())
mapper.mapToRecords(sparkValues)

```
