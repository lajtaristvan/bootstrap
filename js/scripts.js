    <script>
        $(document).ready(function () {
            $("#reverseButton").click(function () {
                $("#reverseModal").modal('show');
                $("#reverseButtonHide").click(function () {
                    $("#reverseModal").modal('hide');
                    $("#reverseButtonClose").click(function () {
                        $("#reverseModal").modal('hide');
                    });
                });
            })};
            $("#loginButton").click(function () {
                $("#loginModal").modal('show');
                $("#loginButtonHide").click(function () {
                    $("#loginModal").modal('hide');
                    $("#loginButtonClose").click(function () {
                        $("#loginModal").modal('hide');
                    });
                });
            });
        });
    </script>
