function handleResponse(response) {
  if (response.status_code === 201) {
    var card_href, bank_href = null;
    if (response.cards != null) {
        card_href = response.cards[0].href;
    }
    if (response.bank_accounts != null) {
        bank_href = response.bank_accounts[0].href;
    }
    console.log("card_href: " + card_href);
    console.log("bank_href: " + bank_href);
    $.ajax({
      method: "PATCH",
      url: "/users/{{ request.user.id }}/",
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("Authorization", "Token {{ request.user.auth_token }}");
      },
      data: {
        balanced_card_href: card_href,
        balanced_bank_account_href: bank_href
      },
      success: function(data, status, jqXHR) {
        console.log("Updated user.");
        document.location.reload();
        $('#refreshing').hide();
      },
      failure: function() {
        console.error("Error updating user.");
        $('#refreshing').hide();
      },
    });
  } else {
    console.error("Balanced failed to tokenize.");
    $('#refreshing').hide();
  }
}

$('a#cc-show').click(function (e) {
  e.preventDefault()
  $("form#cc-entry").show()
});

$('#cc-submit').click(function (e) {
  e.preventDefault();
  $('#refreshing').show();

  var payload = {
    name: $('#cc-name').val(),
    number: $('#cc-number').val(),
    expiration_month: $('#cc-ex-month').val(),
    expiration_year: $('#cc-ex-year').val(),
    cvv: $('#ex-cvv').val(),
    address: {
      postal_code: $('#ex-postal-code').val()
    }
  };

  // Create credit card
  balanced.card.create(payload, handleResponse);
});

$(window).load(function () {
  $('#refreshing').hide();
})
