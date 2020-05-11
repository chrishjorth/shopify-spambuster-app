window.$(function ($) {
  const SCRIPTSRC = 'https://www.chrishjorth.com/shopify-spambuster-app/dist/spambuster.js'
  const BACKEND_URL = 'https://v7qqtjkwvj.execute-api.eu-west-1.amazonaws.com/dev'
  const RECAPTCHA_SCRIPT_SRC = 'https://www.google.com/recaptcha/api.js?render='

  let canSubmitForm = false
  const verifyReCaptcha = function () {
    if (!window.grecaptcha) {
      console.error('Error with Google ReCaptcha')
      return
    }

    window.grecaptcha.ready(function () {
      window.grecaptcha.execute(rcSiteKey, { action: 'blog_comment' })
        .then(function (token) {
          const data = {
            shop: shop,
            token: token
          }
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
                canSubmitForm = true
                $newCommentForm.submit()
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
    })
  }

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

  // https://github.com/google/google-api-javascript-client/issues/397
  const scriptNode = document.createElement('script')
  scriptNode.src = RECAPTCHA_SCRIPT_SRC + rcSiteKey
  scriptNode.type = 'text/javascript'
  scriptNode.charset = 'utf-8'
  scriptNode.nonce = 'this_is_my_nonce'
  document.getElementsByTagName('head')[0].appendChild(scriptNode)

  console.log('hmm13')

  const $newCommentForm = $('#comment_form')

  console.log($newCommentForm)

  if ($newCommentForm.length > 0) {
    $newCommentForm.on('submit', function () {
      if (canSubmitForm === false) {
        setTimeout(verifyReCaptcha, 1)
      }
      return canSubmitForm
    })
  }
})
