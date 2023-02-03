const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false

  let dict = {}
  for (let i = 0; i < string1.length; i++) {
    let ch = string1[i]
    if (!dict[ch]) dict[ch] = 1
    else dict[ch] += 1
  }

  for (let j = 0; j < string2.length; j++) {
    let ch = string2[j]
    if (!dict[ch]) return false
    
    dict[ch] -= 1

    if (dict[ch] === 0) delete dict[ch]
  }

  if (Object.keys(dict).length === 0) return true

  return false
}

console.log(isAnagram("ana", "naa"))
console.log(isAnagram("btg", "bth"))
console.log(isAnagram("a", "a"))
console.log(isAnagram("abc", "cba"))
console.log(isAnagram("", ""))

