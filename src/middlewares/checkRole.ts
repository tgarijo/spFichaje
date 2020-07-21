// Even if a user is validly logged in, he may try to access a route 
// that he may not have role authorization to access. This middleware 
// will check if the logged user really have the role required to 
// access this route. If not, respond with 401 (unauthorized) status 
// code. Note that we made roles as an Array of strings. That is 
// because you may need, in the future, multiple roles to access the 
// same route.