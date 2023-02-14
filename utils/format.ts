const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"]

export const abbreviateNumber = (number: number) => {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0

  // if zero, we don't need a suffix
  if (tier == 0) return number

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier]
  var scale = Math.pow(10, tier * 3)

  // scale the number
  var scaled = number / scale

  // format number and add suffix
  return scaled.toFixed(1) + suffix
}

export const timeFormat = (duration: number) => {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600)
  const mins = ~~((duration % 3600) / 60)
  const secs = ~~duration % 60

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = ""

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "")
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "")
  ret += "" + secs

  return ret
}
