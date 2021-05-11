// http://localhost:3030/opportunity?limit=4&page=2, Example of how to use the Get Method

//  page => Means the Current Page that the User Wants
//  limit => The count of items/documents that should be rendered on each page

// suppose total pages are 10 then,
// so in short for limit 4 we get results as page 1 = {0,1,2,3} ,  page 2 = {4,5,6,7} and the remaining ones on
// page 3 = {8,9}  .

export default async function pagination(queryObject, opportunity) {
  // Here page means which page to start from and limit specifies the number of documnents to be
  // rendered starting from this page
  let { limit, page } = queryObject;

  // The case when both page and limit are not specified we assign both of them default values
  if (page == undefined && limit == undefined) {
    limit = 10;
    page = 1;
  }

  //Only limit is 'undefined or 0' , so it is assigned a default value of 1
  if (limit == undefined) {
    limit = 10;
  }

  // The case when starting page is not mentioned or it is Put in as 0 , we use default value
  if (page == undefined) {
    page = 1;
  }

  // The query objects are by default "string" , so we convert them to "INT" to work ahead
  limit = parseInt(limit);
  page = parseInt(page);

  // The startIndex is the first index to be rendered from the database
  // skip is the total no of documents/items on each page as per the user
  const startIndex = page - 1;
  const skip = (page - 1) * limit;

  // Object initialised to store the results for various queries
  const result = {};

  // The case when the queries are invalid , we just return a result with valid error message
  // Number of Total Documents Saved in a variable
  let numDocs = await opportunity.countDocuments().exec();

  // TotalPages denote the total number of pages that are possible with the given limit and Documents available
  let totalPages;

  // When limit is less than or equal to the number of Docs
  if (numDocs >= limit) {
    totalPages = Math.floor(numDocs / limit) + (numDocs % limit);
  }

  // this is the case when limit exceeds the documents , so we only have a single page
  else {
    totalPages = 1;
  }

  // Begin here shows the first index of next Page and helps in determining wether or not it is possible to go on the next page
  let begin = page * limit;

  // If any of the paramter becomes neagtive or Zero
  if (page <= 0 || limit <= 0) {
    result.results = 'The Parameters cannot be Negative or Zero';
    return result;
  }

  // If user enters a Page number greater than the number of Documents present in the Database
  if (startIndex >= numDocs) {
    result.results = 'The maximum page value should be ' + numDocs;
    return result;
  }

  // If the page entered exceeds the Max allowed value(totalPages)
  if (page > totalPages) {
    let maxAllowedPages = totalPages;
    result.results = 'The maximum allowed pages are ' + maxAllowedPages;
    return result;
  }

  // StartIndex should be atleast 0 and for the min val of Page should be 1
  if (startIndex < 0) {
    result.results = 'The minimum page value should be 1';
    return result;
  }

  // Page can't be entered more than the Number of documents present in DataBase
  if (startIndex >= numDocs) {
    result.results = 'The maximum page value should be ' + numDocs;
    return result;
  }

  // If we get valid data we also render the Next and Previous page to the User along with the Results
  else {
    // If there is valid next page in the Database , then we let the user know about it

    if (begin < numDocs) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
    }

    // If there is valid Previous page in the Database , then we let the user know about it
    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit: limit,
      };
    }
  }

  let query = {};
  if (queryObject.type) query['opportunityType'] = queryObject.type;

  // Once a Valid Query(The one which is inside the Range) is entered, we render the Results
  try {
    result.results = await opportunity.find(
      query,
      {
        /* No constraints */
      },
      {
        skip: skip,
        limit: limit,
      }
    );

    return result;
  } catch (e) {
    console.log(`ERR: `, e.stack);
  }
}
