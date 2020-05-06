window.$(function ($) {
  window.grecaptcha.ready(function () {
    // let captchaPassed = false
    const $submitButton = $('#comment-submit')
    console.log($submitButton)

    const shop = window.Shopify.shop
    console.log(shop)

    console.log(window.meta)

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
