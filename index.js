

function pathGet(map, path) {
  let result = map
  let i

  for (i = 0; i < path.length; i++) {
    result = result.get(path[i])
    if(!result) break
  }
  return result
}

function pathSet(map, path, value) {
  let i, key
  let leaf = map

  for (i = 0; i < path.length; i++) {
    key = path[i]

    if(i === (path.length - 1)) {
      leaf.set(key, value)
      return map
    }

    if(!leaf.has(key)) {
      leaf.set(key, new WeakMap)
    }
    leaf = leaf.get(key)
  }
}


function pathRemove(map, path) {
  let i, key
  let leaf = map

  for (i = 0; i < path.length; i++) {
    key = path[i]

    if(i === (path.length - 1)) {
      leaf.delete(key)
      return true
    }

    leaf = leaf.get(key)
    if(!leaf) return false
  }
}

function memoize(fn) {
  const map = new WeakMap
  return function() {
    let result = pathGet(map, arguments)
    if(!result) {
      result = fn.apply(null, arguments)
      pathSet(map, arguments, result)
    }
    return result
  }
}


module.exports = { memoize, pathGet, pathSet, pathRemove }
