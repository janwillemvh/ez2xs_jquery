$(document).ready(function() {
        
    $.ajax({
        beforeSend: function(request) {
                        request.setRequestHeader("Authorization", 'Bearer TOKEN123456789');
                    },
        dataType: "json",
        url: 'http://localhost/custom/getAddresses.php',
        success:    function(response) {
                        if (response.length > 0) {
                            $.each(response, function(index, address) {
                                $("<tr><td>" + address.street + "</td><td>" + address.zip + "</td><td>" + address.city + "</td></tr>").appendTo("#addressRows");
                            });
                        } else {
                            $("<tr><td colspan='3'>Geen adressen gevonden.</td></tr>").appendTo("#addressRows");
                        }
                    },
        error:  function() {
                    $("<tr><td colspan='3'>Fout tijdens het laden.</td></tr>").appendTo("#addressRows");
                }
    });
    
});
