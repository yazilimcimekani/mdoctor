window.onload = () => {
  console.log(
    'Serving your markdown files.\nHave a problem? https://github.com/yazilimcimekani/mdoctor-server/issues'
  )
}

function switchTheme() {
  const body = document.body
  const themeIcon = document.getElementById('theme-icon')

  body.classList.toggle('light-theme')
  themeIcon.classList.toggle('fa-sun')
  themeIcon.classList.toggle('fa-moon')
}

function exportAsPdf() {
  let w = window.open('', 'printwindow', 'fullscreen=yes')
  w.document.write(
    '<html><head><title>MDoctor - Server</title><link rel="stylesheet" type="text/css" href="./style.css"></head><div id="md-content"></div></body>'
  )

  let printContents = document.getElementById('md-content').innerHTML
  w.document.getElementById('md-content').innerHTML = printContents
  setTimeout(() => {
    w.print()
  }, 2000)
}
