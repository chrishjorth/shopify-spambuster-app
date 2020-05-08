window.$(function ($) {
  const SCRIPTSRC = 'https://www.chrishjorth.com/shopify-spambuster-app/dist/spambuster.js'
  const BACKEND_URL = 'https://v7qqtjkwvj.execute-api.eu-west-1.amazonaws.com/dev'

  window.grecaptcha.ready(function () {
    // let captchaPassed = false
    // const $submitButton = $('#comment-submit')
    // console.log($submitButton)

    const shop = window.Shopify.shop

    const scripts = document.getElementsByTagName('script')
    let rcSiteKey = ''
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i]
      const src = script.src.substring(0, script.src.indexOf('?'))
      if (src === SCRIPTSRC) {
        rcSiteKey = script.src.substring((src + '?rcSiteKey=').length)
        rcSiteKey = rcSiteKey.substring(0, rcSiteKey.indexOf('&'))
      }
    }

    console.log(shop)
    console.log(rcSiteKey)
    console.log('hmm10')

    const $newCommentForm = $('#comment_form')
    const $submitbutton = $('input', $newCommentForm)

    // const canSubmitForm = false

    const verifyReCaptcha = function () {
      window.grecaptcha.execute(rcSiteKey, { action: 'blog_comment' })
        .then(function (token) {
          const data = {
            shop: shop,
            token: token
          }
          console.log(data)
          $.ajax(BACKEND_URL + '/verify', {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            processData: false,
            success: function (data) {
              data = JSON.parse(data)
              console.log(data.score)
              if (parseFloat(data.score) > 0.5) {
                console.log('PASSED')
              } else {
                console.log('FAILED')
                // window.alert('The spam protection system did now allow this comment.\nIf this is not spam please verify your internet connection or contact us via email.')
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.error(textStatus)
            }
          })
        })
    }

    $newCommentForm.on('submit', function () {
      console.log('no submit!')
      setTimeout(verifyReCaptcha, 1)
      return false
    })

    $submitbutton.on('click', function () {
      console.log('click')
    })

    /* $submitButton.on('click', function () {
      window.grecaptcha.execute('6LdhUOsUAAAAAAmliNe0htF5BY3iuDbtWSAl6Cg9', { action: 'blog_comment' }).then(function (token) {
        const shopdomain = window.location.hostname
        const data = {
          shopdomain: shopdomain,
          token: token
        }
        $.ajax('https://cgxypiigkj.execute-api.eu-west-1.amazonaws.com/dev/verify', {
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(data),
          processData: false,
          success: function (data) {
            if (data.score > 0.5) {
              captchaPassed = true
              $submitButton.closest('form').submit()
            } else {
              window.alert('The spam protection system did now allow this comment.\nIf this is not spam please verify your internet connection or contact us via email.')
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus)
          }
        })
      })
      return false
    })

    $submitButton.closest('form').on('submit', function (event) {
      return captchaPassed
    }) */
  })
})
