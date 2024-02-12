// [SECTION] MongoDB Aggregation
/*
	- Used to generate manipulated data and perform operations to create filtered results that helps in analyzing data.
	- Compared to doing CRUD operations on our data from our previous sessions, aggregation gives us access to manipulate, filter, and compute for results providing us with information to make necesarry development decisions without having to create a frontend application

*/

// Using the aggregate method 
/*
	- The "$match" is used to pass the documents that meet the speicified condition(s) to the next pipeline stage/aggregation process. 
	- Syntax
		- { $match: { field: value } }
	- The "$group" is used to group elements together and field-value pairs using the data from grouped elements.
	- Snytax
		- { $group: { _id: "value", fieldResult: "valueResult" } }
	- Syntax
		- db.collectionName.aggregate([
			{ $match: { fieldA, valueA } },
			{ $group: { _id: "$fieldB"}, { result: { operation } } }
		])
	- The "$" symbol will refer to a field name that is available in the documents being aggregated on.
	- The "$sum" operator will total the values of all "stock" fields in the returned documents that are found using "$match" criteria.
*/
db.fruits.aggregate([
		{ $match: { onSale: true} },
		{ $group: { _id: "$supplier_id", total: { $sum: "$stock" } } }
	]);

// Field projection with aggregation
/*
	- The "$project" can be used when aggregating data to include/exclude fields from the returned results
	- Syntax
		- { $project: { field: 1/0 } }
*/
db.fruits.aggregate([
	{ $match: { onSale: true } },
	{ $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
	{ $project: { _id: 0 } }
])

// Sorting aggregated results
/*
	- The "$sort" can be used to change the order of aggregated results
	- Providing a value of -1 will sort the aggregated results in a reverse order
	- Syntax
		-{ $sort { field: 1/-1 } }
*/
db.fruits.aggregate([
		{ $match: { onSale: true} },
		{ $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
		{ $sort: { total: -1 } }
	]);
// Aggregating results based on array fields
/*
	- The "$unwind" deconstructs an array field from a collection/field with an array value to output a result for each element.
	- Syntax 
		- { $unwind: field }
*/
db.fruits.aggregate([
	{ $unwind: "$origin" }
]);

// Displays fruit documents by their origin and the kinds of fruits that are supplied
db.fruits.aggregate([
  { $unwind : "$origin" },
  { $group : { _id : "$origin" , kinds : { $sum : 1 } } }
]);


/*
	- If you have a document that pass through the pipeline, it contributes a value of 1 to the total sum.

	- If you have multiple documents that pass through the pipeline, each one contributes a value of 1 to the sum.

	- Finally, our total sum is the count of the documents that met/meet the criteria specified in our pipeline. 
*/