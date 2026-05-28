import { patch } from '@web/core/utils/patch';
import { useService } from '@web/core/utils/hooks';

import { NavBar } from '@web/webclient/navbar/navbar';

// PATCH: web_responsive already registers its own AppsMenu (a plain Component)
// to NavBar.components. If muk_web_theme registers its AppsMenu (a Dropdown
// subclass with ACTION_MANAGER:UI-UPDATED → close), it overrides web_responsive
// and causes the apps menu to open and immediately close.
// Since navbar.xml is disabled for compatibility with web_responsive, we also
// skip the AppsMenu component override here.

patch(NavBar.prototype, {
	setup() {
        super.setup();
        this.appMenuService = useService('app_menu');
    },
});
