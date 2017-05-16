export class AppServer {

  private server = 'http://103.208.25.28:9999';
  private loginRoute = '/homething/admin/login';
  private devicesRoute = '/homething/admin/devices';
  private addRoute = '/homething/admin/device/add';
  private editRoute = '/homething/admin/device/update';
  private deleteRoute = '/homething/admin/device/delete';

  getServer(): string {
    return this.server;
  }

  getLoginRoute(): string {
    return this.loginRoute;
  }

  getDevicesRoute(): string {
    return this.devicesRoute;
  }

  getAddRoute(): string {
    return this.addRoute;
  }

  getEditRoute(): string {
    return this.editRoute;
  }

  getDeleteRoute(): string {
    return this.deleteRoute;
  }
}
