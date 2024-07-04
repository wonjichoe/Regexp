const str = `
010-1234-5678
wonjichoe@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
hi hello nihao.
abbcccdddd
`
//g 옵션 : 대소문자 구별 / gi 옵션: 대소문자 구별 안함
//const regexp = new RegExp('won','g')
// const regexp = /won/gi
// console.log(str.match(regexp))

// const regexp = /nihao/gi
// // console.log(regexp.test(str))

// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// console.log(str.match(/\.$/g))
console.log(
  str.match(/./g)
)


