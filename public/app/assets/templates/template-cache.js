(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/main.html',
    '<div layout="row" flex>\n' +
    '    <md-sidenav layout="column" flex="20" class="md-sidenav-left md-whiteframe-z2"  id="sidebar" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-sm\')"  md-theme="smartTheme">\n' +
    '        <header class="md-whiteframe-2dp">\n' +
    '            <md-toolbar layout="row" ng-init="showMain=false">\n' +
    '                <h3 class="md-toolbar-tools" flex="80" layout="row">\n' +
    '                    <i class="icon house_with_garden_36" flex="20"></i>\n' +
    '                    <span flex>Dashboard</span>\n' +
    '                </h3>\n' +
    '                <md-button aria-label="Open main menu" class="md-icon-button" flex ng-click="showMain=!showMain; showOptions=false">\n' +
    '                    <md-icon  md-font-icon="mdi-apps" class="mdi"></md-icon>\n' +
    '                </md-button>\n' +
    '                <div class="popover-main md-open-menu-container md-whiteframe-z2 md-clickable" ng-class="{\'md-active\':showMain}" ng-if="showMain">\n' +
    '                    <div class="dropdown-caret">\n' +
    '                        <span class="caret-outer"></span>\n' +
    '                        <span class="caret-inner"></span>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                    <div class="popover-main-item" layout="row" flex>\n' +
    '                        <a class="popover-main-link" flex layout="column"  layout-align="space-around center">\n' +
    '                            <md-icon  md-font-icon="mdi-bowling" class="mdi" flex></md-icon>\n' +
    '                            <span flex> Dashboard</span>\n' +
    '\n' +
    '                        </a>\n' +
    '                        <a class="popover-main-link" flex layout="column"  layout-align="space-around center">\n' +
    '\n' +
    '                            <md-icon  md-font-icon="mdi-basecamp" class="mdi" flex></md-icon>\n' +
    '                            <span flex>Zones</span>\n' +
    '                        </a>\n' +
    '                    </div>\n' +
    '                    <div class="popover-main-item" layout="row" flex>\n' +
    '                        <a class="popover-main-link" flex layout="column"  layout-align="space-around center">\n' +
    '                            <md-icon  md-font-icon="mdi-alarm-check" class="mdi" flex></md-icon>\n' +
    '                            <span flex>Tasks</span>\n' +
    '                        </a>\n' +
    '                        <a class="popover-main-link" flex layout="column"  layout-align="space-around center">\n' +
    '                            <md-icon  md-font-icon="mdi-beer" class="mdi" flex></md-icon>\n' +
    '                            <span flex>Magnitudes</span>\n' +
    '                        </a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '            </md-toolbar>\n' +
    '\n' +
    '        </header>\n' +
    '\n' +
    '        <md-content>\n' +
    '            <md-subheader class="md-primary" layout="row" ng-init="showOptions=false" layout-align="center center" ng-click="showOptions=!showOptions; showMain=false">\n' +
    '                <span flex>{{user.email}}\n' +
    '                </span>\n' +
    '                <md-icon md-font-icon="mdi-chevron-down" class="mdi md-primary" flex ></md-icon>\n' +
    '            </md-subheader>\n' +
    '\n' +
    '            <div class="popover-user-options md-open-menu-container md-whiteframe-z2 md-clickable" ng-class="{\'md-active\':showOptions}" ng-if="showOptions">\n' +
    '                <div class="dropdown-caret">\n' +
    '                    <span class="caret-outer"></span>\n' +
    '                    <span class="caret-inner"></span>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div layout="column" layout-align="space-between none" class="popover-content">\n' +
    '                    <a  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '                        <i class="mdi mdi-account-circle" flex="40"></i>\n' +
    '                        <span  flex>Account</span>\n' +
    '\n' +
    '                    </a>\n' +
    '\n' +
    '                    <a  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '                        <i class="mdi mdi-football-helmet" flex="40"></i>\n' +
    '                        <span flex>Invite</span>\n' +
    '\n' +
    '                    </a>\n' +
    '\n' +
    '                    <a  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '                        <i class="mdi mdi-power" flex="40"></i>\n' +
    '                        <span ng-click="logout()" flex>Logout</span>\n' +
    '\n' +
    '                    </a>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '            </div>\n' +
    '        </md-content>\n' +
    '\n' +
    '    </md-sidenav>\n' +
    '\n' +
    '\n' +
    '    <div layout="column" flex id="content">\n' +
    '        <md-content layout="column" flex class="md-padding" ui-view="content">\n' +
    '\n' +
    '        </md-content>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_login/main.html',
    '\n' +
    '<div  layout="row" layout-align="center center" layout-fill id="login-body" md-theme="smartTheme">\n' +
    '\n' +
    '\n' +
    '    <div layout="column" flex-gt-md="35" flex-xs="50" flex-gt-xs="50" layout-padding>\n' +
    '\n' +
    '        <div layout="row" layout-align="center center">\n' +
    '            <h2><i class="icon house_with_garden_72"></i><br>Smart Town Administration</h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-card layout="row" >\n' +
    '            <form name="loginForm" flex layout="column" layout-align="center stretch" layout-padding layout-margin>\n' +
    '                <h3 flex>Log in to your account</h3>\n' +
    '                <md-input-container  class="md-block" flex>\n' +
    '                    <label>Email</label>\n' +
    '\n' +
    '                    <input type="email" required name="email" ng-model="user.email" ng-pattern="/^.+@.+\\..+$/" >\n' +
    '                    <div ng-messages="loginForm.email.$error" multiple md-auto-hide="false" ng-if=\'loginForm.email.$dirty\'>\n' +
    '                        <div ng-message="required">This is required.</div>\n' +
    '                        <div ng-message="pattern">\n' +
    '                            Your email must look like an e-mail address.\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container   class="md-block" flex>\n' +
    '                    <label>Password</label>\n' +
    '\n' +
    '                    <input ng-model="user.password" type="password" name="password" required>\n' +
    '                    <div ng-messages="loginForm.password.$error" md-auto-hide="false" ng-if="loginForm.password.$dirty">\n' +
    '                        <div ng-message="required">This is required.</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container layout-align="center center" flex>\n' +
    '                    <div layout="row" layout-sm="column" layout-margin>\n' +
    '                        <md-button class="md-raised" type="submit" ng-click="login()" flex flex-sm="100" ng>Login</md-button>\n' +
    '\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '            </form>\n' +
    '\n' +
    '        </md-card>\n' +
    '\n' +
    '\n' +
    '        <div layout="row" layout-align="center center">\n' +
    '            <h5><i class="mdi mdi-copyright"></i> Smart Town 2016</h5>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();
