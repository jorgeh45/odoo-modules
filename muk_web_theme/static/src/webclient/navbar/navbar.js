import { patch } from '@web/core/utils/patch';
import { useService } from '@web/core/utils/hooks';

import { NavBar } from '@web/webclient/navbar/navbar';

// PATCH: web_responsive ya registra su propio AppsMenu (Component simple) en
// NavBar.components. Si muk_web_theme registra el suyo (subclase de Dropdown
// con cierre en ACTION_MANAGER:UI-UPDATED), sobreescribe al de web_responsive
// y el grid de apps se abre y se cierra al instante. Como navbar.xml queda
// desactivado por compatibilidad, aquí también se omite el registro de AppsMenu.

patch(NavBar.prototype, {
	setup() {
        super.setup();
        this.appMenuService = useService('app_menu');
    },
});
