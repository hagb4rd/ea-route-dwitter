var fs=require("node:fs/promises");
var path=require("node:path");





var fromJson=async function(file) {

	//var file="dweets/0.json"
	var next=JSON.parse(await fs.readFile(file,{encoding:"utf-8"}))

	var records=next.results.map(o=>({id:o.id,code:o.code,author:o.author.username,posted:o.posted,awesome_count:o.awesome_count,posted:o.posted,link:o.link}));
	return records;
}


var fromDirectory=async function(dir){
	var files=(await fs.readdir(dir)).map(f=>path.join("./dweets",f));
	var result=await Promise.all(files.map(file=>fromJson(file)));
	return result.flatMap(x=>x); 
	//result=await queue.reduce((aggr,next)=>aggr.then(next),Promise.resolve());
//	var queue=files.map(file=>()=>fromJson(file).then(result=>{ console.log(result,file," ..done."); return result }));
//	var result=await queue.reduce((aggr,next)=>aggr.then(next),Promise.resolve());
	
}

var main=async()=>{
	var db=await fromDirectory("./dweets");
	const createCsvWriter = require('csv-writer').createObjectCsvWriter;
	const csvWriter = createCsvWriter({
    path: 'dweets.csv',
    header: [
        {id: 'id', title: 'id'},
        {id: 'code', title: 'code'},
        {id: 'author', title: 'author'},
        {id: 'remix_of', title: 'remix_of'},
        {id: 'posted', title: 'posted'},
        {id: 'awesome_count', title: 'awesome_count'},
        {id: 'link', title: 'link'}
    ]
	});
	csvWriter.writeRecords(db);

	var result=JSON.stringify(db);
	await fs.writeFile("dweets.json", result, {encoding:"utf-8"});
	console.log(result);
};

main()
