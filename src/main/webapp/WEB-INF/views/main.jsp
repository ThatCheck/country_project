<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html class="full" lang="en">
<!-- Make sure the <html> tag is set to the .full CSS class. Change the background image in the full.css file. -->
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pays interactifs</title>
    <link href="${pageContext.request.contextPath}/global/css/style.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/global/css/theme.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/global/css/ui.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/admin/layout3/css/layout.css" rel="stylesheet">
    <!-- BEGIN PAGE STYLE -->
    <link href="${pageContext.request.contextPath}/global/plugins/metrojs/metrojs.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/global/plugins/maps-amcharts/ammap/ammap.min.css" rel="stylesheet">
    <!-- END PAGE STYLE -->
    <script src="${pageContext.request.contextPath}/global/plugins/modernizr/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
    <body class="fixed-topbar fixed-sidebar theme-sdtl color-default" style="height: 100%">
    <section>
        <div class="sidebar">
            <div class="sidebar-inner">
                <div class="sidebar-top big-img">
                    <div class="user-image">
                        <img src="" class="img-responsive img-circle country-image">
                    </div>
                    <h4 class="coutry-name"></h4>
                    <div class="text-center">
                        <p class="text-center c-white">Capital : <span class="capital"></span></p>
                        <p class="text-center c-white">Population : <span class="population"></span></p>
                    </div>
                    <form action="search-result.html" method="post" class="searchform" id="search-results">
                        <input type="text" class="form-control" id="search-input" name="keyword" placeholder="Search...">
                    </form>
                </div>
                <ul class="nav nav-sidebar list-countries">
                    <c:forEach var="country" items="${countries}">
                        <li><a href="#" class="list-item-country" data-country-id="${country.name}"><c:out value="${country.name}" /></a></li>
                    </c:forEach>

                </ul>
            </div>
        </div>
        <!-- BEGIN MAIN CONTENT -->
        <div class="main-content" style="height: 100%">
            <div class="page-content page-app">
                <section class="app">
                    <div class="col-lg-12" id="maps" style="height: 100%">
                    </div>
                </section>
            </div>
        </div>
        <!-- END MAIN CONTENT -->
    </section>
    <div class="loader-overlay">
        <!-- PRELOADER -->
    </div>
    <div class="sideview">
        <!-- SIDEBAR -->
    </div>
    <script src="${pageContext.request.contextPath}/global/plugins/jquery/jquery-1.11.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/jquery/jquery-migrate-1.2.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/jquery-ui/jquery-ui-1.11.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/gsap/main-gsap.min.js"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/jquery-cookies/jquery.cookies.min.js"></script> <!-- Jquery Cookies, for theme -->
    <script src="${pageContext.request.contextPath}/global/plugins/jquery-block-ui/jquery.blockUI.min.js"></script> <!-- simulate synchronous behavior when using AJAX -->
    <script src="${pageContext.request.contextPath}/global/plugins/bootbox/bootbox.min.js"></script> <!-- Modal with Validation -->
    <script src="${pageContext.request.contextPath}/global/plugins/mcustom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script> <!-- Custom Scrollbar sidebar -->
    <script src="${pageContext.request.contextPath}/global/plugins/bootstrap-dropdown/bootstrap-hover-dropdown.min.js"></script> <!-- Show Dropdown on Mouseover -->
    <script src="${pageContext.request.contextPath}/global/plugins/charts-sparkline/sparkline.min.js"></script> <!-- Charts Sparkline -->
    <script src="${pageContext.request.contextPath}/global/plugins/retina/retina.min.js"></script> <!-- Retina Display -->
    <script src="${pageContext.request.contextPath}/global/plugins/select2/select2.min.js"></script> <!-- Select Inputs -->
    <script src="${pageContext.request.contextPath}/global/plugins/icheck/icheck.min.js"></script> <!-- Checkbox & Radio Inputs -->
    <script src="${pageContext.request.contextPath}/global/plugins/backstretch/backstretch.min.js"></script> <!-- Background Image -->
    <script src="${pageContext.request.contextPath}/global/plugins/bootstrap-progressbar/bootstrap-progressbar.min.js"></script> <!-- Animated Progress Bar -->
    <script src="${pageContext.request.contextPath}/global/plugins/charts-chartjs/Chart.min.js"></script>
    <script src="${pageContext.request.contextPath}/global/js/builder.js"></script> <!-- Theme Builder -->
    <script src="${pageContext.request.contextPath}/global/js/sidebar_hover.js"></script> <!-- Sidebar on Hover -->
    <script src="${pageContext.request.contextPath}/global/js/application.js"></script> <!-- Main Application Script -->
    <script src="${pageContext.request.contextPath}/global/js/plugins.js"></script> <!-- Main Plugin Initialization Script -->
    <script src="${pageContext.request.contextPath}/global/js/widgets/notes.js"></script> <!-- Notes Widget -->
    <script src="${pageContext.request.contextPath}/global/js/quickview.js"></script> <!-- Chat Script -->
    <!-- BEGIN PAGE SCRIPTS -->
    <script src="${pageContext.request.contextPath}/global/plugins/maps-amcharts/ammap/ammap.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/maps-amcharts/ammap/maps/js/worldLow.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/maps-amcharts/ammap/maps/js/usaLow.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/maps-amcharts/ammap/themes/light.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/maps-amcharts/ammap/maps/js/continentsLow.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/xml2json/xml2json.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/global/plugins/quicksearch/quicksearch.min.js" type="text/javascript"></script>
    <!-- END PAGE SCRIPTS -->
    <script src="${pageContext.request.contextPath}/global/plugins/soap/jquery.soap.js"></script>
    <script src="${pageContext.request.contextPath}/admin/layout3/js/layout.js"></script>
    <script src="${pageContext.request.contextPath}/app/js/app.js"></script>
</body>
</html>
