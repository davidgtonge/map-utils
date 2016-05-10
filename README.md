# Map Utils

Simple `Map` based utilities:

 - `pathGet` - takes a map instance and an array of keys - traverses the map
 and returns the value
 - `pathSet` - takes a map instance, an array of keys and a value - traverses
 the map (creating new `Map` instance if necessary) and sets the value at the  
 leaf of the map
  - `memoize` - takes a function and returns a new memoized function using a
  `Map` structure for the result cache. Currently there is no limit to the size
  of the cache. However we use a `WeakMaps` so if there is no strong reference
  to all the arguments, then the result will be garbage collected

  
