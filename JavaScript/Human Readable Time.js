//Human Readble Time
//Level:5kyu
/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/
function humanReadable(seconds) {
  let hh = 0,
    mm = 0,
    ss = 0

  if (seconds > 3599) {
    hh = Math.floor(seconds / 3600)
  }

  if (seconds > 59) {
    mm = Math.floor((seconds / 60) - (hh * 60))
  }

  if (seconds) {
    ss = seconds - (mm * 60) - (hh * 3600)
  }

  hh = `${hh < 10 ? '0' : ''}${hh}`
  mm = `${mm < 10 ? '0' : ''}${mm}`
  ss = `${ss < 10 ? '0' : ''}${ss}`

  return `${hh}:${mm}:${ss}`
}