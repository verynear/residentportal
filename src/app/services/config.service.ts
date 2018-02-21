import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private data = {};

  constructor() {
    // customer.betterleasing.com
    // customer.stage.betterleasing.com
    // customer.devdemo.betterleasing.com
    // localhost
    const parts = location.hostname.split('.'),
      site = parts.shift(),
      host = parts.join('.') || 'devdemo.betterleasing.com';
      const branch = host.split('.')[0];

    this.data = {
      api: {
        baseURL: `${location.protocol}//api.${host}/resnet`,
        leasenet: `${location.protocol}//api.${host}/leasenet`,
      },
      customer: {
        subdomain: site,
        host: branch
      },
      environments: ['localhost', 'devdemo', 'stage', 'api']
    };
  }

  get(): any {
    console.log('Data is: ');
    console.log(this.data);
    return this.data;
  }

}
