const add = function(x, y) {
  var z= x+y;
if (x==null || y==null) {
  throw TypeError("no data");
}
if (!Number.isInteger(x) ||!Number.isInteger(y) ) {
    throw TypeError("data must be a integer");
  }

 return z
}
const minus = function(x, y) {
  var z= x-y;
  if (x==null || y==null) {
    throw TypeError("no data");
  }
  if (!Number.isInteger(x) ||!Number.isInteger(y) ) {
    throw TypeError("data must be a integer");
  }
  
 return z
}
const multiplies = function(x, y) {
  var z= x*y;
  if (x==null || y==null) {
    throw TypeError("no data");
  }
  if (!Number.isInteger(x) ||!Number.isInteger(y) ) {
    throw TypeError("data must be a integer");
  }
 return z
}

const dividedBy = function(x, y) {
  var z= x/y;
if (x==null || y==null) {
  throw TypeError("no data");
}
if (y==0) {
  throw TypeError("y must be a non-zero integer");
} 
if (!Number.isInteger(x) ||!Number.isInteger(y)) {
  throw TypeError("data must be a integer")
} 
return z

}



 module.exports = {add,minus,multiplies,dividedBy}
